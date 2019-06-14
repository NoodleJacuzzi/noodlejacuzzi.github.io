function writeScene(scene) {
	switch(scene) {
		case "start" : {
			document.getElementById('output').innerHTML +=`
				<p class = "centeredText">Lastest News 6/14/2019</p>
				<p class = "centeredText">Version 0.9 of HAA</p>
				<p class = "centeredText">Thank you to Lasse Bannow, and Brandon, who've pledged their support!</p>
			`;
			writeTransition("news", "View all news updates");
			writeText("<br>");
			writeTransition("commissions", "Commissioned scenes (Currently none)");
			document.getElementById('output').innerHTML +=`
				<br>
				<p class = "centeredText">Today's Discussion Thread: Reccomendations</p>
				<p class = "centeredText">I'd like to use this opportunity to expand some horizons. If you have a game, story, doujin, or porn video with themes or content similar to the ones in Human Alteration App, Rainy DayZ, or Princess Quest, I'd love to hear about them.</p>
				<p class = "centeredText">As an incentive, feel free to check out some of my personal recommendations in the TFgames thread. I'll put them up here within a few days.</p>
			`;
			//writeTransition("recommendations", "Recommendations");
			writeText("<br><br>");
			writeBig("images/logo.png");
			writeTransition("HAAD", "Dom Route Preview");
			writeTransition("HAAS", "Sub Route Preview");
			writeTransition("downloadHAA", "Download Human Alteration App");
			document.getElementById('output').innerHTML +=`
				<p class="choiceText" onclick="window.location.href='https://tfgames.site/phpbb3/viewtopic.php?f=6&t=12458'">TFGames Discussion thread</p>
				<p class="choiceText" onclick="window.location.href='https://f95zone.to/threads/human-alteration-app-v0-6-5-noodlejacuzzi.28823/'">F95Zone Discussion thread</p>
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Human%20Alteration%20App/Human%20Alteration%20App.html'">Play the game online</p>
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Human%20Alteration%20App/Human%20Alteration%20App%20Mobile.html'">Play the mobile version</p>
			`;
			writeText("Human Alteration App v0.9");
			writeText("You find yourself with a phone app that can alter people's minds and bodies. Choose between one of two routes where either you're in control of the world or the app is stolen from you. There's a clear sense of progression throughout and no focus on grinding.");
			writeText("Dom route tags: Incest (optionally non blood-related), Mind Control, Sluttification, Degradation, Exhibitionism, Watersports (optional, not yet implemented)");
			writeText("Sub route tags: 2D Art, Incest (optionally non blood-related), Sissification, Female-to-Shemale Transformation, Cum Eating, Sounding, NTR (mild & optional), Smothering (not yet implemented), Watersports (optional, not yet implemented)");
			writeBig("images/PrincessQuest.jpg");
			writeText("Princess Quest v1.0");
			writeText("Play as Princess Elizabeth as she navigates caves and castle dungeons to rid her people of a demon's foul curse, unaware that she's playing right into the demon's hands.");
			writeText("Uses art done by Neromashin. It's all from a game named 'Oujo & Onna Kishi W Do Gehin Roshutsu ~Chijoku no Misemono Dorei~' published by PinPoint. You can find the official website of the game at http://www.pin-point.biz/27_wdgr/index.html, but it's in Japanese. There is an English version coming to steam, but I've heard negative things about the translation's quality.");
			writeText("As a note, I really do not reccommend playing this on mobile. There have also been a few issues with playing it online. As it's only 4 megs, downloading it is the reccomended way to play.");
			writeText("Tags: Moral Degradation, Corruption, Tentacles, Cum Inflation, Exhibitionism");
			writeTransition("PrincessQuest", "Preview");
			writeTransition("downloadPrincessQuest", "Download Princess Quest");
			document.getElementById('output').innerHTML +=`
				<p class="choiceText" onclick="window.location.href='https://tfgames.site/phpbb3/viewtopic.php?f=60&t=12578'">Discussion thread</p>
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Princess%20Quest/Princess%20Quest.html'">Try the game online</p>
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Princess%20Quest/Princess%20Quest%20Mobile.html'">Try the mobile version (NON-FUNCTIONAL)</p>
			`;
			writeBig("images/RainyDayZ.jpg");
			writeText("Rainy DayZ v1.0");
			writeText("In a world where a zombie virus has spread, transforming people into voracious sex-hungry shemales, you play as a young woman searching for supplies to survive.");
			writeText("Navigate a town and city deliberately working to sabotage yourself and throw yourself into the clutches of the zombie hordes, the goal of the game here is to be defeated and attacked to collect and unlock all of the game's scenes.");
			writeText("Tags: Shemale, Female-to-Shemale Transformation, Rape, Corruption, Zombification, Bestiality (optional), Parasites (optional)");
			writeTransition("RainyDayZ", "Preview");
			writeTransition("downloadRainyDayZ", "Download Rainy DayZ");
			document.getElementById('output').innerHTML +=`
				<p class="choiceText" onclick="window.location.href='https://tfgames.site/phpbb3/viewtopic.php?f=6&t=12575'">Discussion thread</p>
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Rainy%20DayZ/Rainy%20DayZ.html'">Play the game online</p>
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Rainy%20DayZ/Rainy%20DayZ%20Mobile.html'">Play the mobile version</p>
			`;
			break;
		}
		case "news": {
			writeText("<b>6/14/2019</b> - Human Alteration App v0.9");
			writeText("Sub Route Complete");
			writeText("2 new sub route scenes, 3 endings");
			writeText("<b>6/7/2019</b> - Human Alteration App v0.8");
			writeText("Dom Route Update");
			writeText("9 new dom route scenes");
			writeText("<b>5/31/2019</b> - Human Alteration App v0.7.5");
			writeText("Sub Route Update");
			writeText("11 new sub route scenes");
			writeText("<b>5/26/2019</b> - Rainy DayZ v1.0");
			writeText("Full game release");
			writeText("6 new scenes, 14 scenes in the game total");
			writeText("<b>5/24/2019</b> - Human Alteration App v0.7");
			writeText("Dom Route Update");
			writeText("7 new dom route scenes");
			writeText("<b>5/20/2019</b> - Princess Quest v1.0");
			writeText("Full game release");
			writeText("5 new scenes, 9 scenes in the game total");
			writeTransition("start", "Go Back");
			break;
		}
		case "commissions": {
			writeText("There's nothing here yet, consider donating to my Patreon if you'd like to commission a scene!");
			writeTransition("start", "Go Back");
			break;
		}
		case "HAAD" : {
			route = "dom";
			writeText("You awaken in the morning, eager to appreciate the fruits of your labor. You walk out of your room, eager to see your mother transformed into the sex-fiend of your dreams, but you stop in your tracks as you walk past her room. Her door is cracked slightly open.");
			writeBig("images/solo2.gif");
			writeText("Still laying in bed well into the morning, your mother is rubbing at her pussy. The wet spot on her sheets leads you to believe she's been at it for quite a while now. Her moans have a tinge of panic to them as she rolls onto her side.");
			writeSpeech("Lisa", "scripts/gamefiles/real/oldfile0.jpg", "God, oh god... What's happening to me? Got to get help... Got to...");
			writeText("Your mother slides out of bed, her hand still furiously jilling herself. She can't even make it halfway to the door before she leans back onto the wall.");
			writeBig("images/solo1.gif");
			writeText("Her rubbing reaches a crescendo and her body convulses, but even afther hand keeps rubbing. Her moans and whimpers are quick and panicked.");
			writeText("You may have raised some of those values too far. You bring up the app and change factors like libido and cooldown period, and soon enough your mother slumps against the wall, exhausted.");
			writeText("If you wan't to take full advantage of the app, you'll need to develop your skills with it. Since it seems like breakfast is off the table for now, you start getting ready for school");
			writeText("...");
			writeText("You spend your free time studying the app and its nature.");
			writeText("You have a plan now, and a few people you can use for guinea pigs. From now on you'll be able to corrupt individuals after going to bed, but for now you can explore the town freely. What you do from this point on is up to you.");
			writeTransition("start", "Go Back");
			break;
		}
		case "HAAS" : {
			route = "sub";
			writeText("You lean against the entrance's wall patiently.");
			writeText("Meanwhile, just down the hall, Riley is hiding behind the corner.");
			writeSpeech("Riley", "riley", "<i>Okay, okay, calm down Riley.<br>Today is the day. Everything is going to go fine. Just calm down!</i>");
			writeText("Mentally, she berates herself and the half-chub lifting her skirt.");
			writeBig("images/friend1-1.jpg");
			writeText("Since her unusual growth spurt, she's had to forgo her normal tape this morning to keep her erections from poking out. Not only that, she had to forgo panties today as well. Still, despite how strange it was, she couldn't bring herself to find it weird for some reason.");
			writeSpeech("Riley", "riley", "<i>God, what is up with me today? I even accidentally flashed a guy on the way here. If it'd been Anon...</i>");
			writeSpeech("Riley", "riley", "<i>Ah! No! Come on, calm down. Don't think about him. Don't think about his face. About his lips around my...</i>");
			writeText("Mental images flood Riley's mind. Her newly enhanced libido barely able to keep up with her fantasies..");
			writeSpeech("Riley", "riley", "<i>I could pin him down. He's smaller than I am, I could just... No! I need to stop!</i>");
			writeBig("images/friend1-2.jpg");
			writeText("Riley pulls her hand away from her member.");
			writeSpeech("Riley", "riley", "<i>What the hell am I doing, jerking off in public? What would people think if they saw me? What would Riley think?<br>That I'm some pervert who can't control her dick?</i>");
			writeText("Despite not touching herself, she can't help but feel herself moving towards an edge.");
			writeSpeech("Riley", "riley", "<i>He might even try to run away, and I'd need to chase him... I'd catch him, and-</i>");
			writeBig("images/friend1-3.jpg");
			writeSpeech("Riley", "riley", "<i>Ah, no! Nooo! Cumming~!</i>");
			writeBig("images/friend1-4.jpg");
			writeSpeech("Riley", "riley", "<i>Hah... Hah... I came all over the floor... Shit! He's coming!</i>");
			writeText("It's been more than fifteen minutes already. You walked over to see if she was finished yet, only to find a puddle of white fluid on the floor, and no trace of Riley.");
			writeText("You wait for another five minutes, but there's no sign of her. Eventually, you decide to leave. You'll need to ask her what she wanted to tell you some other day.");
			writeTransition("start", "Go Back");
			break;
		}
		case "PrincessQuest" : {
			writeText("You are chastised quite a bit for having stolen a horse, but all the while your mind is on your divine mission. Ever since you've returned to the castle you've felt... Strange.");
			writeText("Your tutor's words are ignored as you can feel a growing heat inside you, and you stumble. Quickly you are ushered to your room, where you have a chance to rest.");
			writeText("Still, the heat persists. You strip free from your clothes, and the heat is no longer insufferable. The air is stagnant here, hardly thinking of anything you sneak free from your room, stark naked.");
			writeText("...");
			writeBig("images/1-1.jpg");
			writeSpeech("Elizabeth", "vr", "Oh my. I... I can't believe I'm doing this...");
			writeText("Soldiers patrol the hallways, but you've lived long enough to know their route by heart. As you passes by you dart into a corner, your hands barely able to cover your ample breasts and pussy.");
			writeText("As your hand brushes your nipples you tremble and the heat from your womb flares, begging for relief.");
			writeSpeech("Elizabeth", "vr", "Ah, to pleasure myself freely. Is that what I must do now? I am not some whore, but...");
			writeBig("images/1-2.jpg");
			writeSpeech("Elizabeth", "vr", "Ah! Goodness. The heat... I want more... I can't stop!");
			writeText("Your hands go lower to soothe your aching lips. You feel as though you've gone into heat. Here, exposed, you are fingerfucking yourself to a messy orgasm.");
			writeBig("images/1-3.jpg");
			writeSpeech("Elizabeth", "vr", "Ngh! Yes! More! Cumming!");
			writeBig("images/1-4.jpg");
			writeSpeech("???", "scripts/gamefiles/none.png", "Did you hear something?");
			writeSpeech("Elizabeth", "vr", "Hah... Hah... I must... Escape.");
			writeText("...");
			writeSpeech("Elizabeth", "vr", "That felt good. And even if it was wrong, to follow the order of God is just! Should I have another desire like that...");
			writeText("The heat from your womb ignites again as you run through the halls.");
			writeSpeech("Elizabeth", "vr", "Then I must surely accommodate them.");
			writeText("...");
			writeText("Among the castle's guard, a rumor began to spread of a banshee roaming the halls. The brave patrolmen were not daunted however, even when they would find puddles of ectoplasm on the ground.");
			writeTransition("start", "Go Back");
			break;
		}
		case "RainyDayZ" : {
			writeText("You're so exhausted you barely even register the feeling as the zombie pushes you down into a puddle of running rainwater. Try as you might, you don't have the strength to resist as she rips your pants off.");
			writeSpeech("You", "zombie", "No! Please, stop!");
			writeText("She either can't understand you or doesn't care, either way she doesn't stop as she rips off your panties. She tries to thrust right in but is stopped as her dick is just way too big to fit inside of you. You feel relieved for almost a second until she starts jacking herself off just inches away from the entrance to your pussy.");
			writeText("After a few seconds she spurts out a dollop of thick precum onto your labia and lets go of her dick. You try to squirm away, but she grabs you by the throat with one hand as she starts rubbing her jizz into your skin with the other.");
			writeText("Her fingers thrust inside of you, covering the entrance to your vagina with her infectious dickslime. Everywhere it touches you feel your skin grow puffy and sensitive. For as disgusting as you feel right now, her fingers feel really, really <b>good</b>.");
			writeText("But before you get the chance to start enjoying the sensations they've already stopped. She pulls the hand that was just fingerfucking you and puts it around your neck as she positions the head of her dick against your womanhood.");
			writeSpeech("You", "zombie", "No...");
			writeText("Your objections are a lot quieter now, but that's just because you're being choked. It's not like you wanted to become a mindless fuck machine, right?");
			writeText("But she doesn't care about any of that as she presses dick dick against you and pushes. Inch after inch sinks into you as you resist with all the might you can muster.");
			writeText("And it's enough to stop her. A few inches in and you're just too tight to take any more. The situation is hopeless, no one is coming to save you, but this last act of defiance is enough to keep you focused and in the moment.");
			writeText("Until she pumps another load of precum into you. The pain of your resistance starts to fade and firecrackers start going off in your brain as your body starts to relax against your will. She pushes deeper and deeper inside of you before she starts pulling out.");
			writeBig("images/basic1-1.gif");
			writeText("She's relentless in her thrusting, and with every few thrusts comes another load of precum that makes the situation feel even better. Every time you absorb her juice into your body, your infection grows more complete.");
			writeText("With one big thrust you can feel her dick impact the entrance to your womb, but instead of body-clenching pain you feel spine-melting pleasure. She starts cumming, real jizz instead of precum, and you <b>feel</b> it being pumped into your womb.");
			writeText("You can feel your body changing by the second. Your breasts start growing and you feel the entrance to your womb start to dilate in preparation for becoming a brand new dick.");
			writeText("But she isn't done with you yet. She starts thrusting again to prolong her orgasm and the tip of her dick kisses your womb's entrance over and over again until her dick's tip pushes through. She pushes her head in, pumping her jizz directly into you stuffing you full of her infected milk.");
			writeBig("images/basic1-2.gif");
			writeText("She tries to pull out but stops and just starts tugging. Your womb, desperate for more, is wrapped around the head of her dick and won't let go. She keeps getting more and more forceful and pushes back in before trying to pull out.");
			writeText("After an audible *POP* she pulls herself free, and you start squirting her infected load out of your body. With every squeeze you push out more, and the bulge of your overstuffed womb starts to flatten. After one last push you squirt the cum a good few inches out, but you feel something else getting pushed out as well.");
			writeText("You look down, and standing at full mast is a brand new dick. You can feel a heavy pair of balls below it large enough to rest in the puddle of water beneath you.");
			writeText("Your mind can't hold a complete thought anymore. This is your new life.");
			writeTransition("start", "Go Back");
			break;
		}
		case "downloadHAA": {
			document.getElementById('output').innerHTML +=`
			Current version: 0.9<br><br>
			Most recent game files: https://mega.nz/#!7wU1gKjR!v_K9v9caBeyyyblkQhvCdV-ZPY7bXbFe0oFBbKxPoSA<br><br>
			Most recent image pack: https://mega.nz/#!vpMhXALY!SybsA5DWLgG1fiXickprPMXtNP--gxXxqyPtWfCUr4E<br><br>
			If you're new to the game, all you need to do is download these two. Extract the game files to create the Human Alteration App folder, then extract the image pack directly into the Human Alteration App folder. You can find a picture of what the final layout should look like in the screenshot folder:<br><br>
			https://mega.nz/#F!zwsBnSoT!7wiL0wOWcml2wtX7M0fXiA<br><br>
			If you've already downloaded an image pack in the past, you can find all of the image upgrade packs here so that you don't need to download the whole thing again:<br><br>
			https://mega.nz/#F!j9UyWQhQ!TKUlk_gNQq1fFk779dMurw<br><br>
			If you'd like to see the game's overall progress and a list of what scenes have been completed, you can find the game's progress chart here:<br><br>
			https://mega.nz/#F!jk0yBYwI!DsOhPJl3qB5Ec8KTsIFNtA<br><br>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "downloadRainyDayZ": {
			document.getElementById('output').innerHTML +=`
			Current Version: Complete v1.0<br><br>
			Most recent game files: https://mega.nz/#!7sMS0AAY!vO_5Kk9YPBT3B5xN4TgEuBIznj7ClPy0Zvchivqkg1A<br><br>
			All you need to do is download this. Extract the game files to create the Rainy DayZ folder, then run the Rainy DayZ.html file. If errors begin popping up, I might need to separate the game files from the images.<br><br>
			If you already have the beta version installed, don't download the whole thing all over again. Download this game files upgrade pack and overwrite the old Rainy DayZ folder to update your game: https://mega.nz/#!KlEW0ITZ!k4F9j99y9vfqrOkGcvYxRUjLbI3TA2B4SKXJTcCp0BU
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "downloadPrincessQuest": {
			document.getElementById('output').innerHTML +=`
			Current version: v1.0 (5/20/2019)<br><br>
			Most recent game files: https://mega.nz/#!Gl9whSBL!S0FswXAxehzhP3cMGOPa5-mp-CjFRtTHQ4-3BjCITX8<br><br>
			All you need to do is download this. Extract the game files to create the Princess Quest folder, then run the Princess Quest.html file. If errors begin popping up, I might need to separate the game files from the images.
			`;
			writeTransition("start", "Go Back");
			break;
		}
		default: {
			writeText("Something went wrong, and you've encountered a bug. Keep in mind where you just where and what you did, and let me know so I can fix it.");
			writeText("Here's a list of important details. If you message me directly with these jams, I should have a better idea of what caused the problem:");
			writeBig("images/butts.jpg");
			writeTransition("home", "Go back home.");
		}
	}
}