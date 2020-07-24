var character = {index: "mama", fName: "Sofia", lName: "Rossi", trust: 0, encountered: false, textEvent: "", met: false, color: "#A2DAF1", author: "NoodleJacuzzi", artist: "Enoshima Iki", textHistory: "", unreadText: false,};

var logbook = {
	index: "mama", 
	desc: "A member of the Parent Teacher Student Association council, and one who religiously attends every meeting despite how her son who doesn't actually attend the university yet. It might seem like her son is her only weakness, but she's quite sexually frustrated as well.",
	body: "She has the kind of body that turns the heads of men and women alike, the kind divinely-gifted to bear children. In ancient times people would worship fertility symbols that were maybe half as curvy as she is.",
	clothes: "She has a variety of personal outfits, ranging from a blue sundress to a sleeveless wool turtleneck. Her collection of fetish-wear and lingerie actually rivals the size of the rest of her wardrobe.",
	home: "She lives in a nice house on Vintage Street, the most well-off district in town. Half of her home is kept mostly empty for when her son moves in.",
	tags: "Ara ara~, mother & son play, milf, Ara ara~, netorare/mother-stealing/son cucking, impregnation, Ara ara~",
	artist: "Artist: Enoshima Iki",
	author: "Author: NoodleJacuzzi",
};

