function writeScene(scene) {
	console.log("Now writing scene "+scene);
	switch(scene) {
		case "start" : {
			setToDom();
			writeHTML(`
			im scripts/gamefiles/logo.png
			t Salutations friends. I'm sick at the moment so please enjoy this gallery of scenes. First, be sure to
			`);
			writeFunction("sceneTransition('personalize')", "Personalize your experience");
			writeText("After that, please enjoy the scenes. These are mostly continuations of where the Human Alteration App Dom and Sub routes left off, so you may want to go back and play those. Since this is just a gallery there's no menu, so here is a link to my <a href='https://noodlejacuzzi.github.io/index.html'>Master Index</a> if you need one.");
			writeText("Please note that the dom routes feature real porn scenes while the sub route focuses heavily on dickgirls drawn by the artist Aya. Other than that content warnings are the same as the ones in Human Alteration App.");
			writeText("Once I'm better and have HAA v1.1 ready I'll banish this gallery. Until then, please enjoy.");
			writeSpecial("Dom Route");
			writeFunction("writeEvent('miscMakeup')", "Skill Improvement - momF's new makeup");
			writeFunction("writeEvent('miscPlumping')", "Skill Improvement - sisterF's Pussy Plumping");
			writeFunction("writeEvent('candyIntro')", "Candy Shop - Introduction");
			writeFunction("writeEvent('candyPlug1')", "Candy Shop - Plug Pop Free Sample Show");
			writeFunction("writeEvent('candyTaffy1')", "Candy Shop - Stretchy Taffy Free Sample Show");
			writeSpecial("Sub Route");
			writeFunction("writeEvent('mom4S')", "momF - Corruption Aftermath");
			writeFunction("writeEvent('friend5S')", "friendF - Corruption Aftermath");
			writeFunction("writeEvent('office5S')", "officeF - Alleyway Followup");
			writeFunction("writeEvent('dream1S')", "Mysterious Dream 1");
			writeFunction("writeEvent('dream2S')", "Mysterious Dream 2");
			writeFunction("writeEvent('dream3S')", "Mysterious Dream 3");
			writeFunction("writeEvent('dream4S')", "Mysterious Dream 4");
			writeFunction("writeEvent('dream5S')", "Mysterious Dream 5");
			writeFunction("writeEvent('vr0S')", "Virtual Reality - Setup");
			writeFunction("writeEvent('vr1S')", "Virtual Reality - Princess");
			writeFunction("writeEvent('vr2S')", "Virtual Reality - Succubus");
			writeFunction("writeEvent('vr3S')", "Virtual Reality - The True Demon");
			writeFunction("writeEvent('candyIntroS')", "Candy Shop - Introduction");
			writeFunction("writeEvent('candyRocksS1')", "Candy Shop - Pop Rocks Free Sample");
			writeFunction("writeEvent('candyTaffyS1')", "Candy Shop - Stretchy Taffy Free Sample");
			break;
		}
		case "personalize": {
			if (picturesDisabled != true) {
				document.getElementById('output').innerHTML += `
					<img id ="selfBig" class="bigPicture" src="images/none.png">
				`;
			}
			writeFunction("changeBody('male')", "Make me masculine!");
			writeFunction("changeBody('sissy')", "Make me cute!");
			writeFunction("changeBody('trans')", "Make me sexy!");
			writeText("This bodytype affects dom route scenes only for reasons that Human Alteration App's sub route goes into.");
			writeText(`Your name: <input type="text" id="nameSubmission" value="Jeffrey">`);
			writeText(`Mother's name: <input type="text" id="nameSubmissionmom" value="Lisa">`);
			writeText(`Sister's name: <input type="text" id="nameSubmissionsister" value="Jean">`);
			writeText(`Classmate's name: <input type="text" id="nameSubmissionfriend" value="Riley">`);
			writeText(`Officewoman's name: <input type="text" id="nameSubmissionoffice" value="Alexis">`);
			writeText(`Candy Shop Saleswoman's name: <input type="text" id="nameSubmissioncandy" value="Jynx">`);
			writeFunction("renameCharacter('demo', 'start')", "Finish personalizing");
			changeBody(data.player.body);
			break;
		}
		//Prologue
		default: {
			writeText("Something went wrong, and you've encountered a bug. Keep in mind where you just where and what you did, and let me know so I can fix it.");
			writeText("Here's a list of important details. If you message me directly with these jams, I should have a better idea of what caused the problem:");
			writeText("Error code: writeSceneFailure "+scene);
			writeText("" + JSON.stringify(data) + "");
			writeFunction("changeLocation('homePlayerRoom')", "Return home");
		}
	}
	//updateMenu();
}

