var scenarioInformation = {index: "intro", author: "Noodle Jacuzzi"};
 
function writeScenarioScene(scene) {
	console.log("Now writing scenario scene ID " + scene);
	wrapper.scrollTop = 0;
	updateMenu();
	hideStuff();
	document.getElementById('output').innerHTML = '';
	tempScene = scene;
	switch(scene) {
		case "start": {
			writeText("Whether this is your first or seventh time, the experience will be indistinguishable. If you've made it this far, congratulations on your promotion. We hope to see good things from you. Best of luck.");
			writeSpeech("Mission: Daytona Demo", "scripts/gamefiles/logo.png", "In a small town named Daytona to the south there have been a string of robberies. Amateur work with damage and evidence left behind, except every lock was bypassed flawlessly.<br> Available artifacts: Time Stopwatch & Midas coin.<br><span class = 'blueText' onclick = 'writeScenarioScene(`artifactSelection`)'>Begin</span>");
			writeTransition("toolbox", "Cancel and go back");
			break;
		}
		case "townSquare": {
			writeBG('townSquare');
			writeImageButton("North Road", "northRoad", "", 65, 40);
			writeImageButton("Flower Shop", "flowerShop", "", 45, 75);
			writeImageButton("Local Bar", "shoddyBar", "", 45, 10);
			break;
		}
		case "shoddyBar": {
			writeBG('shoddyBar');
			writeImageButton("Back Outside", "townSquare", "", 45, 75);
			writeImageButton("Grumpy Man", "grumpyMan", "grumpyManProfile.jpg", 40, 32);
			break;
		}
		case "flowerShop": {
			writeBG('flowerShop');
			writeImageButton("Back Outside", "townSquare", "", 65, 10);
			writeImageButton("Rich-Looking Woman", "grumpyWife", "grumpyWifeProfile.jpg", 30, 35);
			break;
		}
		case "northRoad": {
			writeBG('northRoad');
			writeImageButton("Old Mansion", "mansionFront", "", 40, 40);
			writeImageButton("Town Square", "townSquare", "", 45, 70);
			break;
		}
		case "mansionFront": {
			writeBG('mansionFront');
			writeImageButton("Enter the Mansion", "mansionEntry", "mansionFoyer.jpg", 40, 50);
			writeImageButton("Explore the Town", "northRoad", "", 65, 10);
			break;
		}
		case "mansionFoyer": {
			writeBG('mansionFoyer');
			writeImageButton("Search for the Artifact", "mansionBedroom", "", 45, 70);
			break;
		}
		case "mansionBedroom": {
			writeBG('mansionBedroom');
			writeImageButton("Leave", "mansionFoyer", "", 40, 20);
			writeImageButton("Search for the Artifact", "safe", "", 65, 70);
			break;
		}
		case "artifactSelection": {
			writeSpeech("Mission Details", "scripts/gamefiles/logo.png", "In a small town named Daytona to the south there have been a string of robberies. Amateur work with damage and evidence left behind, except every lock was bypassed flawlessly.");
			writeSpeech("Time Stopwatch", "scripts/gamefiles/items/stopwatch.jpg", "A bronze stopwatch which appears at first glance to be broken, as the second hand jumps backwards every second.<br>When the button at the top is pressed, the clock begins to record the time as normal but time stops for everyone except person holding the watch.");
			writeScenarioTransition("stopwatchSelection", "Take the Time Stopwatch");
			writeSpeech("Midas Coin", "scripts/gamefiles/items/coin.jpg", "A single gold coin with an inscription on the back written in Ancient Greek.<br>When held, sexual activities performed by the holder will be 'normalized', and not perceived to be socially outrageous no matter how depraved the action. In addition, sexual acts will be seen to have 'value', meaning that the holder can exchange sexual acts as though they had a cash value.");
			writeScenarioTransition("coinSelection", "Take the Midas Coin");
			break;
		}
		case "stopwatchSelection": {
			data.player.artifact1 = "stopwatch";
			data.player.artifact2 = "";
			writeScenarioScene('summoningJeeves');
			break;
		}
		case "coinSelection": {
			data.player.artifact1 = "coin";
			data.player.artifact2 = "";
			writeScenarioScene('summoningJeeves');
			break;
		}
		case "summoningJeeves": {
			if (data.player.artifact1 == "coin") {
				writeText("You take the Midas Coin and slip it into your pocket. Nothing obvious happens, but the effect is already active.");
			}
			if (data.player.artifact1 == "stopwatch") {
				writeText("You take the Time Stopwatch and slip it into your pocket. You can now stop time at will.");
			}
			writeText("The mission's file contains instructions and various probably unimportant details. You head outside the vault and dial a number on your phone more than twenty digits long. It picks up immediately and there's a soft breathing from the other side.");
			writeSpeech("player", "", "I need a ride.");
			writeText("You hang up and before your phone is even in your pocket an old-looking car comes around the corner. It stops for you and the back door swings open.");
			writeText("You climb inside. Despite the thing looking like it's at least a hundred years old, the inside still smells fresh air. Almost like a foggy morning, despite how strange it sounds.");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", " Daytona then?");
			writeSpeech("player", "", "Yep. No rush.");
			writeText("You relax in your leather seat as the car chugs along.");
			writeText("There are a couple of things you could distract yourself with during the ride. There's the documentation on the artifact you're supposed to retrieve, a little pamphlet detailing Jeeve's artifact status for new hires, and you could always just take a nap.");
			writeScenarioTransition("artifactBriefing", "Review the briefing dossier");
			writeScenarioTransition("jeevesPamphlet", "Read the pamphlet on Jeeves");
			writeScenarioTransition("jeevesProposition", "Chat with Jeeves");
			writeScenarioTransition("townArrival", "Nap until you arrive at Daytona");
			break;
		}
		case "inTheCar": {
			writeScenarioTransition("artifactBriefing", "Review the briefing dossier");
			writeScenarioTransition("jeevesPamphlet", "Read the pamphlet on Jeeves");
			writeScenarioTransition("jeevesProposition", "Chat with Jeeves");
			writeScenarioTransition("townArrival", "Nap until you arrive at Daytona");
			break;
		}
		case "artifactBriefing": {
			writeBig("scenarios/intro/images/key.jpg");
			writeText("Code Name: Skeleton Key");
			writeText("Containment Status: Unretrieved");
			writeText("OUTSIDE OF ANOMALY VAULT PURVIEW, THE FOLLOWING INFORMATION IS SPECULATION GENERATED BY ARTIFACT CODE-NAME: Probability Engine");
			writeText("An artifact originating from Civil-War era America. Believed to have abnormal unlocking powers, able to disable lock & pin based security on touch. Due to the state of several state-of-the-art safes after break-in, it is unlikely the key actually needs to be inserted to function.");
			writeText("Result: Obtain Immediately");
			writeSpeech("player", "", "It's always impressive they can get this much info without ever seeing the artifacts.");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", "Did you say something, sir?");
			writeSpeech("player", "", "Just musing to myself, Jeeves.");
			writeScenarioTransition("inTheCar", "Finish");
			break;
		}
		case "jeevesPamphlet": {
			writeBig("scenarios/intro/images/buggy.jpg");
			writeText("Code Name: Phantom Buggy");
			writeText("Containment Status: Uncontainable");
			writeText("An artifact with three anomalous factors.");
			writeText("First, the phone number. After calling a specific sequence of 20 digits, listed [REDACTED], the call will immediately be answered by soft breathing. If a subject states their desire a being referred to as Jeeves will appear to assist them.");
			writeText("The second anomalous factor is the car. Jeeves will always arrive driving a Model-T ford buggy. Though always in pristine condition, the car's model was likely constructed during the 1920s or earlier. Attempts have been made to modernize the design but changes made are undone the next time Jeeves is summoned.");
			writeText("The third is Jeeves herself. For all intents and purposes she appears to be a normal human albeit with a thin East-End London accent. She shows absolute loyalty to whoever requested her service, but will politely refuse to get out of the car whenever possible. Also notably, she also seems not to understand the concept of gender equality. Multiple attempts by various AV members have been made to educate her, but she still has a habit of seeing other women as entirely servile like herself.");
			writeText("Due to repeated shows of loyalty and an inability to possess selfish desires, Jeeves has been licensed for use by any Anomaly Vault personal at retrieval rank or higher for the purposes of transportation. She seems to understand the AV ranking system, and can tell when someone does not have the authority to make a certain request.");
			writeText("Result: Safe");
			writeScenarioTransition("inTheCar", "Finish");
			break;
		}
		case "jeevesProposition": {
			writeSpeech("player", "", "So, uh... See any good movies lately?");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", "Afraid not sir, not too many drive-in theaters these days.");
			writeSpeech("player", "", "You could always just park the thing and... Actually, I don't know if you actually can. Are you able to step out of the car?");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", "I think I could, I'd rather not though.");
			writeSpeech("player", "", "But what about living your own life? Finding your own passions?");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", "No offense, sir, but I'm very certain I wouldn't find a life or anything to be passionate about out there. In the car I'm more than myself, I think. I'm a driver.");
			writeSpeech("player", "", "Well, you do you, I guess. Hey, wanna fuck? We could park it and have a quickie in the back seat. ");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", "Flattered, sir. But you aren't the only one with my number. What if somebody needed a ride, or wanted somebody murdered, and I wasn't available? 'Sorry sir, having a shag! Get back to you soon as he splurts, yeah?' Maybe ask the men on top if I could have a break?");
			writeSpeech("player", "", "I suppose, I should probably focus on the mission instead. Next time then.");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", "I'll keep the schedule open for you sir.");
			writeScenarioTransition("inTheCar", "Finish");
			break;
		}
		case "townArrival": {
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", "Sir? We've arrived.");
			writeText("You feel yourself gently nudged awake.");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", " I've gotten you as close as I can, sir. I could try running the car through the front door if you'd like.");
			writeSpeech("player", "", "Thank you Jeeves, that won't be necessary. Wait, the artifact is in there?");
			writeBig("scenarios/intro/images/mansionFront.jpg");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", " I'm not sure what you mean sir. I understand this is your destination, I don't know anything aside from that.");
			writeSpeech("player", "", "Thanks then. I'll call you when I've found it.");
			writeSpeech("Jeeves", "scripts/gamefiles/profiles/jeeves.jpg", " Very good, I'll keep the car warm then sir. Best of luck!");
			writeScenarioTransition("mansionFront", "Exit the car");
			break;
		}
		case "grumpyMan": {
			if (checkFlag("key") != true) {
				writeText("The man at the bar is pretty clearly wealthy. His clothes are neater and newer than anyone else's, but he seems like he isn't trying to show off.");
				writeText("You take a seat next to him, best to be direct in situations like this. It smells like he's had a few beers already.");
				writeSpeech("player", "", "Hey. You own the mansion up north?");
				writeSpeech("Grumpy Man", "scenarios/intro/images/grumpyManProfile.jpg", "Eh...? The fuck's it to you? Yeah I live there, not for long though. The bitch keeps trying to get me to sign the fuckin' papers...");
				writeText("He's definitely sloshed.");
				writeSpeech("Grumpy Man", "scenarios/intro/images/grumpyManProfile.jpg", "And my fuckin' maid is a bitch too... What the hell am I payin' her for, I could hire a stripper to dust and it'd be cheaper. Wearin' that outfit...");
				writeText("He's almost certainly got a key, the problem is you aren't exactly a skilled pickpocket.");
				if (data.player.artifact1 == "coin"){
					writeSpeech("player", "", "<i>There's no way I'm using the coin on this wasted bastard, and no way I'm sneaking the key without somebody seeing me. I'd better find another way into the mansion.</i>");
				}
				if (data.player.artifact1 == "stopwatch"){
					writeScenarioTransition("pickpocket", "Use the stopwatch to steal his key");
				}
			}
			else {
				writeSpeech("Grumpy Man", "scenarios/intro/images/grumpyManProfile.jpg", "The fuck do you want? Leave me alone!");
				writeText("There's nothing else to do here.");
			}
			writeScenarioTransition("shoddyBar", "Go Back");
			break;
		}
		case "pickpocket": {
			writeText("*CLICK*");
			writeText("The bustle of the room comes to a sudden jarring stop, not that it was very loud before. Still, with time stopped it's effortless to take his housekey from his pocket. You leave the wallet though, best if he takes as long as possible to realize he's been robbed.");
			writeText("*CLICK*");
			writeSpeech("Grumpy Man", "scenarios/intro/images/grumpyManProfile.jpg", "-and so then fuckin'... Wait, you even listenin'? Why the hell do you wanna know anyway?");
			writeSpeech("player", "", "Ah, sorry, thought you were someone else.");
			writeText("You stand up and leave, the man is left to confusedly and bitterly keep mumbling to himself.");
			writeText("You got the mansion key!");
			writeScenarioTransition("shoddyBar", "Finish");
			addFlag("key");
			break;
		}
		case "grumpyWife": {
			if (checkFlag("woman") != true) {
				writeText("The flower shop owner isn't much help, they seem almost half asleep as you run questions by them. After a bit of wandering around you find a woman, probably in her late twenties, taking pictures of the plants on her phone.");
				writeSpeech("player", "", "Excuse me, miss?");
				writeSpeech("Rich Woman", "scenarios/intro/images/grumpyWifeProfile.jpg", "I don't need any help, I'm fine.");
				writeSpeech("player", "", "Oh no, I don't work here. I was wondering if you know who lives in the mansion up north?");
				writeText("This gets her attention. It doesn't seem like she has a purse or a housekey on her, she must be out with someone else.");
				writeSpeech("Rich Woman", "scenarios/intro/images/grumpyWifeProfile.jpg", "I live there. What do you want?");
				if (data.player.artifact1 == "coin"){
					writeSpeech("player", "", "<i>Without a key she isn't that much of a help to me. Still, if I can convince her to let me in...</i>I'm a photographer myself. I was wondering if I could get some pictures of the inside?");
					writeSpeech("Rich Woman", "scenarios/intro/images/grumpyWifeProfile.jpg", "Not a chance. Go away, I'm busy.");
					writeScenarioTransition("wifeCoin", "'What if I made you an offer?'");
				}
				if (data.player.artifact1 == "stopwatch"){
					writeSpeech("player", "", "<i>Without a key she isn't that much of a help to me. Still, she is pretty hot...</i>I'm a photographer myself. I was wondering if I could get some pictures of the inside?");
					writeSpeech("Rich Woman", "scenarios/intro/images/grumpyWifeProfile.jpg", "Not a chance. Go away, I'm busy.");
					writeSpeech("player", "", "Oh well, thanks anyway.");
					writeScenarioTransition("wifeStopwatch", "Stop time and toy with her");
				}
			}
			else {
				writeText("The woman is completely exhausted, not likely to be very valuable as a conversation partner. You should get moving.");
			}
			writeScenarioTransition("flowerShop", "Go Back");
			break;
		}
		case "wifeStopwatch": {
			writeSpeech("Rich Woman", "scenarios/intro/images/grumpyWifeProfile.jpg", "I said go away, do I need to call sec-");
			writeText("*CLICK*");
			writeText("The woman goes silent as time stops. You can't go too far without coming off as suspicious so you lift her skirt and pull aside her lacy thong to quickly enjoy yourself.");
			writeText("...");
			writeBig("scenarios/intro/images/wifeStopwatch.gif");
			writeSpeech("player", "", "Fuck, you're tight.");
			writeText("Truthfully the complete lack of response is a bit of a downer since time is stopped and all, but the reactions are always worth it.");
			writeSpeech("player", "", "... There we go. Alright, clean myself up, pull her dress back down, zip up, okay.");
			writeText("You get back into your previous position and...");
			writeText("*CLICK*");
			writeSpeech("Rich Woman", "scenarios/intro/images/grumpyWifeProfile.jpg", "-uritIIIIEEEE~!");
			writeText("Her eyes cross and her knees buckle, her skirt quickly being stained by her squirting cunt.");
			writeText("She collapses and the owner runs to her side as you back off. You stick around so as not to seem suspicious but eventually you're free to resume trying to find a way into the mansion as the woman is helped away to rest.");
			writeScenarioTransition("flowerShop", "Finish");
			addFlag("woman");
			break;
		}
		case "wifeCoin": {
			writeSpeech("player", "", "Well, uh... Hmm... Oh! I'm passing through town, I was wondering if I could stay there for the night. The inn-");
			writeSpeech("Rich Woman", "scenarios/intro/images/grumpyWifeProfile.jpg", "No. Go away.");
			writeSpeech("player", "", "But I could pay pretty handsomely.");
			writeSpeech("Rich Woman", "scenarios/intro/images/grumpyWifeProfile.jpg", "There's no amount of money that would-");
			writeText("You squeeze the coin in your pocket a little harder than you intended. Curiously, in real time you can see the woman's face become more awash in greed in lust as you do.");
			writeSpeech("player", "", "I could fuck you in the ass.");
			writeText("She looks shocked for a moment as if you'd just put a stack of hundreds in front of her, then she looks you up and down like a piece of meat.");
			writeSpeech("Rich Woman", "scenarios/intro/images/grumpyWifeProfile.jpg", "You're bluffing.");
			writeSpeech("player", "", "I'll pay up front. Right here, right now.");
			writeText("You unzip your pants and she watches with obvious interest as you fish out your cock.");
			writeSpeech("Rich Woman", "scenarios/intro/images/grumpyWifeProfile.jpg", "Well... I wouldn't normally let a stranger into my home, but...");
			writeText("You squeeze the coin again. It's old and brittle, but for some reason this just feels... <b>right</b>. This is worth investigating further later.");
			if (data.player.color.includes("coinSqueeze") != true) {
				data.player.color += "coinSqueeze";
			}
			writeSpeech("player", "", "I promise to make it very worth your while.");
			writeText("She swallows dryly, her face awash with greedy cocklust.");
			writeSpeech("Rich Woman", "scenarios/intro/images/grumpyWifeProfile.jpg", "A-and if I want it in my ass, and for you to give me a creampie after?");
			writeSpeech("player", "", "I can certainly oblige.");
			writeText("...");
			writeBig("scenarios/intro/images/wifeCoin1.gif");
			writeSpeech("Rich Woman", "scenarios/intro/images/grumpyWifeProfile.jpg", "Nnnhg~! Yes~!");
			writeText("Her legs shake and buckle as she's brought to another anal orgasm right here in the flowershop for all to see.");
			writeSpeech("Rich Woman", "scenarios/intro/images/grumpyWifeProfile.jpg", "Cumming~! Harder~!");
			writeText("You give her ass a slap and keep thrusting, but just as you feel an orgasm approaching you pull out and with one thrust hilt yourself in her dripping snatch.");
			writeSpeech("Rich Woman", "scenarios/intro/images/grumpyWifeProfile.jpg", "Yesssss~!");
			writeSpeech("player", "", "Take it, bitch!");
			writeText("You give her ass another spank for good measure as you cum unprotected into her cunt.");
			writeText("With ragged breath the two of you cool down and you pull out.");
			writeBig("scenarios/intro/images/wifeCoin2.gif");
			writeSpeech("player", "", "So, your end of the bargain?");
			writeSpeech("Rich Woman", "scenarios/intro/images/grumpyWifeProfile.jpg", "I'll let... Let the maid know to let you in...");
			writeSpeech("player", "", "Good.");
			writeText("You head off as the owner moves to check on the exhausted creampied woman, gently rubbing the gold coin in your pocket for luck.");
			writeScenarioTransition("flowerShop", "Finish");
			addFlag("woman");
			addFlag("key");
			break;
		}
		case "mansionEntry": {
			if (checkFlag("key") != true) {
				writeText("The old mansion looms over you as you step onto the doorway. You give the old oaken door a few firm knocks, but there's no answer.");
				writeSpeech("player", "", "Oh no, no answer. I'll need to head into town.");
				writeText("You remark sarcastically to no one in particular as the door remains shut. Oh well, now you're free to 'interrogate' the townsfolk searching for whoever owns the mansion.");
				writeScenarioTransition("mansionFront", "Go back");
			}
			else {
				if (data.player.artifact1 == "coin") {
					writeText("You walk up to the doorway again and give a few solid knocks, and the door is answered by a tired looking woman in an old-fashioned maid outfit.");
					writeSpeech("Maid", "scenarios/intro/images/maidProfile.jpg", "You're the guest then?");
					writeSpeech("player", "", "I am, can't you tell?");
					writeSpeech("Maid", "scenarios/intro/images/maidProfile.jpg", "I can't, the lady only gave description of part of you. I'm fine without proof.");
					writeSpeech("player", "", "You sure? I could go for a quickie.");
					writeSpeech("Maid", "scenarios/intro/images/maidProfile.jpg", "No thanks, feel free to come in. Guest room's first door in the left wing, stay out of the master and the mistress's rooms.");
					writeText("You walk in to get a feel for the place. Large, pretty empty.");
					writeSpeech("Maid", "scenarios/intro/images/maidProfile.jpg", "Will that be all?");
					writeSpeech("player", "", "Sure. You sure you don't want to fuck? I could even go for anal.");
					writeSpeech("Maid", "scenarios/intro/images/maidProfile.jpg", "I... Maybe some other time, sir. I'm on the clock.");
					writeSpeech("player", "", "<i>Something's weird. She's basically turning down free money. </i>");
					writeSpeech("Maid", "scenarios/intro/images/maidProfile.jpg", "Right then, keep out of trouble. I need to go, shout for me if you can't find something.");
					writeText("She hurries off, leaving the room.");
				}
				if (data.player.artifact1 == "stopwatch") {
					writeText("You walk back up to the doorway and open the door with the stolen set of keys. Success! You've broken in!");
					writeText("The mansion is large and empty, but it shouldn't be too hard to figure out where the master bedroom is. Not many other places it'd be safe to store a skeleton key artifact.");
				}
				writeScenarioTransition("mansionFoyer", "Continue");
			}
			break;
		}
		case "safe": {
			if (data.player.artifact1 == "coin") {
				writeText("You make your way to the master bedroom, notably finding the door already open a crack.");
				writeText("Inside, rummaging through the safe hidden away in a closet is the maid. She's got a pillowcase full of cash and jewelry.");
				writeSpeech("player", "", "Ahem?");
				writeSpeech("Maid", "scenarios/intro/images/maidProfile.jpg", "FUCK!");
				writeText("She spins around, a knife in her hand and a wild panic in her eyes, only to calm down when she notices you aren't her employer.");
				writeSpeech("player", "", "Went right for it, huh? Probably should have made sure I actually was going to the guest room.");
				writeSpeech("Maid", "scenarios/intro/images/maidProfile.jpg", "Listen, I know how this looks. I can cut you in, I sw-");
				writeSpeech("player", "", "Absolutely.");
				writeSpeech("Maid", "scenarios/intro/images/maidProfile.jpg", "What, really?");
				writeSpeech("player", "", "Yep. There's only one thing in this house I want.");
				writeText("She looks confused for a moment, blushes for a moment, then suddenly the blush fades and she's back to panic.");
				writeSpeech("Maid", "scenarios/intro/images/maidProfile.jpg", "You don't mean the key, do you?");
				writeSpeech("player", "", "Afraid so.");
				writeSpeech("Maid", "scenarios/intro/images/maidProfile.jpg", "No, please... Anything else...");
				writeSpeech("player", "", "Actually, how about a deal? Not only do I not rat you out and have you carted off to jail, I'll take the key and even make it worth your while.");
				writeSpeech("Maid", "scenarios/intro/images/maidProfile.jpg", "I...");
				writeSpeech("player", "", "Anything you like. Anal, creampie, you can even give me a rimjob if you like.");
				writeText("You rub the coin in your pocket. It doesn't improve the effect or anything, it just feels nice.");
				writeSpeech("Maid", "scenarios/intro/images/maidProfile.jpg", "Anything?");
				writeSpeech("player", "", "Sure! Just hand over that key and I'll give you what you really need.");
				writeText("...");
				writeSpeech("player", "", "You're pretty messed up in the head, aren't you? Trading the key for a thorough deepthroating. You gonna take a breath?");
				writeBig("scenarios/intro/images/maidCoin.gif");
				writeText("She doesn't answer, instead focusing all her attention to the cock she's choking herself on while she fingers herself to another orgasm.");
				writeText("Each time you cum she holds you dick down your throat until her eyes roll back in her head, her grip on your hips goes slack, and you need to shove her off your cock.");
				writeText("After a moment she coughs and sputters.");
				writeSpeech("Maid", "scenarios/intro/images/maidProfile.jpg", "A-another...");
				writeSpeech("player", "", "If we go another round we're gonna get caught. How about I give you a ride out of town and you can choke yourself on my dick as much as you like along the way?");
				writeText("Coughing out the cum stuck in her throat, she relents. You pocket the skeleton key and, like a gentleman, carry her bag of stolen goods for her to your car. She walks out in a nervous hurry, makeup running and desperate for another taste of your dick.");
			}
			if (data.player.artifact1 == "stopwatch") {
				writeText("Quickly enough you've found the master bedroom, and an obvious looking safe is probably where your prize is.");
				writeSpeech("player", "", "Not too much point in being subtle, really. Finding the combination would suck, so...");
				writeText("*CLICK*");
				writeText("Time comes to a stop and you get to work. You lightly kick the door of the safe. Then again. And again. And again.");
				writeText("...");
				writeSpeech("player", "", "That should be enough.");
				writeText("*CLICK*");
				writeText("Feeling the impact of hundreds of kicks all at once, the door to the safe is flung off its hinges. Inside are a few valuables like some jewelry, but more importantly your prize. A very literal skeleton key, made from ivory bones.");
				writeText("You pocket the cash too, just to make it look like an ordinary robbery.");
				writeText("Suddenly there's a knock at the door.");
				writeSpeech("Maid", "none", "Sir? Are you alright? I hadn't noticed you'd gotten back, and-");
				writeText("*CLICK*");
				writeSpeech("player", "", "Huh, a maid. Well, here's hoping...");
				writeText("You open the door, frozen in time before you is the mansion's maid.");
				writeBig("scenarios/intro/images/maidAlt.jpg");
				writeSpeech("player", "", "Nice. <br>Well, I do need to make this look convincing...");
				writeText("You grab her and haul her over to the bed. You'll need to make her black out, otherwise it might seem like she robbed the place.");
				writeText("You get to stripping, you've got a long few hours ahead.");
				writeText("...");
				writeBig("scenarios/intro/images/maidStopwatch1.gif");
				writeText("...");
				writeBig("scenarios/intro/images/maidStopwatch2.gif");
				writeText("...");
				writeSpeech("player", "", "Seventeen rounds, that should be enough.");
				writeText("You take another sip of a soda you pilfered from the kitchen between rounds. You check the stopwatch.");
				writeSpeech("player", "", "Four hours. Alright, whoever you are, this is for your own good.");
				writeText("*CLICK*");
				writeText("Time resumes and the maid's body goes rigid. Her cunt sprays a good six feet over the master bedroom's carpet and she lets out a voiceless, hoarse scream.");
				writeText("Her eyes roll back and she starts shaking like she's having a seizure as dozens of orgasms wash over her body all at once.");
				writeText("By the time she's calmed down and passed out, you're on your way out with the artifact safe in your pocket. You give the front door a good smashing too, just to to really drive the break-in angle home.");
			}
			writeScenarioTransition("hunterFinish", "Finish");
			break;
		}
		case "hunterFinish": {
			data.player.artifact1 = "bracelet";
			writeText("A quick call and Jeeves is ready again to pick you up.");
			writeText("A job well done! And the cabinet will allow you to get in another bit of training anytime you want. For now it's back to research, but who knows what the future could hold?");
			writeText("Good work, agent!");
			writeTransition("office", "Finish");
			break;
		}
		default: {
			writeText("Error! No scene named "+scene+" found in the writeScenarioScene function in your sceneList.js! Did you mispell something?");
		}
	}
	data.player.currentScene = "scenario" + scene;
	saveSlot(160);
}

//Don't touch anything below this, or things will break.

switch (requestType) {
	case "load": {
		if (data.player.scenarios == null) {
			data.player.scenarios = [];
		}
		var scenarioCheck = false;
		for (i = 0; i < data.player.scenarios.length; i++) {
			if (data.player.scenarios[i].index == scenarioInformation.index) {
				scenarioCheck = true;
				data.player.scenarios[i].flags = "";
				data.player.scenarios[i].objectFlags = "";
			}
		}
		if (scenarioCheck = false) {
			goof = {index: scenarioInformation.index, flags: "", objectFlags: ""};
			data.player.scenarios.push(goof);
		}
		data.player.currentScenario = scenarioInformation.index;
		writeText("Loaded correctly, all is well!");
		writeScenarioScene("start");
		break;
	}
	case "refreshed": {
		var placeholder = data.player.currentScene.replace("scenario", "");
		console.log("Loading scenario scene ID "+placeholder);
		writeScenarioScene(placeholder);
	}
}

function writeScenarioTransition(name, target) {
	document.getElementById('output').innerHTML += `
		<p class="choiceText" onclick="writeScenarioScene('` + name + `')">
			` + replaceCodenames(target) + `
		</p>
	`;
}