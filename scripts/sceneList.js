function writeScene(scene) {
	slideShowCounter = 0;
	switch(scene) {
		case "start": {
			gamesAlreadyListed = "";
			document.getElementById('output').innerHTML +=`
				<div class="disclaimer">
					<p class = "centeredText" style="font-size: 150%;">Welcome to NoodleJacuzzi's Master Index!</p>
					<p class = "centeredText">Disclaimer:<br>These games feature erotic material depicting strong sexual themes. The content in these games is not appropriate for minors, please enjoy responsibly. If you are not of legal age, please head to a place like coolmathgames or abcya for content you can legally enjoy.</p>
					<p class = "centeredText">If you'd like to discuss the games here, or want to hang out with people like me or Cryptogreek, consider popping into the <a href="https://discord.gg/B3AszYM">discord server</a>. You can opt into release notifications and it's the easiest way to voice feedback about the games.</p>
					<p class = "centeredText"><b>August's release Schedule:</b></p>
					<p class = "centeredText">Hentai University v13 (RELEASED!)
					<p class = "centeredText">Anomaly Vault v8 - 8/28</p>
				</div>
				<div class="gridNotGames" id="NotGames">
					<div class="nonGameContainer" id="newsFeed">
						<p style="font-size: 120%">Latest News:</p>
					</div>
					<div class="nonGameContainer" id="patronList">
						<p style="font-size: 120%">Patrons:</p>
						<p>Swallows999</p>
						<p>O Xy Enkin</p>
						<p>Joshua Ingram</p>
						<a style="cursor:pointer;"onclick="sceneTransition('patrons')">And many more, come see the whole list of supporters!</a>
					</div>
				</div>
				<hr>
				<div class="grid" id="noodleGames">
				</div>
				<p class = "centeredText">If you enjoy my work please consider supporting me on <a href="https://www.patreon.com/noodlejacuzzi">Patreon</a>. I do multiple releases but only charge once each month. Aside from supporting me financially you can review the games or recommend them to a friend, those help out a great deal as well!</p>
				<hr>
				<p class = "centeredText" style="font-size: 150%;">Other games by authors I like:</p>
				<div class="grid" id="otherGames">
					<div class="gameContainer" onclick="openLink('https://tfgames.site/index.php?module=viewgame&id=2189')">
						<img class="bigPicture" src="images/DTC.png">
						<div class="gameTitle">
							<p class="gameTitleText">Dared to Change</p>
						</div>
					</div>
					<div class="gameContainer" onclick="openLink('https://4minutewarning.itch.io/ravager')">
						<img class="bigPicture" src="images/RAV.png">
						<div class="gameTitle">
							<p class="gameTitleText">Ravager</p>
						</div>
					</div>
					<div class="gameContainer" onclick="openLink('https://www.dlsite.com/maniax/work/=/product_id/RJ291293.html')">
						<img class="bigPicture" src="images/OBA.png">
						<div class="gameTitle">
							<p class="gameTitleText">Untranslated game by Enoshima Iki</p>
						</div>
					</div>
				</div>
			`;
			generateNews();
			break;
		}
		case "HAA": {
			slideShow = [
				"images/HAA.png",
				"images/HAA1.JPG",
				"images/HAA2.JPG",
				"images/HAA3.gif",
				"images/HAA4.JPG",
				"images/HAA5.JPG",
			];
			writeSlideshow("images/HAA.png");
			writeText("Human Alteration App v1.0");
			writeText("You find yourself with a phone app that can alter people's minds and bodies. Choose between one of two routes where either you're in control of the world or the app is stolen from you. There's a clear sense of progression throughout and no focus on grinding.");
			writeText("Dom route tags: Incest (optionally non blood-related), Mind Control, Sluttification, Degradation, Exhibitionism, Watersports (optional, not yet implemented)");
			writeText("Sub route tags: 2D Art, Incest (optionally non blood-related), Sissification, Female-to-Shemale Transformation, Cum Eating, Sounding, NTR (mild & optional), Smothering, Watersports");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/Human%20Alteration%20App/Human%20Alteration%20App.html">Play the game online</a>
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/Human%20Alteration%20App/Human%20Alteration%20App%20Mobile.html">Play the mobile version</a>
				<a class="choiceGridText" href="https://tfgames.site/phpbb3/viewtopic.php?f=6&t=12458">View the TFGame entry</a>
				<a class="choiceGridText" href="https://f95zone.to/threads/human-alteration-app-v0-6-5-noodlejacuzzi.28823/">View the F95Zone thread</a>
				<a class="choiceGridText" href="https://www.patreon.com/posts/27965721">Download the game</a>
				<a class="choiceGridText" href="http://freesuggestionbox.com/pub/sjqumcl">Anonymous Suggestion Box</a>
				
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "RDZ": {
			slideShow = [
				"images/RDZ.jpg",
				"images/RDZ1.JPG",
				"images/RDZ2.JPG",
				"images/RDZ3.gif",
			];
			writeSlideshow("images/RDZ.jpg");
			writeText("Rainy DayZ v3");
			writeText("In a world where a zombie virus has spread, transforming people into voracious sex-hungry dickgirls, you play as a young woman searching for supplies to survive.");
			writeText("Navigate a town and city deliberately working to sabotage yourself and throw yourself into the clutches of the zombie hordes, the goal of the game here is to be defeated and attacked to collect and unlock all of the game's scenes. Now features two additional campaigns as well!");
			writeText("Tags: Real Porn, Shemale, Female-to-Shemale Transformation, Rape, Corruption, Zombification, Rimming (can be disabled), Bestiality (can be disabled), Parasites (can be disabled), Watersports (can be disabled)");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/Rainy%20DayZ/Rainy%20DayZ.html">Play the game online</a>
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/Rainy%20DayZ/Rainy%20DayZ%20Mobile.html">Play the mobile version</a>
				<a class="choiceGridText" href="https://tfgames.site/index.php?module=viewgame&id=2039">View the TFGame entry</a>
				<a class="choiceGridText" href="https://f95zone.to/threads/rainy-dayz-v3-0-noodlejacuzzi.42457/">View the F95Zone thread</a>
				<a class="choiceGridText" href="https://www.patreon.com/posts/39193031">Download the game</a>
				<a class="choiceGridText" href="http://freesuggestionbox.com/pub/atouyqk">Anonymous Suggestion Box</a>
				
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "AV": {
			slideShow = [
				"images/AV.png",
				"images/AV1.JPG",
				"images/AV2.JPG",
				"images/AV3.JPG",
				"images/AV4.JPG",
				"images/AV5.JPG",
			];
			writeSlideshow("images/AV.png");
			writeText("Anomaly Vault v7");
			writeText("<b>Currently sponsored by Swallows999!</b>");
			writeText("You play as a researcher performing experiments on various reality warping artifacts, currently including a presence-erasing bracelet and a crate that converts anything inside into a hypersexualized version of itself.");
			writeText("The game uses real porn gifs, and is similar in tone to Human Alteration App's dom route. The themes and fetishes of the game are governed by what artifacts you interact with, hopefully as time passes you'll find and artifact you really connect with. Let me know if you have any artifact / scene ideas!");
			writeText("Nonoptional Tags: Unpercieved Sex, Ignored Sex, Dubious Consent, Seduction of Women in Committed Relationships. All the rest of the tags depend on what you interact with.");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/Anomaly%20Vault/Anomaly%20Vault.html">Play the game online</a>
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/Anomaly%20Vault/Anomaly%20Vault%20Mobile.html">Play the mobile version</a>
				<a class="choiceGridText" href="https://tfgames.site/index.php?module=viewgame&id=2110">View the TFGame entry</a>
				<a class="choiceGridText" href="https://f95zone.to/threads/anomaly-vault-v7-noodlejacuzzi.34746/">View the F95Zone thread</a>
				<a class="choiceGridText" href="https://www.patreon.com/posts/37422705">Download the game</a>
				<a class="choiceGridText" href="http://freesuggestionbox.com/pub/axblnfu">Anonymous Suggestion Box</a>
			</div>
				<a class="choiceGridText" href="https://www.patreon.com/posts/33013457">View the cheat and prisoner codes</a>
				<p class="choiceGridText" onclick="sceneTransition('artifactList')">View a roadmap of upcoming/inplemented artifacts</p>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "BM": {
			slideShow = [
				"images/BM.png",
				"images/BM1.JPG",
				"images/BM2.JPG",
				"images/BM3.JPG",
			];
			writeSlideshow("images/BM.png");
			writeText("Bitch Medicenter Demo");
			writeText("In a near future where body and mind alteration are the latest fad, customers of Bitch Medicenter often have very specific needs. Liz the physician and a nameless technician are here to fulfill those needs in the most depraved way possible.");
			writeText("This game is still lacking content. Please feel free to offer suggestions!");
			writeText("Tags are on a case-by-case basis. View each patient's file and avoid whatever you aren't into. The most common fetish is body / mind alteration.");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/Bitch%20Medicenter/Bitch%20Medicenter.html">Play the game online</a>
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/Bitch%20Medicenter/Bitch%20Medicenter%20Mobile.html">Play the mobile version</a>
			</div>
				<a class="choiceGridText" href="http://www.hentai-foundry.com/stories/user/NoodleJacuzzi">Read some related short stories</a>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "PQ": {
			slideShow = [
				"images/princessQuest.jpg",
				"images/PQ1.JPG",
				"images/PQ2.JPG",
				"images/PQ3.JPG",
			];
			writeSlideshow("images/princessQuest.jpg");
			writeText("Princess Quest");
			writeText("Play as Princess Elizabeth as she navigates caves and castle dungeons to rid her people of a demon's foul curse, unaware that she's playing right into the demon's hands.");
			writeText("Uses art done by Neromashin. It's all from a game named 'Oujo & Onna Kishi W Do Gehin Roshutsu ~Chijoku no Misemono Dorei~' published by PinPoint. You can find the official website of the game at http://www.pin-point.biz/27_wdgr/index.html, but it's in Japanese. There is an English version coming to steam, but I've heard negative things about the translation's quality.");
			writeText("As a note, I really do not recommend playing this on mobile. There have also been a few issues with playing it online. As it's only 4 megs, downloading it is the reccomended way to play.");
			writeText("Tags: Moral Degradation, Corruption, Tentacles, Cum Inflation, Exhibitionism");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/Princess%20Quest/Princess%20Quest.html">Play the game online</a>
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/Princess%20Quest/Princess%20Quest%20Mobile.html">Play the mobile version</a>
				<a class="choiceGridText" href="https://mega.nz/#!Gl9whSBL!S0FswXAxehzhP3cMGOPa5-mp-CjFRtTHQ4-3BjCITX8">Download the game</a>
				<a class="choiceGridText" href="https://tfgames.site/phpbb3/viewtopic.php?f=60&t=12578">TFGames discussion thread</a>
			</div>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "HU": {
			slideShow = [
				"images/HU.png",
				"images/HU1.JPG",
				"images/HU2.JPG",
				"images/HU3.JPG",
				"images/HU4.JPG",
				"images/HU5.JPG",
				"images/HU6.jpg",
			];
			writeSlideshow("images/HU.png");
			writeText("Hentai University v13");
			writeText("Formerly sponsored by: O Xy Enkin");
			writeText("A game made in cooperation with author Captain Cryptogreek, who works as the game's lead writer. You play as a young man with a strong grasp on hypnotic magic, and have embedded yourself as a counselor in a school with a fantastically attractive student body. The faculty and your neighbors in town look pretty good too.");
			writeText("The game features multiple male characters with a femboi/twink bodytype. These are entirely optional and you can enable a vegetarian mode to avoid encountering them. On the opposite end if you aren't interested in the girls none of the bois require you to engage with female characters to unlock all their content.");
			writeText("This game uses art by Enoshima Iki, Nagi Ichi, Oreteki18kin, Gujira 4 Gou, and Kinta no Mousou and is meant to be similar in feel to Hentai High School, but without the focus on school management, more emphasis on wandering / corruption, and a much higher quality body of images. The end goal here is a town packed with dozens of characters using a framework I can continually add more content to.");
			writeText("Tags: Hypnosis, features many other tags entirely avoidable tags based on characters such as incest, dubcon, and gay content");
			document.getElementById('output').innerHTML +=`
			<div class="choiceGrid">
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/Hentai%20University/Hentai%20University.html">Play the game online</a>
				<a class="choiceGridText" href="https://noodlejacuzzi.github.io/Hentai%20University/Hentai%20University%20Mobile.html">Play the mobile version</a>
				<a class="choiceGridText" href="https://f95zone.to/threads/hentai-university-v12-noodlejacuzzi.37312/">View the F95Zone thread</a>
				<a class="choiceGridText" href="https://hypnopics-collective.net/smf_forum/index.php?topic=23881.0">View the Hypnopics thread</a>
				<a class="choiceGridText" href="https://www.patreon.com/posts/40445131">Download the game</a>
				<a class="choiceGridText" href="http://freesuggestionbox.com/pub/oakihbd">Anonymous Suggestion Box</a>
			</div>
			<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Hentai%20University%20Modding%20Tutorial/Tutorial.html'">Interested in writing your own characters? Check out this modding tutorial!</p>
			<p class="choiceText" onclick="window.location.href='https://www.patreon.com/posts/30871183'">View the list of cheat codes</p>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "patrons": {
			document.getElementById('output').innerHTML +=`
				<p class = "centeredText" style="font-size: 150%;">An incredibly huge thank you to:</p>
				<p style="column-count:3;">Swallows999<br>O Xy Enkin<br>Joshua Ingram<br>Robbie<br>Lasse B<br>MrManPerson<br>ChronosEdge<br>CaptainMontana<br>Madgunner<br>Scal<br>Badaxe<br>andres mejia<br>Colin E<br>Dkells<br>Jinouga<br>Marco Wassmer<br>XxrobothacksxX<br>Jesse Greene<br>Dustin Leichsenring<br>Filament<br>G<br>J_C_L<br>jack spencer<br>Ramsey Bisher<br>Taylor Trout<br>brandon<br>Skyrim mod lvr<br>Negativatron<br>Roy<br>Wild Bill<br>Ben Dover<br>Iron Diana<br>长平 鬣<br>Carlos<br>Debarre Sonny<br>Drashin<br>Keith<br>Macarga<br>murgatroid99<br>Richard<br>Angel<br>Ariados<br>Blaise Fenn<br>Gwen Yurick<br>Jane<br>Muryu<br>Nils Maier<br>Snaked<br>stratum<br>Carlos<br>ItsAllOgreNow<br>Joshua Melzark<br>qwerty<br>Verillia tristari<br>4MinuteWarning<br>Aegil<br>Aminaros<br>Andy Amundy<br>Anthony Munso<br>Bonelessunknown<br>Chaaaanon<br>Charles Morris<br>dhccpmc<br>dragoon48<br>Dugelle<br>FearlessViper26<br>Hi There<br>john smith<br>Marc Maldon<br>mazterlith<br>Nutburger<br>Phanes<br>ryguy<br>Scumstango<br>Simon Rencher<br>StormSight<br>Wei<br>Whynot<br>William Richardson<br>Your Husbando<br>Daniel Vivette<br>Danny Nguyen<br>Darrell Goodman<br>Grim2011<br>joe<br>John Lewis<br>KH dg<br>lm Carma<br>Trevor<br>yami<br>Z<br>Alec8686<br>DarthMalak<br>Louis Hayes<br>Prodigal211<br>sky<br>Tanman<br>Alex<br>Andy<br>Anthony Ewing<br>Ark555<br>Colin Valente<br>Daekash<br>ddkre<br>fireballcreations<br>GirmusCz<br>Harry Brasch<br>I'm a Mitch<br>Justifiable Gaming<br>Lunarghost<br>Markus Hansen<br>michael patrick murphy<br>Monkey<br>SmolFish<br>Tyberius Kirk<br>Wayne culbert<br>andy<br>AxiosMIles<br>ChubbiestThread<br>David Lange<br>Emanuel  Garcia<br>FrostyTB<br>Geoff Heimos<br>greatred<br>Greg Torres<br>Guy68691<br>henry grobins<br>joe mulhall<br>Joseph Gibbs<br>Kieron Kow<br>KVBismarc<br>l<br>l1monat<br>liam paterson<br>Limitless<br>Magnus<br>Nisi<br>Oliver Jones<br>ranchy sanchy<br>Reverberations<br>Riven Drasek<br>ShadowFalls<br>Slomberg<br>TheRawToast<br>Tyler Ross<br>William Parker<br>XaiuX<br>AnotherAccount333<br>Bawornnan samart<br>Dean<br>Dravenmd114<br>Ed<br>Erin Trippet<br>Gavin Davis<br>joel larsen<br>Kaliden<br>Karan Raj Gupta<br>Krose<br>Kudon<br>Lucas<br>MagicMajestic<br>Mars<br>Nha<br>PR0 x THUNDER<br>ptw1985<br>Shirofang<br>sluttyboi<br>Sveny13<br>theoron<br>waazzzup14<br>wolfboom<br>zoobot5<br>adyflorin<br>Alfonso<br>Andrew Lynn<br>Anton Schmidt<br>Arkhalis<br>Auckard<br>Bleed1ngthunder<br>Bobby Hamilton<br>bono<br>cabbage<br>Cameron S<br>colt<br>Culton Niccum<br>Curtis Vidulich<br>Damion Moore<br>Daniel Harris<br>david thompson<br>dennis trappen<br>Dewr<br>Don<br>Dr. Awesome<br>Профессор Преображенский<br>林家豪<br>Elias Errati<br>Eric Hslew<br>Frederto<br>Geoffrey Munoz<br>GlockerSpaniel<br>Har Boi<br>Hunter XZ<br>iNoH8+<br>Jack Cummings<br>Jacob Cannon<br>Jayesonn leleaux<br>jdktjk205<br>joe<br>Johnathan Thornburg<br>Jordan Ballinger<br>Joshua Curtis<br>Judavarius<br>Julia Ferro<br>Kethis Immortalis<br>Kurosuki<br>LaCrazy<br>LordTenry<br>Lucas Molski<br>lucidwillow116<br>Luke<br>Martin Touralack<br>marvin diaz<br>Me You<br>N3on<br>nathan<br>Nathan Martin<br>nicholas guerra<br>paul silvis<br>Philipp<br>pipok<br>Q Q<br>Qrow<br>Ragoth<br>ryan<br>Ryan Linn<br>Shawn<br>Slipokk<br>Smiley Green<br>Sossedov<br>Steam Screw<br>Theodrian<br>thesingleguy<br>Ungy Bungy<br>Vikteren<br>Yongdian Guo</p>
				<p class = "centeredText" style="font-size: 150%;">For supporting my work!</p>
				<p>This is a single massive list of all patrons who've ever supported me, I update this list just before each release. I wouldn't be making games today without their support.</p>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "start" : {
			document.getElementById('output').innerHTML +=`
				<p class = "centeredText">Lastest News 7/22/2020</p>
				<p class = "centeredText">Hentai University v12: https://www.patreon.com/posts/39683865</p>
				<p class = "centeredText">Hentai University v12 is complete, featuring the new character Nikki by Cryptogreek, and scenes for Ash in his crossdressing club!</p>
				<p class = "centeredText">Bonus News 7/26/2020</p>
				<p class = "centeredText">A hotfix for Hentai University titled v12a can be found in the patreon post, fixing bugs for the v12 release. Download it if you can, the online ver is already updated.</p>
				<p class = "centeredText">Thank you to: Swallows999, O Xy Enkin, Joshua Ingram, Robbie, Lasse B, MrManPerson, ChronosEdge, CaptainMontana, Madgunner, Scal, Badaxe, andres mejia, Colin E, Dkells, Jinouga, Marco Wassmer, XxrobothacksxX, Jesse Greene, Dustin Leichsenring, Filament, G, J_C_L, jack spencer, Ramsey Bisher, Taylor Trout, brandon, Skyrim mod lvr, Negativatron, Roy, Wild Bill, Ben Dover, Iron Diana, 长平 鬣, Carlos, Debarre Sonny, Drashin, Keith, Macarga, murgatroid99, Richard, Angel, Ariados, Blaise Fenn, Gwen Yurick, Jane, Muryu, Nils Maier, Snaked, stratum, Carlos, ItsAllOgreNow, Joshua Melzark, qwerty, Verillia tristari, 4MinuteWarning, Aegil, Aminaros, Andy Amundy, Anthony Munso, Bonelessunknown, Chaaaanon, Charles Morris, dhccpmc, dragoon48, Dugelle, FearlessViper26, Hi There, john smith, Marc Maldon, mazterlith, Nutburger, Phanes, ryguy, Scumstango, Simon Rencher, StormSight, Wei, Whynot, William Richardson, Your Husbando, Daniel Vivette, Danny Nguyen, Darrell Goodman, Grim2011, joe, John Lewis, KH dg, lm Carma, Trevor, yami, Z, Alec8686, DarthMalak, Louis Hayes, Prodigal211, sky, Tanman, Alex, Andy, Anthony Ewing, Ark555, Colin Valente, Daekash, ddkre, fireballcreations, GirmusCz, Harry Brasch, I'm a Mitch, Justifiable Gaming, Lunarghost, Markus Hansen, michael patrick murphy, Monkey, SmolFish, Tyberius Kirk, Wayne culbert, andy, AxiosMIles, ChubbiestThread, David Lange, Emanuel  Garcia, FrostyTB, Geoff Heimos, greatred, Greg Torres, Guy68691, henry grobins, joe mulhall, Joseph Gibbs, Kieron Kow, KVBismarc, l, l1monat, liam paterson, Limitless, Magnus, Nisi, Oliver Jones, ranchy sanchy, Reverberations, Riven Drasek, ShadowFalls, Slomberg, TheRawToast, Tyler Ross, William Parker, XaiuX, AnotherAccount333, Bawornnan samart, Dean, Dravenmd114, Ed, Erin Trippet, Gavin Davis, joel larsen, Kaliden, Karan Raj Gupta, Krose, Kudon, Lucas, MagicMajestic, Mars, Nha, PR0 x THUNDER, ptw1985, Shirofang, sluttyboi, Sveny13, theoron, waazzzup14, wolfboom, zoobot5, adyflorin, Alfonso, Andrew Lynn, Anton Schmidt, Arkhalis, Auckard, Bleed1ngthunder, Bobby Hamilton, bono, cabbage, Cameron S, colt, Culton Niccum, Curtis Vidulich, Damion Moore, Daniel Harris, david thompson, dennis trappen, Dewr, Don, Dr. Awesome, Профессор Преображенский, 林家豪, Elias Errati, Eric Hslew, Frederto, Geoffrey Munoz, GlockerSpaniel, Har Boi, Hunter XZ, iNoH8+, Jack Cummings, Jacob Cannon, Jayesonn leleaux, jdktjk205, joe, Johnathan Thornburg, Jordan Ballinger, Joshua Curtis, Judavarius, Julia Ferro, Kethis Immortalis, Kurosuki, LaCrazy, LordTenry, Lucas Molski, lucidwillow116, Luke, Martin Touralack, marvin diaz, Me You, N3on, nathan, Nathan Martin, nicholas guerra, paul silvis, Philipp, pipok, Q Q, Qrow, Ragoth, ryan, Ryan Linn, Shawn, Slipokk, Smiley Green, Sossedov, Steam Screw, Theodrian, thesingleguy, Ungy Bungy, Vikteren, and Yongdian Guo for supporting my work!</p>
			`;
			document.getElementById('output').innerHTML +=`
				<p class="choiceText" onclick="window.location.href='https://discord.gg/B3AszYM'">Visit my discord server</p>
			`;
			//writeTransition("recommendations", "Recommendations");
			writeBig("images/AnomalyVault.png");
			writeText("Anomaly Vault v7");
			writeText("You play as a researcher performing experiments on various reality warping artifacts, currently including a presence-erasing bracelet and a crate that converts anything inside into a hypersexualized version of itself.");
			writeText("The game uses real porn gifs, and is similar in tone to Human Alteration App's dom route.");
			writeText("The themes and fetishes of the game are governed by what artifacts you interact with, hopefully as time passes you'll find and artifact you really connect with. Let me know if you have any artifact / scene ideas!");
			writeText("Nonoptional Tags: Unpercieved Sex, Ignored Sex, Dubious Consent, Seduction of Women in Committed Relationships");
			writeText("Optional Tags: Corruption, Mind Control, Deepfake, Genderbending (both M to F and F to M) among others. See the content list below.");
			document.getElementById('output').innerHTML +=`
				<p class="choiceText" onclick="window.location.href='https://www.patreon.com/posts/37422705'">Download Links</p>
				<p class="choiceText" onclick="window.location.href='https://www.patreon.com/posts/33013457'">Cheat Codes</p>
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Anomaly%20Vault/Anomaly%20Vault.html'">Play the game online</p>
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Anomaly%20Vault/Anomaly%20Vault%20Mobile.html'">Play the mobile version</p>
				<p class="choiceText" onclick="window.location.href='https://tfgames.site/phpbb3/viewtopic.php?f=75&t=12954'">TFgames Thread</p>
				<p class="choiceText" onclick="window.location.href='https://f95zone.to/threads/anomaly-vault-v1-noodlejacuzzi.34746/'">F95Zone Thread</p>
			`;
			writeTransition("artifactList", "See a roadmap of current / planned content");
			writeBig("images/HentaiUniversity.png");
			writeText("Hentai University v12");
			writeText("A game made in cooperation with author Captain Cryptogreek, who works as the game's lead writer.");
			writeText("You play as a young man with a strong grasp on hypnotic magic, and have embedded yourself as a counselor in a school with a fantastically attractive student body. The faculty and your neighbors in town look pretty good too.");
			writeText("This game uses art by Enoshima Iki, Nagi Ichi, Oreteki18kin, Gujira 4 Gou, and Kinta no Mousou and is meant to be similar in feel to Hentai High School, but without the focus on school management, more emphasis on wandering / corruption, and a much higher quality body of images.");
			writeText("The end goal here is a town packed with dozens of characters using a framework I can continually add more content to.");
			writeText("Tags: Hypnosis, features many other tags entirely avoidable tags based on characters such as incest, dubcon, and gay content");
			document.getElementById('output').innerHTML +=`
				<p class="choiceText" onclick="window.location.href='https://www.patreon.com/posts/39683865'">Download the game</p>
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Hentai%20University/Hentai%20University.html'">Play the game online</p>
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Hentai%20University/Hentai%20University%20Mobile.html'">Play the mobile version</p>
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Hentai%20University%20Modding%20Tutorial/Tutorial.html'">Modding Tutorial</p>
				<p class="choiceText" onclick="window.location.href='https://f95zone.to/threads/hentai-university-v2-5-noodlejacuzzi.37312/'">F95Zone Thread</p>
				<p class="choiceText" onclick="window.location.href='https://hypnopics-collective.net/smf_forum/index.php?topic=23881.0'">Hypnopics Thread</p>
				<p class="choiceText" onclick="window.location.href='https://www.patreon.com/posts/30871183'">List of cheat codes</p>
			`;
			writeBig("images/RainyDayZ.jpg");
			writeText("Rainy DayZ v3");
			writeText("In a world where a zombie virus has spread, transforming people into voracious sex-hungry shemales, you play as a young woman searching for supplies to survive.");
			writeText("Navigate a town and city deliberately working to sabotage yourself and throw yourself into the clutches of the zombie hordes, the goal of the game here is to be defeated and attacked to collect and unlock all of the game's scenes.");
			writeText("Tags: Shemale, Female-to-Shemale Transformation, Rape, Corruption, Zombification, Bestiality (can be disabled), Parasites (can be disabled), Watersports (can be disabled)");
			writeSpecial("Use the cheat code <b>Pool Noodle</b> for a guide on how to unlock each scene!");
			writeTransition("RainyDayZ", "Preview");
			document.getElementById('output').innerHTML +=`
				<p class="choiceText" onclick="window.location.href='https://www.patreon.com/posts/39193031'">Download the game</p>
				<p class="choiceText" onclick="window.location.href='https://tfgames.site/phpbb3/viewtopic.php?f=6&t=12575'">TFGamesDiscussion thread</p>
				<p class="choiceText" onclick="window.location.href='https://f95zone.to/threads/rainy-dayz-v1-4-noodlejacuzzi.42457/'">F95Zone Discussion thread</p>
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Rainy%20DayZ/Rainy%20DayZ.html'">Play the game online</p>
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Rainy%20DayZ/Rainy%20DayZ%20Mobile.html'">Play the mobile version</p>
			`;
			writeBig("images/bitchMedicenter.png");
			writeText("Bitch Medicenter Demo v2");
			writeText("You're a doctor / sexual therapist who prescribes special body and mind-altering products to help with failed marriages, self worth issue, and etc. Basically, you're modifying people's minds and bodies. Currently in a demo state with only one of the two minigames finished.");
			document.getElementById('output').innerHTML +=`
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Bitch%20Medicenter/Bitch%20Medicenter.html'">Play the demo online</p>
				<p class="choiceText" onclick="window.location.href='https://noodlejacuzzi.github.io/Bitch%20Medicenter/Bitch%20Medicenter%20Mobile.html'">Play the mobile version</p>
				<p class="choiceText" onclick="window.location.href='http://www.hentai-foundry.com/stories/user/NoodleJacuzzi/39001/Bitch-Medicenter---Jerk-off-Junkies-File'">Some related short stories</p>
			`;
			writeBig("images/logo.png");
			writeTransition("HAAD", "Dom Route Preview");
			writeTransition("HAAS", "Sub Route Preview");
			writeTransition("downloadHAA", "Download Human Alteration App");
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
			break;
		}
		case "news": {
			writeText("<b>10/25/2019</b> - Hentai University v3");
			writeText("The release of Hentai University v3, with some new scenes and the entire engine rebuilt for (hopefully) easy mod support!");
			writeText("<b>10/7/2019</b> - Discord Server");
			writeText("I now have a discord server. Feel free to drop in whenever!");
			writeText("https://discord.gg/B3AszYM");
			writeText("<b>10/7/2019</b> - Discord Server");
			writeText("I now have a discord server. Feel free to drop in whenever!");
			writeText("https://discord.gg/B3AszYM");
			writeText("<b>9/23/2019</b> - Bitch Medicenter Demo");
			writeText("I've added another scene to Bitch Medicenter, comissioned by MrManPerson. Find the game's section below underneath Anomaly Vault and Hentai University.");
			writeText("Have any ideas for more Human Alteration Content? I'm considering working on that game again to flesh out some areas like the clothing system. I'd love to hear your suggestions!");
			writeText("<b>9/20/2019</b> - Hentai University v2");
			writeText("Version 2 of Hentai University is available now, featuring more characters and framework for future plotlines");
			writeText("<b>9/6/2019</b> - Anomaly Vault v2");
			writeText("Version 2 of Anomaly Vault, featuring the Time-Stopwatch and the Antique Mirror which leads to alternate dimensions.");
			writeText("Head over to my patreon for more info (the post is visible to non-patrons), there's a list of cheats available there too.");
			writeText("<b>8/16/2019</b> - Bitch Medicenter Demo");
			writeText("Demo version of my game Bitch Medicenter is now available.");
			writeText("<b>8/7/2019</b> - Anomaly Vault V1");
			writeText("Sponsored game by Swallows999, similar in tone to Human Alteration App's dom route.");
			writeText("<b>7/31/2019</b> - Hentai University V1");
			writeText("Winner of the July Poll, Hentai University is now available. See more info below");
			writeText("<b>7/10/2019</b> - Hentai University Demo");
			writeText("Demo version of my latest game and the July poll winner, Hentai University is now available.");
			writeText("I'll have a dedicated section for it once version 1 is finished.");
			writeText("<b>6/30/2019</b> - Human Alteration App Typofix & July Poll");
			writeText("Several typos fixed, beauty ticket requirement removed");
			writeText("July content poll up on Patreon. Vote now!");
			writeText("<b>6/14/2019</b> - Human Alteration App v1.0");
			writeText("Dom Route Complete");
			writeText("15 short ending scenes");
			writeText("<b>6/14/2019</b> - Human Alteration App v0.9");
			writeText("Sub Route Complete");
			writeText("2 new sub route scenes, 3 endings");
			writeText("Thank you to Lasse Bannow, and Brandon, who've pledged their support!");
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
		case "artifactList": {
			writeText("Main Game Artifacts:");
			writeText("These are added to the game specifically to appeal to the game's sponsor, Swallows999. They have more scenes, and are planned to be implemented in this order:");
			writeText(`
				<b>Reprehensive Bracelet (IMPLEMENTED)</b>
				<br> A partially tarnished silver bracelet. When worn, the wearer can become imperceivable and erase memories of themselves & their actions.
				<br>Tags: Unpercieved Sex, Memory Alteration
			`);
			writeText(`
				<b>Erotibox (IMPLEMENTED)</b>
				<br>A wooden crate, anything put inside becomes a heavily sexualized version of itself.
				<br>Tags: Corruption, Mind Control, Deepfake
			`);
			writeText(`
				<b>Alternate Reality Mirror (IMPLEMENTED)</b>
				<br>An antique mirror, stepping through it leads to another dimension of earth depending on the engraving that changes each day. Current engravings include Public Fun Is Not Unusual, a world where public sex is common, and Little Men Are Fun Toys, a world where gender dynamics are reversed from our own.
				<br>Tags: Public Sex, Ignored Sex, Gender Dynamic Reversal, Reverse Rape
			`);
			writeText(`
				<b>Time Stopwatch (IMPLEMENTED)</b>
				<br>A broken bronze stopwatch. When the button on top is pressed, time stops for everyone except the user and anyone they're touching.
				<br>Tags: Time Stop, Rape
			`);
			writeText(`
				<b>Midas Coin (IMPLEMENTED)</b>
				<br>An old golden Greek coin. When held, the holder can bargain sexual acts as though they were bartering with money, the more depraved actions they commit, the larger the monetary value of those actions.
				<br>Tags: Public Sex, Sluttification, Reverse Rape
			`);
			writeText(`
				<b>Super Truth Serum (IMPLEMENTED)</b>
				<br>A mint-flavored drink contained in several small vials. Whatever the drinker says becomes seen as absolute truth by the people around them.
				<br>Tags: Mind Control, Dubious Consent
			`);
			writeText(`
				<b>Chaddicus Shades (IMPLEMENTED)</b>
				<br>A pair of aviator sunglasses which, when worn, increase the wearer's confidence by several dozen degrees. Women will feel compelled to argue with the wearer, at which point some mysterious process causes the argument to almost immediately devolve into sex, with the wearer as the dominant partner.
				<br>Tags: Instant-Loss, Sexual Assault, Dubious Consent
			`);
			writeText(`
				<b>'Free _____!' Sign (IMPLEMENTED)</b>
				<br>A cardboard rectangle with the text "Free _____" written on it. When a sexual act is written on it, it teleports out of the writer's possession and into the possession of someone the writer finds attractive. That person will then feel compelled to offer their services and provide sexual acts to the viewer in public.
				<br>Tags: Sluttification, Whoring, Public Sex, Rimjob, Group Sex,
			`);
			writeText(`
				<b>Appreciation Perfume</b>
				<br>A bottle of scentless purple perfume. When sprayed, whoever inhales the perfume will be 'appreciated' (ie groping, fondling, molestation, etc) by a phantom known as the Lovely Madame. The more often the perfume is inhaled, the more tangible the phantom is.
				<br>Tags: Molestation, Ghosts, Public Groping
			`);
			writeText(`
				<b>CEO Pass</b>
				<br>An ID card from a fictitious company, whoever holds it will be able to molest / assault women as they please, and the recipient's minds will rationalize it, or even cause them to enjoy the treatment.
				<br>Tags: Domination, Molestation, Sexual Assault, Dubious Consent
			`);
			writeText(`
				<b>Vintage Cloth</b>
				<br>A sheet of cloth. When used to cover a person, once the cloth is removed the subject will be wearing a completely different set of clothing, typically the clothing of a fictional character most commonly from the superhero genre (although exceptions have been found). Afterwards, subjects were convinced that they were the characters they are dressed as, although they act much more flirtatious and are more open to sex than their character would normally be.
				<br>Tags: Cosplay Sex, Sluttification, Mind Control
			`);
			writeText(`
				<b>Libitum Scripts</b>
				<br>A set of scripts meant to be acted out as a play on a stage. On the front of each script is a blank cast list, and each script contains a highly-eroticised situation in which the cast perform various roles, but ultimately each play devolves into sex between cast members. When someone fills out the cast list with people they know, they suddenly find themselves in an unknown location, and the events of the script unfold with the chosen cast appearing and playing their roles.
				<br>Subjects chosen to be members of the cast retain some of their personality, but are compelled to complete the scene even if they feel the acts are degrading or humiliating.
				<br>Tags: Mind Control, Heavily depends on the script being acted out (cheating, incest, and many other situational fetishes are possible)
			`);
			writeText("Dark Vault Artifacts:");
			writeText("These are more divisive in fetishes covered. They're locked away in the Dark Vault and generally have less scenes overall. There's no planned order to implement these, just whichever I feel like adding at any time. These can be upgraded to main game artifacts at the sponsor's request, so I'll also use this place to store random ideas.");
			writeText("These aren't in any order, but the ones on the bottom are less thought through than the ones on top. Let me know if any of these sound particularly interesting.");
			writeText(`
				<b>Exchange Gas (IMPLEMENTED)</b>
				<br>Several gas grenades containing a blue and pink mixture. Anyone who inhales the gas will quickly be altered biologically to become a member of the opposite gender, 'genderswapping' them. The length of time they spend genderswapped changes depending on how much gas was inhaled, and if they receive the DNA of someone of their original gender.
				<br>Tags: Genderswapping, (Someone Else's) Cock Worship
			`);
			writeText(`
				<b>Succubus Onahole (IMPLEMENTED)</b>
				<br>A soft plastic fleshlight, no abnormal qualities are shown until male genitalia is inserted into the artifact. Once inserted, men will feel intense euphoria, followed by panic as they claim that tentacles are probing them from inside the artifact. Long-term effects include extreme increases in semen production and mental derangement.
				<br>Tags: Body Modification, Urethral Penetration, Excessive Semen
			`);
			writeText(`
				<b>Punification Cage (IMPLEMENTED)</b>
				<br>A small plastic cage designed to contain flaccid male genitalia. Wearing it almost immediately triggers a powerful orgasm, but in all cases resulted in an extreme decrease in genital size.
				<br>Tags: Shemale, Chastity, Size Theft
			`);
			writeText(`
				<b>Gummy Dicks (IMPLEMENTED)</b>
				<br>A box of assorted gummy candies, all individually shaped into the form of flaccid male genitalia. When eaten by a male subject, they cause erectile dysfunction and alter the minds of the eater to receive greater pleasure from anal stimulation, while also altering their bodies to become more feminine. 
				<br>Tags: Prostate Stimulation, Sissification, Flaccid Orgasm
			`);
			writeText(`
				<b>Bimbo Dust (IMPLEMENTED)</b>
				<br>A bag full of an off-white powder. It has been tested, and is not cocaine. When baked into confectionary and mixed with sugar, it has a powerful inteligence-draining, body-altering affect on anyone who consumes it.
				<br>Tags: Bimbofication
			`);
			writeText(`
				<b>Sissy's Tool Kit (IMPLEMENTED)</b>
				<br>A plastic makeup kit. When opened, objects will appear inside and in the room which are designed to encourage the opener to 'explore themselves'. These range from makeup to unknown body-modifying drugs and a 3-man group of naked men.
				<br>Tags: Sissification, Feminization, Gay(?) Sex
			`);
			writeText(`
				<b>Stiff Voodoo Doll</b>
				<br>A doll made from straw and twine. When a target's hair is wrapped around the doll, the hair will disintegrate and the target will become unable to move. People around the target will feel compelled to treat the target as a highly-realistic sex toy. The target remains conscious through the entire process, lasting exactly 24 hours before movement is once again possible.
				<br>Tags: Public Use, Dubious Consent, Mind Break
			`);
			writeText(`
				<b>Pineapple Juice!</b>
				<br>A container of pineapple juice, the logo on the front is of a woman drinking from an anthropomorphic pineapple who appears to be very happy to be drunk from. Drinking this permanently alters the bodily fluids (except for blood and other essential fluids) to become delicious and highly addictive. 
				<br>Tags: Semen Drinking, Watersports
			`);
			writeText(`
				<b>Charity's Cage</b>
				<br>A small metal cage designed to contain flaccid male genitalia. Wearers of the cage experience genital shrinkage, and whoever holds the key will suddenly grow male genetalia equal to the 'stolen' length.
				<br>Tags: Shemale, Chastity, Size Theft
			`);
			writeText(`
				<b>Ovorbs</b>
				<br>A pair of small bumpy metal orbs. When swallowed by female subjects the subjects experience a variety of bodily changes and feel compelled to become pregnant, and many of the body changes are to facilitate this.
				<br>Tags: Body Modification, Sluttification, Creampie
			`);
			writeText(`
				<b>Denial Pills</b>
				<br>A bottle of pills featuring a frustrated face on the front accompanied by Chinese text translating roughly to "STRUGGLE!". When taken subjects have shown to become completely incapable of orgasm, but develop an extreme sexual hunger and desire for relief. Research has shown that once the denial period is finished, subjects typically release far more sexual fluid than should be humanly possible.
				<br>Tags: Orgasm Denial, 
			`);
			writeText(`
				<b>Lovey Doves</b>
				<br>A pair of earing that increase the charisma of the wearer, causing them to be able to seduce anyone at will without restriction. Asexual and castrated individuals are not resistant to this effect. In addition, the user will also lose control of their sense of reason and attempt to cause as large an orgy as possible, sometimes displaying unusally high levels of problem solving ability to make this happen.
				<br>Tags: Threesome, Mind Control, Public Sex
			`);
			writeText(`
				<b>Kid Gloves Charm</b>
				<br>A silver pair of earings that, when worn, cause any physical  or emotional pain the wearer inflicts to be recieved as pleasure. Any injuries caused will also be surface level at worst. The longer the charm is on the wearer's person, the rougher they will treat members of the opposite sex.
				<br>Tags: Rough Sex (spanking, hair pulling), Rougher Sex (going even farther beyond)
			`);
			writeText(`
				<b>Destiny-Link Rings</b>
				<br>A pair of golden rings. When worn by a pair of people, sensations such as pleasure, happiness, guilt, etc experienced by one ring wearer will be transferred and felt by the other ring weaer.
				<br>Tags: Shared sensation, Long-distance sex
			`);
			writeText(`
				<b>Self-Fufilling Pills</b>
				<br>A small tin container with a single red piece of breath freshener inside. When eaten the subject will develope a sixth sense when looking at woman, showing visions in their mind of rejection and obscenely disgraceful behavior. Typically these fantasies involve the women eloping with men other than the subject.
				<br>Tags: Gangbang, sluttification, cuckholding
			`);
			//writeText(`
				//<b>Megavitamin of Youth</b>
				//<br>A gummy megavitamin, aquisition records show it was created by putting water from the fountain of youth into the erotibox. A subject who eats the megavitamin appears to look younger to the people around them. As a side-effect, it greatly increases the cruelty and reduces the ability for empathy of the subject.
				//<br>EXTRA NOTE: The player (male), would eat this. It'd make you look like a youthful teenager and the women of the cast would go full cougar over you.
				//<br>Tags: Ara Ara~, De-aging, Male Domination, Female Degradation
			//`);
			writeTransition("AV", "Go Back");
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
			writeText("Her rubbing reaches a crescendo and her body convulses, but even after hand keeps rubbing. Her moans and whimpers are quick and panicked.");
			writeText("You may have raised some of those values too far. You bring up the app and change factors like libido and cooldown period, and soon enough your mother slumps against the wall, exhausted.");
			writeText("If you want to take full advantage of the app, you'll need to develop your skills with it. Since it seems like breakfast is off the table for now, you start getting ready for school");
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
		case "downloadAnomalyVault": {
			document.getElementById('output').innerHTML +=`
			Current version: V1<br><br>
			Most recent game files: https://mega.nz/#!Sr5ikIjK!mtDhSl0qL1ZuAaaXOr8xAgEQGwnugctW3rajdLO3Uus<br><br>
			Most recent image pack: https://mega.nz/#!LjpmACjJ!yANM5Mf-gElrSvSxFn_omIQu1Pjy8xI64kJZ14Iun9Q<br><br>
			If you're new to the game, all you need to do is download these two. Extract the game files to create the Anomaly Vault folder, then extract the images to create the images folder. Make sure the images folder is in the Anomaly Vault folder and you're good to go. The final layout should look like this:<br><br>
			images<br>
			scripts<br>
			Anomaly Vault.html<br>
			Anomaly Vault Mobile.html<br><br>
			If you're playing an older version, you can download individual upgrade packs here:<br>
			https://mega.nz/#F!rqhGnIwY!hzTrpPJOzhn3bNWEXNhToA<br>
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "downloadHentaiUniversity": {
			document.getElementById('output').innerHTML +=`
			Current version: v2.5<br><br>
			Most recent game files: https://mega.nz/#!TiJHUCLS!gdhSTXcC9fqGdG6ZPCl4lHRhcnod5n1Vzk3xRUW8PgE<br><br>
			I've switched to a one-download style for this game. Just extract and play!
			`;
			writeTransition("start", "Go Back");
			break;
		}
		case "downloadHAA": {
			document.getElementById('output').innerHTML +=`
			Current version: 1.0<br><br>
			All-in-one download (273 megs): https://mega.nz/#!PhdXyITa!Sc2j54dPKwc2a5zO7zNTuC0h-IIvYx9-xmv-KSUWYo4<br><br>
			Dom route only (221 megs): https://mega.nz/#!v4NFgawY!5JbAsDvKVP1voR9sCuQ--YpHPExuXLb1HxOJGhEykBY<br><br>
			Sub route only (99 megs): https://mega.nz/#!npNnDY4L!Kcy-DxBbxgxD8dENyrWMxECZHHVglUOn9qmJlrByKqk<br><br>
			Most recent game files: https://mega.nz/#!Xgk3ESCL!ceY7R-jG3nTZ-6PguAcYtE0y-GNcymqs8svrPXHXFoA<br><br>
			Most recent image pack: https://mega.nz/#!e1FnDK4J!8tUkRruq4YN1qURHRUsG4CPQTI5iTi1z3Cvgo6CNcd4<br><br>
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