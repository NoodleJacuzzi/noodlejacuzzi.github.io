var character = {index: "mistress", met: false, fName: "Anna", lName: "Fletcher", trust: 0, encountered: false, textEvent: "", textColor: "#ed9082", author: "CryptoGreek", artist: "Oreteki18kin"};

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
{index: "mistress2", name: (checkFlag('maid','mistress40') ? "You can see mistress sitting on the park bench, humming and patting her thighs to some catchy melody" : "mistress is sitting on a nearby bench, humming to herself."), location: 'parkDistrict', time: "MorningEvening", itemReq: "", trustMin: 40, trustMax: 40, type: "tab", top: 0, left: 0, day: "even",},
{index: "mistress3", name: "mistress is sitting at the same bench, smiling and humming happily.", location: 'parkDistrict', time: "MorningEvening", itemReq: "", trustMin: 41, trustMax: 41, type: "tab", top: 0, left: 0, day: "even",},
{index: "mistress4", name: "mistress is at the same bench, but she seems to be stretching her legs.", location: 'parkDistrict', time: "MorningEvening", itemReq: "", trustMin: 42, trustMax: 44, type: "tab", top: 0, left: 0, day: "even",},
{index: "mistress5", name: "You can see maidF's friend, mistress, sitting on the bench, swinging her legs playfully while humming.", requirements: "?trust mistress 55; ?location parkDistrict;", altName: "", altImage: "",},
{index: "mistress6", name: "You can see mistress at the bench again, but she seems to be stretching her legs this time.", requirements: "?trust mistress 45; ?location parkDistrict;", altName: "", altImage: "",},
{index: "mistress7", name: "You can see mistress at the bench again, humming a soft melody while kicking the dirt playfully.", requirements: "?trustMin mistress 100; ?trustMax mistress 115; ?location parkDistrict;", altName: "", altImage: "",},
]

