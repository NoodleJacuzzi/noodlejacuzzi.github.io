var character = {index: "mistress", met: false, fName: "Anna", lName: "Fletcher", trust: 0, encountered: false, textEvent: "", textColor: "#ed9082",};

//General tutorial stuff:
//writeText("text"); - Writes some plain old text.
//writeSpeech("character", "image", "dialogue") - Writes some dialogue. Leave "image" blank to find the appropriate image and name automatically.

var logbook = { //Logbook details for each character.
	index: "mistress", 
	desc: "A fairly rich young woman that has her maid handle taking care of her.",
	body: "Her relaxed lifestyle has her a bit more plump than most, which her custom-cut outfits seem to highlight quite well.",
	clothes: "She generally prefers clothes with colors that match her hair or complexion.",
	home: "She lives at the top of a particularly large complex near the Park District.",
	tags: "Public Sex, FFM Threesome",
	artist: "Artist: Oreteki18kin",
	author: "Captain Cryptogreek",
};

var newItems = [//Lists the shop items unique to this character
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "mistress1", name: "A woman a bit off of the main path seems to be looking around carefully.", location: 'parkDistrict', time: "MorningEvening", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "even",},
	{index: "mistress2", name: "mistress is sitting on a nearby bench, humming to herself.", location: 'parkDistrict', time: "Morning", itemReq: "", trustMin: 40, trustMax: 40, type: "tab", top: 0, left: 0, day: "even",},
	{index: "mistress2", name: "mistress is sitting on a nearby bench, humming to herself.", location: 'parkDistrict', time: "Evening", itemReq: "", trustMin: 40, trustMax: 40, type: "tab", top: 0, left: 0, day: "even",},
	{index: "mistress3", name: "mistress is sitting at the same bench, smiling and humming.", location: 'parkDistrict', time: "Morning", itemReq: "", trustMin: 41, trustMax: 41, type: "tab", top: 0, left: 0, day: "even",},
	{index: "mistress3", name: "mistress is sitting at the same bench, smiling and humming.", location: 'parkDistrict', time: "Evening", itemReq: "", trustMin: 41, trustMax: 41, type: "tab", top: 0, left: 0, day: "even",},
]

