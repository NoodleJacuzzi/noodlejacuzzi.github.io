var character = {index: "president", fName: "Madison", lName: "Moore", trust: 0, encountered: false, textEvent: "", met: false, color: "#AD7961", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false,};

var logbook = {
	index: "", 
	desc: "",
	body: "",
	clothes: "",
	home: "",
	tags: "",
	artist: "",
	author: "",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "intro", name: "The Student Council room is here", requirements: "?flag principal council; ?trust president 0; ?location northHallway;", altName: "", altImage: "",},
	{index: "stressedOut", name: "Someone is walking down the hall", requirements: "?trust president 1;?location northHallway;", altName: "", altImage: "",},
	{index: "stage1Quo", name: "The Student Council room is here", requirements: "?trust president 2;?location northHallway;", altName: "", altImage: "",},
	{index: "stage2Quo", name: "The Student Council room is here", requirements: "?trust president 3;?location northHallway;", altName: "", altImage: "",},
	{index: "corruption1", name: "The Student Council room is here", requirements: "?trust president 4;?location northHallway;", altName: "", altImage: "",},
	{index: "corruptionFollowup1", name: "The Student Council room is here", requirements: "?trust president 80;?location northHallway;", altName: "", altImage: "",},
	{index: "nudePainting1", name: "There's a commotion in the hall", requirements: "?trust president 81;?location schoolEntrance;", altName: "", altImage: "",},
	{index: "presidentArtRoom1", name: "Someone is in the art room", requirements: "?trust president 82;?location westHallway;", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "intro": {
			writeHTML(`
				im images/treasurer/profile.jpg
				sp treasurer; Did you need something?
				t The meek girl in front of you looks like she's been through a ringer.
				sp player; I was hoping to speak with the president. Of the student council, I mean.
				sp treasurer; I'm really sorry, she's busy right now. We're trying to-
				sp president; No, she isn't. You're the new counselor, right? playerF?
				im images/president/profile.jpg
				sp treasurer; Huh? But what about ojouF?
				sp president; You go on ahead treasurerF, I'll follow up on ojouL's behavior later. Actually, I was hoping to speak with *him as well.
				sp treasurer; But you've been working...<br>Fine, I'll see you tomorrow.
				t treasurerF scoots past you and the president wastes no time at all trying to throw you off your game.
				sp president; I'll be direct with your *sir, I've requested a more formal and transparent background check on you to be reviewed during the next PTSA meeting.<br>It's routine for all senior staff, but if you're going to be interacting so closely with my students you should be held to a higher standard.
				sp player; 'Your' students?
				sp president; A slip of the tongue, please try to remain focused here *sir. In any case, that's all I have to say to you. Good day.
				sp player; Hold on, I came here to talk to you, not the other way around.
				sp president; Is it important?
				t You hesitate for a moment, trying to remember your excuse for getting close to the president.
				sp player; I, uh... I was just hoping to work closely with you to assist students, and-
				sp president; It isn't then. You can feel free to discuss it with me when my schedule is cleared up. I need to be going.
				t She pushes past you and shuts the door to the council room behind her.
				sp player; When will your schedule be clearing up, exactly?
				sp president; It won't. Good day.
				t With that she takes her leave. You'll need to find an opening if you want to keep your position here, but you aren't too worried. Everyone has a weakness.
			`);
			setTrust('president', 1);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "stressedOut": {
			writeHTML(`
				t As you're walking along you see a girl collapse in front of you. Naturally you head over to help, but she quickly picks herself back up.
				sp player; You al-<br>Ah, presidentF.
				sp president; Fine. I'm fine.
				t As you take a careful look over her, you realize that she's wearing extremely subtle makeup, specifically around her eyes to hide the dark bags under them.
				sp player; You aren't getting enough sleep, you're overworking yourself aren't you?
				sp president; I can handle myself, thank you.
				sp player; Sure you can, you'll handle yourself just fine until you pass out from exhaustion in the middle of an assembly in front of the entire student body.
				t She sighs, and slides down the wall to sit down.
				sp president; Fine, I'll rest for a moment.
				t You sit down and take a rest next to her.
				sp player; Taking a break when you're feeling overwhelmed is a good place to start, but if things are getting to this level where you need to hide how exhausted you are, you need to start making some changes to your lifestyle.
				sp president; I need to set a positive example for students, I wouldn't expect you to understand.
				sp player; You're setting a bad example for them right now.
				sp president; ...
				t A proper counselor might disapprove of your extremely direct style, but it's not like you're licensed or anything.
				sp player; You've got options. You can communicate with the people around you and reduce your workload, or I could try to help you manage your stress.
				t She shoots a suspicious glare at you.
				sp player; Don't give me that, there are plenty of methods that have helped a lot of people. Therapy, massage, hypnosis...
				sp president; I don't pay much attention to hackney pseudoscience, nor do I have any free time to waste.
				sp player; Well, being skeptical in moderation can be healthy, but being open to new experiences is also important.
				sp president; I'll be open anytime to ideas that actually have some merit, or are at least realistic. Hypnosis? What's next, you'll scream at me to scare away my imperfections? You'll guess my weight based on the alignment of the stars?
				sp player; Fine, fine. Be that way.<br>... What if I could prove it?
				sp president; This school isn't a playground for you to run around swinging a stopwatch in people's faces, *sir. <br>If you actually manage to gether some proper evidence, <i>maybe</i> I'll take you seriously. Until then I need to get back to work.
				t She stands back up and leaves as you start to formulate a plan. You'll need to show her the benefits of hypnosis if you want to get her to open up. Forging peer-reviewed studies are a little outside your skillset, so you'll need to find another way.
			`);
			setTrust('president', 2);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "stage1Quo": {
			writeHTML(`
				t You knock on the door to the student council, and after a moment treasurerF opens the door.
				sp treasurer; Ye- Oh, it's you again. Here to mind control us into shirking our responsibilities?
				sp president; treasurerF, *he's faculty, be respectful. Was there something you needed *sir?
			`);
			writeMeetingList();
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "stage2Quo": {
			writeHTML(`
				t You knock on the door to the student council, and after a moment presidentF opens the door.
				sp president; Yes? Ah, hello *sir.
				sp treasurer; Who is it? Is it that counselor again?
				sp president; It's *Mister playerF, yes. Can I help you?
			`);
			writeMeetingList();
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "tomgirlMeeting": {
			writeHTML(`
				sp player; I was hoping to introduce you to someone. Have you met tomgirlF tomgirlL?
				sp president; Not formally, he and his friends often hang out near the council room though. 
				...
				t After some badgering presidentF agrees to take a break and come with you to see how tomgirlF has changed.
				t tomgirlF was eager to help out, and now the pair sit across from each at a cafeteria table. She peppers him with questions about your methods, and he manages to now blow your cover.
				sp president; You're a lot less...
				sp tomgirl; Grumpy all the time? Hell yeah, I got a boyfriend now! I wish he'd spend a little more time with me, but the time we do spend together is absolutely magical. 
				t presidentF seems shocked to hear this, and tomgirlF flashes you a wink. You give him back a flat look, signalling to be more careful with his cover story.
				sp president; So then the hairclip... Wait, you already have a...
				t There's a pang of something in presidentF's voice. Confusion? Jealously?
				sp tomgirl; Yep! And god is he incredible in bed. Every thrust his dick hits-
				sp president; Stop. 
				t presidentF's demeanor seems to shift instantly as tomgirlF crosses some imaginary line. She's back to her usual commanding, and even a little intimidating self in a flash. 
				sp president; I'm glad you've found a better identity for yourself, and that you're happier overall, but some subjects are not morally acceptable to discuss in public. 
				sp tomgirl; Ah, sorry.
				sp president; ... You're much more easygoing. I hope this means less 'spirited' conversations with your friends right outside the council room's door?
				sp tomgirl; Oh shit, were we bothering you? I'll be careful, sorry.
				t presidentF seems shocked that the stubborn tomgirlF would just accept fault like that, she looks at you for a moment and sighs.
				sp president; Fine, I'll admit defeat here, I suppose in some cases whatever methods playerF uses can have <i>some</i> merit. Thank you for your time tomgirlF.
				sp president; Fine, I admit defeat. I've clearly misjudged playerF's methods Thank you for your time tomgirlF.
				sp tomgirl; No problem at all!
				t With that presidentF takes her leave, probably to go back to work and try to wrap her head around what she's seen today.
				sp tomgirl; Geez, she's gonna be a real bitch to turn, huh? Wouldn't you rather just stay home all day and pound me into being a proper girl? 
				sp player; Patience. Thanks for the help, I'll see you around tomgirlF.
				sp tomgirl; No problem, bye!
			`);
			addFlag('president', 'tomgirl');
			raiseTrust('president', 1);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "purpleMeeting": {
			writeHTML(`
				sp player; I was hoping to introduce you to someone. Have you met purpleF purpleL?
				sp president; Of course she and I are...<br>Well, we haven't spoken in a while, I should check up on her... 
				...
				t After some badgering presidentF agrees to take a break and come with you to see how purpleF has changed.
				sp purple; It's... It's been tough. The whole world just kept going on while it felt like I just fell over, and I couldn't seem to want to stand back up. <br>playerF here helped everything feel normal again, you know? 
				sp president; I see.<br>That's really incredible... 
				t presidentF lets out a relaxed sigh while continuing to hold purpleF's hand. 
				sp purple; Anyways mast-Mister!<nr>A-anyways mister, will I be seeing you later? 
				sp purple; Anyways mistr-Mss! <br>A-anyways miss, will I be seeing you again later? 
				sp president; It sounded like you were about to say something else. 
				sp purple; Haha, did it? That's so funny, slip of the-
				t purpleF is interrupted as presidentF suddenly takes her in for a hug. 
				sp president; You haven't laughed in so long... I never knew what to say, I'm sorry I wasn't there for you... 
				sp purple; Ah, it's uh... Thank you? 
				t purpleF awkwardly pats presidentF on the back as the hug goes on for just a little too long before presidentF pulls away. 
				sp president; Fine, I'll admit defeat here, I suppose in some cases whatever methods playerF uses can have <i>some</i> merit. Thank you for your time purpleF.
				sp president; Fine, I admit defeat. I've clearly misjudged playerF's methods Thank you for your time purpleF.
				sp purple; No problem. I'll see you around?
				sp president; Of course.
				t With that presidentF takes her leave, probably to go back to work and try to wrap her head around what she's seen today.
				sp purple; I think that went well.
				sp player; I agree. Remind me to give you a proper reward sometime.
				sp purple; Yay!
			`);
			addFlag('president', 'purple');
			raiseTrust('president', 1);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "starletMeeting": {
			writeHTML(`
				sp player; I was hoping to introduce you to someone. Have you met starletF starletL?
				sp president; I know her well enough to know she isn't taking her life seriously.. .
				...
				t After some badgering presidentF agrees to take a break and come with you to see how starletF has changed.
				sp president; Hmph, please. I spoke to her barely a week ago and she was still going on about depraved fantasies. Those are likely erotic doodles in her workbook. 
				sp player; Oh? Look closer. 
				t presidentF squints and gets up close to the window to see more clearly. 
				sp president; They're... The pages are completely filled with mathematical notes... 
				sp player; She's been working her heart out every day. We've tackled all her repressed anxiety about failing and needing to sell her body to survive. 
				sp president; I... I had no idea, I always thought she was serious about wanting to film adult movies... <br>To think she was just trying to cope with fears of inadequacy... 
				t You nod wisely at your expert level bullshittery. If you had to bet, starletF actually is writing about porn, just crunching demographic numbers while making it look like she's actually doing schoolwork.
				t Still, presidentF is completely starstruck. 
				sp president; Fine, I'll admit defeat here, I suppose in some cases whatever methods you use can have <i>some</i> merit. Thank you for your lesson, playerF.
				sp president; Fine, I admit defeat. I've clearly misjudged your methods Thank you for your lesson, playerF.
				t With that presidentF takes her leave, probably to go back to work and try to wrap her head around what she's seen today.
				t Through the window you can see starletF notice you and you give a thumbs-up, which she reciprocates despite not understanding what's going on.
			`);
			addFlag('president', 'starlet');
			raiseTrust('president', 1);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "kuroMeeting" : {
			writeHTML(`
				sp player; I was hoping to introduce you to someone. Have you met kuroF kuroL?
				t presidentF scowls deeply for a moment before schooling her expression.
				sp president; We've spoken, <i>repeatedly,</i> on certain behaviors of hers. If you got her to so much as fix her uniform, you'll have managed to impress me.
				...
				t After some badgering presidentF agrees to take a break and come with you to see how kuroF has changed.
				t You wouldn't exactly describe kuroF as being <b>eager</b> to help, but she was still willing to go along with it.
				sp president; I see that you have no more regard to student uniform regulations than before, Ms. kuroL.
				t kuroF purses her lips.
				sp kuro; If you wanted to be technical, Ms. President, my skirt is only six inches above the knee compared to my usual eight, but 'less leg' isn't what I'm supposed to give you.
				t Taking the paper, presidentF frowns as she looks over it.
				
			`);
			if(checkFlag('kuro','Studying')){
				writeHTML(`
					sp president; This is some sort of grade sheet, and a signed statement.
					sp kuro; Reading through it, you'll find that every male staff member has certified that I haven't propositioned or flirted with <i>any</i> of them since I started my counseling with playerF. 
					sp president; ...And the grade sheet does seem to show minor improvements to your scores. You've gone up to merely <i>failing</i> chemistry.
					t You can see the tension build in kuroF's jaw, but she just keeps smiling sweetly.
					t Of course, presidentF isn't quite satisfied, now pulling out a ruler.
					sp president; Only six inches, you said?
					...
					t You can see kuroF's nails digging into her cardigan as she stands stock still, presidentF marking yet another uniform infraction on a legal pad.
					sp president; ...The list is smaller than normal. I certainly wouldn't call it <i>success,</i> but it's progress.
				`);
			}
			else{
				writeHTML(`
					sp president; This is... an itemized list of your previous infractions.
					sp kuro; I think you'll find that it lists off each and every individual instance of 'misconduct' by yours truly.
					sp president; I fail to see how this is anything but damning to your cases.
					sp kuro; Be a dear and take note of the dates, please?
					t presidentF looks over the paper again, her eyes widening slightly.
					sp president; You haven't had any non-uniform infractions since you began interacting with playerF.
					sp kuro; Yes. I would've thought the fact that I hadn't been dragged to your council would've been enough to inform you of the recent changes, but...
					t kuroF eyes up presidentF pointedly.
					sp kuro; I suppose the <i>absence</i> of something is rarely as noticeable as its presence.
					t presidentF returns the pointed look with equal distaste, but ultimately shakes her head...
					sp president; I'm not foolish enough to disregard a clear statistical correlation, but there is no hard evidence of causation.
					t kuroF twitches slightly.
					sp president; ...But given the extreme nature of the offender in question, I'll accept it nonetheless.
				`);
			}
			writeHTML(`
				t Turning to face you, presidentF nods politely.
				sp president; I'll admit my defeat here. Whatever methods you used to initiate some form of rehabilitation for Ms. kuroL appear to have some merit. And as for you, kuroF...
				t presidentF looks her over, before saying with a completely flat monotone,
				sp president; Thank you for your time.
				t Turning on her heel, presidentF takes her leave, likely to go back to work.
				t The moment she's far enough away, kuroF clicks her tongue once.
				sp player; That looked... tense.
				sp kuro; Me and President <i>Bitch-Tits</i> don't get along, but five minutes of swallowing my words is more than worth it if it means you thaw that frigid cunt.
				t kuroF grins wolfishly.
				sp kuro; I look forward to hearing about what you do to her, <i>lover~</i>
				sp player; I'll keep you appraised.
				sp kuro; Thanks~!
			`);
			addFlag('president', 'kuro');
			raiseTrust('president', 1);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "mejiMeeting" : {
			writeHTML(`
				sp player; I was hoping to introduce you to someone. Have you met mejiF mejiL?
				sp president; I haven't dealt with him personally, but I know <i>of</i> him. Particularly his tendency towards truancy and general delinquent behaviors.
				sp meji; Ah, you're the student council president, presidentF, right? I'm mejiF, I don't believe we've met.
				t mejiF politely extends his hand forward, which presidentF shakes while looking him over.
				sp president; I am, yes, and we haven't, no. Though it seems we do know one another by reputation.
				t mejiF looks a bit bashful, shifting in place.
				sp meji; I assume you're referring to my behavior.
				sp president; Correct. Truancy, borderline harassment, suspected graffiti... Up until recently, your record has been thoroughly stained.
				sp meji; Until recently, yes. 
				t He stands up a bit straighter, folding his hands in front of him.
				sp meji; I had issues of self-confidence, and I lashed out because of it. playerF took the time to listen to me, and just having the opportunity to speak freely was itself freeing.
				t mejiF nods to you slightly, smiling.
				sp meji; I can, and will personally vouch for playerF's methods in regards to achieving positive outcomes for myself in both my personal and academic life.
				sp president; Well, that's certainly quite the glowing review, and I don't recall hearing of any recent deliquent behavior regarding you...
				t presidentF looks over a legal pad, her eyes narrowing.
				sp president; I'll be examining recent reports for any mention of you, mejiF, but if there's nothing, then I'll forced to admit my defeat here. Thank you for your time.
				sp meji; I'm happy to help.
				t As presidentF turns to leave, you see a smirk fly across mejiF's face for a moment before he schools his expression.
				sp player; Thanks for the help.
				t He smiles up at you, bumping his shoulder against yours gently.
				sp meji; It's my pleasure. And if you need any help <i><font size='-1'>or pleasure</font></i>, just say the word.
				sp player; I'll keep you updated.
				sp meji; Thanks!
			`);
			addFlag('president', 'meji');
			raiseTrust('president', 1);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "neetMeeting": {
			writeHTML(`
				sp player; I was hoping to introduce you to someone. Have you met neetF neetL?
				sp president; The name doesn't sound familiar at all. Is she a student here?
				sp player; Absol-<br>... Probably. Actually, now that I think about it...
				t While you have made some pretty strong strides in hypnotizing neetF, if presidentF doesn't know her at all, the changes won't be very convincing.
				t You should probably try to introduce her to someone who's issues are a little more obvious. A troublemaker you've helped reform or someone dealing with a tough issue to paint you in a positive light.
			`);
			addFlag('president', 'neet');
			unencounter('president');
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "coachMeeting": {
			writeHTML(`
				sp player; coachF can vouch for me. She's-
				sp president; The school's coach, I know. I also know she's a terrible example if you're trying to make yourself look better.
				t She's got you there. Even though coachF has improved, you can't exactly say you've been hypnotizing a member of the faculty...
				t You should probably try to introduce her to a student if you want to convince her. A troublemaker you've helped reform or someone dealing with a tough issue to paint you in a positive light.
			`);
			addFlag('president', 'coach');
			unencounter('president');
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "nurseMeeting": {
			writeHTML(`
				sp player; nurseF can vouch for me. She's-
				sp president; The school nurse? I've seen her drug cabinet and I've submitted several reports for further background checks during PTSA meetings. Until she comes back clear, you're only making yourself look shadier by associating with her.
				t She's got you there, and you can't exactly say you've been hypnotizing a member of the faculty...
				t You should probably try to introduce her to a student if you want to convince her. A troublemaker you've helped reform or someone dealing with a tough issue to paint you in a positive light.
			`);
			addFlag('president', 'nurse');
			unencounter('president');
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "scarfMeeting": {
			writeHTML(`
				sp player; scarfL can vouch for my methods. She's-
				sp president; Which one? The sister referred to as 'The Witch' because of how uncomfortable she makes students? Or the sister who spends all her time cleaning up the other's messes?
				sp player; ... scarfF.
				sp president; Incredible. I'm completely convinced now.<br>... I apologize, sarcasm is unbecoming of me. Still, you aren't making a strong case for yourself.
				t She's got you there, and you can't exactly say you've been hypnotizing a member of the faculty...
				t You should probably try to introduce her to a student if you want to convince her. A troublemaker you've helped reform or someone dealing with a tough issue to paint you in a positive light.
			`);
			addFlag('president', 'scarf');
			unencounter('president');
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "corruption1": {
			writeHTML(`
				sp president; I suppose at this point my skepticism is more bias than logic. Fine, I'll give it a chance. <br>treasurerF? I'm leaving early today. 
				sp treasurer; Wh... You can't seriously be going along with this! 
				sp president; I'm a woman of logic, treasurerF. I'm on the side of evidence, and strong evidence is what I've seen.<br>Take care, I'll see you tomorrow. 
				t treasurerF grumbles as the two of you leave to your office. 
				...
				sp president; So, how does this work. Do I smell some candles? Stare at a spinning disk?
				t She takes a seat and sets her bag down beside her. More than once she lifts open a small flap to look at something inside.
				sp player; Why does everyone assume I use candles?<br>Anyways, no, just relax and I'll handle everything. Just focus on the pendant... Watch it swing...
				t She's pretty tense and still at least a little skeptical, but  of sleep deprivation is a hypnotist's best friend.
				...
				sp player; presidentF? Can you hear me?
				t She nods passively, this is the deepest you'll get her. Now, what to actually do? The first time with a skeptic is always risky, if they break out of the trance or they're pretending to be under to gather evidence then you're screwed if you show your hand too early.
			`);
			writeFunction("writeEncounter('corruption3')", "Go straight for the lewdness");
			writeFunction("writeEncounter('corruption2')", "Take your time");
			break;
		}
		case "corruption2": {
			writeHTML(`
				sp player; Alright presidentF, listen closely. While you're under you will follow my orders to the letter. You're going to head home early today, and after you've finished everything absolutely urgent and you're prepared for bed, you're going to get a full nine hours of sleep tonight.
				sp president; Nine... Hours...
				sp player; You'll wake up tomorrow feeling refreshed, and you won't panic over any upcoming deadlines. Whatever needs to be done will be done, do you understand?
				sp president; Mhmm...
				sp player; Good. Also...
				...
				t *SNAP*
				sp president; Gah!
				sp player; Good morning, presidentF. You really have been overworking yourself.
				sp president; Sn-w... What happened? Did it work?
				sp player; That remains to be seen. How do you feel?
				sp president; Like I... Like it's getting late, and I should be getting home.
				sp player; I'll see you tomorrow then.
				t She just nods and picks up her bag. She lifts the flap to check something inside again as she leaves.
			`);
			passTime();
			setTrust('president', 80);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "corruption3": {
			writeHTML(`
				sp player; Alright presidentF, listen closely. While you're under you will follow my orders to the letter. You and I are about to have a lot of fun together.<br>Expose yourself.
				sp president; Ghh...
				t Though she offers some resistance, she's too sleep deprived to fight through the trance. Her movements are stiff, like she she's sure something is off but can't place what.
				im images/president/corruption.jpg
				t With her skirt pulled up and panties displaced her snatch is on full display.
				sp player; Good, now-
				sp president; This... Isn't...
				sp player; Damn, too quick. Fine, put them back on. We'll have to try this again later.
				t Groggily she struggles to dress herself again as you lean back in your chair. Today will have to be spent breaking down her walls before you can make any progress.
				...
				t *SNAP*
				sp president; Gah!
				sp player; Good morning, presidentF. You really have been overworking yourself.
				sp president; Sn-w... What happened? Did it work?
				sp player; That remains to be seen. How do you feel?
				sp president; Like I... Like it's getting late, and I should be getting home.
				sp player; I'll see you tomorrow then.
				t She just nods and picks up her bag. She lifts the flap to check something inside again as she leaves.
			`);
			writeFunction("writeEncounter('corruption4')", "Finish");
			break;
		}
		case "corruption4": {
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
		case "corruptionFollowup1": {
			writeHTML(`
				sp president; You!
				sp player; A second-person pronoun.
				sp president; Quit joking around. You and I have something important to discuss.
				t You sigh and ruffle your hair a little. After a night's rest she's clearly quite spirited. You open the door to your office and invite her in.
				sp president; No manipulation. You drugged me, didn't you? I want the truth, if you try to lie a quick blood will test expose you.
				sp player; And why would you think you've been drugged, exactly?
				sp president; An immediate exhaustion following our meeting? Sleeping through several alarms? Now this? I took my heart rate this morning, I know you've done something.
				sp player; I have indeed. You've got a chemical flowing through you right now thanks to what I've done.
				sp president; I knew it! What did you drug me with!?
				sp player; Gamma-aminobutryic acid. GABA, for short.
				sp president; What?<br>... But that's-
				sp player; A chemical that healthy sleep builds up, it helps your nerves basically. You got a good night's sleep, presidentF, is that so foreign to you that you think you've been drugged?
				t She leans back in her chair and sighs in defeat. 
				sp president; I... <br>I'm sorry, *sir. Accusing a member of the faculty like that, I don't know what I was thinking. 
				sp player; You have a very traditional mindset and a healthy skepticism, there's nothing wrong with that. So long as you grow and improve it's all water under the bridge.
				sp president; I actually have a confession to make. During the last session I... I recorded you. I'm sorry.
				sp player; I'm shocked.
				t As a show of good faith she pulls a recording device out of her bag and drops it firmly in the garbage bag.
				sp player; Well, with that out of the way, care for another session? I've got some free time lined up.
				sp president; What? But I just...<br>You'd really continue to help me after how I acted?
				sp player; Of course! Now, take a seat and relax. I'll get out the pendant...
			`);
			writeFunction("writeEncounter('corruptionFollowup2')", "Continue");
			break;
		}
		case "corruptionFollowup2": {
			writeEvent("presidentCorruption1");
			passTime();
			setTrust('president', 81);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "nudePainting1": {
			writeEvent("presidentPortrait");
			passTime();
			setTrust('president', 82);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "presidentArtRoom1": {
			writeHTML(`
				t You open the door to the art room and step inside. It's mostly empty except for a large curtain hanging in the center of the room. A voice calls out from behind it.
				sp president; I'm afraid the room is occupied at the moment, you'll have to come by some other time.
				sp player; Ah, sorry. I'll-
				sp president; *Mister playerF?
				t The curtain is quickly drawn aside.
				im images/president/profileP.jpg
				sp president; im images/president/presidentP.jpg; Ah, I knew it. Just who I wanted to speak with.
				sp player; ... You're naked.
				sp president; im images/president/presidentP.jpg; Yes, it's quite the conundrum. I've been trying to recapture the feeling of freedom I experienced when displaying my previous piece. I've taken several steps to try and 'stoke the flame', as it were, but my efforts aren't paying off. I can't tap into my earlier zeal. I was wondering if you could help me through my block with hypnosis?
			`);
			writeFunction("writeEncounter('presidentArtRoom2')", "Continue");
			writeFunction("writeEncounter('cancel')", "Maybe another time, good luck with your painting ");
			break;
		}
		case "presidentArtRoom2": {
			writeEvent("presidentCorruption2");
			passTime();
			setTrust('president', 100);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "cancel": {
			unencounter('president');
			changeLocation(data.player.location);
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

function writeMeetingList() {
	if (checkFlag('president', 'tomgirl') != true) {
		if (checkTrust('tomgirl') > 99) {
			writeFunction("writeEncounter('tomgirlMeeting')", "Introduce presidentF to tomgirlF");
		}
	}
	if (checkFlag('president', 'purple') != true) {
		if (checkTrust('purple') > 99) {
			writeFunction("writeEncounter('purpleMeeting')", "Introduce presidentF to purpleF");
		}
	}
	if (checkFlag('president', 'starlet') != true) {
		if (checkTrust('starlet') > 84) {
			writeFunction("writeEncounter('starletMeeting')", "Introduce presidentF to starletF");
		}
	}
	if (checkFlag('president', 'meji') != true) {
		if ( checkTrust('meji') == 25 || checkTrust('meji') >= 45 ) {
			writeFunction("writeEncounter('mejiMeeting')", "Introduce presidentF to mejiF");
		}
	}
	if (checkFlag('president', 'kuro') != true) {
		if (checkTrust('kuro') > 99) {
			writeFunction("writeEncounter('kuroMeeting')", "Introduce presidentF to kuroF");
		}
	}
	if (checkFlag('president', 'neet') != true) {
		if (checkTrust('neet') > 99) {
			writeFunction("writeEncounter('neetMeeting')", "Introduce presidentF to neetF");
		}
	}
	if (checkFlag('president', 'scarf') != true) {
		if (checkTrust('scarf') > 99) {
			writeFunction("writeEncounter('scarfMeeting')", "Introduce presidentF to scarfF");
		}
	}
	if (checkFlag('president', 'nurse') != true) {
		if (checkTrust('nurse') > 80) {
			writeFunction("writeEncounter('nurseMeeting')", "Introduce presidentF to nurseF");
		}
	}
	if (checkFlag('president', 'coach') != true) {
		if (checkTrust('coach') > 99) {
			writeFunction("writeEncounter('coachMeeting')", "Introduce presidentF to coachF");
		}
	}
}

var eventArray = [
	{index: "presidentCorruption1", name: "Clearing the Canvas"},
	{index: "presidentPortrait", name: "Rough Sketch"},
	{index: "presidentCorruption2", name: "Construction"},
	{index: "presidentHand", name: "Confident Strokes"},
	{index: "presidentAnal", name: "Fill the Gaps"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "presidentCorruption1": {
			writeHTML(`
				sp player; And twenty, colored aquamarine... presidentF? Can you hear me? 
				sp president; Yes... 
				t You put away the pendant and do a quick look-through of her bag. She's much more open and clearly more trusting of you now, but it never hurts to be careful. 
				t With no sign of danger you relax and stretch the tension away. 
				sp player; Ah, I really should get out more. How about you presidentF? It feel stuffy in here? 
				sp president; ... yeah. 
				sp player; That outfit in particular looks a lot more uncomfortable than the usual uniform. I bet it really feels like a heat is building up inside you. Which part of it feels the stuffiest? 
				sp president; It's... Down there...
				sp player; It's building up, isn't it? Show me.
				t Everybody has a different reaction to being hypnotized. presidentF's slow speech is pretty typical, but her sense of self is astoundingly strong. She's acting with dignity and stoicism, even as she's hypnotized, still tired, and... 
				im images/president/corruption.jpg
				t Completely exposed. 
				sp player; How do you feel?
				sp president; ... Warm.
				t It's a promising reaction, but you need a thread to tug at if you want to start unraveling her defenses. As it stands you could potentially have some fun, but that risks her breaking free. Plus that doesn't actually help you with the PTAS.
				sp player; Hmm... Warm, huh? Is that because I can see you? Because you've got your pussy exposed?
				sp president; ... Yes.
				sp player; Interesting. And how would you feel if others could see you too?
				t She shudders, a perfectly serviceable answer.
				sp player; And what do you do when you feel this way? When you feel this heat coursing through your body.
				sp president; ... I ignore it.<br> ... I focus on my work.
				sp player; You just ignore it?<br>I see. This'll require some creative problem solving. First off, let's have you relax those inhibitions. That's always a good place to start. You need to find yourself a healthier outlet, a way to let out all that pent-up energy. You need to feel... <b>Liberated.</b>
				t You start setting a plan into motion. She has the makings of a decent exhibitionist, so it'd be best to capitalize on that. Exactly how she expresses herself is up to her though.
				...
				t *SNAP*
				sp president; Gah!
				sp player; Welcome back. Have a nice trip in dreamland? You should head home and get a good night's rest. Have you thought about what I said? About finding an outlet for your stress?
				sp president; What you... Oh, yes *sir.<br>... I'll ask around. Thank you.
				t Though you didn't actually talk to her about it while she was awake, her brain will do most of the heavy lifting for you now that the seed has been planted.
				sp player; It's my pleasure. I think you'll find life quite liberating once you find a healthy outlet. 
				t Though she doesn't consciously know why, her body shivers at the word. 
			`);
			break;
		}
		case "presidentPortrait": {
			writeHTML(`
				t As you push your way through the bustling entrance, you can hear various students clamoring around you.
				sp purple; Whoa, it's so realistic... But... What do you think?
				sp starlet; It's incredible! You can really tell she's got a passion for the arts.
				sp ojou; I think it's just that she's crazy...
				t Even members of the faculty are discussing whatever's causing the commotion.
				sp nurse; But is it really the sort of thing which should be in the school's entrance? Shouldn't it at least be kept in the art room?
				sp principal; It's an incredible expression of the artistic talent of one of our top students. It should stay, at the very least for today. I may have it moved to my office if it serves as too much of a distraction.
				t And as you manage to push your way through the crowd, a large percentage of the inner circle crowding the entrance being male, you can hear two people fervently arguing.
				sp treasurer; Please, ma'am, please tell me this is a joke!
				sp president; It isn't. I-<br>playerF! Over here!
				t The crowd parts a little as presidentF beckons you over. As you make your way up the school's main staircase you can finally see what all the fuss is about.
				im images/president/painting.jpg
				t In full glory, a large oil painting hangs upon the wall for everyone to see. A nude painting of presidentF with a plaque at the bottom denoting this as a self-portrait. And of course a major draw is that presidentF herself seems to have been standing right next to it this entire time proudly showing it off.
				sp president; I took the time to re-explore one of my abandoned passions. It's quite liberating to release the emotions I've kept bottled up lately.<br>To see so many of the students here, and even the faculty, and especially you... I can already feel my desires building up again...
				sp treasurer; Please... If you won't take that thing down, can we just get to work? The way everyone here is staring at you, and the painting...
				sp president; Isn't it wonderful? I'm invigorated! I feel ready to chew through that big stack of budgetary reports today! Come on treasurerF!
				sp treasurer; Thank god...
				t presidentF leaves, and after a while the crowd mostly disperses too. Everyone keeps stealing glances, but nobody want to be the one drooling over 'fine art' with everyone else around.
			`);
			break;
		}
		case "presidentCorruption2": {
			writeHTML(`
				t *SNAP*
				sp president; im images/president/presidentP.jpg; Ghh!<br>D-did it work?
				sp player; I'm afraid not. Hypnosis has its limitations you know. <br> But I do know of a few other ways to get that kick you felt before, and then some. 
				sp president; im images/president/presidentP.jpg; Oh my... What other ways did you have in mind?<br>I don't mind keeping an open mind for you, *sir.
				sp player; On the table, legs behind your head.
				... 
				t With the final seed planted your domination over the student council president is complete. Between an unwavering trust in you, a newly awakened taste for sexual thrill, and a completely rewritten idea of common sense one thing is clear. 
				t <b>presidentF is yours now.<b>
				t And what better way to show that than with a little celebration?
				sp player; So, presidentF, how do you feel? 
				im images/president/artRoom1.jpg
				sp president; im images/president/presidentP.jpg; I feel... Electric. Liberated, like how it felt to be appreciated for my art before... <br>What is this, is this yoga? I feel like I've had my eyes opened to whole new worlds these past few days. 
				sp player; Yoga, sure. Of course the most important part of yoga... Ghh... <br>Is the stretching! 
				im images/president/artRoom2.jpg
				sp president; im images/president/presidentP.jpg; Oooh~! Th-this is it! This is what I was looking for, and more~! 
				sp player; You're mine now, you understand? And as a reward, whenever things start getting stressful, you'll make up some flimsy excuse and come to me for a good cunt-gaping!
				sp president; W-wha-?<br>B-but I can't!<br>I need to-<br>I need~<br>More~!
				im images/president/artRoom3.jpg
				sp president; Cumming~!
				t As you stuff her with cum, it's clear she's already picturing being used for twisted, yet deeply satisfying means. Whether it's the hypnosis or her own weakness, she's made her choice between you and the students she represents.
				...
				t As the two of you get dressed she looks almost giddy, like a child who's just stolen something. Her straight-laced nature has come to an end, you clearly have a newly-formed degenerate on your hands.
				sp player; Listen, presidentF, this is important. At the next PTSA meeting, I intend to be bringing up a few changes to the school I'd like to make. 
				sp president; im images/president/presidentP.jpg; About your methods, I presume? Will they help everyone like you've helped me? 
				sp player; Absolutely. 
				sp president; im images/president/presidentP.jpg; Then you'll have my full support. I, ah, don't suppose you have any more lessons to teach me before you go? 
				sp player; I do, but it's a practical one instead of a fun one. Keep your exhibitionism in check for now. I know it'll be stifling, but until I have influence over the school other members of the faculty won't be as open to 'self expression' as they could be. 
				sp president; im images/president/presidentP.jpg; Well, if there's anything I can do to help, come by the student council room anytime. 
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
	{index: "reward", requirements: "?trust president 100;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "reward": {
			writePhoneImage("images/president/reward.jpg", "Art by Oreteki18kin");
			writePhoneSpeech("president", "", "You've finished all of presidentF's content for this version, more is on the way!");
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