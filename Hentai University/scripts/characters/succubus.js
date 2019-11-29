var character = {index: "succubus", fName: "Gou", lName: "", trust: 0, encountered: false, textEvent: "", met: false, color: "#BF76DF", author: "NoodleJacuzzi", artist: "Gujira"};

var logbook = {
	index: "succubus", 
	desc: "A succubus (male), the lowest rank of demons aside from imps. He's been trying to seduce humans to increase his rank.",
	body: "While disguised he looks entirely human, albeit incredibly feminine for a boy.",
	clothes: "One of his hobbies is collecting girl's clothes. He claims it's purely for seduction purposes.",
	home: "He comes over to your place every night, but you don't know if he actually needs to sleep.",
	tags: "Corruption, anal, tomgirl, trap, cosplay, prostitution, demon",
	artist: "Gujira",
	author: "NoodleJacuzzi",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "introOffer", name: "Someone is leaning on the wall, they look like they're waiting for someone.", location: 'street', time: "Evening", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "windowProposal", name: "Someone in cosplay is sitting in your windowsill", location: 'playerHouse', time: "Night", itemReq: "", trustMin: 1, trustMax: 1, type: "tab", top: 0, left: 0, day: "both", altName: "???", altImage: "demon.jpg",},
	{index: "caseSelect", name: "succubus is here again", location: 'playerHouse', time: "Night", itemReq: "", trustMin: 60, trustMax: 200, type: "tab", top: 0, left: 0, day: "both", altName: "???", altImage: "demon.jpg",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "introOffer": {
			writeText("Normally you'd just walk past someone passing time on their phone, but something about him just seems... Off. Not quite in a bad way.");
			writeText("Just looking at him makes your vision a little blurry, like your head is being filled with pink fuzz. After a second of focus it dissipates though, maybe he's wearing perfume?");
			writeSpeech("player", "", "Hi. Are you waiting for someone?");
			writeBig("images/succubus/profile.jpg", "Art by Gujira");
			writeText("Without looking you in the eye, he glances up from his phone to size up your body.");
			writeSpeech("succubus", "", "You'll do. Name's Gou, don't need yours.<br>Fifty bucks for an hour, you won't need any longer.");
			writeText("He's pretty direct, and it doesn't seem like anyone's watching.");
			writeFunction("writeEncounter('introAcceptance')", "Accept");
			writeFunction("writeEncounter('introRejection')", "Refuse");
			break;
		}
		case "introAcceptance": {
			writeSpeech("player", "", "Sounds fair. I'll probably need more than an hour though.");
			writeSpeech("succubus", "",  "Sure you will buddy, sure you will.");
			writeText("Eyes still locked on his phone, he leads you to a nearby hotel.");
			writeSpeech("player", "", "Not getting the money up front? And you'll just do anyone who asks?");
			writeSpeech("succubus", "",  "I've got my standards and my methods.");
			writeText("The hotel is a actually a pretty nice looking place, but the receptionist doesn't even seem to notice as the two of you walk by.");
			writeText("The elevator ride up is pretty slow. He tends to answer your questions with single-word 'yup's.");
			writeSpeech("player", "", "Gotta say, not impressed so far. Not super interested in a boy going starfish under me.");
			writeSpeech("succubus", "",  "Heh. You don't need to worry, you're about to have the time of your life.");
			writeSpeech("player", "", "Sure. You got a name? A real name, I mean.");
			writeSpeech("succubus", "", "... succubusF.");
			writeText("Whoever he really is, he seems pretty keen on keeping this anonymous. Probably for the best, otherwise you'd need to hypnotize him afterwards. His uniform isn't familiar, he probably doesn't go to your university.");
			writeText("He fishes out a keycard and the two of you enter the room, the lighting and decorations being very direct about the room's purpose.");
			writeText("He takes off the outer layer of his clothes and takes a seat, before rolling his neck trying to work out a kink.");
			writeText("All he's wearing is an extremely lewd set of lingerie, but his bratty posture doesn't do a great job of showing off.");
			writeSpeech("succubus", "", "God I'm tired... This is my only catch this week, gotta hit up Vintage Street after this...<br>Dick out, hurry up.");
			writeFunction("writeEncounter('introWhoring')", "Get Undressed");
			break;
		}
		case "introWhoring": {
			setTrust('succubus', 1);
			passTime();
			writeEvent('succubusDisguise1');
			writeFunction("changeLocation('street')", "Leave");
			for (trustIndex = 0; trustIndex < data.story.length; trustIndex++) {
				if (data.story[trustIndex].index == "succubus") {
					data.story[trustIndex].encountered = false;
					console.log(data.story[trustIndex]);
				}
			}
			break;
		}
		case "introRejection": {
			writeSpeech("player", "", "No thanks, I'm good.");
			writeSpeech("succubus", "",  "Huh.");
			writeText("He seems suprised that you'd disagree. ");
			writeSpeech("succubus", "",  "Well, you do you. <br>... I must be tired. I'll try again tomorrow.");
			writeText("He mutters to himself before leaving.");
			writeFunction("changeLocation('street')", "Leave");
			break;
		}
		case "maid": {
			writeFunction("changeLocation('street')", "Leave");
			break;
		}
		case "windowProposal": {
			writeBig("images/succubus/profileD.jpg", "Art by Gujira");
			writeSpeech("succubus", "demon.jpg", "Hehe, too easy. You really should lock your windows.<br>Hey, remember me? From in town? It's good to see you're already back to walking around.");
			writeText("It's that streetwalker from earlier, although his skin is darker and he's in a strange outfit.");
			writeSpeech("player", "", "I don't have any drugs, and Halloween was awhile ago. Scram, before somebody calls the cops and I need to explain why a sassy boi in cosplay is sitting in my windowsill.");
			writeSpeech("succubus", "demon.jpg", "Hah! Cosplay!");
			writeText("He hops down off the windowsill into your room, before turning around and showing off his little spade tail waving about.");
			writeSpeech("succubus", "demon.jpg", "Hehe. It's your lucky night too, human. I, the succubus (male), known as succubusF, have decided to make you an o-");
			writeSpeech("player", "", "Wait what? You're an incubus?");
			writeSpeech("succubus", "demon.jpg", "N-no, I'm a succubus (male). I'm here to-");
			writeSpeech("player", "", "You can't have my soul. I get that I'm mega-super fucking damned by now, but it's still-<br>Shit. Is all that stuff real? Am I going to hell?");
			writeSpeech("succubus", "demon.jpg", "Calm down. Listen. Don't worry about any of that.<br>This is going nowhere. I can see I'm going to need to be direct with you.");
			writeText("succubusF sighs, before in one fluid motion gets down on his knees in a begging position.");
			writeSpeech("succubus", "demon.jpg", "Please take me as your familiar, master!");
			writeSpeech("player", "", "... Excuse me?");
			writeSpeech("succubus", "demon.jpg", "Your heart is the darkest, most selfish I've ever seen! Like it's not tainted with lust, it's a big ball of lust with a little bit of humanity sprinkled inside. Just one fuck with you put me over the top and I had enough energy to meet my quotas and get promoted too. <br>Then I wasted it and dumped it onto the bedsheets, but I won't hold that against you. <br>My point is that not only are you some cream of the crop gourmet shit, but you're also a magnet for virgin energy, making you-");
			writeSpeech("player", "", "Now hold on a moment there-");
			writeSpeech("succubus", "demon.jpg", "Other virgins, you've got the potential to seduce virgins, I'm not saying you're one. Gimme a second dude. Lucy's sake, don't have a fucking crusade. <br>Anyways, I want it. You aren't using it all anyways, and I can help you out and... Give you some other incentives.");
			writeSpeech("player", "", "I don't understand. I thought incu- I mean succubi stole souls while you slept? I mean, I'm not super fresh with Christian mythology...");
			writeSpeech("succubus", "demon.jpg", "Well... It's a little complicated... But I'd never hurt anybody! I just siphon a little bit of corrupted soul off the top! You humans make more anyways, it isn't dangerous. ");
			writeText("You lean in to inspect the begging demon on your floor. His hair smells like the abstract concept of sinning, which is surprisingly close to chocolate.");
			writeSpeech("player", "", "So why would you need my help?");
			writeText("He looks up, his amber eyes meeting yours.");
			writeSpeech("succubus", "demon.jpg", "I'm just a succubus (male), one of the lowest ranks of demons. I'm barely making my dues to my superiors, I'm having a hard time staying afloat, let alone saving up to become a proper incubus!");
			writeText("He sits up to clasp your hands in his. He's very soft.");
			writeSpeech("succubus", "demon.jpg", "But with you, you're the most corruptive influence I've ever seen. Dark energy, the glorious essence that comes from corrupting humans... You're teeming with the stuff!");
			writeText("You lean back, deep in thought. On the one hand, he's cute. On the other, potential for eternal damnation. Well, you're probably damned anyways.");
			writeSpeech("player", "", "What's in it for me?");
			writeSpeech("succubus", "demon.jpg", "I'll reward you with my body! Well, that's a given, really, but more too! I haven't really been looking, but I'm sure I can find even more targets for you to corrupt, and with my help you can take them even farther!");
			writeFunction("writeEncounter('windowAcceptance')", "Accept");
			writeFunction("writeEncounter('windowRejection')", "Refuse, send this spawn of Satan packing");
			break;
		}
		case "windowAcceptance": {
			setTrust("succubus", 60);
			writeSpeech("player", "", "That sounds pretty tempting. So, I don't even need to do anything different?");
			writeSpeech("succubus", "demon.jpg", "Nope! Basically we demons feed off corrupted life force. We gather it ourselves or convert other people into demons and make them gather it for us.");
			writeSpeech("player", "", "Like a multi-level marketing scheme? I always knew those were from hell.");
			writeSpeech("succubus", "demon.jpg", "You don't know the half of it. Anyways, you're coated in the stuff already. I just gotta <i>extract</i> it.");
			writeSpeech("player", "", "Does it hurt?");
			writeSpeech("succubus", "demon.jpg", "Only if the demon sucks at giving a blowjob.");
			writeFunction("writeEncounter('windowFollowup')", "Let's get to it then");
			writeFunction("writeEncounter('windowRejection')", "Never mind, flock off hellspawn");
			break;
		}
		case "windowFollowup": {
			writeEvent('succubus1');
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "windowRejection": {
			writeSpeech("player", "", "No dice, spawn of Satan. This place is a home of purity, a bastion of chastity. No chocolate boi booty can tempt me.");
			writeSpeech("succubus", "demon.jpg", "... Are you serious?");
			writeSpeech("player", "", "About rejecting you, yes. Everything else was a cold lie.");
			writeSpeech("succubus", "demon.jpg", "Oh... Well, uh... I don't suppose you might change your mind?");
			writeSpeech("player", "", "Begone, demon. Out of this house!");
			writeText("You start drawing crosses in the air like you've seen on TV.");
			writeSpeech("succubus", "demon.jpg", "Gah! Stop, stop, I'm going!");
			writeText("He quickly hops out your window and begins flying away.");
			writeSpeech("succubus", "demon.jpg", "You 'deus vult' motherfuckers are all the same. Don't think I'll forgive you when you come crawling back, unless I <b>really</b> feel like accepting your apology!");
			writeText("You close the window and lock it shut.");
			setTrust('succubus', -1);
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "caseSelect": {
			if (checkTrust('succubus') == 60) {
				writeSpeech("succubus", "demon.jpg", "Heeey~ How're you feeling? You were pretty out of it when I left last time, you rehydrate yourself? ");
				writeSpeech("player", "", "I'm feeling fine, really good actually.");
				writeSpeech("succubus", "demon.jpg", "Well, increased potency is a side effect. Not that you'd need it, you're pretty insatiable already.");
				writeSpeech("player", "", "In any case, we should probably get started with this whole master and familiar dynamic. Do I need to sign something?");
				writeSpeech("succubus", "demon.jpg", "Nope! All you need is for me to declare submission, master, and for the deal to be sealed with a kiss. My lips on your dick, to be precise. We're all set already!");
				writeSpeech("player", "", "Alright then, I look forwards to working with you, succubusF. ");
				writeSpeech("succubus", "demon.jpg", "Same here, master. So! I did a quick spyjob on the school you work at looking for targets, I even got their names! Here's what I found:");
				raiseTrust('succubus', 1);
			}
			else {
				writeSpeech("succubus", "demon.jpg", "Maaaster~ I'm hooome~<br>Hehe, miss me?");
				writeSpeech("player", "", "Welcome back. What do you have for me tonight, succubusF?");
			}
			if (checkFlag('succubus', 'tomgirlS') != true) {
				writeSpeech("succubus", "demon.jpg", "There's a boy named tomgirlF I think would make a good target, he even tried hitting on me.");
				writeFunction("writeEncounter('tomgirlStart')", "tomgirlF tomgirlL");
			}
			else {
				if (checkFlag('succubus', 'tomgirlF') != true) {
					writeSpeech("succubus", "demon.jpg", "You have that tomgirl, tomgirlF, in the palm of your hands yet? You'll wanna go all the way before we have our fun.");
					if (checkTrust('tomgirl') > 99) {
						writeFunction("writeEncounter('tomgirlEnd')", "Talk about tomgirlF");
					}
				}
			}
			if (checkFlag('succubus', 'mejiS') != true) {
				writeSpeech("succubus", "demon.jpg", "There's a boy named mejiF, I tailed him leaving school.");
				writeFunction("writeEncounter('mejiStart')", "mejiF mejiL");
			}
			else {
				if (checkFlag('succubus', 'mejiF') != true) {
					writeSpeech("succubus", "demon.jpg", "You looked into that wannabe delinquent yet?");
					if (checkTrust('meji') > 50) {
						writeFunction("writeEncounter('mejiEnd')", "Talk about mejiF");
					}
				}
			}
			if (checkTrust('succubus') == 71) {
				writeSpeech("succubus", "demon.jpg", "Nothing tonight, sorry. We've hit the obvious targets, I'll need to search the school more carefully from here on.");
				writeSpeech("player", "", "Keep yourself out of trouble then.");
				writeSpeech("succubus", "demon.jpg", "Of course! I am a demon after all, have a little faith in your familiar. <br>I'll keep searching, and let you know if I find any good targets.");
			}
			writeSpeech("succubus", "demon.jpg", "We could also just spend the night chatting, if you wanted. I get that I'm a pretty unique sort of houseguest, after all.");
			writeFunction("writeEncounter('chatSelect')", "Chat");
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "tomgirlStart": {
			addFlag('succubus', 'tomgirlS');
			writeSpeech("succubus", "demon.jpg", "There's one boy who tried hitting on me till he realized I was a guy-");
			writeSpeech("player", "", "That's debatable.");
			writeSpeech("succubus", "demon.jpg", "Shut up. Anyways I let him know I had a dick, he got all stammery. He seems like a pretty good target. His name's tomgirlF tomgirlL. He should be a pretty quick corruption, just show him your dick and he should break on the spot!");
			writeSpeech("player", "", "It probably won't quite be that easy, but I should be able to handle it.");
			writeSpeech("succubus", "demon.jpg", "Meh, you humans are too wrapped up in your weird holdups. Honestly, I'd fuck anyone cute, so long as they didn't have a chastity fetish.");
			writeText("succubusF shudders.");
			writeSpeech("succubus", "demon.jpg", "Never again.");
			writeFunction("writeEncounter('caseSelect')", "Back");
			if (checkTrust('tomgirl') > 99) {
				writeEncounter('tomgirlEarly');
			}
			break;
		}
		case "tomgirlEnd": {
			writeSpeech("succubus", "demon.jpg", "You have that tomgirl, tomgirlF, in the palm of your hands yet? You'll wanna go all the way before we have our fun.");
			writeSpeech("player", "", "I have, actually. I've had more than a little fun with him already.");
			writeSpeech("succubus", "demon.jpg", "Ooh! I knew you could do it! Really I would've thought you would've jumped him earlier. Well, better late than never, yeah? <br>Hehe, I guess that means it's time for my snack! ");
			addFlag('succubus', 'tomgirlF');
			writeFunction("writeEncounter('reward')", "Get started");
			break;
		}
		case "tomgirlEarly": {
			writeSpeech("succubus", "demon.jpg", "There's one boy who tried hitting on me till he realized I was a guy-");
			writeSpeech("player", "", "That's debatable.");
			writeSpeech("succubus", "demon.jpg", "Shut up. Anyways I let him know I had a dick, he got all stammery. He seems like a pretty good target. His name's tomgirlF tomgirlL. He-");
			writeSpeech("player", "", "tomgirlF, yeah. I already met him, he's already mine.");
			writeSpeech("succubus", "demon.jpg", "... Oh. Well, he was a pretty obvious target. It makes sense you'd hook him pretty quickly. Alright then, playerMister Jumps-The-Gun, lemme get a taste of that sweet virgin essence...");
			addFlag('succubus', 'tomgirlF');
			writeFunction("writeEncounter('reward')", "Get started");
			break;
		}
		case "mejiStart": {
			writeSpeech("succubus", "demon.jpg", "There's a boy I tailed out of the school. I think his name was mejiF. At first he seemed like the pretty run of the mill delinquent type, but it turns out he's got another side.");
			writeSpeech("player", "", "Oh? Do tell.");
			writeSpeech("succubus", "demon.jpg", "Hehe, just follow him into town after your school thing ends and you'll see for yourself. He should be a pretty quick fuck when you hold his secret over his head.");
			addFlag('succubus', 'mejiS');
			writeFunction("writeEncounter('caseSelect')", "Back");
			if (checkTrust('meji') > 50) {
				writeEncounter('mejiEarly');
			}
			break;
		}
		case "mejiEnd": {
			writeSpeech("succubus", "demon.jpg", "You looked into that wannabe delinquent yet?");
			writeSpeech("player", "", "Yeah, mejiF. Loyal as he is broken in.");
			writeSpeech("succubus", "demon.jpg", "Hehe, I never had any doubts. Mmm, just remembering what he looked like has me feeling hungry. <br>C'mon, I wanna play with my food tonight.");
			addFlag('succubus', 'mejiF');
			writeFunction("writeEncounter('reward')", "Get started");
			break;
		}
		case "mejiEarly": {
			writeSpeech("succubus", "demon.jpg", "There's a boy I tailed out of the school. I think his name was mejiF.");
			writeSpeech("player", "", "Yeah, I already know him.");
			writeSpeech("succubus", "demon.jpg", "Ah, but did you know that after school he likes to-");
			writeSpeech("player", "", "Crossdress, yep.");
			writeSpeech("succubus", "demon.jpg", "Haaah... You're really not letting me take the easy way out, are you? Well, it looks like I'll actually have to search carefully for some new targets, not just pick the most in-denial buttsluts in town. ");
			writeSpeech("player", "", "Useless demons don't get rewards. ");
			writeSpeech("succubus", "demon.jpg", "Well, I guess I'll need to work for my living then. Speaking of which...");
			addFlag('succubus', 'mejiF');
			writeFunction("writeEncounter('reward')", "Get started");
			break;
		}
		case "chatSelect": {
			writeSpeech("succubus", "demon.jpg", "We could also just chat, if you wanted. I get that I'm a pretty unique sort of houseguest, after all.");
			writeSpeech("player", "", "Sure, why not. Just keep it interesting, alright? I'm not interested in a long-winded explanation of demon foot massage techniques. ");
			writeSpeech("succubus", "demon.jpg", "Hehe, no problem. I'm well versed in many types of <i>entertainment</i> if you stick my wicket. I'll keep whatever you want to talk about brief. ");
			writeFunction("writeEncounter('chatStory')", "Your story");
			writeFunction("writeEncounter('chatClothes')", "Your clothes");
			writeFunction("writeEncounter('chatDemons')", "Other kinds of demons");
			writeFunction("writeEncounter('chatTransformation')", "Demonization process");
			writeFunction("writeEncounter('chatCorruption')", "How to corrupt souls");
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "chatStory": {
			writeSpeech("succubus", "demon.jpg", "There's not much to say about me, just barely making quotas for... I don't know how long it's been. The days feel so long but the years seem to just fly by. <br>I don't have that interesting of an origin either. A demon thought I was cute enough to make a good harvester, and I was about to die, sooo yeah. ");
			writeFunction("writeEncounter('chatSelect')", "Back");
			break;
		}
		case "chatClothes": {
			writeSpeech("succubus", "demon.jpg", "Hehe, you like em? I collect a lot of pretty clothes. Ah, it's just for seduction purposes of course. If I could I'd lounge in pajamas all day.<br>Hmm... Here, lemme see your phone.");
			writeText("You hand succubusF your phone.");
			writeText("After a moment he hands it back to you and busts out his own.");
			writeText("Bzzt! You got a text from succubusF!");
			for (succIndex = 0; succIndex < data.story.length; succIndex++) {
				if (data.story[succIndex].index == "succubus") {
					data.story[succIndex].textEvent = 'clothes';
				}
			}
			document.getElementById('phoneButton').innerHTML = "PHONE(*)";
			document.getElementById('phoneButtonMobile').innerHTML = "PHONE(*)";
			writeSpeech("succubus", "demon.jpg", "I don't let a lot of pictures get taken of me, but I'll be sure to bring some pieces of my collection over some time~");
			writeFunction("writeEncounter('chatSelect')", "Back");
			break;
		}
		case "chatDemons": {
			writeSpeech("succubus", "demon.jpg", "Hmm. There's my rank, succubus (male). We seduce humans, same as incubi except succubi are expected to be the catchers while the incubi get to pitch. There's plenty of regional demons too. I think in some countries the succubi have fox tails. <br>Once you get to the higher ranks you get demons that no longer need to draw energy from humans, they just bully other demons. Basically they don't need to look humanoid anymore, so they're monsters. Although some still hang on to a sense of style and want to look beautiful or handsome.");
			writeFunction("writeEncounter('chatSelect')", "Back");
			break;
		}
		case "chatTransformation": {
			writeSpeech("succubus", "demon.jpg", "For all the benefits like eternal youth, inhuman beauty, wings, and so on, there are some downsides. You'll get attacked by humans who feel like you're 'not right', and you start at the lowest rank so you end up looking like a sassy boi, or a teenage girl unless you can climb the ranks.<br>Transformation does feel really good though, you cum out all that excess size and masculinity, and your body's new sensitivity is finely tuned over the next few days. Some of the better-off ones get multi-day spa treatments to help them acclimate, but I was just thrown in a tentacle pit for a week.");
			writeSpeech("player", "", "Do you regret becoming a demon?");
			writeSpeech("succubus", "demon.jpg", "... <br>I'm alive today because I'm a demon, and I'm immortal too. I'll find something that'll make all these years worth it, and I'll have an eternity to enjoy it.");
			writeFunction("writeEncounter('chatSelect')", "Back");
			break;
		}
		case "chatCorruption": {
			if (checkFlag('succubus', 'corruption') != true) {
				writeSpeech("succubus", "demon.jpg", "Oh ho? You wanna learn how to corrupt souls? Well, it's one of the first, non-sexual things I was taught.<br>It'll take me awhile, but I can teach you. I need to warn you though...");
				writeText("succubusF leans in close.");
				writeSpeech("succubus", "demon.jpg", "You're turning people who trust you, people you have control over, into semen demons. You'll have fun transforming them for sure, but after that they'll go off to harvest energy from others. You really okay with that?");
				writeFunction("writeEncounter('chatAgree')", "Yes");
				writeFunction("writeEncounter('chatSelect')", "No");
			}
			else {
				writeSpeech("succubus", "demon.jpg", "Uh, master, did you forget that I already gave you the ability?");
				writeFunction("writeEncounter('chatSelect')", "Back");
			}
			break;
		}
		case "chatAgree": {
			addFlag('succubus', 'corruption');
			writeSpeech("succubus", "demon.jpg", "Well, the more the merrier! C'mere.");
			writeText("succubusF pulls you close, his lips inches from yours.");
			writeSpeech("player", "", "Ah, fuck!");
			writeText("You pull back at a burning sensation on the back of your right hand, there's a dark mark there that quickly fades away.");
			writeSpeech("succubus", "demon.jpg", "Sorry, probably should've warned you, but you look like you aren't super good at dealing with pain.<br>Anyways it's super easy. Just focus on where the mark was and it'll come back, allowing you to corrupt people.<br>They need to be deep, and I mean balls-deep in love with you though. Only the most broken bois may apply.");
			writeSpeech("player", "", "Neat, thanks.");
			writeSpeech("succubus", "demon.jpg", "... You really are an oddball, master.");
			writeFunction("writeEncounter('chatSelect')", "Back");
			break;
		}
		case "reward": {
			switch (checkTrust('succubus')) {
				case 61:
					writeEvent('succubus2');
				break;
				case 66:
					writeEvent('succubus3');
				break;
			}
			raiseTrust('succubus', 5);
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "succubusDisguise1", name: "Streetwalking"},
	{index: "succubusDisguise2", name: "Maid Whoring 1"},
	{index: "succubusDisguise3", name: "Maid Whoring 2"},
	{index: "succubus1", name: "The Proposal"},
	{index: "succubus2", name: "Succubus Milk"},
	{index: "succubus3", name: "Succubus Game"},
	{index: "succubus4", name: "Making Breakfast"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "succubusDisguise1": {
			writeSpeech("player", "", "Not very good at setting the mood, are you?");
			writeSpeech("succubus", "", "Ugh, a talker.");
			writeText("He leans forwards and touches your hand. His skin is <i>soooof-</i>");
			writeText("You stumble, that was weird. The pink fuzz came back for a second. Now, with seemingly no warning, you've got a massive erection.");
			writeSpeech("succubus", "", "Damn, what the hell is going on? ");
			writeSpeech("player", "", "Alright, I'm getting some mixed signals here, this is getting fishy. What's-");
			writeText("Suddenly, he stands up and pulls you into a kiss, and the pink fuzz fills your brain again much more intensely this time.");
			writeText("Once he backs off you take a moment to focus and the fuzz fades. While you're fighting off whatever's going on, he pulls off his top and skirt, and relaxes on the bed.");
			if (data.player.gender == "Man") {
				writeSpeech("succubus", "", "I'm seriously off my game today. Can't believe this old man is resisting.");
			}
			else {
				writeSpeech("succubus", "", "I'm seriously off my game today. Can't believe this old hag is resisting.");
			}
			writeSpeech("player", "", "Excuse me?");
			writeSpeech("succubus", "", "God fucking Jes- what the hell!?");
			writeText("He falls forwards in surprise.");
			writeSpeech("player", "", "You know I can hear you right? Are you trying to drug me?");
			writeSpeech("succubus", "", "Uh... Fuck, uh, yeah! Yeah I was drugging you. Guess it didn't work, wow! You've got a really strong uh... Fuck, what's that thing you have?");
			writeSpeech("player", "", "What?");
			writeSpeech("succubus", "", "Stomach! Yeah, stomach! Wow, bet you really want to take your frustrations out on me now, haha!");
			writeSpeech("player", "", "Fuck, this was fishy after all.");
			writeText("You start to leave, this is almost definitely a trap. As you get moving, finally makes eye contact with you, shooting you his best bedroom eyes. If he seriously thinks that's going to be en-");
			writeBig("images/succubus/profileP.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Aww, come on. Don't you want some of this? You know you <span style='color: #fc53f1'>can't resist</span>.");
			writeText("Something's wrong. Something's wrong. You need to keep repeating that to yourself because your body isn't listening. There's something in the air, it's relaxing and energizing you at the same time.");
			writeText("You half walk, half stumble over to the bed.");
			writeSpeech("player", "", "Can't... What's going-");
			writeSpeech("succubus", "eyes.jpg", "<span style='color: #fc53f1'>Shhhh.</span>");
			writeBig("images/succubus/1-1.jpg", "Art by Gujira");
			writeSpeech("succubus", "eyes.jpg", "I'm <span style='color: #fc53f1'>really</span> sorry about how I've been acting. A real <span style='color: #fc53f1'>playerMan</span> like you deserves better, right?");
			writeText("You feel like the wind got knocked flat out of you as his tongue runs across you nipple.");
			writeBig("images/succubus/1-2.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Just close your eyes, I'll make you feel a lot better, okay? Don't worry about money, time, or even your life. Just sit tight and let me blow your mind.");
			writeBig("images/succubus/1-3.jpg", "Art by Gujira");
			writeText("He's got to have some kind off drugged lipstick or something, because the moment he wraps his lips around your nipple you feel like a live wire current is ripping through you.");
			writeBig("images/succubus/1-4.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Aaaah~<br>You're really incredible playerMister.<br>And you're still hard too! I've changed my mind, I don't need anyone else, you're my new sex slave, okay?");
			writeSpeech("player", "", "Ghh...");
			writeSpeech("succubus", "", "And you're still resisting! I really stumbled onto a diamond, didn't I? Are you even human?<br>Ah, I'm really pent up, so this is risky... Fuck it, I'll take that gamble!");
			writeBig("images/succubus/1-5.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Come on, I can't wait any longer!");
			writeSpeech("player", "", "<i>Gotta fight... Can't let this little bitch... Beat me...</i>");
			writeSpeech("succubus", "eyes.jpg", "<span style='color: #fc53f1'>Fuck me!</span>");
			writeBig("images/succubus/1-6.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Ah, yes! God, I needed this!");
			writeSpeech("player", "", "<i>So... Good...</i>");
			writeSpeech("succubus", "", "Nghh, this is amazing~!<br>Fuck, ah! I can't keep going though, sorry! I'm going to need... Nfff... Need you to hurry up and...");
			writeSpeech("succubus", "eyes.jpg", "<b><span style='color: #fc53f1'>Cum!</span><b>");
			writeBig("images/succubus/1-7.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Yeessshh... That'sh the shtuff...");
			writeText("You feel the pink fuzz creeping into the corners of your mind again, as suddenly another sweeping wave of pleasure overtakes you.");
			writeSpeech("succubus", "", "More, give it all to me...");
			writeText("You cum again, even more powerfully than the last time, even though you've stopped thrusting.");
			writeText("He giggles gleefully as you start to feel woozy.");
			writeSpeech("player", "", "<i>Fuck... I'm starting to fade out... God damnit, this is not how I go!</i>");
			writeText("You fight through the haze and start thrusting again, fully intending to power through whatever's going on.");
			writeSpeech("succubus", "", "W-what? No, shtop, I-<br>Noooo~!");
			writeText("His ass suddenly tightens as his dicklette finally starts leaking small droplets of cum.");
			writeSpeech("succubus", "", "Nonono, please~! I can't... Aaaa~!");
			writeBig("images/succubus/1-8.jpg", "Art by Gujira");
			writeText("His eyes roll back in his head and his body starts shaking, suddenly his piddly droplets of cum turn into a constant leaking stream.");
			writeText("His grimace turns into a drunken smile and his tonge lolls out of his mouth as he defiles the sheets with his jizz.");
			writeBig("images/succubus/1-9.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Cumming~! I'm washting it all... But if feelsh sho gewd~!");
			writeText("Dimly, you're aware that your second orgasm never actually finished, you've been cumming non stop and your vision is starting to fade.");
			writeText("You collapse on top of him as he drunkenly giggles about how good he feels.");
			writeText("...");
			writeText("You surge awake, feeling awfully sore. After a quick check, you confirm you still have both kidneys, and it looks like he took the bedsheets with him.");
			writeSpeech("player", "", "What happened... What was I thinking? Did he have some kind of aphrodisiac perfume on him?");
			writeText("After a moment you feel back to normal, better than before in fact! It has gotten really late though.");
			break;
		}
		case "succubusDisguise2": {
			break;
		}
		case "succubusDisguise3": {
			break;
		}
		case "succubus1": {
			writeSpeech("player", "", "Let's get to it then.");
			writeSpeech("succubus", "demon.jpg", "That's the spirit! C'mon, dick out!");
			writeText("He cheers you on as you begin to disrobe.");
			writeSpeech("player", "", "You're a lot more enthusiastic than last time.");
			writeSpeech("succubus", "demon.jpg", "Well, let's just say most people take my street offer tend to be... Lowest common denominator types. Of course I'd be excited when I'm about to get some top-quality product waved in front of my face.<br>Ooh, speak of the devil...");
			writeBig("images/succubus/2-1.jpg", "Art by Gujira");
			writeSpeech("succubus", "demon.jpg", "Eheh... You sure you're all human?");
			writeSpeech("player", "", "You sure you aren't stalling? Is it too big for you?");
			writeSpeech("succubus", "demon.jpg", "Cocky bitch! <br>Alright, just try to stay conscious, alright?");
			writeBig("images/succubus/2-2.jpg", "Art by Gujira");
			writeSpeech("player", "", "Ggh~!");
			writeSpeech("succubus", "demon.jpg", "Mmm... *Mwah*!<br>My saliva is pretty strong, so we'll need to start slow for you to get used to it.");
			writeText("succubusF playfully kisses the tip before taking it into his mouth, soaking your cockhead in a potent aphrodisiac.");
			if (data.player.gender == "Male") {
				writeSpeech("succubus", "demon.jpg", "Mmm... Hurr hoing hreat! (You're doing great!)<br><i>Mmm, this really was worth it... I wanna tease him but...<br>Mmm! I can't hold back any longer!</i>");
			}
			else {
			writeSpeech("succubus", "demon.jpg", "Mmm... Hurr hoing hreat! (You're doing great!)<br><i>Mmm, this really was worth it... I wanna tease her but...<br>Mmm! I can't hold back any longer!</i>");
			}
			writeSpeech("player", "", "Cumming!");
			writeBig("images/succubus/2-3.jpg", "Art by Gujira");
			writeText("You sigh in relief as your needy cock finally pumps out it's pent up contents. You should be exhausted after your last marathon session, but your feeling of relief only feels more powerful.");
			writeBig("images/succubus/2-4.jpg", "Art by Gujira");
			writeSpeech("succubus", "demon.jpg", "Hah... Hah...");
			writeText("succubusF looks almost drunk as he catches your cum on his tongue.");
			writeSpeech("succubus", "demon.jpg", "How w... Was that?");
			writeSpeech("player", "", "It felt amazing. How many more loads do you need?");
			writeSpeech("succubus", "demon.jpg", "Y-you can go again?");
			writeSpeech("player", "", "Hell yeah I can. Hey, let's try going deeper this time...");
			writeText("...");
			writeText("The two of you go another few rounds, but surprisingly it's succubusF who stops you.");
			writeSpeech("succubus", "demon.jpg", "A-alright, we need to stop here!");
			writeSpeech("player", "", "Why? Oh, you mean move on? Yeah, you sucking just the tip is getting kinda boring.");
			writeSpeech("succubus", "demon.jpg", "Boring!? Why you...<br>No, this was to let you acclimate to my, uh, fluids. if we keep going your system might get overloaded. <br>So, does this mean you accept? Will you take me on as your familiar?");
			writeSpeech("player", "", "Sure. We can-");
			writeText("You try to stand, only for your legs to completely disobey you.");
			writeSpeech("succubus", "demon.jpg", "H-hey!<br>Ghh, heavy bastard... We should've stopped after the first round.");
			writeSpeech("player", "", "Uhuh... Why's the room spinning...?");
			writeSpeech("succubus", "demon.jpg", "Ugh, get some sleep. I'll come by tomorrow night, alright?");
			writeText("With some effort succubusF hauls you over to your bed and lays you down.");
			writeSpeech("succubus", "demon.jpg", "You did good tonight...<br>Good night, my new master.");
			break;
		}
		case "succubus2": {
			writeSpeech("player", "", "So, same kind of play as before?");
			writeSpeech("succubus", "demon.jpg", "Hehe, not quite. Last time we went for as ling as your body could take, this time I wanna see how long your mind can last.<br>Here, drink this.");
			writeText("He hands you a vial of a cloudy white fluid.");
			writeSpeech("player", "", "This sounds kinda fishy.");
			writeSpeech("succubus", "demon.jpg", "Relax, it's completely safe. You and I have a lot we can do for each other, I'm not wasting that on a quickie.");
			writeText("As he speaks, he gets out some strips of cloth and starts tying your legs to your chair.");
			writeSpeech("succubus", "demon.jpg", "This is just so you don't tackle me, I'm really pent up right now and I can't risk wasting it on your bedsheets.");
			writeSpeech("player", "", "Wasting... Cum?");
			writeSpeech("succubus", "demon.jpg", "Yep! That's where we keep stored essence. Wasting it... Wasting it is embarrassing... You gonna drink that or what?");
			writeSpeech("player", "", "Ehhh...");
			writeSpeech("succubus", "demon.jpg", "Relax. It's succubus milk. It'll make sure your body can take what I'm about to dish out. By the time we're done tonight, you're gonna be totally acclimated to me, and you'll be an even better fuck for it.");
			writeSpeech("player", "", "Well... Alright, I guess.");
			writeText("You down the fluid, its taste is hard to describe. It's close to the feeling of jerking off on your sleeping mother's hair, but also sweet and salty at the same time.");
			writeText("After you drink it a warm fuzz permeates your body as succubusF ties your wrists to the arms of your chair.");
			writeSpeech("player", "", "It feels... Weird... What exactly is it? ");
			writeSpeech("succubus", "demon.jpg", "We give it to new breeding cows to prep them for milking. It'll help you generate enough sperm to, well, you'll see.");
			writeText("succubusF kneels down with a catlike grin on his face, before he starts fishing your dick out. It looks a little bigger than before, actually. ");
			writeSpeech("succubus", "demon.jpg", "Ah~ There's my big friend~! Sorry we had to cut things short last time, you deserve a better chance to show your spunk.");
			writeText("Your vision is starting to blur, the milk must be kicking in. You feel... <i>hungry. </i>");
			writeText("...");
			writeBig("images/succubus/3-1.jpg", "Art by Gujira");
			writeText("You don't know how long it's been now, hours? Honestly, you feel like days have gone by. At first succubusF was teasingly suckling on the head of your shaft but...");
			writeBig("images/succubus/3-2.jpg", "Art by Gujira");
			writeSpeech("succubus", "demon.jpg", "Mmph... Mmm~");
			writeText("After the first three loads he lost all sense of self control. He became completely ravenous.");
			writeText("Sometime after the seventh round you blacked out, and when you came back to succubusF was still sucking, but covered in a <b>lot</b> more cum than before.");
			writeBig("images/succubus/3-3.jpg", "Art by Gujira");
			writeSpeech("succubus", "demon.jpg", "Mmm~!");
			writeText("succubusF moans appreciatively as you spurt again. His eyes are glazed over with a familiar fog, at this point he's absolutely cum-drunk. ");
			writeText("You'd think that at some point you'd go numb to the pleasure, or that you'd start shooting dry shots at some point, but you'd be wrong on both counts. Electric energy courses through you as your cock spurts just as thick a load as its first. ");
			writeText("But as he slurps down this last load, a look of panic flashes in his eyes and he backs off and clutches his crotch.");
			writeSpeech("succubus", "demon.jpg", "Ah~... Ah~... That was close. <br>Aaah~ it's too much~! Don't leak, don't leak, don't leak....");
			writeText("Desperately, he tries to hold himself back from spurting all his hard-earned essence, and after a moment he manages to calm himself down.");
			writeText("Without the constant stimulation you're finally getting soft, and exhaustion hits you like a tidal wave.");
			writeSpeech("succubus", "demon.jpg", "Gonna... Gonna need to fly back...");
			writeText("There's a plump bulge near the base of his abdomen. Succubi must store their essence in their prostate, probably.");
			writeSpeech("succubus", "demon.jpg", "Hey... Hey you still conscious? ");
			writeText("You barely manage a halfhearted grunt, and he unties you.");
			writeSpeech("succubus", "demon.jpg", "Ah~<br>You smell so... No! Gotta focus...");
			writeText("Your scent nearly pushing him over the edge again, he's quick to unceremoniously flop you onto your bed then stumble his way to your window.");
			writeText("You faintly hear him mumbling 'don't leak' over and over again as he flies off, and you can't keep your eyes open any longer. ");
			break;
		}
		case "succubus3": {
			writeText("You move to take a seat again. This time you intend to stay conscious until the end, ready to outlast succubusF once more.");
			writeSpeech("succubus", "demon.jpg", "Ah ah! We'll be doing something different tonight.");
			writeText("He chides you and pulls you away.");
			writeSpeech("succubus", "demon.jpg", "I'm not pent up today, stud, so I thought we'd some fun tonight. Even if I cum, I won't be wasting too much. <br>We're gonna play the splurt game!");
			writeText("He starts peeling off his dark clothes, and you follow his lead.");
			writeSpeech("succubus", "demon.jpg", "It's a game played among friends down below. The rules are simple! Hard, anal sex and the first to splurt loses!");
			writeSpeech("player", "", "That just sounds like sex while keeping score.");
			writeSpeech("succubus", "demon.jpg", "Hehe. Don't feel too bad if you lose. We succubi are trained to hold it together for months at a time even with constant stimulation.<br>And you, poor human, you're going up against me.");
			writeText("He gets up close to rub his chest against your abs, he's pretty smug for someone barely more than half your height.");
			if (data.player.gender == "Man") {
				writeSpeech("succubus", "demon.jpg", "Every bit of me is made for turning men like you into quickshot sluts. Every. Single. Bit.");
			}
			else {
				writeSpeech("succubus", "demon.jpg", "Every bit of me is made for turning women like you into quickshot sluts. Every. Single. Bit.");
			}
			writeText("He gently pushes you down to the floor, and playfully slaps your hands away.");
			writeSpeech("succubus", "demon.jpg", "Ah ah~<br>Catcher controls the speed, that's one of the rules~");
			writeSpeech("player", "", "Cmon brat, quit with the cheekiness and put your money where your mouth is.");
			writeSpeech("succubus", "demon.jpg", "Mmm~! I'll enjoy breaking you, let's see how long you can keep that serious face up.");
			writeText("He straddles you cowgirl style, teasingly hotdogging your shaft between his asscheecks, slowing down whenever your cockhead bumps against his puckered rim. ");
			writeText("His tail wraps around your shaft and aligns it with his boihole.");
			writeBig("images/succubus/4-1.jpg", "Art by Gujira");
			writeSpeech("succubus", "demon.jpg", "Wanna give up now? I'm not going to stop, but the sooner you give in, the better it'll feel, I promise.");
			writeSpeech("player", "", "Fuck you.");
			writeSpeech("succubus", "demon.jpg", "Gladly, master!");
			writeBig("images/succubus/4-2.jpg", "Art by Gujira");
			writeSpeech("succubus", "demon.jpg", "Ah~! You're so big~!");
			writeSpeech("player", "", "Ghh...");
			writeText("Despite how badly you'd love to take him down a peg, his boasts weren't empty. The texture and grip of his ass, and his incredibly skillful muscle control have already decided the match.");
			writeText("Despite the fact you can feel your cockhead bump against his demon prostate with every drawn out thrust, he still looks like he's totally in control.");
			writeSpeech("succubus", "demon.jpg", "Ah~! Ah~! I'll have to be ready to fly tomorrow, because I won't be walking!");
			writeSpeech("player", "", "Gh... Shut up, tramp!");
			writeSpeech("succubus", "demon.jpg", "Oh, I'm worse than that, master! I'm a slut, a little bitch boi, I'm <b>yours!</b>");
			writeText("You can't hold back anymore as he goes balls deep and gyrates his hips in a circle to thoroughly milk your dick. ");
			writeSpeech("player", "", "C... Cumming~!");
			writeSpeech("succubus", "demon.jpg", "Yes~! Cmon, let's see that face of yours tw-");
			writeBig("images/succubus/4-3.jpg", "Art by Gujira");
			writeSpeech("succubus", "demon.jpg", "Gggh~");
			writeText("You came first, but the moment you start cumming inside of him sparks of purple lightning flash around him.");
			writeSpeech("succubus", "demon.jpg", "C-cum~");
			writeText("His bratty smugness is gone. He's won the game but certainly lost the battle.");
			writeSpeech("succubus", "demon.jpg", "C-cum~!");
			writeText("Now he just looks like an animal, bouncing on your shaft trying to scratch that original primal itch.");
			writeText("His body must be having an effect on you, because there's absolutely no cooldown period for you right now. This little bitch hasn't slowed down for a second but you don't care.");
			writeSpeech("succubus", "demon.jpg", "Gah~! It feels hot~! Feels so good~!");
			writeText("Dewdrops have begun to form on the tip of his cock.");
			writeSpeech("succubus", "demon.jpg", "Ah~! No, I can't~<br>Leak~!");
			writeText("His attitude-laden comments have been breathy, barely coherent gasps and moans. His very nature has taught him to feel shame at cumming, that he's wasting his hard work, but with you here none of that matters.");
			writeText("Finally, he lets go, and lets the body-quaking anal orgasm overtake him.");
			writeBig("images/succubus/4-4.jpg", "Art by Gujira");
			writeSpeech("succubus", "demon.jpg", "Cumming~!");
			writeText("His dicklette gives an excited jump before a solid white stream begins leaking out, the stream surging in strength with every bounce he does on your hips.");
			writeSpeech("succubus", "demon.jpg", "Cumming, cumming, cumming cumming cumming~!");
			writeText("As he pounds the essence right out of himself, you feel yourself pushed over the edge once again.");
			writeSpeech("succubus", "demon.jpg", "Sho good~! I'm wasting all of it again, all because of master's cock~!");
			writeText("Finally able to take no more, his legs give out and he's left sitting on you balls deep on your cock.");
			writeSpeech("succubus", "demon.jpg", "Hehe... Hehehe...");
			writeBig("images/succubus/4-5.jpg", "Art by Gujira");
			writeSpeech("player", "", "How's it feel? You feel like a winner?");
			writeSpeech("succubus", "demon.jpg", "Yesh... Win win win... I shplurted...~");
			writeText("...");
			writeText("After getting him off in more ways then one, you get cleaned up. Sheepishly, succubusF wipes the cum off his and your bodies.");
			writeSpeech("player", "", "Don't worry, there's plenty more where that came from.");
			writeSpeech("succubus", "demon.jpg", "Y-yeah, It's just that... I might get addicted to this. Succubi who get addicted to cumming... They'll usually give anything just to splurt it out and waste all their essence. It's a pretty common fetish to fail your quotas by pounding yourself on a dildo the day before the essence is due.");
			writeText("After he's finished you start getting ready for bed. And he gets ready to fly off. ");
			writeSpeech("succubus", "demon.jpg", "See you around master, and thanks. I don't have anyone to play with, so that was my first time with the game.");
			writeSpeech("player", "", "Anytime, succubusF.");
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
	{index: "succubusReward", trust: 71,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "succubusReward": {
			writePhoneImage("images/succubus/reward.jpg", "Art by Gujira");
			writePhoneSpeech("succubus", "", "You've finished all of succubusF's content for this version, more is on the way!");
			break;
		}
		case "clothes": {
			writePhoneImage('images/succubus/text.jpg', 'Art by Gujira');
			writePhoneSpeech('succubus', '', 'Enjoy!');
			clearText('succubus');
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
				if (encounterArray[i].altImage == undefined) {
					encounterArray[i].altImage == "";
				}
				if (encounterArray[i].altName == undefined) {
					encounterArray[i].altName == "";
				}
				if (encounterArray[i].location.includes(data.player.location)) { //check the location
					if (encounterArray[i].time.includes(data.player.time)) { //check the time
						if (encounterArray[i].trustMin <= checkTrust(character.index) && encounterArray[i].trustMax >= checkTrust(character.index)) { //check the trust requirements
							if (encounterArray[i].day == "even" && data.player.day%2 == 0) {
								if (encounterArray[i].itemReq != "" && checkItem(encounterArray[i].reqItem) != true) {
									console.log('event available, but you lack the appropriate item');
								}
								else {
									if (encounterArray[i].type == "tab") { //check the type of the encounter (tab / button)
										printEncounterTab(character.index, encounterArray[i].index, encounterArray[i].name, encounterArray[i].altImage, encounterArray[i].altName);
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
										printEncounterTab(character.index, encounterArray[i].index, encounterArray[i].name, encounterArray[i].altImage, encounterArray[i].altName);
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
										printEncounterTab(character.index, encounterArray[i].index, encounterArray[i].name, encounterArray[i].altImage, encounterArray[i].altName);
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