function writeEncounter(name) { //Plays the actual encounter.
	wrapper.scrollTop = 0;
	switch (name) {
		case "mistress1" : {
			//Introduce Mistress as being lost (she's actually an exhibitionist)
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
			if(!checkFlag('maid','mistress40')){
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
			}
			else{
				setTrust('mistress',100);
				writeText("As you start to approach, her eyes lock onto you almost immediately.");
				writeText("She stands, smiling as she starts to blush.");
				writeBig("images/mistress/1-2.jpg", "Art by Oreteki18kin");
				writeSpeech("player","","Not lost this time, then?");
				writeSpeech("mistress","","Not this time. Thanks again, by the way!");
				writeText("She sits back down, patting the open spot on the bench beside her.");
				writeSpeech("mistress","","Just standing around is a bit boring, so how about we chat?");
				writeText("She starts to smirk.");
				writeSpeech("mistress","","Specifically, about a certain woman in our lives~?");
				writeText("...");
				writeText("It's a more-or-less quick chat, basically just going over the fact that yes, maidF and mistressF are involved, and they're definitely interested in a threesome.");
				writeText("Of course, then comes what maidF asked you to bring up...");
				writeSpeech("mistress","","She told you to ask about why I'm out here, huh...?");
				writeSpeech("player","","Yup, she said it wasn't really her place to explain it.");
				writeText("mistressF nods firmly.");
				writeSpeech("mistress","","Well, might as well get right into it then. I'll just grab your hand, and...");
				writeText("Bringing your hand up, she pulls your palm right onto her chest, her tit practically overflowing in your grasp even through the coat, as you notice a faint sensation against you...");
				writeSpeech("player","","No bra?");
				writeText("She nods, smiling.");
				writeSpeech("mistress","","See, truth be told... I might be just a <i>bit</i> of a pervert. Here I am, no bra, no panties - just some stockings that I'm happy to roll down for you, if you're interested~");
				writeText("She leans into you a bit, her warm breath on your ear now.");
				writeSpeech("mistress","","And as for maidF, she was <i>very</i> adamant that we take some time ourselves to get a <i>feel</i> for each other before we all come together, so you don't have to worry about that~");
				writeText("Her hand runs up and along your thigh as she lets out a low hum.");
				writeSpeech("mistress","","So, how do we want to do this, playerF~?");
				writeFunction("writeEvent('mistress1')", "Let her lead the way");
				writeFunction("writeEncounter('mistress5ca')", "\"Let's take this back to your place\"");
				writeFunction("writeEncounter('mistress5cb')", "\"You haven't been caught here before, so...\"");
			}
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
			writeSpeech("mistress","","It is, yes. Thanks for helping me clean up, by the way! It wouldn't have felt right to leave it to my maid, and I don't think I would've finished up before she got home without you.");
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
			if(!checkFlag('maid','mistressSexTape'))
				addFlag('maid','mistressSexTape');
			setTrust('mistress', 42);
			setTrust('maid',105);
			writeSpeech("player","","This might be a weird question, but you mentioned a maid. Her name wouldn't happen to be maidF, would it?");
			writeText("Her eyes widen in surprise.");
			writeSpeech("mistress","","You know her?");
			writeSpeech("player","","Yeah. We met in the shopping district, and we... hit it off, I suppose.");
			if(data.player.gender == "man")
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
			if(data.player.gender == "man")
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
			writeText("You take a step back and, without your legs supporting her, she flops down onto the table, your cum squirting out across it as she goes limp.");
			writeSpeech("mistress","","<i>F-Fuuuuuck...</i>");
			writeText("Her dopey, fucked-stupid voice rings out as she lays there.");
			writeText("It's a few minutes before she recovers enough to speak.");
			writeText("Still smiling widely, she manages to sit up, her fingers scraping up a bit of your cum.");
			writeSpeech("mistress","","Thanks, playerF~! I've been pretty pent up lately, and you've been <i>perfect.</i>");
			writeSpeech("player","","The pleasure's <i>literally</i> mine. If you ever need a reliable booty-call, I'm happy to help out.");
			writeSpeech("mistress","","I might just have to take you up on that... But for now, I think I'll just shower and relax for a bit.");
			writeText("She stands up slowly, her legs a little wobbly as she gives you a kiss on the cheek.");
			writeText("A moment later, she brings the cum on her fingers to her mouth, lapping it up with a wink.");
			writeSpeech("mistress","","You taste better this time - I wonder if it'll be even better next time?");
			writeText("She walks away, leaving you alone in the room.");
			writeFunction("changeLocation(data.player.location)", "Put some clothes on and head out");
			break;
		}
		case "mistress4" : {
			passTime();
			document.getElementById('output').innerHTML = '';
			if(checkTrust('mistress')==42){
				if(checkFlag('maid','mistressSexTape') != true){
					addFlag('maid','mistressSexTape');
				}
			}
			setTrust('mistress',100);
			writeText("As you approach, you can see that her leggings are noticably thicker today. One leg is lifted onto the bench as she leans her body forward, her hand lazily reaching her ankle.");
			writeSpeech("player","","You're a fan of stretching yourself out, then?");
			writeSpeech("mistress","","It's more fun with a partner~!");
			writeText("She doesn't miss a beat as she turns her head and winks at you, still stretching out one of her legs as she smiles.");
			if(checkFlag('maid','mistressSexTape') == true && checkTrust('maid') != 25){
				writeSpeech("mistress","","I talked to maidF, by the way. Though, to be fair, <i>talking</i> wasn't what she used her mouth for during most of the conversation.");
				writeText("She grins widely, finishing her stretch as she stands up straight.");
				writeSpeech("mistress","","You already know, of course, but she has <i>very</i> good control of her tongue. Once she finished <i>cleaning</i>, though, I brought up the idea of all three of us <i>coming together,</i> and I have to say...");
				writeText("Stepping forward, she leans her chest against yours and whispers in your ear,");
				writeSpeech("mistress","","I've never seen her wetter. It's really a shame that she's not available today - the thought of her watching while you bounce me on that wonderful cock of yours...");
				writeText("A moment later, you feel the barest touch against your ear as the tip of her tongue taps your lobe.");
				writeSpeech("mistress","","It would be enough to make a total perv like me soak right through my panties... If I were wearing any~!");
				writeSpeech("player","","You know, if you keep teasing me like that, I might not be able to wait to get to your place.");
				writeText("mistressF pauses, frowning slightly.");
				writeSpeech("mistress","","Hm. I can see how that might be a problem...");
				writeText("She grabs your hand gently and smiles kindly...");
				writeText("As she brings your hand underneath her coat, your fingers touching the soaked-through fabric that barely covers her pussy.");
				writeSpeech("mistress","","Then again, <i>it's only a problem if we're <b>caught~!</b></i>");
				writeText("Her other arm goes over your shoulder as she pulls you close, her lips pressing against your neck as she pulls you towards the bench.");
			}
			else if(checkTrust('maid')>=21){
				writeSpeech("mistress","","You know, while I wasn't surprised that my maid asked me about the guy I took home... I <i>was</i> a bit surprised when she told me that the guy that filled me up was the same guy from the video she sent.");
				writeText("She grins widely, finishing her stretch as she stands up straight.");
				writeSpeech("mistress","","We had a very interesting conversation after that. Though, to be fair, <i>talking</i> wasn't what she used her mouth for during most of the conversation. You already know, of course, but she has <i>very</i> good control of her tongue.");
				writeText("Her hand traces along your shirt for a moment, her eyes roaming about for a few seconds.");
				writeSpeech("mistress","","Once we, ah, <i>came</i> to an understanding, though, I brought up the idea of all three of us <i>together,</i> and I have to say...");
				writeText("Stepping forward, she leans her chest against yours and whispers in your ear,");
				writeSpeech("mistress","","I've never seen her wetter. It's really a shame that she's not available today - the thought of her watching while you bounce me on that wonderful cock of yours...");
				writeText("A moment later, you feel the barest touch against your ear as the tip of her tongue taps your lobe.");
				writeSpeech("mistress","","It would be enough to make a total perv like me soak right through my panties... If I were wearing any~!");
				writeSpeech("player","","You know, if you keep teasing me like that, I might not be able to wait to get to your place.");
				writeText("mistressF pauses, frowning slightly.");
				writeSpeech("mistress","","Hm. I can see how that might be a problem...");
				writeText("She grabs your hand gently and smiles kindly...");
				writeText("As she brings your hand underneath her coat, your fingers touching the soaked-through fabric that barely covers her pussy.");
				writeSpeech("mistress","","Then again, <i>it's only a problem if we're <b>caught~!</b></i>");
				writeText("Her other arm goes over your shoulder as she pulls you close, her lips pressing against your neck as she pulls you towards the bench.");
			}
			else{
				setTrust('maid',30);
				if(checkFlag('mistress','first') != true)
					addFlag('mistress','first');
				writeSpeech("mistress","","I was talking with my maid earlier. Odd segue, I know, but I think it's worth mentioning, since...");
				writeText("She pauses to think over her words, pulling her leg off of the bench before nodding firmly.");
				writeSpeech("mistress","","...since she's both my best friend, and my <i>other</i> sex-friend.");
				writeText("She reaches into her coat, exposed skin flashing through for just a moment as she pulls out a wallet from an inner pocket.");
				writeSpeech("mistress","","Here!");
				writeBig("images/maid/profileCasual.jpg");
				writeSpeech("mistress","","I don't have a picture of her in the maid's uniform on-hand.");
				writeSpeech("player","","...Sorry, but I'm not entirely sure I get what you're pushing toward.");
				writeSpeech("mistress","","A threesome, mostly.");
				writeSpeech("player","","...Bit blunt, but I have no problems with this.");
				writeText("She grins.");
				writeSpeech("mistress","","I thought you wouldn't. She's been pretty tense lately, which I blame on the fact that she hasn't had a nice <i>fucking</i> for a while, so I was thinking we could fuck two birds with one cock!");
				writeSpeech("player","","That pun doesn't exactly evoke a pleasant visual image.");
				writeSpeech("mistress","","Some time around the twenties, bird was a slang term for women.");
				writeSpeech("player","","Not exactly my point, but alright. Though I think it might be a good idea if I meet...");
				writeText("You pause.");
				writeSpeech("mistress","","maidF.");
				writeSpeech("player","","-if I meet maidF and talk to her personally before we go straight to the threesome.");
				writeSpeech("mistress","","She thought the same thing. She spends her free days at the shopping district - I'm sure you two will get along great!");
				writeText("With that, her smile widens to a grin as she steps towards you, pressing her chest against yours as she whispers into your ear.");
				writeSpeech("mistress","","Now, with that said...");
				writeText("Your body shivers slightly, feeling the barest touch of her tongue gliding across the outer edge of your ear.");
				writeSpeech("mistress","","As much as I <i>love</i> imagining the sounds you two would make if you plow maidF, I'd really rather make those sounds underneath you~!");
				writeSpeech("player","","You know, if you keep teasing me like that, I might not be able to wait to get to your place.");
				writeText("mistressF pauses, frowning slightly.");
				writeSpeech("mistress","","Hm. I can see how that might be a problem...");
				writeText("She grabs your hand gently and smiles kindly...");
				writeText("As she brings your hand underneath her coat, your fingers touching the soaked-through fabric that barely covers her pussy.");
				writeSpeech("mistress","","Then again, <i>it's only a problem if we're <b>caught~!</b></i>");
				writeText("Her other arm goes over your shoulder as she pulls you close, her lips pressing against your neck as she pulls you towards the bench.");
			}
			writeFunction("writeEvent('mistress4')", "Roll with it");
			break;
		}
		case "mistress4a" : {
			document.getElementById('output').innerHTML = '';
			writeSpeech("player","","The way you're panting is less like a whore...");
			writeText("You press your head against her opening, her slick cheek nuzzling against your hand.");
			writeSpeech("player","","...It's more like a <i>bitch in heat.</i>");
			writeText("You push your head just barely into her, feeling her shudder as her eyes flutter shut and a low moan starts from her mouth-");
			writeSpeech("mistress","","<i><b>Nn~!</b></i>");
			writeText("-before a sharp, wet slap rings out.");
			writeText("It was hard enough to make her go quiet, but gentle enough to avoid leaving the slightest mark...");
			writeText("But from the rapid spasming around your cockhead, it's clear how she felt about it.");
			writeSpeech("mistress","","Do it again~...!");
			writeText("Your thumb goes back into her mouth, feeling her tongue slide across it as she tries to look at your eyes, but keeps losing focus.");
			writeSpeech("player","","You're not giving the orders right now, mistressF.");
			writeText("Slowly pushing your hips forward, you finally start to properly stretch her out as you push your hand further into her mouth.");
			if(galleryCheck('mistress1')){
				writeText("When she doesn't gag even a bit, a sparkle of pride flashes across her eyes.");
				writeSpeech("player","","You've been practicing.");
			}
			else{
				writeText("You feel her almost gag as your thumb slides further back, but she tries to stay focused.");
				writeText("She maintains eye-contact, a sparkle of pride flashing through her eyes as she keeps herself from gagging as your thumb teases as deep as it can go.");
				writeSpeech("player","","You're enjoying this, aren't you?");
			}
			writeText("She gives a small, excited little nod.");
			writeSpeech("player","","Good girl.");
			writeText("She quivers a little, loyally sucking on your finger as you start thrusting back and forth, her unfocused spasms milking your cock unpredictably.");
			writeText("But the height of the bench makes the angle a little less than comfortable, so...");
			writeSpeech("mistress","","Nn?");
			writeText("A look of confusion crosses mistressF's face for a moment as you step onto the bench... before a look of glee replaces it as she recognizes the position.");
			writeText("You have to use your hands to stabilize yourself for a moment, leaving her mouth empty.");
			writeSpeech("mistress","","Fuck yes... Yes, yes, yes...!");
			writeText("She stares right at the point where you're connected, before-");
			writeBig("images/mistress/4-2p.jpg", "Art by Oreteki18kin");
			writeSpeech("mistress","","<i><b><font size='+2'>NngAHN~!</font></b></i>");
			writeText("The sound of her moan rings out loudly as you plunge into her, her eyes widening as she bites her lip sharply.");
			writeSpeech("mistress","","O-Oh God, that was too loud...!");
			writeText("Despite that fact, you don't slow down.");
			writeText("Her eyes keep shifting around to the path, expecting someone to come walking down to investigate...");
			writeText("And every time she starts looking, she squeezes down tighter and pants even heavier, pushing you closer to the edge.");
			writeSpeech("player","","I'm getting close...");
			writeText("You put more force and weight behind your thrusts, forcing mistressF to squeal just a bit louder every time.");
			writeSpeech("player","","If someone came right now, tell me what they'd see.");
			writeText("Her breathing hitches, her eyes settling firmly on the path.");
			writeSpeech("mistress","","<i><b>Me...!</b></i>");
			writeSpeech("mistress","","They'd see me, a total <i>slut</i> getting pounded in public~!");
			writeText("You can feel her approaching her own edge, her pussy squeezing quickly around you.");
			writeSpeech("mistress","","And they'd see <i>you</i> pumping a thick, <i>hot</i> load into my pussy...!");
			writeText("Her eyes flutter for a moment, her entire body tensing at the thought of getting caught, and-");
			writeSpeech("mistress","","<i><b>C-Cumming~!</b></i>");
			writeText("You slam your hips against hers, the rapid clenching around your cock pushing you over the edge.");
			writeText("Her head shifts forward as you start jizzing inside of her, her lips capturing yours as you feel her tongue press into your mouth.");
			writeText("The kiss barely keeps the moans silent, her ankles resting gently against your shoulders as the two of you finally finish cumming.");
			writeSpeech("mistress","","That was... <i><b>incredible...</b></i>");
			writeText("She looks down at herself as you pull out, the frankly incredible amount of cum starting to pour out of her as she stares in orgasmic bliss.");
			writeBig("images/mistress/4-3p.jpg");
			writeText("Her legs slowly come down, her feet resting gently on the ground as you step off the bench.");
			writeText("It takes her a second to start sitting up, which you help her with.");
			writeSpeech("mistress","","...We have to do this again some time.");
			writeText("You open your mouth to respond, but...");
			writeText("A rustling in the bushes sets you on high alert, mistressF sitting up sharply as her thighs clap together with a wet slapping sound.");
			writeSpeech("player","","Who's-");
			writeText("...only for a squirrel to bound out of the bush, darting into the distance with what appears to be a pine cone.");
			writeText("There's a moment of silence...");
			writeSpeech("mistress","","Heh... Hahahaha...!");
			writeText("Raising her hand to her mouth, mistressF starts laughing, shaking her head.");
			writeSpeech("player","","...I'm not sure I get what's so funny.");
			writeText("It takes her a moment to stop giggling enough to say,");
			writeSpeech("mistress","","Do you think it came here for the <i><b>nuts?</b></i>");
			writeSpeech("player","","...Wow. That was terrible.");
			writeText("She just laughs even harder, though you can actually see your cum dripping out from between her thighs.");
			writeText("She follows your gaze, before her smile turns saucy.");
			writeText("Pulling her leggings up, she presses her hand against her pussy, the soft snap of the elastic ringing out as she gets them in place.");
			writeText("There's a very clear, very dark spot at her crotch but, as she shakily stands, you notice that her coat goes low enough to hide it.");
			writeSpeech("mistress","","Thank you.");
			writeText("She presses her lips against yours again, though this time, she chastely stops at that.");
			if(data.player.location == 'gallery'){
				writeSpeech("mistress","","Next time, though...");
				writeText("She leans a bit closer, her voice low...");
				writeSpeech("mistress","","...try to slap hard enough to leave <i>marks.</i>");
				writeFunction("changeLocation(data.player.location)", "Finish");
				break;
			}
			else if(!galleryCheck('mistress4-1')){
				writeSpeech("mistress","","Next time, though...");
				writeText("She leans a bit closer, her voice low...");
				writeSpeech("mistress","","...try to slap hard enough to leave <i>marks.</i>");
				writeSpeech("player","","Sure thing. Do you want me to walk you home, or...?");
			}
			else{
				writeSpeech("mistress","","I can see why maidF said we'd get along~ Next time, though...");
				writeText("She leans a bit closer, her voice low and throaty...");
				writeSpeech("mistress","","...try to slap hard enough to leave <i>marks,</i> please - I want to tease maidF with how red you leave my ass~");
				writeText("You laugh, smiling.");
				writeSpeech("player","","Alright, I'm fine with that. Did you want me to walk you home, by the way?");
			}
			writeSpeech("mistress","","Thank you, but no. I actually have some private errands to run.");
			writeSpeech("player","","...And you wanted to feel my cum sloshing around inside you while you do them.");
			writeText("She kisses your cheek with a grin.");
			writeSpeech("mistress","","Next time, I promise I'll actually take you to my <i>bed</i>. That way, we don't have to worry about how <i>loud</i> you can make me scream~!");
			writeSpeech("player","","I'll look forward to it. Stay safe.");
			writeSpeech("mistress","","You too, cutie.");
			writeText("She winks at you and starts walking off, a bit of a spring in her steps after she gets past the shakiness.");
			writeText("You make a mental note to message maidF about meeting mistressF... You're pretty confident that mistressF'll tell her anyway (in graphic detail no doubt), but it's the thought that counts.");
			if(data.player.gender=="man")
				writeFunction("changeLocation(data.player.location)", "Fix your pants and leave");
			else
				writeFunction("changeLocation(data.player.location)", "Fix your skirt and leave");
			break;
		}
		case "mistress5" : {
			passTime();
			document.getElementById('output').innerHTML = '';
			if(!checkFlag('maid','TalkedMistress'))
				addFlag('maid','TalkedMistress');
			writeSpeech("player","","Ah, mistressF mistressL?");
			writeText("She turns to look at you with a smile.");
			writeSpeech("mistress","","Yup, that's me!");
			writeText("She sits up a bit straighter, her hands resting on her lap as she looks you over.");
			writeText("Her eyes trail along your body for a moment, before she laughs a little.");
			writeSpeech("mistress","","You know, you look pretty good with your clothes on~");
			writeText("Standing up, she offers her hand to you.");
			writeSpeech("mistress","","Happy to meet you, playerF. maidF's told me a little bit about you, and I couldn't help but get a bit interested in meeting up.");
			writeSpeech("player","","Same here - she talked to me a bit about a certain proposition, and she mentioned she'd speak to you about it too?");
			writeSpeech("mistress","","Well, I suppose I technically came up with the proposition.");
			writeText("She laughs lightly, running a hand through her hair.");
			writeSpeech("mistress","","At first, I was just teasing her about having so much fun without me, but when she asked if I was interested in a threesome, I decided I wanted to meet you. I mean, you <i>are</i> the first "+(data.player.gender=="man" ? "man " : "person aside from me that ")+"she's been interested in since college, after all.");
			writeSpeech("player","","It's been my pleasure thus far - she's a good person, though she does seem to have a bit of trouble relaxing sometimes.");
			writeSpeech("mistress","","Mm, I'd say you'd be suprised by how <i>relaxed</i> she can get, but~...");
			writeText("She steps a bit closer to you, her fingers brushing against your arm...");
			writeSpeech("mistress","","Given that she showed me the video you two took, I think you know pretty well how to make her <i>open up~!</i>");
			writeSpeech("player","","...Not to be presumptuous, but I'm beginning to think that you didn't want to meet me for just some coffee and conversation.");
			writeSpeech("mistress","","When it comes to people, I trust maidF. Probably more than my own judgement, actually - she's always been the more level-headed of us. If she trusts you enough to let you <i>paint her chest white</i> then I'm sure it's fine.");
			writeText("She pauses for a moment.");
			writeSpeech("mistress","","Though, uh... I mean, if I'm being a bit too forward, I'd be fine with having a chat over coffee.");
			writeFunction("writeEncounter('mistress5a')", "This is a good amount of forwardness");
			writeFunction("writeEncounter('mistress5b')", "Let's have a chat first");
			break;
		}
		case "mistress5a" : {
			document.getElementById('output').innerHTML = '';
			setTrust('mistress',100);
			writeSpeech("player","","I don't mind - if you're interested in getting to the fun parts first, then I'm up for it.");
			writeText("She smiles excitedly, nodding.");
			writeSpeech("mistress","","In that case, what do you want to do? I mean...");
			writeText("She leans forward on the table, resting her chin on her hand.");
			writeSpeech("mistress","","maidF was pretty adamant that we take some time to ourselves, so you can get a feel for me <i>before</i> the threesome, so you don't have to worry on that front~");
			writeFunction("writeEncounter('mistress5ca')", "\"Let's take this back to your place\"");
			writeFunction("writeEncounter('mistress5cb')", "\"maidF mentioned you were into almost getting caught...\"");
			writeFunction("writeEncounter('mistress5cc')", "\"Let's meet up with maidF\"");
			break;
		}
		case "mistress5b" : {
			document.getElementById('output').innerHTML = '';
			setTrust('mistress',100);
			writeSpeech("player","","If it's not a problem, I think I'd rather to get to know you a bit first.");
			writeSpeech("mistress","","Ah, alright. We could drop by Starway and chat there?");
			writeSpeech("player","","That's the nearby cafe, right? Sure, let's go.");
			writeText("...");
			if(checkFlag('cafedark','Start')){
				writeText("You two get seated pretty quickly, with cafedarkF leading you to your seat with a smile before she takes your order.");
				writeText("mistressF looks a bit amused as she looks between the two of you.");
				writeText("You both place your orders before mistressF says with a smile,");
				writeSpeech("mistress","","I'd heard this place came under new management, but I didn't realize it was you.");
				writeSpeech("player","","Well, the cafe was having some tough times, so I thought I could help in my spare time.");
				writeSpeech("mistress","","Mm, interesting...");
			}
			else if(checkFlag('cafedark','Visited')) {
				writeText("You two get seated at the cafe pretty quickly, the same girl from before taking your orders.");
				writeText("You don't see any other employees this time, either... A bit odd, but not really what you came here to think about.");
			}
			else{
				addFlag('cafedark','Visited');
				writeText("You two get seated at the cafe pretty quickly. It doesn't seem to have too many customers, and you only see one server working...");
				writeSpeech("???","images/cafedark/cafedark.jpg","Here's your table!");
				writeText("She flashes the two of you a smile as she takes your order before leaving you two to talk.");
			}
			writeText("You and mistressF start off with pretty idle chat about you, but it isn't long before mistressF mentions her and maidF's history...");
			writeSpeech("mistress","","Well, maidF and I met in college - along with this one other girl, we were roommates and shared a few classes. She started helping me study, and...");
			writeText("She smirks.");
			writeSpeech("mistress","","Well, she came to help me study Poli-Sci, but we spent a whole lot more time on <i>anatomy</i>, you could say.");
			writeText("mistressF smiles brightly, her hands folded in her lap as she looks at you.");
			writeSpeech("mistress","","The rest is just raunchy, dirty history. What about you two? From what I hear, you only met recently.");
			writeSpeech("player","","Yeah, that's true. We met in the shopping district - her outfit caught my eye, and we started talking.");
			writeText("mistressF nods.");
			writeSpeech("mistress","","Yeah, her uniform's pretty nice. A bit old-fashioned, but that's a big part of the appeal... for me, at least.");
			writeSpeech("player","","Is that the reason she wears it?");
			writeSpeech("mistress","","Nah, she just likes it. Though, I'd be lying if I said I didn't enjoy the view.");
			writeText("At that, mistressF takes a sip of her coffee.");
			writeSpeech("mistress","","That's pretty much it for how we met, though. Was there anything else you wanted to know?");
			writeFunction("writeEncounter('mistress5ba')", "\"What do you do for a living?\"");
			writeFunction("writeEncounter('mistress5bb')", "\"Will this be your first threesome?\"");
			writeFunction("writeEncounter('mistress5bc')", "\"Nope, that was it\"");
			break;
		}
		case "mistress5ba" : {
			document.getElementById('output').innerHTML = '';
			if(!checkFlag('mistress','chatBA'))
				addFlag('mistress','chatBA');
			writeSpeech("player","","What do you do for a living?");
			writeSpeech("mistress","","Technically, not much. The family business is real estate, which means an annoying amount of paperwork, but enough passive income that I don't have to worry about much.");
			writeSpeech("player","","Sounds pretty comfy.");
			writeSpeech("mistress","","It is. Makes my schedule a <i>little</i> hectic sometimes, but I'm smart enough to know I lucked out. Still, real estate management isn't very interesting, so it probably won't come up too often unless something big happens. My schedule's usually pretty open.");
			writeText("Actually, all of that <b>is</b> pretty interesting given your own activities, but that's something to keep in mind for another time.");
			writeSpeech("player","","Well, I'm at least glad to hear that you're doing pretty well - and it explains how you can afford to pay maidF to be your maid.");
			writeSpeech("mistress","","Yup. She's hardworking too, so she's easily worth paying.<br>Was there anything else you wanted to know about?");
			if(!checkFlag('mistress','chatBB'))
				writeFunction("writeEncounter('mistress5bb')", "\"Will this be your first threesome?\"");
			writeFunction("writeEncounter('mistress5bc')", "\"Nope, that was it\"");
			break;
		}
		case "mistress5bb" : {
			document.getElementById('output').innerHTML = '';
			if(!checkFlag('mistress','chatBB'))
				addFlag('mistress','chatBB');
			writeSpeech("player","","Will this be your first threesome, or have you two 'experimented' before?");
			writeSpeech("mistress","","This is our first. We've talked about the <i>idea</i> before, but we never really found a guy. Between college and post-graduation life, we just never got around to it.");
			writeText("She grins, sitting up a bit straighter, and obviously emphasizing her chest.");
			writeSpeech("mistress","","You'll actually be our first experience with a "+((data.player.gender == 'man') ? "man" : "<i>real</i> cock")+", playerF~");
			writeSpeech("player","","I'm flattered that two beautiful women would want me for their first.");
			writeSpeech("mistress","","Mm, try and save some honeyed words for maidF~ She gets embarrassed by compliments, and I'll <i>love</i> seeing how flushed you'll get her.<br>But before I get <i>too</i> excited, did you have any other questions?");
			if(!checkFlag('mistress','chatBA'))
				writeFunction("writeEncounter('mistress5ba')", "\"What do you do for a living?\"");
			writeFunction("writeEncounter('mistress5bc')", "\"Nope, that was it\"");
			break;
		}
		case "mistress5bc" : {
			document.getElementById('output').innerHTML = '';
			if(checkFlag('mistress','chatBA'))
				removeFlag('mistress','chatBA');
			if(checkFlag('mistress','chatBB'))
				removeFlag('mistress','chatBB');
			writeSpeech("player","","Nope, that was it.");
			writeText("At that, mistressF smiles a bit wider.");
			writeSpeech("mistress","","Glad to hear it. Does that mean you're interested in...?");
			writeText("She lets the silence hang for a moment as you nod.");
			writeSpeech("player","","I was interested from the start - I just wanted to talk first.");
			writeText("She's surprisingly relaxed around you already, but it never hurts to get to know a potential partner.");
			writeSpeech("mistress","","Mm, that's fair. So I guess now, the question is what kinda fun you'd like to have~");
			writeText("She leans forward on the table, resting her chin on her hand.");
			writeSpeech("mistress","","maidF was pretty adamant that we take some time to ourselves, so you can get a feel for me <i>before</i> the threesome, so you don't have to worry on that front~");
			writeFunction("writeEncounter('mistress5ca')", "\"Let's take this back to your place\"");
			writeFunction("writeEncounter('mistress5cb')", "\"maidF mentioned you were into almost getting caught...\"");
			writeFunction("writeEncounter('mistress5cc')", "\"Let's meet up with maidF\"");
			break;
		}
		case "mistress5ca" : {
			document.getElementById('output').innerHTML = '';
			writeSpeech("player","","Let's take this back to your place.");
			writeText("She smiles widely and nods.");
			writeSpeech("mistress","","We aren't that far - I'll lead the way~!");
			if(!checkFlag('mistress40')){
				writeText("As both of you stand up, she shifts her coat a bit, her face flushing slightly as she does. She adjusts one of the buttons, but not before you spot a bit of bare skin beneath...");
				writeSpeech("player","","No bra, huh?");
				writeText("She laughs lightly, starting to walk.");
				writeSpeech("mistress","","The only things I'm wearing, playerF, is what you can see right now~");
				writeText("As she moves, she lifts the edge of her coat just enough that it's clear that she's wearing leggings... and nothing underneath them.");
				writeText("You can already tell that this's going to be fun...");
			}
			writeText("...");
			writeText("After arriving at her place, she shows you the living room for a few seconds before smiling almost nervously.");
			writeSpeech("mistress","","Just one sec - gotta make sure nobody else is home!");
			writeText("She darts off, the sound of doors rapidly opening and shutting ringing out for a minute, before... silence.");
			writeText("It doesn't last long, though, before she comes out again, though in a separate outfit.");
			writeBig("images/mistress/profile.jpg", "Art by Oreteki18kin");
			writeSpeech("mistress","","The coat's a bit too warm for indoors... but don't worry, I didn't slide anything <i>else</i> on~!");
			writeText("Sitting down on the couch, she smiles warmly at you, her face beginning to flush as her thighs rub together slightly.");
			writeSpeech("mistress","","So, do you want to get right into things, or...?");
			writeText("She trails off a bit, looking a bit less confident now. All things considered, it's not hard to guess why...");
			writeSpeech("player","","You're not used to being the sub.");
			writeText("She looks a little embarrassed, but nods.");
			writeSpeech("mistress","","maidF is submissive through and through, so I've always been the dom. I mean, I'm into submitting and all, I just... haven't actually <i>done it</i> before.");
			writeSpeech("player","","Nothing wrong with that - everyone starts somewhere.");
			writeText("Plus, you usually end up working on girls who are less experienced being subs anyway, so it's nothing new.");
			writeSpeech("mistress","","Mm, thanks. To be honest, this is usually the part where I put maidF's head between my legs, so...");
			writeText("She shifts in place, before sitting up a bit straighter with a smile.");
			writeSpeech("mistress","","What would you like to do? Or really, where would you like to <i>start,</i> playerSir~?");
			writeFunction("writeEvent('mistress1-1')", "\"Get on your knees\"");
			writeFunction("writeEvent('mistress2-1')", "\"Are you familiar with the 'mating press' position?\"");
			break;
		}
		case "mistress5cb" : {
			document.getElementById('output').innerHTML = '';
			if(!checkFlag('mistress40')){
				writeSpeech("player","","You know, maidF mentioned that you were into almost getting caught...");
				writeSpeech("mistress","","Oh?");
				writeText("She gives a mischievous smile.");
				writeSpeech("mistress","","Well... She's not wrong. I wouldn't do anything obvious in a place like <i>this</i>...");
				writeText("She gestures very subtely to the cafe at large.");
				writeSpeech("mistress","","But if you're trying to say you'd like a little <i>risky business,</i> I know a nice little place that I could show you~");
				writeSpeech("player","","Let's get the bill, and then you can lead the way.");
				writeText("Her eyes gleam as she nods excitedly.");
				writeText("...");
				writeText("It doesn't take you long to get back to the same park you met her at, though she does pause to check the time.");
				writeSpeech("mistress","","Hm... Nah, too close...");
				writeText("She sits down patiently, smiling at you.");
				writeText("You open your mouth to speak, but the appoaching sound of crunching gravel reaches your ears.");
				writeText("A jogger...?");
				writeText("mistressF smiles slightly, bringing a lip to her finger in a 'hush' moment as she looks over at a nearby path.");
				writeText("Sure enough, there's someone there... but the lower branches on the trees make it a little hard to make the person out, even as they run right by.");
				writeSpeech("mistress","","Perfect, isn't it?");
				writeText("Looking back at her, you see her casually lift her coat slightly, her fingers sliding up her thighs to her leggings... and clearly nothing under them.");
				writeText("She rubs gently at her pussy through the leggings with a low, mewling moan as she toys with the edge of her coat, before she leans forward to grab your hand, gently pulling you towards her on the bench.");
			}
			else{
				writeSpeech("player","","Well, you haven't been caught here before, so I don't see why I'd need to keep you waiting.");
				writeText("Her grin widens, her eyes twinkling as she lets out a soft laugh.");
				writeSpeech("mistress","","Oh, you are just my type~ A total pervert, <i>just like <b>me.</b></i>");
				writeText("She starts to lean back a bit, her legs spreading as you can see under her coat as her other hand slides up her own thigh.");
				writeText("She presses her lips hungrily against you as she does, her tongue pressing against yours as she moans gently into your mouth.");
				writeSpeech("mistress","","Mm, God... I forgot to mention, but maidF shared that video you took of her.");
				writeText("The hand that was on your thigh reachs all the way up, her palm pressing against your clothed cock as she shudders in excitement.");
				writeSpeech("mistress","","I can't wait to feel the same cock my slutty maid throated <i>pump me full</i> in a public park~!");
				writeText("mistressF raises one arm to your shoulder, leaning back onto the bench and pulling you with her.");
			}
			writeFunction("writeEvent('mistress4-1')", "Roll with it");
			break;
		}
		case "mistress5cc" : {
			document.getElementById('output').innerHTML = '';
			if(checkFlag('maid','TalkedMistress'))
				removeFlag('maid','TalkedMistress');
			if(checkTrust('maid') < 30)
				setTrust('maid',110);
			writeSpeech("player","","I say we call maidF. Don't want her missing out on the fun, right?");
			break;
		}
		case "mistress5-1" : {
			if(checkFlag('mistress','round1'))
				removeFlag('mistress','round1');
			document.getElementById('output').innerHTML = '';
			writeSpeech("player","","Actually, I think that's enough for today. Wouldn't want to have too much fun without maidF, right?");
			writeText("mistressF tries to give a little pout, but ends up smiling.");
			writeSpeech("mistress","","That's fair - God knows I'd like to watch the <i>fun</i> you'll be having with her~");
			writeText("She stands back up, sipping from her water bottle and looking down at her shirt, seemingly mulling something over as she looks at the cum.");
			writeSpeech("mistress","","...As much as I love the idea of maidF walking in and seeing me covered in cum, I think I'm going to put these in the wash.");
			writeText("She uses her finger to play with it a little.");
			writeSpeech("mistress","","By the time she gets here, it won't be as fun to play with. And, I'd send you off with a kiss, but...");
			writeText("mistressF drags her thumb across her chin, picking up even more of your spunk with a giggle.");
			writeSpeech("mistress","","...Well, you really know how to make a mess, don't you~?");
			writeSpeech("player","","I aim to please.");
			writeSpeech("mistress","","Mm, you definitely succeeded in that regard~");
			writeText("She winks at you as she turns around, probably heading to a washing machine or something, and your eyes linger on her ass for a moment.");
			writeText("That hip-sway is <b>definitely</b> intentional...");
			writeFunction("changeLocation(data.player.location)", "Head out");
			break;
		}
		case "mistress6" : {
			setTrust('mistress',100);
			passTime();
			document.getElementById('output').innerHTML = '';
			writeText("As you approach, you can see that her leggings are noticably thicker today. One leg is lifted onto the bench as she leans her body forward, her hand lazily reaching her ankle.");
			writeSpeech("player","","You're a fan of stretching yourself out, then?");
			writeSpeech("mistress","","It's more fun with a partner~!");
			writeText("She doesn't miss a beat as she turns her head and winks at you, still stretching out one of her legs as she smiles.");
			writeSpeech("mistress","","Though from what I'm hearing, it seems like we actually have a <i>stretching</i> partner in common, don't we?");
			writeText("From the playful smirk on her face, it seems like she enjoys the thought.");
			writeSpeech("player","","Seems like it. And if I'm understanding things right, you were interested in making it a three-person routine?");
			writeSpeech("mistress","","Mm, <i>very</i> interested.");
			writeText("She grins widely, finishing her stretch as she stands up straight.");
			writeSpeech("mistress","","We had a very interesting conversation after that. Though, to be fair, <i>talking</i> wasn't what she used her mouth for during most of the conversation. You already know, of course, but she has <i>very</i> good control of her tongue.");
			writeText("Her hand traces along your shirt for a moment, her eyes roaming about for a few seconds.");
			writeSpeech("mistress","","Once we, ah, <i>came</i> to an understanding, we talked about it a bit more and I have to say...");
			writeText("Stepping forward, she leans her chest against yours and whispers in your ear,");
			writeSpeech("mistress","","I've never seen her wetter. It's really a shame that she's not available today - the thought of her watching while you bounce me on that wonderful cock of yours...");
			writeText("A moment later, you feel the barest touch against your ear as the tip of her tongue taps your lobe.");
			writeSpeech("mistress","","It would be enough to make a total perv like me soak right through my panties... If I were wearing any~!");
			writeSpeech("player","","You know, if you keep teasing me like that, I might not be able to wait to get to your place.");
			writeText("mistressF pauses, frowning slightly.");
			writeSpeech("mistress","","Hm. I can see how that might be a problem...");
			writeText("She grabs your hand gently and smiles kindly...");
			writeText("As she brings your hand underneath her coat, your fingers touching the soaked-through fabric that barely covers her pussy.");
			writeSpeech("mistress","","Then again, <i>it's only a problem if we're <b>caught~!</b></i>");
			writeText("Her other arm goes over your shoulder as she pulls you close, her lips pressing against your neck as she pulls you towards the bench.");
			writeFunction("writeEvent('mistress4')", "Roll with it");
			break;
		}
		case "mistress7" : {
			document.getElementById('output').innerHTML = '';
			if(checkTrust('mistress') < 100)
				setTrust('mistress',100);
			document.getElementById('output').innerHTML = '';
			writeText("Spotting you, mistressF smiles at you with a wave.");
			writeSpeech("mistress","","Hello again, playerF~ Did you come by for a bit of fun, or just to say hi?");
			writeFunction("writeEncounter('mistress7b')", "\"Let's head over to your place\"");
			writeFunction("writeEncounter('mistress7c')", "\"Let's have some fun right here\"");
			writeFunction("writeEncounter('mistress7a')", "\"Do you want to call maidF for some fun?\"");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "mistress7a" : {
			document.getElementById('output').innerHTML = '';
			passTime();
			if(checkTrust('mistress') < 115)
				setTrust('mistress',115);
			if(checkTrust('maid') < 115)
				setTrust('maid',115);
			writeSpeech("player","","How about we call maidF and all get together?");
			writeText("mistressF gets visibly more excited, pulling out her phone.");
			writeSpeech("mistress","","I'll text her now. She'll probably already be back before we get there, so let's go~");
			writeText("...");
			writeText("When you arrive, it's to see that maidF is indeed already there.");
			writeText("mistressF wastes exactly no time in moving forward excitedly, planting a <b>very</b> strong kiss on maidF's lips, and pulling her towards the bedroom.");
			writeSpeech("mistress","","This is going to be so much fun~!");
			writeText("Stripping off her shirt, she looks at you.");
			writeSpeech("mistress","","Our safeword is 'tax exemptions' by the way.");
			writeSpeech("maid","","We wanted something boring.");
			writeSpeech("player","","I'll keep that in mind.");
			writeText("You strip down yourself, mistressF's infectious excitement spilling over to both you and maidF as they get on the bed.");
			writeSpeech("mistress","","Ooh, here...");
			writeText("mistressF helps maidF get into a good position, now practically laying atop maidF to get a good look at her pussy as she beckons you over.");
			writeSpeech("mistress","","I've used a dildo to fuck maidF in tons of different positions before, but this'll be my first time seeing her get plowed by a <i>real</i> cock~! Are you ready?");
			writeFunction("writeEvent('mistress5')", "Get fucking");
			break;
		}
		case "mistress7b" : {
			document.getElementById('output').innerHTML = '';
			passTime();
			writeSpeech("player","","How about we go back to your place for some fun?");
			writeSpeech("mistress","","Mm, I'd be happy to~");
			writeText("...");
			writeText("When you arrive at her place, she spins on her heel to face you with a playful smile.");
			writeSpeech("mistress","","So, what did you want to do with me today~?");
			writeFunction("writeEvent('mistress1-1')", "Get a blowjob");
			writeFunction("writeEvent('mistress2-1')", "Mating Press");
			break;
		}
		case "mistress7c" : {
			document.getElementById('output').innerHTML = '';
			passTime();
			writeSpeech("player","","Let's have some fun right here.");
			writeText("A spark of excitement shines in mistressF's eyes as she smiles widely.");
			writeSpeech("mistress","","It's a good thing I skipped the panties today, isn't it~?");
			writeText("mistressF raises one arm to your shoulder, leaning back onto the bench and pulling you with her.");
			writeFunction("writeEvent('mistress4-1')", "Roll with it");
			break;
		}
	}
}

var eventArray = [ //Lists the events of the character for unlocking and replaying in the gallery.
{index: "mistress1", name: "Penthouse Blowies"},
{index: "mistress2", name: "Mating Press"},
{index: "mistress3", name: "Mating Press - Video for the Maid"},
{index: "mistress4", name: "Public Park Press"},
{index: "mistress5", name: "Threesome with maidF"},

//maid route variants
{index: "mistress1-1", name: "Penthouse Blowies"},
{index: "mistress2-1", name: "Mating Press"},
{index: "mistress4-1", name: "Public Park Press"},
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
			writeBig("images/mistress/2-1.jpg", "Art by Oreteki18kin");
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
			break;
		}
		case "mistress1-1" : {
			document.getElementById('output').innerHTML = '';
			writeSpeech("player","","You mentioned having maidF between your legs. I think it's your turn, don't you?");
			writeText("Her eyes seem to sparkle slightly as she nods excitedly.");
			writeSpeech("player","","Then get on your knees.");
			writeText("She immediately gets down, her smile going wider as she looks up at you from near your hips. She seems to fidget a bit, but patiently waits as you "+(data.player.gender == 'man' ? "undo your belt" : "slide down your panties")+" to give her what she wants.");
			writeBig("images/mistress/2-1.jpg", "Art by Oreteki18kin");
			writeSpeech("mistress","","...You could do porn.");
			writeText("She pauses, before giggling.");
			writeSpeech("mistress","","Actually, you totally did, didn't you?");
			writeText("Her hands reach out, cautiously getting a grip of your cock before she presses her face against it.");
			writeSpeech("mistress","","F-Fuck~...! Watching you cum all over maidF's chest had me so turned on, but now it's my turn - I can hardly wait~!");
			writeText("You gently place your hands on the back of her head, casually telling her,");
			writeSpeech("player","","Then <i>don't</i> wait.");
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
			writeText("She nods, pressing her hand gently to her throat...");
			writeSpeech("player","","Was that too rough?");
			writeText("Her eyes widen. Shaking her head, she stands up quickly and leans in.");
			writeSpeech("mistress","","<font size='-1'><i>I loved it...</i></font>");
			if(data.player.location != 'gallery'){
				if(!checkFlag('mistress','round1'))
					addFlag('mistress','round1');
				writeText("She tries clearing her throat, before frowning and holding up one finger and stepping towards a kitchen.");
				writeText("She comes out a moment later, two water bottles in hand.");
				writeText("Taking a drink from one, she hands you the other, which you're happy to take.");
				writeSpeech("mistress","","There we go...");
				writeText("She smiles again, setting the bottle on the table as she sits back down.");
				writeSpeech("mistress","","Thank you for that. It was my first time using my throat, but I <i>definitely</i> see why maidF enjoyed it~");
				writeText("Stretching her back back, she takes a deep, calm breath... before smirking a bit.");
				writeSpeech("mistress","","Though, if you're interested in going another round...?");
				writeFunction("writeEvent('mistress2-1')", "Fuck her");
				writeFunction("writeEncounter('mistress5-1')", "Stop here");
			}
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
		case "mistress2-1" : {
			document.getElementById('output').innerHTML = '';
			if(data.player.location != 'gallery'){
				if(checkFlag('mistress','round1')){
					removeFlag('mistress','round1');
					writeSpeech("player","","I'm up for another round. It'd be a shame to just stop here, don't you think?");
					writeSpeech("mistress","","Mm, I couldn't agree more. Though, do you mind if I grab something real quick?");
				}
				else{
					writeSpeech("player","","Are you familiar with the 'mating press' position?");
					writeText("There's another playful twinkle in her eyes as she nods, shifting in place.");
					writeSpeech("mistress","","Do you mind if I grab something real quick?");
				}
				writeText("She shifts a bit of her hair over her ear with a grin.");
				writeSpeech("mistress","","I have an old camera in the other room, and I was thinking I could return the favor to maidF~");
				writeSpeech("player","","Sounds good to me.");
				writeSpeech("mistress","","Wonderful! Be back in just a second!");
				writeText("...");
			}
			writeText("mistressF looks at you with a reassuring smile.");
			writeSpeech("mistress","","The table is <i>very</i> sturdy, I promise!");
			writeBig("images/mistress/3-2.jpg");
			writeSpeech("player","","You know that from experience?");
			writeSpeech("mistress","","Hah, maybe~ maidF likes it rough, after all.");
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
			writeSpeech("mistress","","H-How in the <i>world</i> did you stop at a just <i>titjob~?</i> God, it's like I'm getting <i>torn apart...!</i>");
			writeText("Her hands go back up to her chest, grasping at them wildly as she starts squealing with every thrust.");
			writeText("You can feel yourself churning up her insides with every thrust, her folds hugging you tightly as you pound her.");
			writeSpeech("mistress","","Fuck, fuck, <i><b>fuck...!</b></i> She's going to see this, maidF's gonna watch me get <i>fucked</i> over the same table...!");
			writeSpeech("player","","I'm almost...!");
			writeText("Her breathing hitches, her pussy squeezing tighter.");
			writeSpeech("mistress","","Do it! Fill me up, I want you to make me cum at the same time...!");
			writeBig("images/mistress/3-4.jpg");
			writeText("An almost-screamed, wordless moan tears out of her mouth as you paint her insides, firing a massive load deep inside of her.");
			writeText("Some of your jizz spills out all over her, splattering across her face and staining her clothes.");
			writeText("Her pussy twitches around you, milking out every drop it can before you pull out with a wet <b>*POP*</b>.");
			writeText("You take a step back and, without your legs supporting her, she flops down onto the table, your cum nearly squirting out before mistressF cups her cunt with her hand.");
			writeSpeech("mistress","","<i>F-Fuuuuuck...</i>");
			writeText("She turns to the camera for just a second before sitting up just enough to grab onto you.");
			writeText("She pulls you down to her, her mouth pressing against yours as her tongue presses against yours almost hungrily.");
			writeText("After a few seconds, she pulls away enough to whisper,");
			writeSpeech("mistress","","Thank you. You have <i>no idea</i> how much fun we're gonna have with this video~!");
			writeSpeech("player","","My pleasure... Literally.");
			writeText("She flops back down, scraping up some of the cum that spilled across her chest and lapping it up, smiling teasingly as her tongue cleans her fingers.");
			writeSpeech("mistress","","Don't worry about helping clean up, playerF. I get the feeling maidF will be <i>more</i> than happy to help. Though next time, if you fuck us <i>both</i> this hard, we might need the help~!");
			writeSpeech("mistress","","Oh, and feel free to use my shower if you need it! I don't have anywhere I need to be for a while, so I'll just lay here for a little while.");
			writeText("With that, she lays her back on the table, clearly relaxing as she reaches down next to the couch and grabbing her water bottle.");
			writeFunction("changeLocation(data.player.location)", "Finish");
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
			writeSpeech("mistress","","H-How in the <i>world</i> did you stop at a just <i>titjob~?</i> God, it's like I'm getting <i>torn apart...!</i>");
			writeText("Her hands go back up to her chest, grasping at them wildly as she starts squealing with every thrust.");
			writeText("You can feel yourself churning up her insides with every thrust, her folds hugging you tightly as you pound her.");
			writeSpeech("mistress","","That's right...! playerF, show her what she missed out on by stopping after the first load! <i>Make me <b>scream~!</b></i>");
			writeSpeech("player","","I'm almost...!");
			writeText("Her breathing hitches, her pussy squeezing tighter.");
			writeSpeech("mistress","","Do it! Fill me up, I want you to make me cum at the same time...!");
			writeBig("images/mistress/3-4.jpg");
			writeText("An almost-screamed, wordless moan tears out of her mouth as you paint her insides, firing a massive load deep inside of her.");
			writeText("Some of your jizz spills out all over her, splattering across her face and staining her clothes.");
			writeText("Her pussy twitches around you, milking out every drop it can before you pull out with a wet <b>*POP*</b>.");
			writeText("You take a step back and, without your legs supporting her, she flops down onto the table, your cum nearly squirting out before mistressF cups her cunt with her hand.");
			writeSpeech("mistress","","<i>F-Fuuuuuck...</i>");
			writeText("She turns to the camera for just a second before sitting up just enough to grab onto you.");
			writeText("She pulls you down to her, her mouth pressing against yours as her tongue presses against yours almost hungrily.");
			writeText("After a few seconds, she pulls away enough to whisper,");
			writeSpeech("mistress","","Thank you. You have <i>no idea</i> how much fun we're gonna have with this video~!");
			writeSpeech("player","","My pleasure... Literally.");
			writeText("She flops back down, scraping up some of the cum that spilled across her chest and lapping it up.");
			writeSpeech("mistress","","Oh, don't worry about helping clean up, playerF. I get the feeling maidF will be <i>more</i> than happy to help! Next time, I might even be able to talk her into threesome~!");
			writeSpeech("mistress","","Unfortunately, she can be pretty uptight about those sorts of things, so I'll need to talk to her about it privately. Feel free to use my shower if you need it!");
			writeText("With that, she lays back onto the table, clearly relaxing.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "mistress4" : {
			document.getElementById('output').innerHTML = '';
			writeText("She lays back onto the bench, pulling you with her as one leg keeps your hips against hers. Pressing her lips against your neck, you feel her gently kiss her way up to your ear, her cheek pressed against yours.");
			writeSpeech("mistress","","Y'know... The most I've ever done out here is go for a walk with a nice toy inside of me. Compared to feeling you against me...");
			writeText("Her leg pulls away, her body rolling back on the bench as her hands pull down the thick leggings.");
			writeText("She teases her pussy open with her fingers, her breathing hitching for a moment as she stretches her lips.");
			writeText("A second later, she's ready as her knees press against the wood of the bench, her ankles beside her head as she smiles.");
			writeSpeech("mistress","","Well, it's not a fair comparison at <i>all~!</i>");
			writeBig("images/mistress/4-1.jpg");
			writeSpeech("player","","You're one Hell of an exhibitionist, aren't you?");
			writeText("mistressF lets out a soft, melodious laugh.");
			writeSpeech("mistress","","I certainly try. But you don't plan on leaving me waiting, do you?");
			writeText("Despite saying that, it's obvious from the way she twitched that she wouldn't mind.");
			if(data.player.gender == "man")
				writeText("Undoing your belt, you lean into her, slapping your rapidly-hardening cock against her spread-open cunt as she moans quietly.");
			else
				writeText("You lift your skirt just enough to slide your panties down, your rapidly-hardening cock slapping down against her spread-open cunt as she moans quietly.");
			writeSpeech("mistress","","O-Oh fuuuck...!");
			writeText("Grabbing your dick by the base, you slap it down a few more times, getting most of your shaft slick with her fluids as she futilely tries to push her hips into your cock.");
			writeSpeech("player","","Coming out here, wearing practically nothing under that coat... How many times have you masturbated here? How many times have you squirted on this bench?");
			writeText("mistressF grits her teeth, leaning her head back and squirming every time your shaft slaps against her.");
			writeSpeech("mistress","","I have no idea...! I've done it so many times, I don't even know~!");
			writeText("Hefting your dick, you slap it against her forcefully one more time before leaning into her.");
			writeSpeech("player","","You know what that makes you, don't you?");
			writeText("Pitching your hips forward, you just barely avoid thrusting into her, your cockhead dragging against her clit as she lets out a half-disappointed squeak.");
			writeSpeech("mistress","","God... Tell me~ Call me names, please~!");
			writeSpeech("player","","Please, huh? Well aren't you a <i>polite</i> little <i><b>whore.</b></i>");
			writeText("You reach a hand forward to cover mistressF's mouth before thrusting in, feeling her hole stretch around you.");
			writeText("Despite your hand, you can still clearly hear her moan as her eyes roll up, her body shaking from the sudden push...");
			writeText("Until you pull out.");
			writeText("You pull your hand back for a moment...");
			writeSpeech("mistress","","W-Why'd you pull- <i>MMPH~!</i>");
			writeText("-and shove your thumb into her mouth, pressing against her tongue.");
			writeText("She quickly starts moving her mouth against your hand, a look of perverse glee going across her face as she starts sucking on your thumb like it was your cock.");
			writeText("Despite herself, she still manages to focus enough to keep her hands where they are - spreading her cunt open for you, instead of playing with herself and trying to cum.");
			writeSpeech("player","","What a perverted little <i>slut</i>...");
			writeText("You use your thumb to open her mouth, drool spilling across her chin as she pants, begging with her eyes for you to fuck her.");
			writeFunction("writeEncounter('mistress4a')", "Reward her focus and give her the fucking she wants");
			break;
		}
		case "mistress4-1" : {
			document.getElementById('output').innerHTML = '';
			writeText("Rolling with the situation, you let her pull you towards her body as she lays further back on the park bench, her other arm going over your shoulder as she pulls you close.");
			writeText("Her lips press hungrily against yours for a moment, her face a little flushed as she smiles at you.");
			writeText("Her other arm goes over your shoulder as she pulls you close, her lips pressing against your neck as she pulls you towards the bench.");
			writeText("You can feel the warmth of her hot, wet pussy pressing against your still-clothed, but rapidly hardening cock as she smirks.");
			writeSpeech("mistress","","Looks like you're looking forward to this~ Though, I wonder...");
			writeText("Her leg pulls away, her body rolling back on the bench as her hands pull down the thick leggings.");
			writeText("She teases her pussy open with her fingers, her breathing hitching for a moment as she stretches her lips.");
			writeText("A second later, she's ready as her knees press against the wood of the bench, her ankles beside her head as she smiles.");
			writeBig("images/mistress/4-1.jpg", "Art by Oreteki18kin");
			writeSpeech("mistress","","...how much of that excitement is from me, and how much is the <i>risk of getting caught~</i>");
			writeText("You see her tease her lips with her fingers, her own excitement visible from how wet she's getting.");
			writeSpeech("player","","You're really one Hell of an exhibitionist, aren't you?");
			writeText("mistressF lets out a soft, melodious laugh.");
			writeSpeech("mistress","","I certainly try. But you don't plan on leaving me waiting, do you?");
			if(data.player.gender == "man")
				writeText("Undoing your belt, you lean into her, slapping your rapidly-hardening cock against her spread-open cunt as she moans quietly.");
			else
				writeText("You lift your skirt just enough to slide your panties down, your rapidly-hardening cock slapping down against her spread-open cunt as she moans quietly.");
			writeSpeech("mistress","","O-Oh fuuuck...!");
			writeSpeech("player","","Believe me, you won't have to worry about waiting...");
			writeText("Grabbing your dick by the base, you slap it down a few more times, getting most of your shaft slick with her fluids as she futilely tries to push her hips into your cock.");
			writeSpeech("player","","Coming out here, wearing nothing but that coat and some leggings... How many times have you masturbated here? How many times have you squirted on this bench?");
			writeText("mistressF grits her teeth, leaning her head back and squirming every time your shaft slaps against her.");
			writeSpeech("mistress","","I have no idea...! I've done it so many times, I don't even know~!");
			writeText("You feel her reach out and pull your wrist towards her chest, the very distinct sensation of her nub pressing against your palm through her coat.");
			writeText("mistressF grits her teeth, leaning her head back and squirming every time your shaft slaps against her.");
			writeSpeech("mistress","","I have no idea...! I've done it so many times, I don't even know~!");
			writeText("Hefting your dick, you slap it against her forcefully one more time before leaning into her.");
			writeSpeech("player","","You know what that makes you, don't you?");
			writeText("Pitching your hips forward, you just barely avoid thrusting into her, your cockhead dragging against her clit as she lets out a half-disappointed squeak.");
			writeSpeech("mistress","","God... Tell me~ Call me names, please~!");
			writeSpeech("player","","Please, huh? Well aren't you a <i>polite</i> little <i><b>whore.</b></i>");
			writeText("You reach a hand forward to cover mistressF's mouth before thrusting in, feeling her hole stretch around you.");
			writeText("Despite your hand, you can still clearly hear her moan as her eyes roll up, her body shaking from the sudden push...");
			writeText("Until you pull out.");
			writeText("You pull your hand back for a moment...");
			writeSpeech("mistress","","W-Why'd you pull- <i>MMPH~!</i>");
			writeText("-and shove your thumb into her mouth, pressing against her tongue.");
			writeText("She quickly starts moving her mouth against your hand, a look of perverse glee going across her face as she starts sucking on your thumb like it was your cock.");
			writeText("Despite herself, she still manages to focus enough to keep her hands where they are - spreading her cunt open for you, instead of playing with herself and trying to cum.");
			writeSpeech("player","","What a perverted little <i>slut</i>...");
			writeText("You use your thumb to open her mouth, drool spilling across her chin as she pants, begging with her eyes for you to fuck her.");
			writeFunction("writeEncounter('mistress4a')", "Reward her focus and give her the fucking she wants");
			break;
		}
		case "mistress5" : {
			document.getElementById('output').innerHTML = '';
			writeHTML(`
				t mistressF helps line you up with maidF's pussy, your head almost pressing into her as mistressF keeps those lips spread wide. 
				sp mistress; Come on stud~ She's all wet and ready for you, her cute little cunny is practically <i>begging</i> to be used like your <i>personal pocket-pussy~!</i>
				t You pause slightly, looking up at maidF first...
				sp maid; P-Please... Use me, *Master playerF. I want mistressF to watch me get pumped full...!
				sp player; Then let's get started.
			`);
			writeBig("images/mistress/threesome1.jpg","Art by Oreteki18kin");
			writeHTML(`
				sp mistress; Ooh~!
				t maidF lets out a shuddering moan as you push into her, looking away in flushed embarrassment as mistressF excitedly watches you fuck her.
				t mistressF looks up at you with a wide smile and a wink, before leaning her head forward just a little bit.
				sp maid; <i><b>U-UOH~!</b></i>
				t mistressF's tongue teases at maidF's clit, each flick of the tongue against it causing maidF to tighten around your cock sharply, which mistressF enjoys using to tease you both.
			`);
			writeText("As maidF squirms more and more beneath you, mistressF pushes her arms against maidF's thighs harder to keep her steady.");
			writeSpeech("mistress","","Hold still, slut~ Your *Master's trying to use you to get off!");
			writeText("Looking up at you, she clearly mouths \"Go faster\" with a grin, before taking her tongue back to maidF's clit.");
			writeText("You're more than happy to oblige, pulling your cock out of her hot, wet folds before thrusting harder and faster, every inch of your cock rapidly sliding in and out of her.");
			writeSpeech("maid","","O-Oh <i><b>god</b></i> of f-fuh-<i><b>FUCK</b></i> p-please~!");
			writeText("mistressF lets out a laugh, shaking her head.");
			writeSpeech("mistress","","That's 'slutty maid' for <i><b>'fuck me harder.'</b></i>");
			writeText("mistressF's grin is almost malicious as she moves one hand, toying with maidF's clit even more as you nod.");
			if(checkFlag('maid','OrgasmLock')){writeText("If she could cum right now, you're sure that she'd be squirting her brains out.");}
			writeText("maidF lets out a high squeal, rolling her head back and continuing to haltingly sputter out half-words and high-pitched moans.");
			writeText("mistressF keeps teasing maidF's clit while you keep thrusting, the constant overload of sensation causing maidF to squeeze around you unpredictably.");
			writeSpeech("player","","Fuck, I'm already...!");
			writeText("Hearing you mutter that, you can see mistressF get visibly more excited.");
			writeSpeech("mistress","","Yes, yes, yes...! Pump my slutty maid full~! You've got us both so horny, so blow your hot, sticky load inside your <i>sex-toy~!</i>");
			writeSpeech("maid","","Inside...~! M-*Master, p-please~!"+(checkFlag('maid','OrgasmLock') ? " Make me cum with your jizz~!" : ""));
			writeText("maidF's squeezing gets even more sporadic as her breathing speeds up, mistressF's hands spreading maidF again as she stares down at your cock, almost enchanted by the sight.");
			writeSpeech("player","","Cumming!");
			writeBig("images/mistress/threesome2.jpg","Art by Oreteki18kin");
			writeSpeech("maid","","<i><b>YES~!</b></i>");
			writeSpeech("mistress","","Woah~!");
			writeText("maidF's eyes roll up, her entire body tensing as she's pushed over the edge by being filled up with your cum.");
			writeText("You buck your hips several times as you pump her full, but mistressF's enraptured face just makes too good of a target...");
			writeSpeech("mistress","","Waah~!?");
			writeText("She gives a small shout as you pull completely out, your cock mere inches from her face as you buck your hips again and spurt cum all over her.");
			writeText("mistressF's shock wears off quickly, at which point she lets out a happy giggle.");
			writeSpeech("mistress","","I must've done good to get a reward, *Master~");
			writeText("Her face half-covered in cum, mistressF looks back down at maidF's pussy, letting out a small coo as she sees how much cum is spilling out.");
			writeBig("images/mistress/threesome3.jpg","Art by Oreteki18kin");
			writeText("mistressF's hand goes down a bit, pooling a bit of the cum in her hand for a second before letting it drip down again, teasing maidF a bit in the process.");
			writeText("But really, maidF's had enough fun getting her cunt played with for now.");
			writeSpeech("player","","mistressF.");
			writeText("She pauses, perking up at her name with a smile.");
			writeSpeech("mistress","","Yes, *Master~?");
			writeSpeech("player","","Your turn.");
			writeText("She grins, nodding as she reaches up to her face.");
			writeText("She pools most of it into her hands as she moves back a bit on the bed, moving right up to maidF's head.");
			writeSpeech("mistress","","Open~");
			writeText("Barely waiting a moment, mistressF pours your cum into maidF's mouth, who swallows it almost reflexively.");
			writeText("Though, mistressF pauses for a moment to get a little off of maidF's chin first, lapping it up with her own tongue before turning back to you.");
			writeText("Shifting her posture, she's crouching just past maidF's face as she beckons you over.");
			writeSpeech("mistress","","I got a good view of my slutty maid-toy getting fucked, so I thought I'd repay the favor while you <i>pound me like a bitch~!</i>");
			writeBig("images/mistress/threesome4.jpg","Art by Oreteki18kin");
			writeText("You approach her carefully, minding maidF's arms as you kneel above her as well.");
			writeText("maidF takes a deep breath as you move over her, letting out a pleased hum as she nudges her face against your balls.");
			writeSpeech("maid","","God, you just came but they still seem so full~");
			writeText("mistressF grins, rolling her hips a bit for you.");
			writeSpeech("mistress","","We'll just have to fix that then, won't we~?");
			writeSpeech("player","","Sounds good to me.");
			writeText("Her eyes widen slightly in surprise as you thrust forward - seems like she was expecting a bit more playful banter.");
			writeText("Still, given the way she shudders as you push into her pussy, she won't be complaining.");
			writeBig("images/mistress/threesome5.jpg","Art by Oreteki18kin");
			writeText("She grins widely, a shuddering moan spilling out of her as she does.");
			writeSpeech("mistress","","Haah, you are just so <i><b>perfect~!</b></i> It's nothing like a dildo, it's <i>so much better...~!</i>");
			writeText("She lets out a laugh, enjoying every second as you push deeper and deeper into her, before slowly pulling back out.");
			writeText("maidF's face is getting spattered with every thrust, each drop on her skin making her squirm and moan more.");
			writeText("She's getting off on this <b>hard.</b>");
			writeText("Noticing this, mistressF smirks.");
			writeSpeech("mistress","","Oh, and maidF?");
			writeSpeech("maid","","Hah~?");
			writeSpeech("mistress","","I want a nice, <i>fat</i> load, and you went and drained so much... You know what to do, don't you?");
			writeText("You can feel maidF's breathing speed up beneath you.");
			writeSpeech("mistress","","<i><b>Lick.</b></i>");
			writeText("There's no hesitation as maidF's mouth goes to your balls, hungrily teasing them with her lips and tongue.");
			writeText("You let out a moan as you go, slowing down in your thrusts for a moment before mistressF hums once, looking up at you with an almost defiant amusement.");
			writeSpeech("mistress","","Hoh? Oh my, it seems like the two of us together might be a bit too much~");
			writeText("She looks at you smugly, but you can see it in her eyes.");
			writeText("She <b>wants</b> to be punished.");
			writeSpeech("mistress","","If you like, we can slow-");
			writeText("You roughly grab her by the chin, <b>bucking</b> your hips forward as the words turn to a moan in her throat.");
			writeText("You bring her face to yours, making her look you in the eyes as you speak.");
			writeSpeech("player","","Are you that desperate for discipline, <i><b>bitch?</b></i>");
			writeText("She shudders as you degrade her, but she keeps smirking despite it.");
			writeSpeech("mistress","","It's been years since I was anything but a domme. If you want me to submit in front of my fucktoy, <i>*Master,</i> then you'll need to <i>earn it~</i>");
			writeText("She's willful...");
			writeText("But that's only going to make things more fun.");
			writeText("You maintain eye contact, focusing on her as you time your thrusts.");
			writeSpeech("player","","You're enjoying this, aren't you?");
			writeSpeech("mistress","","Oh, so much~");
			writeText("The rhythmic slapping of your hips against hers rings out like a metronome, the only interruption to it being mistressF's moans and maidF's ball-worshipping.");
			writeSpeech("player","","I bet you think you can outlast me, don't you? That I'll cum while going <b>deeper</b> and <b>deeper.</b>");
			writeText("She blinks once, her focus shifting briefly before she laughs again.");
			writeSpeech("mistress","","Your words, not mine~");
			writeSpeech("player","","But the truth is that you <i>want</i> to lose.");
			writeText("mistressF lets out a small, involuntary grunt.");
			writeSpeech("player","","You want to be used even harder than your little ball-licking fucktoy, don't you?");
			writeText("She swallows sharply, her eyes continuing to unfocus.");
			writeSpeech("player","","There's nothing you want more than to be dominated, and reduced to a cum-drinking <i>cum-dump <b>breeding-bitch.</b></i>");
			writeText("her body tenses up sharply, another throaty hum of pleasure coming from her throat.");
			writeSpeech("mistress","","I... I feel...?");
			writeSpeech("player","","You feel <b>sensitive,</b> don't you?");
			writeText("She doesn't even realize she's been put under, her pleasure growing as you release her chin and keep fucking her.");
			writeSpeech("mistress","","Y-Yes...");
			writeSpeech("player","","You feel <b>empty</b> when I pull out, don't you?");
			writeSpeech("mistress","","H-Hn...!");
			writeSpeech("player","","But you feel so <b>full</b> when I'm inside... Right, <b>bitch?</b>");
			writeText("mistressF bites her lip, failing to keep in a groan of pleasure.");
			writeSpeech("player","","And every single thrust just makes you feel more and more like you belong, like the only thing you <i>deserve</i> to be used by me.");
			writeText("You give her cheek a light slap, her cunt squeezing tightly as you do.");
			writeSpeech("player","","You might be maidF's mistress, mistressF...");
			writeSpeech("player","","But you're <i><b>my <font size='+1'>bitch.</font></b></i>");
			writeSpeech("mistress","","F-Fuck yes...~!");
			writeText("She lets out heavy, breathy moans as her hips shake against you.");
			writeSpeech("player","","And feel free to act up again, bitch. Because when you do...");
			writeText("You drop your voice low, leaning forward.");
			writeSpeech("player","","I'll remind you of your place, and just how much you love it.");
			writeSpeech("mistress","","Y-Yes...! Thank you, *Master~!");
			writeText("She lets out a soft laugh, her breathing still heavy as she tries to squeeze around you to make every thrust pleasurable.");
			writeSpeech("mistress","","Fuck me, use me, fill me up and paint my body with your jizz...! Promise to make me your fucktoy, and I'll be your loyal <i>bitch~!</i>");
			writeText("Feeling your own climax approaching again, you laugh at her, which only seems to make her tighter.");
			writeSpeech("player","","Then take my load like a good girl, slut.");
			writeSpeech("mistress","","Oh God yes, thank you~!");
			writeText("She takes a deep breath as you piston in, your balls gently slapping against maidF's face as you thrust into her mistress, until...");
			writeSpeech("player","","Cumming...!");
			writeSpeech("mistress","","<i><b>UOOOHH~!</b></i>");
			writeBig("images/mistress/threesome6.jpg","Art by Oreteki18kin");
			writeText("As you pump your bitch full of cum, you can see her cum onto maidF's face, whose own body seems to tense up.");
			if(checkFlag('maid','OrgasmLock')){writeText("Another unexpected effect from the orgasm trigger... Just seeing you both cum managed to make her orgasm hands-free.");}
			writeText("When you finally finish cumming, you pull out of mistressF's pussy with a wet sound, followed by your cum spilling out.");
			writeBig("images/mistress/threesome7.jpg","Art by Oreteki18kin");
			writeText("mistressF seems overjoyed for a moment before managing to collect herself, getting down onto the bed next to maidF.");
			writeText("Her voice seems softer now as she lays down, her fingers gently tracing along maidF's face with a smile.");
			writeSpeech("mistress","","You were wonderful, maidF~");
			writeText("mistressF gently kisses her cheek before looking over to you, smiling dopily from the orgasm.");
			writeSpeech("mistress","","You too~ Doms deserve some loving aftercare too~");
			writeText("Before you can really respond, you're pulled towards the two of them as mistressF basically uses you as a big cuddly body-pillow.");
			writeText("You can hear a faint, half-hearted chuckle from maidF as she looks at you.");
			writeSpeech("maid","","Looks like your bitch is experiencing puppy love, *Master...");
			writeSpeech("mistress","","Hush, or no cuddles for you...");
			writeText("You can't help but laugh at that, shaking your head a bit as you relax.");
			if(data.player.location != 'gallery'){
				writeText("...");
				writeText("A while later, when mistressF is all cuddled out, you all get up to clean up, rinse off, and head out.");
				writeText("It takes a while, particularly when mistressF tried to pull aside maidF for a little fingerbanging, but it was fun.");
				writeText("Still, it's about time to get going - time waits for no man, and all that...");
			}
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
{index: "mistressReward", trust: 115,},
//{index: "mistressRewardDuo", trust: 55,},
{index: "mistressMaid1", requirements: "?trustMin mistress 100; ?trustMax mistress 110; ?trustMin maid 100; ?trustMax maid 110;",},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	switch (name) {
		case "mistressMaid1" : {
			if(checkTrust('maid') == 100)
				setTrust('maid',105);
			if(checkTrust('mistress') == 100)
				setTrust('mistress',105);
			writePhoneSpeech("mistress","","test");
			writePhoneSpeech("maid","","It looks like the group chat is working, mistressF.");
			writePhoneSpeech("mistress","","Nice, now we can chat about raunchy things and stuff all together!");
			writePhoneSpeech("mistress","","maidF, say what kink gets you off the hardest");
			writePhoneSpeech("maid","","That doesn't feel appropriate to send as a text message.");
			writePhoneSpeech("mistress","","You say that, but you know you wanna");
			writePhoneSpeech("mistress","","Obviously I love public play, but what about you playerF? What gets you hardest?");
			writePhoneChoices("Maidplay","Public play","Hypnosis");
			//writePhoneChoices("Hand-holding", "I'd rather not say");
			document.getElementById('phoneRight').innerHTML += `
					<p class="choiceText" onclick="phoneChoice('D')">
						` + replaceCodenames("Hand-holding") + `
					</p>
			`;
			document.getElementById('phoneRight').innerHTML += `
					<p class="choiceText" onclick="phoneChoice('E')">
						` + replaceCodenames("I'd rather not say") + `
					</p>
			`;
			break;
		}
		case "mistressMaid1A" : {
			writePhoneSpeech("player","","Maidplay.");
			writePhoneSpeech("mistress","","Ooh, nice");
			writePhoneSpeech("maid","","I feel both embarrassed and flattered at once.");
			writePhoneSpeech("mistress","","Clearly you are a fellow person of culture as well");
			writePhoneSpeech("mistress","","I really like how the skirt is really long, so even if the maid gets so crazy turned on that she starts dripping right through her panties, you still can't tell unless you order them to sheepishly raise their skirt to show you exactly how turned their Mistress made them");
			writePhoneSpeech("mistress","","You know, to use a really non-specific example");
			writePhoneSpeech("maid","","I am back to solely embarrassment now.");
			writePhoneSpeech("mistress","","If you weren't about to go out for errands, you know you'd do it for me");
			writePhoneSpeech("mistress","","But I bet you'd enjoy it even more if it was for playerF, wouldn't you~?");
			writePhoneSpeech("maid","","Speaking of errands, don't you have a meeting that you should be getting dressed for?");
			writePhoneSpeech("mistress","","Changing the subject won't hide that you've totally get the hots for playerF and want him to ravage that sexy body of yours");
			writePhoneSpeech("mistress","","Also I can't find my pants, I don't want to wear a skirt to the meeting and it's been so long since I wore slacks that I don't remember where they are");
			writePhoneSpeech("maid","","I'll show you in just a second.");
			writePhoneSpeech("mistress","","Yay, thanks hun~ As a reward, I'll make sure to share playerF's cum with you next time~");
			writePhoneSpeech("mistress","","Hahahaha playerF she just stomped in all blushing and embarrassed");
			writePhoneSpeech("maid","","I did not 'stomp' anywhere.");
			writePhoneSpeech("mistress","","So you admit the rest was true~");
			writePhoneSpeech("mistress","","Ahhh she jst threw a pllow at me, what a cruel wrold");
			writePhoneSpeech("maid","","I did no such thing!");
			writePhoneSpeech("mistress","","Hah, just messing around.");
			writePhoneSpeech("mistress","","Oh, forgot to say, but good morning playerF! Hope it's going good and stays that way");
			writePhoneSpeech("maid","","Ah, yes - I hope you have a wonderful and not-at-all-embarrassing remainder of the morning.");
			writePhoneSpeech("mistress","","You know you love it~");
			break;
		}
		case "mistressMaid1B" : {
			writePhoneSpeech("player","","Public-play.");
			writePhoneSpeech("mistress","","Ooh, a fellow person of culture I see");
			writePhoneSpeech("maid","","I'm surrounded by perverts.");
			writePhoneSpeech("mistress","","And you're loving every second of it~");
			writePhoneSpeech("mistress","","I bet you wanna be sandwiched between our bodies right now, don't you?");
			writePhoneSpeech("maid","","Oh, hush. You're even lewder than usual today.");
			writePhoneSpeech("mistress","","Maybe, but I wanna hear you say it");
			writePhoneSpeech("mistress","","And I want playerF to see you type it~");
			writePhoneSpeech("mistress","","Consider it a request from your Mistress");
			writePhoneSpeech("maid","","...");
			writePhoneSpeech("maid","","I want to be pinned down and fucked while I make you cum with my tongue, Mistress.");
			writePhoneSpeech("maid","","I want to feel playerF's cum dribbling down from your well-fucked pussy all over my face while you call me a slutty maid.");
			writePhoneSpeech("maid","","This is embarrassing.");
			writePhoneSpeech("mistress","","If I didn't have a meeting later, I'd say to keep going");
			writePhoneSpeech("mistress","","Also we're running low on milk, can you pick some up?");
			writePhoneSpeech("maid","","Of course.");
			writePhoneSpeech("mistress","","You're a darlign~");
			writePhoneSpeech("mistress","","Darling, even");
			writePhoneSpeech("maid","","Have a good meeting mistressF, and I hope you have a wonderful remainder of the morning playerF.");
			writePhoneSpeech("player","","You too, maidF. And good luck with your meeting.");
			writePhoneSpeech("mistress","","The only luck I need is in finding my pants, since wearing a skirt ends up distracting people and making the meeting take longer");
			writePhoneSpeech("mistress","","I swear, one of these days I'll pay attention when maidF tells me where everything's put");
			writePhoneSpeech("maid","","I'll grab them for you in just a moment.");
			writePhoneSpeech("mistress","","Thanks love~");
			break;
		}
		case "mistressMaid1C" : {
			writePhoneSpeech("player","","Hypnosis.");
			writePhoneSpeech("mistress","","Ooh, I never tried that sort of thing, but I've seen a lot of porn about it");
			writePhoneSpeech("mistress","","Most of it was actually good, too");
			writePhoneSpeech("mistress","","You should totally hypnotize me some time, I would LOVE to try it out");
			writePhoneSpeech("maid","","It can also be used for not-lewd things, you know. Like relaxing.");
			writePhoneSpeech("mistress","","If I want to relax, I'll ask my cute maid to give me a massage.");
			writePhoneSpeech("mistress","","I hear she totally gets off on pleasing her mistress.");
			writePhoneSpeech("maid","","What a coincidence, I have errands to run and conveniently am unable to continue texting.");
			writePhoneSpeech("mistress","","Ah, shoot, that means I have to put on pants and go to a meeting doesn't it");
			writePhoneSpeech("maid","","If it's on the calendar, then yes.");
			writePhoneSpeech("mistress","","Blegh, meetings are boring. I swear, one of these days I'll get bored enough to put a vibe in before I go");
			writePhoneSpeech("maid","","I feel like that could end badly.");
			writePhoneSpeech("mistress","","Yeah yeah I was joking, I wouldn't actually jeapordize my money");
			writePhoneSpeech("mistress","","Otherwise I couldn't pay my cute maid to take care of me");
			writePhoneSpeech("mistress","","But seriously, where are my pants, I don't wanna wear a skirt to the meeting");
			writePhoneSpeech("maid","","I know where they are, I'll grab them for you in a second.");
			writePhoneSpeech("mistress","","Yay, thanks~");
			writePhoneSpeech("mistress","","You have a wonderful day too, playerF! Counsel those students and stuff!");
			writePhoneSpeech("maid","","Yes, have a good day playerF. I look forward to talking more later.");
			break;
		}
		case "mistressMaid1D" : {
			writePhoneSpeech("player","","Hand-holding.");
			writePhoneSpeech("maid","","Oh my.");
			writePhoneSpeech("mistress","","I can't believe you'd admit to something so degenerate");
			writePhoneSpeech("mistress","","You fiend");
			writePhoneSpeech("mistress","","I bet you've been imagining holding maidF's hand all the time");
			writePhoneSpeech("maid","","Why my hand specifically?");
			writePhoneSpeech("mistress","","Entwining your fingers together while walking down the street");
			writePhoneSpeech("mistress","","The gentle warmth of each other's hands while you shop");
			writePhoneSpeech("mistress","","And even holding hands in bed");
			writePhoneSpeech("mistress","","While kissing");
			writePhoneSpeech("mistress","","And stuff");
			writePhoneSpeech("maid","","...You just turned yourself on, didn't you?");
			writePhoneSpeech("mistress","","Shut up. Vanilla is a great flavor.");
			writePhoneSpeech("maid","","I agree, but what I asked was if the thought of watching me and playerF hold hands turned you on.");
			writePhoneSpeech("mistress","","Ahhhhhhhh playerF my slutty maid is bullying me!");
			writePhoneChoices("You did it to yourself","Don't tease your mistress so much, maidF","Good girl.")
			break;
		}
		case "mistressMaid1DA" : {
			writePhoneSpeech("player","","You did this to yourself, you know.");
			writePhoneSpeech("maid","","Thank you playerF.");
			writePhoneSpeech("mistress","","Ahhhh now both of your are bullying me!");
			writePhoneSpeech("mistress","","This isn't the kind of double-teaming I wanted!");
			writePhoneSpeech("mistress","","Oop, gotta get going, meeting starts in 15");
			writePhoneSpeech("maid","","Ah, good luck with it.");
			writePhoneSpeech("player","","Yeah, good luck.");
			writePhoneSpeech("mistress","","Thanks!");
			writePhoneSpeech("maid","","I'm also about to head out as well, have some short errands to run. I hope you have a wonderful remainder of the morning, playerF.");
			writePhoneSpeech("player","","You too, maidF.");
			break;
		}
		case "mistressMaid1DB" : {
			writePhoneSpeech("player","","Don't tease your mistress so much, maidF.");
			writePhoneSpeech("maid","","Yes, *Master.");
			writePhoneSpeech("mistress","","That worked?");
			writePhoneSpeech("mistress","","I mean, Yay! Didn't know you called playerF *Master though, good to know~");
			writePhoneSpeech("mistress","","I wonder what you sound like when you're moaning \"*Master playerF~\"");
			writePhoneSpeech("mistress","","Aw heck");
			writePhoneSpeech("maid","","You just turned yourself on at the thought, didn't you?");
			writePhoneSpeech("mistress","","No");
			writePhoneSpeech("mistress","","Actually yes, imagining my slutty maid moaning always gets me hot");
			writePhoneSpeech("mistress","","But the heck was because I have a meeting in a little bit, so I can't keep texting");
			writePhoneSpeech("maid","","Ah. In that case, have a wonderful meeting, and I hope it's over quickly.");
			writePhoneSpeech("mistress","","It's supposed to be, but you know how it is");
			writePhoneSpeech("mistress","","I need to find some pants");
			writePhoneSpeech("maid","","I know where they are, I'll grab them for you in a second.");
			writePhoneSpeech("mistress","","Yay, thanks~");
			writePhoneSpeech("mistress","","You have a wonderful day too, playerF! Counsel those students and stuff!");
			writePhoneSpeech("maid","","Yes, have a good day playerF. I look forward to talking more later.");
			break;
		}
		case "mistressMaid1DC" : {
			writePhoneSpeech("player","","Good girl.");
			writePhoneSpeech("mistress","","Oh my god, I heard that moan");
			writePhoneSpeech("maid","","I wasn't that loud.");
			writePhoneSpeech("maid","","And we're in the same room.");
			writePhoneSpeech("maid","","I'm going to handle errands now.");
			writePhoneSpeech("mistress","","Hah, you're still super cute when you're being teased");
			writePhoneSpeech("player","","Yes, you're definitely adorable.");
			writePhoneSpeech("maid","","Thank you.");
			writePhoneSpeech("mistress","","Haa, she's blushing super hard now");
			writePhoneSpeech("mistress","","Shoot, it actually is almost time for work");
			writePhoneSpeech("maid","","You have a meeting later today, yes.");
			writePhoneSpeech("mistress","","K, I'm gonna put on pants then, like a responsible adult");
			writePhoneSpeech("maid","","You don't need pants to be a responsible adult. I wear a skirt.");
			writePhoneSpeech("mistress","","Ooh, she's admitting that she goes out without pants");
			writePhoneSpeech("mistress","","What an exhibitionist");
			writePhoneSpeech("maid","","Have a wonderful day playerF.");
			writePhoneSpeech("mistress","","Wait what about me");
			writePhoneSpeech("maid","","Have a day.");
			writePhoneSpeech("mistress","","Ahhh, you're also cute when you're being defiant");
			writePhoneSpeech("mistress","","But I'm sure playerF won't mind helping me even out the score~");
			writePhoneSpeech("mistress","","Still, I need those pants");
			writePhoneSpeech("mistress","","Have a good day you two~");
			break;
		}
		case "mistressMaid1E" : {
			writePhoneSpeech("player","","I'm with maidF - it's not really appropriate content for texting.");
			writePhoneSpeech("mistress","","Bweh, I'm surrounded by fuddy-duddies");
			writePhoneSpeech("mistress","","I'll make this chat lewd as heck though, just you wait");
			writePhoneSpeech("maid","","I believe you. By the way, how is your day playerF?");
			writePhoneSpeech("player","","It's off to a good start - a lively one, at that.");
			writePhoneSpeech("maid","","Yes, mistressF always has been excitable. I had to walk her through making a group chat, since she's not very good with phones, but she was quite excited at the prospect.");
			writePhoneSpeech("mistress","","How dare you, my secret is out");
			writePhoneSpeech("mistress","","Now he'll know I like him for more than just his juicy dick");
			writePhoneSpeech("maid","","You're secretly wholesome.");
			writePhoneSpeech("mistress","","Nooooo, I'm lewd as heck, stop calling me wholesome!");
			writePhoneSpeech("player","","You're wholesome and cute.");
			writePhoneSpeech("maid","","Yes, definitely cute.");
			writePhoneSpeech("mistress","","This isn't the kind of double-teaming I wanted!");
			writePhoneSpeech("mistress","","Oop, gotta get going, meeting starts in 30");
			writePhoneSpeech("maid","","Ah, good luck with it.");
			writePhoneSpeech("player","","Yeah, good luck.");
			writePhoneSpeech("mistress","","Thanks!");
			writePhoneSpeech("maid","","I'm also about to head out as well, have some short errands to run. I hope you have a wonderful remainder of the morning, playerF.");
			writePhoneSpeech("player","","You too, maidF.");
			break;
		}
		case "mistressReward" : {
			writePhoneImage("images/mistress/fin.jpg", "Art by Oreteki18kin");
			if(galleryCheck("mistress2") && galleryCheck("mistress3"))
				writePhoneSpeech("mistress", "", "You've finished all of "+data.story[6].fName+"'s content for this version, congratulations!");
			else{
				writePhoneSpeech("mistress", "", "You've finished all of "+data.story[6].fName+"'s content for this version, congratulations! One of the scenes has a slightly different variant, though. To see it, either complete all of maidF's content before mistressF's second sex-scene, or click the button below. This may also open a screen mentioning a location bug - please ignore it.");
				writePhoneChoices("Unlock the Gallery");
			}
			break;
		}
		case "mistressRewardA" : {
			if(galleryCheck("mistress2") && galleryCheck("mistress3")){
				writePhoneImage("images/mistress/fin.jpg", "Art by Oreteki18kin");
				writePhoneSpeech("mistress", "", "You've finished all of "+data.story[6].fName+"'s content for this version, congratulations!");
			}
			else{
				hideStuff();
				writeEvent("mistress2");
				writeEvent("mistress3");
				document.getElementById('output').innerHTML = '';
				writeSpecial("A new scene has been added to mistressF mistressL's Gallery.");
				writeSpecial("These are available from the computer at your home.");
				writeFunction("changeLocation(data.player.location)", "Return home");
			}
			break;
		}
		case "mistressRewardDuo" : {
			writePhoneImage("images/maid/rewardDuo.jpg", "Art by Oreteki18kin");
			writePhoneSpeech("mistress", "", "You've finished all content for this path for this version, congratulations! This is an alternate way of advancing mistressF's story - if you restart her story and spend time at the park, you might see another route with more content.");
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