function writeEvent(scene) {
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	console.log("Now writing event "+scene);
	var addendum = false;
	switch (scene) {
		case "miscMakeup": {
			writeHTML(`
			t Sitting down on the couch, you start doing some quick work with the app to have some fun and improve your skills. 
			t <i>momF obedience temporarily adjusted.</i>
			t <i>Local area common sense temporarily adjusted.</i>
			... 
			sp player; Hey, mom? You in here? 
			t You gently push open the door to her room. 
			sp mom; Yes honey? Did you need something? 
			sp player; Yeah, I was wondering if I could cum on your face real quick. 
			t She hesitates for a moment, but it's far from the strangest thing she's done lately. 
			sp mom; I... Well, if you want to. Let me just kneel right down here... <br>Isn't this a bit tame compared to usual? 
			t You ignore her and free your dick. She gives a soft coo of adoration at it's adorable size, then a breathy sigh as you begin to grow before her eyes. 
			t You ignore her and free your dick, basking in how completely entranced she is as your cock flops free. 
			sp player; You want it, don't you? Beg. 
			sp mom; Y-yes, I want it... 
			sp player; <b>Beg.</b>
			im images/real/makeup1.gif
			sp mom; Please, I want your cum, I want to feel your hot load on my face! 
			t Her body is on autopilot following your orders, but her mind is willingly along for the ride as she watches you slide your hand up and down your cock. She clearly wishes she could have a taste, but for now... 
			im images/real/makeup2.gif
			t Completely lost in the moment now, she humbly accepts as you begin to glaze her face in jizz. Her breathing is growing heavier as she smiles under your load, clearly she's already in heat from your degrading treatment. 
			sp mom; Th-thank you... 
			t Now it's time for the next phase of your plan. You walk over to her windowsill and quickly draw the curtain, allowing natural light to fill the room. 
			sp mom; What are you doing? 
			sp player; Get over here. Let anyone passing by see your face and start stroking your cunt till you cum. 
			sp mom; But-
			sp player; <b>Now.</b>
			t She whimpers and looks at you pleadingly, but you don't budge. As you open the window she realizes how serious you are. 
			t Adrenaline rushing through her she realizes the only way out of this is to play along as quickly as possible, so she quickly walks on her knees to the window. Everything from the neck down is hidden, but her cum-painted face is on full display. 
			t Though she looks pleadingly at you again, the wet sounds that become audible when her hand starts rubbing her snatch reveals she's enjoying this a lot more than she lets on. 
			t Still, your loyal submissive mother, she begins quickly trying to pleasure herself before anyone can she the debauchery of what's going on. While you get dressed. 
			sp mom; Ghhh~! Gonna cum, gonna cum~! 
			sp Passerby; im scripts/gamefiles/none.png; Oh hey, momF! Enjoying the fresh air? I love your new makeup! 
			t Even as her hips jerk as she grinds herself to an orgasm on her hand, it's too slow. One of her friends from nearby has noticed her. 
			t And it seems your experiment was a success! The woman pays no heed to your mother wantonly jilling off in front of her, and her brain completely believes the thick glaze on momF's face is a stylish new type of makeup. 
			sp mom; Ggghhhk~! 
			sp Passerby; im scripts/gamefiles/none.png; Pardon? 
			sp player; Sorry ma'am, mom's kinda busy at the moment. 
			t You close the window, the preliminary test having run it's course. It's a but rude to cut the conversation short like that, but you can use the app if your social standing gets in trouble. 
			t Meanwhile momF has fallen on her back and is panting like a dog in heat as she recoils from the powerful shame-gasm. 
			sp player; That was fun. Make sure you clean that off yourself before dinner. Feel free to enjoy it though. 
			t You leave the room, the sounds of audible *shlick*ing fill the air as you do. 
			t She'll wear herself out in a bit. After a quick rest you're back to fully charged, there's plenty left to do in the day for now. 
			`);
			break;
		}
		case "miscPlumping": {
			writeHTML(`
			t Stopping for a moment you start doing some quick work with the app to have some fun and improve your skills. 
			t The plug pop's bizarre plumping and sensitivity enhancements were pretty cool, so you start trying to work out how you could do something similar to other body parts at will. 
			...
			sp player; Come on, I want a clear look. 
			sp sister; F-fine, alright. 
			im images/real/plumping1.gif;
			t Because of your early modifications sisterF should be a pretty good test subject. You wouldn't want to increase the sensitivity of someone who's already got it pretty high already. 
			sp player; Okay... Let me see... 
			t <i>sisterF vaginal sensitivity increased 5x.<br>Custom variable "plumpness" increased.</i>
			sp sister; F-fuck~! 
			t She suddenly jerks on the spot, closing her legs as the feeling of cool air on her cunt is suddenly way more intense. Not a great idea as her legs closing causes another burst of pressure to shoot through her like lightning. 
			t <i>sisterF vaginal sensitivity increased 5x.<br>Custom variable "plumpness" increased.</i>
			t She writhes and yelps on her bed like she's been shocked. 
			sp player; Calm down, focus on how it feels. 
			sp sister; It... Ghh... <br>It feels like, white hot... 
			t She jerks and writhes again as her hand snakes down to lightly rub at her cunt lips. You still can't get a good view though. 
			sp player; Hold fucking still already, I wanna see. 
			t She finally manages to calm herself down, trying her best not to cum like a premature firecracker. 
			im images/real/plumping2.gif
			sp player; Whoa...
			sp sister; God, it's so much bigger... I wanna cum really, really bad right now... 
			sp player; No. No touching. 
			sp sister; What?! Wh-
			t She looks ready to scream and cry until she realizes you're getting your cock nice and ready. 
			sp sister; I don't... Holy shit *bro, I don't know if I can. 
			t You tell her to relax as you grab the lips of her now highly sensitive pussy. Immediately she beings squirming and crying out through clenched teeth. 
			t The sensitivity increases are starting to get fucky with her brain despite how low her sensitivity started at. 
			im images/real/plumping3.gif
			sp sister; G-gggaaaaahd fuck~! Cumming~! 
			t Sandwiching the length of your cock between her cunt lips, you enjoy the feeling of her extremely plump flesh and the copious amounts of lubrication she's generating. 
			t Once you get into a rhythm of thrusting she's thrown out of her rhythm and starts having trouble forming words. Wordless screams fill the house, especially as you start to play rough a little. 
			t Soon enough though the screams start trailing off, your cock is quickly soaked in squirted juices and sisterF stops screaming altogether. 
			sp player; sisterF? Sis? 
			sp sister; ...
			t She's out cold, the sensations must've been too much for her. It'd be best to start undoing the changes now, wouldn't want to risk pleaaure-overload brain damage or anything like that. 
			... 
			t The effects undone and sisterF back to normal (and conciousness), you feel like your skills have improved at least a little bit. At the very least you have a better idea of what the sensitivity limit is before the human brain checks out. 
			t But now that you're finished there's plenty more to do today! What fun will you have next?
			`);
			break;
		}
		case "candyIntro": {
			writeHTML(`
			t You push open the door to the candy shop, the little bell jingles. You have no idea what this little ticket in your hand will give you, maybe some stuff from Europe? The saleswoman inside greets you while walking between large stacks of boxes decorated in rainbows of color. 
			sp candy; Welcome, welcome! I'm in the middle of some organization at the moment, so feel free to look about-
			T As she speaks the woman spies the piece of paper in your hands and quickly sets her large box down. 
			sp candy; You're a VIP customer?
			sp player; I can come back sone other time, I was hoping you could tell me about this. 
			sp candy; No no no honey, you're a VIP customer! The merchandise waits for you, not the other way around. Normally we just sell regular confections and keep our secret stuff under wraps. Fantastic candies that can change your body in exciting and fun ways! Pop rocks that turn you into a quick-shot cum fountain, caramel that makes whatever you suck on turn yummy...
			T She starts counting things off on her fingers detailing a half dozen bizarre confectionaries.
			sp candy; Now some customers can't eat certain kinds of candies. If you've got no pussy, a candy that supercharges your ovaries isn't going to give you anything more than a tummyache. But, as a bonus, the store now has a 'free to try' policy! You get a chance to try out candies to see their effects before you buy them!
			t She takes a good long look at you, her gaze lingering more than a little at your crotch. 
			`);
			switch (data.player.body) {
				case "male": {
					writeHTML(`
			sp candy; A real slab of beef like you would probably get some real fun out of our pop rocks in particular. 
					`);
					break;
				}
				case "trans": {
					writeHTML(`
			sp candy; Our heart-heat suckers will put that womb-<br>Oh, sorry. I see now a girl with a jawbreaker like yours would have a lot of fun with our specialty taffy. 
					`);
					break;
				}
				case "sissy": {
					writeHTML(`
			sp candy; A cutie like you might really like to try out our plug pop. Girls these days go nuts for a chance to snack on a peach like yours. 
					`);
					break;
				}
			}
			break;
		}
		case "candyPlug1": {
			writeHTML(`
			sp player; Is this a buttplug? 
			sp candy; Made out of candy, yep! You know how when you suck on something sour you pucker up? Same here, but this also puffs up what you stick it into and supercharges sensitivity. Stick it in your mouth and you get plush sensitive fuckpillows for lips. That said it's hard to talk like that, hence the warning. 
			sp player; And if you use it as a buttplug? 
			sp candy; A puffy donut hole. Cleans you out inside too, perfect for rimming. If you're gonna buy one I totally see you using it in yourself and all the ladies in your life, but if you wanna try out a sample on me I'm totally in the market for a new plug. 
			`);
			writeFunction("writeEvent('candyPlug2')", "Continue");
			break;
		}
		case "candyPlug2": {
			writeHTML(`
			sp candy; Alright, lemme get undressed. Now I'm not the best girl to show this off, I use these pretty regularly so I'm already fully prepped downstairs at all times. 
			sp player; Are there any benefits to repeat usage? 
			sp candy; The sensitivity increase keeps building up. I started using them so I could double-stuff myself in the morning. Faster to cum that way, less days where I'm late to start my shift, you know? Honestly though I've had so many pops I don't even need my cunt stuffed to get off anymore.
			...
			im images/real/plugSample1.gif
			sp candy; G-gawd yes~
			sp player; Holy shit, is the muscle control part of the candy's effects too? 
			sp candy; No way honey, this's all me... <br>Nggh, now normally they'd be a lot smaller than this, but I'm a greedy girl~<br>Nnhg~! 
			im images/real/plugSample2.gif
			t Sighing between deep, pleasure-drunk grunts, she pushes the massive plug out of her ass. It's clear at this point she doesn't even need to touch her pussy to cum anymore. 
			t Once the plug is out she lets out a small whine, but makes sure you can see the effect the candy has had on her. 
			sp candy; I'll be using this one aaaall day hun, this one is big enough that it's meant for all-day use, but it'd be rude to not show you what these sweeties can do... 
			im images/real/plugSample3.gif
			t Her puckered donut asshole gapes and does its best to try and wink shut, the feeling of cool air in her rim clearly setting candyF off something fierce. 
			sp candy; So fucking ghuuuud~!<br>S-sorry hon, I know you probably wanna buy one now, but this little candyslut needs to close up shop for the day. There's no way I can do my job proper when all my ass wants to do is suck on this plug all day. <br>Though, I don't mind you watching... 
			... 
			t By the time her free sample show has finished it's started to get dark. You head home. 
			`);
			break;
		}
		case "candyTaffy1": {
			writeHTML(`
			sp player; Is this taffy? 
			sp candy; Stretchy taffy. Chew it and your body grows stretchier. You can pull your skin farther, I can even do the splits after eating one. Not to mention even the biggest insertions are totes okay. I'm talkin' horsecock big, no problem. You wanna try a sample? I'll chew one up if you promise to enjoy the show. 
			`);
			writeFunction("writeEvent('candyTaffy2')", "Continue");
			break;
		}
		case "candyTaffy2": {
			writeHTML(`
			sp candy; Now, for these sweeties the sky's the limits. My best record was a three-foot horsecock, seeing the flared tip in my womb was one hell of a show, but you still wanna pace yourself. 
			im images/real/taffySample1.gif
			sp candy; Start with two fingers... 
			im images/real/taffySample2.gif
			sp candy; Then three... Gawd... <br>Even if you aren't pushing yourself to your limits, the elasticity boost means any size feels great. Now... 
			im images/real/taffySample3.gif
			sp candy; M-move on to four... 
			im images/real/taffySample4.gif
			sp candy; Fuck fuck fuck~! 
			t At this point the pretense of this being an educational demonstration has vanished and it's clear she's just using this as an excuse to fist herself on the job. 
			t But as she writhes and squirts from anal pleasure, there's not much to complain about.
			`);
			break;
		}
		case "mom4S": {
			setToSub();
			writeHTML(`
				sp player; Hey, mom? I was wondering if you needed any help, around the house, you know? Laundry, or stuff like that.
				im images/drawn/0826.jpg
				sp mom; Oh, honey, of course! Cmon, there's plenty to do. It feels like we haven't spoken in weeks, actually. How has school been?
				T ...
				T You decide to spend the day helping out mom. It's not exactly the most engaging of work, but... You miss her. Having your mom turn into a cock-milk junkie really leaves you feeling alone in the world.
				T To sisterF's credit she's back to normal. Her previous dismay towards you is gone, replaced by the usual loving attitude you remember waking up to after the worst nights of your life.
				T Just having her listen to how you're doing at school, with teacherF's pressure and friendF talking to you, you feel yourself get all teary-eyed.
				T And when she notices...
				sp mom; Aw, honey, come here. Come give mommy a hug.
				T She pulls you in tight and you close your eyes. She's a lot softer, bustier too, but it's still your mom despite all that.
				T Then you breathe in through your nose, and the scent hits you. You open your eyes, and...
				im images/drawn/0827.jpg
				sp mom; It's okay, just let it all...<br>playerF? What's wrong? What are you loo-<br>Ah, of course. You hungry dear?
				T With everything that's happened, how crazy your life has become lately, you just nod your head on autopilot. Your mom just smiles patiently and sighs.
				im images/drawn/0828.jpg
				im images/drawn/0829.jpg
				sp mom; Don't worry honey, leave it all to mommy. 
				sp player; Do... Should I-
				sp mom; You don't have to do anything, just let mommy take care of everything. 
				T She unclasps her bra and sighs softly in relief. But the bigger sigh of relief comes when she hooks her finger into her cock-plug and sloooowly tugs it out.
				sp mom; Mmm... I love the way my cockhole winks at me...<br>Ah! Sorry dear, mommy's cock distracted her for a moment.
				im images/drawn/0851.jpg
				sp mom; Fff... J-just give mommy a second and she'll have a h-hot little snack for her l-little...
				im images/drawn/0852.jpg
				T Your mother used to be the sweetest, kindest, woman you knew. You never even saw her swear, but now...
				im images/drawn/0853.jpg
				sp mom; For her little cumguzzler~!
				T Beads of milk leak from her tits. Just one last time you want to reach out.
				sp player; I love you, mom.
				im images/drawn/0854.jpg
				sp mom; I l-love-
				im images/drawn/0855.jpg
				sp mom; Cumming~! Oh fuck, my cock, my tits~! Jizz~! Cum~! Milk~!
				T Her rational mind takes the backseat as her explosive orgasm rocks her brain and ruins the room the two of you were just cleaning.
				im images/drawn/0856.jpg
				sp mom; Oh fuck...<br>Oh baby, I'm sorry, mommy wanted to paint your mouth, but... Here, you can lick your snack off mommy's face for today, alright?
				T You just nod in agreement and lean forwards, tongue out. You don't have the energy to resist anymore.
			`);
			break;
		}
		case "friend5S": {
			setToSub();
			writeHTML(`
			sp player; What's up?
			sp friend; Are you free?
			sp player; Yeah, sure, but-
			T She doesn't answer anymore questions, she just drags you by the arm into an empty classroom.
			sp friend; C-check your seat.
			T You shrug and just decide to roll with it. You go to your desk and see a small pink remote with a dial sitting on it.
			sp player; What's this-
			im images/drawn/1090.jpg
			sp friend; It's for my... I'm wearing it in my, um...<br>I read online that couples have more fun if they use toys, and I've been holding back from cumming too, so...
			sp player; We're a couple?
			im images/drawn/1091.jpg
			sp friend; I know we don't do a lot of couple things, but I like... I like you. And you like me, right?
			sp player; friendF... If you think I'm just gonna sit back and push a knob while you cum, you're way off base.
			sp friend; I-
			sp player; Because if you're my girlfriend, I want this to be more intimate!
			im images/drawn/1101.jpg
			T It takes barely a few strokes before her balls begin to clench. Surprisingly it seems like your confession set her off more than your surprise stroking, but you can't help but want to be mischievous today.
			im images/drawn/1102.jpg
			sp friend; C-c-nngh~<br>Wha... Why?
			sp player; I'm no good with tech stuff, but I think even I can figure this out. I push it all the way up to turn it on, right?
			im images/drawn/1103.jpg
			sp friend; Oh go-
			im images/drawn/1105.jpg
			sp friend; ooooOOOOOD~!!!
			T The smell of the room is instantly squashed under a soup-thick cloud of jizz scent. The way she's bucking her hips, the complete lack of focus in her gaze... She's so cute you don't mind being a good *boyfriend and letting it splatter on you and get you a little messy.
			sp player; Wow, you really have been holding back. Let's see how long we can keep this going...
			im images/drawn/1106.jpg
			T With each rope she fires it lands on the floor with a satisfying SPLAT, pretty soon it'll soak your shoes, so...
			im images/drawn/1107.jpg
			sp player; Geez! You're gonna clean thi-
			sp friend; C-cummmm~! Cummmmm~!
			sp player; Oh, the vibe. Uh, lemme see.
			T You try to push the dial back down, but it catches on something. Being the genius you are, you try to force it.
			T *CRACK*
			sp player; Uh oh.
			sp friend; GHHHG~!
			T ...
			T After a while you finally managed to get the vibrator out and set it aside. The thing is buzzing like mad, you could probably scramble an egg with this thing.
			T friendF is laying on her desk, her dick finally softening. Her eyes are open but her brain is 100% off right now. The mess is... Well, it's a full workload for you to say the least. Her cum is so thick you can scoop up some in your hand and it clings together, you can actually make out each of the ropes she first fired. After that it's just a messy white goop. Kinda like a soup actually.
			sp player; ... I shouldn't give sisterF any ideas. Whelp, time to get a mop.
			T After a few layers of spooge are cleaned up sleeping beauty finally wakes up. Of course she's embarrassed at making you do all the cleaning, and at how massive the mess she made is, but you did break her new toy after all. In the end you don't have the heart to tell her you've already cleaned half of it.
			T But the kiss on the cheek that she gives you in the end makes all the cleaning worth it.
			`);
			break;
		}
		case "office5S": {
			setToSub();
			writeHTML(`
			T As you're walking home you notice a crowd is formed around a familiar spot.
			sp player; No way... No way is she still here...
			im images/drawn/1141.jpg
			sp office; For... For as long as there are still... Still cumsluts starving in the streets...
			sp player; Holy shit, you're still chained up? Are you alright? You people are starving this woman!
			sp ???; im images/none.png; Don't talk about our heroine like that!
			sp ???; im images/none.png; Yeah, she can handle anything!
			sp office; Citizens, please! Do not fear, for the Prostate Punisher needs no sustenance. My ability to deliver creamy justice in an unending stream is a sign that I was destined for this!
			sp player; Jesus, sisterF seriously fucked with your mind and body. This is too far, I'll text her and-
			sp office; Oooh my, I can see you still harbor darkness in your heart~!
			sp player; ... No, no I don't. Stop looking at me like th-
			T Suddenly arms grab yours.
			sp ???; im images/none.png; This child has been chosen for baptism! He is-Ghhhk!
			T Suddenly she lets you go, acting like she's just been socked in the face.
			sp ???; im images/none.png; Witchcraft! Villainy! 
			sp ???; im images/none.png; Let the heroine handle this, we need to get to safety!
			T The crowd begin to flee around you. You just sigh and look up to the sky.
			sp player; Alright sisterF. I appreciate the save, but you've had your fun. Let this poor woman g-
			im images/drawn/1139.jpg
			sp office; M-milky white blaster!
			T And just like that, you can see exactly how your day is about to be ruined getting splurted out of a heavily modified cock.
			T You sigh as it soaks into your clothes, sinking in and coating them forever in the scent of some psycho's cockmilk.
			T At least your sense of smell has been altered. It's actually pretty nice. All you can really do though is wait for it to be over.
			im images/drawn/1138.jpg
			sp office; Oooough~! I can't stop c-cumming~!
			T Your brain is starting to fog over, this is too much.  How can she still be going? She's been chained up here all day, where is this cumming from?
			T With no other choice, you decide to take matters into your own hands.
			im images/drawn/1134.jpg
			T Literally.
			sp office; C-coating evil in my ball-shlime~! I never wanna shtop!
			T But it isn't enough. For as much as she screams on about the power of justice, she actually has a point. She's cumming out ropes of jizz more powerful and potent than a horse could ever hope to match, and the stream is endless. With no other options you try the only answer you have left.
			im images/drawn/1130.jpg
			sp office; W-what?! Stop! That's not what my cock is for?
			sp player; That cum's got nowhere else to go. Relax your prostate or your balls are gonna explode.
			sp office; D-damn you, you monster! My heroic cock's baptism was almost done... <Br>O-oh my...
			T What happens next defies reason.
			im images/drawn/1126.jpg
			T Trapped, her massive load is pushed back down her urethra by the thrusting of your cock. You can see her balls throbbing as the old sperm is forced to mingle and smash together with her latest load.
			sp player; Good, now...
			sp office; Wait! If you pull out now-
			im images/drawn/1125.jpg
			im images/drawn/1124.jpg
			sp office; Fuckfuckfuck! My cum... My aching balls... My jizz is stuck~! Little ones, quit trying to impregnate each other and...
			T You can see the massive globs of cum, bloated sperms desperately fighting against eachother inside each bead of jizz slowly being forced out of officeF's contracting balls.
			sp player; Nope.
			im images/drawn/1132.jpg
			T With some quick thinking and a bit of improvisation, you put an end to the Prostate Punisher's seemingly endless spurtfest.
			sp office; Nnngh~! Nonono, no please! Please I <b>NEED</b> to cum!
			sp player; Then you can hope one of your groupies comes back and helps you out.
			im images/drawn/1131.jpg
			sp office; Y-you wouldn't! Please, it hurts!
			sp player; Really?
			sp office; N-no... Damn you! Taking advantage of my honesty like that. But please, my balls could barely handle two loads... If three of them are forced to mix together, I think my sperms actually might try to impregnate each other! My loads will be too big to cum out, and my brain won't be able to handle-<br>Where are you going!? Come back!
			T For today, you embrace the life of villainy. She'll be fine.
			T Probably.
			`);
			break;
		}
		case "dream1S": {
			setToSub();
			writeHTML(`
			T As you fall asleep, visions of your previous exploits come to mind. Yet, different.
			im images/drawn/1391.jpg
			im images/drawn/1392.jpg
			sp sister; ... *Bro...
			im images/drawn/1393.jpg
			T What could've been. If you'd had the app, is this the world you would have created? Would you have even known how?
			im images/drawn/1394.jpg
			T Her massive cock softens, the sheets alone enough to push her over the edge as the effects of the candy wears off.
			T With the sheet out of the way, all that remains is to take your prize, but...
			im images/drawn/1405.jpg
			T Blinding light overtakes your vision.
			`);
			break;
		}
		case "dream2S": {
			setToSub();
			writeHTML(`
			T The gentle hand of sleep takes your cheek. Soothing... Relaxing... You feel at peace, you feel powerful.
			T Your cheeks still burn at humiliations your brain flashes before your eyes. You want...
			im images/drawn/1436.jpg
			T Revenge.
			sp sister; Nooo. Please, don't do that.
			T Her sarcasm ends here. It's time to pay her back for everything she's done.
			im images/drawn/1438.jpg
			sp sister; Harder~!
			sp player; This isn't about what you want.
			im images/drawn/1439.jpg
			sp sister; Finally taking charge, huh little *bro?
			sp player; That's not my name!
			im images/drawn/1440.jpg
			im images/drawn/1441.jpg
			sp sister; Oooh~<br>You can be rougher, you know. I promise I won't break.
			sp player; Yes... You... WILL!
			im images/drawn/1442.jpg
			T She squeals out in pleasure as you force the toy in deeper. Her altered body quite receptive to the punishment.
			im images/drawn/1444.jpg
			T But even she has her limits. She's writhing, desperate for you to release her cumsacks, desperate to splurt into her growing jizz balloon.
			sp player; Anything to say for yourself as you break?
			T You release her balls, eager to see her finally crack, but...
			im images/drawn/1445.jpg
			sp sister; Mmm~<br>Not bad. I should make you a dom more often.
			sp player; Why...?
			sp sister; Ooh, those eyes...<br>Th-that look on your face...
			im images/drawn/1446.jpg
			im images/drawn/1447.jpg
			T You can see the ropes of jizz filling and distending her foreskin. And she keeps a close watch on how your gaze tracks her splurting cockhead.
			im images/drawn/1448.jpg
			im images/drawn/1449.jpg
			sp sister; Ahh... I gotta say little *bro. This is one of the best kinds of play I've ever had.
			sp player; I feel... Strange...
			sp sister; Probably a lack of sleep, I've been keeping you busy. Now, go back to bed and close your eyes
			T You follow orders like programming, and soon the vivid dream comes to an end.
			`);
			break;
		}
		case "dream3S": {
			setToSub();
			writeHTML(`
			im images/drawn/1468.jpg
			T This dream again... Always in her room, never faltering...
			sp sister; M-more... I can't sleep without more...
			im images/drawn/1469.jpg
			sp sister; W-what're you doing? Don't you dare-
			im images/drawn/1470s.jpg
			T She squirms and squeals, have you finally found her weakness? You press on with renewed vigor, eager to finally see her-
			im images/drawn/1471.jpg
			sp sister; Poor baby *brother. Always so eager to win he doesn't know how to have fun losing? Who's really breaking who, I wonder?
			T Red hot fury overtakes you. You can't keep getting pushed around like this anymore!
			im images/drawn/1472.jpg
			sp sister; W-why can't... Ooough~<br>Why can't you just enjoy yourself? We could be having fun together in my perfect world if you'd just-
			im images/drawn/1473s.jpg
			sp sister; Ooh, f-feisty... Too bad!
			im images/drawn/1474.jpg
			T She's enjoying herself tonight. There must be some kind of better answer...
			T Curious, there's a box next to her bed. The items inside feel so real...
			im images/drawn/1475s.jpg
			sp sister; Oh, you like that one? Sorry little *bro, but you need your sleep. Maybe tomorrow night, if you're good.
			T Why does she still have control of you, even here?
			`);
			break;
		}
		case "dream4S": {
			setToSub();
			writeHTML(`
			im images/drawn/1475s.jpg
			T It's the same routine every night, but always pushing just a little farther. Why the same dream? Why here? You can't manage to keep getting your hopes up...
			im images/drawn/1476.jpg
			T Yet the apprehension on her face feels so real. Surely you know better by now than to trust her expression...
			im images/drawn/1477s.jpg
			im images/drawn/1478s.jpg
			T You can feel the rubbery head of the hose at the base of her dick. Her cock is throbbing and angry, it wasn't made for this.
			im images/drawn/1479s.jpg
			sp sister; A-are you happy now? Do you feel in charge?
			T There's only hollow victories with her. Even in a situation like this, aren't you powerless?
			sp sister; The remote...
			im images/drawn/1480.jpg
			sp sister; You wanna win so badly, little *bro? Go ahead. Just this once I'll-
			im images/drawn/1481.jpg
			T She'll make a mess... We need a cup... Mom will be mad if we waste it...
			im images/drawn/1482s.jpg
			im images/drawn/1483.jpg
			im images/drawn/1484.jpg
			T She can't form words, this isn't an orgasm. An orgasm isn't a direct line to her balls. This is leaking, but it feels just the same.
			im images/drawn/1485.jpg
			T She's powerless... At least it finally feels that way. But how did it wind up this way? If this really is just a dream... Of course it is.
			T The box at the bedside has a mess of other toys and trinkets. Finally, you feel an energy inside you pushing you forwards. You pick out something you find interesting and show it to her.
			im images/drawn/1487.jpg
			sp sister; ... Fine. Only for you, little *bro. But tomorrow night, okay? And... Please help... This <i>thing</i>... I can still feel it down to my balls...
			`);
			break;
		}
		case "dream5S": {
			setToSub();
			writeHTML(`
			T Darkness takes your vision once again. Strangely, you find yourself eager to dream tonight.
			T ...
			im images/drawn/1488.jpg
			im images/drawn/1490.jpg
			sp sister; H-having fun yet? Are we finished? The plug... I can barely walk without needing to push it back in.
			T You <i>are</i> having fun. Finally, your dreams are your own playground. But oh no, you are not done yet. You haven't even started.
			sp sister; W-what? But we've been at this for-
			im images/drawn/1491.jpg
			sp sister; N-no...
			T The plug is inside her. One end is inside her dick, all the way to the balls. With a single push of a button...
			im images/drawn/1492.jpg
			sp sister; Ghh... I was never this mean to you...
			im images/drawn/1493.jpg
			sp sister; Mmmh~!
			T You gently cup her cheek. Isn't she enjoying herself?
			sp sister; Fff... I just want you to be happy...<br>It hurts... But it's also...<br>S-sit down... If you're watching, it'll be more... Fun. For us both.
			im images/drawn/1494.jpg
			T The other end of her not-so-little cock tube is connected to a plug.
			im images/drawn/1495.jpg
			im images/drawn/1496.jpg
			T Her cum is so thick the tube is starting to break. You lean in to see the moment of truth.
			im images/drawn/1497.jpg
			T Her gasps and fidgets as the warm fluid is pumped the only way it can be... Even after you wake up, you'll never forget them...
			`);
			
			break;
		}
		case "vr0S": {
			setToSub();
			writeHTML(`
			sp player; Whooooa! 
			T The endless fantasy landscape around you instantly sucks you in. It's incredible how far technology has come these days. 
			T Small animals roam these wild lands. Only the bravest of adventurers can hope to defeat them and save the princess! 
			T Well, you're kind of a brave adventurer. You start with some dirty rags and a stick, but you'll make it work. 
			T ...
			T Questing, braving dungeons, it's all a total blast! 
			T Well, maybe it's a little repetitive. And maybe a little too difficult. But whatever! You aren't playing this for the gameplay, you're playing this to best the warlock and now that you have, the final prize is yours... 
			im images/drawn/twintail10.jpg
			sp Princess; im scripts/gamefiles/profiles/princess.jpg; Brave hero... I know we should wait until we are lawfully wed, yet... My loins ache for you! Please, take m-
			sp mom; playerF! Dinner! 
			sp player; Coming mom! 
			T The princess is frozen mid-confession as you leave for sustenance.
			T ... Food. Leave for food. The game's old-timey dialogue is rubbing off on you too much. You push open the game room's door and head downstairs, unaware that someone was waiting in the shadows. 
			sp sister; Ooh, a new system... Well, I bet playerF won't mind if I make some... Improvements...
			`);
			
			break;
		}
		case "vr1S": {
			setToSub();
			writeHTML(`
			sp player; Alright, time to get back into this! 
			T Gleefully you slide on the VR headset, eager to be in a world sisterF doesn't control for once. 
			im images/drawn/twintail1.jpg
			sp Princess; im scripts/gamefiles/profiles/princess.jpg; Brave hero, I know we should... 
			sp player; <i>Huh, it jumped back a bit. What's that in her hand? And wasn't she naked? Maybe I accidently activated the censorsh-</i>
			im images/drawn/twintail2.jpg
			sp player; What the fuck. 
			im images/drawn/twintail3.jpg
			sp Princess; im scripts/gamefiles/profiles/princess.jpg; - Yet I cannot help myself. The demon has cursed me with a foul tool meant for defiling maidens, and a mystic item which teases me so. 
			sp player; No. No no. That shit is called the <i>Human</i> Alteration App. How did she even-?
			sp Princess; im scripts/gamefiles/profiles/princess.jpg; Brave hero, please. I am still human, despite the curse. 
			sp player; Ah, shit, dialogue AI. Sorry princess I uh... <br>You know, maybe we should wait for your father's blessing. I'll just. 
			im images/drawn/twintail4.jpg
			sp Princess; im scripts/gamefiles/profiles/princess.jpg; Oouh~<br>To be gazed upon with disgust and lust in equal measure... Goddess, please, bless me with the strength I need to fight off this filthy, filthy cock. 
			im images/drawn/twintail5.jpg
			sp Princess; im scripts/gamefiles/profiles/princess.jpg; N-no... She has forsaken me? Or... Is this her answer? Goddess, are you watching? Is your gaze upon my fat cock as well? T-to be blessed with her holy gaze, and to be exposing myself to the hero who saved my life~! 
			im images/drawn/twintail6.jpg
			sp Princess; im scripts/gamefiles/profiles/princess.jpg; G-goddess! I'm defiling myself, and your champion, with the sludge from my fat, churning nutsack! 
			T Suddenly a bright light overtakes the room. 
			sp player; Fuck, my eyes! 
			T Once it clears, you see the princess standing before you once again, but very different. 
			im images/drawn/twintail8.jpg
			sp Princess; im scripts/gamefiles/profiles/princess.jpg; Brave hero... 
			sp player; WHAT THE FUCK IS HAPPENING? WHY DID YOU FUCK WITH MY GAME, SIS? 
			sp Princess; im scripts/gamefiles/profiles/princess.jpg; Brave hero, the goddess has blessed me. I've changed my class from dick-growing mutant to blessed sperm cannoness.
			sp player; Of course you have. 
			sp Princess; im scripts/gamefiles/profiles/princess.jpg; Soon I shall depart to ruin the divine lady's womb with my impure seed, the church's doctrine shall be remade, the nuns shall drink from the new chalice of suckling upon the goddess's cum-swollen womb. The brave warriors shall be remade in your image to better arouse me. 
			sp player; What? I'm a regular war- Aw son of a bitch. 
			T Your in-game avatar has been replaced, now you look like... Well, you. 
			sp Princess; im scripts/gamefiles/profiles/princess.jpg; But before I transform my figure of worship into a symbol of whoreship, I want to offer you my first blessing. 
			im images/drawn/twintail9.jpg
			sp Princess; im scripts/gamefiles/profiles/princess.jpg; Forgive my impure tongue. First I must remove the holy lady's necklace, for it clogs my cockshaft. The beads... For the goddess to squirt at the sight of my slavering-
			sp player; Alright, fuck this. 
			T You take the helmet off, seeing exactly who you expected to see watching you. 
			sp sister; Aww, you were about to get to the best part! <br>Fine, gimme! 
			T You relent, handing her the headset. At least you'll get to see her make a fool out of hersel-
			sp sister; Whoa! The cum is so real, it's like I'm really being slathered in fantasy jizz! 
			T You sigh. 
			sp sister; Hey hey, chillax. I even put in a way to disable the 'curse' for you, you little-<br>Holy shit I think I can see the sperms... <br>Uh, what was I saying? Oh yeah. Just keep playing the game, and, uh... <br>Hey, could I wear this in my room for a bit? 
			sp player; No! 
			`);
			break;
		}
		case "vr2S": {
			setToSub();
			writeHTML(`
			T With the princess... Corrupted. Your prey is clear. The vile succubus queen is the one to blame for this!
			T ... That's what the quest log says anyways. Still, any chance at de-dickifying this game is worth a shot. You brave the elements like the noble hero you are, fight against hordes of monsters. Many of them distractingly beautiful, all of them packing some extra 'equipment'.
			T To be honest, you can't bring yourself to fight a lot of them. Luckily the game supports a stealth build.
			T But it is no matter! For now you are at the end of the journey, here at the castle at the end of the world, the <b>final battle</b> is nigh!
			im images/drawn/corruption1.jpg
			sp player; I've come to slay you, and bring peace back to the land! To return the fair princess to her former self! Tell me, demon, what is your name? I'll have the church make a plaque honoring my victory over you.
			sp Succubus; im scripts/gamefiles/profiles/succubus.jpg; Ara ara~<br>Such a brave little *man to have traveled so far. I am but a servant to the true dark lord, sisterF.
			sp player; ... Of course you are.
			T Sometimes you hate having a techie for a sister.
			sp player; No matter. Kneel, fiend! I'll grant you a swift end!
			sp Succubus; im scripts/gamefiles/profiles/succubus.jpg; Fiiine. I'll play with you, but only because you're a cutie.
			...
			sp player; Ghhg... Damn it all...
			t The battle is swift, and not at all in your favor.
			sp Succubus; im scripts/gamefiles/profiles/succubus.jpg; Uh, you okay? It's only been two rounds.
			sp player; How the hell am I supposed to win this? This is total bullshit!
			sp Succubus; im scripts/gamefiles/profiles/succubus.jpg; Calm down, you'll excite me...<br>Did you get the staff of domination?
			sp player; ... No.
			sp Succubus; im scripts/gamefiles/profiles/succubus.jpg; The elemental orbs? Hexcalibur, the blade of binding? What level are you?
			sp player; Nope and nope. Level 10.
			sp Succubus; im scripts/gamefiles/profiles/succubus.jpg; ... You're supposed to be at least level 52. How did you make it past the guard?
			sp player; Well, I uh... I agreed to go out on a date with her?
			sp Succubus; im scripts/gamefiles/profiles/succubus.jpg; O-oh... I'd imagine that's how you beat the kraken too?
			sp player; I never wanna see another tentacle... The way she slithered all over me...
			sp Succubus; im scripts/gamefiles/profiles/succubus.jpg; D-don't-<br>Oh no...
			im images/drawn/corruption3.jpg
			sp Succubus; im scripts/gamefiles/profiles/succubus.jpg; T-the seal has been broken...<br>Listen, you're pretty cute, but you're also pretty pathetic. Leave, go grind, and-
			sp player; Never! I hate grinding, I can take anything you can dish out! What is that, five inches? Please, that's nothing!
			sp Succubus; im scripts/gamefiles/profiles/succubus.jpg; N-no... Please...
			im images/drawn/corruption6.jpg
			sp player; Oh, you've got a humiliation fetish? Hah, easiest final boss ever!
			sp Succubus; im scripts/gamefiles/profiles/succubus.jpg; I don't... My... Nggh~!
			im images/drawn/corruption7.jpg
			im images/drawn/corruption9.jpg
			sp Succubus; im scripts/gamefiles/profiles/succubus.jpg; Oooh, poor *boy. No, my fetish is putting cocky adventurers in their place. Covering them in sperm... It's embarrassing, really.
			sp player; I...
			sp Succubus; im scripts/gamefiles/profiles/succubus.jpg; Speechless? Poor *boy, let me help you.
			im images/drawn/corruption11.jpg
			sp Succubus; im scripts/gamefiles/profiles/succubus.jpg; K-keep a close watch, okay? You want to win? I'll let you in on all my weaknesses...
			im images/drawn/corruption12.jpg
			sp Succubus; im scripts/gamefiles/profiles/succubus.jpg; M-my cock is weakest at it's head, so if you clench your prostate just right, it'll make me wanna c-cum as soon as my fat head bumps against it.<br>B-but the whole thing is sensitive too, so I'll cum really hard if you can take it balls-deep...
			im images/drawn/corruption13.jpg
			sp Succubus; im scripts/gamefiles/profiles/succubus.jpg; A-and it squirts easily~! It's got an aphrodisiac effect too, so if it's pumped into your ass it'll power you up and make you hungry for more~!<br>But it's biggest weakness of all~! Is~, 
			im images/drawn/corruption14.jpg
			im images/drawn/corruption15.jpg
			sp Succubus; im scripts/gamefiles/profiles/succubus.jpg; Cumming~! 
			T The air grows heavy as the scent alone is enough to inspire sin in your heart. 
			sp Succubus; im scripts/gamefiles/profiles/succubus.jpg; The... My biggest weakness... Is that I'm totally helpless if you make me cum... Twenty times? Maybe more... A brave adventurer like you isn't afraid though, right? <br>I'm merciful though, open your mouth. If you lick my balls while deepthroating me, that's another big weakness of mine. 
			`);
			break;
		}
		case "vr3S": {
			setToSub();
			writeHTML(`
			T About four rounds in with the succubus queen you're in a daze. At some point in the marathon of fucking you started to be unable to tell the difference between the virtual world and reality. 
			T Luckily in a lull between sessions of insane anal pounding, you have a chance to collect your thoughts and try to get out of the game. You reach your hands-
			T ... Why aren't your hands moving? 
			sp player; Oh... Oh no... 
			im images/drawn/0055.jpg
			sp player; sisterF? 
			sp sister; Mmm...? 
			T You can hear her stirring as if woken from a nap. 
			sp player; Oh thank god. Help. I can't move. 
			sp sister; Nnnnope. Surprised it took you this long to realize, actually. 
			sp player; sisterF please take these off. You can't seriously be doing this. The succubus is getting ready for another round. 
			sp sister; Relax, it's just a game! It's not like I, oh, I dunno, am about to alter your body and the game to make it feel like it's all really happening.
			sp player; No. Nonono. This is hilarious, sisterF-
			sp sister; It is pretty funny. 
			sp player; But this is too far to go for a jo-NONONO PLEASE, I CAN FEEL THE CASTLE'S WIND ON MY SKIN! 
			sp sister; Nice, it's working. <br>But this isn't a joke, playerF. 
			sp player; sisterF if you love me you'll shut this game off right now. 
			sp sister; Oh little *bro, I'm not gonna do that <i>because</i> I love you. 
			T ...
			im images/drawn/0073.jpg
			sp sister; Whoa, that's gotta be, what, round 17? 18? I kinda lost count, it's hard to tell when I can only see your end of the fun. 
			T You can't answer with words, only with an unending string of continuous babbling. 
			sp sister; If it makes you feel any better I'll erase the effects of this if it really does break you. Does that help? <br>One spurt for no, two for yes. <br>Huh, what does three count as? Just a little more *bro. Hang in there and you'll remember how good this felt for the rest of your life. 
			T Dimly you're aware she's stroking your head. It's hard to tell with your brain so completely shattered. 
			sp sister; Ooh, you look thirsty. I'll grab you a drink. Don't go anywhere! 
			T ... 
			sp player; Jizz! 
			T You surge awake in a panic, throwing off the covers. You're covered in sweat, but you're in bed. 
			sp sister; Mmm... Finally awake? You alright? 
			T It seems like sisterF has been watching over you. Did you pass out during... During... 
			im images/drawn/corruption14.jpg
			sp player; God, it feels like the image is burned into my brain... 
			sp sister; Could be. Want me to fix you? 
			sp player; You'e done enough. 
			T She reached out to brush the hair from your eyes, but you pushed the hand away. Her palm is sweaty, even though the rest of her body isn't. 
			sp player; Were you... Holding my hand while I was out? 
			sp sister; Fuck off to sleep, fruitcake. 
			T With a cheeky grin she walks out of your room to her own so she can get what's left of a good night's rest. 
			`);
			break;
		}
		case "candyIntroS": {
			setToSub();
			writeHTML(`
			T You push open the door to the candy shop, the little bell jingles. You have no idea what this little ticket in your hand will give you, hopefully it's enough to get your mind off all this craziness.
			sp candy; Welcome, welcome! I'm a bit, ah...
			im images/drawn/1520.jpg
			sp candy; <i>Indisposed</i> at the moment. If you could-
			sp player; S-sorry!
			T You quickly turn around, but before you do the naked woman spies the piece of paper in your hands.
			sp candy; Wait! You're a VIP customer, right? There's no need to go then. I was about to start making some cream soda, but that can wait. If you're okay with waiting just a moment I can make myself presentable and help you out.
			sp player; S-sure, whatever.
			T You turn around to respect her privacy and wait patiently. What kinda shop is this that she can just let her cock hang out like that?
			sp candy; Okay, sorry about that.
			sp player; It's no pr-
			im images/drawn/1518.jpg
			sp player; Why are you still naked?!
			sp candy; ...? You're a VIP customer.
			sp player; How are this and that related?!<br><i>Did sisterF do this? This place probably sold some weird stuff before, but this is on a whole-other level now...</i>
			sp candy; Well, I do have some clothes. If you're easily embarrassed they won't help with that though.
			sp player; I think anything would help at this point.
			T ...
			im images/drawn/endingB-2.jpg
			sp candy; So, we're starting over? Well, my name's candyF.
			sp player; Nice to meet you...<br><i>It really didn't help...</i>
			sp candy; And you're a VIP customer! Normally we just sell regular confections and keep our secret stuff under wraps. Fantastic candies that can change your body in exciting and fun ways! Pop rocks that turn you into a quick-shot cum fountain, caramel that makes whatever you suck on turn yummy...
			T She starts counting things off on her fingers detailing a half dozen bizarre confectionaries.
			sp candy; Now some customers can't eat certain kinds of candies. If you've got not pussy, a candy that supercharges your ovaries isn't going to give you anything more than a tummyache. But, as a bonus, the store now has a 'free to try' policy! You get a chance to try out candies to see their effects before you buy them! So, take a look and let me know what I can get for you.
			`);
			break;
		}
		case "candyRocksS1": {
			setToSub();
			writeHTML(`
			sp player; So, what exactly are these? 
			sp candy; These are Pop Rocks. They're made of a special sugary substance, leading to a fizzy 'pop' feeling in your mouth. <br>These are special though. Once they dissolve they change your body to supercharge semen production and basically turn you into a quickshot machine. <br>You need to be sure to relieve yourself though. Abstinence when you've got a supercharged production can lead to some pretty serious ball growth. 
			sp player; But why would you-
			sp candy; I think you know the answer. Being so pent up that a stiff breeze could have you leaking an orgasm on the floor, being so sensitive that all it takes is a single stroke to turn a short shot into a long drool of cum... Ooh, I've decided. I wanna have a special! I dunno why I've never thought of it before, but I really wanna try one out. You interested in a little show? 
			`);
			writeFunction("writeEvent('candyRocksS2')", "Continue");
			break;
		}
		case "candyRocksS2": {
			setToSub();
			writeHTML(`
			sp candy; Alright! Glad to have a customer on board with good taste! Now they can take a little while to kick in, so come back in... An hour? That sounds about right. 
			... 
			t You wander about for a little while to pass the time. The city is pretty different since sisterF has begun to have her way. 
			t After a while you notice a few people headed into the candy shop, so you decide to head back in. 
			im images/drawn/1470.jpg
			sp candy; Please enjoy! <br>Oh, you're back! Take a seat anywhere, I'll be right over. 
			t Tables have been set up, it didn't take too long for the shop to become an impromptu cafe. 
			sp candy; Large or small, honey? 
			t You're about to answer before your stomache grumbles, answering for you. 
			sp candy; Large it is! Here, take a cup. Now, lemme just... 
			t She reaches down with her tongue as you take a cup, fishing for the handle of whatever's keeping her cockhead plugged shut as she wiggles her tits and her tight dress rub against her huge cock, it throbs angrily. 
			sp player; Do you need any help? 
			sp candy; All 'art ah 'ha 'how, honey~! 'here! <br><i>All part of the show, honey~! There! </i>
			im images/drawn/1473.jpg
			im images/drawn/1475.jpg
			t Though the plug is short and only keeps the end of her dick plugged up, it's still plenty thick to ensure absolutely no leakage. 
			t She whimpers in obvious frustration, the obvious <i>need</i> to cum audible in her voice as she tries to pull your attention away from her dickhole for a moment. 
			sp player; Uh... Oh! Sorry! 
			im images/drawn/1477.jpg
			t Her breathing has grown ragged as a thick bead of precum-
			t No, the smell hits your nose and it's clear what it is. The first drop of an extremely thick, sticky, potent load of pure dickgirl cum. 
			t She grunts in frustration, as she wiggles her hips, letting her fat nuts swing beneath her skirt to coax the load out. It honestly might be too thick, it might be stuck keeping her agonizingly on-edge. 
			t You've been walking around for a while today, you're a little dehydrated so you lick your lips. Her eyes are locked on your face as you do, and...
			im images/drawn/1478.jpg
			t She bites down hard on the cockplug in her teeth, one eye fluttering while the other shuts. 
			t The flow is powerful, it's as if her cock is a literal cum-faucet on full blast. As the cup begins to quickly fill you can see her cross her legs, trying to stem the flow of jizz. 
			im images/drawn/1479.jpg
			t In the end you have a full mug of dickgirl jizz in your hand. You set down the cup and take the plug from her mouth. 
			sp candy; Thanks... Quick, I can't hold it back with my legs much longer!
			im images/drawn/1482.jpg
			t Getting the thing back in is a struggle. It isn't a sex toy meant for thrusting in and out for sexual pleasure, it's clearly meant as a full plug to keep cocks from leaking out loads. Despite candyF's best efforts you can clearly see a thick bulge slowly traveling up her cock. 
			t Not holding anything back you manage to force the plug all the way in, you can actually <i>see</i> the plug bob up and down a little as the pure power of her load tries to force the plug out, but to no avail. Her fat nuts twitch, throb, and clench, but the load is forced back down her cock until it's back in her balls, which are visibly larger afterwards. All to the tune of candyF's grunts and moans as she does her best to stay standing and balance her tray of dishes. 
			sp player; Thank you. 
			sp candy; A-absolutely... The effect of one of the rocks lasts for a few hours. Since I called in some guests, I took about twenty of them, so please don't hesitate to ask for seconds. Okay, sweetie? 
			sp player; Is that safe? 
			sp candy; Of course! Well, I can't stop leaking cum, and I don't know how long the effects will last. I'll store any extras in some edible condoms, some good boys or girls like to swallow them whole. Or I'll sell my cream as batter for some of my kinkier customers. 
			t A bell rings and she quickly bounces away, her overproductive balls churning and gurgling with every step. 
			t The drink is... Extremely thick. It's tough to swallow too, you need to chew every mouthful to get it down. Every time you sink your teeth into the spoogey mess you feel your own cock throb, and with each swallow you can <i>feel</i> the load go down your throat until it hits your stomach. By the end of the glass you're still thirsty, and your puffed-out stomach is warm with the thick liter of cum resting inside it.
			`);
			break;
		}
		case "candyTaffyS1": {
			setToSub();
			writeHTML(`
			sp player; Is this taffy? 
			sp candy; Stretchy taffy. Chew it and your body grows stretchier. You can pull your skin farther, I can even do the splits after eating one. But by far the coolest thing about them? They make stretching fun! 
			sp player; What do you mean by fun? 
			sp candy; Well, you know how some parts of your body just aren't stretchy? No real elasticity, they just hurt if you tug on them. 
			sp player; I guess. Like your nose? 
			sp candy; I'm talking more about the urethra. Turns out the nerves in your dickhole are a great match with a good fucking when you're suped up on taffy. Wanna try? 
			`);
			writeFunction("writeEvent('candyTaffyS2')", "Continue");
			break;
		}
		case "candyTaffyS2": {
			setToSub();
			writeHTML(`
			sp candy; Great! Okay, gotta make this one special. Take the taffy, and lemme see if I can find a globstopper... Oh, are you well endowed? 
			sp player; Uh... 
			sp candy; Okay, jumbo sized... Gotta get some bondage gear too... How do you feel about fetish-wear? 
			sp player; Y'know, maybe I should just-
			t You're interrupted as candyF stuffs a lollipop in your mouth. It tastes pretty strongly of strawberries, and also a little bit like how alcohol smells. Pretty soon it saturates your mouth, and your brain goes fuzzy. 
			... 
			sp candy; Sooo~? How does it feel? 
			im images/drawn/plain6.jpg
			sp player; It's... A lot of conflicting sensations... 
			sp candy; Don't worry honey, just relax. There's a lot to enjoy. The jumbo pop makes you bigger, the globstopper's where you wanna focus. Ooh, it's pretty big already. Here, come on and I'll unlock you~
			im images/drawn/plain7.jpg
			t With a *click* the chastity lock meant to keep you from spurting out her candy is undone. Your cock bobs, and you can see the bulge of her 'globstopper' clearly at the base of your dick. 
			sp player; W-what do I do? 
			sp candy; Well, you're pushing it out already with the same muscles you use to squirt cum, but that's a little slow. The candy's effect might even wear off before then. <br>Don't panic though sweetie, there's a faster and much more fun way to get it out. 
			t She prods at the little dangling bit of string attached to the globstopper sticking out of your pisshole. 
			sp player; Ouuh~
			sp candy; Feels good, huh? You've got the sensitivity of an experienced dickpussy, with none of the years of practice required! Now, I think you know what you need to do. 
			t You close your eyes and take a deep breath, telling yourself you're just doing this to get this thing out of your cock, not for any other reason of course. 
			im images/drawn/plain8.jpg
			sp player; <i>One smooth motion... One smooth motion... Don't hesitate! </i>
			im images/drawn/plain9.jpg
			sp player; MmmMMM~! 
			sp candy; Yes! Keep going! Your brain can't tell the difference between that and an orgasm, it thinks you're cumming! 
			t You pull and spasm, pull and spasm, each time your body clenches up the globstopper sinks deeper before you tug it back. You're getting your dick well and properly fucked and the candy is making the sensations fry your brain with pleasure. With one last great pull... 
			im images/drawn/plain10.jpg
			t Your vision goes white as reality flashes in an out of existence. 
			im images/drawn/plain11.jpg
			t Your moans bit too high a note to hear and white noise fills your brain as thought becomes impossible. Despite how wide your pisshole has just been stretched you can feel the massive load you've just brewed widening it further.
			t As your cum splatters on the ground you lean back, will totally shattered by your orgasm. All sensations of sight and sound feel so small in comparison to what just smashed your critical thinking skills. 
			t A soft hand touches your lips and gently pulls the bit of string from your mouth. 
			sp candy; This grew nicely. It bathes in raw cockmilk and soaks it all up, I can think of a certain young lady who'd love to try out this candy, especially since it's from a cutie like you. 
			sp player; ...
			sp candy; Hello? Hmm. Well, take as long as you need honey, I've gotta wrap this up. 
			... 
			t By the time you come to it's starting to get seriously late. You head home, still a little wobbly. 
			`);
			break;
		}
		default: {
			writeText("Something went wrong, and you've encountered a bug. Keep in mind where you just where and what you did, and let me know so I can fix it.");
			writeText("Your error code is writeEventFailure "+scene);
			writeFunction("changeLocation('homePlayerRoom')", "Return home");
		}
	}
	if (galleryCheck(scene) != true) {
		//unlockScene(scene);
	}
	writeFunction("sceneTransition('start')", "Back to Scene Select");
}