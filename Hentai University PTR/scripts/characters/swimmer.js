var character = {index: "swimmer", fName: "Naomi", lName: "Greens", trust: 0, encountered: false, textEvent: "", met: false, color: "#8DB7D0", author: "SlackerSavior", artist: "Himitsu Kessha Vanitas"};

var logbook = {
	index: "swimmer", 
	desc: "A student on the swimming team. She's also a backup for the volleyball team, though she tends to only fill in there if there's been an injury, or during practice.",
	body: "Sun kissed, with tan lines. Her body makes it clear that she spends much of her time in a swimsuit outdoors.",
	clothes: "Wears her school uniform relaxed, in a way that shows her tan lines off obviously.",
	home: "vintageStreet",
	tags: "",
	artist: "Himitsu Kessha Vanitas",
	author: "Slackersavior",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "swimmer2", name: "Your door suddenly explodes into a rapid series of knocks.", location: 'playerOffice', time: "MorningEvening", itemReq: "", trustMin: 20, trustMax: 35, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "swimmer3", name: "You wander the park somewhat aimlessly. She really should have told you where in the park to meet her. On your third lap, your phone finally starts ringing.", location: 'parkDistrict', time: "MorningEvening", itemReq: "", trustMin: 40, trustMax: 49, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "swimmer4", name: "You head to the pool late. You have to hop a fence to get there, but you've for sure got privacy and time for your meetup.", location: 'parkDistrict', time: "Evening", itemReq: "", trustMin: 90, trustMax: 90, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "swimmer1": {
			passTime();
			setTrust('swimmer', 30)
			addFlag("coach", "swimmermet")
			writeText("You've been waiting for quite a while for swimmerF to get to your office. It's been nearly a half an hour since coachF said she sent her...");
			writeText("You're picking up your phone to call coachF and ask if she's seen swimmerF, when you finally hear a knock at your door.");
			writeSpeech("player", "", "The door is open, come on in.");
			writeText("swimmerF strolls into your office, seemingly unaware of how late she is.");
			writeBig("images/swimmer/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("swimmer", "", "Hi, playerF! coachF told me something about... Uh.. 'a student goodness program' or something and she asked me to come see you!");
			writeSpeech("player", "", "'Student Wellness Program.' And you're a little late, swimmerF. Did something happen?");
			writeText("She looks a little embarrassed and looks away from you.");
			writeSpeech("swimmer", "", "I'm not <i>that</i> late, am I?");
			writeSpeech("player", "", "Getting close to an hour late, actually.");
			writeSpeech("swimmer", "", "Oof. Sorry, playerH. I just... I got distracted on my way here. I got to talking with a friend I saw in the hallway, then I had to go to the bathroom, then I forgot my backpack in the gym, so I had to go back there, and then when I got there I got caught up talking to orangeF about...");
			writeText("You swear, she doesn't even stop to breathe. And this sentence never ends.");
			writeSpeech("player", "", "It's alright swimmerF. You were late, that's fine. And from the sound of it, it lines up pretty well with what I've heard from your teachers.");
			writeText("She looks down again, stopping her endless runon sentence as you continue.");
			writeSpeech("player", "", "That's part of the reason I asked to see you, swimmerF. It seems like... Well, I'm not trying to be rude, but do you have trouble focusing on things? In or out of class?");
			writeSpeech("swimmer", "", "I guess, playerH. I mean... I just tend to get distracted, you know? Like, I start doing or working on something, then something else comes up and I drop what I'm working on, then I never get back to it and suddenly I have three half finished assignments and it's time for class.");
			writeSpeech("player", "", "It's not an uncommon problem, swimmerF. I may have a way to help you with that. sportsF had a similar problem with her Organic class, and it helped her.");
			writeSpeech("swimmer", "", "I'll be honest, playerT playerF, if I got half the improvement sportsF saw in her class, I'd do just about anything. Like, I don't know what you did, but she really turned that class around. I have to take that class next semester and I'm actually pretty worried about it, and...");
			writeSpeech("player", "", "Breathe, swimmerF. Take a minute. I practice hypnosis. It's a pretty good tool for helping people focus. It's... It's basically guided meditation. It helped sportsF, it may help you if you want to give it a shot.");
			writeSpeech("swimmer", "", "Sure, I guess. I don't know how much it'll help me, but I'd be willing to give it a shot. So should I like, close my eyes? Lean back? Is it one of those pocket watch dealies? Or am I going to like, watch a spiral spinning? I had a friend once who went to a stage hypnotist and she ended up dancing on stage like a....");
			writeSpeech("player", "", "Like a chicken. Yeah, yeah. It's not really like that. And...");
			writeText("You look at the clock. With how late she got here, you don't really have much time to work with for a session.");
			writeSpeech("player", "", "We're kind of out of time today. But my door is always open, swing by anytime and I'll do my best to help you out.");
			writeSpeech("swimmer", "", "Sounds good, playerT playerF! Now, I've got to take off. I think I have a calc assignment to do. Or was it biology...? Either way, then I've got to...");
			writeFunction("changeLocation(data.player.location)", "You let her ramble as she leaves your office.");
			break;
		}
		case "swimmer2": {
			writeText("You didn't have any meetings set up today...");
			writeSpeech("player", "", "The door is open. Come on in.");
			writeText("swimmerF quickly pushes the door open and closes it behind her. Speaking quickly as she rushes to the seat across from your desk.");
			writeBig("images/swimmer/profile.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("swimmer", "", "Hi, playerF! I'm here to uhh...");
			writeText("She stumbles as she speaks, trailing off as she tries to remember what she came here for.");
			writeSpeech("player", "", "The Student Wellness Program? Well, we didn't have anything scheduled, but if you want to...");
			writeSpeech("swimmer", "", "Kind of? Do you have some time? I have some things I <i>really</i> need to talk to you about.");
			writeFunction("loadEncounter('swimmer', 'swimmer2a')", "Of course, swimmerF.");
			writeFunction("changeLocation(data.player.location)", "Sorry, I'm a bit busy today?");
			break;
		}
		case "swimmer2a": {
			passTime();
			setTrust('swimmer', 40)
			writeText("swimmerF visibly lights up as you say yes.");
			writeSpeech("swimmer", "", "Yeees! See, I need to talk to you about something kinda...");
			writeText("She turns around and looks at the door leerily, before getting up and checking the handle.");
			writeSpeech("swimmer", "", "Whew. Okay, I did lock it. Is this room private?");
			writeText("Well, you did do some soundproofing, and... Wait, hang on.");
			writeSpeech("player", "", "It is. It wouldn't really be good if the counselor's office wasn't private. We can talk about whatever you need and you don't have to worry about it.");
			writeSpeech("swimmer", "", "Nonono, I mean... Is this room <i>private</i>? Like, do other people know what happens here?");
			writeText("Don't like the sound of that...");
			writeSpeech("player", "", "Whatever happens in this room is private, yes. Whatever goes on is just between us, barring something I'd be legally obligated to tell to the authorities or the staff. So... As long as you didn't kill anyone.");
			writeText("She laughs and gives you a huge smile.");
			writeSpeech("swimmer", "", "Nonono, I just... Aaagh! I thought this would be easier!");
			writeSpeech("player", "", "You thought what would be easier?");
			writeSpeech("swimmer", "", "I want you to fuck me!");
			writeText("The smile never leaves her face as she yells that out, throwing her arms into the air in... Celebration?");
			writeSpeech("player", "", "You want... That doesn't seem...");
			writeText("Floundering, you try to find some way to spin this, but you're coming up short as she starts talking again.");
			writeSpeech("swimmer", "", "Come on, playerF! I saw you with sportsF in the locker room! That day you came by and talked to all of us, and she hurt herself during practice? I forgot some stuff in my locker and when I came back you were balls deep in her and she was calling you '*Master'! It was so fucking hot!");
			writeSpeech("player", "", "You... What?");
			writeSpeech("swimmer", "", "Yeah! She <i>begged</i> you to fuck her stupid! And you made her walk home full of your cum! It was soooo fucking good! I came twice watching you and I came two more times when I got home!");
			writeSpeech("player", "", "I...");
			writeSpeech("swimmer", "", "Come on! Get your pants off!");
			writeFunction("writeEvent('swimmer2b')", "swimmerF quickly falls to her knees in front of you and unzips your pants.");
			break;
		}
		case "swimmer3": {
			writeText("Your phone vibrates in your pocket. You take a look at the number, though you already have a pretty good idea who it is.");
			writeSpeech("player", "", "Where ex-");
			writeSpeech("swimmer", "", "Come on! I've been waiting at the public pool for forever now! Why aren't you here yet?");
			writeSpeech("player", "", "Well, you never to-");
			writeSpeech("swimmer", "", "Yeah, yeah. Come on... <i>*Master</i>. I'm in the little family locker room, the door has a lock. Just text me when you're outside.");
			writeText("The line goes dead in your ear before you can say anything else. And within seconds your phone buzzes with a text from swimmerF.");
			writeBig("images/swimmer/3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("swimmer", "", "I'm ready and waiting! Cum on (me) no one will interrupt us here!");
			writeText("This girl is insatiable. But something about all this feels... Off.");
			writeFunction("loadEncounter('swimmer', 'swimmer3a')", "Better get over there before she loses it.");
			writeFunction("changeLocation(data.player.location)", "She can wait.");
			break;
		}
		case "swimmer3a": {
			passTime();
			setTrust('swimmer', 50)
			writeText("You work your way to the pool and quietly try and get to the family changing room. Luckily, no one seems to take notice of you, even with your completely inappropriate pool attire. You text swimmerF as you approach and manage to worm your way to the door when some kids start making a commotion in the pool which required the lifeguard to intervene.");
			writeSpeech("player", "", "Next time could you tell me where you want to meet <i>before</i> we meet up?");
			writeBig("images/swimmer/3a.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("swimmer", "", "I thought I... Uhh. Oops. Sorry. Oh! Uh, sorry, *Master?");
			writeSpeech("swimmer", "", "Sorry. I'm still getting used to the whole *Master and Slave thing. I don't know how coachF and sportsF do it <i>all</i> the time. They like, <b>never</i> break character.");
			writeText("Shit. Not that surprising. But shit. Maybe this girl is more trouble than she's worth, if the hypnosis isn't taking that's dangerous. Going to need to-");
			writeSpeech("swimmer", "", "playerF... Oh, I mean, *Master? Is something wrong? You're kinda... spacing out?");
			writeText("Okay, okay. She's still a nymphomaniac weirdo. Come on. Even if the hypnosis didn't sink in completely, she wants to have more sex and is pretty tight with sportsF and coachF. There's ways to sal-");
			writeSpeech("swimmer", "", "... Is this what I look like when I space out?");
			writeText("swimmerF is waving her hand in front of your face, looking mildly concerned. Fuck. Right. No time to think now. Just gotta roll with it.");
			writeSpeech("player", "", "Sorry, just... You look pretty dynamite in that swimsuit. I was... Thinking of all the ways I could use you like this in the future?");
			writeText("That lie was terrible.");
			writeSpeech("swimmer", "", "Hell yes! That's exactly what I wanted to hear, *Master!");
			writeText("We take those.");
			writeSpeech("swimmer", "", "But I don't want you to use me <i>later</i>.");
			writeSpeech("swimmer", "", "<b>Fuck. Me. Up.</b>");
			writeFunction("writeEvent('swimmer3b')", "Maybe a different approach this time...");
			break;
		}
		case "swimmer4": {
			writeText("As you move towards the locker room, you can hear swimmerF behind the door.");
			writeSpeech("swimmer", "", "Gotta cum. Please, I need it. Where is *Master? He'll make me cum, I know he will. I hope he will. Please make me cum, *Master.");
			writeSpeech("player", "", "It's a miracle she's gotten through this week without raising any alarms.");
			writeText("Your mumbling causes her voice to stop on the other side of the door.");
			writeSpeech("swimmer", "", "... *Master? Are you there?");
			writeFunction("loadEncounter('swimmer', 'swimmer4a')", "No time like the present.");
			writeFunction("changeLocation(data.player.location)", "She can wait a day... or two... Maybe.");
			break;
		}
		case "swimmer3a": {
			passTime();
			setTrust('swimmer', 61)
			writeText("You push the door open.");
			writeBig("images/swimmer/4a1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("swimmer", "", "*Master! Thank God! I need-");
			writeText("You let loose a loud, clear snap.");
			writeSpeech("player", "", "Spank.");
			writeText("swimmerF cries in pain and flinches. coachF must have done some rough conditioning when working that trigger in. But despite the apparent hypno pain, you hear the moan of pleasure that follows up the sharp cry of pain. Surprisingly good work, for an amateur.");
			writeSpeech("swimmer", "", "Th-thank you *Master! Sorry, I just- I...");
			writeText("Her face twists as she tries to find the right words. She's afraid of saying the wrong thing, but she knows she needs to say something. It takes her a few seconds of focus, as she slowly finds the words she thinks you want to hear.");
			writeSpeech("swimmer", "", "I... I get it now, *Master. I get what you meant last time we were here. I... Didn't know what it really meant when I came into your office. I didn't... I didn't know what it meant when you told me I belonged to you. I saw what you did to sportsF, and I thought... I thought it would be exciting.");
			writeText("She's speaking faster now, since you haven't stopped her, she's pretty sure she's on the right track.");
			writeSpeech("swimmer", "", "And... And it was. It <i>really</i> was. And it still <i>is</i>. And I want more. So much more. sportsF and Mistress coachL did a lot to show me that I was... Wrong about some things, though.");
			writeText("At this point, it's far better for you to just let her speak. THe more she talks, the more these feelings will work their way down. It's a lot easier when you don't have to implant or change people's thoughts, you just kinda... Twist them a bit and let them run wild.");
			writeSpeech("swimmer", "", "When... When I was first with sportsF, I only really wanted to get off. I wasn't doing anything <i>for</i> her. Which wasn't right. She was helping me out. So the next time, I really did <i>try</i> but, it was so hard to focus on sportsF when I was so horny... Until she took control and gave me directions. And that felt <b>good</b>.");
			writeText("swimmerF starts to shuffle, nipples erect in her swimsuit, and the crotch of the suit obviously digging into her slit.");
			writeSpeech("swimmer", "", "But at the end of the day, I was <i>still</i> only really focused on myself. I just wanted... Needed... To cum. Then you sent me to coachF. And... She taught me that was wrong. I shouldn't focus on myself. And after she heard about how I treated sportsF the first few nights, she made sure I was punished, and told me my mistake. I'm your <i>slave</i> she said. <i>My</i> pleasure, my desires always come second to who I'm serving.");
			writeText("You can see her hands twitching at her side, occasionally half moving to her pussy before snapping back. She's trying her hardest to make sure she can focus and tell you what she's learned.");
			writeSpeech("swimmer", "", "Then, the last night... She showed me how to find pleasure in serving others. And... And I loved it. And I know now. I... I earn my pleasure by serving others. Serving <i>you</i>. And whoever else you'd have me serve, but I'd... I'd rather it was just you and the other girls.");
			writeText("She finally looks up, and stops twitching for a moment as she finishes.");
			writeSpeech("swimmer", "", "You were my first, and I want you to be the only cock I ever have in me *Master. Is... Is that too selfish?");
			writeText("Whenever you take over this school, you're giving coachF a massive raise.");
			writeSpeech("swimmer", "", "That seems fair, swimmerF. And I'm very glad to see you've learned. See what happens when you <b>focus</b>?");
			writeFunction("writeEvent('swimmer4b')", "Her eyes snap to yours, and she's waiting for your command");
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "swimmer2b", name: "Surprise!"},
	{index: "swimmer3b", name: "Pool Party"},
	{index: "swimmer4b", name: "Devotion"},
	{index: "placeholder", name: "Event Name"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "swimmer2b": { //Surprise blowjob
			writeBig("images/swimmer/2b1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("swimmer", "", "Fuuck. Looks even better up close.");
			writeText("swimmerF starts to rub her hand over your cock, slowly from top to bottom as it quickly hardens.");
			writeSpeech("player", "", "Would you st-");
			writeText("Before you can finish that sentence, swimmerF rubs her cheek against your now full length, you can feel the slightest touch of her tongue on the underside of your cock and feel her take a deep breath in through her nose, shivering with anticipation as she takes in your smell.");
			writeSpeech("swimmer", "", "Holy shit, that smell is great too.");
			writeBig("images/swimmer/2b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("swimmer", "", "You really were blessed with a gift here.");
			writeSpeech("player", "", "Goddamn it! Listen to me. This is all kinds of inappropriate, so please-");
			writeSpeech("swimmer", "", "Oh come <i>oooonn</i> playerT playerL! You fucked sportsF! I saw it. I could go and tell the principal... Or... Well, this sounds way more fun, right?");
			writeText("She starts to lick as you try to keep your voice level. You can make this work. Just gotta think on your feet.");
			writeSpeech("player", "", "Fuck it! Fine!");
			writeSpeech("swimmer", "", "Fuck yes!");
			writeText("swimmerF takes one more deep inhale, taking in your smell before she stops teasing you with her tongue and puts the head of your cock in her mouth.");
			writeBig("images/swimmer/2b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("swimmer", "", "Gck!~ Mmk!~");
			writeText("As excited as she was to start, she's barely got your cock in her mouth before she's started gagging and struggling to get deeper. She's gripping your legs as hard as she can, you don't think on purpose. A thought crosses your mind...");
			writeSpeech("player", "", "You've never done this before, have you?");
			writeSpeech("swimmer", "", "Mmgooo!~ <b>cough</b>");
			writeSpeech("player", "", "... Don't talk with your mouth full, swimmerF.");
			writeText("swimmerF quickly pulls herself off your cock, smiling like a goofball as she looks up and answers you around light coughs.");
			writeBig("images/swimmer/2b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("swimmer", "", "I... Uh... Well. Was it that obvious playerT?");
			writeText("Seriously? You got blackmailed into sex by a horny virgin? You're losing your touch.");
			writeSpeech("swimmer", "", "I always wanted to do something like this, but I never really had a chance, you know?");
			writeSpeech("player", "", "You always wanted to blackmail a teacher, or you always wanted to have sex?");
			writeText("swimmerF starts to slowly suck and lick at your tip as she answers.");
			writeSpeech("swimmer", "", "I mean, mostly the sex. I just knew after I saw you and sportsF I needed to get in on that action, though.");
			writeBig("images/swimmer/2b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("She starts to pick up the pace as she continues.");
			writeSpeech("swimmer", "", "Seeing sportsF turned to a pile of jelly was... Fuuuck, playerT playerF, it was the fucking hottest thing I've ever seen. And I watch a <i>lot</i> of porn.");
			writeText("swimmerF gets back to licking your cock. You're pretty sure she's stopped the actual blowjob because her jaw is too tired. She really isn't very good at this. Tons of enthusiasm and plenty of energy, but she keeps catching you against her teeth and obviously can't get you very deep. But hey, a blowjob is a blowjob.");
			writeSpeech("swimmer", "", "Gotta say though, this is a lot more work than I thought.");
			writeText("swimmerF starts to try and go deeper, every time causing her to gag more and more. On the positive side, the gagging and squeezing around your cock feels much better than her amateurish tongue work.");
			writeText("And you still need to figure out how to turn this around... Maybe time for a hail Mary.");
			writeSpeech("player", "", "For the love of... Look, swimmerF, tell you what. Fine. You don't tell anyone about what I'm doing on the side, and I'll fuck you. But for the love of all that is holy, <i>watch your teeth</i>.");
			writeText("swimmerF pops herself off of you, rubbing her jaw with one hand and idly rubbing your cock with the other.");
			writeSpeech("swimmer", "", "<b>Seriously?!</b> Hell yes! That's what I'm talking about!");
			writeSpeech("swimmer", "", "So how are we gonna... I mean, how should I... I mean, you should... I...");
			writeText("She's flailing. It's pretty obvious she didn't think this far ahead.");
			writeSpeech("player", "", "Look, we'll just keep it to the blowjob today, okay? I'm gonna need some time to make sure none of this comes back to bite me in the ass.");
			writeText("swimmerF looks up at you and pouts.");
			writeSpeech("swimmer", "", "But I wanted to...");
			writeText("You reach down and pat her head as you speak.");
			writeSpeech("player", "", "Look, swimmerF. I won't deny fucking you is going to be a blast, but I have an appointment in a bit, and if we get caught, we're <i>both</i> in a lot of trouble.");
			writeText("Possibly true, but mostly you just need time to think and you don't think she'll be able to come up with a way to...");
			writeSpeech("swimmer", "", "No way, playerT! I came here to lose my virginity and you're going to take it, damnit!");
			writeText("swimmerF leaps to her feet throws her skirt to the floor, laying across the top of your desk and knocking some of your clutter to the ground.");
			writeFunction("writeEvent('swimmer2c')", "This would be nice if it didn't feel like your life was rapidly spinning out of control.");
			updateMenu();
			break;
		}
		case "swimmer2c": { //Not taking no for an answer
			writeBig("images/swimmer/2c1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("swimmer", "", "I was really hoping this would work, so I didn't wear panties...");
			writeText("She takes a minute to line up your cock with her slit and take in the sight before she finishes.");
			writeSpeech("swimmer", "", "Plus anytime I thought about having this thing inside me my panties would get soaked and ruined...");
			writeText("For all her bravado, now that she's here swimmerF seems to be having the same second thoughts that a lot of girls have when they're about to lose their virginity.");
			writeSpeech("swimmer", "", "It's so <i>big</i>. It's seriously going to fit inside me?");
			writeSpeech("player", "", "You could always back out. It's not too late.");
			writeSpeech("swimmer", "", "playerT, I  don't think you understand. I'm not scared. I'm <i>pumped</i>. I can't <i>wait</i>.");
			writeText("You may have underestimated this one.");
			writeSpeech("swimmer", "", "Make me a woman, teach!");
			writeText("Definitely underestimated her. But hey, here's a chance. Time to take it. If you can't win by being clever, there's always brute force.");
			writeSpeech("player", "", "Fine. Tell me, swimmerF. You remember what I did to sportsF? How I made her my bitch?");
			writeText("You start to rub your cock along her cunt as you speak, and she nods slowly and gasps as your head brushes against her clit. She's soaked, you hadn't realized until now. You pass yourself once, twice, along every bit of her cunt and line yourself up to take her.");
			writeSpeech("player", "", "I hope you're looking forward to being my bitch too.");
			writeBig("images/swimmer/2c2.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("swimmer", "", "Yeee!~");
			writeText("A high pitched squeal escapes her lips as you thrust in. If you had any mercy, or time, or <i>any</i> control over this situation, you'd have taken it slow. Worked your way in bit by bit to make sure she enjoyed it. That would have been ideal.");
			writeBig("images/swimmer/2c3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("swimmer", "", "<b>Fuuuck!~</b> That hurts! I don't... So <i>full</i>!");
			writeSpeech("player", "", "What did you think would happen here, swimmerF? Did you expect something romantic? Something nice and gentle? <i>No.</i> You saw what I did to sportsF. And you wanted it to happen to <i>you</i>. Isn't that right?");
			writeText("Your words come out practiced. Thank god for your hypnotic techniques. This isn't ideal, but if you're right, she was already halfway there. May as well just give her a push and pray.");
			writeSpeech("swimmer", "", "I... I... <b>Fuck!~</b>");
			writeBig("images/swimmer/2c5.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You feel her convulse under you, cumming wildly from the thought of you fucking sportsF, and the realization that the same thing is now happening to her.");
			writeSpeech("swimmer", "", "Of fucking <b>course</b> it was playerT! Now <b>KEEP GOING</b>");
			writeText("Sounds good to you. You continue wildly thrusting. Trying your best to find any spots to set her off, but mostly just looking to overload her body.");
			writeSpeech("swimmer", "", "<b>This feels! So much better! Than my fingers! <b>Yes!</b>");
			writeSpeech("player", "", "Of course it does. You saw sportsF ruined by this cock. What made you think you'd end up any different?");
			writeText("You keep pumping. You've got to hold it in as long as possible. The longer you last, the more of a chance at least some of this sinks in.");
			writeSpeech("swimmer", "", "I... I didn't want to be different! I wanted <i>this</i>. I wanted to feel like sportsF did!");
			writeText("Hope this works.");
			writeSpeech("player", "", "Then you remember what sportsF called me, swimmerF? Of course you do. That's burned into your mind, isn't it? What am I to sportsF? What am I to <i>you</i>?");
			writeSpeech("swimmer", "", "But... But I was... You're...");
			writeText("She's too lost in the feeling of your cock inside her, and your words are full of enough half-truths to confuse her addled mind. Her lack of focus may have bitten you in the ass, but it also seems like...");
			writeSpeech("swimmer", "", "You're... swimmerF's... My? <i>mmm-maa...</i>");
			writeText("You've got to finish this now. You can't hold on any longer, and she's right on the cusp. You let go, cumming as deep inside swimmerF as you can push, and you feel her own body cum in response. You keep up the thrusting as much as you can, feeling your legs and core <i>screaming</i> for respite.");
			writeBig("images/swimmer/2c4.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("swimmer", "", "<b>MAAASTER! YOU'RE OUR MASTER!</b>");
			writeText("swimmerF screams as you keep moving. Keeping the assault up as long as possible, to try and make this stick.");
			writeText("Finally, you can't keep it up any longer and you have to stop. You pull out slowly. swimmerF is a limp pile on your desk as you get your pants back on.");
			writeSpeech("swimmer", "", "I can't believe that...");
			writeText("Can't help but feel a little bad for the girl, honestly. She deserved her first time to be something more...");
			writeSpeech("swimmer", "", "I can't believe that was everything I ever wanted.");
			writeText("Why is this school so full of weirdos?");
			writeText("Not that you should complain. Or you really have room to talk.");
			writeSpeech("swimmer", "", "Fuuuck, playerT, that was the best! Can we do that again? Wait, should I be calling you *Master? Sorry, I'm not really used to that yet. Did you see where my skirt went?");
			writeText("swimmerF is back on her feet and moving around your office. Grabbing... a few of her things, and seemingly not seeing the rest.");
			writeSpeech("player", "", "I... Okay, look. swimmerF. Focus on me for a second.");
			writeText("The response is almost immediate. swimmerF turns and snaps to attention, looking you right in the eye.");
			writeSpeech("swimmer", "", "What do you need, *Master?");
			writeText("Okay. That's good. She can and will give you full attention. You just have to hope now that the commands sink in instead of going in one ear and out the other.");
			writeSpeech("player", "", "I need you to not tell anyone about this. In private, you may talk to sportsF and coachF-");
			writeText("She lights up and butts in, losing that focus she had momentarily.");
			writeSpeech("swimmer", "", "<i>coachF too?!</i> That explains sooo much! Also, holy shit, she's got to be a <i>monster</i> in bed! Can I-");
			writeSpeech("player", "", "<b>Focus. On. Me. swimmerF.</b> Don't interrupt. This is important.");
			writeText("She snaps back to attention and stops talking. Good Lord, this girl is going to be a handful.");
			writeSpeech("player", "", "In private, you may talk to sportsF and coachF about what we do. I get the feeling you'll like that. Call me *Master in private. If someone asks what we do together, tell them that I am helping you with your focusing problems. Remember, if we get caught doing this, we don't get to do this anymore. So you have to be sure to follow my directions and orders <i>very</i> carefully.");
			writeText("Feels a little bad to put that pressure on her, but that will probably be threat enough for her to take this seriously.");
			writeSpeech("player", "", "Got all that, swimmerF? Repeat it back to me.");
			writeSpeech("swimmer", "", "Of course I've got it, *Master! Uhhmm... You're fucking coachF. I can call you *Master in private. And talk to coachF and sportsF about fucking you. And... Uhh...");
			writeText("Lord help you.");
			writeFunction("changeLocation(data.player.location)", "You spend the next hour trying to get her to actually remember everything you just said. This is a possible nightmare, but there's nothing to be done for it now.");
			updateMenu();
			break;
		}
		case "swimmer3b": { //Pool meetup 1
			writeText("Just fucking her senseless last time didn't really work. It was enough to get her down to fuck and not tell anyone, but that could change at any time if you're not careful. Time to try a different strategy.");
			writeText("You grab her shoulders and start to move, putting yourself behind her as you let your hands aimlessly wander her body.");
			writeSpeech("player", "", "So you talked to sportsF about the swimsuit, huh? And what do you think?");
			writeText("You're mostly buying for time, but as you let your hands play across her breasts and her hips you feel her squirming under your grasp. Her breaths getting quicker, and her body heating up as you start to tease her.");
			writeSpeech("swimmer", "", "Aaa~ctually, I... I already kinda did this. I've aaa~lways really liked the way swimsuits feel on my skin. A-against my nipples when I move, or rubbing mm~my clit and slit when I walk. Going a size sma-smaller juuust maa~kes it more intense.");
			writeSpeech("player", "", "So in other words...");
			writeText("You let your hands pull back a bit as you say those words. Slowly and deliberately. Before you grab onto the sides of her suit and <i>yank</i> up, dragging the crotch of the suit along her cunt.");
			writeBig("images/swimmer/3b1.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "You've <i>always</i> been a little nympho.");
			writeText("She moans loudly, and you can see the puddle forming under her quickly as you continue pulling and pushing on the suit.");
			writeSpeech("player", "", "Don't you <b>dare</b> cum before I do. If you do, I'll have to punish you.");
			writeSpeech("swimmer", "", "Aaan~! Buu~But I'm already...");
			writeText("She must have been on the edge already, given how quickly she's ready to cum.");
			writeSpeech("swimmer", "", "Puh-Pleease? M-*Master?");
			writeText("You grab the middle of the suit in one hand and put another hand on her breast, flicking at her nipple. Then you yank up again, the material of the suit stretching and digging itself into her slit as the material stretches to its limit.");
			writeSpeech("player", "", "No, swimmerF. You don't seem to get it. You. Belong. To me.");
			writeBig("images/swimmer/3b2.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("You let go of her suit, moving your hand under the suit as you start to finger her.");
			writeSpeech("swimmer", "", "If... If you do that, then I'm going to... Please, I can... I can hold back if you just-");
			writeSpeech("player", "", "If I just what, swimmerF? Stop? No. I get to do what I want with you. And you...");
			writeText("You speed up.");
			writeBig("images/swimmer/3b3.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("player", "", "You just do as I command. You'll remember this feeling. Teetering right on the edge. In my hands. The moment right before the plunge. Hold back as much as you can. Let that pressure build. Don't you dare cum, slave.");
			writeBig("images/swimmer/3b4.jpg", "Art by Himitsu Kessha Vanitas");
			writeText("This isn't fair, but you need whatever you can get at this point. At your words, you feel her tense and redouble your efforts, pushing her far over the edge and spiralling into an intense orgasm.");
			writeSpeech("swimmer", "", "I do! I will! I'm sorry, *Master, I-");
			writeText("You keep fingering wildly. Fingers plunging into her cunt as you squeeze her tight against you. Just as she starts to wind down, you grab onto her suit and give it one last yank. Pulling the suit as high up as you can, digging it into her cunt and dragging strong against her clit.");
			writeBig("images/swimmer/3b5.jpg", "Art by Himitsu Kessha Vanitas");
			writeSpeech("swimmer", "", "Fuck! Fuck! Fuck! I caa~aan't stop! I'm sorry *Master! I'm sorry!");
			writeText("She slumps to the floor, her knees giving out under her as the aftershocks of her orgasms leave her a twitching mess.");
			writeSpeech("player", "", "I told you. You don't get it, swimmerF. coachF and sportsF never break character because there's no character to break. They're my slaves. Just like you.");
			writeText("swimmerF lets out a low moan at your feet as you stand over her.");
			writeSpeech("swimmer", "", "Y-yes, *Master. I... I understand now.");
			writeText("You really want to believe that. But you need to really make it sink in.");
			writeSpeech("player", "", "No. No you don't. Not yet. But I'll make sure you do. Now listen to me...");
			writeText("You work as quickly as you can. Here's hoping no one needs to use this room at any point soon. Luckily, she's already under and suggestable after her dicking.");
			writeSpeech("player", "", "You're  mine, you little nympho. And as such, I need to be sure to keep you in line. <i>You</i> need to learn some patience and self control. From now on, you won't be able to cum without my cock inside you. If you do well, who knows, I may remove that restriction. But for now, no matter how much you touch yourself, how close to the edge you get, you'll always be stuck on that cusp until you feel my cock enter you.");
			writeSpeech("swimmer", "", "B-but that's not... That's not fair.");
			writeSpeech("player", "", "This isn't about things being <i>fair</i>. When you saw me <b>break</b> sportsF, do you think she thought it was <b>fair</b>? No. I made her mine, and now I'll do the same for you. A week without cumming will probably be enough to break a weak willed nympho like you, don't you think?");
			writeSpeech("swimmer", "", "A whole week? I don't think I can-");
			writeSpeech("player", "", "I don't think so either, which is why I'm <b>ordering you. Focus, swimmerF.</b>");
			writeSpeech("swimmer", "", "Y-yes, *Master. I'll... I can do it.");
			writeSpeech("player", "", "You will not cum until I fill you with my cock. Touch yourself as much as you like. Use whatever toys you want. Ask swimmerF or coachF to help you. <i>No matter how much you try, you'll never cross that edge without your *Master's cock.</i> And when I finally decide to fill you, I'll teach you exactly what it means to belong to me, and why it's so much better to be a <i>good, obedient girl</i> as opposed to the bratty nympho you are now.");
			writeSpeech("swimmer", "", "I... I can do that *Master. I promise.");
			writeSpeech("player", "", "Good. We'll make a good girl of you yet. Now, get dressed. Keep your swimsuit on underneath your clothes, and leave after me when it seems clear. As you get dressed, and as you become more clear, let these last few commands just... <i>Slip</i> right out of you mind. You can spend all week trying to remember what you'll need to do to cum again. I'll be checking in on you throughout the week. Be sure to read and answer my texts.");
			writeFunction("changeLocation(data.player.location)", "She slowly starts to pull herself together as you start to work your way out the door.");
			updateMenu();
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
	{index: "swimmerphone1", trust: 40,},
	{index: "swimmerday1", trust: 50,},
	{index: "swimmerday2", trust: 51,},
	{index: "swimmerday3", trust: 52,},
	{index: "swimmerday4", trust: 53,},
	{index: "swimmerday5", trust: 54,},
	{index: "swimmerday6", trust: 55,},
	{index: "swimmerreward", trust: 60},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "swimmerreward": {
			writePhoneImage("images/swimmer/phoneReward.jpg", "Art by Himitsu Kessha Vanitas")
			writePhoneSpeech("SlackerSavior","scripts\gamefiles\characters\slacker.jpg","That's all for swimmerF for now! I'll be expanding on the students soonish.");
			break;
		}
		case "swimmerphone1": {
			setTrust('swimmer', 41)
			writePhoneSpeech("swimmer","","sportsF said she switched to a smaller swimsuit size, so I thought I'd change things up too!");
			writePhoneSpeech("swimmer","","It rubs some really sensitive spots. I'm surprised you can't see my nipples, they're rock hard in this thing.");
			writePhoneSpeech("player","","You already talked to sportsF about this stuff?");
			writePhoneSpeech("swimmer","","Duh. I haven't had a chance to talk to coachF yet, though. I don't have her number.");
			writePhoneSpeech("player","","Just.. Remember to keep this stuff quiet. I already got caught once, I don't want to get caught again.");
			writePhoneSpeech("swimmer","","I know, *Master! I'm very careful. All the time.");
			writePhoneSpeech("swimmer","","So when are you going to fuck me in this thing?");
			writePhoneSpeech("player","","Not at the school. I'm not risking that again.");
			writePhoneSpeech("swimmer","","Oooh! Come on, *Master! No risk is no fun!");
			writePhoneSpeech("player","","No. Have to come up with something else.");
			writePhoneSpeech("swimmer","","Oh! I may have an idea! Can you meet me in the park?");
			writePhoneSpeech("player","","... Fine.");
			writePhoneSpeech("swimmer","","Yeees! I can't wait!");
			break;
		}
		case "swimmerday1": {
			if (checkTrust('swimmer') == 50) {
				setTrust('swimmer', 51);
			}
			writePhoneSpeech("swimmer","","Did something weird happen at the pool yesterday?");
			writePhoneSpeech("swimmer","","I remember you touching me, and I think I came, but something's weird now.");
			writePhoneSpeech("player","","Oh? What's wrong?");
			writePhoneSpeech("swimmer","","Well, I got to thinking about it when I got home, and I was touching myself, but I just couldn't... You know. I couldn't cum.");
			writePhoneSpeech("player","","Oh, good, progress.");
			writePhoneSpeech("swimmer","","what");
			writePhoneSpeech("swimmer","","wait what");
			writePhoneSpeech("player","","Nothing serious. I just set some constraints on how you're able to actually finish. I thought it could be fun.");
			writePhoneSpeech("swimmer","","but");
			writePhoneSpeech("swimmer","","but I'm so horny. Come on, *Master... This isn't nice.");
			writePhoneSpeech("player","","Oh? Then you better figure out what I told you could make you cum. Maybe you could try some toys? A different hole? You could ask around for help, I'm sure coachF and sportsF would be willing to try to help you.");
			writePhoneSpeech("swimmer","","but I'm horny now! And i have class soon!");
			writePhoneSpeech("player","","Then you should get to class. Classes come first. You'll just have to try everything later.");
			writePhoneSpeech("swimmer","","uuughh");
			break;
		}
		case "swimmerday2": {
			if (checkTrust('swimmer') == 51) {
				setTrust('swimmer', 52);
			}
			writePhoneSpeech("swimmer","","I don't know what to dooo!");
			writePhoneSpeech("player","","Still having problems?");
			writePhoneSpeech("swimmer","","I thought for sure if thinking about sportsF I could at least get closer.");
			writePhoneSpeech("swimmer","","I touched myself all over, pulled my tits, pinched my nipples fingered myself like she had been laying down");
			writePhoneSpeech("swimmer","","screamed your name screamed out master begged you to take me and make me yours just like she did");
			writePhoneSpeech("swimmer","","got so cloooose. but just cant CUM. TELL MEEE");
			writePhoneSpeech("player","","You're barely even trying, swimmerF. Come on. You've done all that in person with me. I told you, you need to figure it out.");
			writePhoneSpeech("swimmer","","UUUGHH");
			writePhoneSpeech("swimmer","","I can't focus on classes like thiiis!");
			writePhoneSpeech("player","","If you need help with your classes, your friends can help you. They may even be able to help you with your current homework assignment...");
			writePhoneSpeech("swimmer","","FUCK I FORGOT I GOTTA GO");
			writePhoneSpeech("player","","Let me know how it goes.");
			break;
		}
		case "swimmerday3": {
			if (checkTrust('swimmer') == 52) {
				setTrust('swimmer', 53);
			}
			writePhoneSpeech("swimmer","","STILL NOT WORKING");
			writePhoneSpeech("sports","","Sorry, swimmerF. I tried.");
			writePhoneSpeech("player","","Oh? She finally took the hint. How did it go, swimmerF?");
			writePhoneSpeech("swimmer","","STILL CANT CUM I'M GONNA FUCKING EXPLODE PLEASE TELL ME WHAT I NEED TO DO");
			writePhoneSpeech("player","","Well, that's not helpful. sportsF, can you tell me what happened?");
			writePhoneSpeech("sports","","Of course, *Master. swimmerF talked to me yesterday before practice and told me... Well, kind of told me, she talked fast, and it was hard to follow, but from what I can gather, you made it so she can't cum unless she does something specific, and you didn't tell her what it was?");
			writePhoneSpeech("player","","That's more or less the idea, yeah.");
			writePhoneSpeech("sports","","Okay, so she came to me and asked me to help. Showed me her texts, and I figured what you were implying was that I should... Well, I should give her a hand.");
			writePhoneSpeech("sports","","So, I... Uhh... 'helped' her. I've never actually... You know, done this with a girl before, but I figured if you wanted me to, I'd do my very best! I'll be sure to look up videos and get better at this if it's something you'd like me to do more often, *Master.");
			writePhoneSpeech("swimmer","","if you tell me how I can cum, I'll give her the best videos I've found she'll be an expert lesbian I just NEEEED release PLEEEASE");
			writePhoneSpeech("player","","Like you wouldn't show her regardless. Anyways, continue, sportsF");
			writePhoneSpeech("sports","","Well, after we got started, I got to work on her. I didn't really know what I should be doing so I just tried doing things that I know I like. I ate her out, I played with her tits, gave her lots of kisses. I fingered her and had her suck on them while I ran my hands all over her. I even played with her asshole, but...");
			writePhoneSpeech("swimmer","","I JUST DON'T LIKE THINGS UP MY BUTT, OKAY?");
			writePhoneSpeech("sports","","I mean... Don't knock it 'till you've tried it. If you just relax and let it go deep it hits all the right spots. Trust me.");
			writePhoneSpeech("swimmer","","and people call me a pervert...");
			writePhoneSpeech("sports","","Well, you are. But yeah, sorry *Master. I tried everything I could think of, but no matter how close she got I could never make her cum. I even licked her all over. Like, top to bottom. She squirmed and loved it when I stuck my tongue in her belly button, and I thought she was going to squirt there and then, but that's the closest I got.");
			writePhoneSpeech("swimmer","","... I like how it felt, okay?");
			writePhoneSpeech("player","","Don't worry about it, sportsF. It's not your fault. You did the best you could. but tell me something, did swimmerF do anything for you during that whole time?");
			writePhoneSpeech("swimmer","","I was a little busy");
			writePhoneSpeech("sports","","Uhh. No, not really, I guess. She kissed me back when I kissed her, and sometimes would run her hands over me or lick me when I did the same to her, but other than that...");
			writePhoneSpeech("swimmer","","WELL IT'S NOT LIKE I'VE DONE THIS BEFORE EITHER");
			writePhoneSpeech("player","","That's very selfish of you, swimmerF. Maybe you should return the favor tonight, and make sportsF feel good too. And did you use any of your toys with her sportsF?");
			writePhoneSpeech("sports","","We used some little vibrators, but she thought all of my dildos were 'too big and scary' for much else.");
			writePhoneSpeech("swimmer","","SHE SHOWED ME HOW SHE COULD DEEPTHROAT A HORSE COCK DILDO, THAT'S TOO MUCH, I CAN'T DO THAT");
			writePhoneSpeech("sports","","I still have all the training ones, and I told you, it's not like I started being able to do that. You need to practice. Trust me, nothing is better than *Master's cock deep down your throat.");
			writePhoneSpeech("swimmer","","AND PEOPLE CALL ME A PERVERT");
			writePhoneSpeech("player","","Plug her up with some toys tonight and have her focus on your pleasure, sportsF. Maybe acting like a grateful good girl will help her out.");
			writePhoneSpeech("sports","","I can't wait *Master!");
			writePhoneSpeech("swimmer","","I BETTER FUCKING CUM");
			break;
		}
		case "swimmerday4": {
			if (checkTrust('swimmer') == 53) {
				setTrust('swimmer', 54);
			}
			writePhoneSpeech("swimmer","","I STILL HAVEN'T CUM YOU ASS");
			writePhoneSpeech("sports","","Well I did. A few times...");
			writePhoneSpeech("player","","Good night, then?");
			writePhoneSpeech("swimmer","","YES BUT ALSO NO");
			writePhoneSpeech("sports","","VERY yes.");
			writePhoneSpeech("player","","Tell me what you tried.");
			writePhoneSpeech("swimmer","","I ate her out I took her toys I tried eevverything I could! I just want to cuuum! I can't fucking think straight! I've been touching myself or touching sportsF nonstop for two days now, and I keep getting closer and closer but I just! Can't! CUM!");
			writePhoneSpeech("player","","That's not very specific, but I understand that you're frustrated, swimmerF. sportsF, can you be more descriptive?");
			writePhoneSpeech("sports","","Absolutely, *Master! She's in the shower now, anyways. She... Well, we didn't sleep much, but she stayed over at my place last night.");
			writePhoneSpeech("sports","","Anyways, we started more or less like we did yesterday, only instead of focusing on her, I tried to get her to focus on me. It was... Hard, honestly. She's really twitchy, and I don't think being endlessly horny has helped her focus, so... I... Uhm. I don't know if this is okay, but after a bit I kind of... Started to act like you. A bit? She kept getting distracted from licking my pussy and just touching herself and grumbling about how she couldn't cum so I...");
			writePhoneSpeech("player","","You...?");
			writePhoneSpeech("sports","","I... Kinda... Grabbed her head and forced her down. And then she got really into it and started squirming away. So, I uhhm wrapped my legs around her head so she couldn't get away.");
			writePhoneSpeech("sports","","It felt really good. Her head between my legs, her licking and sucking all over my slit. She couldn't get away and just had to take it. Mmm. That was the first time I came.");
			writePhoneSpeech("player","","Well done. I'm glad you liked it. What else did you do?");
			writePhoneSpeech("sports","","Well, after I came she still hadn't cum, so I got a couple of dildos and we worked on each other with those. It was a little weird,having to work around each other, but we eventually settled into a 69 kind of position and really got into the swing of things. It also meant I could... Well, kinda sit on her face and force her to lick me as we used the dildos too. I squirted all over her face when she got her tongue deep.");
			writePhoneSpeech("sports","","I think she liked how it tasted, she sure did try to lick it all up.");
			writePhoneSpeech("player","","Not bad at all. Anything else?");
			writePhoneSpeech("sports","","At that point it was pretty late, but swimmerF was desperate to cum. Still is, I guess. So I convinced her to use a small butt plug. It was a little hard to get her to relax, but once it was in I think she liked that too. Once her ass was plugged, I told her to keep fucking herself with the dildo and took the one I was using to her lips, pushing it in slowly and telling her to lick it clean. I thought maybe having all her holes filled could do it? And with how much she moaned and begged for more, I think I had the right idea, but it wasn't long before she was too tired to keep pumping herself, and I was basically just shoving my dildo in and out of her mouth for no reason. I was a little afraid I'd broken her, before I pulled it out and she started snoring.");
			writePhoneSpeech("sports","","I just let her sleep with the butt plug in her, and cuddled her before getting to sleep myself.");
			writePhoneSpeech("swimmer","","I HAD TO PULL IT OUT IN THE SHOWER, I HAD FORGOTTEN ABOUT THE PLUG");
			writePhoneSpeech("player","","And so, swimmerF, what do you think?");
			writePhoneSpeech("swimmer","","TOO HORNY TO THINK");
			writePhoneSpeech("sports","","I mean, it seemd like we were getting close. Maybe you can give her another hint, *Master?");
			writePhoneSpeech("swimmer","","I DON'T WANT A HINT, I WANT TO CUUUM");
			writePhoneSpeech("player","","Well, it doesn't seem like your fellow students are the answer. But being filled certainly seemed to do some good for you. Can you think of anything else I'd want from you?");
			writePhoneSpeech("swimmer","","ME TO LOSE MY MIND");
			writePhoneSpeech("sports","","I mean... That does seem about right. I know you like your slaves submitting and obeying. And you did recommend she talk to coachF too. Maybe she should try submitting to coachF?");
			writePhoneSpeech("player","","That's a very good guess, sportsF. Good girl. What do you think swimmerF?");
			writePhoneSpeech("swimmer","","FINE THIS BETTER WORK");
			writePhoneSpeech("player","","No promises. Thanks for your help, sportsF. Feel free to use her anytime. If she manages to figure this out, next time she may even cum for you.");
			writePhoneSpeech("sports","","That sounds great, *Master! Thank you! See you later?");
			writePhoneSpeech("swimmer","","GET OFF GROUP CHAT FOR YOUR FLIRTING IF I CAN'T CUM TO THE SEXTING THAT WILL INEVITABLY HAPPEN");
			break;
		}
		case "swimmerday5": {
			if (checkTrust('swimmer') == 54) {
				setTrust('swimmer', 55);
			}
			writePhoneSpeech("swimmer","","I will do literally anything. Please just let me cum.");
			writePhoneSpeech("player","","How did it go.");
			writePhoneSpeech("swimmer","","I don't want to talk about it, I just want to CUM");
			writePhoneSpeech("coach","","spank* THAT, young lady, is not how we talk to our *Master, now is it?");
			writePhoneSpeech("swimmer","","Ow! Thank you Mistress! No, Mistress! Sorry, *Master!");
			writePhoneSpeech("player","","Well now, that's interesting.");
			if (checkTrust('scarf') == 100) 
				{writePhoneSpeech("coach","","I've been talking to scarfF lately about hypnosis, and I think the lessons are going well.");}
			else 
				{writePhoneSpeech("coach","","I've been doing some research into hypnosis, and I think the it's been paying off.");}
			writePhoneSpeech("coach","","Honestly, you've done most of the heavy lifting, I just put a little trigger in for a nice spank* when she misbehaves.");
			writePhoneSpeech("swimmer","","Mmf. Thank you Mistress.");
			writePhoneSpeech("coach","","Oh, and of course she'll thank you whenever you spank her. After all, a good girl should be thankful for the attention.  The trigger is spank with the asterick after for text, and if you just say spank and snap in person she'll feel it without having to lift a finger. And I don't doubt after last night, the feeling of a good spank* has her near gushing.");
			writePhoneSpeech("swimmer","","Mmm. Thank you Mistress. But my butt is so sore. You didn't have to spank me that much to make it sink in, you know.");
			writePhoneSpeech("coach","","Of course I didn't. I just liked spank*ing your tight little ass so much I couldn't help myself.");
			writePhoneSpeech("swimmer","","Thank you Mistress. But this still isn't fair!");
			writePhoneSpeech("player","","And Mistress?");
			writePhoneSpeech("coach","","Not for you, *Master. To you, I'm still just a worthless slut if you like. But to the girls who need some discipline? Or need a guiding hand? Well, I was a hardass before, and let me tell you, no one knows how to make someone enjoy being disciplined like a true masochist at heart. I know all the little things that can make. Them. So. Desperate. For just one more touch.");
			writePhoneSpeech("player","","Well done slut. Now, swimmerF. Let's try this again. How did last night go?");
			writePhoneSpeech("swimmer","","It... Well, I still haven't cum, in case that wasn't obvious. coachF... I mean, Mistress coachL decided the thing that I probably needed was to learn my place, and that would make me able to cum. So she made me submit to her, and did a lot of work with the hypnosis stuff trying to make me cum. And spanking me. A lot.");
			writePhoneSpeech("player","","She wasn't far off, honestly. Though, I didn't know that she had been dabbling with hypnosis, so taking her under wasn't the thing to do. Another night with Mistress coachL may just enlighten you to exactly what you need to cum.");
			writePhoneSpeech("coach","","Oh, don't worry, *Master. I know exactly what this nymp needs to cum. And another night with her I'm sure would be EXTREMELY good for her behavior, and her health. What do you think, swimmerF?");
			writePhoneSpeech("swimmer","","I don't know if I can take another night, coachF");
			writePhoneSpeech("swimmer","","Mistress coachL!");
			writePhoneSpeech("player","","spank*");
			writePhoneSpeech("coach","","spank*");
			writePhoneSpeech("swimmer","","FUCK! THANK YOU MASTER MISTRESS!");
			writePhoneSpeech("coach","","Meet me after practice tonight. I won't shower. You'll be cleaning me with that dirty mouth of yours.");
			writePhoneSpeech("swimmer","","I just want to cum, please.");
			writePhoneSpeech("player","","It won't be long now, swimmerF. At this rate, you may figure it out in a day or two.");
			writePhoneSpeech("swimmer","","I never should have gone into your office.");
			writePhoneSpeech("player","","spank* Trust me, it'll all be worth it. Now get to class, and don't be late after practice. coachF will need you to clean every inch of her, I'm sure.");
			writePhoneSpeech("swimmer","","Thank you *Master, and yes *Master");
			break;
		}
		case "swimmerday6": {
			if (checkTrust('swimmer') == 55) {
				setTrust('swimmer', 56);
			}
			writePhoneSpeech("swimmer","","please tell me what i need to do i cant keep going on like this");
			writePhoneSpeech("coach","","Oh, I don't know about that, swimmerF, you did plenty well yesterday. I'm sure you could have a wonderful life as a desperate little tongue bath for the volleyball team.");
			writePhoneSpeech("swimmer","","she made me clean her up and down i licked every inch of skin and sucked every piece of her i could i begged i pleaded i stuck my fingers in every hole mine and hers but she didnt let me use my hands any more so i stuck my tongue in every hole before she started touching me and pleasepleaseplease i did what i was told i cleaned mistress i cleaned sportsF i promised to let them do whatever they want im begging you to do whatever you want as long as you let me cum");
			writePhoneSpeech("coach","","Very good girl.");
			writePhoneSpeech("swimmer","","thank you mistress did you need anything else is there any way i can please you or master if you just let me cum id do anything i just need to cumcumcum pleasepleaseplease");
			writePhoneSpeech("coach","","Don't worry, swimmerF, I told you I knew exactly what needed to happen to make you cum, didn't I?");
			writePhoneSpeech("player","","Wow, coachF. Are you sure she's okay?");
			writePhoneSpeech("coach","","She's perfectly fine, *Master. Isn't that right, swimmerF?");
			writePhoneSpeech("swimmer","","im perfectly fine master dont worry i just neeed to cum i need it so bad please tell me how i can cum master please tell me mistress i dont know what to do and cant take the edge anymore i just want to cum so bad");
			writePhoneSpeech("coach","","See, she's doing great. She's just cock starved. Isn't that right, *Master? That's all she needs to make her cum. *Master's hard cock, deep inside every one of her little nympho holes. Just thinking about it, what does that make our nympho feel?");
			writePhoneSpeech("swimmer","","masters cock i need it i need it i need it please master fuck me and make me cum i know you can i know you will please");
			writePhoneSpeech("coach","","It was really obvious, honestly, as soon as I put her under the first time she was begging for your cock, and I figured that's probably what you did, but I thought I may as well have a little fun for a couple days. And we did have fun, didn't we swimmerF?");
			writePhoneSpeech("swimmer","","so much fun i loved every second mistress may i lick you clean again");
			writePhoneSpeech("coach","","Of course you can. But not tonight. Tonight, I'm sure *Master would just LOVE to show you why you've been so pent up lately. I think she's ready.");
			writePhoneSpeech("player","","You've done better than I had hoped, coachF. Meet me tonight at the pool changing room, swimmerF. If you're a good girl and show you've learned you place, then I'll be sure to reward you.");
			writePhoneSpeech("swimmer","","will");
			writePhoneSpeech("swimmer","","will master finally let me cum?");
			writePhoneSpeech("player","","spank* if you've truly learned your lesson and behave like a good girl tonight, I'll make you cum harder than you've ever cum before in your life.");
			writePhoneSpeech("swimmer","","THANK YOU MASTER THANKYOUTHANKYOU ILL BE THERE I PROMISE");
			writePhoneSpeech("player","","spank* not yet. First you have classes. I'll be sure to tell sportsF to make sure you're there and paying attention.");
			writePhoneSpeech("swimmer","","THANK YOU MASTER OF COURSE MASTER ILL SEE YOU TONIGHT!");
			writePhoneSpeech("coach","","Fuu~uck that's so hot. Mm, I cannot wait to do this with more girls. Seeing her lick sportsF's asshole clean was the hardest I've cum since... Well, when did you last fuck me? I guess not that long all things considered, but damn if it wasn't good.");
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