var newItems = [
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "intro", name: "Someone walking by catches your eye", requirements: "?trust mama 0; ?location streets; ?flag principal council;", altName: "", altImage: "",},
	{index: "failure", name: "mama's house is here", requirements: "?trust mama 1; ?location vintageStreet; !flag mama disguise;", altName: "", altImage: "",},
	{index: "mamaChoice", name: "mama's house is here", requirements: "?trust mama 2; ?location vintageStreet;", altName: "", altImage: "",},
	{index: "mamaSonRepeat", name: "mama's house is here", requirements: "?trust mama 100; ?location vintageStreet;", altName: "", altImage: "",},
	{index: "mamaBbcRepeat", name: "mama's house is here", requirements: "?trustMin mama 20; ?trustMax mama 99; ?location vintageStreet;", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	var originalProfile = data.player.character;
	if (data.player.noDisguise != true) {
		if (name.includes("Son") == true) {
			data.player.character = "son";
		}
		if (name.includes("Bbc") == true) {
			data.player.character = "bbc";
		}
	}
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "cancel": {
			unencounter('mama');
			changeLocation(data.player.location);
			break;
		}
		case "intro": {
			writeHTML(`
				t As you're walking down the street a woman wearing a pair of expensive-looking necklaces catches your eye.
				im images/mama/108.jpg
				t Well, there are other features about her too. But it'd be impolite to stare. You do notice that she's noticed something about you as well.
				sp mama; Oh, I think I recognize you.
				sp player; Have you been around the local university lately? I'm a counselor there.
				sp mama; Ah, that's the school my son will be attending~!<br>*ahem* Right, I was sent the itinerary for the next PTSA meeting, I think you came up.
				sp player; You're attending the meetings before your son starts attending the school?
				t There's something odd about her, but more importantly if she'll be attending the meeting it's important to have her in your pocket. You can't exactly pass the "I want to enslave every woman in the school to serve as my sex slave" order with just a majority vote.
				sp player; Well, in any case would you like to talk for a moment? I was hoping to discuss some things with you, about the PTSA and maybe even about your son when he starts attending.
				im images/mama/110.jpg
				t She gives you a once over.
				sp mama; ... No thank you, I'm quite alright. I'm sure I'll be seeing enough of you at the meeting.<br>Plus, my son certainly won't be needing any... What did you say you did? Counseling? None of that, so I don't think we'll be seeing very much of each other.
				sp player; I... Wh-
				t With that she starts walking away, not even interested in pretending you're worth the time. She probably lives in a well-off neighborhood given how fancy her clothes, jewelry, and purse were, and she'd need to be close, so Vintage Street is most likely where you can find her.
				t But if she's well off you can't exactly barge in through the front door, and her curtness tells you she might not have a wide social circle you can take advantage of. You'll need some serious help to get close enough to hypnotize her. Maybe you should start with some of the other PTSA members?
			`);
			setTrust('mama', 1);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "failure": {
			writeHTML(`
				t Seeing a flash of a familiar hairdo through a window, this is almost certainly her house.
				t Given how she treated you the last time you saw her though, you're not likely to get in. You can't exactly barge in through the front door, and her curtness tells you she might not have a wide social circle you can take advantage of. You'll need some serious help to get close enough to hypnotize her. Maybe you should start with some of the other PTSA members?
			`);
			unencounter('mama');
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "mamaChoice": {
			writeHTML(`
				t Seeing a flash of a familiar hairdo through a window, this is almost certainly her house. Thankfully you've gotten help now, all that's left is to plan your attack.
				t You could pretend to be her son, it shouldn't be too hard to find an opportunity to hypnotize her if everything goes smoothly. You have no idea what her relationship is like with him though.
				t You could also go the direct and much darker route by prying into what really makes her tick. She wasn't into you at all the last time you saw her though, it might be  too extreme for you, and there isn't really a way to back out once you approach her.
				t This is probably a decision you should think carefully about.
				`);
				writeFunction("writeEncounter('mamaSonStart')", "Disguise yourself as her son");
				writeFunction("writeEncounter('mamaBbcStart')", "Disguise yourself another way");
				writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "mamaSonStart": {
			writeHTML(`
				t You take a deep breath and start applying what you gained from your helper. By the time you exhale, you're a new person now.
				t You walk up to the door and give it a knock. You feel a lot shorter than you did this morning.
				t After a moment the door opens in a flash, a shocked-looking mamaF staring at you.
				sp mama; K-kenji!? What are you doing here? You're supposed to be-
				sp player; Ah, sorry mom, I thought I'd surprise you.
				sp mama; But how did you even get here? To have flown overseas... I know you think it's funny to not respond to my texts, but this is just-
				sp player; You don't want me here?
				t You've seen a lot in your time as a hypnotist, but you've never seen a heart melt quite like the one right in front of you.
				sp mama; I... I didn't...<br> Oh kenji, I'm so sorry! Come here, mama loves you!
				im images/mama/004.jpg
				t She wraps her arms around you for a kiss, but it's hard to reciprocate. Her calling you by another name is... Weird. You'll need to fix that.
				sp mama; Aww, cmon, didn't you miss mama? Pleeeease? I can do that "Ara ara~" thing from that cartoon you really like!<br>... Oh, food!
				t Completely airheaded, she runs back inside at the sound of a pot boiling over. You close and lock the door behind you.
				t You take a seat and fish out your pendant, and get ready for what you have planned. What exactly will you do?
				`);
				writeFunction("writeEncounter('mamaSonLewd')", "Get lewd");
				writeFunction("writeEncounter('mamaSonNoLewd')", "Get her support and get out");
			break;
		}
		case "mamaSonLewd": {
			writeHTML(`
				t A bowl is set in front of you as you decide on your plan. It's a nice looking pasta meal.
				im images/mama/104.jpg
				sp mama; Ta-da~! I've been working really hard since you'll be needing me to cook for you again when you're in school! You must be starving after your flight, dig in!
				sp player; Where's yours?
				im images/mama/106.jpg
				sp mama; Oh, well I only made one serving. Don't worry though, I'll get some snacks later. Go ahead, mama's heart will break if she hears your tummy rumbling!
				sp player; I'm not really hungry, there's something I wanna show you ac-
				t You're stopped in your tracks by the saddest pair of puppy-dog eyes you've ever seen.
				sp player; ... Fine, but I can't finish it myself. Grab a fork and help me out.
				t She gasps, although you aren't sure where you went wrong. Does her son not share food? Does he not... Eat? For a brief second you panic.
				sp mama; Kenji... I can't believe it, you're doing something thoughtful for someone else... I'm so proud! Okay, give me just a second!
				... 
				t You manage to finish the food, she nibbles occasionally but mostly just spends the time staring dreamily at you. Once you're done you pull out your pendant.
				sp player; So, this is a neat trick a friend taught me while-
				sp mama; You learned something? Just like that? And you got a friend?!<br>Oh, do you mean your cartoons again? That's okay too...
				sp player; Just watch the pendant, okay? Watch it very closely.
				...
				t She goes under in minutes, already completely relaxed and trusting in you completely. A few simple commands make the foundation. Now she'll refer to you properly, you've replaced her son's number with yours, and...
				sp mama; When my son, playerF, wants me to support him at the meeting, I'll agree with whatever he says...
				t She repeats vacantly as the commands are etched into her head. The only thing strong enough to break her out now would be if she realized you weren't her son. Now it's up to you what you want to do with her.
			`);
			setTrust('mama', 100);
			writeFunction("writeEncounter('mamaSonCleaning')", "It's a mother's duty to clean her son thoroughly.");
			writeFunction("writeEncounter('mamaSonAnime')", "You want to get into your son's hobbies to become closer no matter what");
			writeFunction("writeEncounter('mamaSonCreampie')", "You desperately want your son to impregnate you");
			break;
		}
		case "mamaSonNoLewd": {
			writeHTML(`
				t A bowl is set in front of you as you decide on your plan. It's a nice looking pasta meal.
				im images/mama/104.jpg
				sp mama; Ta-da~! I've been working really hard since you'll be needing me to cook for you again when you're in school! You must be starving after your flight, dig in!
				sp player; Where's yours?
				sp mama; Oh, well I only made one serving. Don't worry though, I'll get some snacks later. Go ahead, mama's heart will break if she hears your tummy rumbling!
				sp player; I'm not really hungry, there's something I wanna show you ac-
				t You're stopped in your tracks by the saddest pair of puppy-dog eyes you've ever seen.
				sp player; ... Fine, but I can't finish it myself. Grab a fork and help me out.
				t She gasps, although you aren't sure where you went wrong. Does her son not share food? Does he not... Eat? For a brief second you panic.
				sp mama; Kenji... I can't believe it, you're doing something thoughtful for someone else... I'm so proud! Okay, give me just a second!
				... 
				t You manage to finish the food, she nibbles occasionally but mostly just spends the time staring dreamily at you. Once you're done you pull out your pendant.
				sp player; So, this is a neat trick a friend taught me while-
				sp mama; You learned something? Just like that? And you got a friend?!<br>Oh, do you mean your cartoons again? That's okay too...
				sp player; Just watch the pendant, okay? Watch it very closely.
				...
				t She goes under in minutes, already completely relaxed and trusting in you completely. A few simple commands make the foundation. Now she'll refer to you properly, and...
				sp mama; When my son, playerF, wants me to support him at the meeting, I'll agree with whatever he says...
				t With that wrapped up your job is done. mamaF Will now support you at the upcoming PTSA meeting.
			`);
			setTrust('mama', 100);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "mamaSonRepeat": {
			writeHTML(`
				t After a single knock the door opens quickly and mamaF ushers you inside.
				sp mama; Welcome back! Are you hungry? Lost? Did you want me to show you around town? And did you lose the key I sent you? I can get you another.
				sp player; Actually, I really wanna practice that thing I showed you before.
				sp mama; Oh that sounds wonderful~!
				t With mamaF firmly in your pocket, the only question now is what will you do?
			`);
			writeFunction("writeEncounter('mamaSonCleaning')", "It's a mother's duty to clean her son thoroughly.");
			writeFunction("writeEncounter('mamaSonAnime')", "Make her want to get into her son's hobbies to become closer no matter what");
			writeFunction("writeEncounter('mamaSonCreampie')", "Make her desperately want her son to impregnate her");
			if (checkFlag('mama', 'video') == true) {
				writeFunction("writeEncounter('mamaSonSolo')", "Make her show you the video");
			}
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "mamaSonCleaning": {
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "mamaSonAnime": {
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "mamaSonCreampie": {
			addFlag('mama', 'creampie');
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "mamaSonSolo": {
			writeEvent(name);
			passTime();
			writeFunction("writeEncounter('mamaSonEnding')", "Stay with mamaF");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "mamaSonEnding": {
			writeEvent(name);
			writeFunction("loadEncounter('system', 'credits')", "The End");
			break;
		}
		case "mamaBbcStart": {
			writeHTML(`
				t You take a deep breath and start applying what you gained from your helper. By the time you exhale, you're a new person now.
				sp player; Well, here goes nothing.
				t You walk up to the door and give it a knock. You feel... Strong. More muscular than before, mamaF must have some pretty specific tastes tucked deep away. You're too young-looking though to pose as someone like a plumber or a masseuse doing a house call. You'll just need to wing it.
				t The door opens hesitantly.
				sp mama; Can I help you?
				sp player; Yeah, I'm... I'm here to deliver and work through these forms with you on request from some faculty at my school.
				sp mama; I don't really-
				sp player; Miss, I really do need to insist. They're important for your son's enrollment, let me in.
				t It's a flimsy argument, but as she swallows dryly and relents in trying to close the door.
				sp mama; O-okay, please come in.
				t She's clearly off-kilter and trying to regain her composure. She draws an arm over her breasts, trying to keep herself in check. You probably look exactly like someone from one of her fantasies, so you'll need to play the part.
				t She closes the door behind you and leads you to the kitchen, obviously wanting to get through this as soon as possible. You, however, take the time to look around, even picking up a picture of her kid off the dresser.
				sp player; So, this is him, huh? Pretty twiggy, honestly.
				sp mama; That is Kenji, yes. Please put that down, he doesn't like having his picture taken so I don't have many-
				sp player; Honestly, it's a shame. A kid like this is gonna get walked all over, torn apart even.
				sp mama; What is that supposed to mean?
				t It's a bluff, the only students you really know are big-mouthed twinks and highschool bombshells, none of them really capable of tearing apart a tought plastic bag, let alone some brat.
				sp player; Well, I mean if he doesn't act like a dick or anything, or be a whiny little bitch to anybody.
				t You hit the nail right on the head as mamaF begins to sweat a little.
				sp player; You alright, ma'am?
				im images/mama/023.jpg
				sp mama; Y-yes, of course! I'm just... I'm sure everything will be fine. Now, those papers-
				sp player; I could keep an eye out for him, you know.
				t And now you have her attention. Suddenly she doesn't care about the papers, but about making sure her poor son isn't shredded by imaginary bullies at his new school.
				sp player; I mean, maybe he's cool? Maybe I'll stick up for him out of the goodness of my heart.<br>But maybe I could use a little incentive too.
				sp mama; What... What do you mean by that? You don't mean-
				t It's the question on the tip of her tongue. What <i>do</i> you mean by that?
			`);
			writeFunction("writeEncounter('mamaBbcLewd')", "Take her body");
			writeFunction("writeEncounter('mamaBbcNoLewd')", "Have her stay out of the PTSA meeting");
			break;
		}
		case "mamaBbcLewd": {
			writeEvent(name);
			writeHTML(`
			...
			t You take out your pendant, mamaF's glazed-over eyes barely able to follow the movement. You've got her in your pocket now.
			t Obviously the first thing you do is make sure she'll obey you at the PTSA council meeting, but honestly this whole deal doesn't seem too bad. She's clearly getting off on the treatment, and you've got a new pet you can play with a little differently than the others. It all works out.
			t So you leave her with a simple command, and from now on she'll be compelled to obey your every order. That should be enough, even if she pretends to resist.
			t Your glorious work complete, all that's left to do is head home for the day.
			`);
			setTrust('mama', 20);
			data.player.time = "Night";
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "mamaBbcNoLewd": {
			writeHTML(`
				sp player; It's very, very simple. All you need to do is stay out of the next council meeting. Just stay home that day.
				sp mama; That's it? And then Kenji will-
				sp player; I'll keep an eye out for him myself, no worries.
				sp mama; A-and if he acts out, you won't get... He can be a little...
				sp player; Even if he's the whiniest little bitch in the school, someone who desperately needs five fingers across the face.
				t She gulps, satisfied.
				sp mama; Okay. I'll stay home for as long as I need to. But if I hear even the slightest complaint about you, or anyone else at that school...
				t By the time her son is attending, you'll be in full control.
				t With her agreement you're in the clear, that's another member of the PTSA council down!
			`);
			setTrust('mama', 19);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "mamaBbcRepeat": {
			//I want her to slowly progress in terms of lewdness as you keep fucking with her, so I'll use a switch statement to generate her response when you show up. Each event will increase her trust by 10 up to a maximum of 90, after 50 she'll stop progressing so I'll use the default case. It'll be annoying to have the tab say things like 'friendly', but I don't want any confusing overlap with the son route's trust values.
			switch(checkTrust('mama')) {
				case 20: {
					writeHTML(`
						im images/mama/103.jpg;
						sp mama; Ah, i-it's you... You came back...
						sp player; Miss me? You and I have a lot of fun in our future, if you want your brat kept safe after all. Now, what to do...
					`);
					break;
				}
				case 30: {
					writeHTML(`
						sp mama; You again... What are you pla-
						im images/mama/202.jpg;
						t You grab her by the back of the neck and pull her lips to yours. What do you have planned for today?
					`);
					break;
				}
				case 40: {
					writeHTML(`
						sp mama; Ah, hello... I d-don't suppose you're here for something else this time?
						t You don't answer, just taking another step closer to her. She chuckles to mask her nervousness as she instinctively tries to push you away.
						im images/mama/100.jpg;
						sp player; Oh?
						sp mama; Oh, I'm sorry, I was just, uh... Admiring your chest. You're very... Firm...
						t She is actually at a loss for words as her attempts to play it off are failing. What did you have planned for today?
					`);
					break;
				}
				default: {
					writeHTML(`
						t As you arrive she wordlessly opens the door and closes it behind you.
						im images/mama/203.jpg;
						t At this point she's learned her place. What's your plan for this time?
					`);
				}
			}
			writeFunction("writeEncounter('mamaBbcCumWearing')", "Give her an appropriate makeover");
			writeFunction("writeEncounter('mamaBbcBunny')", "Check her closet for a kinky outfit");
			writeFunction("writeEncounter('mamaBbcTour')", "Take her on a tour of the school while still in disguise");
			if (checkTrust('mama') > 30) {
				writeFunction("writeEncounter('mamaBbcMarriage')", "Make her properly swear devotion to you");
			}
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "mamaBbcCumWearing": {
			if (checkTrust('mama') < 90) {
				raiseTrust('mama', 10);
			}
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "mamaBbcBunny": {
			if (checkTrust('mama') < 90) {
				raiseTrust('mama', 10);
			}
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "mamaBbcTour": {
			if (checkTrust('mama') < 90) {
				raiseTrust('mama', 10);
			}
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "mamaBbcMarriage": {
			setTrust('mama', 90);
			writeEvent(name);
			passTime();
			writeHTML(`
				t You've got a descision to make. Are you a one-act man, so long as that act is a bombshell milf? Are you sticking around just to cuck some kid from his mom?
			`);
			writeFunction("writeEncounter('mamaBbcEnding')", "Stay");
			writeFunction("writeEncounter('mamaBbcRefuse')", "Don't");
			break;
		}
		case "mamaBbcRefuse": {
			writeHTML(`
				sp player; No.
				t She gasps, suddenly looking horrified and broken-hearted all at once.
				t You walk up and press your cock against her face, rubbing the still-wet dick against her nose.
				sp player; You think this is yours? Fat chance you greedy whore. Think for just one second about all the women in this city I could have. That I <b>will</b> have. Every one of them, broken on my cock just like you.
				t Her eyes glaze over, she starts breathing deeply from the still messy with jizz rod rubbing against her face, before you take it away.
				sp player; Picture it in your head as you get off tonight, and <i>maybe</i> I'll decide that your slutty body is fun enough to play with tomorrow.
			`);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "mamaBbcEnding": {
			writeEvent(name);
			writeFunction("loadEncounter('system', 'credits')", "The End");
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
	data.player.character = originalProfile;
}

var eventArray = [
	{index: "mamaSonCleaning", name: "A mother's duty is to clean her son"},
	{index: "mamaSonAnime", name: "A mother's duty is to entertain her son"},
	{index: "mamaSonCreampie", name: "A mother's duty is to bear her son"},
	{index: "mamaSonSolo", name: "A mother's duty is to get off on her son"},
	{index: "mamaBbcLewd", name: "A mother's duty is to a virile bull"},
	{index: "mamaBbcCumWearing", name: "A mother's duty is to look presentable"},
	{index: "mamaBbcBunny", name: "A mother's duty is to breed like a rabbit"},
	{index: "mamaBbcTour", name: "A mother's duty is to be educated"},
	{index: "mamaBbcMarriage", name: "A mother's duty is to be married to a stud"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	var originalProfile = data.player.character;
	if (data.player.noDisguise != true) {
		if (name.includes("Son") == true) {
			data.player.character = "son";
		}
		if (name.includes("Bbc") == true) {
			data.player.character = "bbc";
		}
	}
	switch (name) {
		case "mamaSonCleaning": {
			writeHTML(`
				t It's not often you have someone in the palm of your hand from the word go, you might as well have some fun with something different than usual.
				t So with a simple command you implant the idea in her mind that she should be taking her motherly duties just a little bit farther. 
				im images/mama/073.jpg
				sp mama; You looks sleepy. Do you wanna just rest here, and nap on mama's lap? 
				t She runs her fingers through your hair. It is getting late though, so it's time to wrap up your fun for now. 
				sp mama; Is it alright? I know you weren't a fan of my shampoo brand, I could pick up something a little more aimed at men for you tomorrow. And if the water's too-
				sp player; It's fine, more importantly these tits are incredible.
				im images/mama/075.jpg
				sp mama; Ara ara~<br>You shouldn't be talking about mama like that~
				sp player; Don't lie, you love it. I can feel your nipples hardening. 
				sp mama; Of course! Girls love getting compliments, you know. But we're supposed to be getting clean together, we won-
				t You interupt her with a playful tug of her nipple, massaging it like you'd milk a cow. 
				sp mama; Ah, honey, mama's reeeally sensitive there, so please, ghh... 
				t She continues to try and rinse you and herself off as you enjoy the torment. Shower sex usually isn't too comfortable and fun, so mostly you pass the time seeing her grow more and more aroused behind her patient smile at your teasing. 
				... 
				t After you've had your fun you make a game about continuing to torment mamaF for the day. As she's picking out clothes, getting dressed, cleaning, every step of the way you're with her playfully rubbing and fondling her gorgeous milf body. 
				im images/mama/025.jpg
				sp mama; What am I going to do with you? When did you turn into such a prankster? 
				sp player; Aww, cmon. It's just some harmless fun. And isn't it your job to make me happy anyway? 
				sp mama; Young man, even if you're having fun you should be considerate of mama's feelings. 
				sp player; Don't be like that, I just missed you so much! All this is just because I love you, mama!
				t Her frustrated expression vanishes as her heart melts again. 
				sp mama; Oh my. Could... Could you say that again? 
				sp player; You know, you weren't very thorough in the bath. There's a spot you missed. 
				sp mama; O-oh! Right, I'm so sorry. I've been scatterbrained all day. Where was-
				t You adjust your crotch a little beneath the smooth sating pajamas mamaF gave you so that to ur bulge is more visible. Instead of surprise, or even revulsion, she just smiles. 
				im images/mama/027.jpg
				sp mama; Right, it's a mother's duty after all. So what did you say? Mama didn't quite catch it. 
				sp player; I think you heard me just fine, keep going and maybe... I'll repeat... 
				im images/mama/029.jpg
				sp mama; Ara ara~<br>My little man is so big now... But you're still a little shy, aren't you? You've always been my special little angel, but sometimes mama likes hearing nice things too. 
				t She slowly jerks your cock up and down, sighing with wistful appreciation at the chance to make you squirm like she was. 
				sp mama; Even if you don't say it, mama loves her little boy too. Even this big, dirty part of you.
				sp player; My cock, you love my dick? 
				sp mama; Of course! Mama loves every hair on your body, your hands that love to pinch and tease, and she loves your perfect dick very-
				im images/mama/031.jpg
				sp mama; Oh my! My little boy's getting dirty again! <br>Hmm, we'll need to get you cleaned off and changed. But it's such a waste to grab a towel... 
				t She lifts her hand, messy with your jizz, and starts licking it clean. 
				sp mama; Ah, mama loves this part of you too. Even if you came the nastiest, stickiest load in the world, mama would love every drop of her perfect little angel's jizz. 
				im images/mama/033.jpg
				sp mama; You looks sleepy. Do you wanna just rest here, and nap on mama's lap? 
				t She runs her fingers through your hair. It is getting late though, so it's time to wrap up your fun for now. 
			`);
			break;
		}
		case "mamaSonAnime": {
			writeHTML(`
				t You instill a very simple command, for her to get closer to her son. Once you snap your fingers she stammers out an excuse to leave for a moment.
				t You decide to actually see what her son's interests are. His room is mostly empty, the only things unpacked are a desk and several dozen small anime figurines, some of them innocent, some of them...
				sp mama; Honey? Where'd you go?
				t You can hear mamaF's voice from the living room, so you head back over to her.
				im images/mama/081.jpg
				sp mama; A-ara ara~<br>Have y-you been a good boy lately? Magical Girl Clover is... Is...
				im images/mama/083.jpg
				sp mama; I-I'm really sorry! I know clover is a teenage girl, and the outfit doesn't fit at all, but they don't sell costumes from that game you like! And I couldn't find all of the normal episodes, I think I ended up watching something weird, and-
				sp player; It's perfect, you look incredible. Keep going.
				sp mama; Really!? Mama did good? Alright~!<br>I-I practiced a lot, I thought I'd have more time, but...
				sp mama; Ara ara~!<br>Have you been a good boy lately? Magical Girl Clover is here to bring a reward to all the good boys and girls of the world!
				im images/mama/085.jpg
				sp mama; And... Oh my, you look like you deserve something extra special. To defeat the powers of darkness, I need your help first. Mama needs a really special kiss to charge up~
				t Her character is starting to break as her true intentions are becoming clear. She takes a step towards you, and you've already begun fishing your dick out.
				sp mama; Ara ara, I guess those episodes were the right ones after all...
				t You hook your finger into her cleavage window and pull her to where you take a seat on a chair, and let her get to work.
				im images/mama/092.jpg
				sp mama; Hmm hmm~<br>Does my special little pumpkin like my breasts? They're so big they swallow you up whole!
				im images/mama/093.jpg
				sp mama; You can touch them as much as you like, you know. This outfit didn't come with any underwear, so if I ever squirt from you handling handling my sensitive mommy tits, the only mess will be on the floor.<br>And if you squirt from how soft and wonderful they are around your cock... Well, I wouldn't mind cleaning that mess up at all~
				im images/mama/094.jpg
				t She grabs both her breasts and starts milking your cock thoroughly as you feel yourself begin to cum, squirting high arms of cum from between her tits. Soon enough her face is completely splattered.
				im images/mama/095.jpg
				sp mama; Ara ara~<br>You're such a good boy, this is so much cum that my magical powers... I can already feel them making my womb go into heat~<br>Or maybe you already knew that covering mommy's face in your cum would do that normally?
				t Without missing a beat she starts to stand up, pulling your cock from between her tits.
				sp mama; Mmm, mama won't be able to resist a quick snack on her new makeup, but I think it'll be fine to wear this awhile longer, right? Will it make my little darling happy to know that his mama's keeping his load between her tits while she walks around in a skirt barely long enough to cover her pussy?
				t You nod, and she giggles while doing a little bounce probably more appropriate for a teenage girl, causing her breasts to jiggle and some of your cum to land on the floor.
				sp mama; Ah, what a mess...
				sp player; You clean this up, I should get going. I'll be back again soon, so keep yourself ready for me.
				sp mama; Oh, but-
				sp player; A good mama can endure a little pent-up frustration, right?
				t There's a brief moment where she's torn between obeying you and pushing you down to get off as hard as she wants, but "being a good mama" clearly wins out between the two as she smiles and nods.
			`);
			break;
		}
		case "mamaSonCreampie": {
			writeHTML(`
				t With her mind and sense of reason wrapped around your finger, it isn't hard to give the command that will seal the deal between you and her forever. 
				t Before her bond with her child was one of unconditional love and affection, but now at the base of that relationship is a new foundation based on a few simple words that you have her repeat. 
				sp mama; I want... To be impregnated by playerF... By my own child... 
				t Even in her hypnotic trance there's an audible lust behind her voice you can hear every time you make her repeat the phrase. 
				sp mama; I want to be impregnated by playerF, by my own child... 
				t Her cheeks are flush and her breathing is growing heavier. If her hands weren't at her sides you'd swear she was masturbating right now. 
				t Once the command is set in stone you snap your fingers.
				...
				im images/mama/035.jpg
				t The two of you undressed, there isn't a trace of doubt or hesitation in her, just a happy acceptance of what's about to come. What she wants, needs even. 
				sp player; You're really sure about this?
				t She nods. 
				sp mama; Of course! There isn't anything in the world that would make mama happier than becoming one with you.
				t She presses her arms to squish her breasts together while sitting down on the silk bedsheets. Despite how bizarre the situation should be to her, her trust in you is mixing well with the hypnotic command.
				t Despite her kind smile, and the unconditional love in her eyes, there's a small voice in the back of your mind. That you're intruding, stepping in on a relationship of motherly love for her child. You stifle that voice, it isn't making the calls here.
				t She lays down, her arms pulling you with her.
				sp mama; Come on, mama wants you all to herself.
				im images/mama/046.jpg
				sp mama; Ah~!
				t Whatever she might have to say is caught in her throat.
				im images/mama/048.jpg
				sp mama; Mmm~!
				t Your lips locked with hers, she needs no words. Her actions speak plenty loud as her tongue slips into your mouth and her legs wrap around your waist.
				t Her eyelids flutter as you thrust, her mind going blank under a mist of pure love and degenerate lust. Her moaning into your mouth is seriously setting you off until you reach a crescendo.
				im images/mama/050.jpg
				t She grips you tightly with every part of her body she can as she feels the first shot of cum in her cunt. If not for the feeling of the silk bedsheet you'd swear the two of you were floating on a cloud.
				t Her body gives a small spasm and the two of you break your kiss so you and her can catch your breath.
				sp mama; Ohh... Ara ara~<br>Just stay like this a moment, I want make sure every drop stays-
				im images/mama/052.jpg
				t You knock the words and thoughts right out of her head  as you resume thrusting.
				sp mama; Ooough honey~! S-slow down, or mama-
				sp player; Say it! You want me to cum harder? Talk dirty!
				sp mama; Yes~! Your creampie is gonna make mama cum like a <b>slutty bitch</b>~!
				t She spasms much harder this time as you seal the deal with a second creampie, not giving her poor womb any reprieve.
				im images/mama/053.jpg
				sp mama; Hah~<br>Ooh, It's leaking...
				sp player; Not a problem... Gimme a second and I'll stuff you with so much it won't matter...
				...
				im images/mama/194.jpg
				t At the end of a long marathon you catch your breath at the edge of the bed. You had your fun in a variety of positions, but every time you would cum in her mouth, on her face, or between her tits she'd get hungry for another load in her pussy.
				t Now you're physically drained, and she is as well. If you stay any longer you won't be getting home, so you head off. She's enamored with rubbing her abdomen, satisfied with what's stuffed her womb to the brim.
			`);
			break;
		}
		case "mamaSonSolo": {
			writeHTML(`
				sp player; But before that, the video?
				im images/mama/059.jpg
				sp mama; Ah, right darling~! Come with me.
				...
				im images/mama/061.jpg
				sp mama; Mph...<br>Mwah~<br>Ara ara~ Is my big strong man hard? 
				im images/mama/063.jpg
				t With her boundaries broken her true desires are beginning to show through the cracks. As she resumes kissing you a lot more passionately than is appropriate for her son, she reaches down to fondle the bulge in your pants.
				sp mama; Mmm... Right, right, the video... I'm so sorry honey, mama got so lonely without you. Here, let me...
				t She takes you to another room and turns on a large screen TV.
				im images/mama/010.jpg
				t Onscreen is her, spread-legged while audibly huffing a used tissue, this is probably not too long after your last session with her. The mound of her pussy is very clearly visible through her underwear, and several full creampies worth of jizz are likely still in her womb.
				t Meanwhile, you're enjoying the show from the best seat in the house.
				im images/mama/069.jpg
				sp mama; Oh, honey, you're so hard... If it'll get you to stay, I'll make as many of these as you want.
				im images/mama/011.jpg
				t The mamaF on the screen whimpers as she can't hold back any more. Even though it isn't as fresh as it was getting stuffed up her cunt, just the act of smelling your cum is leaving her unable to stop from stroking herself.
				im images/mama/012.jpg
				t But she stops just as a dark spot begins to form on her panties. The video comes to an end all to early as you feel mamaF's nipple hardening in your mouth.
				im images/mama/071.jpg
				sp mama; It wasn't enough. I knew that I wouldn't be able to feel like you made me feel that night.
				t There's a hunger in her eyes, you've clearly awoken something deep inside her, and in yourself as well. You push yourself up, letting go of mamaF's hard nipple. But she just smiles, fully aware of what you're about to do. You grab her by the shoulder and pull her to the ground.
				t On her back she looks up at you, eyes still full of lust. She spreads her legs, revealing that she isn't wearing anything beneath her skirt, and licks her lips.
				im images/mama/065.jpg
				t You pounce onto her, your hips a blur from your very first insertion. She wraps her legs around you, the word "no" isn't in her vocabulary.
				t Your lips mash against hers, a slow teasing handjob and a desperate milf's show have already put you on edge, so it isn't long before you...
				im images/mama/067.jpg
				t Cum.
				t You feel yourself squirting a load of cum into her womb, her eyes open and pure, concentrated submissiveness is visible in them. The message she's trying to send you is clear.
				t <i>I want to stay like this forever.</i>
				t Her legs are still locked around you, not allowing even the slightest chance that a single spurt of your cum ends up anywhere but her starved womb. You realize why you instinctively didn't stay the night before.
				t Sleeping in the same house as this woman, waking up to her in bed... Your will to leave would vanish. Your dream of dominating the school, all the work you've done corrupting the PTSA...
				t And yet the alternative has her legs wrapped around your hips.
				t What will you do? You could resist and continue with your plans, or stay here with mamaF as her son. Sure, when her real son comes back she might snap out of her hypnosis, but something tells you that she'll pick you in the long run, given enough training.
			`);
			break;
		}
		case "mamaSonEnding": {
			writeHTML(`
				im images/mama/241.jpg
				t It's a commitment. Any good relationship is, after all. Awoken to a newfound set of desires mamaF has developed into a suitable sexual outlet.
				im images/mama/254.jpg
				im images/mama/256.jpg
				t You've built yourself a new life with a sex-fiend mama. She takes care of your every worldly desire.
				im images/mama/245.jpg
				t And every night ends the same way, with a reward for her loyal devotion.  It's a wonderful daily cycle, until one fateful day...
				...
				im images/mama/247.jpg
				t Months of daily bareback sex can only lead to one outcome, but that hasn't slown either of you down in the slightest.
				sp mama; Ooh~<br>I feel so warm... I missed this so much...
				t Her maternal instincts have been kicking in hard lately, and for an obvious reason. Every part of her body and mind are practically built for getting knocked up and having kids.
				t She rubs her hand on her distended belly.
				sp mama; I'll be a good mama for you too... I can't wait to meet you~
				sp player; And what about me?
				t Her answer is to sit up and lean forwards onto her knees while licking her lips.
				sp mama; Ara ara~<br>You're such a spoiled boy, but that's okay~<br>Mama's got all the love in the world for you too, see?
				im images/mama/250.jpg
				sp mama; Mmm~! I've raised such a <i>good</i> boy! You'll reward me for being a good mama, right? I always clean your clothes really well, even if I make myself squirt when I'm huffing them!
				sp player; You're insatiable. Did you buy that dog collar the other day hoping I'd parade you around town? Going to the beach in a string bikini thinner than dental floss wasn't enough for you?
				sp mama; Mommy can't help it, she wants all the other women to feel as jealous as they should~!<br>And aren't you the one who's stirring up mama's pussy every day? If my brain is broken and the only thing it wants every day is your cum, isn't that at least a little bit your fault?
				t Suddenly, the doorknob turns. A nasally voice calls out mamaF's name before there's a sudden silence in the room.
				t The atmosphere is cold for a second as the actual Kenji stands in the doorway, frozen in shock as you're balls-deep in his mother.
				t You lean down to mamaF's ear, hands still on her hips and cock still in her cunt.
				sp player; Mama, who is he?
				t The human mind is a strange thing. When faced with the choice of letting your psyche completely shatter by accepting that the last year of your life has been a complete lie, or going into full denial mode, it isn't always clear how the brain will react. 
				sp mama; I... I'm not sure. I don't recognize him, maybe he's lost? 
				t You don't know what kind of rationalizations she's making in her head, but her voice sounds genuine as a look of horror spreads across her real son's face. He suddenly finds enough energy to burst into a run, trying to get out of the house as soon as possible.
				sp mama; W-wait!
				sp player; Are you alright? You only need me, right mama?
				t She bites her lip, obviously wrestling with some serious internal conflict.
				sp player; Oh, I get it! You wanted him to watch! Slutty mama!
				im images/mama/252.jpg
				t *SPANK*!
				sp mama; Oooh~!
				sp player; But don't worry. I'd never run away no matter how much of a perverted slut you become.
				t That's exactly what she needed to hear, her daze expression finally fades.
				sp mama; Ara ara~<br>I'm so sorry honey, I don't know what I was thinking. Of course you'd never run away~! I'm sorry, I doubted you, punish mama thoroughly today, please? I need another spanking~!
				sp player; Found a new fetish, huh? Alright, I'll indulge you for as long as you like.
			`);
			break;
		}
		case "mamaBbcLewd": {
			writeHTML(`
				sp player; It'll be easy. You and I can just have some harmless fun! You and I can get to know each other better.
				sp mama; I... Okay, just...
				t You grab her by the chin and silence her with a deep kiss. She probably thought that her body would instinctively reject you, maybe she'd slap you across the face, but no. She moans into your mouth, the proper response of a lonely, hungry housewife.
				...
				t She's putty in your hands. Slowly you escalate your commands and she meekly follows along, her mind whirling.
				im images/mama/129.jpg
				sp mama; This... This isn't what most people mean when they suggest some 'harmless fun'.
				sp player; You think I don't know what harmless means? You calling me stupid? 
				sp mama; N-no! I just...<br><i>How did I get myself wrapped up in all this? I just... Need to...
				im images/mama/133.jpg
				t The pretense at this point that this is all for her son is fading as the situation has spiralled out of mamaF's control. 
				t You break the kiss, a line of saliva hangs between your tongues.
				sp player; You're enjoying this, aren't you?
				sp mama; Just... Just get this over with.
				t She half growls, half moans as a line of love drool slides down her thigh.
				t She takes a seat on her bed, telling herself that this is all for her son. That her demure attitude is for him, and that her body isn't eager at all.
				t That it'll all be over soon.
				t You crack your knuckles. Once she's yours it'll be the time for slow paced sex where you revel in her body and lust, but right now? Right now you need to break her. Being out of her mind in a post-orgasmic haze is just as good a time to hypnotize her as if she were relaxed.
				t You take a deep breath and steel yourself for a marathon, and mamaF gulps.
				...
				im images/mama/136.jpg
				sp mama; Gghhh, you ffffucking animal, I can feel the condom inflating! Just stop cumming already!
				...
				im images/mama/139.jpg
				sp player; Say it! Scream it!
				sp mama; You're fucking me so hard~! I can feel your massive cock breaking me apart~!
				...
				im images/mama/140.jpg
				sp mama; O-oh my gawd~! 
				sp player; I'm gonna cum!
				sp mama; N-nooooo~! We already used the last one! Pull it out, or ffFFFUCK~! NO~! I'LL GET-
				im images/mama/142.jpg
				Sp mama; GGGHHHHUUUUMMMING~
				...
				im images/mama/144.jpg
				sp mama; O-okay, it's probably okay. It just <i>feels</i> like a lot, like my womb is stuffed up. It won't happen, when was my last safe day? Think...
				t She's lost in thought and rambling to herself, on the verge of losing her mind completely.
				sp player; Here, let me help.
				sp mama; Okay, if I take a pill... Where's the nearest-
				im images/mama/147.jpg
				sp mama; ...!
				sp player; You didn't think we were done, did you? You've already been creampied, so there's no harm in another round or two, right?
				...
				im images/mama/153.jpg
				t You recline on a chair as mamaF squirts across the bed. Her voice has already given out, so all she can do is wordlessly scream as she's on the verge of passing out.
				sp player; I'm gonna grab a drink, then we can keep going, right?
				sp mama; ...
			`);
			break;
		}
		case "mamaBbcBunny": {
			writeHTML(`
				im images/mama/158.jpg
				sp mama; T-tada! How do I look?
				t It did not take you long at all to find something amazing in her closet, this bitch is seriously depraved. Of course she protested at first, but simply asking her to put it on with a smile was enough to convince her.
				t Instead of responding to her, you just unzip and let your hard cock do the talking.
				sp mama; It's... It's so... Y-you'll wear a condom, right? I have some, so-
				sp player; Bitch, is that how you ask?
				t You pick up a condom she had laying on a desk and toss it at her. She dryly swallows, and realizes how she should be begging.
				im images/mama/160.jpg
				sp mama; M-master, would you please put this on... So I can... Ghh... Drink it later, please?
				t You take back the package, tear it, and drop the piece of plastic on her face.
				sp player; Go ahead. No using your hands.
				...
				im images/mama/164.jpg
				sp player; God you're fucking tight! 
				sp mama; Mmm~ Y-you're... You're just too big!
				sp player; Stop pretending you don't love it!
				sp mama; I-I don't!
				im images/mama/162.jpg
				sp mama; Fff~ F-for my son! I'm not... I won't let you make me into your bitch, I'm only doing this-
				im images/mama/166.jpg
				sp mama; Ah~!
				sp player; <i>Make</i> you my bitch? Am I forcing you to moan like a bitch in heat? Am I forcing this slutty pussy to squirt?<br>Am I<br>Making!<br>You!<br>CUM?!
				t You stop thrusting and pull out. She gasps, but her look of confusion is replaced with panic as you pull off the condom and throw it aside.
				sp mama; P-please, I'll do what you want, but-
				t You ignore her and turn her over as she barely even pretends to resist.
				im images/mama/168.jpg
				sp player; Mouthy fucking slut, you'll talk garbage but the moment I thrust in your legs are wrapped around my hips!
				sp mama; Ooooh~!
				im images/mama/170.jpg
				sp player; Embrace it! You just wanna get ploughed all day and have these fat whore tits played with, right?
				sp mama; Y-yes~! Harder~!
				im images/mama/172.jpg
				sp mama; Cumming~!
				t The sheets beneath you are soaked between what cum is leaking out of her cunt and all that she's squirting against your abdomen.
				t Her arms fall from around you neck as her eyes roll back, then flutter closed. Cumming as hard as a firecracker, she's out like a light now.
				t You pull out and a squirt of cum rushes from her cunt. You'll leave her to clean herself up when she wakes back up. As for you, you clean your dick off with her hair before getting dressed.
			`);
			writePhoneImage("images/mama/160.jpg", "Art by Enoshima Iki");
			break;
		}
		case "mamaBbcCumWearing": {
			writeHTML(`
				t As you start to undress, mamaF does the same until you raise a hand to stop her.
				sp player; No. Keep them on.
				sp mama; B-but this apron... It was a gift from-
				sp player; Oh, you like gifts, huh?
				im images/mama/210.jpg
				sp mama; Oh my...
				sp player; See something you like? Don't worry, I've got my special gift right here.
				im images/mama/214.jpg
				sp mama; I... I don't...
				t Her head is spinning, she doesn't even have time to think as you start jerking off inches from her face.
				t A bead of sweat runs down her face as she watches, unable to take her eyes off of you.
				t She licks her dry lips.
				sp player; Tongue... Out!
				im images/mama/215.jpg
				sp mama; Ah~!
				t The powerful scent is messing with her brain, it feels warm wherever the jizz splashes onto her face.
				t The first few jets are powerful enough that they blast against her tongue, even her hair, but...
				im images/mama/216.jpg
				sp mama; Hah... Hah...
				sp player; You like it?
				t She nods. With how fried her brain is, it's almost certainly a reflexive action.
				sp player; Good, cause you're wearing it all day. Let it soak in, you shouldn't have any trouble cumming tonight.
				sp mama; B-but what if... Someone comes by?
				sp player; Then you'll greet them with a smile.
			`);
			break;
		}
		case "mamaBbcTour": {
			writeHTML(`
				im images/mama/221.jpg
				sp mama; Ah, so this is where all of the children run around, playing sports?
				sp player; It's a university, not gonna be any kids running about.
				im images/mama/219.jpg
				sp mama; You know, my darling Kenji isn't much a fan of running. Maybe once he's attended you could encourage him here? I think if he were to be a bit more active, he might find that... That...
				t A bead of sweat runs down her cheek as you lead her towards the equipment shed.
				sp mama; We aren't... Not here... The faculty here know my face...
				sp player; Who gives a damn about some chatty bitch at some meetings? You backing out? This shed is pretty private at these hours. If you won't join me in here, that's fine. But in a few months I'll drag someone else back here and-
				sp mama; No!<br>... Fine, alright, I'll go. We need to make this quick though, alright?
				sp player; No promises, but hey. I brought condoms this time.
				sp mama; Wha-? Why would we need...
				...
				im images/mama/225.jpg
				sp mama; Ah~! You scum~! You brute~!
				sp player; That's some pretty shit dirty talk, we'll be at this all day like this. 
				sp mama; Sh-shut up~<br>Stop talking, someone might hear us~!
				sp player; You're talking pretty loud though, and you're moaning even louder.
				im images/mama/228.jpg
				sp mama; That's because yo-ffffffuuuh...<br>You're ruining... My pussy~ With your fat brute dick~!
				sp player; Ruining? Ha, you'll be stroking your cunt remembering my little tour tonight, won't you?
				sp mama; No, I won't~!
				sp player; Don't lie. If a bitch can't manage to tell the truth, I'll-
				sp mama; Not... Lying~!<br>I can't~! I can't cum with my fingers anymore~! I'll rub, I'll finger myself, but ever since you fucked me I can't... I can't...
				im images/mama/227.jpg
				sp mama; Cumming~!
				t She pants, exhausted. The orgasms at this point are obviously becoming strong enough almost to frighten her.
				sp mama; Ghh...<br>Ah~! Stop, I need time to rest!
				sp player; No can do, I need another of these filled.
				...
				sp player; Now, we're gonna put those things to use. Pose for me.
				sp mama; H-huh?
				sp player; Did I stutter? You think I wore a rubber cause I'm polite? Fuck that, make a pretty face for the camera and show me how much you love those balloons so I have something to jerk off to later.
				t mamaF swallows dryly as she holds the filled condoms in her hands, a dark tingle growing in her already well-fucked loins.
				sp mama; <i>He's already cum twice, and he's already thinking of jerking off? How virile can one man be?</i>
				t That word, <b>virile</b>, echoes through her head as she poses as depravedly as she can for your camera.
				im images/mama/229.jpg
				t With each *click* of the camera, she shudders very slightly.
				sp mama; <i>I'm getting my picture taken while holding a jizz balloon between my teeth...<br>Fuck, just imagining him jerking off to these pictures... Instead of cumming inside me...<br>No! I still need to resist, I can't-</i>
				sp player; Fuck yeah. I'll tell you what, you've been a good bitch today. I'll let you keep the red one as a snack for later, but I wanna see you drink up the blue one right now. Hands-free, you look good in that pose.
				t As if she was waiting for an excuse to do it, she begins slurping as best as she can, like blowing a balloon in reverse.
				t It isn't just a one-and-done deal, it takes a good amount of effort to suck the condom dry, each time the taste hits her tongue she whimpers and squirms, but does her best to keep her pose.
				sp player; How's it taste? Show me.
				t She drops the empty condom from between her teeth and answers with an open mouth, followed with a delirious smile.
				im images/mama/231.jpg
				sp mama; It tastes so fucking baaaaad~! It's so much worse than when it's fresh out of your balls~<br>And it makes my womb quiver so fucking haaaaard~!
				sp player; Damn straight, and it'll fry your brain even harder when you drink the other one tonight. Now, tongue back out, you wanna suck it, don't you? You wanna feel me cumming on your face?
				sp mama; Uh-uh~!
				t It's hard for her to lie through her teeth when she's sticking her tongue out to catch your sperm, but that's exactly what she does as she pants like a bitch in heat watching you jerk yourself back to full hardness.
				sp player; Just for that, you're wearing it! And any of your new cum-makeup you don't eat is what you're walking home wearing!
				im images/mama/233.jpg
				sp mama; Ah~!
				t As you give her a good facial to use as today's makeup, you can hear something dripping onto the floor. Each inhale she makes fills her brain with the thick scent of jizz.
				t All pretenses of resistance have faded away as you mark her to proclaim dominance.
				...
				t You've pushed yourself to the limit today. After her little facial she lapped it up so quickly that it hardly makes for a good punishment. So, you filled up another condom, and another, and then went bareback on her for good measure.
				im images/mama/235.jpg 
				t Eves half-lidded, she slurps up the latest mess to dribble down her lips.
				sp player; Now... You go home, just like that... I'll be around to play with you again.
				t She doesn't respond, her conscious mind on vacation right now. Barely able to move, she still tries to crawl towards you even as you leave. She's insatiable, but at least you left her with some snacks for tonight. Maybe they'll be enough for her to get off by herself, or maybe they'll just leave her more frustrated and ready for your next visit.
			`);
			writePhoneImage("images/mama/229.jpg", "Art by Enoshima Iki");
			break;
		}
		case "mamaBbcMarriage": {
			writeHTML(`
				im images/mama/207.jpg
				sp mama; Fffuck, when you pull my hair like that...!
				im images/mama/209.jpg
				sp mama; Ahh~! I'm gonna... Gonna...!
				t You grunt to show your dissatisfaction, and pull out.
				sp mama; No! Wh-why'd you stop?!
				sp player; We're doing something different this time.
				sp mama; O-oh, really?
				t She looks nervous as she pulls off her shirt, bracing herself for more degradation.
				sp player; I'm tired of this bullshit song and dance. No more pretending this shit is for your son. If you want this dick, you'll need to beg for it.
				t You carefully word your phrase so that it isn't a command, you want to see where she goes from here.
				t And she hesitates. Her eyes linger on a nearby portrait on her wardrobe. You can clearly see the conflict in her eyes for a moment as her gaze moves to the side, away from the picture...
				t Years of motherly love and devotion are being put to the test, right here, right now. Her eyes stop, leaving her staring at your cock, still wet with her cunt's juices.
				sp mama; I... I want...<br>I want this... This fat, disgusting, hard cock to pump it's load in my unprotected cunt.
				im images/mama/174.jpg
				sp mama; I want to feel it pummel my slutty pussy until I can't squirt anymore. I want to cum so hard the shame of giving myself up to you completely vanishes beneath a soul-shattering... Fucking...
				im images/mama/259.jpg
				sp mama; Mmm~<br>I want to feel this massive dick's heat sear itself against my womb. I want to cum around it, knowing that every single stud sperm in your fat, fucking balls wants nothing more than to impregnate me.
				im images/mama/260.jpg
				sp mama; Mpph~
				t She sucks you down to the hilt before pulling back off with a *pop* and looking you right in the eyes.
				sp mama; I want... I want you to grab me by the hair, and pull my face down around your-
				sp player; Gladly.
				t You pull her down and start smashing your cock down her throat, ignoring her *glrrrk*s and *glark*s as she never breaks eye contact with you. You feel your balls clench.
				im images/mama/261.jpg
				t She coughs, unable to handle your full load. Still, she's staring you in the eye and gulping down everything she can.
				t You can hear her from here, staining the bed with a powerful squirt as she declares absolute submission to you with every facet of her being.
				t By the time you've pulled out, she's already done swallowing. She's panting, hungry and desperate, but she grabs onto your wrist.
				sp mama; I... I want you to stay...
				t She's still going.
				sp mama; I want you to be mine... I want you here... I want my son to see what I've become... With you... Forever...
			`);
			break;
		}
		case "mamaBbcEnding": {
			writeHTML(`
				t It's been... Awhile. 
				t A young man walks up to his mother's house. He's recieved some emails lately that sent him through a serious emotional journey. Rage, despair, jealousy...
				t Lust.
				t He was greeted with an emotional "It's so good to see you!" Like everything was normal.
				im images/mama/236.jpg
				sp mama; So, was the flight too rough? Will you be ready once classes start next week?
				im images/mama/237.jpg
				sp mama; Ah, that reminds me, I got a letter last week about tuition. I saved the bill.
				im images/mama/239.jpg
				t There's a wet splurting sound as the pair of tits in the son's video are coated with cum. She's wearing nothing but a smile.
				t Despite the lewd sounds of a titfuck, despite the soft giggling, despite how obvious it is that her son is watching porn, the mother's smile doesn't falter.
				sp mama; Kenji? You got those videos I sent you, right? Did you watch them all-
				t The boy jumps as he hears the door behind him open, but his mother's smile just widens.
				im images/mama/127.jpg
				sp mama; Ah, Kenji, this is... Well, he'll be living here. I gave him your room, you don't mind right? But don't worry, he hasn't used it recently, so you should be fine most nights.
				t The boy just gulps as you rub his mother's shoulder.
				sp mama; Now, I'm sure you're tired, right? I know you just arrived, but I think you should get some rest.
				...
				t Yet there isn't a trace of exhaustion in his body. He ignores his hunger, fakes being tired, and goes off to bed. Through the door he can hear giggling, moaning, and a soft "Not here, in the room."
				t Once the sounds have stopped he sneaks out. The door to his mother's room has been left open just a crack.
				im images/mama/269.jpg
				sp mama; Ara ara~<br>You're excited today, aren't you? Well, I am too. We should put on a good show, right? I have some special lingerie for you tonight.
				t The door being open was intentional. There's no telling what's in store for the boy, but his mother's future is in your hands now.
				...
				im images/mama/245.jpg
			`);
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong event. Error code: Failed to write event ("+name+") in "+character.index+".js");
			break;
		}
	}
	data.player.character = originalProfile;
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
	{index: "mamaSolo", requirements: "?flag mama creampie;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "mamaSolo": {
			writePhoneSpeech("mama", "", "playerF... Why didn't you sleep over? I know your room isn't ready yet, but mama could have slept on the floor! Mama misses you so much! I really want you to come back, do you want to do lewd things? I know we shouldn't, but I was really worried you wouldn't want to come back, so... Mama took a video of herself...");
			writePhoneSpeech("player", "", "Show me.");
			writePhoneSpeech("mama", "", "I really shouldn't send it to you, could you come back over? I read this one news story about how hackers could make your phone send microwaves and steal pictures...");
			writePhoneChoices("I'll be there soon.", "I want pictures. Now, or I'm not coming over.");
			break;
		}
		case "mamaSoloA": {
			writePhoneSpeech("mama", "", "Yay~! I really shouldn't, but I want you to come over quickly... It'll be fine if you delete it right away, right? So...");
			writePhoneImage("images/mama/011.jpg");
			writePhoneSpeech("mama", "", "Please come by soon... I needed to use tissues from our last time together to keep myself from going crazy");
			addFlag('mama', 'video');
			break;
		}
		case "mamaSoloB": {
			writePhoneSpeech("mama", "", "nononono please dont get mad");
			writePhoneSpeech("mama", "", "im sorry");
			writePhoneImage("images/mama/010.jpg");
			writePhoneSpeech("mama", "", "mama loves you, she doesn't want you to be mad");
			writePhoneSpeech("mama", "", "please come home i love you");
			addFlag('mama', 'video');
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