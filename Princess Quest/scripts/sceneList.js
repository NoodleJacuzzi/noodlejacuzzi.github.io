function writeScene(scene) {
	switch(scene) {
		case "start" : {
			data.story.vrName = "Elizabeth";
			updateMenu();
			hidePrincess();
			writeBig("images/drawn/vr/title.jpg");
			writeText("Princess Quest is a game created by Noodle Jacuzzi. You play as a young princess named Elizabeth, who seeks to free her people from the presence of a demon terrorizing the kingdom.");
			writeText("All art contained here within is done by Neromashin. It's all from a game named 'Oujo & Onna Kishi W Do Gehin Roshutsu ~Chijoku no Misemono Dorei~' published by PinPoint. You can find the official website of the game at http://www.pin-point.biz/27_wdgr/index.html, but it's in Japanese. There is an English version coming to steam, but I've heard negative things about the translation's quality.");
			writeText("Pinpoint's game includes some fetishes I personally find disturbing. This game however is much tamer. This game contains graphic content depicting exhibitionism, tentacle penetration, and princess-on-orc action in the finale. There's no option to disable specific fetishes here, since it's all a linear set of levels.");
			if (data.story.vrScore == 4) {
				writeSpecial("You've unlocked the bonus scene for collecting all of the hidden items, congratulations! As a reward, check out the bonus scenes below (note that they all feature extreme content), and you get this code: neromashin");
				writeSpecial("This code unlocks all of the game's scenes! Wow, that sounds useless!");
				writeSpecial("Princess Quest is wonky when played online, so the version on github is nearly unplayable in some cases. Use this code and you can view the scenes on mobile/online. Feel free to give it out and be known as the coolest kid on the block, I'm not a cop; I can't stop you. Thanks for playing!");
			}
			writeText("<p class = 'choiceText' onclick = 'levelSelect(1)'>Level 1 - Demonic Bargain</p>");
			if (galleryCheck('vr1') == true) {
				writeText("<p class = 'choiceText' onclick = 'levelSelect(2)'>Level 2 - Castle Escapades</p>");
			}
			if (galleryCheck('vr2') == true) {
				writeText("<p class = 'choiceText' onclick = 'levelSelect(3)'>Level 3 - Evil Seed</p>");
			}
			if (galleryCheck('vr3') == true) {
				writeText("<p class = 'choiceText' onclick = 'levelSelect(4)'>Level 4 - Attempted Rescue</p>");
			}
			if (galleryCheck('vr4') == true) {
				writeText("<p class = 'choiceText' onclick = 'levelSelect(5)'>Epilogue</p>");
			}
			if (data.story.vrScore == 4) {
				writeText("<p class = 'choiceText' onclick = 'writeEvent(`vr6`)'>Bonus Scene 1 (Abuse, Bukkake, No Watersport)</p>");
				writeText("<p class = 'choiceText' onclick = 'writeEvent(`vr7`)'>Bonus Scene 1 Alt (Abuse, Bukkake, Watersports)</p>");
				writeText("<p class = 'choiceText' onclick = 'writeEvent(`vr8`)'>Bonus Scene 2 (Futanari, Huge Breasts, Nipple Fucking, Lactation)</p>");
				writeText("<p class = 'choiceText' onclick = 'writeEvent(`vr9`)'>Bonus Scene 3 (Orcs, Huge Insertion, Nose Hook, Cum Inflation)</p>");
			}
			writeTransition("princessGallery", "View the gallery");
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="restartButton()">
					Delete all save data
				</p>
			`;
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="saveFile()">
					Export Save Data
				</p>
			`;
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="loadFile()">
					Import Save Data
				</p>
			`;
			document.getElementById('output').innerHTML += `
				<p>Enter cheat code: <input type="text" id="cheatSubmission" value=""></p>
				<p class='choiceText' onclick='fixMiniMap()'>Cheat</p>
			`;
			if (data.story.princessGame > 1) {
				writeTransition("princessGuide", "View the strategy guide");
			}
			break;
		}
		case "princessGuide": {
			writeText("It is recommended you copy this info so that you can view it while playing.");
			writeSpecial("Chapter 1:");
			writeText("Victory: Enter the demon's lair at x12 y12");
			writeText("Secret item: Investigate the secret wall at x8 y4");
			writeSpecial("Chapter 2:");
			writeText("Victory: Press one of the switches, then escape through the door at x26 y3");
			writeText("Secret item: Flip all three switches, then go through the now-open path at x28 y3");
			writeText("Switch 1: x21 y13");
			writeText("Switch 2: x18 y3");
			writeText("Switch 3: x22 y9");
			writeTransition("start", "Go back");
			writeSpecial("Chapter 3:");
			writeText("Victory: Find three of the switches hidden in books, then use the book in the dungeon at x18 y14");
			writeText("Secret item: Find all four of the switches hidden in books, find the last switch at x12 y21, and then grab the item at x15 y12");
			writeText("Book 1: x9 y2"); //(this and the final one are broken atm)
			writeText("Book 2: x3 y4");
			writeText("Book 3: x9 y7");
			writeText("Book 4: x4 y10");
			writeSpecial("Chapter 4:");
			writeText("Not yet finished!");
			writeSpecial("Epilogue:");
			writeText("Not yet finished!");
			writeText("To unlock the epilogue, collect all of the secret items throughout the game");
			break;
		}
		case "princessGame": {
			gameMode = "roaming";
			eventCheck();
			if (level == 0) {
				sceneTransition("start");
			}
			else {
				showPrincess();
			}
			break;
		}
		case "princessExit": {
			princess.x = 0;
			princess.y = 0;
			gameMode = "dialogue";
			hidePrincess();
			sceneTransition("start");
			break;
		}
		case "princessGallery": {
			writeDrawn("images/drawn/vr/title.jpg", "Art by Neromashin");
			generateGallery('vr');
			writeTransition("start", "Go back");
			break;
		}
		default: {
			writeText("Something went wrong, and you've encountered a bug. Keep in mind where you just where and what you did, and let me know so I can fix it.");
			writeText("Here's a list of important details. If you message me directly with these jams, I should have a better idea of what caused the problem:");
			writeText("" + JSON.stringify(data) + "");
			writeText("Browser:" + navigator.appCodeName  + "");
			writeText("OS:" + navigator.platform  + "");
			writeBig("images/butts.jpg");
			writeTransition("start", "Go back home.");
		}
	}
}

function writeEvent(scene) {
	document.getElementById('output').innerHTML = '';
	switch (scene) {
		case "vr1": {
			writeText("You walk through the carved entryway and travel deeper into the cave. Soon, darkness surrounds you, and you can feel a presence beside you.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Who dares to trespass my lair? Who are you to throw away what life you've been allowed to keep?");
			writeSpeech("Elizabeth", "vr", "! I am princess of the kingdom of flowers, heir to the throne! My name is Elizabeth. I have been called here by the grace of God, I seek to cleanse the kingdom of an unholy curse!");
			writeSpeech("???", "drawn/vr/profile4.jpg", "You needn't shout, I'm standing right here. Can you not see in the dark? And what do you mean by the voice of G-");
			writeText("The voice goes quiet, and you can feel the stare of leering eyes.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "*Ahem*<br>Of course, by the grace of God. I am a priest of His light, and I can offer you what you seek.");
			writeSpeech("Elizabeth", "vr", "Truly? Oh praise be, so you can end this madness?");
			writeSpeech("???", "drawn/vr/profile4.jpg", "No, I am not his vessel or his hand. All I can offer is to give you the strength to bring fortune back to the kingdom.");
			writeSpeech("Elizabeth", "vr", "Me? Well, if He has chosen me, I must answer. What must I do, Father? I will suffer any burden to save my people?");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Any burden?");
			writeText("The tone of the question catches you off your guard. Were this not a man of the cloth, you would be certain that he was a garden-variety pervert.");
			writeSpeech("Elizabeth", "vr", "Any burden, without doubt. Please, what must I do?");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Very well. The curse was born from a lack of faith in the heavens. The people of this kingdom have succumb to sin. You-");
			writeSpeech("Elizabeth", "vr", "Heavens, no! The people of this kingdom are kind and just! The temple is in fine repair thanks to volunteer work, the children are fed and educated, and we've the largest supply of puppies in the land! How can we have strayed from His teachings?");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Shut up, no interrupting. What men do in public is different from behind closed doors. Every man in the kingdom has dreamed of catching you alone in an alley and stripping you bare, forcing you to learn to love as they-");
			writeSpeech("Elizabeth", "vr", "Forbidden love? Out of wedlock? Never!");
			writeSpeech("???", "drawn/vr/profile4.jpg", "... Anyways, to cleanse the land you must take upon the weight of their sin. To indulge in their weakness to give them strength.");
			writeSpeech("Elizabeth", "vr", "That sounds legitimate. How do I do this?");
			writeSpeech("???", "drawn/vr/profile4.jpg", "I will place an unholy mark upon your body which will draw the temptations of men and women to you. Their desires will course through your veins, and you must indulge them as they arrive. Lift your dress.");
			writeSpeech("Elizabeth", "vr", "I understand, I think. You must place the mark upon what must not be seen. For God, I will comply.");
			writeText("You begin to life your dress, showing off the forbidden, yet tempting flesh of your ankle.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "... Are you fucking with me? Higher, woman. To where you'd bear children.");
			writeText("Though the act is unspeakable, eventually you are convinced to allow the priest to touch your exposed midsection. As a man of the cloth, he would surely never take advantage of the moment and stare at your undergarments, but you still feel nervous nonetheless.");
			writeText("You can see the glow of the spell illuminate the room as a sigil is drawn into the flesh in front of your womb. Though you cannot see it, you can already feel its influence over your mind.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "It is done. I've hidden the sigil from sight so you won't be burned at the stake should you be discovered. Return home and bear this indecency for one month, and the plague shall end.");
			writeSpeech("Elizabeth", "vr", "Thank you father, I shall complete these trials!");
			writeText("With that you leave the priest in his suspiciously dark cave, and return home.");
			writeText("...");
			writeText("You are chastised quite a bit for having stolen a horse, but all the while your mind is on your divine mission. Ever since you've returned to the castle you've felt... Strange.");
			writeText("Your tutor's words are ignored as you can feel a growing heat inside you, and you stumble. Quickly you are ushered to your room, where you have a chance to rest.");
			writeText("Still, the heat persists. You strip free from your clothes, and the heat is no longer insufferable. The air is stagnant here, hardly thinking of anything you sneak free from your room, stark naked.");
			writeText("");
			writeBig("images/drawn/vr/1-1.jpg");
			writeSpeech("Elizabeth", "vr", "Oh my. I... I can't believe I'm doing this...");
			writeText("Soldiers patrol the hallways, but you've lived long enough to know their route by heart. As you passes by you dart into a corner, your hands barely able to cover your ample breasts and pussy.");
			writeText("As your hand brushes your nipples you tremble and the heat from your womb flares, begging for relief.");
			writeSpeech("Elizabeth", "vr", "Ah, to pleasure myself freely. Is that what I must do now? I am not some whore, but...");
			writeBig("images/drawn/vr/1-2.jpg");
			writeSpeech("Elizabeth", "vr", "Ah! Goodness. The heat... I want more... I can't stop!");
			writeText("Your hands go lower to soothe your aching lips. You feel as though you've gone into heat. Here, exposed, you are fingerfucking yourself to a messy orgasm.");
			writeBig("images/drawn/vr/1-3.jpg");
			writeSpeech("Elizabeth", "vr", "Ngh! Yes! More! Cumming!");
			writeBig("images/drawn/vr/1-4.jpg");
			writeSpeech("???", "scripts/gamefiles/none.png", "Did you hear something?");
			writeSpeech("Elizabeth", "vr", "Hah... Hah... I must... Escape.");
			writeText("...");
			writeSpeech("Elizabeth", "vr", "That felt good. And even if it was wrong, to follow the order of God is just! Should I have another desire like that...");
			writeText("The heat from your womb ignites again as you run through the halls.");
			writeSpeech("Elizabeth", "vr", "Then I must surely accommodate them.");
			writeText("...");
			writeText("Among the castle's guard, a rumor began to spread of a banshee roaming the halls. The brave patrolmen were not daunted however, even when they would find puddles of ectoplasm on the ground.");
			break;
		}
		case "vr2": {
			writeText("The dungeon pathway eventually gives way to a tunnel of dirt and cobblestone. You may your way through the tunnel and push open the false wooden wall to emerge in a small hut in an abandoned area of the castle town.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Good, very good, princess.");
			writeSpeech("Elizabeth", "vr", "Father, I can hear you more clearly now!");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Yes, you're free from the castle's grasp now. Strip, and I'll begin the incantation.");
			writeText("There's no hesitation in your actions. Even in the tunnel you could feel the mark of your trial drawing in more sin from the townspeople above. Dozens of people walk the streets here, each far worse at controlling their desires than the castle's guard.");
			writeText("Soon, the air begins to shimmer around you and a faint sigil appears in the air above your head.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "It is done. Only God can see you now. Go into the square and... Do what comes naturally.");
			writeSpeech("Elizabeth", "vr", "I understand. For my country.");
			writeText("...");
			writeBig("images/drawn/vr/2-1.jpg");
			writeSpeech("Elizabeth", "vr", "Ehehe! I'm totally naked in the town square! My tits and pussy are totally uncovered!");
			writeSpeech("???", "drawn/vr/profile4.jpg", "The spell subdues your voice as well, but you should move to another spot. Someone could bump into you here.");
			writeSpeech("Elizabeth", "vr", "Gonna mas-tur-bate~! Gonna mas-tur-bate~!");
			writeSpeech("???", "drawn/vr/profile4.jpg", "... Are you listening to me?");
			writeBig("images/drawn/vr/2-2.jpg");
			writeSpeech("Elizabeth", "vr", "Ehehe! I'm totally naked in the town square! My tits and pussy are totally uncovered!<br>Ah! I'm already leaking! It burns so good!");
			writeSpeech("???", "scripts/gamefiles/none.png", "... So then what happened?");
			writeSpeech("Elizabeth", "vr", "Ngh! People are walking right next to me and they don't even know what their princess is doing!");
			writeBig("images/drawn/vr/2-3.jpg");
			writeSpeech("Elizabeth", "vr", "Ah, my nipples feel so good! Give it to me, all your feelings and desires!");
			writeSpeech("???", "drawn/vr/profile4.jpg", "<i>I expected this to work faster, my lord won't be pleased with such a small amount. Maybe if I...</i>");
			writeBig("images/drawn/vr/2-4.jpg");
			writeSpeech("???", "scripts/gamefiles/none.png", "Right. So then Bertram's daughter just... The fuck?");
			writeSpeech("Elizabeth", "vr", "...");
			writeSpeech("???", "scripts/gamefiles/none.png", "... You see that too, right Tina?");
			writeSpeech("Elizabeth", "vr", "You... You can see me?");
			writeText("Your heart skips a beat. Every rational part of your brain tells you now to flee, to escape and save the royal family the embarrassment of their only daughter being found naked, masturbating in the town square.");
			writeText("But another part of your body is in control. Women are shocked, but envious. Men desire your body. You being completely exposed before their eyes is awakening dark thoughts within them, and those desires flow directly into your cursed mark.");
			writeBig("images/drawn/vr/2-5.jpg");
			writeSpeech("Elizabeth", "vr", "Ehehe! Ehehe, yes! Everyone's watching me!");
			writeSpeech("???", "scripts/gamefiles/none.png", "Is that the princess?");
			writeSpeech("???", "scripts/gamefiles/none.png", "Thomas, avert your eyes!");
			writeSpeech("Elizabeth", "vr", "Feels so good! I'm playing with my pussy in public~! Gonna... Gonna...!");
			writeBig("images/drawn/vr/2-6.jpg");
			writeSpeech("Elizabeth", "vr", "Cumming~~~!");
			writeText("The spray of juices covers the cobblestone pathway. People are too shocked by the display to move. Pants become strained as you can feel the eyes of the townspeople upon you.");
			writeText("And just like that, you disappear before their eyes.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "You've done well today. Leave, before someone realizes how you pulled off the disappearing trick.");
			writeSpeech("Elizabeth", "vr", "So good... More...");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Hmm. I might need to get out out of there myself...<br>No matter, I've more than enough strength stored up now.");
			break;
		}
		case "vr3": {
			writeSpeech("Elizabeth", "vr", "Father? A word? I cannot read from this book. It is writen in some unholy pagan language.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "That's just regular text in messy handwriting.");
			writeSpeech("Elizabeth", "vr", "The unholy markings burn my virgin eyes. There must be another way to fight what plagues this land.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "...I'll cast the spell, you just having touched the book is enough to dispel the defenses.");
			writeSpeech("Elizabeth", "vr", "You make the sacrifice which no one else can. Thank you. Now, I must get to my father's speech.");
			writeText("...");
			writeBig("images/drawn/vr/3-1.jpg");
			writeSpeech("King Charles", "scripts/gamefiles/none.png", "And so, now more than ever, out people must stand united before God.");
			writeSpeech("Guard A", "scripts/gamefiles/none.png", "Look at Princess Elizabeth. She remains so composed.");
			writeSpeech("Guard B", "scripts/gamefiles/none.png", "I'd heard she'd locked herself in her room for days. Perhaps because of the ghost in the castle?");
			writeSpeech("Guard A", "scripts/gamefiles/none.png", "Hardly. Such a benevolent woman would have befriended even a dark spirit on sight.");
			writeText("Although the higher-ups in authority remained silent as the king's speech droned on, the common guardsmen would whisper anecdotes between each other to pass the time.");
			writeText("Neither one realized however that dark magic was in the air. Your work in obtaining the tome is proving useful, as the warlock's summoning spell is nearing it's end.");
			writeText("With such a massive crowd, it almost strikes you as strange that the mark is not bending your will, that you are not on the ground exposing yourself to the kingdom. Perhaps it is that you have finally conquered your trials?");
			writeBig("images/drawn/vr/3-2.jpg");
			writeSpeech("Elizabeth", "vr", "Oooh!");
			writeText("Without warning, tentacles come into existence within your dress.");
			writeSpeech("King Charles", "scripts/gamefiles/none.png", "Balance your lives, bear the burden of suffering for god health, and the burden of seclusion to prevent the plague's spread.");
			writeSpeech("Guard A", "scripts/gamefiles/none.png", "Did you just see that? Did the princess just let out a yelp?");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Elizabeth, calm yourself! This is another test!");
			writeSpeech("Elizabeth", "vr", "<i>Father!? Am I hallucinating, or did I just lose my virginity?</i>");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Compose yourself! This is a manifestation of mankind's desire. Let it use you.");
			writeBig("images/drawn/vr/3-3.jpg");
			writeText("The tentacle remains still for the moment. The limb of the creature inside you is complacent just to allow your body to adjust.");
			writeSpeech("Guard B", "scripts/gamefiles/none.png", "You must have been hearing things.");
			writeText("The king's speech drones on yet longer, but rather than stand with pride as the nation's glorious rose, you are barely keeping a straight face as a demon tarnishes what was once a well-protected chastity.");
			writeText("Wet sounds are almost audible to the people around you as the creature suddenly bunches itself up.");
			writeBig("images/drawn/vr/3-4.jpg");
			writeText("And thrusts itself deep enough to depress the entrance to your womb.");
			writeSpeech("Elizabeth", "vr", "Mmmm~!<br><i>It really is... So deep~ This is so much better than my fingers!</i>");
			writeSpeech("Guard A", "scripts/gamefiles/none.png", "Holy shit...");
			writeSpeech("Guard B", "scripts/gamefiles/none.png", "I... Is she having an orgasm?");
			writeText("The edges of your dress try valiantly to keep your dignity intact as the monster takes ownership of your body. The sudden onset of lust is drawn from whoever can see you, and feeds the monster further. Bumps begin to slide up it's length.");
			writeSpeech("Guard A", "scripts/gamefiles/none.png", "No way, we must be misunders-");
			writeBig("images/drawn/vr/3-5.jpg");
			writeSpeech("Elizabeth", "vr", "Cumming~!");
			writeText("Steadily the creature begins to pump its eggs into your womb, stuffing what tainted semen will fit in there as well for good measure.");
			writeSpeech("Elizabeth", "vr", "<i>It's inside me! I'm being made to cum by a hellspawn's eggs!</i>");
			writeText("Although none can see it, the energy collected by the princess's deeds begins to spread across the massive crowd. Suddenly men and women alike find something else on their mind as the king prattles on.");
			writeText("With it's purpose complete, the creature begins to wither and fade away. You don't adjust your dress for a time, casting a glance and a wink to your audience.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "The deed is done, the energy is collected. This kingdom will be seeing a great wave of change by the time the sun sets.");
			break;
		}
		case "vr4": {
			data.story.vrName = "Rose";
			writeText("You've escaped the dungeon!");
			writeText("The stone walls and chains are behind you, now is the time to save the princess from whatever befalls the kingdom, and all will return to blissful normality.");
			writeText("...");
			writeText("Things did not go back to normal.");
			writeSpeech("Rose", "knight", "Unhand me, foul peasant! Your actons against the princess are fouler than your odor! Wha- what are you doing? What is that!?");
			writeText("This is no mere rebellion. The entire kingdom is in arms agains the royal family, screaming such baseless acusations as 'The princess is in league with demons', 'She exposed herself before my children and escaped with dark magic', and 'I saw her give birth to a monster!'");
			writeText("They push you down and strap a metal collar around your neck, proclaiming that you're a 'Bad Piggy' for escaping. Every time they touch you, you feel a burning light course through your body sapping your strength. Then, like a sack of meat, they toss you into a shack for you to await your dark fate. A familiar figure is here with you.");
			writeSpeech("Rose", "knight", "Elizabeth! Thank goodness you are alright! Listen, while we have a moment to ourselves, help me undo these infernal bindings!");
			writeText("But the princess before you is broken, her precious spirit is gone. She seems content to twiddle her clit while laying in a small pile of hay.");
			writeSpeech("Rose", "knight", "Princess... <br>Listen to me, everything will be okay.");
			writeText("She's unresponsive, and you quickly realize why. As a group of men enter the room, she jerks to attention and makes a move for one's crotch.");
			writeSpeech("Rose", "knight", "<i>Of course... She means to play along! Bide time for an escape... <br>I am such an idiot! There's simply no way my beloved Elizabeth would be broken so easily!</i>");
			writeSpeech("Brute", "scripts/gamefiles/none.png", "Alright you little piggies, you ready to pay for your crimes against the kingdom?");
			writeText("He holds straps of leather attached to blunt hooks, and shiny rubber phalluses with swirly tails at their ends");
			writeText("The sight of them fills you with a dark terror, and an alarming sense of <b>need</b> as well. All the while Elizabeth is grinding against the men and panting like a dog.");
			writeText("...");
			writeBig("images/drawn/vr/4-1.jpg");
			writeText("You are paraded around the town, announced as the traitors to the kingdom. False evidence is shown to the crowd of Elizabeth having bargained with demons, helping heretics and monsters gain a foothold in the kingdom.");
			writeText("The crowd watches your every move, men and women you know by name staring as you are forced to crawl along the rough cobblestone, hooks keeping your nose pulled up in the fashion of a snout, and a pink dildo inserted into your ass to give you a piglet's tail.");
			writeText("Tears run down your face as Elizabeth hesitates too long, waving her ass before the crowd, and she's suddenly jerked forwards by the neck.");
			writeSpeech("Rose", "knight", "<i>God, give me strength... Or give the princess mercy... Please, if you're watching, lend us your aid!</i>");
			writeSpeech("Brute", "scripts/gamefiles/none.png", "And now for the main event! Do we have any volunteers?");
			writeBig("images/drawn/vr/4-2.jpg");
			writeSpeech("Rose", "knight", "<i>No... No no no NO NO NO!</i>");
			writeSpeech("Elizabeth", "vr", "Dicks! Dicks!");
			writeText("The brute yanks on her chain to remind her not to speak.");
			writeSpeech("Elizabeth", "vr", "Nggggh~");
			writeText("But it backfires as she squirts onto the streets, pretending as though she enjoys the rough treatment.");
			writeSpeech("Rose", "knight", "<i>God... She's keeping up. I'm so pathetic...<br>For her to keep up this act, and for me to be as scared as a fresh recruit...<br>Elizabeth, I swear that-</i>");
			writeBig("images/drawn/vr/4-3.jpg");
			writeSpeech("Rose", "knight", "Ouuuugh~!");
			writeText("Their touch, the glares from the townspeople, your ass clenching around the rubber tool, it all begins to boil over. Whatever dark power has hold over you has caused you to grow wet beyond belief as a man leaves a bright red mark of your failure upon your asscheek.");
			writeText("You can feel his disgusting grin on you as he inserts himself into your treasured privates. Only one woman, and only in your darkest most forbidden fantasies has ever laid a hand on you there, and she giggles drunkenly as she wiggles her ass to encourage another slap.");
			writeText("You've been robbed of something no God can ever return, a voice inside of you encourages you to give in, and you don't have the strength to deny it.");
			writeSpeech("Townsman", "scripts/gamefiles/none.png", "Damn, she's tight! Take it deep, traitor, you have a whole crowd waiting!");
			writeText("The wave of shame washes over you, blotting out your thoughts. Isn't it better to simply enjoy this?");
			writeSpeech("Townsman", "scripts/gamefiles/none.png", "Ngh... Gonna cum! Gonna impregnate the man-hating captain of the guard!");
			writeBig("images/drawn/vr/4-5.jpg");
			writeText("Reality begins to fade. Elizabeth's face distorted in pleasure as a man fills her with semen doesn't even register your existence. This must be a dream, a nightmare.");
			writeText("And your captors taunt you, telling you that it'll never end.");
			break;
		}
		case "vr5": {
			data.story.vrName = "King";
			writeSpeech("Elizabeth", "vr", "Oh daddy~ It's time to wake uuup~");
			writeText("Pain spikes through your mind, but the soothing voice of your lovely daughter coaxes it away.");
			writeText("Perhaps it was all merely a bad dream...");
			writeSpeech("Rose", "knight", "My lord, it is time to awaken.");
			writeText("Captain Rose? Well, if she's waking you up it must be import-");
			writeBig("images/drawn/vr/5-1.jpg");
			writeSpeech("Rose", "knight", "Good morning your majesty. Did you have a nice sleep?");
			writeBig("images/drawn/vr/5-2.jpg");
			writeSpeech("Elizabeth", "vr", "You finally woke up, daddy?");
			writeBig("images/drawn/vr/5-3.jpg");
			writeSpeech("Rose", "knight", "The kingdom has fallen, and the royal court has already been executed.");
			writeSpeech("Elizabeth", "vr", "You'll be put to death too, but the lovely men working here wanted you to see one last show before you go~");
			writeSpeech("Rose", "knight", "Have no fear, your daughter is in good hands. So long as we are together, all will be right in the end.");
			writeSpeech("Elizabeth", "vr", "Just ignore her, she got broken by dicks.");
			writeSpeech("Rose", "knight", "Ngh... So hurtful, princess.");
			writeText("Two men have grown tired of the talking. They strip down, and take their positions beneath Rose and Elizabeth.");
			writeBig("images/drawn/vr/5-4.jpg");
			writeSpeech("Elizabeth", "vr", "Ah, more cocks!");
			writeSpeech("Rose", "knight", "Are we... Are we really to do this before the king?");
			writeSpeech("Elizabeth", "vr", "Don't feel bad, they're being nice by letting daddy see that we'll be having fun after he's gone.<br>Now take a close look, because they-");
			writeBig("images/drawn/vr/5-5.jpg");
			writeSpeech("Elizabeth", "vr", "Ghhh!");
			writeSpeech("Rose", "knight", "Nggh!?");
			writeText("The two men have grown impatient, and thrust themselves into the pair of disgraced women. Both react with suprise, but they're both clearly comfortable taking dick at this point.");
			writeSpeech("Rose", "knight", "Gah... They're larger than the men from before...");
			writeSpeech("Elizabeth", "vr", "It's wonderful! Don't take too long though, okay boys? There's lots more waiting!");
			writeText("You hear the sound of Elizabeth kissing the man having his way with her cunt, and Rose follows suit.");
			writeBig("images/drawn/vr/5-6.jpg");
			writeText("The two break their kisses and squeal as the men thrust with new vigor and begin to cum, unprotected, inside of Elizabeth and Rose.");
			writeBig("images/drawn/vr/5-7.jpg");
			writeText("The two men pull their dicks from the women, and gluts of semen begin to spill out.");
			writeText("Their asses are grabbed and exposed, gaping their assholes as though they were eager for the next round.");
			writeSpeech("Elizabeth", "vr", "Oooh, they're gonna use our asses too!");
			writeSpeech("Rose", "knight", "No... They can't! These men are so much larger, they'll tear us in half!");
			writeText("Despite her panic, Rose does not move an inch when the men slide out and a new pair come up to the stage.");
			writeBig("images/drawn/vr/5-8.jpg");
			writeSpeech("Elizabeth", "vr", "Oooh!");
			writeSpeech("Rose", "knight", "Ouugh!");
			writeText("The men rub their lengths along the disgraced pussies before they thrust in. The semen of degenerates is the only lubricant Elizabeth and Rose will recieve tonight.");
			writeText("And yet, their overjoyed expressions and moans make it clear that they'd have it no other way.");
			writeBig("images/drawn/vr/5-9.jpg");
			writeBig("images/drawn/vr/5-10.jpg");
			writeText("The show will go on for hours. One round of hole-ruining sex will not be enough to satisfy them, and the crowd is ready to put on a show you'll never forget.");
			break;
		}
		case "vr6": {
			writeBig("images/drawn/vr/6-1.jpg");
			writeSpeech("Elizabeth", "vr", "Please forgive us!");
			writeSpeech("Rose", "knight", "P-please... Forgive us...");
			writeSpeech("Elizabeth", "vr", "Forgive our whorish bodies and vile deeds!");
			writeSpeech("Rose", "knight", "F-forgive... F-...");
			writeText("Rose begins to sob between her words. Her body has been irrecoverably tainted by dark magic, but even moreso by shame.");
			writeSpeech("Elizabeth", "vr", "Use our bodies for your relief! Our slutty mouths are only for pleasing dicks and drinking delicious semen!");
			writeSpeech("Rose", "knight", "Use our bodi-");
			writeBig("images/drawn/vr/6-2.jpg");
			writeSpeech("???", "scripts/gamefiles/none.png", "Pathetic swine, your friend hadn't finished yet!");
			writeText("They begin to kick and step on you, punishing you for Rose's pathetic attempts. One steps on her now-massive breast and milk spurts out enough to fill a cup in moments.");
			writeSpeech("Elizabeth", "vr", "More! Punish us sluts more!");
			writeSpeech("???", "scripts/gamefiles/none.png", "Get up, you whores!");
			writeText("They grab you and rose by the hair and yank you up. They've undone their belts and exposed themselves. They have a delicious, dried semen sort of smell to them.");
			writeBig("images/drawn/vr/6-3.jpg");
			writeSpeech("???", "scripts/gamefiles/none.png", "Put your mouths to work and suck!");
			writeText("The man holding your hair pulls you into a kiss with the head of his dick, smearing his cocksweat along your lips.");
			writeBig("images/drawn/vr/6-4.jpg");
			writeText("You don't hesitate as you begin to deepthroat his member, the taste is divine. Even without the cursed mark, surely you would have broken to the pleasure of sex eventually.");
			writeText("Rose quickly falls into a rhythm as well. She resisted at first, but she learned her place quickly enough.");
			writeSpeech("???", "scripts/gamefiles/none.png", "God damn, the princess's mouth is incredible!");
			writeSpeech("???", "scripts/gamefiles/none.png", "Right? And this whore's sucking me down to my pubes!");
			writeSpeech("???", "scripts/gamefiles/none.png", "Ghr... Gonna-!");
			writeBig("images/drawn/vr/6-5.jpg");
			writeSpeech("Elizabeth", "vr", "Glrk!");
			writeSpeech("Rose", "knight", "GHRK!");
			writeBig("images/drawn/vr/6-6.jpg");
			writeText("The men of the kingdom have been performing beyond the limits of what should be possible. Dark magic fills the air of the kingdom, and as a result what once would have been a piddling spurt as the result of a quickshot has become a powerful jet of semen sent down your throat.");
			writeText("And these men, whom would have fallen tired after just one shot, have no intention of stopping any time soon.");
			writeBig("images/drawn/vr/6-7.jpg");
			writeText("Hours have passed, but you and Rose have been having too much fun to notice.");
			writeText("You'd been instructed to prostrate yourself before the first men you found, to offer your bodies to them for public relief. Yet now you've drawn a crowd, you won't need to search at all!");
			break;
		}
		case "vr7": {
			writeBig("images/drawn/vr/6-1.jpg");
			writeSpeech("Elizabeth", "vr", "Please forgive us!");
			writeSpeech("Rose", "knight", "P-please... Forgive us...");
			writeSpeech("Elizabeth", "vr", "Forgive our whorish bodies and vile deeds!");
			writeSpeech("Rose", "knight", "F-forgive... F-...");
			writeText("Rose begins to sob between her words. Her body has been irrecoverably tainted by dark magic, but even moreso by shame.");
			writeSpeech("Elizabeth", "vr", "Use our bodies for your relief! Our slutty mouths are only for pleasing dicks and drinking delicious semen!");
			writeSpeech("Rose", "knight", "Use our bodi-");
			writeBig("images/drawn/vr/6-2.jpg");
			writeSpeech("???", "scripts/gamefiles/none.png", "Pathetic swine, your friend hadn't finished yet!");
			writeText("They begin to kick and step on you, punishing you for Rose's pathetic attempts. One steps on her now-massive breast and milk spurts out enough to fill a cup in moments.");
			writeSpeech("Elizabeth", "vr", "More! Punish us sluts more!");
			writeSpeech("???", "scripts/gamefiles/none.png", "Get up, you whores!");
			writeText("They grab you and rose by the hair and yank you up. They've undone their belts and exposed themselves. They have a delicious, dried semen and piss sort of smell to them.");
			writeBig("images/drawn/vr/6-3.jpg");
			writeSpeech("???", "scripts/gamefiles/none.png", "Put your mouths to work and suck!");
			writeText("The man holding your hair pulls you into a kiss with the head of his dick, smearing his cocksweat along your lips.");
			writeBig("images/drawn/vr/6-4.jpg");
			writeText("You don't hesitate as you begin to deepthroat his member, the taste is divine. Even without the cursed mark, surely you would have broken to the pleasure of sex eventually.");
			writeText("Rose quickly falls into a rhythm as well. She resisted at first, but she learned her place quickly enough.");
			writeSpeech("???", "scripts/gamefiles/none.png", "God damn, the princess's mouth is incredible!");
			writeSpeech("???", "scripts/gamefiles/none.png", "Right? And this whore's sucking me down to my pubes!");
			writeSpeech("???", "scripts/gamefiles/none.png", "Ghr... Gonna-!");
			writeBig("images/drawn/vr/6-5.jpg");
			writeSpeech("Elizabeth", "vr", "Glrk!");
			writeSpeech("Rose", "knight", "GHRK!");
			writeBig("images/drawn/vr/6-6.jpg");
			writeText("The men of the kingdom have been performing beyond the limits of what should be possible. Dark magic fills the air of the kingdom, and as a result what once would have been a piddling spurt as the result of a quickshot has become a powerful jet of semen sent down your throat.");
			writeText("And these men, whom would have fallen tired after just one shot, have no intention of stopping any time soon.");
			writeBig("images/drawn/vr/6-7.jpg");
			writeText("Hours have passed, but you and Rose have been having too much fun to notice.");
			writeText("You'd been instructed to prostrate yourself before the first men you found, to offer your bodies to them for public relief. Yet now you've drawn a crowd, you won't need to search at all!");
			writeText("The crowd beings to surround you, the man lets go of your hair.");
			writeSpeech("Elizabeth", "vr", "All of you lovely dicks... Please, treat us like the garbage meat-toilets we are!");
			writeBig("images/drawn/vr/6-8.jpg");
			writeText("Both you and Rose have no objections as the men find a new use for you.");
			break;
		}
		case "vr8": {
			data.story.vrName = "Rose";
			writeBig("images/drawn/vr/7-1.jpg");
			writeSpeech("Rose", "knight", "Please... No more...");
			writeText("Yet another crowd has drawn around you, eager to see what the magician has planned this time.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Behold, the once-mighty captain who betrayed you! Her once-bountiful breasts are monstrous, her once virgin cunt is now a tool to abuse! With but one more incantation, her transformation is complete!");
			writeBig("images/drawn/vr/7-2.jpg");
			writeSpeech("Rose", "knight", "Ghhhg-!");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Now, do with her as you please. Monsters make rank at the boundaries of the city, so enjoy yourselves before dusk arrives.");
			writeText("He vanishes in a sudden inky blackness.");
			writeSpeech("Rose", "knight", "Guh... Please, help me! I've been nothing but loyal to the crown!");
			writeSpeech("???", "scripts/gamefiles/none.png", "A crown that sold out the citizenry for pleasure!");
			writeSpeech("???", "scripts/gamefiles/none.png", "There's no hope for the kingdom, but if I'm to die, I'll have disgraced the man-killing knight who murdered my father!");
			writeBig("images/drawn/vr/7-3.jpg");
			writeSpeech("Rose", "knight", "Nngh-No! P-please, you must... Nggh~!");
			writeBig("images/drawn/vr/7-4.jpg");
			writeSpeech("Rose", "knight", "Cumming~!");
			writeText("They don't give you a moment to rest as they yank and squeeze your massive nipples, your massive cock dangling in the air spurts out load after load of disgusting jizz.");
			writeBig("images/drawn/vr/7-5.jpg");
			writeText("It isn't a second orgasm as much as it is a single endless one. Even as the spurts of semen begin to die down, your nipples spray the crowd as they burn with white hot pleasure.");
			writeSpeech("???", "scripts/gamefiles/none.png", "Think that's enough lube?");
			writeSpeech("???", "scripts/gamefiles/none.png", "Only one way to find out!");
			writeBig("images/drawn/vr/7-6.jpg");
			writeText("It's a wordless scream of despair and mind-shattering pleasure that leaves your lips as men from the crowd grab hold of your breasts and align their dicks to your nipples, and push.");
			writeText("Every barrier in place, every wonderful memory of your time as a knight in service of a glorious cause begins to crumble away.");
			writeText("All of your dedication to nobility, your sense of justice, all of that is worthless as your massive dick sprays the cobblestone below you.");
			writeBig("images/drawn/vr/7-8.jpg");
			writeText("Your life has ended. Nothing remains but an endless life of cumming and begging men to treat you as a hole for their sexual pleasure.");
			break;
		}
		case "vr9": {
			data.story.vrName = "Rose";
			writeText("Sex, pleasure, wonderful shame.");
			writeText("These were all that went through your mind as what must have been months passed.");
			writeText("Another spike of pain to the back of your neck. This is the third. Each time the sting happens, your mind returns to its former self for one glorious moment.");
			writeText("Yet it's gone in a flash as the horrible memories flood back into you. The kingdom falling, the dark magic cast upon your body...");
			writeText("All is gone, garbage in the face of the monsters who have taken control of the kingdom.");
			writeText("All of it begins to flood back into you as men speak of their disappointment around you.");
			writeText("Yet one thing shines through the darkness. One last glimmer of light passes through your mind as you hear the faint words 'princess' from somewhere.");
			writeText("One last hope to hold on to, that is God's gift.");
			writeText("You fight through the wave of despair, and open your eyes.");
			writeSpeech("???", "scripts/gamefiles/none.png", "Oh? She's awake!");
			writeText("You're dimmly aware he's speaking to you. Fancy clothes and a fat body, he must be a merchant or a noble. He must have purchased you. Hopefully he intends to use you as a breeding stallion instead of a relief tool, but the familiarity of the scar on his face dashes those hopes.");
			writeText("He speaks some worthless nonsense about how he knew you, about how he paid a great sum to have you restored to sanity for today.");
			writeText("You'll kill him later, probably when he tries to kiss you. For now, he ushers you along through a doorway and into a seat. Disgusting monsters and men wearing heretical hoods fill what appears to be a large amphitheater.");
			writeText("A woman with a golden mask walks onto the stage, and you can hear noises through the curtain.");
			writeSpeech("Announcer", "scripts/gamefiles/none.png", "Welcome, dear guests! Today we have quite the special show and auction for you!");
			writeText("She takes a step to the side as the curtains are drawn, and you do your best not to die inside at the sight.");
			writeBig("images/drawn/vr/8-1.jpg");
			writeSpeech("Elizabeth", "vr", "So... So big...");
			writeText("Her voice is quiet and hoarse, as though it's given up after hours of screaming.");
			writeSpeech("Announcer", "scripts/gamefiles/none.png", "Tonight, you all will be witness to the breeding of the former princess! Then, one lucky bidder will be able to purchase the rights to her spawn!");
			writeText("I'm gonna have a baby~... A baby~, a baby~");
			writeSpeech("Announcer", "scripts/gamefiles/none.png", "Don't worry about finding your coins, gentlemen. For now, enjoy the show!");
			writeText("She snaps her fingers to signal the brutish orc holding the princess.");
			writeBig("images/drawn/vr/8-2.jpg");
			writeSpeech("Elizabeth", "vr", "GHHrrrg...");
			writeText("She's in pain, that much is clear. The dick currently ruining her insides is thicker than your arm, yet as he pushes in clear sticky fluid leaks out of Elizabeth's snatch.");
			writeText("The monster grunts, he's probably already hit her cervix. You can see the outline of his cock's head through the princess's tattooed abdomen.");
			writeBig("images/drawn/vr/8-3.jpg");
			writeSpeech("Elizabeth", "vr", "Gaaaaaah!");
			writeText("The creature feels no hesitation or remorse as he smashes through Elizabeth's final barrier. Her body is irrecoverably ruined as the orc punches through to her womb.");
			writeText("Your brain is damaged from the abuse you've taken, your memory is foggy. All you can remember is shameful disgrace.");
			writeText("You can hear her sweet voice in your head as you watch her being defiled before you.");
			writeText("She tells you that everything will be okay as tears stream down your face. You reach down and begin to play with yourself.");
			writeSpeech("Elizabeth", "vr", "NNNGH~! IT'S TEARING ME IN HALF~!");
			writeText("She would want you to be happy with your new life, like she is.");
			writeBig("images/drawn/vr/8-4.jpg");
			writeSpeech("Elizabeth", "vr", "YEEESS!!!");
			writeText("She screams out to the heavens as the orc begins to cum, filling her tainted womb with monstrous sperm. There's no chance she's biologically compatible with the monster, but you have a feeling some dark wizard has already fixed that issue.");
			writeBig("images/drawn/vr/8-5.jpg");
			writeSpeech("Elizabeth", "vr", "Eheh... Ehehe... Geheh, oink!");
			writeText("You're leaking onto your seat, but you don't care. Elizabeth's womb begins to inflate before your eyes, stretching her pig costume to its limits.");
			writeText("The announcer snaps her fingers again, and the orc dutifully begins to pull her off of his foot-long cock.");
			writeBig("images/drawn/vr/8-6.jpg");
			writeText("Semen floods out as you cum at the sight of Elizabeth's gaping vagina. Her body is a worthless rag now, probably to be auctioned off later. Maybe your new master will purchase her, and maybe if you beg for long enough you'll be able to play with her.");
			writeText("But what captures your imagination even more right now is what unholy result will be born of this? Whatever monster Elizabeth births as a result of this will be the new rightful heir to the throne, rightful king in your eyes.");
			break;
		}
		default: {
			writeText("This event is not yet finished, but do not fret! You've still unlocked the ability to view this scene later via the gallery. In a future version, once this scene has been completed you'll be able to watch this scene from there so long as you have a laptop.");
			break;
		}
	}
	writeTransition("princessExit", "Finished");
}