var character = {index: "instructor", fName: "Charlotte", lName: "Reid", trust: 0, encountered: false, textEvent: "", met: false, color: "#FD7380", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false,};

var logbook = {
	index: "instructor", 
	desc: "A former gold-medal olympian. She's a member of the Parent Teacher Student Association council despite not being a member of the faculty, yet. Rumors abound that she's eyeing the current physical education teacher's position.",
	body: "She's certainly a former olympian, but her body must have seriously thickened out over the years.",
	clothes: "Technically not employed by the school, complaints that her outfit is inappropriate are typically ignored by her and the principal. There must be a lot though, as you suspect she doesn't wear anything under her red hoodie, and she wears a nearly skin-tight pair of spats that clearly outline her pussy.",
	home: "You don't know where she lives, but you can usually find her taking a section of the school gym to assist members of various sporting or fitness clubs.",
	tags: "Common sense manipulation, fit girl",
	artist: "Artist: Oreteki18kin",
	author: "Author: NoodleJacuzzi",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "intro", name: "Someone is moving through the PE areas", requirements: "?trust instructor 0; ?flag principal council; ?location gym;", altName: "", altImage: "",},
	{index: "statusQuo", name: "instructor is somewhere around here", requirements: "?trust instructor 1; ?location gym;", altName: "", altImage: "",},
	{index: "completeQuo", name: "instructor is somewhere around here", requirements: "?trust instructor 80; ?location gym;", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	writeHTML(`
		define scarf = sp scarf; ?flag instructor scarfSupport;
		define succubus = sp succubus; ?flag instructor succubusSupport;
		define incubus = sp incubus; ?flag instructor incubusSupport;
		define bikini = sp Bianca; im images/instructor/bikini.jpg; altColor #D88A25;
		define track = sp Casey; im images/instructor/track.jpg; altColor #227F2E;
		define karate = sp Aiko; im images/instructor/karate.jpg; altColor #FAF9FE;
		define gymnast = sp Lansley; im images/instructor/gymnast.jpg; altColor #D07E8D;
		define principal = sp principal;
		define player = sp player;
		define i = sp instructor;
		define instructor = sp instructor;
		define is = sp instructor; !flag instructor instructorFuck;
		define isf = sp instructor; ?flag instructor instructorFuck; im images/instructor/instructorP.jpg;
		define it = t !flag instructor instructorFuck;
		define itf = t ?flag instructor instructorFuck;
	`);
	switch (name) {
		case "cancel": {
			unencounter(character.index);
			changeLocation(data.player.location);
			break;
		}
		case "intro": {
			writeHTML(`
				im instructorProfile.jpg
				t instructorF instructorL, a former olympian. She's not actually a member of the faculty, but rumors are that she's looking to join as the school's coach.
				t ?trustMin coach 1; Though, that would mean replacing coachF.
				t Though as you approach her you're interrupted.
				im karateProfile.jpg
				karate Hey, this is a private gathering.
				player Right, I'm with the school, I just need to talk with instructorF.
				i Aiko! Back to practice!<br>Hey! You need something?
				player Actually, principalF asked me to ask around with the students, get a general idea of-
				instructor No need. Every single one of these girls is addicted and focused.
				player I... Addicted?
				i Yeah. Forget drugs, forget premarital sex, these athletes are addicted to the runner's high. <br>Casey! Careful! If you injure or pull those god-touched hamstrings before the month's over, I will bench you!
				im trackProfile.jpg
				track Sorry coach!
				i *ahem*<br>You can tell principalF my team is in good hands. We'll be ready for the physical education meet.
				player What about the PTSA meeting?
				i ... The what? <br>Oh, right. That. I think I was planning to bring up that blonde nicotine junkie, and on removing the gym uniform. Once me and my team are officially part of the school they'll just cramp our style.<br>Just bring those up for me.
				player Oh, sure. <i>Huh. One less person for me to cor-</i><br>Wait, replace the uniforms with what?
				i Are you hard of hearing? I said remove, not replace. Clothes hold-
				im bikiniProfile.jpg
				bikini Coach, do I really need to wear this?
				i Chelsea you're god-damn beautiful in the water, but you need to lose that shy streak! Less fabric, less resistance!<br>Whatever, I'll attend. Somebody needs to defend the position that athletes should be allowed to train naked, and it probably has to be a competent athlete, not... You. <br>No offense.
				player None taken. Thanks, I'll be going now.
				i Yeah yeah. <br>Lansley! You're doing incredible girl! You've been abstinent for at least a week now, right? It's paying off! 
				im 124.jpg
				gymnast C-coach! that's private!
				t Her coaching style is a bit... Unique. Hopefully you'll find an opening to get her on your side soon enough.
				t It seems like instructorF and the girls are pretty tightly knit. Maybe if you had their shedules you could try and pry at them one by one, but it seems like you'll need to find some way to hypnotise them all at once.
				t Maybe if you had a second hypnotist who knew some special technique, or if you had access to something more powerful than conventional hypnosis?
			`);
			raiseTrust("instructor", 1);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "statusQuo": {
			writeHTML(`
				instructor Come on girls, you got this!
				t It seems instructorF's crew are hard at work.
				instructor What's up? Listen, my nudity suggestion was for academic purposes, I'm not letting you oggle my teenage olympian squad. And if you're another one of those creeps that wants to volunteer to clean their uniforms, I've got nothing more to say to you except 'get a hobby'. 
				t Without some way to corrupt them all at once and ensure no witnesses, you won't be able to corrupt her.
			`);
			if (checkFlag("succubus", "instructor") == true) {
				writeFunction("writeEncounter('succubusSupport')", "Call in succubusF");
			}
			if (checkFlag("scarf", "instructor") == true) {
				writeFunction("writeEncounter('scarfSupport')", "Call in scarfF");
			}
			if (checkFlag("incubus", "instructor") == true) {
				writeFunction("writeEncounter('incubusSupport')", "Call in incubusF");
			}
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "succubusSupport": {
			addFlag("instructor", name);
			writeEncounter("corruption");
			break;
		}
		case "scarfSupport": {
			addFlag("instructor", name);
			writeEncounter("corruption");
			break;
		}
		case "incubusSupport": {
			addFlag("instructor", name);
			writeEncounter("corruption");
			break;
		}
		case "corruption": {
			writeHTML(`
				t You call in your support.
				...
				succubus And with just one turn...
				incubus Alright, the clock starts... Now.
				scarf Hmhm~ I think you'll find I work fast. Try not to blink, or topple over.
				t The effects are indeed quick, your vision becomes... Wobbly, for a moment, but your assistant's hand on your shoulder snaps you out of it leaving you mostly unaffected.
				succubus Relax, alright? I've got other tricks if this doesn't work. Project confidence. Go talk to her, once it's clear she's being manipulated, strip and get to work.
				scarf Go ahead. You get her talking. She should fall under the subtle hypnosis quickly. And once she has, strip.
				incubus Now you get naked. Cock out. She's probably already affected.
				player Wait, strip? Right in front of all of them?
				succubus Listen, no rush, but I maybe didn't store enough energy for a long session. I assumed you'd act like the *man who fucked me unconcious and not like the little bitch I stole this doodad from.<br>What was I saying? Right, you got this in the bag.
				scarf Confidence, playerF. If they have time to think about the situation they may start to pick at the hypnosis. That would be far from ideal. Go ahead.
				incubus Or don't. Waste what time you have, I don't really care.If you're scared you could go make sure she's under.
				t You sigh. Fortune favors the bold, probably, so you walk over to instructorF.
				player So... Quite the variety in your team, huh? You need a lot of different areas to train in.
				instructor Ugh, it's bad enough we need to work around that bimbo and her team of... <i>Volleyball players</i>. Honestly, it's just dodgeball with more jumping.
				player Isn't volleyball part of the olympics? 
				instructor It shouldn't be. Any sport where your performance relies on orhers, especially an incompetent bunch of idiots, should be dropped.
				player I-
				instructor 'Oh, you shouldn't take it so seriously. You already scored one gold.' Fuck 'em. The audience should've rushed in and choked them out on a mountain of fat dicks!
				t ... That's probably your que. You turn back to your partner for confirmation, and they nod.
				succubus You got this, *master! Just pretend they've got dicks and my complexion and you'll be hard as a rock!
				scarf Getting cold feet?
				incubus Tick tock. 
				t No turning back now. In a moment, you're standing naked.
				instructor And for another thing, why the hell can't you throw out a team mate? I-<br>... What are you doing?
				player Just thought I'd... Volunteer to help with the training?
				t There's a cold silence.
				instructor ... Oh, well I guess. They could use some variety in their cardio. Which one first?
				t Success!
			`);
			data.player.time = "Night";
			writeFunction("writeEncounter('sceneSelect')", "Continue");
			break;
		}
		case "sceneSelect": {
			sceneSelect();
			break;
		}
		case "completeQuo": {
			sceneSelect();
			break;
		}
		case "finale": {
			writeHTML(`
				i Great work today, all of you! And you too!
				t You're surprised to feel a pat on your back from instructorF.
				i Look at them!
				player I've done a bit more than that.
				i Haha, yeah you have! I've never been able to push them this hard! Hey, you ever been interested in doing this full time?<br>I honestly don't even know what a counselor even does!
				t You're feeling pretty exhausted, yet as instructorF and the rest of the team start to gather around you, each gleaming with their own sweat and sexual fluids, the offer does seem tempting.
				t While you'd still like to run the school, setting your focus on this team afterwards doesn't seem like a bad idea...
			`);
			writeFunction("writeEncounter('endingAccept')", "I'll take you up on that");
			writeFunction("writeEncounter('endingRefusal')", "I have bigger goals in mind");
			break;
		}
		case "endingRefusal": {
			writeHTML(`
				player I might drop in now and again, but I'll focus on the upcoming PTSA for now.
				i Eh? Oh, right! Yeah, I was gonna bring up exercising naked, but honestly seeing the girls like this... I think we should go a lot farther.
				player I've got quite a few plans myself, actually.
				t And as you begin to explain, instructorF gives you her full attention. Even chiming in with a suggestion every so often.
				...
				player It's getting late. I should-<br>Oh, boy...
				i Heh, you've had quite a workout! No worries, I'll take the girls home. And if you need any support during the meeting, I've got your back!
				t You've got instructorF's PTSA support!
			`);
			break;
		}
		case "endingAccept": {
			writeHTML(`
				player You know... I think I'll take you up on that offer. I'll need some help convincing principalF to let me on permanently though.
				i Hah! She and I are practically sisters at this point. And besides, once she sees our results she won't even think of turning you down!
				...
				t And so you've joined the team...
			`);
			writeFunction("writeEncounter('endingInstructor')", "Continue");
			break;
		}
		case "endingInstructor": {
			writeHTML(`
				t Life as a co-coach isn't all fun and games. Sure, on some days it's about supporting the girls as they struggle to overcome a big plateau. Or about helping instructorF teach them a new technique.
				t Honestly, a surprising amount of time is spent actually seriously training. But on some days the routine is more your workout than theirs. These are the reward days, celebrating accomplishments like Aiko making the news for her accomplishments...
				im 153.jpg
				t Or when Bianca gets recognized by a major sports sponsor...
				im 154.jpg
				t Or when Casey beats her personal best...
				im 155.jpg
				t Or when Lansley masters a seemingly impossible move...
				im 156.jpg
				t On days like those you're pushed to your limits. But today of all days, everyone's hard work pays off. Those gold medals are finally in sight.
				im 135.jpg
				t You wipe the sweat off your brow, exhausted and weary. instructorF cheers in congratulation while your surprise guest looks on in shock.
				principal I... I...
				t Having come to congratulate the girls herself, principalF is left speechless at the sight of the aftermath of your 'reward session'.
				t Luckily your stamina has improved in the time you've spent on the team, because you'll need to hypnotize and break her down too before the day's over. Luckily, you've got a full team of helpers to hold her down.
			`);
			setTrust("instructor", 1);
			unencounter("instructor");
			writeFunction("loadEncounter('system', 'credits')", "The End");
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "trackFuck", name: "Casey's Training"},
	{index: "trackLast", name: "Casey's Awakening"},
	{index: "bikiniFuck", name: "Bianca's Training"},
	{index: "bikiniLast", name: "Bianca's Awakening"},
	{index: "gymnastFuck", name: "Lansley's Training"},
	{index: "gymnastLast", name: "Lansley's Awakening"},
	{index: "karateFuck", name: "Aiko's Training"},
	{index: "karateLast", name: "Aiko's Awakening"},
	{index: "instructorFuck", name: "Going for Gold"},
	{index: "instructorLast", name: "The Olympian Gauntlet"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "trackFuck": {
			writeHTML(`
				im 113a.jpg
				t It seems like it didn't take long for the common sense manipulation to affect Casey, she's already casually going bottomless.
				player You certainly look comfortable.
				track Eh? Oh, yeah, thanks! Streaking's pretty fun, not sure why I never gave it a shot at school before.
				is You've been doing it on your days off? That's the spirit! Nothing gets your heart racing like wind on our naked body.
				isf You've been doing it on your days off? That's the spirit! Nothing gets your heart racing like wind on our naked body.
				track Yep! Though I've only done it at night so far. I was trying to build up the nerve to do it during daytime, but...
				t She stops, suddenly, looking confused.
				track ... Huh. I'm not sure why, actually. I was hoping somebody would see me, that I'd get pinned down and fucked on the street, but wouldn't it be better to streak during the day for that...?
				succubus Psst, hey, maybe nip this line of thinking in the bud, before she logics her way out of the spell?
				incubus Hey, sorry to interrupt, but you should probably crash her train of thought. This magic's got its limitations and critical thinking is ine of them.
				scarf That's... Interesting. playerF, would you care to give some input before miss Casey thinks too hard about the situation she's in?
				player Right, right. Casey, bend over. I'll give you what you're looking for.
				track Ah, right! I've already got someone here to rape me. Or, I guess that's not the right word. Here.
				im 114.jpg
				track From behind, please. You're a lot hotter than my usual fantasies, by the way, mind being rough?
				im 115.jpg
				track Hey, coach, how's my form? I don't wanna pull anything.
				is You look great as usual. Careful not to extend the knees, can't have those god-touched hamstrings getting pulled.
				isf You look like a good bitch, Casey. I'm sure you'd get assaulted in a heartbeat going out like that.
				track Thanks! I've been practi-
				im 116.jpg
				track AAAAH-!
				t Her scream is shrill and sharp, like for just a moment her true self returned, only to be quickly smothered by her closeted exhibitionist heart.
				t Her eyes water, and sweat running down her face is quickly mixed with drool from her mouth as she starts living out her deepest fantasy.
				t You treat her as she asked you to; roughly. And the fluid dripping down her thighs shows her appreciation.
				track Aah~ Fuck! I'm gonna...
				im Cumming~!
				t You pull out to the sound of a wet splortch as a mixture of cum and her fluids leak onto the ground below. She pants, sweaty from her workouts, but she takes a deep breath and in one motion stands up and pulls off her top.
				track Fuck... Hey, coach?
				im 121.jpg
				track I'm gonna go for another lap, alright? I think I got some more in me, and the air feels pretty good on me.
			`);
			break;
		}
		case "trackLast": {
			writeHTML(`
				im 113.jpg
				track I... Huh.
				t As you try to take a moment to breathe, preparing yourself for your final round Casey is wandering around with a dazed look to her, as if trying to fiure out why she thought going bottomless was a good idea.
				succubus Shit, did the spell...?
				scarf ... You may want to grab her.
				incubus And that's time. See you around the shop. Or maybe I won't.
				t The look in her eyes is different from before. It seems the spell is broken, yet instead of running, she turns around.
				im 114.jpg
				track A-am I next?
				t You walk up behind her. Maybe she thinks she's still in the trance? Either way...
				im 115.jpg
				track Eeep! S-sorry, nerves.<br>I figue whatever you did to them, you probably also did to me, right? So there's no real point in resisting if I'm being mind controlled...<br>Plus, you're a lot hotter than the guys I usually imagine catching me at night, so... Could you maybe... Be...
				im 116.jpg
				track AAAAH-!
				t Her scream is shrill and sharp, like her rational mind overpowered her libido for just a moment and tried to speak out.
				track Ah~ Ah~
				t But it's quuckly silenced.
				t Her eyes water, and sweat running down her face is quickly mixed with drool from her mouth as she starts living out her deepest fantasy.
				t You deny her any gentle treatment and the fluid dripping down her thighs shows her appreciation.
				track Aah~ Fuck! I'm gonna...
				im 117.jpg
				track Cumming~!
				t You pull out to the sound of a wet splortch as a mixture of cum and her fluids leak onto the ground below. She pants, sweaty from her workouts, and collapses forwards. 
				t She's clearly broken, but a quick bit of hypnosis should make sure it sticks.
				...
				im 121.jpg
				track My pussy is... Is for my *master... I behave, and all my fantasies will come true...
				t As the rest of the girls shake off their post-fuck afterglow, you've finished off any hope of resistance in Casey's mind.
			`);
			break;
		}
		case "trackRepeat": {
			writeHTML(`
				im 115.jpg
				track Ah, you picked me this time? Mmm, I promise I won't let you down. I'll make sure my teen pussy satisfies your-
				im 116.jpg
				track AAAaaah-!<br>Fffuck, no, keep going! God, I'll neeeever get used to this feeling~!
				...
				im 117.jpg
				t Though the rest of the team tries to hide their jealousy of Casey, they aren't that subtle about it. After you pull out of Casey's cunt they quickly shift around to hide the fact that they were just playing with themselves.
				t The tease you are, they'll just have to wait.
			`);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "bikiniFuck": {
			writeHTML(`
				im 084.jpg
				bikini A-ah! Coach, this outfit barely even covers me!
				is Don't worry about it. Remember, keeping them in is a talent, but progress comes first! Don't worry, they're nothing everyone here hasn't seen already!
				itf instructorF doesn't answer, and instead just absentmindedly plays with herself.
				t As you approach her she's fiddling with her extremely skimpy bikini. She notices you staring, and her already deep blush grows even redder.
				im 085.jpg
				bikini O-oh, it keeps slipping! Excuse me *sir, could you help?
				t Ever the good samaritan, you help her out with her little wardrobe malfunction, only you're a bit clumsy too. Your 'help' quickly winds up with you both in an 'unfortunate' position.
				im 093.jpg
				bikini Ah, *sir, you slipped! 
				is Feeling the burn? You aren't slacking off, are you?
				itf Still leaking, instructorF approaches the two of you, clearly interested in a better view of the titfuck.
				bikini Coach? Ah, sorry, this *man and I were just-<br>Ooh...
				t She's having a hard time explaining herself as you quickly get into a good pace, slapping your pelvis against her tits with each thrust. Her nipples were already erect, but it seems like they're only getting harder now that instructorF is watching her.
				is Good to see you overcoming that shyness! But titfucking isn't a great workout while he's doing the thrusting. After he finishes I want you doing laps, topless this time!
				isf Ghh... Cmon, what are you waiting for! You're clearly getting off on this, so... Sweat! Play with yourself! This is a great way to push past your limitations!
				bikini Y-yes coach!
				im 094.jpg
				bikini Ah~!
				t You cum onto her face, painting her reddened cheeks a gooey white as her hand rubs beneath her bikini's bottoms. As you stand up and move to rip them off though, you're interrupted.
				succubus Alright, she's good. We've still got more!
				scarf Don't spend all your time on her, we should hurry before we have an un-tranced audience.
				incubus Yo! I know she's stacked, but the others still need dick if you want to avoid getting caught!
			`);
			break;
		}
		case "bikiniLast": {
			writeHTML(`
				im 084.jpg
				t Still dripping from her finished laps, and maybe from enjoying the show, the girl in the bikini approaches your conquests like she's stumbling onto the battlefield.
				bikini W-what... What was I...
				im 086.jpg
				bikini Ah! W-wait, what are you doing?!
				scarf Oh my, it seems she's snapped free.
				succubus Ghh... Hey, uh... Sorry, I need to... Nap...
				incubus Alright, time's up. Work your own magic on her, I'm gonna finish up this gacha rolling and go home.
				t With your support gone, the girl's eyes quickly flash in realization. You of course take this opportunity to make your move.
				im 087.jpg
				bikini Ah! instructorF?! A-are-
				t instructorF approaches the two of you, gently shushing the girl.
				isf Calm down. This is part of your training too.
				bikini What?! How is this-
				im 088.jpg
				bikini Ghhheee-!!!
				isf Relax. This is the whole point anyways. Get the medals, get pounded during the celebration, right? Just a little bit ahead of schedule.
				im 090.jpg
				bikini N-no, I-
				instructor Oh come on, I saw how you lit up when I talked about exercising naked. Don't be ashamed of yourself, you're beautiful!<br>Hey, slow down and lemme see how wet she is.
				bikini D-don't, no!
				im 089.jpg
				i What, you gonna blame this on the pool? I don't think so. Now just relax!
				t As you begin thrusting again the girl's panicked gasps start getting higher.
				track Gh... Cmon Bianca, relax!
				gymnast Mmm... I wonder how he'll taste afterwardss...
				karate Eheh... Ehehehe...
				t Her head must be spinning at this point, with her coach, and each of her teammates, those who are still able to speak coherently, all clearly supporting the *man who's pumping into her. She's cracking by the second, and good thing to, because...
				im 091.jpg
				t In one smooth motion you push in and start to unload your cum in her tight pussy, the position perfect to put on a show for your audience.
				bikini I... I don't...<br>A dream... It must be...
				t Delirious, it's time for you to finish and make sure this whole team is yours. You whisper into her ear, using your wet thrusts as a metronome.
				...
				im 092.jpg
				bikini N-nothing... Nothing's unusual... Whatever *master says...
				t As the rest of the girls shake off their post-fuck afterglow, you've finished off any hope of resistance in Bianca's mind. You set her down.
			`);
			break;
		}
		case "bikiniRepeat": {
			writeHTML(`
				im 087.jpg
				bikini Aaah, i-it's too big! W-wouldn't you rather use my t... my tits?
				instructor Deep breaths, Bianca. Relax.
				bikini Deep breaths. Right. Okay. Hoo-
				im 088.jpg
				bikini Haaah~
				im 090.jpg
				bikini Ah~ Ah~!
				instructor Every other thrust, Bianca. I know it <i>feels</i> like you're underwater, but you're doing great!
				im 091.jpg
				bikini Cumming~!
			`);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "karateFuck": {
			writeHTML(`
				im 101.jpg
				t Seemingly uncaring that she's completely naked, Aiko still looks at you with disdain.
				karate ... What are you looking at?
				player At my next fuck. Bend over.
				karate As if! Disgusting creep, back away!
				t You glance over at your partner, who just shrugs.
				succubus Hey, it rewrites common sense and reveals inner fetishes. I never said it'd make them loyal or anything.
				scarf Don't look at me, I never said this was a foolproof method. Perhaps her darkest desire is to act catty?
				incubus What? You get what you paid for. Her inner desires are awoken, and she wants to act like a bitch. Treat her like one.
				is Hey, Aiko! That's no way to act to someone trying to help us!
				isf Bitch!
				t The two of you are interrupted by instructorF grabbing Aiko by the arms.
				karate You fucking whore! Let me go!
				is Just... Relax! *He's here... To help! Girls, help me get her on top of playerF!
				isf Cut the bullshit... This'll be good for you! playerF, get into position! Girls, help me hold her!
				im 102.jpg
				karate What the hell are you doing?!
				t Despite her attitude her 'struggling' is clearly only for show, as she lets herself get pushed around until she's atop you.
				t Having been in the middle of conditioning she's covered in sweat, but there's one part of her body clearly showing anothing kind of wetness.
				im 103a.jpg
				karate Ah! Braindead sluts, let me g-
				im 104.jpg
				karate Ooough~!
				is Come on Aiko, get into the rhythm!
				isf Quit your bellyaching, and be a good little slut! He won't fuck you any harder for being a bitch!
				karate Nnhooo~!
				is I know that shaking, just... Enjoy yourself!
				isf Drop the act! I can see you cumming!
				karate Nnggh... No~! I'd never c-... Cum from a filthy...
				im 105.jpg
				karate Cooock~! Cock~!
				im 106.jpg
				karate Hah... Hah... I-is that all you've got? I could... Could barely feel you inside me... And you barely shot a drop of cum inside me...
				is Hah... Aiko, I see you need some additional training. playerF, go ahead and help the next girl, I'll handle Aiko's attitude.
				isf Greedy slut, I'll teach you some honesty myself!
			`);
			break;
		}
		case "karateLast": {
			writeHTML(`
				im 101.jpg
				t Seemingly uncaring that she's completely naked, Aiko still looks at you with disdain.
				karate ... You... What did you do to us?
				succubus Uh, boss? I'm out.
				scarf Oh my, it looks like she's free.
				incubus And... Time. See you around, if you aren't in jail, I mean.
				t You take a step towards Aiko, who takes a step forwards in turn. She's sweating from her exercise, but she's probably got more left in the tank than you do. If she takes you down, or if she escapes...
				t You're interrupted as she's tackled from behind, instructorF and Casey pinning her down.
				karate No! Stop, let me go! He's in your heads! He needs to be stopped!
				track We're not letting you hurt him!
				isf Don't worry Aiko, you aren't thinking rationally. You'll see clearly soon.
				...
				karate No, please, instructorF, Casey, snap out of it!
				isf You'll see clearly soon, Aiko. Just relax.
				track Yeah! It feels super good! Lansley is still playing with herself on the floor from when she throatfucked herself on him!
				im 103a.jpg
				karate AAAAH-!
				isf There you go, let it all out. Nobody's around at this hour, just let it all out...
				track Just think of it like exercise! One and two, one and two, one and two!
				t Though unintentionally, Casey's chanting is helpful. Whispering into Aiko's ear while maintaining a rhythm, you're able to lay the foundations for a trance against her crumbling psyche.
				...
				im 104.jpg
				karate Ooough~! Gonna... Gonna...!
				t Persistence prevails, and slowly you break through her iron spirit with enough pounding.
				isf Good girl! Keep it up!
				track Just a little more, I can see it on *his face!
				im 105a.jpg
				karate Cumming~!
				im106.jpg
				karate Hah... Hah...
				isf How do you feel, Aiko?
				karate Like... Like I want more...
				t Her proper conditioning finished, her will to fight has vanished. It's a rush job but it seems to be sticking as Aiko is lifted off of you.
			`);
			break;
		}
		case "karateRepeat": {
			writeHTML(`
				im 100.jpg
				karate Hmph! What do you think I am, your personal whore? If you're thinking I'll bend over on command, you've got another thing coming!
				...
				im 104.jpg
				karate Ooh~! Ooh fuck me~!
				t She still won't drop the bitchy persona until you give her what she really needs, but at least her teammates are glad to volunteer to help out. Especially if they get to play with themselves as they do.
				im 105a.jpg
			`);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "gymnastFuck": {
			writeHTML(`
				im 123.jpg
				gymnast Hah... Hah...<br>Ah, hello *sir! Just trying to cool down...<br>Hey, do you know if you can get off from exercise?
				player I don't-
				gymnast Hey, and, and, could you pull my leotard a little tighter, and-
				player Are you-
				gymnast And, and... Gaaaah! I just... Can't touch, keep exercising. No touching myself, gotta stay focused!
				t She stretches forwards over and again, each time dipping lower than the last. The is revealing how frustrated she is on the inside, seemingly from a long abstinence period.
				gymnast One, and two, and one and two and...<br>Cooooach!
				is Yeah? Lansley, if this is about the abstinence thing, you're not getting any leeway from me! Frustration leads to better gains, keep working!
				isf Mmm...? Lansley, you're not cumming, so shut up about it! I want your hormones racing for the competition, that means you do not touch your little teen twat until then! Am I clear?!
				gymnast Ghh... Yes coach!
				t As frustration continues to build in her eyes, you decide to help. Obviously ruining her abstinence streak would be a horrible shame, so...
				im 125.jpg
				t You give her something to distract herself with.
				gymnast Ah...
				im 126.jpg 
				t And she takes to it like a fish to water. She's flexible in more ways than you first expected, as she takes you deep into her throat
				t Her hands kept away from her pussy, she still tries to cheat her abstinence by doing the splits and grinding against the floor.
				t As as her tongue dances inside her already-overworked mouth, she lets out a moan signaling her cheating is effective.
				im 127.jpg
				im 128.jpg
				t She lets out a gasp for air as soon as you give her mouth a good stuffing. There's a small cough, but otherwise it's clear she's doing her best to swallow as she grinds her ass back and forth against the floor.
				is Lansley, what did I just say!
				isf Lansley, what did I just say!
				t In response Lansley just lets out a messy giggle, finally finding relief. It's pretty obvious given the growing wet spot on the floor beneath her.
				is Lansley... Fine, fine, we start again. This time an accelerated course. Gimme ten edges, now!
				isf You little slut! Fine, you wanna cum? Let's see how how much you can cum, then! I'm not stopping until I've wrung every last drop of defiance out of you!
				gymnast Ehe... Ehehe...
				succubus Hey, boss, at the rate you're going... Nevermind, who's next?
				scarf Not a poor job at all, although she seems like she would be easy prey, even without the hypnosis. Who is next?
				incubus Amateur. Everyone knows you arch farther forwards. Grinding is shit if you can't rub your clit.<br>Hey, don't forget you're on a timer.
			`);
			break;
		}
		case "gymnastLast": {
			writeHTML(`
				im 124.jpg 
				gymnast And... That's... Wait, how many? Coach, I-<br>... Coach?
				scarf Oh my, it seems she's snapped free.
				succubus Ghh... Hey, uh... Sorry, I need to... Nap...
				incubus Alright, time's up. Work your own magic on her, I'm gonna finish up this gacha rolling and go home.
				t With your support gone, the girl's eyes quickly flash in realization. You, however, are quick to act.
				im 129.jpg
				gymnast Ah, hey! What are you-<br>Coach! He-<br>Coach!?
				isf Hey, relax. I know you've been pent up lately, you've been doing a good job.
				gymant Coach, *he's gonna-
				isf You seem stressed. Relax, you can get off today.
				t Her struggling slowly begins to die down.
				gymnast I don't-<br>Why are you-<br>O-oh! This is a dream! Ahah, ahaha-
				im 130.jpg
				gymnast Mmmm, fuck!
				t You start thrusting, the fact that every line of wetness dripping down from her pussy lands in her hair and on her face is a happy accident.
				t Only a few thrusts in and her legs are quaking.
				gymnast Ghh, harder~! Fffuck you coach!
				isf Watch your language!
				gymnast Nghh, no! This is my wet dream, so I can teeeeell~!<br>Tell you to go to hell~! I've wanted to cum for days now, but you... You... Cummig~!
				im 131.jpg
				gymnast Guhhh~<br>Hot cum... Oooh, I can feel it... I think I have a new fetish...
				t Delirious, it's time for you to finish and make sure this whole team is yours. You grab your pendant and start waving it at her unfocused face.
				...
				gymnast A dream... Life with *master is just a dream...
				t As the rest of the girls shake off their post-fuck afterglow, you've finished off any hope of resistance in Lansley's mind. You set her down.
			`);
			break;
		}
		case "gymnastRepeat": {
			writeHTML(`
				im 129.jpg
				gymnast P-please sir, I need it... I don't know what's wrong with me, ever since you last <i>used</i> me, I haven't been able to-
				im 130.jpg
				gymnast Mmm~!
				...
				im 131.jpg
				gymnast Ehe... Ehehe... Cumming... Feels good...
				instructor She's a real orgasm junkie at this point, but at least this way she can't get off on her own...<br>Thanks for helping out, playerF, maybe this time she'll focus on her practice instead of how the leotard feels on her bare clit.
			`);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "instructorFuck": {
			writeHTML(`
				im instructorProfile.jpg
				i Alright, who's up?
				player You are.
				i Eh? But... Ah, of course! A good show'll motivate them to work harder! 
				t She wastes no time at all in stripping down.
				im 10.jpg
				isf Ah, it's been a while. Used to be I couldn't go a day without cumming. A shame that kinda mindset is frowned upon by prudes.
				im 03.jpg
				isf Alright, no holding back! For the good of your team, make me your bitch!
				player No hesitation, huh? You really want them to see you like this, don't you?
				isf Wha... Come on, don't tease me!
				succubus Yeah boss, I'm kinda using a lot of energy on her in particular...
				scarf Her mindset is quite twisted. Are you not in a hurry?
				incubus Not the smartest use of your time, boss.
				player Quiet. instructorF, this isn't just some quickie. This is about you, and them.
				t You turn her head to face her precious would-be medalists.
				player This isn't just some exercise routine to you, and you know it. This is about how you want them, and yourself, to be the best little whores they can be. How do you feel, knowing what I'm about to do to them?
				isf I... I don't...
				player Speak honestly, or I'll satisfy myself with them instead.
				t instructorF bites her lip, trying to resist.
				isf I... Won't...
				track Oh, how about me? I want-
				isf No! You shut your little tramp mouth! I didn't slave away, and suck up to that uppity prude principalF so that I could-
				im 04.jpg
				track Ouhhh~!
				player Good. Honestly gets rewarded. Loyalty gets rewarded. Now, keep going.
				...
				im 05a.jpg
				isf Hah... Hah... A-another...
				player Good, it seems like you've finally taken the lesson to heart.<br>Now, look at them, and tell me what you see.
				t instructorF looks towards her team.
				isf I... I see teenage brats in need of a lesson. A lesson <i>you</i> can teach them.
				succubus Damn, the look in her eyes...<br>She reminds me of you, *Master. Now let's finish the rest before I run out of energy.
				incubus You really did a number on her, wanted to be extra thorough? Careful, you spent a lot of time on that little plan.
				scarf My my~ I never thought I'd feel so hungry to break a will again~<br>If this is what you have planned for the whole school... Mmm~<br>But don't get ahead of yourself, you should take care of the rest before they work themselves out of the trance.
			`);
			break;
		}
		case "instructorLast": {
			writeHTML(`
				track Oof... Coach, running like this is making me... Is it alright if I take a break to cum again?
				i No dice! Work off that energy with another lap. If you're still horny, <i>then</i> you can ask our assistant for another.
				bikini C-coach, Lansley won't listen to me! She keeps rubbing-
				i Ignore her, she'll learn her lesson when I slap a belt on her. You head back to the water.
				im instructorProfile.jpg
				t If it weren't for the fact that her latest idea for an education plan involved you dicking down her team, instructorF really would be giving off the vibe of a modern coach.
				succubus Hey! Snap out of it. You got enough left in the tank for her?
				incubus Oho? Is the old man throwing in the towel, or are you just taking in the sight of the meal before you eat it?
				scarf Hmhm... If I didn't know amy better, I'd say that's respect in your eyes.<br>Ready for desert?
				player I can take her. We have enough left to keep her under? It'll take me a while to overpower her loyalty to the girls.
				succubus Even better, I've got enough left to supercharge the spell. You'll do the heavy lifting, but I'll set the stage for you.
				incubus Oh, honey. You have more time left than you could need. In fact, I'll throw in a little bonus for not wasting my time~
				scarf Of course~<br>In fact, with her little fitness gremlins taken care of, I can focus my attention on her. Show me something wonderful in exchange, alright?
				t You nod, and your partner gets to work improving her trance while you ready yourself for the final stretch.
				...
				i You... How dare you?!
				t Your short break to catch your breath is interrupted by instructorF roughly pushing you from behind.
				i My girls... You defile them, and you fuck with my head... If you think you can get away with this...!
				t She sounds furious, but as you turn around...
				im 03.jpg
				i I don't know how you tricked me, or my team, but you're gonna pay for this, motherfucker!
				t Your partner gives an enthusiastic thumbs up as instructorF shows exactly how far the trance has pushed her, spreading her cheeks to boldly show off her ass and pussy.
				player Huh, did the hypnosis loop all the way around?
				succubus Yeah. At this point her common sense is twisted into a pretzel. Just a little push and it'll snap~<br>Oh... I think I need a nap... You take it from here, alright? Hypnotize her with something thicker than a pendant, if you know what I mean~
				scarf Indeed, a few helpful hypnotic suggestions from yours truly, and she's ready to be the easiest prey you've taken so far~
				incubus Hehe, the human brain wasn't meant to be fucked up like this. I used the rest of your hypnosis time, but... Well, let's just say it'll be worth it. Satisfaction guarenteed~
				i You're in on this too? Hypnotized? Cut the bullshit! I'm gonna squeeze every drop of degenerate cum out of you until you're begging for mercy!
				t You walk up behind instructorF, but she's undaunted.
				player You won't last long. Having spent so long watching me fuck your girls, on the inside you must be begging for the first excuse for me to fuck that rebellious streak right out of you.
				i You piece of garbage... Even of each thrust of that fat dick forces every thought out of my head, even if you're the perfect size to pummel my sensitive g-spot and make me squirt all over the floor, I will <b>never</b>, <b>EVER</b>-
				im 04.jpg
				i OOHHH FUCK~!
				t The way she's spasming it's clear she's cumming from the very first thrust. All the built-up tension and jealousy from watching her girls get fucked into teenage cumdump messes shatters her will like a hammer on glass.
				t And every following thrust has a similar effect, quickly creating a mess with how much she's spraying onto the floor.
				t A hand on your shoulder pulls you out of it for a moment.
				succubus Hey, I got an idea... I maybe got a little something to help. No demonic energy left, but you remember what my saliva can do, right?
				incubus One last freebie before I head back to the shop. You know what demon saliva does to a *man, right?
				scarf You don't mind if I indulge myself for a moment with a little hypnosis, do you? Just something to make this nice moment last a little longer~
				...
				t The following momwnts blur together.
				im 05.jpg
				i Ooooh fuck~! Cum in my ass, please, PLEASE! I wanna be your little bitch!
				t Her transformation from a respectable coach into a broken, cum-covered mess is well past complete. All this aftermath is just icing on the cake.
				t Speaking of...
				im 06.jpg
				t As she looks back at you, right as you cum in her ass, it's clear there's no hesitation left.
				isf M-more... I'll do whatever you want me to... I'll follow you to the ends of the earth, I'll be your slave if it means more of that...
				t And your performance has drawn a crowd, too.
				track Coach, I thought *he was supposed to be helping us...
				karate Pathetic, the both of you. I'd never break like a bitch on a dick like that. Just try me!
				bikini Ah, coach, my nipples are getting harder, and my swimsuit keeps 'slipping'...
				gymnast Ehe... Ehehe... Wanna cum...
				t Your vision spins, but you feel a reassuring hand on your shoulder once more.
				succubus Nice work boss... Hey, back off, sluts!<br>You get out of here and get some rest, I think you really got what it takes to run this place~<br>Get some rest, I'll hold em off. You can come back afterwards if you wanna go at 'em again.
				scarf I think *mister playerF could use a break.<br>Oh, don't look dissapointed. Just think about how much fun you could all have next time if you behave yourselves~
				incubus Hey, forgot my-<br>Shit, you sluts still aren't finished? You get out of here, I'll exhaust them for now.<br>... I have my methods. You rest. Not gonna take the school if you're drained to death.
			`);
			break;
		}
		case "instructorRepeat": {
			writeHTML(`
				i Alright girls, take five! 
				player Will that be enough time?
				i It will if you're rough enough.
				...
				im 04.jpg
				i Fffuck, fuckfuckfuck~!
				track Ah, coach, it's been-
				i Fff... Another five~! Another five and we'll resume~!
				...
				im 06.jpg
				i Hah... Hah... A-another five... One more, and back to practice...
			`);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
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

function fuck(name) {
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	addFlag("instructor", name+"Fuck");
	if (checkFlag("instructor", "trackFuck") == true &&	checkFlag("instructor", "bikiniFuck") == true &&	checkFlag("instructor", "gymnastFuck") == true &&	checkFlag("instructor", "karateFuck") == true &&	checkFlag("instructor", "instructorFuck") == true) {
		var lastFuck = true;
		writeEvent(name+"Last");
		if (name == "instructor") {
			writeFunction("changeLocation('playerHouse')", "Finish");
		}
		else {
			writeFunction("writeEncounter('finale')", "Continue");
		}
		setTrust("instructor", 80);
		removeFlag("instructor", "trackFuck");
		removeFlag("instructor", "bikiniFuck");
		removeFlag("instructor", "gymnastFuck");
		removeFlag("instructor", "karateFuck");
		removeFlag("instructor", "instructorFuck");
		removeFlag("instructor", "succubus");
		removeFlag("instructor", "scarf");
		removeFlag("instructor", "incubus");
	}
	else {
		var lastFuck = false
		writeEvent(name+"Fuck");
		writeFunction("writeEncounter('sceneSelect')", "Continue");
	}
}

function sceneSelect() {
	document.getElementById('output').innerHTML += `
	<div id="wardrobeGrid" style="display:grid; grid-template-columns:auto auto auto;">
	</div>
	`;
	var characterArray = ["track", "bikini", "gymnast", "karate", "instructor"];
	if (checkTrust("instructor") == 80) {
		writeSpeech("instructor", "", "playerF! Here to volunteer again? I know my girls would be glad for the support.");
		for (instructorCount = 0; instructorCount < characterArray.length; instructorCount++) {
			document.getElementById('wardrobeGrid').innerHTML += `
				<img class="bigPicture" id="`+characterArray[instructorCount]+`Fuck" src="images/instructor/`+characterArray[instructorCount]+`Profile.jpg" 
				onclick="writeEvent('`+characterArray[instructorCount]+`Repeat')",
				onmouseover="wardrobeMouseOver('`+characterArray[instructorCount]+`Fuck')"
				onmouseout="wardrobeMouseOut('`+characterArray[instructorCount]+`Fuck')"
				style="filter:brightness(50%);">
			`;
		}
		writeFunction("writeEncounter('cancel')", "Go back");
	}
	else {
		var characterCount = 0;
		for (instructorCount = 0; instructorCount < characterArray.length; instructorCount++) {
			if (checkFlag("instructor", characterArray[instructorCount]+"Fuck") != true) {
				document.getElementById('wardrobeGrid').innerHTML += `
					<img class="bigPicture" id="`+characterArray[instructorCount]+`Fuck" src="images/instructor/`+characterArray[instructorCount]+`Profile.jpg" 
					onclick="fuck('`+characterArray[instructorCount]+`')",
					onmouseover="wardrobeMouseOver('`+characterArray[instructorCount]+`Fuck')"
					onmouseout="wardrobeMouseOut('`+characterArray[instructorCount]+`Fuck')"
					style="filter:brightness(50%);">
				`;
			}
			else {
				document.getElementById('wardrobeGrid').innerHTML += `
					<img class="bigPicture" id="`+characterArray[instructorCount]+`Fuck" src="images/instructor/`+characterArray[instructorCount]+`Fucked.jpg" 
					onmouseover="wardrobeMouseOver('`+characterArray[instructorCount]+`Fuck')"
					onmouseout="wardrobeMouseOut('`+characterArray[instructorCount]+`Fuck')"
					style="filter:brightness(50%);">
				`;
				characterCount += 1;
			}
		}
		switch (characterCount) {
			case 0:
				writeHTML(`
					t instructorF and the girls resume their training as if you weren't there, none the wiser aside from slightly unfocused gazes as they go about their practice.
					succubus Alright, go for it... I'll keep focused here, we should have enough to keep them long enough for you to enjoy yourself.
					scarf A success? Well, the rest depends on you I suppose~
					incubus That enough evidence for ya? Have at 'em.
				`);
			break;
			case 1:
				writeHTML(`
					t Despite the defilement of their friend, the training continues as though nothing were wrong.
				`);
			break;
			case 2:
				writeHTML(`
					t Two cumrags are well used, now for the rest.
				`);
			break;
			case 3:
				writeHTML(`
					t The two remaining women continue as if nothing is amiss.
				`);
			break;
			case 4:
				if (checkFlag("instructor", "instructorFuck") == true) {
					writeHTML(`
						t Only one left now.
						succubus Hooph... Almost out of... playerF, no rush, but I'm just about out of energy...
						scarf playerF, if I may, I wasn't quite expecting you to be so... <i>Thorough</i>. I'm not saying you should rush, but... Hrm...
						incubus Alright, go get 'em and-<br>Ooh, an event...
					`);
				}
				else {
					writeHTML(`
						t Only one left now.
						succubus The final stretch!
						scarf Hmhm~<br>I expect quite the show between you and instructorF~
						incubus Alright, go get 'em and-<br>Ooh, an event...
					`);
				}
			break;
		}
	}
}

function wardrobeMouseOver(wardrobeImage) {
	//console.log(document.getElementById(wardrobeImage).style.filter)
	document.getElementById(wardrobeImage).style.filter = "brightness(100%)"
}

function wardrobeMouseOut(wardrobeImage) {
	//console.log(document.getElementById(wardrobeImage).style.filter)
	document.getElementById(wardrobeImage).style.filter = "brightness(50%)"
}

var phoneArray = [//Lists the potential text events the player can receive at the start of the day, depending on their trust.
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
console.log(character.index+'.js loaded correctly. request type is '+requestType)

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