var character = {index: "nurse", fName: "Justine", lName: "Walton", trust: 0, encountered: false, textEvent: "", met: false, color: "#8D756B", author: "NoodleJacuzzi", artist: "Oreteki18kin"};

var logbook = {
	index: "nurse", 
	desc: "The school's nurse, she handles on-site injury while assisting in school events like vaccination days. There's something more to her than meets the eye, and she seems like she's very interested in spending some alone time with you.",
	body: "She acts like she could be in her early thirties, but she looks pretty youthful aside from her extremely filled-out features.",
	clothes: "She prefers softer long and flowing clothes, and carries a bag full of bottles and personal items at all times.",
	home: "She lives in an old mansion on a small hill pretty far away, but she arrives to work so early and leaves so late that you can almost always find her in the school ward when she's not outdoors hunting for ingredients.",
	tags: "Aphrodisiac, heart-eyes, memory alteration, anal, age regression, various TF-related content based on potions used",
	artist: "Oreteki18kin",
	author: "NoodleJacuzzi",
};

var newItems = [
	{name: "Baking Soda", 	key: true, 		price: 20, 	image: "scripts/gamefiles/items/bakingSoda.jpg", description: "Common household baking soda."},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "intro1", name: "Enter the school's ward", location: 'westHallway', time: "MorningEvening", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "intro2A", name: "Enter the school's ward", location: 'westHallway', time: "MorningEvening", itemReq: "", trustMin: 1, trustMax: 1, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "intro3", name: "nurse is here, working", location: 'westHallway', time: "MorningEvening", itemReq: "", trustMin: 4, trustMax: 4, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "potionQuo", name: "Enter the school's ward", location: 'westHallway', time: "MorningEvening", itemReq: "", trustMin: 80, trustMax: 100, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "intro1": {
			writeText("You enter the nurse's office, it smells like a field of flowers in here. Pretty far from the sterile room you were expecting. Interestingly, there aren't that many flowers in the room at all, yet it doesn't seem artificial at all.");
			writeBig("images/locations/ward"+data.player.time+".jpg", "Art by Oreteki18kin");
			writeSpeech("player", "", "Hello? Huh, I guess nobody-");
			writeSpeech("nurse", "", "HIDDENHello.");
			writeBig("images/nurse/profile.jpg", "Art by Oreteki18kin");
			writeText("The school nurse walks in behind you, she must've been away for a moment.");
			writeSpeech("nurse", "", "Oh, you're the new counselor. playerF, right? I'm nurseF, it's lovely to meet you.");
			writeSpeech("player", "", "Likewise.");
			writeSpeech("nurse", "", "Did you drop by just to say hello? Or are you sick?");
			writeSpeech("player", "", "Just dropping by, I'm trying to get to know everyone I'll be working with.");
			writeText("She speaks slowly and carefully. To the average person she'd just look reserved, but you can tell she's carefully planning what to say. Something seems off.");
			writeSpeech("nurse", "", "Well, it's very nice to meet you. I certainly hope we can get along, if a student comes along with anything serious, you'll send them my way, yes?");
			writeSpeech("player", "", "Sure.");
			writeText("It's something about the way she acts. It's like she's trying to get you to relax. It's familiar because usually that's what you're doing.");
			writeSpeech("player", "", "Say, you ever hear about hypnotism?");
			writeSpeech("nurse", "", "Ah, I don't mean to be rude, but I practice actual medicine here. I don't keep up with pseudoscience. If I could maybe get you a drink we could talk about whatever you like.");
			writeSpeech("player", "", "I'm not thirsty.");
			writeSpeech("nurse", "", "Are you sure? You look parched, in my professional opinion. ");
			writeSpeech("player", "", "I'm really fine. I should probably-");
			writeSpeech("nurse", "", "Come now, relax. It's certainly not a busy day. For me at least. I have more than just water, if you'd like.");
			writeSpeech("player", "", "Actually I told principalF I'd meet her in a few minutes. Just stepped out from talking with her while she makes some calls, she'd get pretty suspicious if I didn't show up. Maybe I can take a glass with me?");
			writeSpeech("nurse", "", "Oh, um... I can't really let the cups leave the room. Actually, you should go see her then, we can always have a proper introduction later.");
			writeSpeech("player", "", "Alright, see you later then.<br><i>So, that's her game. The ol' roofie, a classic. Drug me up, reveal my secrets. Or actually, it could be poison.<br>She seems pretty desperate. Maybe I can use this.</i>");
			writeSpeech("nurse", "", "Take care.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			setTrust('nurse', 1);
			break;
		}
		case "intro2A": {
			writeSpeech("nurse", "", "Oh, hello again. I'm afraid I'm a bit busy at the moment. If you wait a moment I'm sure we can have each other's full attention in privacy.");
			writeSpeech("player", "", "<i>Honestly I'm worried she could be some kind of serial killer, she really wants me alone.<br>Well, I guess I want her alone too...</i>");
			writeFunction("writeEncounter('intro2B')", "Yeah I've got time");
			writeFunction("changeLocation(data.player.location)", "Sorry, another time");
			break;
		}
		case "intro2B": {
			writeSpeech("nurse", "", "Are you sure you aren't thirsty? Really, I'm-");
			writeSpeech("player", "", "Shush, focus on the pendant. I told you, I'll take a drink after I prove this works.");
			writeText("You made up some excuse about wanting to show off hypnosis before you took a sip. God knows what's in the cup she gave you. She has a surprisingly high willpower, but her attitude towards hypnosis is a weakness you fully intend to exploit. ");
			writeSpeech("nurse", "", "There really is no basis for this... It is... Quite pretty though...");
			writeSpeech("player", "", "Just relax, sink deeper, breath freely, eyes open, pendant swings, just relax, sink deeper...");
			writeText("...");
			writeSpeech("player", "", "So, what's in the cup?");
			writeText("She stares forwards, her eyes half open and unfocused.");
			writeSpeech("nurse", "", "I wanted to... The cute new counselor...");
			writeSpeech("player", "", "Right, but what's in the cup?");
			writeSpeech("nurse", "", "Blonding... But only mental... I disabled the aspect that bonded with...");
			writeText("She keeps slipping into chemicals and bizzare latin ingredients, the mumbling doesn't help. Some people get very sluggish when in a trance though.");
			writeSpeech("player", "", "What would this do to me?");
			writeSpeech("nurse", "", "Intelligence... Drop... You'd be... Mine... The sample of your hair... Compatible...");
			writeText("The trance won't go any farther than this, her high willpower is preventing you from actually giving her any commands. The potion might be your answer here, if you're fine with using it.");
			writeSpeech("player", "", "You tested my hair, huh? I've gotta get my own lock for my office. And intelligence dropping you say, very, very interesting. Well, I'm not usually one to dabble in chemical stuff...");
			writeFunction("writeEncounter('intro2C')", "But I can make an exception for you");
			writeFunction("writeEncounter('intro2Refusal')", "So I'll let you off the hook, keep away from me");
			passTime();
			break;
		}
		case "intro2C": {
			writeSpeech("player", "", "My, you look parched. You must be really thirsty.");
			writeSpeech("nurse", "", "Yes... Thirsty...");
			writeText("She reaches out to you.");
			writeSpeech("player", "", "Not that kind of thirsty, not yet anyway. Here, drink this.");
			writeSpeech("nurse", "", "Okay...");
			writeText("You hand her the drugged drink, which she obediently accepts and starts drinking sips without hesitation.");
			writeText("Once she's downed all of it you snap your fingers and nurseF suddenly jolts upright.");
			writeSpeech("nurse", "", "Wha... No!");
			writeText("She realizes what she's holding and throws the glass aside, causing it to shatter.");
			writeSpeech("player", "", "Oof, messy. You gonna clean that up?");
			writeSpeech("nurse", "", "What have you done... No!");
			writeText("She stands up and moves to a cabinet. You move to intercept her and hold her back.");
			writeSpeech("player", "", "Nah. Can't have you going for a cure.");
			writeSpeech("nurse", "", "Idiot, there is no cure! I need a pen and paper, my life's work is spiraling the drain!");
			writeText("She struggles until she breaks free from your grasp. True to her word she goes for a bundle of papers and plucks a pencil from a desk, tossing away anything she can't write on.");
			writeSpeech("nurse", "", "Regent's... Potion filler... Fuck, gotta hurry...");
			writeText("You lean over her shoulder, watching as she fills the page with scrawlings of notes, heating instructions, strange diagrams, and chemical symbols. As she flips through a large book making notes in the margins, she reaches some kind of collection of flowers. Finding one in particular called the 'Regent's Flower' she circles it about a dozen times.");
			writeSpeech("player", "", "What'cha doing?");
			writeSpeech("nurse", "", "Quiet! God, I was months away from finding a suitable means of human cloning... Do you realize what you've done? Years of combining the leading research in chemistry with ancient alchemical knowledge, gone! I've got to save what I can!");
			writeSpeech("player", "", "Probably shouldn't have tried to make me some bimbo then. You're getting what's coming to you.");
			writeSpeech("nurse", "", "It doesn't... Damnit, it's already affecting me.<br>The potion attacks your memory, not your intelligence. It was meant to make you open, suggestible, I'd have myself a toy and principalF would be none the...");
			writeSpeech("player", "", "Oh, like hypnotism, but permanent. Gotcha.");
			writeSpeech("nurse", "", "Just... Like what? I can't...");
			writeText("She's gone from writing alchemical symbols to swirly doodles, so you take the pencil away from her.");
			writeSpeech("nurse", "", "Heeey...");
			writeText("You turn her around to face you. She blushes, but she certainly looks disorientated. Honestly she looks hypnotized.");
			writeSpeech("player", "", "So, you'll be just as intelligent, but more malleable. I was really expecting another sex toy out of you, but you might be something special.");
			writeSpeech("nurse", "", "Special? Me? Who-");
			writeSpeech("player", "", "Alright, listen closely, okay? Let's start by getting those inhibitions real low. ");
			writeSpeech("nurse", "", "Inhib-wha? ");
			writeFunction("writeEncounter('intro2D')", "Uh-oh");
			break;
		}
		case "intro2D": {
			writeText("Things have turned out... Poorly.");
			writeText("The memory loss is pretty extensive. She's got a limited vocabulary so the actual process of reworking her personality has taken hours, yet...");
			writeSpeech("player", "", "So, what have you got so far?");
			writeSpeech("nurse", "", "Uh, lower my in-hi-bishons, and listen to what you say.");
			writeSpeech("player", "", "Alright, this is going nowhere. This is bad...");
			writeText("There's no way she can pass as anything but incompetent, and there's no way principalF won't notice. If she were to check in on the nurse anytime soon... Well, drugs would be the first assumption. That means an investigation, and that means scrutiny you don't want to deal with.");
			writeSpeech("player", "", "Damn, this is a problem.");
			writeSpeech("nurse", "", "Oh, problem! I like to solve problems!");
			writeSpeech("player", "", "Unless you can somehow jumpstart your vocabulary and re-learn what you need to do as the school's nurse overnight, you can't solve this problem.");
			writeText("She pouts. It'd be cute if the situation weren't so dire.");
			writeSpeech("nurse", "", "I can solve problems...");
			writeText("Suddenly the school's bell rings, causing her to squeak in fright.");
			writeSpeech("player", "", "Well, that's a good a signal as any to get out of here. Alright, let's get you home, and... Well, I'll think of something.");
			writeSpeech("nurse", "", "Oh, thinking of something! I'm good at that too! I think...<br>Ah, see? I did it!");
			writeText("Proud of herself, she stands only to immediately stumble.");
			writeSpeech("player", "", "You can't even walk straight... Let's get you home.<br>I should get some travel tickets, be ready to bail on town...<br>Hey, you'll do what I tell you, right?");
			writeSpeech("nurse", "", "Yep!");
			writeSpeech("player", "", "You can't tell anyone anything about me. And you can't tell them I told you not to say anything either. When I'm not around, you'll act like we barely know each other.");
			writeSpeech("nurse", "", "'Kay!");
			writeText("...");
			writeText("You take her home, it's a pretty old-looking mansion in a pretty nice neighborhood.");
			writeSpeech("nurse", "", "Ooh, what's this place?");
			writeSpeech("player", "", "This... This is your house. This is where your ID says you live.");
			writeSpeech("nurse", "", "Whoa! No wonder it feels so cozy! I-");
			writeText("She yawns, apparently having your brain re-wired by an alchemical potion does a number on your stamina.");
			writeText("You take her inside, the place is packed with books and chemical reagents.");
			writeSpeech("player", "", "You're staying here and getting some rest. Maybe read a book once you're up, see if you can get any of your old memories or skills back.");
			writeSpeech("nurse", "", "'Kay... Can I solve problems?");
			writeSpeech("player", "", "Sure, you can work on figuring out how we're going to keep up appearances with you being...Well, your new self. Actually, your vocabulary should probably be the highest priority now. We'll meet up tomorrow, after you've had a chance to rest. Take care of yourself, okay?");
			writeSpeech("nurse", "", "'Kay...");
			writeText("...");
			writeText("Coming to the crossroads in the streets, you'll need to check up on her tomorrow.");
			writeFunction("changeLocation('street')", "Finish");
			setTrust('nurse', 4);
			break;
		}
		case "intro2Refusal": {
			writeText("You snap your fingers and nurseF suddenly jolts upright.");
			writeSpeech("player", "", "Blonding potion, huh?");
			writeSpeech("nurse", "", "What!? Where did you hear that, who-<br>Oh my god, was I really-");
			writeSpeech("player", "", "Completely under. You're lucky you've got a strong will and I've got such a powerful distaste for drugs. So I'll cut you a deal. You stay out of my way and don't try any funny shit, and I don't go to principalF.");
			writeText("Someone willing to drug you is too dangerous to lead around. This is for the best.");
			writeSpeech("nurse", "", "I... Fine, I concede. I've got my life's work to continue, I have no intention of messing with someone who knows black magic. Goodbye.");
			writeSpeech("player", "", "Likewise.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			setTrust('nurse', 3);
			break;
		}
		case "intro3": {
			writeSpeech("nurse", "", "Now, you'll want to take two of the blue ones now, and two of the red ones when you get home.");
			writeSpeech("???", "none", "Thank you ma'am!");
			writeText("A student stumbles past you. You'd expected a disaster, or at least another multi-hour session of teaching her basic English phrases. But not only has she made it back to her office on time, but she's managing just fine.");
			writeSpeech("player", "", "You're certainly doing well.");
			writeSpeech("nurse", "", "Ah, salutations! Are you hurt? Did you come here for a shot? Or... Have you come to merely bask in the charming atmosphere of a woman at work?");
			writeSpeech("player", "", "No, just checking up on you. How are you feeling?");
			writeSpeech("nurse", "", "Absolutely wonderful! My, I felt quite lost after waking up, only to realize I was completely surrounded by everything I needed. I have quite the extensive collection of dictionaries and encyclopedias you know, albeit ones quite covered in dust. I was able to follow your instructions to the letter.");
			writeText("She pulls out a few scraps of paper completely covered from margin to margin in text.");
			writeSpeech("player", "", "I don't remember-<br>Is this... Literally every single word I said to you yesterday?");
			writeSpeech("nurse", "", "Indeed! I needed to be thorough to identify which ones were actually your commands. 'Improve my vocabulary', 'Keep up appearances', but you put particular stress on making sure I listened to everything you said.");
			writeSpeech("player", "", "Well, I guess that solves my problem.<br>Huh, you are pretty good at problem solving.");
			writeSpeech("nurse", "", "Oh my~! Your praise rings through me like a church bell, I can hear heaven's choir above! My heartrate has quickened, I need to log this effect...");
			writeSpeech("player", "", "Well, I guess everything worked out. Not really sure what to do now.");
			writeSpeech("nurse", "", "Not to worry, I'm still following your order. My inhibitions have bottomed out, I feel urges overtaking me by the second!");
			writeSpeech("player", "", "Oh, I get where you're going.");
			writeSpeech("nurse", "", "I'm filled with a primal urge, an all consuming fervor...");
			writeSpeech("player", "", "Yeah?");
			writeSpeech("nurse", "", "For pushing the boundaries of science and rediscovering the lost art of alchemy!");
			writeSpeech("player", "", "Aaand you lost me. What?");
			writeSpeech("nurse", "", "Behold, chemical formulas I noted down just before the effects of the blonding potion overtook my previous self.");
			writeText("You take the piece of paper she's waving at you.");
			writeSpeech("player", "", "Alright, I remember some stuff from O-chem. I can take a-<br>These are not chemical formulas. This isn't even remotely scientific standard.");
			writeSpeech("nurse", "", "Correct! These are the translations of ancient writings, gathered either from the ancient True Dead Sea Scrolls, or the last scrawlings of a soon-to-be mindless woman. Either way, invaluable! With these I can rediscover my previous work, and create potions of mind-boggling effect!<br>Oh, and making babies. That was my other inhibition. I'd like to create children with you.");
			writeSpeech("player", "", "I... I'm not sure which definition of 'making' you mean at this point. Anyways, what kind of potions?");
			writeSpeech("nurse", "", "All kinds! The blonding potion I drank before was meant to be temporary, and, as the name suggests, can alter the hair color of the imbiber. A potion which turns someone into an unmoving doll, that hits them with everything they experienced all at once when it wears off. A potion which transforms a woman's body, giving her a massive, THROBBING, <b>MEATST</b>-");
			writeSpeech("player", "", "Okay! I get the picture. Alright, potions. I can get down with that. ");
			writeSpeech("nurse", "", "Indeed. Now, the hidden stashes of exotic ingredients weren't kept too organized. I tried to replace some, but... <br>I won't bore or terrify you with the results, lest you be put off the idea of drinking my work in the future. Suffice it to say we have enough for precisely nothing right now. Each potion is missing at least one essential ingredient. I'll do my best to collect what I can of course. And things will need to be organized of course so you can decide what we'll craft. I do have some of this, though.");
			writeText("She holds up a glass bottle filled with a red-pink fluid. Notably, little heart-shaped bubbles rise to the top.");
			writeSpeech("nurse", "", "I've discovered that a great deal of my work was performed on me directly, likely through self testing. I'm compatible with nearly every potion I have a recipe for, but most people aren't. I'll do compatibility tests to see if anyone in the school would make for a good guinea pig.");
			writeSpeech("player", "", "Yeah, yeah. What's in the bottle?");
			writeSpeech("nurse", "", "This is a heart-heat potion. It has a particularly entrancing effect on the human eye, while also supercharging certain chemical reactions in my body. I'd like to drink it to show you what these potions can do, if that would be alright.");
			writeFunction("writeEncounter('heartHeatA1')", "Go ahead, impress me");
			writeFunction("writeEncounter('heartHeatRefusal')", "Maybe some other time");
			setTrust('nurse', 80);
			break;
		}
		case "heartHeatA1": {
			writeEvent('nurseheartHeatA1');
			passTime();
			writeFunction("writeEncounter('heartHeatA2')", "Clean up");
			break;
		}
		case "heartHeatA2": {
			writeSpeech("nurse", "", "Hmm, I can see why I considered that batch a failure.");
			writeText("She pours out the remainder of the heart-heat potion into the sink.");
			writeSpeech("player", "", "What?! Why? That was incredible!");
			writeSpeech("nurse", "", "Indeed, the effects are extremely pronounced. It can cause extreme levels of heightened arousal and sensitivity improvements. My gusto was clearly displayed in my eyes, no?");
			writeSpeech("player", "", "It was. So then what was the problem?");
			writeSpeech("nurse", "", "The ending, the effects are cancelled once the imbiber's body makes contact with sperm. Rather than a gradual letdown, I went from a multi-stage hands-free climax to suddenly realizing I was not breathing air, then choking on a decidedly salty fluid. A most unpleasant way to cut my experience short.<br>I'll need to make improvements on the formula. I do certainly hope you'll help me out, the rewards will absolutely be commensurate with your efforts.");
			writeSpeech("player", "", "I'll bite. What do I need to do?");
			writeSpeech("nurse", "", "Return tomorrow and I'll have it all laid out. I need to separate the lewd potion recipes from the deadly poisons first, not to mention throw out all the expired material. <br>Did you know how quickly raw flesh expires?");
			writeSpeech("player", "", "Aaand I'm out. See you tomorrow nurseF.");
			writeSpeech("nurse", "", "Not to mention where I'll find some bits, many of these animals are endangered...");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "heartHeatRefusal": {
			writeSpeech("player", "", "Maybe another time.");
			writeSpeech("nurse", "", "A shame, this batch was incorrectly processed in any case. The effects have an immediately attention-grabbing air to them, but unfortunately they're cut short when the imbiber makes contact with sperm. A pity.");
			writeText("She pours out the fizzy potion into the office's sink.");
			writeSpeech("nurse", "", "I'll need to make improvements on the formula. I do certainly hope you'll help me out, the rewards will absolutely be commensurate with your efforts.");
			writeSpeech("player", "", "I'll bite. What do I need to do?");
			writeSpeech("nurse", "", "Return tomorrow and I'll have it all laid out. I need to separate the lewd potion recipes from the deadly poisons first, not to mention throw out all the expired material. <br>Did you know how quickly raw flesh expires?");
			writeSpeech("player", "", "Aaand I'm out. See you tomorrow nurseF.");
			writeSpeech("nurse", "", "Not to mention where I'll find some bits, many of these animals are endangered...");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "potionQuo": {
			switch(checkTrust('nurse')) {
				case 80: 
				writeSpeech("nurse", "", "Salutations again! I've had a chance to organize my records. I have several recipes of potions I'm sure you'll find interesting. The majority of them require a filler material which I can prepare with your help.");
				break;
				case 81: 
				writeSpeech("nurse", "", "Salutations thrice! I managed to collect some wormwood, quite the flexible stuff, although the taste is terrible. Were you interested in doing some alchemy today?");
				break;
				case 82: 
				writeSpeech("nurse", "", "Salutations once more! I have some dragonfruit ready. It isn't for any potion-making, it's my breakfast. Would you like some, or would you like to get down to business?");
				break;
				case 83: 
				writeSpeech("nurse", "", "My most beloved patient. Are you here for some medicine? A shot? Perhaps... Me? Well, I have several recipes in mind for you to look through at any rate.");
				break;
				case 84: 
				writeSpeech("nurse", "", "Salutations! I rediscovered my cache of romance novels, although I find they aren't quite as effective at increasing my heart-rate as you are.");
				break;
				case 85: 
				writeSpeech("nurse", "", "Salutations! I waved to Principal principalF earlier, and she waved back. I don't quite understand the ritual, but it felt nice to be acknowledged all the same.");
				break;
				case 86: 
				writeSpeech("nurse", "", "Good... *Yawn*...<br> Mmm, apologies. I spent all night awake last night, I forgot how to fall asleep. Curious the things you take for granted some times.");
				break;
				case 87: 
				writeSpeech("nurse", "", "Welcome back. Care to craft some potions?");
				break;
				case 88: 
				writeSpeech("nurse", "", "What a joyous day! The sun is shining down upon us all, care to match it's merriment with some alchemy?");
				break;
				case 89: 
				writeSpeech("nurse", "", "Good "+data.player.time+", how are you today? I must say, so many potions to craft, I wish there were more time in the day.");
				break;
				case 90: 
				writeSpeech("nurse", "", "I read in a scholarly article the other day, it spoke of how regular sexual congress can improve heart performance. Just something to consider.");
				break;
				case 91: 
				writeSpeech("nurse", "", "Salutations! I saw a bird up close recently, I'm sure I've seen many more that I can't remember. It was a magical experience, it looked so soft! I hope I see more again sometime.");
				break;
				case 92: 
				writeSpeech("nurse", "", "playerF! playerF! Earlier today, I saw a 'wishing-fountain'! A mystical shrine to some local spirit, and it granted my wish for only a single silver coin! I wished to see you again today, how lovely. Can you believe some people decry them as fraudulent?");
				break;
				default:
				writeSpeech("nurse", "", "Good... *Yawn*...<br> Mmm, apologies. I spent all night awake last night, I forgot how to fall asleep. Curious the things you take for granted some times.");
				break;
			}
			if (checkTrust('nurse') < 92) {
				raiseTrust('nurse', 1);
			}
			if (checkFlag('nurse', 'reward1')!=true) {
				writeFunction("writeEncounter('potionCheck')", "Help out with alchemy");
			}
			else {
				writeSpeech("nurse", "", "I don't have the recipes laid out yet for my next batch, I do appreciate your patience though. I'm sure your heart is beating fervently as you await my next request for ingredients, I know I'm excited to reward you though. Perhaps what I've already crafted can entertain you for now?");
				if (checkFlag('nurse', 'blue2Pink') == false) {
					//writeFunction("writeEncounter('blue2PinkPotion')", "Ask about the genderswap potion");
				}
				if (checkFlag('nurse', 'charisma') == false) {
					writeFunction("writeEncounter('charismaPotion')", "Ask about the charisma potion");
				}
				if (checkFlag('nurse', 'imperfectYouth') == false) {
					writeFunction("writeEncounter('imperfectYouthPotion1')", "Ask about the youth potion");
				}
				if (checkFlag('nurse', 'anal') == false) {
					writeFunction("writeEncounter('analPotion1')", "Ask about the anal sensitivity potion");
				}
				if (checkFlag('nurse', 'anal') == true && checkFlag('nurse', 'imperfectYouth') == true && checkFlag('nurse', 'charisma') == true) {
					writeSpecial("You've completed all available content for nurseF!");
					for (succIndex = 0; succIndex < data.story.length; succIndex++) {
						if (data.story[succIndex].index == "nurse") {
							data.story[succIndex].textEvent = 'reward';
						}
					}
				}
			}
			if (checkTrust('mama') == 1) {
				writeFunction("writeEncounter('nurseMama')", "Ask for help with mamaF");
			}
			writeFunction("writeEncounter('chatHub')", "Chat");
			writeFunction("changeLocation(data.player.location)", "Leave");
			break;
		}
		case "potionCheck": {
			if (checkFlag('nurse', 'recipe1') == false) {
				writeSpeech("player", "", "So, how can I help? I can't understand your notes in the slightest.");
				writeSpeech("nurse", "", "Oh my~ Are you eager to see the results, or how I intend to reward your efforts? I promise both will be worth your time.<br>I need ingredients. I need to create some potion filler, which I can do with your help and a few hours of work, I need some baking soda from the store, and I need the petal of the rare Regent's Flower. It isn't native to the area, but it's a popular species among stylish types.");
				writeSpeech("player", "", "Seems easy enough except for the flower. I'll get to work.");
				writeSpeech("nurse", "", "Best of luck! Come back whenever you have the time and we'll get started on the filler material.");
				addFlag('nurse', 'recipe1');
				unencounter('nurse');
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
			else {
				if (checkFlag('nurse', 'potionFiller') == false) {
					writeEncounter('potionFiller');
				}
				else {
					if (checkItem('Regent Flower Petal') == true && checkItem('Baking Soda') == true) {
						writeEncounter('level1Reward');
					}
					else {
						writeSpeech("nurse", "", "Sorry, you're missing one of the ingredients. You can buy the baking soda, although the Regent's Flower petal might be harder to find. I know principalF is fond of rare flowers though, if that helps.");
						writeFunction("changeLocation(data.player.location)", "Continue the search");
						unencounter('nurse');
					}
				}
			}
			break;
		}
		case "chatHub": {
			writeSpeech("nurse", "", "Oh? Well, I have several bits of small talk prepared. I actually have nearly a dozen textbooks on improving conversational skills back at home.");
			writeFunction("writeEncounter('chatStatus')", "How have you been?");
			writeFunction("writeEncounter('chatPotionGenome')", "Why don't potions work on everyone?");
			//writeFunction("writeEncounter('chatPassTime')", " How do you pass the time when I'm not around?");
			writeFunction("changeLocation(data.player.location)", "Finish chatting");
			unencounter('nurse');
			break;
		}
		case "chatStatus": {
			writeSpeech("player", "", "Actually, I was hoping to just hang out and talk. How've you been?");
			writeSpeech("nurse", "", "Quite well, since you told me to take care of myself. The instruction was a bit vague, so I've been generally quite positive to myself to meet your request.");
			writeSpeech("player", "", "I get you read a dictionary or two, but shouldn't your vocabulary have normalized by now?");
			writeSpeech("nurse", "", "Perhaps, but like how children learn languages faster than adults, perhaps my memory void works the same way?");
			writeSpeech("player", "", "So if I'd fucked you after you drank that potion...");
			writeSpeech("nurse", "", "I would likely not be as useful to you as I am now. Unless you'd prefer me much more mindless and much more keen to get my 'box filled', as they say. Besides, there are plenty of potions that can do the same thing temporarily, and will even give me a fashionable new hair color.");
			writeFunction("writeEncounter('chatHub')", "Go back");
			break;
		}
		case "chatPotionGenome": {
			writeSpeech("player", "", "How come some potions don't work on others?");
			writeSpeech("nurse", "", "Well, everyone's body is different for a start. Many potentially could drink them, but they'd suffer major side-effects. If you drank the heart-heat potion for example it'd permanently sterilize you.");
			writeSpeech("player", "", "Well that certainly doesn't sound worth it.");
			writeSpeech("nurse", "", "Indeed. But don't worry, I'm looking into which members of the student body are vulnerable to the effects of my masterworks. When you've decided to take over the school I'll be at your side with a bevy of bottles.");
			writeSpeech("player", "", "I appreciate it.");
			writeFunction("writeEncounter('chatHub')", "Go back");
			break;
		}
		case "potionFiller": {
			writeText("Setting the baking soda and flower petal aside from the moment, you'll need to help nurseF with the first ingredient.");
			writeSpeech("player", "", "Let's make that potion filler then.");
			writeSpeech("nurse", "", "Indeed. It will dilute my work enough that effectively we'll have an unlimited amount of each potion we create, quite handy if I say so myself. We have everything we need already, aside from the listed 'four hours of hard labor'. That said, when I wrote this entry I was apparently quite the shut-in, I'm sure a big strong source of 'masculine essence' will have no trouble!");
			writeText("...");
			writeText("The two of you spend a few hours preparing materials, measuring out solutions, and most of all constantly stirring and mixing fluids. By the end of it you're both tired and it's gotten a bit late.");
			writeSpeech("nurse", "", "Mmm, I've worked up a sweat, and you have too.");
			writeSpeech("player", "", "Yeah I should get going, maybe take a shower.");
			writeSpeech("nurse", "", "Oh, how would you like to come over to my home? I have an absolutely luxurious bath, filled with bubbles that are absolutely wonderful as entertainment. It's big enough for both of us.<br>Ah, but don't take this as an invitation for raucous intercourse, I need to save something special for your reward once we're all finished.");
			addFlag('nurse', 'potionFiller');
			writeFunction("writeEncounter('bathAgree')", "Agree");
			writeFunction("writeEncounter('bathDecline')", "Decline");
			break;
		}
		case "bathAgree": {
			writeEvent('nurseBath');
			passTime();
			writeFunction("changeLocation('street')", "Finish");
			break;
		}
		case "bathDecline": {
			writeSpeech("player", "", "Maybe some other time. If it's just going to be teasing and a handjob at best, I'll wait for the main course.");
			writeSpeech("nurse", "", "A shame, I'll be waiting for the rest of the ingredients then. Plenty of preparation to do for our fun.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "level1Reward": {
			writeSpeech("player", "", "The filler stuff is done, you've got the flower petal, and here's the baking soda.");
			writeSpeech("nurse", "", "Wonderful! With this, more than a few potions are ready to mix. A first attempt at my youth potion, one to bolster charisma, one to increase anal sensitivity, and a lovely genderswap potion for some of the cuter boys in the school... I'll have them all ready by tomorrow for you... But...");
			writeSpeech("player", "", "But?");
			writeSpeech("nurse", "", "I don't suppose you'd... That I can reward you now? I wanted to encourage you as best I could but I may have overestimated myself...");
			writeFunction("writeEncounter('nurseReward1')", "Accept your reward");
			break;
		}
		case "nurseReward1": {
			writeEvent('nurseReward1');
			passTime();
			addFlag('nurse', 'reward1');
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "blue2PinkPotion": {
			writeSpeech("nurse", "", "Ah, yes. One moment...");
			writeText("...");
			writeSpeech("nurse", "", "Ta-daaah~! My latest creation, one more masterpiece of soon to be many. Prepare your precious heart, for it will surely give out from ex-");
			writeSpeech("player", "", "So what's it do?");
			writeText("She pauses for a moment before sighing. The mixture is a swirling blue liquid, every so often turning a soft pink color for just a moment before turning back.");
			writeSpeech("nurse", "", "This is the Blue 2 Pink potion, it'll transform a boy or a man who drinks it. Sizeable breast growth, and a complete replacement of their male genitalia. The effects are temporary unless more than a few drops are ingested, in which case the potion is both permanent and possesses several side effects. Most of them fun!<br>However it's use is unfortunately limited. They imbiber would need to already have several feminine traits and have a <i>very</i> specific set of genomes present in their genetic code. I'd say given the population of the city, it's possible only one in a thousand people will have it.");
			writeSpeech("player", "", "That's a shame. You'll keep an eye out for anyone who fits the criteria?");
			writeSpeech("nurse", "", "Indeed. Actually, the potion will undergo a minor change when in the vicinity of anyone vulnerable. The bottle will fizz ever so slightly, it's quite sensitive.");
			writeSpeech("player", "", "How... How would it know?");
			writeSpeech("nurse", "", "Well, you know about how many of your dead skin cells are floating in the air right now? The bottle is designed so that-");
			writeSpeech("player", "", "It's magic. Got it. Thanks a ton, nurseF.");
			writeSpecial("You've obtained the Blue2Pink potion!");
			addItem("Blue2Pink Potion", true, "scripts/gamefiles/items/blue2pink.jpg");
			addFlag('nurse', 'blue2Pink');
			writeFunction("writeEncounter('potionQuo')", "Finish");
			break;
		}
		case "charismaPotion": {
			writeSpeech("player", "", "The potion you were talking about before that increases charisma, is it ready?");
			writeSpeech("nurse", "", "Completely. My, I hope the several dozens of gallons of aged-ink were worth this.");
			writeSpeech("player", "", "Wait, what?");
			writeSpeech("nurse", "", "Pay me no mind, I'm rambling. This potion ought to improve your mental faculties, nowhere near the level of mine of course. The social skills you use in your daily life ought to be improved by this.<br>There's no point in letting this one sit, and the ingredients might separate if left out, so open up please.");
			writeSpeech("player", "", "I don't suppose I can change my-<br>Urk!");
			writeText("The potion tastes like you've just licked the page of an old textbook, but the effects are pretty immediate. As you look at nurseF, words fly into your head. One-liners that'd make you seem clever or comebacks to any potential arguments.");
			writeSpecial("Your hypnosis skill has improved!");
			writeSpecial("Your counseling skill has improved!");
			data.player.hypnosis += 1;
			data.player.counseling += 1;
			updateMenu();
			addFlag('nurse', 'charisma');
			writeFunction("writeEncounter('potionQuo')", "Finish");
			break;
		}
		case "imperfectYouthPotion1": {
			writeSpeech("nurse", "", "The first draft of my youth potion is ready...<br>Weak. *Ahem*");
			writeText("nurseF takes a moment to pose dramatically.");
			writeSpeech("nurse", "", "The latest draft is ready, the potion that will push the very boundaries of science is now complete and ready for you to unleash upon my body! Feel your manhood tremble as you behold the first draft of the spring of eternal youth made real!");
			writeSpeech("player", "", "Really playing this up, huh? So it's like a skin cream, it'll make you look younger?");
			writeSpeech("nurse", "", "Skin cream... A wonderful excuse. And it certainly will. If my studies are correct I'll revert to a post-puberty age, probably about when I had graduated highschool. The effects will unfortunately be temporary though. I must test it...");
			writeSpeech("player", "", "Isn't that just a tiny bit dangerous?");
			writeSpeech("nurse", "", "Not if you watch the door. I have several forms of reading material prepared for you if you need them, the process could take a while.");
			writeFunction("writeEncounter('imperfectYouthPotion2')", "I'll watch the door");
			writeFunction("writeEncounter('potionQuo')", "Actually, let's test it later");
			unencounter('nurse');
			break;
		}
		case "imperfectYouthPotion2": {
			addFlag('nurse', 'imperfectYouth');
			writeEvent('nurseImperfectYouth');
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "analPotion1": {
			writeSpeech("player", "", "Let's go with that anal potion you were talking about earlier.");
			writeSpeech("nurse", "", "Ah, of course!");
			writeText("She digs through her cabinet and pulls out a bottle marked with an image of a peach.");
			writeSpeech("nurse", "", "Now, I'm not quite experienced in these regards, and it's my understanding that enjoying this sort of play requires a certain sort of mindset, or years of experience building up to a passionate session of lovemaking from behind.<br>I made this potion to simulate the effects of those years of experience being a, well-");
			writeSpeech("player", "", "A buttslut.");
			writeSpeech("nurse", "", "Indeed. Bottoms up, I suppose.");
			writeText("She uncorks the top filling the room with a fruity smell and takes a small sip of the potion.");
			writeSpeech("nurse", "", "Mmm, my. Surprisingly, it tastes like lemons. Well, the effects are extremely slow-acting, we'll need to find some way to entertain ourselves while the mixture works my magic.");
			writeSpeech("player", "", "How about cards? You ever play blackjack?");
			writeSpeech("nurse", "", "I don't think so, but I'm not one to refuse a bit of experimentation.");
			writeText("...");
			writeText("It takes her a bit to learn the rules, but afterwards she bulldozes you with a twelve game winning streak. She's probably already gotten the hang of card-counting.");
			writeText("But this round she's hesitating, fidgeting in her seat.");
			writeFunction("writeEncounter('analPotion2')", "Something wrong?");
			addFlag('nurse', 'anal');
			break;
		}
		case "analPotion2": {
			writeEvent('nurseAnal');
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "nurseMama": {
			writeHTML(`
				sp player; I could use your help. There's a member of the PTSA council, mamaF. She's...
				...
				t You explain the situation to nurseF, and she's already mixing together some chemicals.
				sp nurse; Brunette you said? I'll have to guestimate how sensitive her nose is, and... Alright. I've got a formula ready. A potion that'll allow you to transform yourself to disguise yourself as the object of her affection, or whatever she's really horny for at the moment.
				sp player; What will you need?
				sp nurse; A lock of her hair, or any large amount of her DNA, and the pollen of an extremely rare flower. Luckily I already have DNA samples for all one-hundred and eight potential PTSA candidates.
				sp player; Where did you get those, again?
				sp nurse; What? I thought I told you my older self planned to take over the school as well...<br>In any case, you'll need to collect the pollen.
				sp player; Where can I find it?
				sp nurse; Medicine cabinet on your left, third shelf.
				...
				t After a short mixing, nurseF's latest potion is complete. A small vial of white fluid, when you shake it the fluid turns black, before relaxing and turning back again.
				sp nurse; Take it without shaking and you'll turn into an identical copy of her son, and I've got a change of clothes here for good measure. Shake it, and you'll transform into a large black man.
				sp player; ... May I ask why?
				sp nurse; Don't be so quick to jump upon the gun, *master. If my many dozens of reference materials are accurate, the potion's secondary form is likely her greatest weakness as a housewife.
				sp player; I really should not ask, but... <i>why?</i> Why do you have this recipe prepared?
				sp nurse; *Master, please! Do I really come off as so unprepared?
				sp player; One of these days you'll need to show me everything you're working on, no more surprises.
				sp nurse; It'll take much more than a day. <br>In any case, if you want her to be yours, the path is clear. You darken her doorstep, and then the proverbial magic happens! Racially charged epithets will fly, she'll utter something along the lines of "I'll accept racial equality the day I accept your black cock in my womb!", and then you'll impregnate her and convert her into your loyal slave.
				sp player; Or, and hear me out, I just transform into her son and hypnotize her into supporting me.
				t nurseF looks at you quizically.
				sp nurse; I... Suppose. It's unlikely, but it could work.
				t You've obtained a potion that will transform you into mamaF's son! Or into a form best suited for hard NTR, if that's the way you want to play this song and dance.
				sp player; Anyways, thank you nurseF.
				sp nurse; I'm at your disposal, *sir.
			`);
			setTrust('mama', 2);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "nurseBath", name: "Bathtime"},
	{index: "nurseReward1", name: "First Level Reward"},
	{index: "nurseAnal", name: "Anal Potion"},
	{index: "nurseheartHeatA1", name: "Heart Heat Potion (First Draft)"},
	{index: "nurseImperfectYouth", name: "Youth Potion (First Draft)"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "nurseheartHeatA1": {
			writeSpeech("player", "", "Go ahead, impress me.");
			writeSpeech("nurse", "", "Very well, don't lose your head in the excitement. And, ah, I have a change of pants in case we end up making too big of a mess.");
			writeSpeech("player", "", "Wait, should I take my-");
			writeText("Ignoring you, she uncorks the bottle and takes just the tiniest of sips of the potion. The moment the top is off the room is flooded with the scent of strawberries and girlcum.");
			writeSpeech("nurse", "", "Ah... Hah~...");
			writeText("Her usual chatterbox self is silent as she closes the bottle, only disorientated, breathy moans.");
			writeSpeech("player", "", "Are you-");
			writeText("You feel a sudden weight against your torso as you're pushed down to the ground on your ass. Before you can even think about what just happened, you hear the sound of fabric tearing near your crotch.");
			writeSpeech("nurse", "", "Ghh~ Hah~~");
			writeBig("images/nurse/heart1.jpg", "Art by Oreteki18kin");
			writeSpeech("nurse", "", "*Mwah*<br>Mmm~");
			writeText("She's on you like a predator, each time she kisses your exposed cock she shudders like her lips are an erogenous zone.");
			writeBig("images/nurse/heart2.jpg", "Art by Oreteki18kin");
			writeText("Without missing a beat she slides her lips up your length, then swallows a good half of your cock in one thrust.");
			writeText("Something about the inside of her mouth, of her needy tongue, has you seeing stars. Each time she thrusts her mouth down your length she moans instead of gagging, like she's a practiced professional savoring the most delicious thing in the world.");
			writeText("Your vision swims pink, nothing matters anymore but pleasure...");
			writeBig("images/nurse/heart3.jpg", "Art by Oreteki18kin");
			writeSpeech("nurse", "", "Ccchkkk-!");
			writeText("You cum like you've been edging for hours, flooding her mouth. The effect vanishes like it was hit by a truck. nurseF stops mid-thrust, her incredible talent vanishing leaving her to choke and gag on the torrent of sperm.");
			writeBig("images/nurse/heart4.jpg", "Art by Oreteki18kin");
			writeText("She pulls your dick out of her mouth and coughs out the globs of jizz as best she can.");
			writeSpeech("nurse", "", "Ckk... *Ahem*<br>I-*ahem*");
			writeText("nurseF pushes herself off of you.");
			writeBig("images/nurse/heart5.jpg", "Art by Oreteki18kin");
			writeSpeech("nurse", "", "We... We made quite a mess, didn't we?");
			writeSpeech("player", "", "Yeah, I guess we did. ");
			break;
		}
		case "nurseBath": {
			writeText("The two of you head off to her home, the sweat from a day's work only getting thicker from the uphill walk.");
			writeSpeech("player", "", "You think you could whip something up for stamina?");
			writeSpeech("nurse", "", "I'm a hop, skip, and a jump ahead of you, not to worry. Plus, a soothing cleanse after a struggle makes the mind feel cleaner by the end.");
			writeText("...");
			writeText("Her house is as cluttered as ever, nearly every wall lined with books. Hundreds of papers used for notes are scattered about or stuffed into boxes, ranging from complex chemical formulae to what appears to be a basic 'learning to read' alphabet.");
			writeSpeech("nurse", "", "You go ahead and get the bath started. I'll prepare some towels and set our clothes to wash.");
			writeText("...");
			writeText("You hoping for her to be a bit more direct with a reward for your efforts, but the moment you sink into the warm bathwater your cares and exhaustion simply fade away.");
			writeText("The gentle water feels like it's caressing your soul. Your eyes feel heavy.");
			writeSpeech("nurse", "", "My, you seem quite relaxed.");
			writeBig("images/nurse/bathing1.jpg", "Art by Oreteki18kin");
			writeSpeech("nurse", "", "I was hoping to put on a bit of a show as motivation, but you dozed off for a moment.<br>Ah ah, no touching~<br>We'll have so much fun together once we've found the ingredients for my work, I can't give you your reward right away~");
			writeBig("images/nurse/bathing2.jpg", "Art by Oreteki18kin");
			writeSpeech("nurse", "", "My~<br>You really are tempting me, aren't you... I understand that you're excited, but you should control yourself. What if I wasn't someone who wanted to be covered in your sperm? What if I were some innocent young woman just trying to bathe with a friend? <br>Why, I'd surely be scared away from a member as magnificent as yours...");
			writeText("She licks her lips as she watches you stroke yourself.");
			writeSpeech("nurse", "", "I'd... My, I'd want nothing to do with you... I'd have to be a pervert beyond any hope of redemption, someone who'd want nothing more than to fulfill my <i>purpose in life</i> with you. That's the sort of person I'd have to be to stay in this bath.<br>But of course, I have self control. I'm <i>not</i> fantasizing about what that perfect member would feel like inside me, and I'm certainly not getting weat... At the thought...<br>At the thought of bathing. In. Your. <b>Cum</b>~!");
			writeBig("images/nurse/bathing3.jpg", "Art by Oreteki18kin");
			writeSpeech("nurse", "", "Ah~! Such a m-mess~<br>We're supposed to get clean, you know, but I feel <i>dirty</i> and it's all your fault~<br>But... At least you're satisfied for now. You'll be patient, and work for your reward, right?");
			writeText("...");
			writeBig("images/nurse/bathing4.jpg", "Art by Oreteki18kin");
			writeSpeech("nurse", "", "Ghhg~! It's hitting all the right spots~<br>Mmm~, you k-know this doesn't count, right? I'm not a s-slut who'd break her word because getting sprayed put her on the edge of a climax, you know~<br>R-really, you're the one to blame. Waving something like that in front of someone so <i>hungry</i>...<br>Gghh~! Cumming~!");
			writeBig("images/nurse/bathing5.jpg", "Art by Oreteki18kin");
			writeSpeech("nurse", "", "Hah~... I can feel it inside me, filling me up...<br>Hey, since this doesn't count... Maybe we can go another round? You'll still work hard for that extra special reward, right?<br>I'm not sure I can wait very long, won't you give me something to tide me over?");
			writeText("...");
			writeText("You ended up needing to take another shower afterwards.");
			break;
		}
		case "nurseReward1": {
			writeSpeech("player", "", "I got the stuff. The flower petal, the baking soda... And the potion filler stuff is all working, right?");
			writeSpeech("nurse", "", "Indeed! Let me see...");
			writeText("She takes the ingredients and looks over them, carefully inspecting the state of the flower petal.");
			writeSpeech("nurse", "", "Aged, but not too bad. The pollen is the real target and there's enough of it.<br>Let me just put these away... Ah, could you lock the door?");
			writeSpeech("player", "", "Sure.");
			writeText("With a click, you guarantee privacy in the office. ");
			writeSpeech("player", "", "So, what can you make with th-");
			writeSpeech("nurse", "", "Ah ah ah~!");
			writeBig("images/nurse/reward1-1.jpg", "Art by Oreteki18kin");
			writeSpeech("nurse", "", "You can't forget your reward~<br>I know you're just as excited as I am to get to mixing, but...");
			writeSpeech("player", "", "I turn around for one second... Who exactly is being rewarded here?");
			writeSpeech("nurse", "", "You, of course *Master~! I know my behavior seems a bit... Whorish... But really, I just want to encourage you for all the help you've given me. That's all, really, I certainly haven't been counting the seconds~!");
			writeBig("images/nurse/reward1-2.jpg", "Art by Oreteki18kin");
			writeSpeech("nurse", "", "N-now, hurry~<br>I'm sure you can't hold back even a moment longer~!");
			writeText("She's positively giddy with anticipation, urging you to hurry until she goes quiet you finally fish out what she's been waiting for.");
			writeSpeech("nurse", "", "... It's here...");
			writeSpeech("player", "", "Needy little slut. You know, maybe you should do some checking first? Maybe one of the ingredients-");
			writeSpeech("nurse", "", "Nooo~! They're fine, I'm sure, you're a very good *boy, I trust you~!  Now please, no more hesitation~!");
			writeBig("images/nurse/reward1-3.jpg", "Art by Oreteki18kin");
			writeSpeech("nurse", "", "Aaaah~!<br>So eager, have you been feeling pent up~?<br>It's so... So large...<br>It's not healthy to abstain from pleasure, you know... Make sure to let loose regularly, aaannnnDDD~ OOOH~!<br>... *huff* T-that wasn't me cumming, you know... <br>I'm not so... So perverted I'd cum from you filling my insides.");
			writeBig("images/nurse/reward1-4.jpg", "Art by Oreteki18kin");
			writeSpeech("nurse", "", "I'm loyal to you, *Master~ Do your best from now on so I can reward you again, okay? ");
			break;
		}
		case "nurseAnal": {
			writeSpeech("player", "", "Something wrong?");
			writeSpeech("nurse", "", "Heavens, no. I may have underestimated some of the potion's effects though. Certain aspects are a bit... More intense than I was expecting.");
			writeSpeech("player", "", "Ah, already taking effect. Well, be a good researcher, tell me how you're feeling.");
			writeSpeech("nurse", "", "Well, I read that people with experience in... Nnn, backdoor play, experience a desire to repeat that play. I thought it best if I created an itch... Well, I suppose <i>hunger</i> would be more appropriate.<br>I feel quite uncomfortable, tingly even.");
			writeSpeech("player", "", "Wrong. Too impartial, cold scientific wording doesn't apply here. You won't get what you need like that. Let me lock the door while you try again.");
			writeText("She whines as her fidgeting gets more intense. As you click the office's door shut to get a bit of privacy, you can hear her standing up.");
			writeSpeech("nurse", "", "I... I need your help...");
			writeBig("images/nurse/anal1.jpg", "Art by Oreteki18kin");
			writeSpeech("nurse", "", "The potion's effects on my... On my a-ass are quite intense. I need stimulation, or I'll go crazy...");
			writeSpeech("player", "", "Close, but not good enough. Try again or you'll be getting that 'stimulation' from a bedpost.");
			writeSpeech("nurse", "", "P-please~!");
			writeSpeech("player", "", "Please what?");
			writeSpeech("nurse", "", "PLEASE FUCK MY ASS~!");
			writeBig("images/nurse/anal2.jpg", "Art by Oreteki18kin");
			writeSpeech("nurse", "", "Goooouh~!");
			writeSpeech("player", "", "I didn't tell you to scream it, you trying to let the whole school in on our secret?");
			writeSpeech("nurse", "", "Ghh~! Nnnngh~!");
			writeSpeech("player", "", "You seem at a loss for words, doctor. Can you describe what's happening, or should I slow down?");
			writeSpeech("nurse", "", "N-noooo~! I-<br>Gggh~ Y-your penis is st-");
			writeSpeech("player", "", "<b>Cock</b>.");
			writeSpeech("nurse", "", "Y-yuuugh~ Your c-cock is stimulating the nerves... The nerves that are supercharged by the potion, and... Ghh...<br>Your cock is making my ass feel good~!<br>Gggh, faster please~!");
			writeSpeech("player", "", "Oh, is this not enough for you?");
			writeSpeech("nurse", "", "I made, nngh, I designed the potion to increase in intensity until o-ointment could be applied~<br>The hunger is g-getting more powerful~!");
			writeSpeech("player", "", "Ointment, hmm? What exactly do yo-");
			writeSpeech("nurse", "", "Cum~! Need cum~! Pump your c-cum... Into~! My~! ASS~!");
			writeText("You comply, and the moment the first jet of sperm enters her ass the effects are immediately clear. Her fidgeting ceases, and her body is hit with a rolling feeling of relief.");
			writeSpeech("nurse", "", "Yeeessss...~");
			writeBig("images/nurse/anal3.jpg", "Art by Oreteki18kin");
			writeSpeech("nurse", "", "That... That was certainly a complete success, I'd say...");
			writeSpeech("player", "", "Needs work. Make the next draft last longer, and increase skin sensitivity too so you can enjoy a good spanking.");
			writeSpeech("nurse", "", "Of course, *Master~");
			break;
		}
		case "nurseImperfectYouth": {
			writeSpeech("player", "", "Go ahead, you seem excited to use it.");
			writeSpeech("nurse", "", "Wonderful! I'll repay you for this, promise. The effects will work best if I'm asleep, so do try to keep quiet.");
			writeSpeech("player", "", "Geez, fine. Drink it and hit the sack already.");
			writeText("She downs the bottle's contents, commenting on how it tastes like what she imagines a beach vacation feels like, before she retires to one of the unused beds behind a curtain.");
			writeText("...");
			writeText("Thankfully nobody needed any medical help, although you could probably have managed with hypnosis and a few placebos. A few hours pass uneventfully, before you relax enough that you actually start to drift off.");
			writeSpeech("player", "", "Hey, nurseF, you up yet?");
			writeText("No response, still asleep.");
			writeSpeech("player", "", "<i>Oh well, she'll wake me when the process is finished. Might as well lock up and get a nap in...</i>");
			writeText("...");
			writeText("You have a lovely dream, there's a llama or something, it makes about as much sense as dreams usually do.");
			writeText("Except it gets a bit weird when the ground feels soggy, and a pleasant tingling starts running through your body every other second. A moan fills the air, then another.");
			writeBig("images/nurse/youth1-1.jpg", "Art by Oreteki18kin");
			writeSpeech("player", "", "Wh... What's going on?");
			writeSpeech("nurse", "nurseY.jpg", "Ah, good morning~!");
			writeBig("images/nurse/youth1-2.jpg", "Art by Oreteki18kin");
			writeSpeech("nurse", "nurseY.jpg", "I apologize, I meant to just look myself over before I woke you, I thought I'd surprise you in the outfit I brought, but... <br>Do I look good? My body feels so fresh, it appears one of the side effects is a heightened sensitivity. I can't keep my hands off myself... Or you, for that matter...");
			writeSpeech("player", "", "nurseF?");
			writeSpeech("nurse", "nurseY.jpg", "Y-yes, and I must say the potion's effects are... Splendid~! My older self wasn't quite the sort to enjoy rougher treatment... But I can't help myself now...");
			writeBig("images/nurse/youth1-3.jpg", "Art by Oreteki18kin");
			writeSpeech("nurse", "nurseY.jpg", "Ooooh~!<br>C-can You feel it? My cervix? It's highly sensitive, not the sort of thing to treat roughly... But if I'm careful, the lightest of taps...<br>Oogh~! Can be quite addictive~!");
			writeText("With the dexterity you'd expect from someone straight out of highschool, she rolls her hips ever-so-carefully to lightly tap the entrance to her womb over and over again.");
			writeSpeech("nurse", "nurseY.jpg", "It's q-quite wonderful... Not to mention the potion leaves me a bit more durable too~... And, the biggest advantage of this position, aside from the quiver-inducing pleasure...<br>It's cumming~");
			writeBig("images/nurse/youth1-4.jpg", "Art by Oreteki18kin");
			writeSpeech("nurse", "nurseY.jpg", "Oh yessss~!");
			writeText("Because of the position, your cock immediately unloads directly against the entrance to her womb, pumping jizz directly into her.");
			writeText("With how much she's quaking, you need to lean forwards to wrap your arms around her lest she fall backwards off the couch.");
			writeSpeech("nurse", "nurseY.jpg", "Gghhh... How does it feel to be... To be inseminating someone so young? I'm not sure how long the effects will last, I'd like to show the advantages of this new body a bit more...");
			writeText("...");
			writeText("By the time the two of you finish, you feel like you've run a marathon. On the other side, she seems barely winded. She retains her youth for the next hour, and you put the potion's effects to good use.");
			writeText("Eventually she needs to leave to catalog the effects and work on an improved version, but this first draft was undoubtedly a success.");
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
	if (data.player.location == "gallery") {
		writeFunction("changeLocation(data.player.location)", "Finish");
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
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "reward": {
			writePhoneImage("images/nurse/reward.jpg", "Art by Oreteki18kin");
			writePhoneSpeech("nurse", "", "You've finished all of nurseF's content for this version, more is on the way!");
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