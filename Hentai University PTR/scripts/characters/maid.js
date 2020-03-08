var character = {index: "maid", met: false, fName: "Lena", lName: "Rogers", trust: 0, encountered: false, textEvent: "", textColor: "#CCCCCC", author: "CryptoGreek", artist: "Oreteki18kin"};

//General tutorial stuff:
//writeText("text"); - Writes some plain old text.
//writeSpeech("character", "image", "dialogue") - Writes some dialogue. Leave "image" blank to find the appropriate image and name automatically.

var logbook = { //Logbook details for each character.
	index: "maid", 
	desc: "A woman that works as a certain rich woman's personal maid. Off-work, she's surprising lax for a maid.",
	body: "She's surprisingly pretty fit, even if her outfits tend to hide that.",
	clothes: "She usually wears her maid uniform and, even when wearing casual outfits, she's prefers whites, grays, and blacks.",
	home: "She spends most of her time in-town, running errands for her employer.",
	tags: "Casual Sex, FFM Threesome",
	artist: "Artist: Oreteki18kin",
	author: "Captain Cryptogreek",
};

var newItems = [//Lists the shop items unique to this character
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	//Standard Route
	{index: "maid1", name: "You see a woman in an unusual outfit looking through some items, looking for something.", location: 'shoppingDistrict', time: "MorningEvening", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "odd",},
	{index: "maid2", name: "You can see maid nearby. It looks like she just finished shopping.", location: 'shoppingDistrict', time: "MorningEvening", itemReq: "", trustMin: 20, trustMax: 20, type: "tab", top: 0, left: 0, day: "odd",},
	{index: "maid3", name: "maid is standing near the store entrance, but isn't holding a basket or anything.", location: 'shoppingDistrict', time: "MorningEvening", itemReq: "", trustMin: 21, trustMax: 21, type: "tab", top: 0, left: 0, day: "odd",},
	{index: "maid4", name: "maid seems to have finished shopping and is standing near the cafe.", location: 'shoppingDistrict', time: "MorningEvening", itemReq: "", trustMin: 24, trustMax: 24, type: "tab", top: 0, left: 0, day: "odd",},

	//Maid-First Route
	{index: "maid5", name: "maid is standing near the cafe, softly humming to herself as she looks around.", location: 'shoppingDistrict', time: "MorningEvening", itemReq: "", trustMin: 25, trustMax: 28, type: "tab", top: 0, left: 0, day: "odd",},

	//Mistress-First Route
	//{index: "maidA1", name: "You can see maid standing near a cafe. Based on the bag she's carrying, she must've just finished shopping.", location: 'shoppingDistrict', time: "MorningEvening", itemReq: "", trustMin: 30, trustMax: 30, type: "tab", top: 0, left: 0, day: "odd",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "maid1" : {//Introduce Maid while she's shopping
			writeText("The maid stands out quite a bit as she moves around the shop, her eyes quickly combing the shelves.");
			writeBig("images/maid/profile.jpg","Art by Oreteki18kin");
			writeText("After a few more seconds, she notices you staring.");
			writeSpeech("maid","","May I help you?");
			writeFunction("writeEncounter('maid1a')", "Apologize for staring");
			writeFunction("changeLocation(data.player.location)", "Say 'no' and leave");
			break;
		}
		case "maid1a" : {
			writeSpeech("player","","Sorry, it's just that you don't exactly see a lot of people in maid outfits nowadays.");
			writeText("She smiles wryly.");
			writeSpeech("maid","","That's fair. It's a bit old-fashioned, perhaps, but I think there's some value in that, too.");
			writeText("She reaches forward, grabbing a spray-bottle from the shelf. She rolls it around, reading the back.");
			writeSpeech("maid","","I'm "+fName('maid')+", by the way. "+fName('maid')+" "+lName('maid')+".");
			writeSpeech("player","",data.player.name+" - it's a pleasure to meet you.");
			writeSpeech("maid","","The pleasure is mine, "+data.player.name+".");
			writeText("She puts the bottle into a small basket on the ground, lifting it as she steps past you.");
			writeSpeech("player","","Need any help carrying things?");
			writeText("The thinks for a moment.");
			writeSpeech("maid","","...I have a few more items I need. If you don't mind, of course.");
			writeSpeech("player","","Not at all.");
			writeText("She hands you her basket which... weighs a bit more than you expected. It's packed pretty tightly and efficiently...");
			writeSpeech("player","","Lead the way.");
			writeText("She nods, starting to walk.");
			writeText("...");
			writeText("A while later, after helping "+fName('maid')+" empty the two <i>very</i> well-packed baskets into her car, you shut the trunk and relish the freedom of your hands from the basket-handles.");
			writeText("...Aside from the basket of your stuff, at least.");
			writeSpeech("maid","","Thank you very much for your assistance.");
			writeText(fName('maid')+" bows her head slightly, smiling.");
			writeSpeech("player","","Happy to help. Plus, it was a good reminder to pick up a few things, so it was a win-win.");
			writeSpeech("maid","","Perhaps. Even so, I'll need to think of some way to thank you at a later date.");
			writeText("She moves into the driver's seat, the engine coming to life.");
			writeSpeech("player","","I'd say that's unnecesary, but I get the feeling that's the wrong answer. Instead, I'll just look forward to it.");
			writeText("She laughs.");
			writeSpeech("maid","","You're a smart one. I'll see you later, then.");
			writeText("With that, her car pulls out, leaving you alone.");
			writeFunction("changeLocation(data.player.location)", "Go home");
			data.story[5].trust = 20;
			passTime();
			break;
		}
		case "maid2" : {//Meet Maid in the shopping district again, she invites you over and gives you a titjob while hypno'd
			writeSpeech("maid","","Ah, "+data.player.name+". I was hoping I'd see you before I left.");
			writeSpeech("player","","Sorry to keep you waiting, then. What's up?");
			writeSpeech("maid","","I enjoyed our talk yesterday, and was interested to know if you'd like to chat? I'm headed home now.");
			writeSpeech("player","","Sounds great. Are we walking, or...?");
			writeSpeech("maid","","Driving.")
			writeText("She grins wryly.");
			writeSpeech("maid","","I'm not <i>nearly</i> so cruel as to force you to carry these all the way to park district.");
			writeText("...");
			writeText("The two of your arrive at her place fairly quickly, and putting away her purchases is quick.");
			writeText("You spend most of the time talking about your jobs. She, being a maid, usually handles cleaning her boss's apartment... which, apparently, is a challenge given how large it is.");
			writeText("When you start talking about your own job, the conversation quickly focuses on your... <i>unique methods.</i>");
			writeSpeech("maid","","Hypnosis?");
			writeText("She shakes her head, looking amused.");
			writeSpeech("maid","","And it really works?");
			writeSpeech("player","","Not the way the movies say it does, but yeah. It puts them in a relaxed state of mind, which helps them open up.");
			writeSpeech("maid","","Really? That's all?");
			writeSpeech("player","","...You know, just because some people <i>can</i> make a guy cluck like a chicken doesn't mean that's all it's good for.");
			writeText("She laughs, shaking her head.");
			writeSpeech("maid","","I really meant no offense, it's just... It sounds a bit silly, I suppose since I don't know much about it.");
			writeText("You roll your pendant around between your fingers.");
			writeSpeech("player","","Well, we could always try it here.");
			writeSpeech("maid","","Oh? I would've thought it wouldn't work on skeptics.");
			writeSpeech("player","","The clucking part, sure. But just helping you relax a little? <i>Trivial.</i>");
			writeSpeech("maid","","...Well, I suppose I could always use a bit of relaxation.");
			writeText("You grin.");
			writeSpeech("player","","Then let's start with just watching my pendant, and listening to my voice...");
			writeText("...");
			writeText("Her amused expression quickly gives way to a relaxed one and, in what you consider record time, her eyes glaze over.");
			writeText("You actually have to stop and check if she's really under or just messing with you, but it seems like she just went into trance that easily.");
			writeSpeech("player","","Huh. I know some people are easier to put under then others, but... Just how susceptible are you...?");
			writeText("Scientific curiosity spurs you forward as you look her over.");
			writeSpeech("player","","...Is that how you normally dress at home?");
			writeText("She slowly, hazily shakes her head.");
			writeSpeech("player","","Hm. Well, why don't you make yourself a bit more comfortable, then?");
			writeText("You change your tone, leaning in a bit closer.");
			writeSpeech("player","","After all, you feel <i>completely relaxed</i> around me, don't you? It's only <i>natural</i> that you'd be as relaxed as if you were alone.");
			writeText("A pause... then she stands. The haze fades from her eyes quickly.");
			writeText("She clearly relaxes her posture, taking a sharp breath in.");
			writeSpeech("maid","","Sorry, but could you give me a sec? Gotta change.");
			writeText("She casually kicks her shoes off, barely paying attention to where they land as she walks off.");
			writeText("...Guess she's not as formal when alone, then?");
			writeText("After a minute or so, you can hear her walking back into the room, accompanied by the hiss of a can as she cracks open a beer.");
			writeText("She hops the side of the couch easily, thumping onto it with a relaxed sigh.");
			writeText("Turning to face her, you see...");
			writeBig("images/maid/2-1.jpg", "Art by Oreteki18kin");
			writeSpeech("player","","You, uh... really made yourself comfortable.");
			writeSpeech("maid","","Yup.");
			writeText("She takes a slow sip, before offering it to you. You turn it down - better to stay sober while hypnotizing someone.");
			writeSpeech("maid","","I love my job, but the outfit can be a bit stuffy, y'know? Plus, I can never be sure when the boss might grab my ass or lift my skirt or something, so it's not like I can skimp on the prepwork.");
			writeSpeech("player","","That sounds like sexual harrassment.");
			writeSpeech("maid","","It would be, but she and I are fuck-buddies. Have been for most of a decade, actually.");
			writeSpeech("player","","Oh. You're a lesbian?");
			writeSpeech("maid","","Nah, we're almost exclusively into men. We just make an exception for each other.");
			writeText("She takes a deep drink from her beer.");
			writeSpeech("maid","","Plus, since I get to dictate her diet, she's an absolute <i>treat</i> to eat out. Had to learn some two-dozen recipes for it, but her taste is worth it. Plus, it's not like she's complaining about the extra enthusiasm, y'know?");
			writeText("...Well, fuck. You're now even more turned on than before.");
			writeSpeech("player","","...It's getting hot in here.");
			writeText(fName('maid')+" frowns.");
			writeSpeech("maid","","Is it? I can always turn on the air condi-");
			writeSpeech("player","","It's broken, <i>remember?</i>");
			writeText("She pauses, confusion playing across her face.");
			writeSpeech("maid","","...Right. I guess I forgot.");
			writeSpeech("player","","And given that it's hot, you should-");
			writeText("Before you even finish, she pulls open the front of her robe, her tits spilling out as she lets out a sigh of relief. She then turns to you.");
			writeSpeech("maid","","Sorry, I missed that. What's up?");
			writeSpeech("player","","...I was just saying I was going to take off some clothes, since that's the <i>natural</i> response to this heat.");
			writeSpeech("maid","","Naturally.");
			writeText("She takes another long drink from the beer, which has to be nearing empty at this point.");
			writeFunction("writeEvent('maid1')", "Pull down your pants");
			raiseTrust('maid', 1);
			passTime();
			break;
		}
		case "maid3" : {
			writeSpeech("player","","Not shopping today?");
			writeText("maidF turns and smiles to you.");
			writeSpeech("maid","","Not today, no. I had some other business to attend to here, but thought you might come by.");
			writeText("Huh, her tone is back to being formal... Did the hypnosis wear off, or is she too uncomfortable in public...?");
			writeSpeech("player","","You weren't waiting for very long, I hope.");
			writeSpeech("maid","","Not at all, though I wouldn't have minded if I had. I'd like to speak with you about something rather important. Do you mind if we take this conversation back to my place?");
			writeFunction("writeEncounter('maid3a')", "Lead the way");
			break;
		}
		case "maid3a" : {
			writeSpeech("player","","If it's important, then I can <i>make</i> time.");
			writeText("She nods, the two of you walking to her car...");
			writeText("...");
			//important thing is the video she took, she isn't sure why she did it and wants to apologize. She doesn't normally act like that at all, and doesn't want you to think of her as that sort of woman.
			writeText("maidF takes a slow, deep breath, sitting up on the couch.");
			writeSpeech("maid","","...I wanted to apologize for my behavior the other day.");
			writeText("Her hands rub against each other a bit, toying with the hem of her outfit's skirt.");
			writeSpeech("maid","","Everything got a bit hazy, but I rewatched the video, and... well...");
			writeText("Her face flushes deeply.");
			writeSpeech("maid","","I just wanted you to know that that wasn't... how things normally go. I'm usually far more controlled, and doing it with someone I barely know is completely out-of-character.");
			writeText("She keeps breathing deeply, but is still clearly uncomfortable.");
			writeText("This seems like a delicate situation...");
			writeFunction("writeEncounter('maid3aa')", "Tell her you never assumed it <i>was</i> normal");
			writeFunction("writeEncounter('maid3ab')", "Try hypnotizing her again");
			break;
		}
		case "maid3aa" : {
			if(checkTrust('maid') == 21)
				setTrust('maid',22);
			writeSpeech("player","","I never assumed that <i>was</i> normal. I mean, do you think that sort of thing is normal for <i>me?</i>");
			writeText("It actually is, but...");
			writeSpeech("maid","","Well... No, I suppose not. But it was just so...");
			writeSpeech("player","","Different?");
			writeText("She nods slowly.");
			writeSpeech("player","","I get that. It probably feels weird to start doing things like that so quickly, but it's not the <i>speed</i> of it that matters.");
			writeText("You shift your body forward, so that she's looking down just the smallest bit to meet your eyes.");
			writeSpeech("player","","It's whether you're <i>comfortable</i> with it. And if you weren't, or aren't, then we can just take a step back and talk about it.");
			writeText("A second of silence passes but, as it does, she starts to smile.");
			writeSpeech("maid","","...Thank you, playerF. I can see how you became a guidance counselor.");
			writeSpeech("player","","No problem. It's important to me that <i>you</i> want this just as much as I do.");
			writeText("For a certain definition of <b>want</b>, of course...");
			writeSpeech("player","","That's why I want to know - are you comfortable with this?");
			writeSpeech("maid","","...I think I am, yes. It feels weird, but not bad.");
			writeSpeech("player","","Then just remember that. It's important to hold onto the important things and not let the details distract you <i>too</i> much.");
			writeText("She smiles, nodding once.");
			writeSpeech("maid","","I've been told similar things before about worrying too much. Anyway, thank you for taking the time to talk to me, but... Could I have some time to think about this?");
			writeSpeech("player","","Of course. Happy to help out. When you're ready, you <i>do</i> have my number.");
			writeText("She flushes a bit, but nods.");
			writeSpeech("maid","","I'll talk to you later, then.");
			writeFunction("changeLocation(data.player.location)", "Go home");
			break;
		}
		case "maid3ab" : {
			if(checkTrust('maid') == 21)
				setTrust('maid',23);
			writeText("Seems like it's time for a little damage control...");
			writeSpeech("player","","Listen, maidF.");
			writeText("She looks at you quietly.");
			writeSpeech("player","","I think you should just take a second to slow down, and just <i>breathe</i>. It's easier to talk about things like this if you take a moment to clear your head.");
			writeSpeech("maid","","Yeah. Yeah, that sounds right...");
			writeText("Her breathing slows down, her body starting to relax just a bit as her chest raises and drops slowly...");
			writeText("After a few moments, she seems relaxed enough to start listening.");
			writeSpeech("player","","maidF?");
			writeSpeech("maid","","Mm?");
			writeText("Her eyes start to slowly open.");
			writeSpeech("player","","Are you feeling a bit more relaxed?");
			writeSpeech("maid","","Yes... I feel a bit better now.");
			writeText("Her hands separate, sitting gently on her thighs.");
			writeSpeech("maid","","Thank you. I think I'm ready, now.");
			writeText("Hm... Not enough to go under, though...");
			writeSpeech("player","","Alright. How would you like to start?");
			writeSpeech("maid","","In short, I was worried that doing <i>that</i> with you so soon after we met might have made me seem... <i>loose.</i>");
			writeSpeech("player","","I honestly never thought that was the case.");
			writeText("For obvious reasons...");
			writeText("She smiles and nods.");
			writeSpeech("maid","","Thank you for saying that, but I still felt like it.");
			writeText("You take a second to think over your next words carefully...");
			writeSpeech("player","","Well... I think that you should really just ask if you were, and are, comfortable with what happened. Not the speed, but the actions. <i>Were</i> you comfortable?");
			writeText("She nods, not hesitating.");
			writeSpeech("maid","","Absolutely.");
			writeText("Then, she pauses. She seems like she surprised herself with how fast she responded, but-");
			writeSpeech("player","","And are you comfortable right now, talking to me?");
			writeText("She nods again, your efforts paying off as you see the faint hint of her eyes starting to glaze over.");
			writeSpeech("maid","","Y-Yeah...");
			writeSpeech("player","","And do you <i>trust</i> me?");
			writeText("This time, she just slowly nods.");
			writeSpeech("player","","Then just listen to what I say...");
			writeText("You move closer to her, lowering your voice a bit and gently placing a hand on her knee.");
			writeSpeech("player","","...Don't worry so much about going too fast or too slow. Do what you're comfortable with and be confident in what you do. Just remember, though:");
			writeText("You lean in to whisper into her ear.");
			writeSpeech("player","","You're <i>always</i> comfortable around me. You said you were already, right...?");
			writeText("Her body shivers slightly, her face flushing as she nods.");
			writeSpeech("player","","Then, when you wake up, you'll just feel relaxed. Just like you said, you're comfortable, and that's all that matters. Believe in me <i>and</i> you, maidF... and now, <i><b>focus.</b></i>");
			writeText("The haze vanishes suddenly, her eyes settling on your face as she smiles widely.");
			writeSpeech("maid","","Ah, sorry. I must have spaced out...");
			writeText("Despite how close your faces are, she seems relaxed. It seems to be working, then...");
			writeText("It's probably best not to push it too hard today, though, considering how the last one went.");
			writeSpeech("player","","It's fine. As long as you're feeling better, I'm happy to have helped.");
			writeText("She nods once, before leaning forward.");
			writeText("maidF's lips press gently against your cheek.");
			writeSpeech("maid","","You're a sweetheart, playerF.");
			writeText("That's a Hell of a test of will, but...");
			writeSpeech("player","","I've gotta head out.");
			writeText("She pauses. You don't want to push the suggestions too hard too quickly, so...");
			writeSpeech("player","","Like I said, I can make time, but I do have some business to take care of. But how about next time, we get <i>comfortable?</i>");
			writeSpeech("maid","","I'd like that. See you then?");
			writeSpeech("player","","Of course.");
			writeFunction("changeLocation(data.player.location)", "Go home");
			break;
		}
		case "maid4" : {
			passTime();
			setTrust('maid',25);
			writeText("You approach her, waving casually as she spots you.");
			if(checkFlag('maid','mistressSexTape')){
				writeText("She smiles gently, if a bit nervously, at you.");
				writeSpeech("maid","","playerF. It's good to see you.");
				writeSpeech("player","","It's good to see you too. You wanted to talk about the video...?");
				writeText("She nods firmly, gesturing to the cafe doors.");
				writeSpeech("maid","","I come here fairly often, and I thought it might be a good place to speak, as long as we're careful about our volume.");
				writeText("She steps inside, her eyes flicking back to you for a moment as you follow. She quickly leads you to a table a bit further back than most, sitting down.");
				writeText("You can see a couple of patrons closer to the front, but it seems like fewer people use the back...");
				writeSpeech("maid","","...So. You and mistressF are involved.");
				writeText("Her lips are pursed slightly as she sits with perfect posture.");
				writeSpeech("player","","I'd say that's pretty accurate, yes. You mentioned that you didn't see that as a problem?");
				writeText("She shakes her head, staying quiet for a moment.");
				writeText("Then...");
				writeSpeech("maid","","I... don't know how to talk about this.");
				writeText("Her voice is unsure now, her eyes going down to the table.");
				writeSpeech("maid","","I feel as though this is a subject that requires a great deal of openness, but...");
				writeSpeech("player","","But you feel embarrassed?");
				writeText("She slowly nods.");
				if(checkFlag('maid','hypnoTalk')){
					writeText("You pull your pendant out carefully, her eyes settling on it as you do.");
					writeSpeech("maid","","...Are you sure that now is a good time?");
					writeSpeech("player","","To swing it around and put you into trance, no. But I told you before that just helping people relax is easy, didn't I?");
					writeText("She nods, before you place the pendant on the table in front of her.");
					writeSpeech("player","","That pendant helped you feel relaxed before. It won't be <i>as</i> helpful in your hands, but it'll still work somewhat well.");
					writeText("As long as she believes in it, at least.");
					writeSpeech("maid","","...Alright. You're the expert, after all.");
					writeText("She grabs onto it and holds it in her hand for a moment, before sliding it onto her neck.");
					writeSpeech("maid","","...Ah. I feel warm?");
					writeSpeech("player","","That's a sign that it's working.");
					writeText("Probably.");
				}
				else{
					writeSpeech("player","","Well... I can't really just magic your discomfort away without spinning my pendant around, but I can say this.");
					writeText("You lean forward and give her a reassuring smile.");
					writeSpeech("player","","I don't judge. If anything, <i>I'm</i> the one who should be embarrassed, since I was in <i>both</i> the videos.");
					writeText("Her face reddens as she obviously recalls her own little show.");
					writeSpeech("maid","","That's true. It's just...");
					writeText("She takes a slow, deep breath.");
				}
				writeSpeech("maid","","I... enjoyed the video.");
				writeText("You see her squirm a bit in her chair.");
				writeSpeech("maid","","I <i>really</i> enjoyed it, especially the ending. But if that were all, I wouldn't be having trouble speaking. The truth is...");
				writeSpeech("maid","","...when I got to mistressF's place, she was waiting for me on the couch. That was pretty normal for her - when she's feeling pent-up, she'll welcome me home either wearing something lewd, or nothing at all.");
				writeSpeech("maid","","She played the video while I...");
				writeText("She slowly looks up from the table, making eye-contact as she steels herself.");
				writeSpeech("maid","","I licked your cum out of her while watching you creampie her, and I <i>loved it</i>. mistressF and I have slept together many times, but that was my first time doing something so... so...");
				writeSpeech("player","","Perverted.");
				writeSpeech("maid","","...Yes. She said that she'd never felt me being so enthusiastic; she even had me save some in my mouth, so we could share.");
				writeSpeech("maid","","She fingered me while we were sharing your cum, and I've never cum so hard in my <i>life.</i> I'm...");
				writeText("She bites her lip.");
				writeSpeech("maid","","I've always been mistressF's slutty maid. But we talked about it, and... I want to be <i>yours,</i> too. If you're fine with that, I mean.");
				writeSpeech("player","","I'm fine with it. <i>Very</i> fine with it. The only problem I can see us having is that we need to sit at this table for a few more minutes.");
				writeSpeech("maid","","...I'm glad. But that's weirdly specific-");
				writeSpeech("player","","You said you come here often, so I don't want to show the staff my erection.");
				writeText("She flushes a deep scarlet, before smiling wider than you've seen before, a shine in her eyes as she leans forward.");
				writeSpeech("maid","","If you enjoyed me talking about it, I'm sure you'd enjoy <i>watching</i> even more. The sight of me teasing open mistressF, using my tongue to get her <i>nice and-</i>");
				writeSpeech("???","images/cafedark/cafedark.jpg","maidF!");
				writeText("There's a loud bang as she jumps enough for her hips to hit the table, her eyes going wide as a waitress steps towards you both.");
				writeSpeech("???","images/cafedark/cafedark.jpg","Sorry, I totally missed you there! Are you ordering the-");
				writeSpeech("maid","","<b>No.</b>");
				writeText("The girl flinches, but maidF takes a slow, deep breath, before smiling up at her.");
				writeSpeech("maid","","Sorry, I hit my... knee. Just... two coffees.");
				writeText("The girl's eyes linger on you for a moment, before a wry grin spreads across her face.");
				writeSpeech("???","images/cafedark/cafedark.jpg","Of course. I'll be back in a bit~!");
				writeText("She darts off quickly as maidF's hands finally relax their deathgrip on the table's edge.");
				writeSpeech("player","","You, uh... You okay?");
				writeSpeech("maid","","...I have no idea what part of almost getting caught seems to be a turn on for mistressF, but it is <i>not</i> for me.");
				writeSpeech("player","","I meant your hips.");
				writeSpeech("maid","","Oh. I didn't hit the table <i>that</i> hard. Though, um... I think after this coffee, I'm going to call it an early day.");
				writeSpeech("player","","Really?");
				writeText("She nods.");
				writeSpeech("maid","","It's for a good reason, though. After all... mistressF and I have a <i>lot</i> to talk about. I apologize about making you wait, especially after teasing you like that...");
				writeSpeech("player","","It's fine. I'll just get back at you <i>next time.</i>");
				writeSpeech("maid","","...I can see why you two get along.");
				writeSpeech("player","","Thank you.");
				writeText("She just smiles and rolls her eyes as you hear the waitress approaching.");
				writeFunction("changeLocation(data.player.location)", "Enjoy the coffee and leave");
				writeFunction("writeEncounter('maid4a')", "Take a nice, long look at the waitress");
			}
			else{
				writeText("She smiles gently at you.");
				writeSpeech("maid","","playerF. It's good to see you.");
				writeSpeech("player","","It's good to see you too. Finished shopping already?");
				writeText("She nods firmly, gesturing to the cafe doors.");
				writeSpeech("maid","","I come here fairly often, and I thought it might be a good place to speak, as long as we're careful about our volume.");
				writeText("She steps inside, her eyes flicking back to you for a moment as you follow. She quickly leads you to a table a bit further back than most, sitting down.");
				writeText("You can see a couple of patrons closer to the front, but it seems like fewer people use the back...");
				if(checkFlag('maid','schoolDays')){
					writeSpeech("maid","","So... How are you? Everything going well at the University?");
					writeSpeech("player","","Pretty well, yeah. Though it's only made me more curious about your '<i>wild days</i>'...");
				}
				else{
					writeSpeech("maid","","So... How are you? Everything going well at the University? I recall my own days as a student being filled with quite a bit of chaos, and you must have to deal with a lot of them.");
					writeSpeech("player","","Some of the students aren't too happy about the counseling, but the ones that give it a try tend to come out better for it. Just having a chance to really relax can do wonders for a person. Though...");
					writeText("You lean forward, grinning at her.");
					writeSpeech("player","","What's this about a chaotic student-life? No offense, but you don't seem like the type to raise Hell.");
				}
				writeText("She smiles, shaking her head.");
				writeSpeech("maid","","Well, I wasn't <i>really</i> the wild one. It was the woman I shared a a dorm-room with that was the <i>real</i> hellion... Though, I admit to having helped organize her parties.");
				writeText("Her eyes shut for a second, her smile widening as she laughs lightly.");
				writeSpeech("maid","","God, I remember one of our professors getting absolutely <i>plastered.</i> There was even a rumor that she woke up in a student's bed the next morning, though people stopped spreading <i>that</i> one pretty quickly.");
				writeSpeech("player","","Sounds like you had a pretty great time. Do you and this 'hellion' stay in touch?");
				writeSpeech("maid","","...Sort of, but not really. I think it's been a few months since we spoke, actually. Our schedules don't exactly line up.");
				writeSpeech("player","","Ah... Well, if you don't mind some advice from a counselor, you could always try calling her up some time. It might be a little inconvenient schedule-wise, but who knows - maybe you'll have a great time talking about your time as students.");
				writeText("She nods thoughtfully.");
				writeSpeech("maid","","Mm. I might just do that... <i>playerT Counselor.</i>");
				writeText("She smirks teasingly, leaning forward a bit herself... only for you both to hear footsteps approaching.");
				writeSpeech("???","images/cafedark/cafedark.jpg","maidF!");
				writeText("A waitress bounds over with a grin as maidF sits up a bit straighter. The dark-haired girl looks you over for a moment, before smirking wryly.");
				writeSpeech("???","images/cafedark/cafedark.jpg","Sorry about that, I missed you two coming in.");
				writeSpeech("maid","","It's fine - we weren't waiting long. For now, just two coffees...?");
				writeText("She looks at you for a moment, and you give a slight shrug and a nod.");
				writeSpeech("maid","","Two coffees.");
				writeText("The waitress nods, looking over the both of you.");
				writeSpeech("???","images/cafedark/cafedark.jpg","I'll be back with that in just a minute - sorry to interrupt you two~!");
				writeText("maidF blushes for a second as the woman bounces off, her skirt going almost indecently high with each step.");
				writeSpeech("player","","She seems nice.");
				writeSpeech("maid","","Quite. A bit energetic, and I think she's a jogger in her free time. I've run into her on more than one occasion.");
				writeSpeech("maid","","...Though, to be frank, there's actually someone else I wanted to talk to you about. Specifically, my best friend and employer.");
				writeText("She takes a moment to fish out her wallet, pulling out a picture and handing it to you.");
				writeBig("images/mistress/profile.jpg", "Art by Oreteki18kin");
				if(checkTrust('mistress') == 40){
					addFlag('maid','first');
					addFlag('maid','mistress40');
					writeSpeech("player","","...Anna?");
					writeText("maidF pauses.");
					writeSpeech("maid","","You know her?");
					writeSpeech("player","","Not really. I met her in the park once - she said she got a little lost and ended up on a path that was pretty out of the way.");
					writeText("For some reason, maidF starts blushing deeply.");
					writeSpeech("maid","","Ah. Yes, that... sounds like her. If that's the case, I'd suggest seeing her again. I'm not sure that I should be the one to explain that.");
					writeText("...Explain what...?");
					writeSpeech("maid","","Never mind. I was going to introduce you two, but if you have met, then that's probably unnecessary. Just ask her how she got lost - it'll make sense after.");
					writeSpeech("player","","Well... Alright. And that was what you wanted to talk about?");
					writeText("She pauses.");
					writeSpeech("maid","","Sort of. We were talking with each other and, to be rather frank about it...");
					writeText("She leans forward, lowering her voice a bit.");
					writeSpeech("maid","","We've been friends with benefits for years. However, we've been talking recently about certain... <i>things.</i>");
					writeSpeech("player","","You have my attention.");
					writeText("She takes a moment to collect herself, visibly relaxing as she leans forward.");
					writeSpeech("maid","","Namely that she'd like to spice things up with a cock that <i>isn't</i> made of plastic.");
					writeSpeech("player","","...and now, you have my erection. But just to be clear - you wanted to talk with me today... about inviting me to a threesome.");
					writeSpeech("maid","","Yes.");
					writeSpeech("player","","...Huh. I mean, not what I was expecting, but I'd have to be an idiot to turn that down.");
					writeText("Her expression brightens.");
					writeSpeech("maid","","Wonderful! I'll talk to her about it tomorrow. Believe me, you will absolutely <i>adore</i> what she can do with her-");
					writeSpeech("???","images/cafedark/cafedark.jpg","Two coffees-!");
					writeText("There's a loud bang as maidF jumps enough for her hips to hit the table, her eyes going wide as the waitress steps towards you both.");
					writeText("A thick silence reigns for a moment as maidF bites her lip gently.");
					writeSpeech("???","images/cafedark/cafedark.jpg","...Are you okay?");
					writeSpeech("maid","","<i><b>Fine, thank you.</b></i>");
					writeText("Taking a slow, deep breath, maidF collects herself and smiles gently.");
					writeSpeech("maid","","It's fine, just a bit of bad timing. Not your fault at all.");
					writeSpeech("???","images/cafedark/cafedark.jpg","...Okay. I'll just leave you to it.");
					writeText("She moves to help some of the customers closer to the entrance as maidF slowly sighs.");
					writeSpeech("maid","","I just don't know what she sees in this...");
					writeText("Shaking her head, she refocuses on you.");
					writeSpeech("maid",""," I probably could've chosen a better place for this. Either way, we can continue after you talk to mistressF. She's been quite busy lately, though, so I'm not sure when she'll be available.");
					writeSpeech("player","","Alright, I'll keept that in mind..");
					writeText("You grab your coffee, sipping at it while you engage maidF in some small talk...");
					writeText("When you finish talking and drinking, with maidF brooking exactly no argument on who was paying, you lean back a bit.");
					writeText("Everything seems fine, though your eyes do drift a bit to the waitress...");
					writeFunction("changeLocation(data.player.location)", "Finish up and leave");
					writeFunction("writeEncounter('maid4a')", "Admire her a little bit");
				}
				else if(checkTrust('mistress') == 41 || checkTrust('mistress') == 43){
					setTrust('mistress',45);
					addFlag('maid','first');
					writeSpeech("player","","...Anna?");
					writeText("maidF pauses.");
					writeSpeech("maid","","You know her?");
					writeSpeech("player","","...You could say that.");
					writeText("There's a moment of silence, before...");
					writeSpeech("maid","","Oh my god. That was <i>your</i> cum, wasn't it? You're the one she brought home.");
					writeSpeech("player","","...I really thought we cleaned it all up...");
					if(checkTrust('mistress') == 41){
						writeSpeech("maid","","You got most of it. But seeing as I'm a professional, I-");
						writeText("She pauses.");
						writeSpeech("maid","","That's besides the point. You two really...?");
					}
					else{
						writeSpeech("maid","","You cleaned most of it, but-");
						writeText("Something seems to click in her head, her face rapidly going red.");
						writeSpeech("maid","","Oh. Oh, you- you were the one that...");
						writeText("She brings a finger to her lips, her eyes wide.");
						writeSpeech("maid","","...Oh wow.");
						writeSpeech("player","","I am feeling <i>very</i> out of the loop right now.");
						writeSpeech("maid","","S-Sorry, I just wasn't expecting... You two are really <i>involved?</i>");
					}
					writeText("Your hand reflexively touches the pendant in your pocket.");
					writeSpeech("player","","Yes. I didn't realize you two knew each other; if that's a problem-");
					writeSpeech("maid","","N-No!");
					writeText("Her voice clearly came out louder as intended as she freezes, eyes darting around for a second... before relaxing a bit.");
					writeSpeech("maid","","It's not a problem, no. I... actually planned on introducing you to her. I-If you were fine with it, that is. She's talked about being interested in...");
					writeText("She leans forward, lowering her voice.");
					writeSpeech("maid","","...in <i>sharing a cock</i> between us.");
					writeSpeech("player","","You wanted to meet me here... to invite me to a threesome?");
					writeText("maidF nods, sitting up again.");
					writeSpeech("player","","...Huh. I mean, not what I was expecting, but I'd have to be an idiot to turn that down.");
					writeText("Her expression brightens.");
					writeSpeech("maid","","Wonderful! I'll talk to her about it tomorrow. Believe me, you will absolutely <i>adore</i> what she can do with her-");
					writeSpeech("???","images/cafedark/cafedark.jpg","Two coffees-!");
					writeText("There's a loud bang as maidF jumps enough for her hips to hit the table, her eyes going wide as the waitress steps towards you both.");
					writeText("A thick silence reigns for a moment as maidF bites her lip gently.");
					writeSpeech("???","images/cafedark/cafedark.jpg","...Are you okay?");
					writeSpeech("maid","","<i><b>Fine, thank you.</b></i>");
					writeText("Taking a slow, deep breath, maidF collects herself and smiles gently.");
					writeSpeech("maid","","It's fine, just a bit of bad timing. Not your fault at all.");
					writeSpeech("???","images/cafedark/cafedark.jpg","...Okay. I'll just leave you to it.");
					writeText("She moves to help some of the customers closer to the entrance as maidF slowly sighs.");
					writeSpeech("maid","","...I have no idea what part of almost getting caught seems to be a turn on for mistressF, but it is <i>not</i> for me.");
					writeSpeech("player","","Ah. Well, everyone's a little different, I guess.");
					writeSpeech("maid","","Indeed. I probably could've chosen a better place for this... but we can continue after I speak with mistressF.");
					writeSpeech("player","","That's a good idea.");
					writeText("You grab your coffee, sipping at it while you engage maidF in some small talk...");
					writeText("...");
					writeText("When you finish talking and drinking, with maidF brooking exactly no argument on who was paying, you lean back a bit.");
					writeText("Everything seems fine, though your eyes do drift a bit to the waitress...");
					writeFunction("changeLocation(data.player.location)", "Finish up and leave");
					writeFunction("writeEncounter('maid4a')", "Admire her a little bit");
				}
				else{
					setTrust('mistress',55);
					writeSpeech("maid","","This is mistressF mistressL. We've been friends since college, and... to be frank, we're not exactly <i>unfamiliar</i> with each other.");
					writeSpeech("player","","...I feel like you're implying something, but I also feel like it would be rude to assume.");
					writeSpeech("maid","","We've been friends with benefits for years. However, we've been talking recently about certain... <i>things.</i>");
					writeSpeech("player","","You have my attention.");
					writeText("She takes a moment to collect herself, visibly relaxing as she leans forward.");
					writeSpeech("maid","","Namely that she'd like to spice things up with a cock that <i>isn't</i> made of plastic.");
					writeSpeech("player","","...and now, you have my erection. But just to be clear - you wanted to talk with me today... about inviting me to a threesome.");
					writeSpeech("maid","","Yes.");
					writeSpeech("player","","...Huh. I mean, not what I was expecting, but I'd have to be an idiot to turn that down.");
					writeText("Her expression brightens.");
					writeSpeech("maid","","Wonderful! I'll talk to her about it tomorrow. Believe me, you will absolutely <i>adore</i> what she can do with her-");
					writeSpeech("???","images/cafedark/cafedark.jpg","Two coffees-!");
					writeText("There's a loud bang as maidF jumps enough for her hips to hit the table, her eyes going wide as the waitress steps towards you both.");
					writeText("A thick silence reigns for a moment as maidF bites her lip gently.");
					writeSpeech("???","images/cafedark/cafedark.jpg","...Are you okay?");
					writeSpeech("maid","","<i><b>Fine, thank you.</b></i>");
					writeText("Taking a slow, deep breath, maidF collects herself and smiles gently.");
					writeSpeech("maid","","It's fine, just a bit of bad timing. Not your fault at all.");
					writeSpeech("???","images/cafedark/cafedark.jpg","...Okay. I'll just leave you to it.");
					writeText("She moves to help some of the customers closer to the entrance as maidF slowly sighs.");
					writeSpeech("maid","","...I have no idea what part of almost getting caught seems to be a turn on for mistressF, but it is <i>not</i> for me.");
					writeSpeech("player","","Ah. Well, everyone's a little different, I guess.");
					writeSpeech("maid","","Indeed. I probably could've chosen a better place for this... but we can continue after I speak with mistressF.");
					writeSpeech("player","","That's a good idea.");
					writeText("You grab your coffee, sipping at it while you engage maidF in some small talk...");
					writeText("...");
					writeText("When you finish talking and drinking, with maidF brooking exactly no argument on who was paying, you lean back a bit.");
					writeText("Everything seems fine, though your eyes do drift a bit to the waitress...");
					writeFunction("changeLocation(data.player.location)", "Finish up and leave");
					writeFunction("writeEncounter('maid4a')", "Admire her a little bit");
				}
			}
			break;
		}
		case "maid4a" : {
			addFlag('maid','cafeDark');
			writeText("After she sets down your coffee, you take a moment to look over her.");
			writeBig("images/cafedark/profile.jpg","Art by Oreteki18kin");
			writeText("Nice.");
			writeText("In the future, you might be able to come back here. For now, though...");
			if(checkFlag('maid','first')){
				writeText("You let maidF finish up as the waitress walks away, her skirt bouncing <b>almost </b>high enough to flash you with each step.");
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
			else{
				writeText("You take a sip as you watch her walk away, her skirt bouncing almost indecently high as she steps.");
				writeText("...This is a damn fine cup of coffee.");
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
			break;
		}
		case "maid5" : {
			//IN PROGRESS, IGNORE ME
			if(checkTrust('maid') == 25){
				setTrust('maid',26);
				writeSpeech("player","","Hiya. Did I keep you waiting?");
				writeText("She smiles as she shakes her head.");
				writeSpeech("maid","","Not at all. You have quite the remarkable tendency to arrive just as I'm finishing up, playerF.");
				writeSpeech("player","","The side-effect of a well-coordinated schedule, I guess.");
				if(checkTrust('mistress') == 55 || checkTrust('mistress') == 45 || checkTrust('mistress') == 40 || checkTrust('mistress') == 50){
					writeSpeech("maid","","It seems so. I, um...");
					writeText("Her tone lowers a bit, taking a step closer to you.");
					writeSpeech("maid","","I don't suppose you've talked to mistressF about... what we discussed?");
					writeSpeech("player","","Not yet. My schedule's been a bit busy lately.");
					writeText("She nods, smiling gently.");
					writeSpeech("maid","","I understand. mistressF said she might be busy for a while too - a shame, but an unavoidable one.");
					//writeSpeech("maid","","Of course, of course. I don't mean to sound impatient or anything, I'm just... I'd be lying if I said the thought didn't excite me.");
					writeText("She thinks for a moment.");
					writeSpeech("maid","","I'm not sure when she'll be available again, but I do know that she likes to relax in the park, so you might find her there when her schedule clears up.");
					//writeSpeech("maid","","If you're ever looking for her, she does enjoy her walks in the park. You should be able to find her there on most days that I'm busy.");
					writeSpeech("player","","I'll keep that in mind. Though, in the meantime, why don't we take some time to relax between the two of us?");
					writeText("maidF shifts in place for a moment, looking a bit unsure.");
					writeSpeech("maid","","Well, mistressF did say it was fine, but I'm not sure about doing... <i>that</i> before you speak with her.");
					writeFunction("writeEncounter('maid5a')", "\"If mistressF's fine with it, what's the problem?\"");
					writeFunction("changeLocation(data.player.location)", "\"I'll come back after talking to mistressF.\"");
				}
			}
			else{
				writeSpeech("maid","","Ah, playerF! You're doing well today, I hope?");
				writeSpeech("player","","Yup. Though, I haven't found the time to talk to mistressF yet.");
				writeText("She nods understandingly.");
				writeSpeech("maid","","She's been quite busy lately, so I'm not surprised. She's surprisingly diligent at times like these.");
				//writeSpeech("maid","","Whenever you find the time is perfectly alright. Was there something you wanted to talk about?");
				if(checkFlag('maid','fuck55'))
					writeFunction("writeEncounter('maid5a')", "\"In the meantime, how about we head to your place again?\"");
				else
					writeFunction("writeEncounter('maid5a')", "\"You mentioned that mistressF was fine with us, so...\"");
				writeFunction("changeLocation(data.player.location)", "\"I'll come back after talking to mistressF.\"");
			}
			break;
		}
		case "maid5a" : {
			passTime();
			if(checkTrust('maid') == 25){
				writeSpeech("player","","mistressF said that there's no problem with it, right?");
				writeText("maidF slowly nods.");
				writeSpeech("maid","","She said that she didn't want to interrupt our 'thing' for her own pleasure, so we should \"have at it\".");
				writeText("You step in a bit closer.");
				writeSpeech("player","","So, it's really <i>your</i> choice, then. If you're not comfortable with doing it again before I talk to her, I'm fine with waiting.");
				writeSpeech("maid","","Ah, it's not that I'm uncomfortable!");
				writeText("She pauses, a little embarrassed.");
				writeSpeech("maid","","I suppose I just wanted you to know that she was okay with it, and couldn't think of a better way to phrase it...?");
				writeSpeech("player","","I can understand that. But, if it's what you want, and everyone's okay with it... What's got you hesitating?");
				writeText("She thinks about that for a moment, before ultimately taking a deep breath.");
				writeSpeech("maid","","...Nothing. You're both right.");
				writeText("She smiles, running her hand along your arm for a moment.");
				writeSpeech("maid","","Let's go to my place, then.");
				writeSpeech("player","","Lead the way.");
				if(checkFlag('maid','fuck55') != true)
					addFlag('maid','fuck55');
				writeFunction("writeEncounter('maid5b')", "Go to her place");
			}
			else{
				if(checkFlag('maid','fuck55')){
					writeSpeech("player","","Well, in the meantime, how about we head to your place?");
					writeSpeech("maid","","Hm... I don't see why not.");
					writeText("She smiles, stepping in to give you a gentle peck on the cheek.");
					writeSpeech("maid","","Let's head out and have some fun, hm?");
					writeFunction("writeEncounter('maid5b')", "Go to her place again");
				}
				else{
					writeSpeech("player","","You did mention that mistressF was fine with us going at it, right?");
					writeText("maidF slowly nods.");
					writeSpeech("maid","","She said that she didn't want to interrupt our 'thing' for her own pleasure, so we should \"have at it\".");
					writeText("You step in a bit closer.");
					writeSpeech("player","","So, it's really <i>your</i> choice, then. If you're not comfortable with doing it again before I talk to her, I'm fine with waiting.");
					writeSpeech("maid","","Ah, it's not that I'm uncomfortable!");
					writeText("She pauses, a little embarrassed.");
					writeSpeech("maid","","I suppose I just wanted you to know that she was okay with it, and couldn't think of a better way to phrase it...?");
					writeSpeech("player","","I can understand that. But, if it's what you want, and everyone's okay with it... What's got you hesitating?");
					writeText("She thinks about that for a moment, before ultimately taking a deep breath.");
					writeSpeech("maid","","...Nothing. You're both right.");
					writeText("She smiles, running her hand along your arm for a moment.");
					writeSpeech("maid","","Let's go to my place, then.");
					writeSpeech("player","","Lead the way.");
					if(checkFlag('maid','fuck55') != true)
						addFlag('maid','fuck55');
					writeFunction("writeEncounter('maid5b')", "Go to her place");
				}
			}
			break;
		}
		case "maid5b" : {
			//first-time fuck
			//First, we check if the player has seen maid2. If not, play maid2.
			//If so, check if the player has fucked maid in her uniform.
			//If so, the options are maid2AA and maid2BA.
			//Otherwise, the options are maid2AA and maid2B.
			if(galleryCheck("maid2") != true){
				writeText("When the two of you arrive at maidF's place, she seems to visibly relax a bit, though she does seem to fiddle with her uniform.");
				writeSpeech("player","","Nervous?");
				writeSpeech("maid","","A bit. This <i>is</i> only our second time, after all.");
				if(checkFlag('maid','hypnoTalk')){
					writeSpeech("maid","","When we spoke in the cafe, you let me hold your pendant, and it helped relax me a bit.");
					writeSpeech("player","","And you want to try holding onto it again?");
					writeText("maidF nods, though she shifts slightly.");
					writeSpeech("maid","","Well... I'm still not <i>entirely</i> sure about hypnosis, but it certainly helped me to relax. Maybe you could do that again, like the first time?");
				}
				else{
					writeSpeech("maid","","In the cafe, you mentioned that you couldn't 'magic away my discomfort' without spinning your pendant around, right? Was that a joke, or...?");
					writeSpeech("player","","Feeling uncomfortable about this?");
					writeSpeech("maid","","It's not that. I just...");
					writeText("She thinks over her words for a moment.");
					writeSpeech("maid","","I'm still not <i>entirely</i> sure about hypnosis, but it certainly helped me to relax. Maybe you could do that again, like the first time?");
				}
				writeSpeech("player","","Oh, sure. If it helps relax you, I'm all for it. Is there anything you want to do first, to get more comfortable?");
				writeText("She nods, running her hands along her uniform.");
				writeSpeech("maid","","Just let me get changed into my robe. I'd rather not have sex in my work-clothes.");
				writeText("...");
				writeText("When she comes back in, wearing only the same bathrobe as before and her face just a little red, you get to work.");
				if(checkFlag('maid','hypnoTalk'))
					writeText("It's just as easy to put her under this time as it was the last few times, though you plan on adding a few more fun commands this time...");
				else
					writeText("It's just as easy to put her under this time as it was last time, though you plan on adding a couple more commands this time...");
				writeSpeech("player","","maidF, can you hear me?");
				writeSpeech("maid","","...Yes.");
				writeText("Her head bobs up and down lazily, her eyes unfocused.");
				writeSpeech("player","","How are you feeling right now?");
				writeText("Her eyes narrow for a brief moment, her chest raising with a slow breath.");
				writeSpeech("maid","","...Fuzzy. And warm.");
				writeSpeech("player","","And what else?");
				writeText("She smiles faintly.");
				writeSpeech("maid","","<i>Comfortable.</i>");
				writeSpeech("player","","Very good. I have a few things to tell you, now. Are you listening?");
				writeText("She nods slowly, though her eyes still seem glazed over.");
				writeSpeech("player","","When you're nice and relaxed, and comfortable, and feeling <i>fuzzy</i>, I want you to call me *Master.");
				if(data.player.gender != "man"){
					writeText("Her brow furrows for a moment, starting to clear up.");
					writeSpeech("maid","","*Master...? But I already have a Mistress. Wouldn't that get confusing?");
					writeText("Ah, right...");
					writeSpeech("player","","Not at all. It's <i>nice</i> to have two Mistresses, isn't it?");
					writeText("She seems to relax a bit again, slowly nodding.");
					writeSpeech("player","","Two people, both here to help you <i>relax...</i> And have <i><b>fun.</b></i> That's not confusing, right?");
					writeSpeech("maid","","Ah... Yes, *Master playerF.");
				}
				else{
					writeSpeech("maid","","Ah... *Master...? *Master...");
					writeText("She shifts slightly, trying out the word on her tongue before nodding, a half-dopey smile on her face.");
					writeSpeech("maid","","I have a *Master, and a Mistress... Oh, I wonder what mistressF's doing right now...?");
					writeSpeech("player","","You don't have to worry about that right now.");
					writeText("You lean forward, placing your hand on her thigh as she shivers slightly.");
					writeSpeech("player","","Just <i><b>relax.</b></i>");
					writeSpeech("maid","","Ah... Yes, <i>*Master.</i>");
				}
				if(checkTrust('purple') >= 90)
					writeText("Seems like that's working. Not the hardest suggestion, especially since you recently did the same thing with purpleF...");
				else
					writeText("Seems like that's working. It's not really the hardest suggestion though, considering her and mistressF's relationship...");
				writeText("Still, there's more to do before pulling her out of trance.");
				writeSpeech("player","","maidF. Are you comfortable when wearing your uniform?");
				writeSpeech("maid","","Ah...?");
				writeText("She mulls that thought over for a moment, unsure of how to answer.");
				writeSpeech("player","","Let me rephrase that: <br>You're comfortable when wearing your uniform around me, <i>right?</i>");
				writeSpeech("maid","","Right.");
				writeText("No hesitation this time? mistressF must ask a lot of leading questions herself...");
				writeSpeech("player","","You're just as comfortable in your uniform around me as you feel right now, right?");
				writeSpeech("maid","","Right.");
				writeSpeech("player","","And that means if I wanted to have sex while you're still in uniform... What would you do?");
				writeText("Her face goes red a bit, and her breathing speeds up.");
				writeSpeech("maid","","...I'd wear it~");
				writeSpeech("player","","Good girl. Now-");
				writeSpeech("maid","","<i><b>Nn~!</b></i>");
				writeText("You stop, watching maidF's hands bunch her robe in her hands as she shudders.");
				writeSpeech("player","","...Good girl?");
				writeText("She shudders again, trying her best to stay sitting up straight.");
				writeSpeech("maid","","<i><b>T-Thank you, *Master~</b></i>");
				writeText("...Neat. Gonna have to remember that trigger for later...");
				writeText("In the meantime, it's probably time to get to the fun parts.");
				writeFunction("writeEvent('maid2')", "Take her to her bed");
				break;
			}
			else{
				if(galleryCheck("maid3") != true){
					if(checkTrust("maid") < 27)
						setTrust("maid",27);
					if(galleryCheck("maid2A") != true){
						writeText("As you two arrive at her place again, she clearly relaxes quite a bit as she stretches out her shoulders.");
						writeSpeech("player","","You're looking a lot more relaxed this time around. Looking forward to this?");
						writeSpeech("maid","","And whose fault could that be, I wonder?");
						writeText("She smiles as she looks over her shoulder at you, winking.");
						writeSpeech("maid","","I'll go get changed so we can get started, playerF~");
						//writeFunction("writeEvent('maid3')", "Have her keep her uniform on");
						writeFunction("writeEvent('maid2A')", "Let her get changed again");
						break;
					}
					else{
						writeText("As you two arrive at her place again, she visibly relaxes as rolls her neck a bit.");
						writeSpeech("player","","Glad to be home?");
						writeSpeech("maid","","Absolutely.");
						writeText("She smiles as she looks over her shoulder at you, winking.");
						writeSpeech("maid","","I'll go get changed so we can get started, playerF~");
						//writeFunction("writeEvent('maid3')", "Have her keep her uniform on");
						writeFunction("writeEvent('maid2A')", "Let her get changed again");
						break;
					}
				}
				else{
					if(checkFlag('maid','fullSub') != true){
						addFlag('maid','fullSub');
						setTrust('maid',28);
					}
					writeText("When you two arrive at her place, maidF barely lets the door shut all the way before wrapping her arms around you from behind.");
					writeText("She gently rests her chin on your shoulder, her breath feeling warm against your ear.");
					writeSpeech("maid","","Am I getting changed this time, or do you want to just get right to the fun parts, <i><b>*Master~?</b></i>");
					writeFunction("writeEvent('maid3A')", "Have her keep her uniform on again");
					writeFunction("writeEvent('maid2A')", "Have her change into her robes again");
					break;
				}
			}
			break;
		}
		case "maidEvent2A" : {
			if(checkFlag('maid','anal') != true){
				addFlag('maid','anal');
				writeText("While she's still panting, her hands holding her pussy open, you grin down at her.");
				writeSpeech("player","","If you think you're feeling filled up now, let's see how you feel about <i>this.</i>");
				writeText("You drag your cock down to her ass as her eyes go wide.");
				writeSpeech("maid","","W-Wait, you mean-");
				writeSpeech("player","","<i><b>Relax.</b></i>");
				writeText("Between her fluids and your cum, you manage to easily push your head into maidF's ass, her eyes rolling back.");
				writeBig("images/maid/5-1.jpg","Art by Oreteki18kin");
				writeSpeech("maid","","<b>OH<i> FUCK~!</b></i>");
				writeText("Her head pushes back against the pillow as she squeezes around you, making it hard to push further in as your cum spills out of her pussy.");
				writeText("Despite being tight though, it still feels almost like...");
				writeSpeech("player","","Looks like mistressF decided to break in <i>all</i> of your holes, hm?");
				writeText("Her face goes red, her voice cracking as you push even further in.");
				writeSpeech("maid","","Y-You can tell?");
				writeSpeech("player","","What I'm curious about, though, is who started it.");
				writeText("You slow to a stop for a moment, less than an inch from bottoming-out.");
				writeSpeech("player","","Did mistressF have to talk you into doing anal...");
				writeText("She looks away for a moment.");
				writeSpeech("player","","Or were <i>you</i> the one begging her to <i>fill your ass?</i>");
				writeText("Her eyes widen slightly, before you <b>buck</b> your hips forward, a throaty moan spilling out of her.");
				writeSpeech("maid","","M-Me...!");
				writeText("You grab her thighs tightly, leaning forward into each thrust.");
				writeSpeech("maid","","I've played with my ass for a long time, and I talked mistressF into trying it~!");
				writeText("Leaning her head back, she starts fingering her dripping cunt as you roughly fuck her ass.");
				writeSpeech("maid","","B-But the real thing is <i>nothing</i> like a strap-on, and I can barely think of anything except how <i>full</i> you're making me!");
				writeText("You can feel her start to squeeze around you rapidly and sporadically as she gets closer to cumming from both her holes and the shame of admitting the truth.");
				writeText("Seeing as you're already still sensitive, you're getting pretty close to finishing yourself.");
				writeText("But seeing her squirming like that, there's only one way to finish this...");
				writeSpeech("player","","Beg for it.");
				writeSpeech("maid","","W-What?");
				writeText("You slow down just a bit, a momentary confusion flying across her face.");
				writeSpeech("player","","If you want me to cum inside, then <i>beg for it properly.</i>");
				writeText("She bites her lip for a second, before squeezing tighter around you.");
				writeSpeech("maid","","Please... C-Cum inside!");
				writeText("You frown down at her, slowing down more.");
				writeSpeech("player","","I said <i>properly.</i>");
				writeSpeech("maid","","Master, <i>please </i> fill this dirty buttslut's ass with your cum~!");
				writeText("You smile and nod, looking into her eyes.");
				writeSpeech("player","","<i><b>Good girl.</b></i>");
				writeText("Just as her body starts to shudder from the praise, you <b>hammer</b> yourself in.");
				writeText("Her moans are louder than ever as she squirms underneath you in orgasmic bliss, pushing you over the edge.");
				writeSpeech("player","","<i>I'm cumming!</i>");
				writeText("The first spurt causes maidF to gasp sharply, guttural moaning accompanying every shot of jizz that fills her up.");
				writeText("You keep thrusting until you feel the very last spurt spill out, her ass practically milking out every drop.");
				writeText("Pulling out completely, finally feeling completely finished, you watch your jizz spill out of maidF's gaping holes.");
				writeBig("images/maid/5-2.jpg","Art by Oreteki18kin");
				writeSpeech("maid","","T-There's so much...!");
				writeText("She just stares in wonder at how much you came before finally leaning her head back against the pillow.");
				writeSpeech("maid","","Ah, the... the shower is just across the hall.");
				writeText("She looks over at you, and you realize just how much sweat and cum you currently have on you.");
				writeSpeech("player","","That sounds like a good idea. Do you want a towel, or...?");
				writeText("She shakes her head.");
				writeSpeech("maid","","I'll wash everything later... and I'd like to feel all-filled-up for a while. I'll use the shower when you're done.");
				writeSpeech("player","","Alright.");
				writeText("...");
				writeText("When you're all washed up and no longer covered in a mixture of your and maidF's juices, you see her walking towards the door with the tell-tale posture of someone who had a bit of rough fun.");
				writeSpeech("maid","","Ah, I forgot to tell you something before I shower.");
				writeText("She leans in towards you, gently kissing you on the cheek.");
				writeSpeech("maid","","Thank you very much, <i><b>Master~</b></i>");
				writeSpeech("player","","You're more than welcome, especially since I had fun too.");
				writeText("She beams a bit from the praise, nodding.");
				writeSpeech("maid","","Have a wonderful day, alright?");
				writeSpeech("player","","Same to you, maidF.");
				writeText("With that, she steps into the bathroom to wash up, while you head out.");
			}
			else{
				writeSpeech("player","","It's not over yet, maidF.");
				writeText("You lower your cock down against her ass, her breathing picking up.");
				writeSpeech("player","","You remember how to ask, don't you?");
				writeText("She nods, smiling as she wiggles her ass.");
				writeSpeech("maid","","Please use my other hole until you're satisfied, Master!");
				writeSpeech("player","","There's a <b>good girl.</b>");
				writeText("She bites her lip as you push in, a moan spilling out as you reach halfway.");
				writeBig("images/maid/5-1.jpg","Art by Oreteki18kin");
				writeText("You start pistoning into her ass, maidF fingering her cum-filled pussy as you do.");
				writeSpeech("maid","","G-God, you're stretching my ass so much more than Mistress's toys ever did...!");
				writeText("Each deep, grunting thrust makes maidF moan louder, her chest heaving as she bites her lip.");
				writeText("You lose track of how many times you bottom-out inside of her, your hips slapping against her ass as you fuck her, but you eventually feel yourself getting close.");
				writeSpeech("player","","Fuck... Are you ready?");
				writeSpeech("maid","","A-Ah, yes! Please, fill me up even more!");
				writeText("With that, you swing your hips forward harder, fucking maidF hard into the bed as you grip her thighs tightly.");
				writeSpeech("player","","<i><b>Cumming...!</b></i>");
				writeText("maidF's ass tightens around you as you start to cum, a throaty moan coming from her as ropes of jizz spurt into her.");
				writeText("It takes a little while to finish up, before you finally pull your softening cock out of her as she looks down at herself.");
				writeBig("images/maid/5-2.jpg","Art by Oreteki18kin");
				writeSpeech("maid","","T-Thank you, <i><b>*Master...!</b></i>");
				writeText("With that, she flops her head back gently against the pillow, her body relaxing as she just lays there, panting with her eyes shut.");
				writeText("She takes a bit of time to recover while you clean yourself off in the shower, just like last time.");
				writeText("When you get out, maidF does approach you with a gentle smile and the slow gait of a well-fucked woman.");
				writeSpeech("maid","","Thank you, *Master...");
				writeText("She gives you a gentle kiss on the cheek, though she lingers for a moment near your ear.");
				writeSpeech("maid","","...for using me like a <i>sex-toy~</i>");
				writeText("She takes a step back, smiling as you notice that some of your cum is still running down her legs.");
				writeSpeech("maid","","I'll be hopping into the shower now, but I look forward to next time.");
				writeText("You feel her hand brush against your hip as she steps toward the shower, leaving you to go about the rest of your business for the day.");
			}
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "maidEvent2AGallery" : {
			writeText("While she's still panting, her hands holding her pussy open, you grin down at her.");
			writeSpeech("player","","If you think you're feeling filled up now, let's see how you feel about <i>this.</i>");
			writeText("You drag your cock down to her ass as her eyes go wide.");
			writeSpeech("maid","","W-Wait, you mean-");
			writeSpeech("player","","<i><b>Relax.</b></i>");
			writeText("Between her fluids and your cum, you manage to easily push your head into maidF's ass, her eyes rolling back.");
			writeBig("images/maid/5-1.jpg","Art by Oreteki18kin");
			writeSpeech("maid","","<b>OH<i> FUCK~!</b></i>");
			writeText("Her head pushes back against the pillow as she squeezes around you, making it hard to push further in as your cum spills out of her pussy.");
			writeText("Despite being tight though, it still feels almost like...");
			writeSpeech("player","","Looks like mistressF decided to break in <i>all</i> of your holes, hm?");
			writeText("Her face goes red, her voice cracking as you push even further in.");
			writeSpeech("maid","","Y-You can tell?");
			writeSpeech("player","","What I'm curious about, though, is who started it.");
			writeText("You slow to a stop for a moment, less than an inch from bottoming-out.");
			writeSpeech("player","","Did mistressF have to talk you into doing anal...");
			writeText("She looks away for a moment.");
			writeSpeech("player","","Or were <i>you</i> the one begging her to <i>fill your ass?</i>");
			writeText("Her eyes widen slightly, before you <b>buck</b> your hips forward, a throaty moan spilling out of her.");
			writeSpeech("maid","","M-Me...!");
			writeText("You grab her thighs tightly, leaning forward into each thrust.");
			writeSpeech("maid","","I've played with my ass for a long time, and I talked mistressF into trying it~!");
			writeText("Leaning her head back, she starts fingering her dripping cunt as you roughly fuck her ass.");
			writeSpeech("maid","","B-But the real thing is <i>nothing</i> like a strap-on, and I can barely think of anything except how <i>full</i> you're making me!");
			writeText("You can feel her start to squeeze around you rapidly and sporadically as she gets closer to cumming from both her holes and the shame of admitting the truth.");
			writeText("Seeing as you're already still sensitive, you're getting pretty close to finishing yourself.");
			writeText("But seeing her squirming like that, there's only one way to finish this...");
			writeSpeech("player","","Beg for it.");
			writeSpeech("maid","","W-What?");
			writeText("You slow down just a bit, a momentary confusion flying across her face.");
			writeSpeech("player","","If you want me to cum inside, then <i>beg for it properly.</i>");
			writeText("She bites her lip for a second, before squeezing tighter around you.");
			writeSpeech("maid","","Please... C-Cum inside!");
			writeText("You frown down at her, slowing down more.");
			writeSpeech("player","","I said <i>properly.</i>");
			writeSpeech("maid","","Master, <i>please</i> fill this dirty buttslut's ass with your cum~!");
			writeText("You smile and nod, looking into her eyes.");
			writeSpeech("player","","<i><b>Good girl.</b></i>");
			writeText("Just as her body starts to shudder from the praise, you <b>hammer</b> yourself in.");
			writeText("Her moans are louder than ever as she squirms underneath you in orgasmic bliss, pushing you over the edge.");
			writeSpeech("player","","<i>I'm cumming!</i>");
			writeText("The first spurt causes maidF to gasp sharply, guttural moaning accompanying every shot of jizz that fills her up.");
			writeText("You keep thrusting until you feel the very last spurt spill out, her ass practically milking out every drop.");
			writeText("Pulling out completely, finally feeling completely finished, you watch your jizz spill out of maidF's gaping holes.");
			writeBig("images/maid/5-2.jpg","Art by Oreteki18kin");
			writeSpeech("maid","","T-There's so much...!");
			writeText("She just stares in wonder at how much you came before finally leaning her head back against the pillow.");
			writeSpeech("maid","","Ah, the... the shower is just across the hall.");
			writeText("She looks over at you, and you realize just how much sweat and cum you currently have on you.");
			writeSpeech("player","","That sounds like a good idea. Do you want a towel, or...?");
			writeText("She shakes her head.");
			writeSpeech("maid","","I'll wash everything later... and I'd like to feel all-filled-up for a while. I'll use the shower when you're done.");
			writeSpeech("player","","Alright.");
			writeText("...");
			writeText("When you're all washed up and no longer covered in a mixture of your and maidF's juices, you see her walking towards the door with the tell-tale posture of someone who had a bit of rough-fun.");
			writeSpeech("maid","","Ah, I forgot to tell you something before I shower.");
			writeText("She leans in towards you, gently kissing you on the cheek.");
			writeSpeech("maid","","Thank you very much, <i><b>Master~</b></i>");
			writeSpeech("player","","You're more than welcome, especially since I had fun too.");
			writeText("She beams a bit from the praise, nodding.");
			writeSpeech("maid","","Have a wonderful day, alright?");
			writeSpeech("player","","Same to you, maidF.");
			writeText("With that, she steps into the bathroom to wash up, while you head out.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "maidEvent2B" : {
			writeSpeech("player","","Well, looks like there's quite a mess to clean up.");
			writeText("maidF's eyes move back to you, clearing up a bit as she sees your cum-covered cock.");
			writeText("She sits up a bit, breathing deeply as she tries to clear her head with a smile.");
			writeSpeech("maid","","Just one moment, and I'd be happy to help, *Master~");
			writeText("...");
			writeBig("images/maid/6-1.jpg", "Art by Oreteki18kin")
			writeSpeech("maid","","Haah...~!");
			writeText("Bringing her hands up, she grasps onto your slick, hot shaft with a smile.");
			writeSpeech("maid","","I'll make sure your cock is <i>spotless,</i> *Master~");
			writeText("Grasping your base firmly, she slowly strokes up as cum goes with her fingers, pooling around them.");
			writeText("Moving her head forward, she laps up a lot of it with her tongue, trailing along and catching as much as possible until halfway up the shaft.");
			writeText("Then, her hands stop as she lifts her head up, opening her mouth to show what she'd collected thus far...");
			writeText("...before bobbing her head down onto your cock, the hot feeling of her spit and your cum completely changing how her mouth feels.");
			writeSpeech("player","","Fuck...!");
			writeText("You run your hand through her hair as she bobs down, reaching her fingers halfway down before bobbing back up as her fingers move back to the base.");
			writeText("The way she moves her hand down gently, before firmly grasping the shaft and <b>sliding</b> her hand towards her lips...");
			writeSpeech("player","","You've been practicing...?");
			writeText("She looks up to your eyes, a clear smile in them as she turns her head slightly, her lips carefully drawing across your extra-sensitive cockhead and pulling moans out of you.");
			writeText("After a few more moments of that, you notice that she's started to pick up speed, her breath on your cock becoming more erratic.");
			writeText("Then, she stops, shaking a bit in clear orgasm... a result of your cock being inside her mouth, and the suggestion from a few minutes ago.");
			writeText("She doesn't let it stop her for long, though, because she quickly pushes her head back down onto your shaft.");
			writeBig("images/maid/6-2.jpg","Art by Oreteki18kin");
			writeText("Your cock pushes out some of the cum and spit from her mouth, but she quickly bobs her head further down to try and clean it up.");
			writeText("You can feel her swallowing around you when she can, her hands now pressed onto your thighs as she hungrily takes your cock into her throat again and again.");
			writeText("Every time she bobs up to breathe, her hands immediately move up to keep up the pressure, trying to milk every last drop out of you.");
			writeText("It isn't too long until you can feel exactly that welling up, the constant sexual assault driving you wild.");
			writeSpeech("player","","I'm getting close, maidF...!");
			writeText("Hearing that, she pops her lips off of your head for a second.");
			writeSpeech("maid","","Then use my throat as a <i>cumrag, </i> *Master~!");
			writeText("She pushes her head back down, taking you into her throat quickly as she bobs up and down, your head rubbing against her throat barrier with every thrust.");
			writeText("You can barely keep focused as she pushes you to, and then <b>over </b>the edge.");
			writeSpeech("player","","Cumming...!");
			writeText("Grabbing her ponytail, you pull her head down even harder, her hands tightly gripping your thighs as her eyes go wide and another orgasm surges through her body.");
			writeText("You can feel her trying to swallow your load as it spurts out, doing her best as you cum even more, until she starts pulling away.");
			writeText("You move your hand away, watching as she slowly pulls back up... and then bobs back down.");
			writeText("You shudder as her tongue laps along your sensitive cock, before she finally pulls away.");
			writeText("She ends up coughing hard as she separates from your cock, the huge amount of cum spilling out from her mouth as she looks up at you.");
			writeSpeech("player","","Holy shit...");
			writeBig("images/maid/6-3.jpg","Art by Oreteki18kin");
			writeText("She swallows down most of what's left in her mouth before speaking.");
			writeSpeech("maid","","D-Did I... do a good job cleaning, M-*Master?");
			writeSpeech("player","","Better than I could've expected...");
			writeText("You smile down at her.");
			writeSpeech("player","","Good girl.");
			writeText("She shivers slightly, preening as she smiles up at you. Her throat might be a bit hoarse now, though...");
			writeSpeech("player","","Ah, sorry, let me get you a towel-");
			writeSpeech("maid","","No need.");
			writeText("Leaning over the side of the bed, she brings out a towel with a confident smile.");
			writeSpeech("maid","","I thought I'd need it.");
			writeSpeech("player","","You really think this stuff through, don't you?");
			writeText("She nods, looking a little proud as she wipes your cum off her chest.");
			writeText("Of course, it still leaves that faint sheen on her skin, but it gets most of it off.");
			writeText("She's especially vigorous with cleaning off her lips, touching them to make sure they're clean.");
			writeText("When she's sure, she leans forward and kisses you on the cheek with a smile.");
			writeSpeech("maid","","I had a lovely time, thank you.");
			writeSpeech("player","","Glad to hear it. I think these sheets are probably evidence of how much I enjoyed it.");
			writeText("She laughs, nodding as she looks down, a small puddle of cum between her legs from the creampie earlier.");
			writeSpeech("maid","","Fortunately, they're stain-resistant and easy to wash. I'll put them in the washer later today. For now...");
			writeText("She leans back on the bed, sighing contentedly.");
			writeSpeech("maid","","I'll rest a bit while you shower. You're hard to keep up with, you know.<br>Though getting <i>fucked stupid</i> is half the fun, so I won't complain.");
			writeSpeech("player","","I aim to please. I'll give you a heads-up after I shower so that you can wash up too.");
			writeSpeech("maid","","Mm... Thanks.");
			writeText("...");
			writeText("After you're all finished, maidF gets ready to wash up as well.");
			writeText("As you're getting ready to head out, she does run her hand along your arm.");
			writeSpeech("maid","","Have a wonderful rest of the day, *Master.");
			writeSpeech("player","","You too, maidF.");
			writeText("With that, she heads into the shower, leaving you to go about the rest of your business for the day.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [ //Lists the events of the character for unlocking and replaying in the gallery.
	{index: "maid1", name: "Casual Titjob"},
	{index: "maid2", name: "Fucked at Home"},
	{index: "maid2A", name: "Fucked at Home Again"},
	// {index: "maid3", name: "A Girl In Uniform"},
	// {index: "maid3A", name: "Uniformed Again"},
];

function writeEvent(name) { //Plays the actual event.
	//document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "maid1" : {
			document.getElementById('output').innerHTML = '';
			writeText("When you pull out your cock, she nearly chokes on her drink.");
			writeSpeech("maid","","Shit. You're big enough to do porn.");
			writeText("She pauses.");
			writeSpeech("maid","","Actually, <i>do</i> you do porn? Because I'm imagining eating out my boss under the desk while she watches a video of you fucking someone. It's... pretty hot.");
			if(checkFlag('starlet','porn'))
				writeSpeech("player","","I've actually done a couple amateur scenes before. If you want, we <i>could</i> record this with my phone.");
			else
				writeSpeech("player","","I can't say that I've ever done it. But we could record this, I guess? I have my phone.");
			writeText("She flinches back, now scowling.");
			writeSpeech("maid","","Whoa, hold up. Do I seriously look like the kind of girl who'd let you record her?");
			writeSpeech("player","","...It's only natural?");
			writeText("She blinks once.");
			writeSpeech("maid","","Huh. Right, I guess it is. Forgot about that.");
			writeText("Okay, just what kind of relationship does she have to have with her boss for her to be <i>this</i> easy to control?");
			writeText("After a second, she chugs the last of the beer and casually tosses it to the kitchen. It lands perfectly into the bin.");
			writeSpeech("player","","Whoa. Nice sho-");
			writeText("Your words stop in your mouth as you see her kneel down in front of you, staring at your cock.");
			writeSpeech("maid","","You gonna whip it out or what? I don't want the video to start mid-way.");
			writeText("...Fuck it, let's do this. You quickly pop out your phone, setting it to record.");
			writeText("She looks at the camera for a second, before a grin spreads across her face as she looks greedily at your dick.");
			writeBig("images/maid/2-2.jpg", "Art by Oreteki18kin");
			writeSpeech("maid","","I'll give you my number after I milk out your first load, so you'd better send that to me.");
			writeText("With that, she leans forward, her tits completely engulfing your cock. She starts kneading herself around you, but quickly figures out a major problem.");
			writeSpeech("maid","","Damn... Too much friction. Do you mind if I try something real quick?");
			writeSpeech("player","","Sure, go a-<i><b>HEAD-!</b></i>");
			writeText("In one smooth movement, she takes your cock to the base, pausing only to press your head past her throat barrier.");
			writeText("One second turns to two as she starts humming something, the vibrations carrying through your cock before she slowly pulls back.");
			writeText("Her drool oozes out all over your cock and her tits as she nods with satisfaction.");
			writeSpeech("maid","","My boss throat-fucked me with a strap-on once, and there was a <i>lot</i> of extra-slick spit.");
			writeSpeech("player","","...Okay, but can you do that again?.");
			writeSpeech("maid","","Nah. She's distended my throat before, but we never tried a titjob. Didn't make sense with a strap-on, y'know?");
			writeText("With that, she wraps her arms around her tits and winks at the camera.");
			writeSpeech("maid","","Thinking of you, babe~!");
			writeText("Her spit-slick tits shift around your length, her shoulders wiggling as she shakes her whole body.");
			writeText("After a few seconds, she presses herself entirely against you, rubbing her breasts up and down your crotch as your head pokes out of and into her cleavage.");
			if(data.player.gender == "man")
				writeSpeech("maid","","Don't forget to moan for the audience, sir.");
			else
				writeSpeech("maid","","Don't forget to moan for the audience, miss.");
			writeText("Like she has to remind you...");
			writeText("You don't even bother trying to keep quiet as her head ducks down, her tongue teasing your tip every time it pops out.");
			writeText("Seconds quickly turn to minutes as she slowly changes things up.");
			writeText("Pretty quickly, you realize that she's checking what makes you moan the loudest and doing more of it.");
			writeText("Her hands both go down to your balls, carefully kneading them around and toying with them as her arms press her tits together tighter.");
			writeSpeech("player","","I'm getting close...!");
			writeSpeech("maid","","Fuck, the cumshot's her favorite part. Steady the phone against the couch!");
			writeText("You quickly do so, holding off just long enough to get it in position, before...");
			writeBig("images/maid/2-3.jpg", "Art by Oreteki18kin");
			writeText("You blast your load across her face and tits, a large puddle forming in her cleavage as she catches some with her mouth.");
			writeText("Your hips buck hard as you slip out from between her breasts, before the last few shots are expended.");
			writeSpeech("player","","You're fucking <i>amazing</i>, "+fName('maid')+".");
			writeText("She just half-scoffs, swallowing most of your load easily.");
			writeSpeech("maid","","Movie's not over yet, babe. We've still got <i>clean-up</i>.");
			writeText("The next minute or so is spent with her licking every drop from your shaft, even licking it off of your stomach before she grabs the phone.");
			writeText("Pressing your cock against the outside of her chest, she winks and quickly taps a few buttons.");
			writeSpeech("maid","","...'Kay, video's over, and I took a nice little photo. Mind if I plug my number in?");
			writeText("She doesn't bother waiting for a response.");
			writeSpeech("maid","","Aaaaand... sent.");
			writeText("She flops back casually against the couch, grabbing a box of tissues from beneath it and starting to wipe off her chest.");
			writeSpeech("maid","","Hey, do you mind if I introduce the two of you later? She's wanted to spice things up with a real dick for a while now.");
			writeText("Feeling drained down to the last drop, you just nod.");
			writeSpeech("maid","","Nice! Thanks so much, hun. You're a sweetie.");
			writeText("She gives you a quick peck on the cheek.");
			writeSpeech("maid","","Now, I'm off to take a shower, otherwise the smell of cum'll have me jilling it for hours. Talk to you later, babe!");
			writeText("She bounds off casually, heading into what you assume is the bathroom.");
			writeText("...");
			writeText("It takes a while, but you do manage to pull yourself out of the afterglow and away from the couch.");
			writeText("You're pretty interested in meeting this boss of hers but, for now, maybe it's better to head home and shower...");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "maid2" : {
			document.getElementById('output').innerHTML = '';
			writeText("You let her go and get changed, taking a minute to stretch a little bit. Nothing ruins the mood like a pulled hamstring...");
			writeText("A minute later, you hear maidF call out in a sultry tone,");
			writeSpeech("maid","","Can you come here, playerF?");
			writeText("Stepping towards the door, you can see maidF laying back on the bed, looking up at you with her legs spread.");
			writeBig("images/maid/4-1.jpg","Art by Oreteki18kin");
			writeSpeech("maid","","I'm ready for you, <i>*Master~</i>");
			writeSpeech("player","","That's... incredibly hot.");
			writeText("She flushes red, but you can see a bit of pride as she spreads her lips wide.");
			writeSpeech("maid","","And it's yours to use, if you'd like.");
			writeSpeech("player","","I don't think I could hold back if I wanted to.");
			writeText("You step towards the bed, discarding your clothes as quickly as you can before you move onto the bed.");
			writeText("She stares for a few moments at your thick shaft, licking her lips at the sight.");
			writeText("You run your cock along her pussy a few times to get nice and lubed up, before looking right into her eyes.");
			writeSpeech("player","","At the count of three... I'll shove it all in at once. Got it?");
			writeText("She nods, leaning back and relaxing a bit as she holds herself open.");
			writeText("You slowly start moving your hips forward, your shaft sliding along her hot, wet cunt as she bites her lip.");
			writeSpeech("player","","One...");
			writeText("You slide all the way forward, your cockhead sliding against her stomach as your weight presses the base of your shaft against her.");
			writeText("You hold that position for a few seconds, slowly shifting your hips as you feel her clit rubbing against your shaft as she moans, desperately trying to hold still.");
			writeSpeech("player","","...Two...");
			writeText("You slowly draw yourself back, using your hand to press your shaft down against her pussy as you do, the slick sensation feeling incredible you pull all the way back.");
			writeText("When your head is finally lined up with her hole again, you can't help but pause and grin down at her as she tries, and fails, to keep from shifting her hips against you.");
			writeText("The feeling of frustration mounts in her eyes as seconds go by, her movements getting more and more obvious as she rolls her hips.");
			writeText("Finally, right when you see that she's about to snap-");
			writeBig("images/maid/4-2.jpg","Art by Oreteki18kin");
			writeSpeech("maid","","<i><b><font size='+2'>FUCK YES~!</font></b></i>");
			writeText("Her face immediately goes bright red as her mouth shuts tight, embarrassment clear on her face.");
			writeText("But since that's <b>exactly</b> the reaction you were going for, it's time for a bit of reinforcement...");
			writeSpeech("player","","That was a very honest reaction, wasn't it?");
			writeText("maidF nods, her cunt grasping tightly around your cock.");
			writeSpeech("player","","That's good, then. After all, an honest girl...");
			writeText("You lean forward completely, your face near hers as you smile.");
			writeSpeech("player","","...is a <i><b>good girl.</b></i>");
			writeText("You slowly start sawing in and out of her cunt, her moans stifled as she bites her lip.");
			writeText("But you bring your hand to her mouth, your thumb pushing into it as you thrust forward slowly, a loud moan spilling out of her.");
			writeSpeech("player","","And good, honest girls deserve a reward. So tell me, maidF - what do you want?");
			writeText("You pull your thumb out of her mouth, her spit leaving it slick as you run it gently across her cheek.");
			writeText("She hesitates for a few moments, before swallowing and saying,");
			writeSpeech("maid","","I want you to <i>fuck</i> me. I...");
			writeText("She takes a slow, deep breath.");
			writeSpeech("maid","","I want my *Master to use me like a piece of <i>meat,</i> that exists for *his pleasure.");
			writeText("You pause slightly, though mostly just to line yourself up properly...");
			writeSpeech("player","","If you want to be treated like a sex toy... then keep yourself spread open, <i>slut.</i>");
			writeText("You <b>slam</b> your hips forward, the loud clap of your hips against her ass ringing out as you start pistoning into her quickly sounding almost as loud as maidF's moans.");
			writeText("The faster and rougher your thrusts, the louder her moaning gets as she squeezes along your shaft with every movement.");
			writeSpeech("maid","","Yes, yes... God, just <i><b>use me...!</b></i>");
			writeText("You use your hands to grab her thick, plump thighs for better leverage.");
			writeSpeech("player","","Gladly.");
			writeText("Changing your angle slightly, you push into her deeply, her head pushing back against the pillow as her mouth widens in a silent scream of pleasure.");
			writeText("As you pitch yourself foward, her squirms beneath you as she tries to press up against your body.");
			writeSpeech("maid","","F-Fuck, right there, please...! Just like that...!");
			writeText("You calmly oblige, fucking her rough and hard as she starts shaking.");
			writeText("Her orgasm has her pussy squeezing down hard, her body quivering as you just keep fucking her.");
			writeText("But when she starts to finish cumming, you decided to... <b>intervene.</b>");
			writeText("Your hand moves to her chin, forcing her to look right at you as you ask her a nice leading question.");
			writeSpeech("player","","You can't stop cumming, can you?");
			writeText("Her eyes widen slightly, before she tries to nod beneath you... and fails, when you bottom-out again.");
			writeSpeech("player","","It just keeps getting <i>stronger,</i> keep feeling<i> better,</i> right?");
			writeSpeech("maid","","<i><b>Y-Yesss...~!</b></i>");
			writeSpeech("player","","And you want to <i>just keep cumming</i> as long as I'm inside of you, <i><b>right?</b></i>");
			writeText("Rather than answering, she just throws her head back, her legs pressing hard against the bed as she keeps orgasming.");
			writeText("So, you just fuck her even harder, her uncontrolled squeezing bringing you closer and close to the edge.");
			writeSpeech("player","","But you know what feels even better? What'll make you cum <i>even harder?</i>");
			writeText("You squeeze down on her thighs tighter, <b>slamming</b> your cock into her with every thrust.");
			writeSpeech("player","","You'll have the strongest, mind-numbing orgasm of your life when I <i>cum inside.</i>");
			writeText("You speed up as much as you possibly can, breathless grunts spilling out of maidF as you do.");
			writeSpeech("player","","Because that's how a <i><b>fuck-toy</b></i> works, <i>right?</i>");
			writeText("You're not even sure if she can hear you properly right now, but you reach your limit.");
			writeSpeech("player","","Here it comes...! I'm cumming!");
			writeBig("images/maid/4-3.jpg","Art by Oreteki18kin");
			writeText("With one more solid swing of your hips, you bottom out inside of her as you start to cum as deep inside her as you can.");
			writeText("You can feel her cunt squeezing down on you as you shoot rope after rope of cum, filling her up as you buck your hips with each shot.");
			writeText("When you finally finish and pull out, a fair amount of cum spills out of her as she shudders beneath you, looking down in hazy amazement.");
			writeBig("images/maid/4-4.jpg","Art by Oreteki18kin")
			writeSpeech("maid","","There's so much...!");
			writeText("Still half-addled from the orgasms, you watch as she runs her fingers along her pussy, shuddering as she finger-fucks her cum-filled cunt.");
			writeText("Honestly, despite cumming, you don't <i>quite</i> feel satisfied yet...");
			//writeFunction("writeEncounter('maid5b')","Go back")
			if(data.player.location == "gallery"){
				writeFunction("writeEncounter('maidEvent2A')", "Fuck her ass again");
				writeFunction("writeEncounter('maidEvent2AGallery')", "Fuck her ass (first time)");
			}
			else
				writeFunction("writeEncounter('maidEvent2A')", "Fuck her ass");
			writeFunction("writeEncounter('maidEvent2B')", "Have her suck you clean");
			break;
		}
		case "maid2A" : {
			document.getElementById('output').innerHTML = '';
			writeSpeech("player","","Go ahead and get changed.");
			writeText("maidF smiles, nodding... and starts slowly pulling off her uniform.");
			writeSpeech("maid","","I already put the robe on my bed, so all that's left is to take this off and head right over. I hope you don't mind helping a little?");
			writeSpeech("player","","I'd be happy to.");
			writeText("The first thing to come off is the large apron, the knot in the back easily coming undone as maidF leans into you. From the feeling of stiff nubs against your chest, it's obvious...");
			writeSpeech("player","","Skipping the bra today?");
			writeText("Her lips press up against your neck, her breath warm against your skin.");
			writeSpeech("maid","","I didn't want it to get in the way. And I think you know what else I decided not to wear...");
			writeText("maidF guides your hand under the bottom of the black uniform, your fingers pressing against her already wet pussy as she grabs the hem and lifts.");
			writeText("Pushing your finger into her, she shudders and moans into her outfit as she pulls it up and over her head.");
			writeText("After another moment, she pulls it all the way off and drops it onto the floor, grinding against your hand...");
			writeText("Until she steps back, her arms at her sides.");
			writeBig("images/maid/profileP.jpg","Art by Oreteki18kin");
			writeSpeech("player","","God, you look incredible...");
			writeText("She blushes, but smiles widely.");
			writeSpeech("maid","","Thank you, *Master. But let's hurry to the bed - the air's actually a little colder than I expected.");
			writeSpeech("player","","Got it.");
			writeText("She turns around and starts to walk, giving you a perfect eyeful of her round, shapely ass as it bounces with each step.");
			writeText("Unable to really resist, you pull your hand back a bit...");
			writeSpeech("maid","","<i><b>UHN~!</b></i>");
			writeText("The slap across her ass echoes through the room as maidF looks over her shoulder at you, her face even redder now.");
			writeSpeech("maid","","...Thank you, Master~");
			writeText("...");
			writeText("She lays back in her bed, her robe loosely pulled onto her body as she raises her legs like before.");
			writeBig("images/maid/4-1.jpg","Art by Oreteki18kin");
			writeText("She spreads her lips as wide as she can, smiling subserviently.");
			writeSpeech("maid","","Please use these holes until you're satisfied, *Master.");
			writeText("Wordlessly, you move onto the bed and line your hips up with hers. Running your cock along her folds is easily enough to lube up your whole shaft, as she's practically dripping from excitement.");
			writeText("As you press your cockhead right against her, just barely keeping from pushing all the way in, you lean forward as she stares up at you hungrily.");
			writeSpeech("player","","And what does a good fucktoy say when she gets what she wants?");
			writeSpeech("maid","","Ah, thank yo<i><b>uUOOOH~!</b></i>");
			writeBig("images/maid/4-2.jpg", "Art by Oreteki18kin");
			writeSpeech("maid","","Fuck, thank you thank you <i><b>thank you~!</b></i>");
			writeText("You keep slamming your hips into her ass, your hands going to her thighs to steady yourself as you push into her.");
			writeText("Her eyes roll up as you can feel her start cumming around your cock. Looks like the suggestion from last time is still just as strong.");
			writeText("Despite that, though, she still tries her best to focus on you, trying to squeeze around you in time with your thrusts.");
			writeText("It's not perfect, but it's a valiant effort, so...");
			writeSpeech("player","","You are just the <i>perfect little <b>sex-toy,</b></i> aren't you maidF?");
			writeText("That pushes her over, completely making her lose control as she raises her hips and her legs press sharply against the bed.");
			writeSpeech("player","","God, you're such a whore for a bit of praise. I bet you get wet whenever someone compliments you, don't you?");
			writeText("You dig your fingers into her thighs, squeezing tightly as you fuck her savagely.");
			writeSpeech("player","","I'd bet that all I'd have to do to make you cum <i>anywhere</i> is just say something nice about you.");
			writeText("You can feel yourself getting closer, getting ready to cum, so you decide to really drive it home.");
			writeSpeech("player","","Your body is <i>beautiful,</i> you know that? It's like you were <i><b>built</b></i> for sex.");
			writeSpeech("maid","","<i><b>A-Ahn...!</b></i>");
			writeText("She tightens around you, her eyes now shut as she rides the orgasms.");
			writeSpeech("player","","Your wet mouth, your thick thighs, your massive lewd tits...! Face it, maidF.");
			writeText("You feel it welling up, about to cum inside...!");
			writeSpeech("player","","You're the <i><b>perfect little fuck-doll.</b></i>");
			writeBig("images/maid/4-3.jpg","Art by Oreteki18kin");
			writeText("You cum hard, but not nearly as hard as maidF as her entire body starts shaking beneath you, her eyes going wide as she gasps sharply.");
			writeText("Every spurt has her rapidly squeezing and relaxing, unable to focus until you finally finish after more shots than you're confident in counting.");
			writeText("The two of you just lay there for what feels like a few minutes, before you finally pull out. As you do, you can see your cum ooze out of her gaping cunt as she tries to focus.");
			writeBig("images/maid/4-4.jpg","Art by Oreteki18kin");
			writeText("With half-hazed eyes, she smiles dopily as she presses her hand to her pussy.");
			writeSpeech("maid","","I feel so <i><b>full...!</b></i>");
			writeText("As you watch her toy with her cum-filled pussy, you can't help but feel like you're not <i>quite</i> satisfied yet...");
			//writeFunction("writeEncounter('maid5b')","Go back")
			if(data.player.location == "gallery"){
				writeFunction("writeEncounter('maidEvent2AGallery')", "Fuck her ass (first time)");
				writeFunction("writeEncounter('maidEvent2A')", "Fuck her ass again");
			}
			else
				writeFunction("writeEncounter('maidEvent2A')", "Fuck her ass");
			writeFunction("writeEncounter('maidEvent2B')", "Have her suck you clean");
			break;
		}
		// case "maid3" : {
		// 	document.getElementById('output').innerHTML = '';
		// 	writeSpecial("This is the scene in her uniform.");

			



		// 	//writeFunction("writeEncounter('maid5b')","Go back")
		// 	writeFunction("changeLocation(data.player.location)", "Finish");
		// 	break;
		// }
		// case "maid3A" : {
		// 	document.getElementById('output').innerHTML = '';
		// 	writeSpecial("This is the second scene in her uniform.");

			



		// 	//writeFunction("writeEncounter('maid5b')","Go back")
		// 	writeFunction("changeLocation(data.player.location)", "Finish");
		// 	break;
		// }
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
	{index: "maidPhone1", trust: 22,},
	{index: "maidPhone1", trust: 23,},
	//{index: "maidPhone2", trust: 25,},
	{index: "maidReward", trust: 27,},
	{index: "maidRewardDuo", trust: 30,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	switch (name) {
		case "maidPhone1" : {
			if(checkTrust('maid')==23 && checkFlag('maid','hypnoTalk') != true)
				addFlag('maid','hypnoTalk');
			if(checkTrust('maid') <=23)
				setTrust('maid',24);
			writePhoneSpeech("maid","","Hello, playerF. I wanted to say thanks again for talking with me yesterday; it very much helped clear my head, and I'm feeling better about this.");
			if(galleryCheck("mistress3")){
				if(checkFlag('maid','mistressSexTape') != true)
					addFlag('maid','mistressSexTape');
				writePhoneSpeech("maid","","Plus, I spoke with my employer a bit more about the video I sent her, and mistressF was helpful in her own way.");
				writePhoneSpeech("maid","","She actually had something rather interesting to show me, which was unexpected.");
				writePhoneSpeech("maid","","I assume, of course, that you know what I'm alluding to.");
				writePhoneChoices("The sex tape?","Can you be more specific?");
			}
			else{
				writePhoneSpeech("maid","","I hope you're having a good morning. I'm afraid that I'll be quite busy today, but I do hope you'll also have a great afternoon.");
				writePhoneSpeech("maid","","We've been having wonderful weather as of late - a friend of mine mentioned that she's been spending time at the park lately. Did you have any plans for today?");
				writePhoneChoices("Not really","Just my job","I'll check out the park");

			}
			break;
		}
		case "maidPhone1A" : {
			if(galleryCheck("mistress3")){
				writePhoneSpeech("player","","The sex tape?");
				writePhoneSpeech("maid","","Yes. The sex tape.");
				writePhoneSpeech("maid","","This wasn't exactly what I was expecting, to be honest.");
				writePhoneSpeech("maid","","But this isn't exactly a discussion best had over the phone.");
				writePhoneSpeech("maid","","I don't want you to think that I see this as a problem, though. I just want to talk to you in-person.");
				writePhoneSpeech("player","","Alright. Do you want to meet up today?");
				writePhoneSpeech("maid","","I'm afraid my schedule is full today, but I have every other afternoon free, and I'm usually at the shopping district.");
				writePhoneSpeech("player","","Alright. See you there?");
				writePhoneSpeech("maid","","I'll see you there.");
			}
			else{
				writePhoneSpeech("player","","Not really, no. I'll probably figure out a good way to use my time before the day's over, though.");
				writePhoneSpeech("maid","","Alright. I'm sure you'll use your time well.");
				writePhoneSpeech("maid","","By the way, I wanted to mention that due to my schedule, I have every other afternoon free, and I usually visit the shopping district, as you've noticed.");
				writePhoneSpeech("maid","","I have to start driving now, but if you'd like to see me, that's my schedule. I hope I'll see you there.");
			}
			break;
		}
		case "maidPhone1B" : {
			if(galleryCheck("mistress3")){
				writePhoneSpeech("player","","Sorry, but can you be a bit more specific?");
				writePhoneSpeech("maid","","I can't tell if you're being dense, or just coy.");
				writePhoneSpeech("maid","","I'm referring to your and mistressF's sex tape.");
				writePhoneSpeech("maid","","Frankly, I wasn't expecting both of us to end up involved with the same person, this isn't exactly a discussion best had over the phone.");
				writePhoneSpeech("maid","","I don't want you to think that I see this as a problem, though. I just want to go over the details with you in-person.");
				writePhoneSpeech("player","","Alright. Do you want to meet up today?");
				writePhoneSpeech("maid","","I'm afraid my schedule is full today, but I have every other afternoon free, and I'm usually at the shopping district.");
				writePhoneSpeech("player","","Alright. See you there?");
				writePhoneSpeech("maid","","I'll see you there.");
			}
			else{
				if(checkFlag('maid','schoolDays') != true)
					addFlag('maid','schoolDays');
				writePhoneSpeech("player","","Like you, I'll be spending the day working. There's more than a few students who could do with a counselor, after all.");
				writePhoneSpeech("maid","","I'm sure you'll do an excellent job, then. Good luck, though - I recall my own days at the University as being rather wild ones.");
				writePhoneSpeech("player","","Oh? Saying things like that will only make me curious about how wild you got.");
				writePhoneSpeech("maid","","A story for another time. For now, I have to start driving.");
				writePhoneSpeech("maid","","By the way, I wanted to mention that due to my schedule, I have every other afternoon free, and I usually visit the shopping district, as you've noticed.");
				writePhoneSpeech("maid","","If you'd like to come and see me, that's my schedule. I hope I'll see you there.");
			}
			break;
		}
		case "maidPhone1C" : {
			writePhoneSpeech("player","","I've got a bit of free time, and visiting the park doesn't seem like a bad idea.");
			writePhoneSpeech("maid","","I hope you have a good time; despite the weather, I heard that the park tends not to have too many people around.");
			writePhoneSpeech("maid","","I'm afraid I have to start driving now, though, so I'll have to put away my phone.");
			writePhoneSpeech("maid","","Before I do, though, I wanted to mention that due to my schedule, I have every other afternoon free, and I usually visit the shopping district, as you've noticed.");
			writePhoneSpeech("maid","","If you'd like to come and see me, that's my schedule. I hope I'll see you there.");
			break;
		}
		// case "maidPhone2" : {
		// 	if(checkFlag('maid','mistress40')){
		// 		writePhoneSpeech("maid","","Hello again. I'm getting ready for work now, but I wanted to say good morning.");
		// 	}
		// 	break;
		// }
		case "maidReward" : {
			writePhoneImage("images/maid/fin.jpg", "Art by Oreteki18kin");
			writePhoneSpeech("maid", "", "You've finished all of maidF's content for this version, congratulations!");
			break;
		}
		case "maidRewardDuo" : {
			writePhoneImage("images/maid/rewardDuo.jpg", "Art by Oreteki18kin");
			writePhoneSpeech("maid", "", "You've finished all content for this path for this version, congratulations! This is an alternate way of advancing maidF's story - if you restart her story and spend time at the shopping district, you might see another route with more content.");
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