function writeEncounter(name) { //Plays the actual encounter.
	wrapper.scrollTop = 0;
	switch (name) {
		case "mistress1" : {//Introduce Mistress as being lost (she's actually an exhibitionist)
			document.getElementById('output').innerHTML = '';
			writeText("From the looks of it, it seems like she might be lost...? She's looking around the area quite a bit but, after a moment, she spots you.");
			writeBig("images/mistress/1-1.jpg", "Art by Oreteki18kin");
			writeSpeech("???","images/mistress/mistress.jpg","O-Oh! Hello there!");
			writeText("She very nearly trips over one of the branches, but keeps her balance... despite the two<i> very</i> clear challenges to it.");
			writeText("She moves away from the few of the trees, looking more than a bit embarrassed as she brushes at her coat.");
			writeFunction("writeEncounter('mistress1a')", "Ask if she's lost");
			writeFunction("changeLocation(data.player.location)", "Nod politely to her and leave");
			break;
		}
		case "mistress1a" : {
			document.getElementById('output').innerHTML = '';
			writeSpeech("player","","Did you get turned around or something?");
			writeText("She looks confused for a second, but quickly nods.");
			writeSpeech("???","images/mistress/mistress.jpg","Y-Yeah... I just got a little lost, that's all!");
			writeText("She finishes brushing herself off, smiling as she offers her hand.");
			writeSpeech("mistress","","I'm "+fName('mistress')+" "+lName('mistress')+". It's a pleasure!");
			writeText("You shake her hand, noting that it's a little warm as she seems to blush a bit.");
			writeSpeech("player","",data.player.name+", and the pleasure's mine. If you're looking to head out to Main, just follow the path and take the first left.");
			writeText("Her smile widens as she nods softly.");
			writeSpeech("mistress","","Huh. Guess I wasn't as far from the path as I thought. You must come by this path a lot!");
			writeSpeech("player","","Er... Not a lot, but I've walked by a few times.");
			writeText("You shift in place a bit, before "+fName('mistress')+" seems to notice... something.");
			writeSpeech("mistress","","Ah, sorry! I've got to get going. Thanks for the help, "+data.player.name+"!");
			writeText("She quickly darts down the path, leaving you alone.");
			writeText("That was... something. It doesn't actually seem like she got lost, but...");
			writeText("Well, it's not like it's your business right now. You could probably ask her about it, though, if you see her again.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			setTrust('mistress', 40);
			passTime();
			break;
		}
		case "mistress2" : {//Meet Mistress in the woods again, she invites you over and gives you a blowie
			document.getElementById('output').innerHTML = '';
			writeText("As you start to approach, her eyes lock onto you almost immediately.");
			writeText("She stands, smiling as she starts to blush.");
			writeBig("images/mistress/1-2.jpg", "Art by Oreteki18kin");
			writeSpeech("player","","Not lost this time, then?");
			writeSpeech("mistress","","Not this time. Thanks again, by the way!");
			writeText("She sits back down, patting the open spot on the bench beside her.");
			writeSpeech("mistress","","Just standing around is a bit boring, so if you'd like to chat?");
			writeSpeech("player","","I'm not sure I'll be that exciting, but I'd be happy to talk.");
			writeText("...");
			writeText("The two of you chat for a little while. You don't learn a lot, aside from the fact that she's from a rather wealthy family, until...");
			writeSpeech("player","","No offense meant, but... How did you get lost last time? This isn't exactly the largest of parks.");
			writeText("Her face gets even redder as she leans back a little bit.");
			writeSpeech("mistress","","Hm... Well, it's not <i>really</i> that I got lost, per se... It's a little hard to explain carefully, but if you're okay with a bit of bluntness...");
			writeText("She gently grabs your hand, carefully raising it up...");
			writeText("And pressing it against her breast, the soft material of the coat not quite thick enough to hide what she's trying to show you.");
			writeSpeech("player","","No bra, huh?");
			writeSpeech("mistress","","Just stockings. No bra, no panties.");
			writeText("She smiles wide, taking in your expression as you feel her other hand trace along your thigh.");
			writeSpeech("mistress","","I didn't think anyone would come along. When I heard you coming... Well, there's a reason I said <i>standing around</i> is boring. Now, my place is pretty close so, in continuing to be blunt, let me ask...");
			writeText("She leans a bit closer to your ear.");
			writeSpeech("mistress","","<i>Would you be willing to spend some more time with a <b>pervert</b> like me?</i>");
			raiseTrust('mistress', 1);
			passTime();
			writeFunction("writeEvent('mistress1')", "Let her lead the way");
			break;
		}
		case "mistress3" : {
			passTime();
			document.getElementById('output').innerHTML = '';
			writeText("Spotting you, she smiles, gesturing for you to take the seat next to her.");
			if(data.player.time == "Morning"){
				writeSpeech("mistress","","Good morning, playerF! How are you?");
			}
			else if(data.player.time == "Evening"){
				writeSpeech("mistress","","Good evening, playerF! How are you?");
			}
			writeText("You sit right beside her, your hips just barely touching.");
			writeSpeech("player","","Pretty good. How about you? Sounds like your... <i>sore throat</i> is doing better.");
			writeText("Her face goes a little red as you see her thighs rub together a bit.");
			writeSpeech("mistress","","It is, yes. Thanks for helping me clean up, by the way! It wouldn't have felt right to leave it my maid, and I don't think I would've finished up before she got home without you.");
			writeText("She gives you a quick peck on the cheek.");
			writeSpeech("player","","No problem - I was probably the messier of us anyway.");
			writeSpeech("mistress","","Maybe, but that <i>was</i> the most fun part.");
			writeText("She leans against your shoulder.");
			writeSpeech("mistress","","...I still totally got caught, though. Once she asked why I was so quiet, I had to tell her - I didn't want her worrying that I was sick!");
			writeSpeech("player","","Did she learn about the whole public-nudity thing?");
			writeText("She laughs, lightly slapping your thigh.");
			writeSpeech("mistress","","It's not <i>public nudity</i> if I have my <i>coat</i> on, playerF. Besides, she already knew about that; she just wanted to know about what kind of guy I found.");
			writeSpeech("player","","Was she worried?");
			if(checkTrust('maid') > 20)
				writeSpeech("mistress","","Mm, not really. I'm not the only one that's found a guy recently - she told me she brought a guy home just a little while ago. Sounds like she had some fun, too...");
			else
				writeSpeech("mistress","","A bit, but we trust each other. Additionally, not to <i>gossip</i>, but I'm half-sure she's been looking for a guy lately anyway. Enough about her, though...");
			writeText("Her finger traces along her coat, pressing down just enough to make it clear what she isn't wearing again.");
			writeSpeech("mistress","","How about the two of us head back to my place and have some fun of our own?");
			writeFunction("writeEvent('mistress2')", "Take this back to her place");
			if(checkTrust('maid') > 20)
				writeFunction("writeEncounter('mistress3b')", "You mentioned a maid?");
			break;
		}
		case "mistress3aa" : {
			document.getElementById('output').innerHTML = '';
			writeText("Patience is a virtue and, as funny as it would be to leave a cock-print on her glass table, that probably wouldn't be the most reasonable thing to do.");
			writeText("She comes in soon after, looking a bit excited as she toys with her shirt.");
			writeBig("images/mistress/3-1.jpg");
			writeSpeech("player","","Those look familiar.");
			writeSpeech("mistress","","Yeah, they're the same ones as last time. Given how much you <i>painted</i> these last time, I know they can handle a bit of fun! Speaking thereof...");
			writeEncounter("mistress3c");
			break;
		}
		case "mistress3ab" : {
			document.getElementById('output').innerHTML = '';
			writeText("Given that it's the only reasonable choice, you swiftly remove your clothing and toss them to the couch, waiting until you hear mistressF's footsteps before striking a pose.");
			writeText("When she walks in, she pauses, a look of pleasant amusement playing across her face.");
			writeBig("images/mistress/3-1.jpg");
			writeSpeech("mistress","","I didn't realize there was an <i>un</i>-dress code.");
			writeEncounter("mistress3c");
			break;
		}
		case "mistress3b" : {
			document.getElementById('output').innerHTML = '';
			setTrust('mistress', 42);
			writeSpeech("player","","This might be a weird question, but you mentioned a maid. Her name wouldn't happen to be maidF, would it?");
			writeText("Her eyes widen in surprise.");
			writeSpeech("mistress","","You know her?");
			writeSpeech("player","","Yeah. We met in the shopping district, and we... hit it off, I suppose.");
			if(data.player.gender == "Man")
				writeSpeech("mistress","","Huh. I can hardly believe that we both took the same man home...");
			else
				writeSpeech("mistress","","Huh. I can hardly believe that we both took the same woman home...");
			writeText("She shakes her head with a small laugh.");
			writeSpeech("mistress","","I suppose it must've been the angle, but I didn't recognize <i>that part of you</i> in the video. It was <i>very</i> nice, by the way.");
			writeSpeech("player","","Thanks. Funny enough, you asked if I did porn, didn't you?");
			writeSpeech("mistress","","I did... And now, I'm wishing I'd had you record our fun last time. A shame...");
			writeSpeech("player","","Well, there's always next time.");
			writeText("You feel her grab your hand, pulling it onto her thigh.");
			writeSpeech("mistress","","How about we make that <i>'next time'</i> into <i><b>'now'?</b></i> I'd like to send her a video that's just as much of a turn-on as the one she sent me~!");
			writeFunction("writeEvent('mistress3')", "Take this back to her place");
			break;
		}
		case "mistress3c" : {
			writeText("Raising her skirt, she winks as she shows off her pussy.");
			writeText("She uses her free hand to tease at her lips, spreading herself out for you.");
			writeSpeech("mistress","","I'm not over-dressed, am I?");
			writeSpeech("player","","I think it's a perfect fit.");
			if(data.player.gender == "Man")
				writeSpeech("mistress","","Well, aren't you just the perfect gentleman?");
			else
				writeSpeech("mistress","","Well, aren't you just the perfect gentlewoman?");
			writeText("She walks up to you, her fingertip moving to brush gently up your cock, pausing at your head.");
			if(checkTrust('mistress')==42)
				writeSpeech("mistress","","You're just raring to go, aren't you? Let's not keep the audience waiting then, playerF~!");
			else
				writeSpeech("mistress","","Mm... Looks like you're not the type to keep a lady waiting, playerF~! Are you ready to get to it?");
			writeSpeech("player","","I'm ready when you are, mistressF.");
			writeText("...");
			writeText("mistressF looks up at you with a grin, reassuring you by saying,");
			writeSpeech("mistress","","The table is <i>very</i> sturdy, I promise!");
			writeBig("images/mistress/3-2.jpg");
			writeText("She rolls her hips around a bit, almost pushing your cockhead fully into her.");
			writeText("She lets out a small moan as she saws against your head, focusing on its shape.");
			writeSpeech("player","","You'd better be ready...!");
			writeText("You push forward, the wet, sloppy sound of your cock spreading mistressF open drowned out by her throaty moans.");
			writeSpeech("mistress","","Ooohh <i>God...!</i> A dick like this just isn't <i>fair</i>...~!");
			writeText("You have to slow down almost immediately as she squeezes.");
			writeSpeech("player","","Says the lady with a pussy like a vise...!");
			writeText("She takes a few slow, deep breaths as she starts relaxing.");
			writeSpeech("mistress","","playerF?");
			writeSpeech("player","","Yeah?");
			writeSpeech("mistress","","<i>I want you to <b>fuck me up~!</b></i>");
			writeText("You carefully line yourself up, getting ready to <i>slam</i> into her.");
			writeBig("images/mistress/3-3.jpg");
			writeSpeech("mistress","","<i>OOOoooHHH <b><font size='+2'>FUCK</font> YES~!</b></i>");
			writeText("Her hands go up to her tits, grasping at them wildly as she starts squealing with every thrust.");
			writeText("You can feel yourself churning up her insides with every thrust, her folds hugging you tightly as you pound her.");
			writeSpeech("mistress","","<i>It's like you're tearing me apart~!</i>");
			writeText("She starts massaging her breasts like she's trying to milk them, even bringing one to her own mouth.");
			writeText("You watch her gently bite down and moan as you feel your climax building up.");
			writeSpeech("player","","I'm almost...!");
			writeText("Her breast flops away from her mouth as she moans.");
			writeSpeech("mistress","","D-Do it! I wanna cum at the same time~!");
			writeText("Speeding up even more, you slam your hips down against her ass, until...!");
			writeBig("images/mistress/3-4.jpg");
			writeText("An almost-screamed, wordless moan tears out of her mouth as you paint her insides, firing a massive load deep inside.");
			writeText("Some of your jizz spills out all over her, splattering across her face and staining her clothes.");
			writeText("Her pussy twitches around you, milking out every drop it can before you pull out with a wet <b>*POP*</b>.");
			writeText("You take a step back and, without your legs supporting her, she flops down onto the couch, your cum squirting out across it as she goes limp.");
			writeSpeech("mistress","","<i>F-Fuuuuuck...</i>");
			writeText("Her dopey, fucked-stupid voice rings out as she lays there.");
			writeText("It's a few minutes before she recovers enough to speak.");
			writeText("Still smiling widely, she manages to sit up, her fingers scraping up a bit of your cum.");
			writeSpeech("mistress","","Thanks, playerF~! I've been pretty pent up lately, and you've been <i>perfect.</i>");
			writeSpeech("player","","The pleasure's <i>literally</i> minte. If you ever need a reliable booty-call, I'm happy to help out.");
			writeSpeech("mistress","","I might just have to take you up on that... But for now, I think I'll just shower and relax for a bit.");
			writeText("She stands up slowly, her legs a little wobbly as she gives you a kiss on the cheek.");
			writeText("A moment later, she brings the cum on her fingers to her mouth, lapping it up with a wink.");
			writeSpeech("mistress","","You taste better this time - I wonder if it'll be even better next time?");
			writeText("She walks away, leaving you alone in the room.");
			writeFunction("changeLocation(data.player.location)", "Put some clothes on and head out");
			break;
		}
	}
}

var eventArray = [ //Lists the events of the character for unlocking and replaying in the gallery.
	{index: "mistress1", name: "Penthouse Blowies"},
	{index: "mistress2", name: "Mating Press"},
	{index: "mistress3", name: "Mating Press - Video for the Maid"},
];

function writeEvent(name) { //Plays the actual event.
	wrapper.scrollTop = 0;
	switch (name) {
		case "mistress1" : {
			document.getElementById('output').innerHTML = '';
			writeText("After arriving at her place, she shows you the living room for a few seconds before smiling almost nervously.");
			writeSpeech("mistress","","Just one sec - gotta make sure nobody else is home!");
			writeText("She darts off, the sound of doors rapidly opening and shutting ringing out for a minute, before... silence.");
			writeText("It doesn't last long, though, before she comes out again, though in a separate outfit.");
			writeBig("images/mistress/profile.jpg", "Art by Oreteki18kin");
			writeSpeech("mistress","","The coat stains a bit too easily.");
			writeText("With that, she sits down on the couch and, with all of your knowledge of hypnotic counseling and sexual experience, it becomes clear...");
			writeText("She has absolutely no idea what to do at this point.");
			writeSpeech("player","","So, no offense meant, but... Is this your first time taking someone home?");
			writeText("She flushes.");
			writeSpeech("mistress","","In my defense, I was really, <i>really</i> turned on.");
			writeSpeech("player","","It's fine, don't worry about it. If you need to take some time to just relax a bit, just take it. It's not like getting a little stiff ever killed anyone.");
			writeText("Plus, with your abilities, you're not exactly strapped for potential partners...");
			writeText("Hearing what you said, though, "+fName('mistress')+" seems to relax a bit, breathing a bit slower.");
			writeText("She seems to wait a few seconds, then a few more, before finally speaking.");
			writeSpeech("mistress","","I want you in my throat.");
			writeSpeech("player","","...Well, I'm not gonna say <i>no,</i> but isn't that a little-");
			writeSpeech("mistress","","You seem nice, "+data.player.name+", and I like that. But I'm <i>really</i> turned on, and the guys in porn are usually less, 'We'll go at your pace' and more, '<i><b>Don't wear a choker you'd like unbroken.</b></i>'");
			writeSpeech("mistress","","...Unrelated note, I need to buy a choker.");
			writeText("She takes another slow, deep breath.");
			writeSpeech("mistress","","The point is, I don't know how to talk to you, but I would like to press my nose against your pelvis.");
			writeSpeech("player","","...So, you want me to take the lead?");
			writeSpeech("mistress","","<i>Yes please.</i>");
			writeText("You promptly stand up, moving in front of her.");
			writeText("You were absolutely willing to wait for her to be ready but, after hearing her say all that?");
			writeBig("images/mistress/2-1.jpg");
			writeSpeech("mistress","","...You could do porn.");
			writeText("She pauses.");
			writeSpeech("mistress","","Actually, do you do porn? Because that would be-");
			writeText("You gently place your hands on the back of her head, casually reminding her,");
			writeSpeech("player","","You said you wanted me in your throat.");
			writeBig("images/mistress/2-2.jpg");
			writeText("You pull her mouth onto your cock, a muffled moan coming out of "+fName('mistress')+" as her tongue touches your tip.");
			writeText("You're not able to pull her very deep but her <i>enthusiasm</i> makes up for it.");
			writeText("When you're not pulling her down as deep as she can take it, she's bobbing up and down, twisting her head around as she sucks.");
			writeText("Despite the wild, almost pornographic movements, she never breaks eye contact.");
			writeSpeech("player","","Fuck... You're doing great, " +fName('mistress')+"...");
			writeText("After a few seconds, she pulls her head off of you, jerking you off as she smiles.");
			writeText("You expect her to speak but, instead, she lowers her head.");
			writeText("She angles her grip on you, her hands slowing down as she carefully drags her tongue from your balls all the way to the tip.");
			writeText("She licks all around the head for several seconds, jerking you off faster, and faster...");
			writeText("Then, with a wink, she pulls her hands away, wraps her mouth around your head, and takes you as deep as she can.");
			writeSpeech("player","","Holy shit... Just how much porn do you watch...?");
			writeText("You can feel her laugh a little as she tries (and fails) to take you into her throat.");
			writeSpeech("player","","Well, if you've seen a lot, then you <i>have</i> to know what's next.");
			writeText("She pauses, her hands moving to stabilize herself as you grab the back of her head tightly.");
			writeBig("images/mistress/2-3.jpg", "Art by Oreteki18kin");
			writeText("You slam her down hard and fast, pounding at the entrance to her throat with every thrust, the sounds of your cock fucking her mouth almost as loud as her moans around your length.");
			writeText("As you start to approach your limit, you put even more force behind your thrusts, slamming your hips forward until you feel her hands grabbing your thighs.");
			writeText("You start to slow down, in case you were getting to be a bit too much, when she <b>pulls.</b>");
			writeSpeech("player","","<i><b>Fucking Hell...!</b></i>");
			writeText("She pulls you into her throat, the tightness almost overwhelming you as she finally presses her nose to your pelvis.");
			writeText("Small tears are forming in her eyes, but the message is clear.");
			writeText("You start thrusting your hips against her mouth, the tip of your cock sliding out of, and back into her throat with every thrust.");
			writeText("After less than thirty seconds of this, you can feel yourself reaching your limit.");
			writeText("You pull your hands away from her head just in case before cumming.");
			writeSpeech("mistress","","<font size='+2'><i><b>M-MFPH!?</b></i></font>");
			writeText("Your cock slides out of her throat with the first spurt, before the entirety of your cock pops out and you jizz onto her face.");
			writeText("She almost coughs a few times but quickly regains her composure, her hands going between her legs as her chest heaves with each breath.");
			writeText("Slowly, she looks back up to you, opening her mouth.");
			writeBig("images/mistress/2-4.jpg", "Art by Oreteki18kin");
			writeText("She swirls it around her mouth for a few seconds before closing it, swallowing with a small grimace.");
			writeSpeech("player","","...Bitter?");
			writeText("She nods, pressing her hand gently to her throat.");
			writeSpeech("player","","Sorry. I, uh... got a little carried away.");
			writeText("Her eyes widen. Shaking her head, she stands up quickly and leans in.");
			writeSpeech("mistress","","<font size='-1'><i>I loved it...</i></font>");
			writeText("She smiles gently as she leans back, giving a half-firm nod.");
			writeText("After, though, she makes an almost-sweeping-motion, like a brush, and points to the door.");
			writeText("Being an expert in sexual sign language, you ignore her way of saying that she'll handle clean-up. Between the both of you, you get finished far faster, and it gives her a chance to wash her face.");
			writeText("Just before you exit the apartment, you feel her pull on your shirt gently.");
			writeText("Her lips just barely brush against your cheek before you're pushed all the way through the door, "+fName('mistress')+" winking as she shuts it behind her.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			//data.story[6].trust = 100;

			break;
		}
		case "mistress2" : {
			if(checkTrust('mistress') == 41)
				setTrust('mistress',43);
			document.getElementById('output').innerHTML = '';
			writeSpeech("player","","Lead the way.");
			writeText("She smiles, standing gracefully as she starts to walk, a <i>very</i> clear sway in her hips...");
			writeText("...");
			writeText("When you get to her place, she goes to change out of her still-too-easily-stained coat (which just makes you want to <i>really</i> stain it later), leaving you with a bottle of water.");
			writeText("She won't be more than a minute, but...");
			writeFunction("writeEncounter('mistress3aa')", "Sit and wait patiently");
			writeFunction("writeEncounter('mistress3ab')", "Strip and stand naked in the middle of the room");
			break;
		}
		case "mistress3" : {
			document.getElementById('output').innerHTML = '';
			writeSpeech("player","","Lead the way.");
			writeText("She smiles, standing gracefully as she starts to walk, a <i>very</i> clear sway in her hips...");
			writeText("...");
			writeText("When you arrive at her place, she asks you to give her a minute to change out of her still-too-easily-stained coat (which just makes you want to <i>really</i> stain it later).");
			writeText("When she comes back a few minutes later, she smiles widely, clearly holding something behind her back.");
			writeBig("images/mistress/3-1.jpg");
			writeSpeech("mistress","","Sorry, took me longer than I expected to find it!");
			writeSpeech("player","","...It?");
			writeText("Pulling out the object, you see something that looks like it's designed to clamp down and hold something steady.");
			writeSpeech("mistress","","The camera was a little shaky when you took the video, given that maidF's tits were milking a load out of you at the time, so I thought this might help!");
			writeText("She quickly mounts it to the table, almost like she's done it before, and nods.");
			writeSpeech("mistress","","This way, maidF will get to see you <i>pound me</i> from a nice angle~!");
			writeSpeech("player","","I like it. Mounting it on the table might make it a bit weird to record though, won't it?");
			writeText("You look over the placement, seeing that the only place that you two could fuck and still be on-camera is the couch... which would end up mostly just recording your back, or hers if she rode you.");
			writeSpeech("mistress","","Don't worry about that~! I have an <i>idea...!</i>");
			writeText("...");
			writeText("mistressF looks up at you with a grin, reassuring you by saying,");
			writeSpeech("mistress","","The table is <i>very</i> sturdy, I promise!");
			writeBig("images/mistress/3-2.jpg");
			writeText("She rolls her hips around a bit, almost pushing your cockhead fully into her.");
			writeText("She lets out a small moan as she saws against your head, focusing on its shape.");
			writeSpeech("mistress","","A-Almost...~! It'll start recording in just a few seconds!");
			writeText("Despite the powerful urge to buck forward, you wait...");
			writeSpeech("mistress","","...There we go~!");
			writeText("She smiles at the camera, winking.");
			writeSpeech("mistress","","Hi, maidF! I <i>really</i> liked that video, so me and playerF decided to make our own~! <i>Enjoy!</i>");
			writeText("She turns away from the camera, locking eyes with you.");
			writeSpeech("mistress","","playerF... I want you to <b>fuck me up~</b>");
			writeSpeech("player","","You asked for it.");
			writeText("Lining yourself up, you push your hips forward and slide your cockhead into her pussy, a slow, drawn-out moan spilling from mistressF's mouth.");
			writeSpeech("mistress","","Ooohh <i>God...!</i> A dick like this just isn't <i>fair...~!</i>");
			writeText("Her hands move up, one groping her breasts and the other toying with her clit.");
			writeSpeech("player","","Get ready...!");
			writeText("Angling your hips down, you <i>slam</i> your hips forward, guttural moans filling the room almost as much as the wet slapping of her ass against your pelvis.");
			writeBig("images/mistress/3-3.jpg");
			writeSpeech("mistress","","<i>OOOoooHHH <b><font size='+2'>FUCK</font> YES~!</b></i>");
			writeText("She leans her head back just a bit, looking directly at your phone.");
			writeSpeech("mistress","","H-How in the <i>world </i>did you stop at a just <i>titjob~?</i> God, it's like I'm getting <i>torn apart...!</i>");
			writeText("Her hands go back up to her chest, grasping at them wildly as she starts squealing with every thrust.");
			writeText("You can feel yourself churning up her insides with every thrust, her folds hugging you tightly as you pound her.");
			writeSpeech("mistress","","That's right...! playerF, show her what she missed out on by stopping after the first load! <i>Make me <b>scream~!</b></i>");
			writeSpeech("player","","I'm almost...!");
			writeText("Her breathing hitches, her pussy squeezing tighter.");
			writeSpeech("mistress","","Do it! Fill me up, I want you to make me cum at the same time...!");
			writeBig("images/mistress/3-4.jpg");
			writeText("An almost-screamed, wordless moan tears out of her mouth as you paint her insides, firing a massive load deep inside.");
			writeText("Some of your jizz spills out all over her, splattering across her face and staining her clothes.");
			writeText("Her pussy twitches around you, milking out every drop it can before you pull out with a wet <b>*POP*</b>.");
			writeText("You take a step back and, without your legs supporting her, she flops down onto the couch, your cum nearly squirting out before mistressF cups her cunt with her hand.");
			writeSpeech("mistress","","<i>F-Fuuuuuck...</i>");
			writeText("She turns to the camera for just a second before sitting up just enough to grab onto you.");
			writeText("She pulls you down to her, her mouth pressing against yours as her tongue presses against yours almost hungrily.");
			writeText("After a few seconds, she pulls away enough to whisper,");
			writeSpeech("mistress","","Thank you. You have <i>no idea</i> how much fun we're gonna have with this video~!");
			writeSpeech("player","","My pleasure... Literally.");
			writeText("She flops back down, scraping up some of the cum that spilled across her chest and lapping it up.");
			writeSpeech("mistress","","Oh, don't worry about helping clean up, playerF. I get the feeling maidF will be <i>more</i> than happy to help! Next time, I might even be able to talk her into threesome~!");
			writeSpeech("mistress","","Unfortunately, she can be pretty uptight about those sorts of things, so I'll need to talk to her about it privately. Feel free to use my shower if you need it!");
			writeText("With that, she lays back onto the couch, clearly relaxing.");
			writeFunction("changeLocation(data.player.location)", "Finish (for now)");
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
	{index: "mistressReward", trust: 42,},
	{index: "mistressReward1", trust: 43,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	switch (name) {
		case "mistressReward" : {
			writePhoneImage("images/mistress/fin.jpg", "Art by Oreteki18kin");
			if(galleryCheck("mistress2"))
				writePhoneSpeech("mistress", "", "You've finished all of "+data.story[6].fName+"'s content for this version, congratulations!");
			else{
				writePhoneSpeech("mistress", "", "You've finished all of "+data.story[6].fName+"'s content for this version, congratulations! One of the scenes has a slightly different variant, though. To see it, either complete all of maidF's content before mistressF's second sex-scene, or click the button below. This may also open a screen mentioning a location bug - please ignore it.");
				writePhoneChoices("Unlock the Gallery");
			}
			break;
		}
		case "mistressRewardA" : {
			if(galleryCheck("mistress2")){
				writePhoneImage("images/mistress/fin.jpg", "Art by Oreteki18kin");
				writePhoneSpeech("mistress", "", "You've finished all of "+data.story[6].fName+"'s content for this version, congratulations!");
			}
			else{
				hideStuff();
				writeEvent("mistress2");
				document.getElementById('output').innerHTML = '';
				writeSpecial("A new scene has been added to mistressF mistressL's Gallery.");
				writeSpecial("These are available from the computer at your home.");
				data.player.location = "currentScene";
				writeFunction("changeLocation(data.player.location)", "Return home");
			}
			break;
		}
		case "mistressReward1" : {
			writePhoneImage("images/mistress/fin.jpg", "Art by Oreteki18kin");
			if(galleryCheck("mistress3"))
				writePhoneSpeech("mistress", "", "You've finished all of "+data.story[6].fName+"'s content for this version, congratulations!");
			else{
				writePhoneSpeech("mistress", "", "You've finished all of "+data.story[6].fName+"'s content for this version, congratulations! One of the scenes has a slightly different variant, though. To see it, either complete all of maidF's content before mistressF's second sex-scene, or click the button below. This may also open a screen mentioning a location bug - please ignore it.");
				writePhoneChoices("Unlock the Gallery");
			}
			break;
		}
		case "mistressReward1A" : {
			if(galleryCheck("mistress3")){
				writePhoneImage("images/mistress/fin.jpg", "Art by Oreteki18kin");
				writePhoneSpeech("mistress", "", "You've finished all of "+data.story[6].fName+"'s content for this version, congratulations!");
			}
			else{
				hideStuff();
				writeEvent("mistress3");
				document.getElementById('output').innerHTML = '';
				writeSpecial("A new scene has been added to mistressF mistressL's Gallery.");
				writeSpecial("These are available from the computer at your home.");
				data.player.location = "currentScene";
				writeFunction("changeLocation(data.player.location)", "Return home");
			}
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