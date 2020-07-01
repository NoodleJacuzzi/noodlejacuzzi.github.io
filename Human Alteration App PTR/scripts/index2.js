var picturesDisabled = false;
var saveName;
var randNum;
var tempScene = "";
var activeWindow = "";

var data = {
	player: {
		name: "You",
		body: "null",
		pronoun: "man",
		image: "",
		clothing: "menShorts",
		underwear: "nothing",
		version: 1,
		currentScene: "start",
		location: "",
		time: "Evening",
		money: 20,
		route: "dom",
		skill: 0,
		flags: "",
		color: "#86b4dc",
		pervert: false,
	},
	style: {
		dialogue: "basic",
		menu: "basic",
		choices: "basic",
		font: "basic",
		imageSize: 1,
		fontSize: 1,
	},
	story: [
		{index: "mom", name: "???", trust: 0, outfit: "Old", flags: "",},
		{index: "sister", name: "???", trust: 0, outfit: "", flags: "",},
		{index: "friend", name: "???", trust: 0, outfit: "", flags: "",},
		{index: "teacher", name: "???", trust: 0, outfit: "", flags: "",},
		{index: "chef", name: "???", trust: 0, outfit: "", flags: "",},
		{index: "office", name: "???", trust: 0, outfit: "", flags: "",},
		{index: "exotic", name: "???", trust: 0, outfit: "", flags: "",},
		{index: "clothes", name: "???", trust: 0, outfit: "", flags: "",},
		{index: "candy", name: "???", trust: 0, outfit: "", flags: "",},
		{index: "bully", name: "???", trust: 0, outfit: "", flags: "",},
		{index: "evil", name: "???", trust: 0, outfit: "", flags: "",},
		{index: "camboi", name: "???", trust: 0, outfit: "", flags: "",},
		{index: "neighbor", name: "???", trust: 0, outfit: "", flags: "",},
		{index: "doll", name: "???", trust: 0, outfit: "", flags: "",},
	],
	inventory: [],
	gallery: [],
}

var detailDomArray = [
	{index: "mom", element: "otherStatus", 
	requirements: "trust mom 0;", 
	desc: "Status: Single Mother"},
	{index: "mom", element: "otherStatus", 
	requirements: "trust mom 1;", 
	desc: "Status: Mother & Maid"},
	{index: "mom", element: "otherStatus", 
	requirements: "trust mom 2;", 
	desc: "Status: Loyal Servant"},
	{index: "mom", element: "otherStatus", 
	requirements: "trust mom 4;", 
	desc: "Status: Loving Cocksleeve"},
	
	{index: "mom", element: "otherClothes", 
	requirements: "?trust mom 0;", 
	desc: "Her preferred outfit is a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/sweaterMom.jpg`)'>brown, ribbed sweater</span> she wears whenever she can."},
	{index: "mom", element: "otherClothes", 
	requirements: "?trust mom 1;", 
	desc: "Her new outfit is a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/dressMom.jpg`)'>leopard-print dress and necklace of fake jewels</span> she wears whenever she can."},
	{index: "mom", element: "otherClothes", 
	requirements: "?trust mom 4;", 
	desc: "Her new outfit is a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/dressMom.jpg`)'>leopard-print dress and necklace of fake jewels</span> she wears whenever she needs to wear clothes."},
	
	{index: "mom", element: "otherChest", 
	requirements: "?trust mom 0;", 
	desc: "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs8.gif`)'>large, E-cup breasts.</span>"},
	
	{index: "mom", element: "otherJunk", 
	requirements: "?trust mom 0;", 
	desc: "You've only ever managed to catch glimpses of her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/regular4.jpg`)'>black underwear.</span>"},
	{index: "mom", element: "otherJunk", 
	requirements: "?trust mom 1;", 
	desc: "With her shorter skirt you've caught more than a few eyefuls of her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/regular4.jpg`)'>black underwear.</span>"},
	{index: "mom", element: "otherJunk", 
	requirements: "?trust mom 2;", 
	desc: "Every so often when your sister isn't looking, she'll lift her skirt to show off her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/erotic6.jpg`)'> erotic black underwear.</span>"},
	{index: "mom", element: "otherJunk", 
	requirements: "?trust mom 4;", 
	desc: "At this point you don't even think your mother wears <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/none6.jpg`)'>underwear</span> anymore."},
	
	{index: "sister", element: "otherStatus", 
	requirements: "?trust sister 0;", 
	desc: "Status: Shut-In Sister"},
	{index: "sister", element: "otherStatus", 
	requirements: "?trust sister 2;", 
	desc: "Status: Frustrated Sister"},
	{index: "sister", element: "otherStatus", 
	requirements: "?trust sister 3;", 
	desc: "Status: Desperate Sister"},
	{index: "sister", element: "otherStatus", 
	requirements: "?trust sister 4;", 
	desc: "Status: Buttslut Sister"},
	{index: "sister", element: "otherStatus", 
	requirements: "?trust sister 5;", 
	desc: "Status: Anal Sex Junkie"},
	
	{index: "sister", element: "otherClothes", 
	requirements: "?trust sister 0;", 
	desc: "Her preferred outfit is a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/yogatop.jpg`)'>thin tank top and some yoga pants.</span>"},
	{index: "sister", element: "otherClothes", 
	requirements: "?trust sister 3;", 
	desc: "She's been wearing skimpier outfits lately. Today, she's wearing a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/shorts.jpg`)'>thin top and even thinner shorts.</span>"},
	{index: "sister", element: "otherClothes", 
	requirements: "?trust sister 5;", 
	desc: "She <span class = 'selfSwitch' onclick = 'selfImage(`images/real/jean/naked.jpg`)'>doesn't wear clothes around the house anymore</span>."},
	
	{index: "sister", element: "otherChest", 
	requirements: "?trust sister 0;", 
	desc: "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs2.gif`)'>small, A-cup breasts.</span>"},
	
	{index: "sister", element: "otherJunk", 
	requirements: "?trust sister 0;", 
	desc: "Lounging around the house, she's caught you staring at her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/yogapants.jpg`)'>ass in yoga pants a few times</span>"},
	{index: "sister", element: "otherJunk", 
	requirements: "?trust sister 2;", 
	desc: "Lately, you notice that her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/yoga1.jpg`)'>yoga pants</span> have been getting tighter and tighter."},
	{index: "sister", element: "otherJunk", 
	requirements: "?trust sister 3;", 
	desc: "Instead of wearing her usual lounging pants, she mostly wears <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/none3.jpg`)'>very thin shorts without any underwear</span> these days."},
	{index: "sister", element: "otherJunk", 
	requirements: "?trust sister 5;", 
	desc: "Nowadays, she refuses to wear anything to cover her ass, preferring that you be able to see her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/none7.jpg`)'>ruined asshole</span> 24/7."},
	
	{index: "chef", element: "otherStatus", 
	requirements: "?trust chef 0;", 
	desc: "Status: Exhausted Widow"},
	{index: "chef", element: "otherStatus", 
	requirements: "?trust chef 1;", 
	desc: "Status: Working Widow"},
	{index: "chef", element: "otherStatus", 
	requirements: "?trust chef 2;", 
	desc: "Status: Cum-Drinking Barista"},
	{index: "chef", element: "otherStatus", 
	requirements: "?trust chef 3;", 
	desc: "tatus: Semen Slurper"},
	{index: "chef", element: "otherStatus", 
	requirements: "?trust chef 4;", 
	desc: "Status: Exotic Entrepreneur"},
	
	{index: "chef", element: "otherClothes", 
	requirements: "?trust chef 0;", 
	desc: "When she isn't working, she tends towards a casual <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/jeansShirt.jpg`)'>t-shirt and jeans combo.</span>"},
	{index: "chef", element: "otherClothes", 
	requirements: "?trust chef 2;", 
	desc: "She's taken to wearing nicer clothes lately. When the shop's open, she's usually wearing <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/yogaSuit.jpg`)'>a blazer and tight pants.</span>"},
	
	{index: "chef", element: "otherChest", 
	requirements: "?trust chef 0;", 
	desc: "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs5.gif`)'>large, D-cup breasts.</span>"},
	{index: "chef", element: "otherChest", 
	requirements: "?trust chef 3;", 
	desc: "It might be because of her new diet, but her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs13.jpg`)'>F-cup breasts</span> just keep growing."},
	
	{index: "chef", element: "otherJunk", 
	requirements: "?trust chef 0;", 
	desc: "You have no idea what she might look like under her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/pants3.jpg`)'>jeans.</span>"},
	{index: "chef", element: "otherJunk", 
	requirements: "?trust chef 2;", 
	desc: "Since you've started hanging around her more, you've had a chance to see what kind of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/erotic2.jpg`)'>underwear</span> she prefers."},
	{index: "chef", element: "otherJunk", 
	requirements: "?trust chef 4;", 
	desc: "Her collection of lingerie is actually pretty impressive. Your favorite is a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/erotic4.jpg`)'>pair that don't even cover her ass</span>."},
	
	{index: "friend", element: "otherStatus", 
	requirements: "?trust friend 0;", 
	desc: "Status: Fellow Student"},
	{index: "friend", element: "otherStatus", 
	requirements: "?trust friend 1;", 
	desc: "Status: Your Girlfriend"},
	{index: "friend", element: "otherStatus", 
	requirements: "?trust friend 2;", 
	desc: "Status: Your Girlfriend"},
	{index: "friend", element: "otherStatus", 
	requirements: "?trust friend 3;", 
	desc: "Status: Curious About the App"},
	{index: "friend", element: "otherStatus", 
	requirements: "?trust friend 4;", 
	desc: "Status: Loving Girlfriend"},
	
	{index: "friend", element: "otherClothes", 
	requirements: "?trust friend 0;", 
	desc: "She usually comes to class wearing a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/school.jpg`)'>white & red school uniform.</span>"},
	{index: "friend", element: "otherClothes", 
	requirements: "?trust friend 4;", 
	desc: "The other day, she sent you a selfie of a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/transparentSchool.jpg`)'>special dress</span> she'd like to wear to school one day."},
	{index: "friend", element: "otherClothes", 
	requirements: "?trust friend 5;", 
	desc: "With your assistance she's been able to wear a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/transparentShort.jpg`)'>transparent dress</span> on school grounds."},
	
	{index: "friend", element: "otherChest", 
	requirements: "?trust friend 0;", 
	desc: "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs3.jpg`)'>C-cup breasts.</span>"},
	
	{index: "friend", element: "otherJunk", 
	requirements: "?trust friend 0;", 
	desc: "You've never seen what she looks like <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/skirt5.jpg`)'>under her clothes.</span>"},
	{index: "friend", element: "otherJunk", 
	requirements: "?trust friend 3;", 
	desc: "Out of the kindness of her heart (and after a great many requests), she sent you an <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/none8.jpg`)'>underskirt selfie.</span>"},
	{index: "friend", element: "otherJunk", 
	requirements: "?trust friend 3; ?flag player vegetarian;", 
	desc: "Out of the kindness of her heart (and after a great many requests), she sent you an <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/none2.jpg`)'>underskirt selfie.</span>"},
	
	{index: "teacher", element: "otherStatus", 
	requirements: "?trust teacher 0;", 
	desc: "Status: Disgruntled Teacher"},
	{index: "teacher", element: "otherStatus", 
	requirements: "?trust teacher 1;", 
	desc: "Status: Gullible Teacher"},
	{index: "teacher", element: "otherStatus", 
	requirements: "?trust teacher 2;", 
	desc: "Status: Research Partner"},
	{index: "teacher", element: "otherStatus", 
	requirements: "?trust teacher 3;", 
	desc: "Status: Research Experiment"},
	{index: "teacher", element: "otherStatus", 
	requirements: "?trust teacher 4;", 
	desc: "Status: Classroom Toy"},
	{index: "teacher", element: "otherStatus", 
	requirements: "?trust teacher 5;", 
	desc: "Status: School Fixture"},
	
	{index: "teacher", element: "otherClothes", 
	requirements: "?trust teacher 0;", 
	desc: "Her preferred outfit is a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/teacher.jpg`)'>white blouse</span> and a grey pencil skirt."},
	{index: "teacher", element: "otherClothes", 
	requirements: "?trust teacher 2;", 
	desc: "Her new preferred outfit is a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/teacherSexy.jpg`)'>exposing blouse</span> and a grey skirt."},
	{index: "teacher", element: "otherClothes", 
	requirements: "?trust teacher 5;", 
	desc: "Obviously she can't wear professional looking clothes anymore. Now she wears a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/microbikini.jpg`)'>microbikini</span> to school."},
	
	{index: "teacher", element: "otherChest", 
	requirements: "?trust teacher 0;", 
	desc: "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs9.gif`)'>huge, F-cup breasts.</span>"},
	
	{index: "teacher", element: "otherJunk", 
	requirements: "?trust teacher 0;", 
	desc: "It might not have been an accident, but you saw her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/erotic6.jpg`)'>erotic, partially transparent thong</span> once when she bent over."},
	{index: "teacher", element: "otherJunk", 
	requirements: "?trust teacher 1;", 
	desc: "You've gotten a good look at her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/erotic6.jpg`)'>erotic, partially transparent thong</span> lately."},
	{index: "teacher", element: "otherJunk", 
	requirements: "?trust teacher 2;", 
	desc: "She makes sure to keep her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/skirt4.jpg`)'>skirt pulled up</span> whenever you and she are alone."},
	{index: "teacher", element: "otherJunk", 
	requirements: "?trust teacher 4;", 
	desc: "By now she understands that <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/none6.jpg`)'>wearing underwear</span> on school grounds is pointless."},
	
	{index: "office", element: "otherStatus", 
	requirements: "?trust office 0;", 
	desc: "Status: Business Woman"},
	{index: "office", element: "otherStatus", 
	requirements: "?trust office 1;", 
	desc: "Status: Horny Secretary"},
	{index: "office", element: "otherStatus", 
	requirements: "?trust office 2;", 
	desc: "Status: Professional Whore"},
	{index: "office", element: "otherStatus", 
	requirements: "?trust office 3;", 
	desc: "Status: Public Relief Fixture"},
	
	{index: "office", element: "otherClothes", 
	requirements: "?trust office 0;", 
	desc: "She's usually wearing a <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/suitBlack.jpg`)'>well-fitted business suit</span> when she walks by."},
	{index: "office", element: "otherClothes", 
	requirements: "?trust office 1;", 
	desc: "Lately she's ditched the boring pantsuit for the sake of a much <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/officeShort.jpg`)'>skimpier skirt</span>. It's almost like her preferences have completely flipped."},
	{index: "office", element: "otherClothes", 
	requirements: "?trust office 3;", 
	desc: "Last you heard she sold most of her designer clothes and replaced them with a collection of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/clothes/dressSkimpy.jpg`)'>titillating outfits</span> that make her profession clear."},
	
	{index: "office", element: "otherChest", 
	requirements: "?trust office 0;", 
	desc: "She has a pair of <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs3.gif`)'>B-cup breasts</span>."},
	{index: "office", element: "otherChest", 
	requirements: "?trust office 2;", 
	desc: "Like magic, her bust size went up recently. Now she has large <span class = 'selfSwitch' onclick = 'selfImage(`images/real/body/boobs7.gif`)'>DD-cup breasts</span>."},
	
	{index: "office", element: "otherJunk", 
	requirements: "?trust office 0;", 
	desc: "You've never seen what she looks like <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/pants6.jpg`)'>under her clothes</span>."},
	{index: "office", element: "otherJunk", 
	requirements: "?trust office 1;", 
	desc: "Tragically, because of her skirt's short length whenever she bends over she flashes everyone around her a shot of her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/regular3.jpg`)'>thin panties</span>."},
	{index: "office", element: "otherJunk", 
	requirements: "?trust office 3;", 
	desc: "As a professional, her <span class = 'selfSwitch' onclick = 'selfImage(`images/real/underwear/erotic3.jpg`)'>thong</span> is more of an advertisement than clothing at this point."},
	
	{index: "clothes", element: "otherStatus", 
	requirements: "?trust clothes 0;", 
	desc: ""},
	{index: "clothes", element: "otherStatus", 
	requirements: "?trust clothes 1;", 
	desc: ""},
	
	{index: "clothes", element: "otherClothes", 
	requirements: "?trust clothes 0;", 
	desc: ""},
	{index: "clothes", element: "otherClothes", 
	requirements: "?trust clothes 1;", 
	desc: ""},
	
	{index: "clothes", element: "otherChest", 
	requirements: "?trust clothes 0;", 
	desc: ""},
	{index: "clothes", element: "otherChest", 
	requirements: "?trust clothes 1;", 
	desc: ""},
	
	{index: "clothes", element: "otherJunk", 
	requirements: "?trust clothes 0;", 
	desc: ""},
	{index: "clothes", element: "otherJunk", 
	requirements: "?trust clothes 1;", 
	desc: ""},
	{index: "clothes", element: "otherJunk", 
	requirements: "?trust clothes 1; ?flag player vegetarian;", 
	desc: ""},
	
	{index: "exotic", element: "otherStatus", 
	requirements: "?trust exotic 0;", 
	desc: ""},
	
	{index: "exotic", element: "otherClothes", 
	requirements: "?trust exotic 0;", 
	desc: ""},
	
	{index: "exotic", element: "otherChest", 
	requirements: "?trust exotic 0;", 
	desc: ""},
	
	{index: "exotic", element: "otherJunk", 
	requirements: "?trust exotic 0;", 
	desc: ""},
	
	{index: "candy", element: "otherStatus", 
	requirements: "?trust candy 0;", 
	desc: ""},
	
	{index: "candy", element: "otherClothes", 
	requirements: "?trust candy 0;", 
	desc: ""},
	
	{index: "candy", element: "otherChest", 
	requirements: "?trust candy 0;", 
	desc: ""},
	
	{index: "candy", element: "otherJunk", 
	requirements: "?trust candy 0;", 
	desc: ""},
	
	{index: "", element: "otherStatus", 
	requirements: "?trust sister 0;", 
	desc: ""},
	
	{index: "", element: "otherClothes", 
	requirements: "?trust sister 0;", 
	desc: ""},
	
	{index: "", element: "otherChest", 
	requirements: "?trust sister 0;", 
	desc: ""},
	
	{index: "", element: "otherJunk", 
	requirements: "?trust sister 0;", 
	desc: ""},
]

var detailSubArray = [
	{index: "mom", element: "otherStatus", 
	requirements: "trust mom 0;", 
	desc: "Status: Family Maid"},
	
	{index: "mom", element: "otherClothes", 
	requirements: "?trust mom 0;", 
	desc: "When she isn't wearing an erotic excuse for a maid's outfit, she's usually wearing a surprisingly conservative yellow shirt and jeans."},
	
	{index: "mom", element: "otherChest", 
	requirements: "?trust mom 0;", 
	desc: "Her tits have increased in size greatly thanks to your sister's use of the app. Now, if you had to guess, they'd be around a G cup at least. She isn't shy about showing them off anymore either."},
	
	{index: "mom", element: "otherJunk", 
	requirements: "?trust mom 0;", 
	desc: "Her ass in jeans is absolutely divine. At this point the clothes in her wardrobe are as tight as a second skin."},
	
	{index: "sister", element: "otherStatus", 
	requirements: "?trust sister 0;", 
	desc: "Status: Alteration App User"},
	
	{index: "sister", element: "otherClothes", 
	requirements: "?trust sister 0;", 
	desc: "According to her, 'Erotic clothes are hotter than being naked'. She straddles the line these days, wearing an outfit made of latex and pasties."},
	
	{index: "sister", element: "otherChest", 
	requirements: "?trust sister 0;", 
	desc: "Her breasts aren't anywhere near as large as your mother's, but she's plumped up by a good amount. When she thinks you aren't looking she'll spend a good amount of time some days just kneading and rubbing them, enjoying her new size."},
	
	{index: "sister", element: "otherJunk", 
	requirements: "?trust sister 0;", 
	desc: "She isn't reserved about letting her dick bulge be visible through her underwear. When it isn't erect its a pretty manageable size, but when she gets going it can grow up to a foot long."},
	
	{index: "chef", element: "otherStatus", 
	requirements: "?trust chef 0;", 
	desc: "Status: Maid Cafe Owner"},
	
	{index: "chef", element: "otherClothes", 
	requirements: "?trust chef 0;", 
	desc: "Her new business is a self-run maid cafe, probably based on some anime. She doesn't even wear a uniform. She just wears an apron and some leather bondage gear underneath it."},
	
	{index: "chef", element: "otherChest", 
	requirements: "?trust chef 0;", 
	desc: "Her new breasts are pretty modest to match her now much younger body. Her nipples are very visible through her apron though."},
	
	{index: "chef", element: "otherJunk", 
	requirements: "?trust chef 0;", 
	desc: "She doesn't wear any kind of underwear, just an assortment of condoms she switches through along the course of the day. Even if she isn't playing with herself she's always leaking and building up more sperm. Serveral times during the day she'll stop on the spot to have a spontaneous, hands-free orgasm and then head to the kitchen to put on a fresh condom."},
	
	{index: "friend", element: "otherStatus", 
	requirements: "?trust friend 0;", 
	desc: "Status: Dickgirl Student"},
	
	{index: "friend", element: "otherClothes", 
	requirements: "?trust friend 0;", 
	desc: "She still wears a uniform to school, but its a lot more Japanese-inspired than it was before."},
	
	{index: "friend", element: "otherChest", 
	requirements: "?trust friend 0;", 
	desc: "Her tits are really large for a student. The way they bounce as she moves around makes me think she doesn't wear a bra to school."},
	
	{index: "friend", element: "otherJunk", 
	requirements: "?trust friend 0;", 
	desc: "Underneath her skirt is a huge dick, way too big for underwear to cover, even when its soft. It doesn't happen with anyone else, but whenever she's around me for very long she needs to excuse herself to the bathroom almost right away."},
	
	{index: "teacher", element: "otherStatus", 
	requirements: "?trust teacher 0;", 
	desc: "Status: Dysfunctional Teacher"},
	
	{index: "teacher", element: "otherClothes", 
	requirements: "?trust teacher 0;", 
	desc: "I guess sis must have held a grudge against her from when she was still in school, because she isn't even able to wear normal clothes anymore. She comes to class wearing a bikini and low cut shorts."},
	
	{index: "teacher", element: "otherChest", 
	requirements: "?trust teacher 0;", 
	desc: "Her tits are around the same size, but in her outfit they get even more staring looks. She doesn't seem to mind either. I saw a student reach out and twist one of her nipples because she was 'being a bitch' and all she did was grind against him while he did it."},
	
	{index: "teacher", element: "otherJunk", 
	requirements: "?trust teacher 0;", 
	desc: "And to top it all off, her shorts don't even contain her dick. It's half hanging out at all times but nobody even seems to notice. It doesn't even seem to get hard that often either, I've seen her with an erection maybe once, but most of the time it just hangs there covered in sagging foreskin."},
	
	{index: "office", element: "otherStatus", 
	requirements: "?trust office 0;", 
	desc: "Status: Exhibitionist"},
	
	{index: "office", element: "otherClothes", 
	requirements: "?trust office 0;", 
	desc: "Her outfit is a lot more fashionable now. She tends to wear sweaters and skirts a lot more often than business suits these days. I'm not sure why the glasses were added though."},
	
	{index: "office", element: "otherChest", 
	requirements: "?trust office 0;", 
	desc: "Her breasts are around the same size, but they're a lot more noticeable now that she wears tighter clothing with no bra."},
	
	{index: "office", element: "otherJunk", 
	requirements: "?trust office 0;", 
	desc: "She doesn't even think twice about exposing herself in public, so it's pretty obvious that she'd go commando at all times. She doesn't even tape her dick to her leg to hide it either, I think she gets off on knowing that others can see her erection."},
	
	{index: "doll", element: "otherStatus", 
	requirements: "?trust doll 0;", 
	desc: "Status: Loving Companion"},
	
	{index: "doll", element: "otherClothes", 
	requirements: "?trust doll 0;", 
	desc: "Her only outfit is a red sundress. On the tag on the back it says 'OuttaSync'. That must be the doll's creator."},
	
	{index: "doll", element: "otherChest", 
	requirements: "?trust doll 0;", 
	desc: "She has no breasts to speak of, but she has a great personality."},
	
	{index: "doll", element: "otherJunk", 
	requirements: "?trust doll 0;", 
	desc: "Underneath her dress is a highly-flexible pocket pussy. She says due to its elasticity, she can enjoy sex with anyone no matter their size."},
]

var galleryArray = [
	{index: 'mom1', name: "Experimentation", hint: 'Complete the prologue.'},
	{index: 'mom2', name: "Maid from Heaven", hint: 'Mom corruption level 1. This automatically triggers in the morning.'},
	{index: 'mom3', name: "Bedhead", hint: 'Mom corruption level 2. Talk to her during the day.'},
	{index: 'mom4', name: "Impregnation", hint: 'Mom corruption level 3 (requires skill level of advanced). Talk to her during the day.'},
	{index: 'mom5', name: "Deep Cleaning", hint: 'Mom corruption level 4. Requires Plug Pop. Talk to her during the day.'},
	{index: 'mom6', name: "Bathroom Break", hint: 'Watersports Content! Mom corruption level 4. Requires Fruit Gushers. Talk to her during the day.'},
	{index: 'mom7', name: "Morning Pee", hint: 'Watersports Content! Mom corruption level 4. Automatically triggers in the mornning. Choose "stay inside".'},
	{index: 'sister1', name: "Unwashed", hint: 'Sister corruption level 1. Talk to her during the day.'},
	{index: 'sister2', name: "Anal Solo", hint: 'Sister corruption level 2. Requires Adult Toy. Talk to her during the day.'},
	{index: 'sister3', name: "Anal Full", hint: 'Sister corruption level 3 (requires skill level of advanced). Talk to her during the day.'},
	{index: 'sister4', name: "Plugged", hint: 'Sister corruption level 4. Requires plug pop. Talk to her during the day.'},
	{index: 'sister5', name: "Anal Horse", hint: 'Sister corruption level 4. Requires horse toy and stretchy taffy. Talk to her during the day after triggering the event "Plugged".'},
	{index: 'sister6', name: "Family Dinner", hint: 'Sister corruption level 5 and Mom corruption level 4. Talk to her during the day.'},
	{index: 'sister7', name: "Family Fun Time", hint: 'Sister corruption level 5 and Mom corruption level 4. Requires Pop Rocks. Talk to her during the day.'},
	{index: 'friend1', name: "Your Confession", hint: 'Classmate corruption level 2 (requires skill level of advanced). Talk to her during the day.'},
	{index: 'friend2', name: "Her Confession", hint: 'Classmate corruption level 2. Talk to her again after the event Confession.'},
	{index: 'friend3', name: "Gateway Candy", hint: 'Classmate corruption level 3. Requires Caramel Melt. Talk to her during the day.'},
	{index: 'friend4', name: "Popping Cherries", hint: 'Classmate corruption level 4. Talk to her during the day.'},
	{index: 'friend5', name: "Tables Turned", hint: 'Classmate corruption level 5 (requires skill level of master). Requires Stretchy Taffy. Talk to her during the day.'},
	{index: 'teacher1', name: "Breaststroke", hint: 'Teacher corruption level 1. Talk to her during the day.'},
	{index: 'teacher2', name: "Swllowing Improves Health", hint: 'Teacher corruption level 2 (requires skill level of advanced). Talk to her during the day.'},
	{index: 'teacher3', name: "Curricular Fun", hint: 'Teacher corruption level 3. Talk to her during the day.'},
	{index: 'teacher4', name: "Extracurricular Fun", hint: 'Teacher corruption level 4 (requires skill level of master). Talk to her during the day.'},
	{index: 'teacher5', name: "Bathroom Duty", hint: 'Watersports content! Teacher corruption level 5. Talk to her during the day.'},
	{index: 'office1', name: "Hidden Fantasy", hint: 'Office woman corruption level 1 (requires skill level of advanced). Talk to her during the day.'},
	{index: 'office2', name: "Left Overnight", hint: 'Office woman corruption level 2. Talk to her during the day.'},
	{index: 'office3', name: "Checkup", hint: 'Office woman corruption level 2. Talk to her again after the Left Overnight event.'},
	{index: 'office4', name: "Permanent Fixture", hint: 'Office woman corruption level 3 (requires skill level of master). Talk to her during the day.'},
	{index: 'chef1', name: "Creamer", hint: 'Coffee shop owner corruption level 1. Requires Creamer. Talk to her during the day.'},
	{index: 'chef2', name: "From the Tap", hint: 'Coffee shop owner corruption level 2. Talk to her during the day.'},
	{index: 'chef3', name: "Restaurant's Closed", hint: 'Coffee shop owner corruption level 3. Talk to her during the day.'},
	{index: 'misc1', name: "Adriana Special", hint: 'After purchasing all three tickets, purchase the special deal in the exotic shop. Increases skill level to advanced.'},
	{index: 'misc2', name: "Adriana Special 2", hint: 'After purchasing all other items in the exotic shop, purchase the second special deal in the exotic shop.'},
	{index: 'misc3', name: "Gina Special", hint: 'After purchasing the clothing ticket, go to the clothing shop.'},
	{index: 'misc4', name: "Gina Special 2", hint: 'After purchasing the clothing ticket, purchase the special deal in the clothing shop.'},
	{index: 'misc5', name: "Human Onahole", hint: 'Go to the streets with skill level of advanced. Requires Onahole. Increases skill level to master.'},
	{index: 'mom1S', name: "Sister's Experiment", hint: 'Corruption level 1. Talk to her during the day.'},
	{index: 'mom2S', name: "Desperate Maid", hint: 'Corruption level 2. Talk to her during the day.'},
	{index: 'mom3S', name: "Loving Milk-Tank", hint: 'Corruption level 3. Talk to her during the day.'},
	{index: 'sister1S', name: "Taste of Revenge", hint: 'After reaching corruption level 2 with all other characters, talk to her with a Pop Rock.'},
	{index: 'sister2S', name: "Punishment", hint: 'Talk to her with a Pop Rock after completing the event "Taste of Revenge".'},
	{index: 'sister3S', name: "Tokyo Pop", hint: 'Talk to her after learning about the Tokyo Pop filming and after completing the event "Punishment".'},
	{index: 'sister4S', name: "New Toy", hint: 'Talk to her after triggering the event "Student Teacher Dynamic".'},
	{index: 'sister5S', name: "Pushing Limits", hint: 'Talk to her after triggering the event "New Toy".'},
	{index: 'friend1S', name: "Confession Interrupted", hint: 'Corruption level 1. Talk to her during the day.'},
	{index: 'friend2S', name: "Bathroom Stall", hint: 'Corruption level 2. Talk to her during the day.'},
	{index: 'friend3S', name: "Love Letter", hint: 'Corruption level 3. Talk to her during the day.'},
	{index: 'friend4S', name: "True Romance", hint: 'Corruption level 4. Talk to her during the day.'},
	{index: 'teacher1S', name: "Hungry Eyes", hint: 'Corruption level 1. Talk to her during the day.'},
	{index: 'teacher2S', name: "Disfunction", hint: 'Corruption level 2. Talk to her during the day.'},
	{index: 'teacher3S', name: "Exploration", hint: 'Corruption level 3. Talk to her during the day with a Plug Pop.'},
	{index: 'teacher4S', name: "Sounding", hint: 'Corruption level 3. Talk to her during the day with a Stretchy Taffy.'},
	{index: 'teacher5S', name: "Student Teacher Dynamic", hint: 'Corruption level 4. Talk to her during the day.'},
	{index: 'office1S', name: "Public Indecency", hint: 'Corruption level 1. Talk to her during the day.'},
	{index: 'office2S', name: "Public Flasher", hint: 'Corruption level 2. Talk to her during the day.'},
	{index: 'office3S', name: "Superhero", hint: 'Corruption level 3. Talk to her during the day.'},
	{index: 'office4S', name: "Public Punishment", hint: 'Corruption level 4. Talk to her during the day.'},
	{index: 'chef1S', name: "Rewarding Meal", hint: 'Corruption level 1. Talk to her during the day.'},
	{index: 'chef2S', name: "Direct Feeding", hint: 'Corruption level 2. Talk to her during the day.'},
	{index: 'chef3S', name: "Food Preparation", hint: 'Corruption level 3. Talk to her during the day with a Pop Rock.'},
	{index: 'chef4S', name: "Enjoying the Work", hint: 'Corruption level 4. Talk to her during the day.'},
	{index: 'doll1', name: "Awakening", hint: 'Purchase the doll, then talk to her in your room.'},
	{index: 'doll2', name: "Frustrations", hint: 'Talk to the her at least a day after completing the event "Awakening".'},
	{index: 'doll3', name: "Borrowed", hint: 'Talk to the her at least a day after completing the event "Frustrations".'},
	{index: 'misc1S', name: "Take a Break", hint: 'Complete the prologue'},
];

var logbookArray = [
	{
		index: "mom", 
		desc: "N/A",
		color: "#B38D8A",
	},
	{
		index: "sister", 
		desc: "N/A",
		color: "#F5D193",
	},
	{
		index: "friend", 
		desc: "N/A",
		color: "#BC0219",
	},
	{
		index: "teacher", 
		desc: "N/A",
		color: "#F5D193",
	},
	{
		index: "chef", 
		desc: "N/A",
		color: "#81666F",
	},
	{
		index: "office", 
		desc: "N/A",
		color: "#F9A4A4",
	},
	{
		index: "exotic", 
		desc: "N/A",
		color: "#DD7677",
	},
	{
		index: "clothes", 
		desc: "N/A",
		color: "#DE5D47",
	},
	{
		index: "candy", 
		desc: "N/A",
		color: "#DF7FA5",
	},
	{
		index: "evil", 
		desc: "N/A",
		color: "#6C019E",
	},
	{
		index: "bully", 
		desc: "N/A",
		color: "#CCB982",
	},
	{
		index: "camboi", 
		desc: "N/A",
		color: "#7D8790",
	},
	{
		index: "neighbor", 
		desc: "N/A",
		color: "#00843D",
	},
];

var menuArray = [
	{ID: "invButton", name:"INVENTORY", func: "generateWindow('inventory')", div: "buttonMenuPrimary"},
	{ID: "logButton", name:"LOGBOOK", func: "generateWindow('logbook')", div: "buttonMenuPrimary"},
	{ID: "saveButton", name:"SAVE/LOAD", func: "generateWindow('save')", div: "buttonMenuPrimary"},
	{ID: "setButton", name:"SETTINGS", func: "generateWindow('settings')", div: "buttonMenuPrimary"},
	{ID: "restartButton", name:"RESTART", func: "restartButton()", div: "buttonMenu"},
	{ID: "mobButton", name:"MOBILE VERSION", func: "mobileButton()", div: "buttonMenu"},
];

var encounterArray = [
	//character: "mom", index: "", text: "momF trust 0", requirements: "?trust mom 0;", altName: "", altImage: "", altColor: "", type: "button", top: 0, left: 0,},
	{character: "mom", index: "sleep", text: "Go to sleep", requirements: "?location homePlayerRoom;", altName: "", altImage: "", altColor: "", type: "button", top: 55, left: 60,},
	{character: "mom", index: "", text: "You can hear your mother in her room, schlicking sounds and wanton moans easily audible through her door. You should head to bed and fix this soon.", requirements: "?location homeFoyer; !flag mom ready; ?trust mom  0;", altName: "", altImage: "", altColor: "", type: "message", top: 55, left: 60,},
	{character: "mom", index: "mom2Fail", text: "momF is here.", requirements: "?location homeFoyer; !flag mom ready; ?trust mom  1;", altName: "", altImage: "", altColor: "", type: "", top: 55, left: 60,},
	{character: "mom", index: "mom3", text: "momF is here. You can enjoy the results of your alteration", requirements: "?location homeFoyer; ?flag mom ready; ?trust mom  2;", altName: "", altImage: "", altColor: "", type: "", top: 55, left: 60,},
	{character: "mom", index: "mom3Fail", text: "momF is here.", requirements: "?location homeFoyer; !flag mom ready; ?trust mom  2;", altName: "", altImage: "", altColor: "", type: "", top: 55, left: 60,},
	{character: "mom", index: "mom4", text: "momF is here. You can enjoy the results of your alteration", requirements: "?location homeFoyer; ?flag mom ready; ?trust mom  3;", altName: "", altImage: "", altColor: "", type: "", top: 55, left: 60,},
	{character: "mom", index: "mom4Fail", text: "momF is here.", requirements: "?location homeFoyer; !flag mom ready; ?trust mom 3;", altName: "", altImage: "", altColor: "", type: "", top: 55, left: 60,},
	
	{character: "sister", index: "sister2NeedItem", text: "You don't have what you need right now. Maybe you should head to the exotic shop?", requirements: "?location homeSisterRoom; ?flag sister ready; ?trust sister 2;", altName: "", altImage: "", altColor: "", type: "message", top: 55, left: 60,},
];

var locationArray = [
	{index: "homeFoyer", buttons: [
		{name: "Your Room", top: 55, left: 80, type: "location", target: "homePlayerRoom", time: "Evening",},
		{name: "sisterF's Room", top: 40, left: 3, type: "location", target: "homeSisterRoom", time: "Evening",},
		{name: "Head Out", top: 40, left: 70, type: "location", target: "alleyway", time: "Evening",},
	],},
	{index: "homePlayerRoom", buttons: [
		{name: "Leave the Room", top: 80, left: 40, type: "location", target: "homeFoyer", time: "Evening",},
	],},
	{index: "homeGameRoom", buttons: [
		{name: "Leave the Room", top: 80, left: 40, type: "location", target: "homeFoyer", time: "Evening",},
	],},
	{index: "homeSisterRoom", buttons: [
		{name: "Leave the Room", top: 80, left: 40, type: "location", target: "homeFoyer", time: "Evening",},
	],},
	{index: "streets", buttons: [
		{name: "Alleyway Shortcut", top: 40, left: 38, type: "location", target: "alleyway", time: "Evening",},
		{name: "chefF's Cafe", top: 50, left: 10, type: "location", target: "restaurant", time: "Evening",},
		{name: "Head to School", top: 80, left: 40, type: "location", target: "school", time: "Evening",},
	],},
	{index: "alleyway", buttons: [
		{name: "Head Home", top: 40, left: 40, type: "location", target: "homeFoyer", time: "Evening",},
		{name: "Back to the Streets", top: 80, left: 37, type: "location", target: "streets", time: "Evening",},
	],},
	{index: "restaurant", buttons: [
		{name: "Back to the Streets", top: 50, left: 50, type: "location", target: "streets", time: "Evening",},
	],},
	{index: "school", buttons: [
		{name: "Your Classroom", top: 80, left: 38, type: "location", target: "classroom", time: "Evening",},
		{name: "Leave School", top: 40, left: 40, type: "location", target: "streets", time: "Evening",},
	],},
	{index: "classroom", buttons: [
		{name: "Leave Class", top: 80, left: 40, type: "location", target: "school", time: "Evening",},
		{name: "Head Straight Home", top: 80, left: 5, type: "location", target: "homeFoyer", time: "Evening",},
	],},
];

var shopArray = [
	{type: "candy", price: 5, route: "domsub", index: "popRocks", name: "Pop Rocks", desc: "You'll be sputtering endlessly! Even the slightest breeze will have you cross-eyed and firing!<br>Warning: Induces premature ejaculation and excessive semen production."},
	{type: "candy", price: 5, route: "domsub", index: "caramelMelts", name: "Caramel Melts", desc: "These melt in your mouth, making everything you put in afterwards taste heavenly! Warning: Induces a strong desire for 'irrumatio' play. Remember: dick is not a healthy alternative for oxygen."},
	{type: "candy", price: 5, route: "domsub", index: "plugPop", name: "Plug Pops", desc: "These suckers will pucker and plump you up! Permanently cleans, slickens, and keeps clean the digestive tract, rectum, and sphincter. Not meant for oral use."},
	{type: "candy", price: 5, route: "domsub", index: "stretchTaffy", name: "Stretchy Taffy", desc: "Ever feel like you or your lover are just too wound up? Take a bit of these, and you'll have no problems fitting in anywhere! Warning: Side effects include preparing your body for anal sex."},
	{type: "candy", price: 5, route: "domsub", index: "fruitGushers", name: "Fruit Gushers", desc: "Let's be real here. Watersports can be tough to schedule. Not a problem here! Chew on one of these and you'll be a garden hose for a few minutes at a time. Feels and tastes great too!"},
	{type: "exotic", price: 5, route: "domsub", index: "vrMachine", name: "Virtual Reality Headset", desc: ""},
	{type: "exotic", price: 5, route: "domsub", index: "laptop", name: "Laptop", desc: "A portable computer (that you'll use to look up porn)."},
	{type: "exotic", price: 5, route: "dom", index: "creamer", name: "Coffee Creamer", desc: "An easily re-sealable cup of a generic white coffee creamer."},
	{type: "exotic", price: 5, route: "dom", index: "adultToy", name: "Adult Toy", desc: "You know what this is, and what it can do."},
	{type: "exotic", price: 5, route: "dom", index: "horseToy", name: "Horse Toy", desc: "This is the meat that can't be beat! Warning, not for the faint of heart / inflexible of body."},
	{type: "exotic", price: 5, route: "dom", index: "onahole", name: "Onahole Toy", desc: "You're an app user, so you shouldn't need this. Unless you're feeling creative, that is."},
	{type: "exotic", price: 5, route: "domsub", index: "candyTicket", name: "Candy Ticket", desc: "Unlocks additional exotic purchases at the Candy Shop."},
	{type: "exotic", price: 5, route: "dom", index: "clothingTicket", name: "Clothing Ticket", desc: "Unlocks additional exotic purchases at the Clothing Store."},
	{type: "exotic", price: 5, route: "sub", index: "beautyTicket", name: "Beauty Ticket", desc: "Unlocks additional exotic purchases at the Beauty Salon"},
	
	{type: "clothesMale", price: 5, route: "dom", index: "menShorts", name: "Button-up", desc: "a casual button-up shirt and a pair of shorts."},
	{type: "clothesMale", price: 5, route: "dom", index: "menBlack", name: "Black", desc: "an all-black outfit."},
	{type: "clothesMale", price: 5, route: "dom", index: "menDrawstring", name: "Drawstring", desc: "a casual white outfit with drawstring pants."},
	{type: "clothesMale", price: 5, route: "dom", index: "menJacket", name: "Jacket", desc: "an outdoorsy looking outfit."},
	{type: "clothesSissyTrans", price: 5, route: "dom", index: "bikini", name: "Bikini", desc: "a yellow bikini, perfect for a trip to the beach."},
	{type: "clothesSissyTrans", price: 5, route: "dom", index: "blue", name: "Blue Sweater", desc: "a blue sweater and jeans."},
	{type: "clothesSissyTransLewd", price: 5, route: "dom", index: "bodypaint", name: "Bodypaint", desc: "a fake set of clothes made out of paint."},
	{type: "clothesSissyTransLewd", price: 5, route: "dom", index: "bottomless", name: "Bottomless", desc: "a black sweater, but nothing to cover your ass or privates."},
	{type: "clothesSissyTrans", price: 5, route: "dom", index: "coatCasual", name: "Red Coat", desc: "a comfy red coat, a black v-neck shirt and jeans."},
	{type: "clothesSissyTransLewd", price: 5, route: "dom", index: "dressSkimpy", name: "Skimpy Dress", desc: "a blue dress which barely covers your nipples."},
	{type: "clothesSissyTrans", price: 5, route: "dom", index: "exercise", name: "Exercise", desc: "a workout outfit."},
	{type: "clothesSissyTransLewd", price: 5, route: "dom", index: "fishnet", name: "Fishnet", desc: "a fishnet shirt clearly displaying your breasts."},
	{type: "clothesSissyTransLewd", price: 5, route: "dom", index: "latex", name: "Latex", desc: "a latex outfit."},
	{type: "clothesSissyTrans", price: 5, route: "dom", index: "maid", name: "Maid Uniform", desc: "a maid uniform."},
	{type: "clothesSissyTransLewd", price: 5, route: "dom", index: "microbikini", name: "Microbikini", desc: "a microbikini that hardly covers any skin."},
	{type: "clothesSissyTrans", price: 5, route: "dom", index: "schoolCollege", name: "College Student", desc: "a sweater, leggings, and a large scarf."},
	{type: "clothesSissyTrans", price: 5, route: "dom", index: "sissy", name: "Sissy", desc: "a pink skirt."},
	{type: "clothesSissyTransLewd", price: 5, route: "dom", index: "superhero", name: "Superheroine", desc: "a superheroine outfit."},
	{type: "clothesSissyTrans", price: 5, route: "dom", index: "sweater", name: "Sweater", desc: "a grey sweater."},
	{type: "clothesSissyTransLewd", price: 5, route: "dom", index: "trailer", name: "Trailer-Park Whore", desc: "a top and shorts cut so short you could flash someone by shifting your weight."},
	{type: "clothesSissyTransLewd", price: 5, route: "dom", index: "transparent", name: "Transparent Shirt", desc: "a transparent shirt."},
	{type: "clothesSissyTransLewd", price: 5, route: "dom", index: "transparentbikini", name: "Transparent Bikini", desc: "a transparent bikini."},
	{type: "clothesSissyTransLewd", price: 5, route: "dom", index: "transparentShort", name: "Transparent Dress", desc: "a transparent dress."},
	{type: "clothesSub", price: 5, route: "sub", index: "dress", name: "Black Dress", desc: "a thin black dress that barely goes down your thighs."},
	{type: "clothesSub", price: 5, route: "sub", index: "skirt", name: "Skirt", desc: "a thin black dress that barely goes down your thighs."},
	{type: "clothesSub", price: 5, route: "sub", index: "schoolgirl", name: "Schoolgirl", desc: "a thin black dress that barely goes down your thighs."},
	{type: "underwearMaleTransTrap", price: 0, route: "dom", index: "nothing", name: "Nothing", desc: "absolutely nothing beneath your clothes!"},
	{type: "underwearMale", price: 5, route: "dom", index: "boxers", name: "Boxers", desc: "a slightly-worn pair of boxers."},
	{type: "underwearTrapTrans", price: 5, route: "dom", index: "erotic5", name: "Black Panties", desc: "a pair of black panties."},
	{type: "underwearTrapTrans", price: 5, route: "dom", index: "erotic5", name: "Dong Hammock", desc: "a pair of panties that tries its best to smuggle your fruit."},
	{type: "underwearTrapTrans", price: 5, route: "dom", index: "erotic5", name: "Pink Panties", desc: "a pair of pink panties."},
	{type: "underwearTrapTrans", price: 5, route: "dom", index: "erotic5", name: "Skimpy Thong", desc: "a small thong."},
	{type: "underwearSub", price: 5, route: "dom", index: "panties", name: "Panties", desc: "a tight pair of white panties that have been altered to cradle your balls."},
	{type: "underwearSub", price: 5, route: "dom", index: "frilly", name: "Frilly Panties", desc: "a tight pair of frilly panties that have been altered to cradle your balls."},
	{type: "underwearSub", price: 5, route: "dom", index: "thong", name: "Packed Thong", desc: "an extremely tight thong that barely contains your flaccid dick."},
];

//Startup & Systems config

function startup() {
	generateHTML();
	saveSlot(11);
	wrapper.scrollTop = 0;
	if(localStorage.getItem('data10')) {
		loadSlot(10);
		//sceneTransition('start');
	}
	else{
		sceneTransition('start');
	}
}

function generateHTML() {
	//console.log("Now generating HTML foundation");
	document.getElementById('body').innerHTML = `
		<div id = "menu" class = "menu">
			<div id="titlePanel">
				<p id = "title" class = "title">Human Alteration App</p>
				<div id="closeButton" class="closeButton" onclick="closeButton()"><</div>
				<p id = "version" class = "version">V1.1</p>
				<p id = "author">
					<a href="https://noodlejacuzzi.github.io/index.html">Noodle Jacuzzi</a><br>
					<a href="https://www.patreon.com/noodlejacuzzi">Patreon</a>
				</p>
			</div>
			<div id="buttonMenu">
				<div id="buttonMenuPrimary" class="gridButtons">
				</div>
			</div>
			<div id="playerPanel" class="flexbox">
				<img id="playerImage" class="playerImage" src="scripts/gamefiles/none.png">
				<div id="playerStats">
					<h3 id = "playerName" class = "char_player version">???</h3>
					<p id = "playerMoney" class = "version">$0</p>
				</div>
				<div id="corruptionList">
				</div>
			</div>
		</div>
		<div id="openButton" class="openButton" onclick="openButton()">></div>
		<div id = "wrapper" class = "wrapper">
			<div id="wrapperBG"></div>
			<div id = "output" class = "output">
			<div class="loader"></div> 
			</div>
			<div id="footer" class="footer">
			</div>
		</div>
		<div id = "windowHolder" class = "windowHolder">
		</div>
	`;
	updateMenu();
}

function disablePictures() {
	if (picturesDisabled == false) {
		picturesDisabled = true;
		updateMenu();
		writeText("<i>Images disabled. No further images aside from navigation and dialogue profiles will appear.</i>");
	}
	else {
		location.reload();
	}
}

function restartButton() {
	var restart = confirm ("restart the game?");
	if (restart == true) {
		loadSlot(11);
	}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//Character functions

function raiseTrust(name, n) {
	for (trustIndex = 0; trustIndex < data.story.length; trustIndex++) {
		if (data.story[trustIndex].index == name) {
			console.log('raising the trust of '+name+' by '+n);
			data.story[trustIndex].trust += n;
		}
	}
}

function setTrust(name, n) {
	for (trustIndex = 0; trustIndex < data.story.length; trustIndex++) {
		if (data.story[trustIndex].index == name) {
			console.log('setting the trust of '+name+' to '+n);
			data.story[trustIndex].trust = n;
		}
	}
}

function checkTrust(name) {
	for (trustIndex = 0; trustIndex < data.story.length; trustIndex++) {
		if (data.story[trustIndex].index == name) {
			return data.story[trustIndex].trust;
		}
	}
}

function addFlag(character, flag) {
	console.log(character+flag);
	for (flagIndex = 0; flagIndex < data.story.length; flagIndex++) {
		if (data.story[flagIndex].index == character) {
			if (data.story[flagIndex].flags.includes(flag) == false) {
				console.log('adding the flag named '+flag+' to '+character);
				data.story[flagIndex].flags += flag;
			}
		}
	}
}

function removeFlag(character, flag) {
	for (flagIndex = 0; flagIndex < data.story.length; flagIndex++) {
		if (data.story[flagIndex].index == character) {
			if (data.story[flagIndex].flags.includes(flag) == true) {
				console.log('Removing flag '+flag+' from '+character);
				data.story[flagIndex].flags = data.story[flagIndex].flags.replace(flag, "");
			}
			else {
				console.log('error! flag '+flag+' not found!');
			}
		}
	}
}

function checkFlag(character, flag) {
	for (flagIndex = 0; flagIndex < data.story.length; flagIndex++) {
		if (data.story[flagIndex].index == character) {
			if (data.story[flagIndex].flags.includes(flag) == true) {
				return true;
			}
			else {
				return false;
			}
		}
	}
}

function checkOutfit(name) {
	for (trustIndex = 0; trustIndex < data.story.length; trustIndex++) {
		if (data.story[trustIndex].index == name) {
			return data.story[trustIndex].outfit;
		}
	}
}

function changeOutfit(name, n) {
	for (trustIndex = 0; trustIndex < data.story.length; trustIndex++) {
		if (data.story[trustIndex].index == name) {
			console.log('setting the outfit of '+name+' to '+n);
			data.story[trustIndex].outfit = n;
		}
	}
}

function replaceCodenames(text) {
	var codenameCheck = "";
	while (text.includes('playerF') == true) {
	text = text.replace('playerF', data.player.name);
	}
	switch (data.player.pronoun) {
		case "man": {
			while (text.includes('*he') == true) {
			text = text.replace('*he', 'he');
			}
			while (text.includes('*He') == true) {
			text = text.replace('*He', 'He');
			}
			while (text.includes('*HE') == true) {
			text = text.replace('*HE', 'HE');
			}
			while (text.includes('*his') == true) {
			text = text.replace('*his', 'his');
			}
			while (text.includes('*His') == true) {
			text = text.replace('*His', 'His');
			}
			while (text.includes('*HIS') == true) {
			text = text.replace('*HIS', 'HIS');
			}
			while (text.includes('*man') == true) {
			text = text.replace('*man', 'man');
			}
			while (text.includes('*Man') == true) {
			text = text.replace('*Man', 'Man');
			}
			while (text.includes('*MAN') == true) {
			text = text.replace('*MAN', 'MAN');
			}
			while (text.includes('*him') == true) {
			text = text.replace('*him', 'him');
			}
			while (text.includes('*Him') == true) {
			text = text.replace('*Him', 'Him');
			}
			while (text.includes('*HIM') == true) {
			text = text.replace('*HIM', 'HIM');
			}
			while (text.includes('*boy') == true) {
			text = text.replace('*boy', 'boy');
			}
			while (text.includes('*Boy') == true) {
			text = text.replace('*Boy', 'Boy');
			}
			while (text.includes('*BOY') == true) {
			text = text.replace('*BOY', 'BOY');
			}
			while (text.includes('*brother') == true) {
			text = text.replace('*brother', 'brother');
			}
			while (text.includes('*Brother') == true) {
			text = text.replace('*Brother', 'Brother');
			}
			while (text.includes('*BROTHER') == true) {
			text = text.replace('*BROTHER', 'BROTHER');
			}
			while (text.includes('*bro') == true) {
			text = text.replace('*bro', 'bro');
			}
			while (text.includes('*Bro') == true) {
			text = text.replace('*Bro', 'Bro');
			}
			while (text.includes('*BRO') == true) {
			text = text.replace('*BRO', 'BRO');
			}
			while (text.includes('*guy') == true) {
			text = text.replace('*guy', 'guy');
			}
			while (text.includes('*Guy') == true) {
			text = text.replace('*Guy', 'Guy');
			}
			while (text.includes('*GUY') == true) {
			text = text.replace('*GUY', 'GUY');
			}
			while (text.includes('*mister') == true) {
			text = text.replace('*mister', 'mister');
			}
			while (text.includes('*Mister') == true) {
			text = text.replace('*Mister', 'Mister');
			}
			while (text.includes('*MISTER') == true) {
			text = text.replace('*MISTER', 'MISTER');
			}
			while (text.includes('*sir') == true) {
			text = text.replace('*sir', 'sir');
			}
			while (text.includes('*Sir') == true) {
			text = text.replace('*Sir', 'Sir');
			}
			while (text.includes('*SIR') == true) {
			text = text.replace('*SIR', 'SIR');
			}
			while (text.includes('*male') == true) {
			text = text.replace('*male', 'male');
			}
			while (text.includes('*Male') == true) {
			text = text.replace('*Male', 'Male');
			}
			while (text.includes('*MALE') == true) {
			text = text.replace('*MALE', 'MALE');
			}
			while (text.includes('*geezer') == true) {
			text = text.replace('*geezer', 'geezer');
			}
			while (text.includes('*Geezer') == true) {
			text = text.replace('*Geezer', 'Geezer');
			}
			while (text.includes('*GEEZER') == true) {
			text = text.replace('*GEEZER', 'GEEZER');
			}
			while (text.includes('*master') == true) {
			text = text.replace('*master', 'master');
			}
			while (text.includes('*Master') == true) {
			text = text.replace('*Master', 'Master');
			}
			while (text.includes('*MASTER') == true) {
			text = text.replace('*MASTER', 'MASTER');
			}
			break;
		}
		case "woman": {
			while (text.includes('*he') == true) {
			text = text.replace('*he', 'she');
			}
			while (text.includes('*He') == true) {
			text = text.replace('*He', 'She');
			}
			while (text.includes('*HE') == true) {
			text = text.replace('*HE', 'SHE');
			}
			while (text.includes('*his') == true) {
			text = text.replace('*his', 'her');
			}
			while (text.includes('*His') == true) {
			text = text.replace('*His', 'Her');
			}
			while (text.includes('*HIS') == true) {
			text = text.replace('*HIS', 'HER');
			}
			while (text.includes('*man') == true) {
			text = text.replace('*man', 'woman');
			}
			while (text.includes('*Man') == true) {
			text = text.replace('*Man', 'Woman');
			}
			while (text.includes('*MAN') == true) {
			text = text.replace('*MAN', 'WOMAN');
			}
			while (text.includes('*him') == true) {
			text = text.replace('*him', 'her');
			}
			while (text.includes('*Him') == true) {
			text = text.replace('*Him', 'Her');
			}
			while (text.includes('*HIM') == true) {
			text = text.replace('*HIM', 'HER');
			}
			while (text.includes('*boy') == true) {
			text = text.replace('*boy', 'girl');
			}
			while (text.includes('*Boy') == true) {
			text = text.replace('*Boy', 'Girl');
			}
			while (text.includes('*BOY') == true) {
			text = text.replace('*BOY', 'GIRL');
			}
			while (text.includes('*brother') == true) {
			text = text.replace('*brother', 'sister');
			}
			while (text.includes('*Brother') == true) {
			text = text.replace('*Brother', 'Sister');
			}
			while (text.includes('*BROTHER') == true) {
			text = text.replace('*BROTHER', 'SISTER');
			}
			while (text.includes('*bro') == true) {
			text = text.replace('*bro', 'sis');
			}
			while (text.includes('*Bro') == true) {
			text = text.replace('*Bro', 'Sis');
			}
			while (text.includes('*BRO') == true) {
			text = text.replace('*BRO', 'SIS');
			}
			while (text.includes('*guy') == true) {
			text = text.replace('*guy', 'girl');
			}
			while (text.includes('*Guy') == true) {
			text = text.replace('*Guy', 'Girl');
			}
			while (text.includes('*GUY') == true) {
			text = text.replace('*GUY', 'GIRL');
			}
			while (text.includes('*mister') == true) {
			text = text.replace('*mister', 'miss');
			}
			while (text.includes('*Mister') == true) {
			text = text.replace('*Mister', 'Miss');
			}
			while (text.includes('*MISTER') == true) {
			text = text.replace('*MISTER', 'MISS');
			}
			while (text.includes('*sir') == true) {
			text = text.replace('*sir', "ma'am");
			}
			while (text.includes('*Sir') == true) {
			text = text.replace('*Sir', "Ma'am");
			}
			while (text.includes('*SIR') == true) {
			text = text.replace('*SIR', "MA'AM");
			}
			while (text.includes('*male') == true) {
			text = text.replace('*male', 'female');
			}
			while (text.includes('*Male') == true) {
			text = text.replace('*Male', 'Female');
			}
			while (text.includes('*MALE') == true) {
			text = text.replace('*MALE', 'FEMALE');
			}
			while (text.includes('*geezer') == true) {
			text = text.replace('*geezer', 'hag');
			}
			while (text.includes('*Geezer') == true) {
			text = text.replace('*Geezer', 'Hag');
			}
			while (text.includes('*GEEZER') == true) {
			text = text.replace('*GEEZER', 'HAG');
			}
			while (text.includes('*master') == true) {
			text = text.replace('*master', 'mistress');
			}
			while (text.includes('*Master') == true) {
			text = text.replace('*Master', 'Mistress');
			}
			while (text.includes('*MASTER') == true) {
			text = text.replace('*MASTER', 'MISTRESS');
			}
			break;
		}
	}
	for (codenameIndex = 0; codenameIndex < data.story.length; codenameIndex++) {
		codenameCheck = data.story[codenameIndex].index + "F";
		text = text.replace(codenameCheck, data.story[codenameIndex].name);
	}
	if (data.player.oowoo == true) {
		while (text.includes('<br>') == true) {
		text = text.replace('<br>', 'TESTTHING');
		}
		while (text.includes('th') == true) {
		text = text.replace('th', 'd');
		}
		while (text.includes('Th') == true) {
		text = text.replace('Th', 'D');
		}
		while (text.includes('what') == true) {
		text = text.replace('what', 'wat');
		}
		while (text.includes('What') == true) {
		text = text.replace('What', 'Wat');
		}
		while (text.includes('l') == true) {
		text = text.replace('l', 'w');
		}
		while (text.includes('r') == true) {
		text = text.replace('r', 'w');
		}
		while (text.includes('L') == true) {
		text = text.replace('L', 'W');
		}
		while (text.includes('R') == true) {
		text = text.replace('R', 'W');
		}
		while (text.includes('TESTTHING') == true) {
		text = text.replace('TESTTHING', '<br>');
		}
		switch (getRandomInt(15)) {
			case 0:
				text = text + " ♥w♥";
			break;
			case 1:
				text = text + " (˘ω˘)";
			break;
			case 2:
				text = text + " (U ᵕ U❁)";
			break;
			case 3:
				text = text + " ( ˊ.ᴗˋ )";
			break;
			case 4:
				text = text + " ( ͡o ꒳ ͡o )";
			break;
			case 5:
				text = text + " ( ´ω` )۶";
			break;
			case 6:
				text = text + " OwO";
			break;
			case 7:
				text = text + " (*ฅ́˘ฅ̀*)";
			break;
			case 8:
				text = text + " ( ͡o ᵕ ͡o )";
			break;
			case 9:
				text = text + " ✧･ﾟ: *✧･ﾟ♡*(ᵘʷᵘ)*♡･ﾟ✧*:･ﾟ✧";
			break;
			case 10:
				text = text + " ★⌒ヽ(˘꒳˘ *)";
			break;
			case 11:
				text = text + " (◕ ˬ ◕✿)";
			break;
			case 12:
				text = text + " (◕∇◕✿)";
			break;
			case 13:
				text = text + " (ꈍ ᴗ ꈍ✿)";
			break;
			case 14:
				text = text + " (◕‸ ◕✿) *pout*";
			break;
			case 15:
				text = text + " (≖ ︿ ≖ ✿)";
			break;
		}
	}
	return(text);
}

function renameCharacter(target, scene) {
	switch (target) {
		case "player":
		var goof = document.getElementById('nameSubmission').value;
		data.player.name = goof;
		break;
		case "prologueSkip":
		var goof = document.getElementById('nameSubmission').value;
		data.player.name = goof;
		for (i = 0; i < 7; i++) {
			var sheet = 'nameSubmission' + i;
			console.log(document.getElementById(sheet).value);
			data.story[i].name = document.getElementById(sheet).value;
		}
		break;
		case "all":
			for (i = 0; i < data.story.length; i++) {
				var sheet = 'nameSubmission' + i;
				data.story[i].name = document.getElementById(sheet).value;
			}
		break;
		default:
		var goof = document.getElementById('nameSubmission').value;
		for (characterIndex = 0; characterIndex < data.story.length; characterIndex++) {
			if (data.story[characterIndex].index == target) {
				data.story[characterIndex].name = goof;
			}
		}
	}
	sceneTransition(scene);
}

//Scene creation
function checkRequirements(string) {
	var finalResult = true;
	while (string.includes("!location ") == true) {
		var check = string.split(`!location `).pop().split(`;`)[0];
		if (check.includes(data.player.location) == true) {
			finalResult = false;
		}
		string = string.replace(`!location `+check+`;`, ``);
	}
	while (string.includes("?location ") == true) {
		var check = string.split(`?location `).pop().split(`;`)[0];
		if (check.includes(data.player.location) != true) {
			finalResult = false;
		}
		string = string.replace(`?location `+check+`;`, ``);
	}
	while (string.includes("!item ") == true) {
		var check = string.split(`!item `).pop().split(`;`)[0];
		if (checkItem(check) == true) {
			finalResult = false;
		}
		string = string.replace(`!item `+check+`;`, ``);
	}
	while (string.includes("?item ") == true) {
		var check = string.split(`?item `).pop().split(`;`)[0];
		if (checkItem(check) != true) {
			finalResult = false;
		}
		string = string.replace(`?item `+check+`;`, ``);
	}
	while (string.includes("!skill ") == true) {
		var check = string.split(`!skill `).pop().split(`;`)[0];
		if (data.player.skill >= check) {
			finalResult = false;
		}
		string = string.replace(`!skill `+check+`;`, ``);
	}
	while (string.includes("?skill ") == true) {
		var check = string.split(`?skill `).pop().split(`;`)[0];
		if (data.player.skill < check) {
			finalResult = false;
		}
		string = string.replace(`?skill `+check+`;`, ``);
	}
	while (string.includes("!time ") == true) {
		var check = string.split(`!time `).pop().split(`;`)[0];
		if (data.player.time == check) {
			finalResult = false;
		}
		string = string.replace(`!time `+check+`;`, ``);
	}
	while (string.includes("?time ") == true) {
		var check = string.split(`?time `).pop().split(`;`)[0];
		if (data.player.time != check) {
			finalResult = false;
		}
		string = string.replace(`?time `+check+`;`, ``);
	}
	while (string.includes("?flag player ") == true) {
		var check = string.split(`?flag player `).pop().split(`;`)[0];
		if (data.player.flags.includes(check) != true) {
			finalResult = false;
		}
		string = string.replace(`?flag player `+check+`;`, ``);
	}
	while (string.includes("!flag player ") == true) {
		var check = string.split(`!flag player `).pop().split(`;`)[0];
		if (data.player.flags.includes(check) == true) {
			finalResult = false;
		}
		string = string.replace(`!flag player `+check+`;`, ``);
	}
	for (characterIndex = 0; characterIndex < data.story.length; characterIndex++) {
		var corruptionTarget = data.story[characterIndex].index;
		//console.log(corruptionTarget);
		while (string.includes("?trust "+corruptionTarget) == true) {
			var check = string.split(`?trust `+corruptionTarget+` `).pop().split(`;`)[0];
			if (checkTrust(corruptionTarget) != check) {
				finalResult = false;
			}
			string = string.replace(`?trust `+corruptionTarget+` `+check+`;`, ``);
		}
		while (string.includes("?minTrust "+corruptionTarget) == true) {
			var check = string.split(`?minTrust `+corruptionTarget+` `).pop().split(`;`)[0];
			if (checkTrust(corruptionTarget) < check) {
				finalResult = false;
			}
			string = string.replace(`?minTrust `+corruptionTarget+` `+check+`;`, ``);
		}
		while (string.includes("?maxTrust "+corruptionTarget) == true) {
			var check = string.split(`?maxTrust `+corruptionTarget+` `).pop().split(`;`)[0];
			if (checkTrust(corruptionTarget) > check) {
				finalResult = false;
			}
			string = string.replace(`?maxTrust `+corruptionTarget+` `+check+`;`, ``);
		}
		while (string.includes("?trustMin "+corruptionTarget) == true) {
			var check = string.split(`?trustMin `+corruptionTarget+` `).pop().split(`;`)[0];
			if (checkTrust(corruptionTarget) < check) {
				finalResult = false;
			}
			string = string.replace(`?trustMin `+corruptionTarget+` `+check+`;`, ``);
		}
		while (string.includes("?trustMax "+corruptionTarget) == true) {
			var check = string.split(`?trustMax `+corruptionTarget+` `).pop().split(`;`)[0];
			if (checkTrust(corruptionTarget) > check) {
				finalResult = false;
			}
			string = string.replace(`?trustMax `+corruptionTarget+` `+check+`;`, ``);
		}
		while (string.includes("!flag "+corruptionTarget) == true) {
			var check = string.split(`!flag `+corruptionTarget+` `).pop().split(`;`)[0];
			if (checkFlag(corruptionTarget, check) == true) {
				finalResult = false;
			}
			string = string.replace(`!flag `+corruptionTarget+` `+check+`;`, ``);
		}
		while (string.includes("?flag "+corruptionTarget) == true) {
			var check = string.split(`?flag `+corruptionTarget+` `).pop().split(`;`)[0];
			if (checkFlag(corruptionTarget, check) != true) {
				finalResult = false;
			}
			string = string.replace(`?flag `+corruptionTarget+` `+check+`;`, ``);
		}
	}
	if (finalResult == true) {
		return true;
	}
	else {
		return false;
	}
}

function cullRequirements(string) {
	while (string.includes("!location ") == true) {
		var check = string.split(`!location `).pop().split(`;`)[0];
		string = string.replace(`!location `+check+`;`, ``);
	}
	while (string.includes("?location ") == true) {
		var check = string.split(`?location `).pop().split(`;`)[0];
		string = string.replace(`?location `+check+`;`, ``);
	}
	while (string.includes("!item ") == true) {
		var check = string.split(`!item `).pop().split(`;`)[0];
		string = string.replace(`!item `+check+`;`, ``);
	}
	while (string.includes("?item ") == true) {
		var check = string.split(`?item `).pop().split(`;`)[0];
		string = string.replace(`?item `+check+`;`, ``);
	}
	while (string.includes("!hypnosis ") == true) {
		var check = string.split(`!hypnosis `).pop().split(`;`)[0];
		string = string.replace(`!hypnosis `+check+`;`, ``);
	}
	while (string.includes("?hypnosis ") == true) {
		var check = string.split(`?hypnosis `).pop().split(`;`)[0];
		string = string.replace(`?hypnosis `+check+`;`, ``);
	}
	while (string.includes("!hacking ") == true) {
		var check = string.split(`!hacking `).pop().split(`;`)[0];
		string = string.replace(`!hacking `+check+`;`, ``);
	}
	while (string.includes("?hacking ") == true) {
		var check = string.split(`?hacking `).pop().split(`;`)[0];
		string = string.replace(`?hacking `+check+`;`, ``);
	}
	while (string.includes("!counseling ") == true) {
		var check = string.split(`!counseling `).pop().split(`;`)[0];
		string = string.replace(`!counseling `+check+`;`, ``);
	}
	while (string.includes("?counseling ") == true) {
		var check = string.split(`?counseling `).pop().split(`;`)[0];
		string = string.replace(`?counseling `+check+`;`, ``);
	}
	while (string.includes("!time ") == true) {
		var check = string.split(`!time `).pop().split(`;`)[0];
		string = string.replace(`!time `+check+`;`, ``);
	}
	while (string.includes("?time ") == true) {
		var check = string.split(`?time `).pop().split(`;`)[0];
		string = string.replace(`?time `+check+`;`, ``);
	}
	while (string.includes("?flag player ") == true) {
		var check = string.split(`?flag player `).pop().split(`;`)[0];
		string = string.replace(`?flag player `+check+`;`, ``);
	}
	while (string.includes("!flag player ") == true) {
		var check = string.split(`!flag player `).pop().split(`;`)[0];
		string = string.replace(`!flag player `+check+`;`, ``);
	}
	while (string.includes("?parity") == true) {
		var check = string.split(`?parity `).pop().split(`;`)[0];
		string = string.replace(`?parity `+check+`;`, ``);
	}
	while (string.includes("?gender") == true) {
		var check = string.split(`?gender `).pop().split(`;`)[0];
		string = string.replace(`?gender `+check+`;`, ``);
	}
	for (characterIndex = 0; characterIndex < data.story.length; characterIndex++) {
		var corruptionTarget = data.story[characterIndex].index;
		while (string.includes("?trust "+corruptionTarget) == true) {
			var check = string.split(`?trust `+corruptionTarget+` `).pop().split(`;`)[0];
			string = string.replace(`?trust `+corruptionTarget+` `+check+`;`, ``);
		}
		while (string.includes("?minTrust "+corruptionTarget) == true) {
			var check = string.split(`?minTrust `+corruptionTarget+` `).pop().split(`;`)[0];
			string = string.replace(`?minTrust `+corruptionTarget+` `+check+`;`, ``);
		}
		while (string.includes("?maxTrust "+corruptionTarget) == true) {
			var check = string.split(`?maxTrust `+corruptionTarget+` `).pop().split(`;`)[0];
			string = string.replace(`?maxTrust `+corruptionTarget+` `+check+`;`, ``);
		}
		while (string.includes("?trustMin "+corruptionTarget) == true) {
			var check = string.split(`?trustMin `+corruptionTarget+` `).pop().split(`;`)[0];
			string = string.replace(`?trustMin `+corruptionTarget+` `+check+`;`, ``);
		}
		while (string.includes("?trustMax "+corruptionTarget) == true) {
			var check = string.split(`?trustMax `+corruptionTarget+` `).pop().split(`;`)[0];
			string = string.replace(`?trustMax `+corruptionTarget+` `+check+`;`, ``);
		}
		while (string.includes("!flag "+corruptionTarget) == true) {
			var check = string.split(`!flag `+corruptionTarget+` `).pop().split(`;`)[0];
			string = string.replace(`!flag `+corruptionTarget+` `+check+`;`, ``);
		}
		while (string.includes("?flag "+corruptionTarget) == true) {
			var check = string.split(`?flag `+corruptionTarget+` `).pop().split(`;`)[0];
			string = string.replace(`?flag `+corruptionTarget+` `+check+`;`, ``);
		}
	}
	return string;
}

function changeLocation(n) {
	document.getElementById('output').innerHTML = ``;
	var locationTarget = 'failed';
	for (i = 0; i < locationArray.length; i++) { //find the location target
		if (n == locationArray[i].index) {
			console.log('Location target found. Now loading location '+locationArray[i].index)
			locationTarget = i;
		}
	}
	if (locationTarget == 'failed') { //error message;
		document.getElementById('output').innerHTML = '';
		writeText("You encountered a bug! Error code: locationTargetFailed - "+n);
		writeText("Send me a message with where you were and what button you clicked on, thanks!");
		writeFunction("changeLocation('homePlayerRoom')", "Go Back Home");
	}
	else {
		var bg = "scripts/gamefiles/locations/" + locationArray[locationTarget].index + ".jpg";
		changeBG(locationArray[locationTarget].bg);
		if (data.player.time == "Night" && data.player.location != "homePlayerRoom") {
			n = 'homePlayerRoom';
		}
		document.getElementById('output').innerHTML += `
			<div class="playerRoom">
				<img class="backgroundPicture" src="`+bg+`" usemap="#roomMap">
			</div>
		`;
		data.player.location = n;
		//console.log(data.player.location);
		for (i = 0; i < locationArray[locationTarget].buttons.length; i++) {
			if (locationArray[locationTarget].buttons[i].time.includes(data.player.time)) {
				printFunctionButton(
					"location",
					locationArray[locationTarget].buttons[i].name, 
					locationArray[locationTarget].buttons[i].top, 
					locationArray[locationTarget].buttons[i].left, 
					locationArray[locationTarget].buttons[i].target, 
				);
			}
		}
		checkForEncounters();
		writeScene(n);
	}
	saveSlot(10);
}

function changeBG(n) {
	document.getElementById('wrapperBG').style.backgroundImage = "url("+n+")";
}

function printFunctionButton(type, name, top, left, target) {
	switch (type) {
		case "location": {
			var func = `changeLocation("`;
			break;
		}
		case "encounter": {
			var func = `sceneTransition("`;
			break;
		}
	}
	switch (data.player.menu) {
		case "lobotomy": {
			document.getElementsByClassName('playerRoom')[0].innerHTML += `
				<div class="pictureButton" onclick='`+func+target+`")'
				style="top: `+top+`%; left: `+left+`%; max-width: 30%; border: 3px solid; border-radius: 0px;">`+name+`</div>
			`;
			break;
		}
		case "persona": {
			var ransomStringStart = name;
			ransomStringStart = ransomStringStart.toLowerCase();
			ransomStringStart = ransomStringStart.charAt(0).toUpperCase() + ransomStringStart.slice(1);
			console.log(ransomStringStart);
			var ransomStringEnd = "";
			if (ransomStringStart.charAt(2) == "g" || ransomStringStart.charAt(2) == "v") {
				for (var ransomCounter = 0; ransomCounter < ransomStringStart.length; ransomCounter++) {
					switch (ransomCounter) {
						case 0:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: skew(5deg, 0deg);";
						break;
						case 1:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "";
						break;
						case 2:
							var ransomFont = "font-family: times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "";
						break;
						case 3:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "-webkit-transform: skew(-5deg, 0deg);";
						break;
						case 4:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: scale(1.4);";
						break;
						case 5:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: rotate(15deg);";
						break;
						case 6:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: scale(1.4);";
						break;
						case 7:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: rotate(5deg);";
						break;
						case 10:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "";
						break;
						case 11:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "-webkit-transform: skew(-5deg, 0deg);";
						break;
						default:
							var ransomFont = "font-family: times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "";
						break;
					}
					console.log('replacing menu character' + ransomCounter + ' with the style of ' + ransomFont+ransomBG+ransomColor);
					console.log(ransomStringEnd);
					ransomStringEnd += "<span style='display:inline-block;white-space:pre;"+ransomFont+ransomBG+ransomColor+ransomRotate+"'>"+ransomStringStart.charAt(ransomCounter)+"</span>";
				}
			}
			else {
				for (var ransomCounter = 0; ransomCounter < ransomStringStart.length; ransomCounter++) {
					switch (ransomCounter) {
						case 0:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "";
						break;
						case 1:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "-webkit-transform: skew(5deg, 0deg);";
						break;
						case 2:
							var ransomFont = "font-family: times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: scale(1.4);";
						break;
						case 3:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: skew(-5deg, 0deg);";
						break;
						case 4:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: rotate(15deg);";
						break;
						case 5:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "";
						break;
						case 6:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: skew(5deg, 0deg);";
						break;
						case 7:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: rotate(-15deg);";
						break;
						case 10:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "";
						break;
						case 11:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "-webkit-transform: skew(-5deg, 0deg);";
						break;
						default:
							var ransomFont = "font-family: times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "";
						break;
					}
					//console.log('replacing menu character' + ransomCounter + ' with the style of ' + ransomFont+ransomBG+ransomColor);
					//console.log(ransomStringEnd);
						ransomStringEnd += "<span style='display:inline-block;white-space:pre;"+ransomFont+ransomBG+ransomColor+ransomRotate+"'>"+ransomStringStart.charAt(ransomCounter)+"</span>";
				}
			}
			document.getElementsByClassName('playerRoom')[0].innerHTML += `
				<div class="pictureButtonPersona" onclick='`+func+target+`")'
				style="top: `+top+`%; left: `+left+`%; max-width: 30%;">`+ransomStringEnd+`</div>
			`;
			break;
		}
		default: {
			document.getElementsByClassName('playerRoom')[0].innerHTML += `
				<div class="pictureButton" onclick='`+func+target+`")'
				style="top: `+top+`%; left: `+left+`%; max-width: 30%;">`+replaceCodenames(name)+`</div>
			`;
		}
	}
}

function checkForEncounters() {
	for (encounterIndex = 0; encounterIndex < encounterArray.length; encounterIndex++) {
		console.log(encounterArray[encounterIndex].requirements);
		var requirements = checkRequirements(encounterArray[encounterIndex].requirements);
		if (requirements != false) {
			console.log(requirements);
			switch (encounterArray[encounterIndex].type) {
				case "button": {
					printFunctionButton(
					"encounter",
					encounterArray[encounterIndex].text, 
					encounterArray[encounterIndex].top, 
					encounterArray[encounterIndex].left, 
					encounterArray[encounterIndex].index
					);
					break;
				}
				case "message": {
					writeText(encounterArray[encounterIndex].text);
					break;
				}
				default: {
					printEncounterTab(
					encounterArray[encounterIndex].character, 
					encounterArray[encounterIndex].index,
					encounterArray[encounterIndex].text,
					encounterArray[encounterIndex].altName,
					encounterArray[encounterIndex].altImage,
					encounterArray[encounterIndex].altColor
					);
				}
			}
		}
	}
}

function printEncounterTab(character, scene, text, altName, altImage, altColor) {
	console.log("Now generating tab for " + character + ", linking to scene " + scene + " with the text " + text + " " +altImage);
	writeSpeech(character, altImage, `
	<p class="switch" onclick="sceneTransition('`+scene+`')">` + replaceCodenames(text) + `</p>`,
	altName, altColor);
}

function writeHTML(text) {
	//Separate the text into lines
	var lines = text.split('\n');
	//For each of these lines
	for(var lineCounter = 0;lineCounter < lines.length;lineCounter++){
		//Remove all tabs from the line, in case we use tab spacing
		while (lines[lineCounter].includes('\t') == true) {
			lines[lineCounter] = lines[lineCounter].replace(`\t`, ``);
		}
		//Check for requirements
		var requirements = checkRequirements(lines[lineCounter]);
		//If the line is not empty (we don't want to print empty lines)
		if (lines[lineCounter] != "" && requirements != false) {
			//Grab the first word of the line to use as the command
			var command = lines[lineCounter].replace(/ .*/,"");
			//Depending on which command, execute different code. Convert the command to lowercase as well in case we used Sp instead of sp, as js is case-sensitive.
			switch (command.toLowerCase()) {
				//If the command is "t"
				case "t": {
					//Remove the command from the line we actually want to print.
					lines[lineCounter] = lines[lineCounter].replace(command+` `, ``);
					//Execute the writeText command to print everything left to the screen.
					writeText(cullRequirements(lines[lineCounter]));
					//Don't execute any of the below switch cases.
					break;
				}
				case "sp": {
					//Get the name of our speaker
					var name = lines[lineCounter].split(command+` `).pop().split(`;`)[0];
					//If "; im" is in our code we want to specify a specific profile image, so use that. Otherwise set the image variable blank so it can be automatically found.
					if (lines[lineCounter].includes("; im")) {
						var image = lines[lineCounter].split(`im `).pop().split(`;`)[0];
						lines[lineCounter] = lines[lineCounter].replace(`im `+image+`; `, ``);
					}
					else {
						var image = "";
					}
					//If "; altName" is in our code we want to use an alternate name for the character, so use that. Otherwise set the altName variable blank.
					if (lines[lineCounter].includes("; altName")) {
						var altName = lines[lineCounter].split(`altName `).pop().split(`;`)[0];
						lines[lineCounter] = lines[lineCounter].replace(`altName `+altName+`; `, ``);
					}
					else {
						var altName = "";
					}
					//If "; altColor" is in our code we want to specify a specific color for the character, so use that. Otherwise set the altColor variable blank.
					if (lines[lineCounter].includes("; altColor")) {
						var altColor = lines[lineCounter].split(`altColor `).pop().split(`;`)[0];
						lines[lineCounter] = lines[lineCounter].replace(`altColor `+altColor+`; `, ``);
					}
					else {
						var altColor = "";
					}
					//Remove the command from the line we actually want to print.
					lines[lineCounter] = lines[lineCounter].replace(command+` `+name+`; `, ``);
					//Execute the writeSpeech command to print everything we have left.
					//TODO: Add custom colors and custom names
					writeSpeech(name, image, cullRequirements(lines[lineCounter]), altName, altColor);
					break;
				}
				case "im": {
					//Get the location of the image
					var location = lines[lineCounter].split(command+` `).pop().split(`;`)[0];
					//If "; cap" is in our code we want to attach a caption to our image. Otherwise leave the caption blank.
					if (lines[lineCounter].includes("; cap")) {
						var caption = lines[lineCounter].split(`cap `).pop().split(`;`)[0];
					}
					else {
						var caption = "";
					}
					//Bring up the image on screen. Since we aren't printing the line itself we don't need to clean it by removing commands.
					writeBig(location, caption);
					break;
				}
				case "b": {
					//Get the label of our button
					var name = lines[lineCounter].split(`b `).pop().split(`;`)[0];
					//Get the function we want our button to perform
					var func = lines[lineCounter].split(`f `).pop().split(`;`)[0];
					//If "; arg" is in our code we want the function to have a special argument. Otherwise leave the argument section blank.
					if (lines[lineCounter].includes("; arg")) {
						var argument = lines[lineCounter].split(`arg `).pop().split(`;`)[0];
					}
					else {
						var argument = "";
					}
					//Write the button to the screen using the information we've collected.
					writeFunction(func+"('"+argument+"')", name)
					break;
				}
				//This is for convenience. If the line is just an elipses, replace it with a horizontal line cutting across the screen.
				case "...": {
					writeText("<hr>");
					break;
				}
				//If the command isn't found in the list above then the code can't be parsed (understood), print an error code in red.
				default: {
					writeText("<span style='color:red'>Unknown command. The line '"+lines[lineCounter]+"' could not be parsed.");
				}
			}
		}
	}
}

function writeText(text) {
	if (text == "...") {
		text = "<hr>";
	}
	switch (data.player.style) {
		case "lobotomy": {
			document.getElementById('output').innerHTML += `
				<p class='rawText' style='
				margin: 30px 0;
				font-size: 1.3em;
				font-family: railway, times new roman, sans-serif;
				font-style: normal;
				'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		case "royalty": {
			document.getElementById('output').innerHTML += `
				<p class='rawText' style='
				margin: 20px 200px;
				font-size: 1.3em;
				font-family: arial, times new roman, sans-serif;
				'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		case "persona": {
			document.getElementById('output').innerHTML += `
				<p class='rawText' style='
				margin: 30px 0;
				font-size: 1.3em;
				font-family: arial, times new roman, sans-serif;
				'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		default: {
			document.getElementById('output').innerHTML += `
				<p class='rawText'>` + replaceCodenames(text) + `</p>
			`;
		}
	}
}

function writeCenteredText(text) {
	if (text == "...") {
		text = "<hr>";
	}
	switch (data.player.style) {
		case "lobotomy": {
			document.getElementById('output').innerHTML += `
				<p class='centeredText' style='
				margin: 30px 0;
				font-size: 1.3em;
				font-family: railway, times new roman, sans-serif;
				font-style: normal;
				'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		case "royalty": {
			document.getElementById('output').innerHTML += `
				<p class='centeredText' style='
				margin: 20px 200px;
				font-size: 1.3em;
				font-family: arial, times new roman, sans-serif;
				'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		case "persona": {
			document.getElementById('output').innerHTML += `
				<p class='centeredText' style='
				margin: 30px 0;
				font-size: 1.3em;
				font-family: arial, times new roman, sans-serif;
				'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		default: {
			document.getElementById('output').innerHTML += `
				<p class='centeredText'>` + replaceCodenames(text) + `</p>
			`;
		}
	}
}

function writeSpecial (text) {
	document.getElementById('output').innerHTML += `
		<p class = "specialText">` + replaceCodenames(text) + `</p>
	`;
}

function writeSpeech (name, img, text, altName, altColor) {
	var finalName = "";
	var finalImg = "";
	var finalColor = "";
	var checkForError = "";
	//If the player is using a shortcut...
	//Check for pervert mode
	if (data.player.pervert == true) {
		var checkForError = `onerror ="javascript:this.src='images/`+name+`/`+name+`P.jpg'"`;
		finalImg = finalImg.replace('.jpg', 'P.jpg');
	}
	//Check if a transparent shot should be used
	if (data.player.style == "persona" || data.player.style == "royalty") {
		var checkForError = `onerror ="javascript:this.src='images/`+name+`/`+name+`.jpg'"`;
		finalImg = finalImg.replace('P.jpg', '.jpg');
		finalImg = finalImg.replace('.jpg', 'T.png');
	}
	//Search the data variable for if a shortcut was used
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == name) {
			finalName = data.story[i].name;
			if (img == "") {
				finalImg = "scripts/gamefiles/profiles/"+name+data.story[i].outfit+".jpg";
			}
			else {
				finalImg = img;
			}
		}
	}
	for (i = 0; i < logbookArray.length; i++) {
		if (logbookArray[i].index == name) {
			finalColor = logbookArray[i].color;
		}
	}
	//If the name is player, use the player's details
	if (name == "player") {
		finalImg = "scripts/gamefiles/profiles/" + data.player.body + data.player.image +".jpg";
		finalName = data.player.name;
		switch (data.player.color) {
			case null:
			case "":
			data.player.color = "#86b4dc"
			default:
			finalColor = data.player.color;
		}
	}
	if (img == "none") {
		finalImg = "images/none.png";
	}
	//HIDDEN shortcut for crypto to mask the name of the character
	if (text.includes("HIDDEN") == true) {
		finalName = "???";
		text = text.replace("HIDDEN", "");
	}
	//Check if an alternate final color should be used.
	if (altColor != null && altColor != "") {
		finalColor = altColor;
	}
	//Check if an alternate final name should be used.
	if (altName != null && altName != "") {
		finalName = altName;
	}
	console.log("Now printing speech. Character is "+finalName+", color is"+finalColor+", image is "+finalImg);
	//Output the speech in the assigned style.
	switch (data.style.dialogue) {
		case "lobotomy": {
			document.getElementById('output').innerHTML += `
			<div class="textBoxLobotomy" style="border-color: `+finalColor+`;
			background: linear-gradient(90deg, 
			#000000 10px, 
			`+finalColor+` 10px, 
			`+finalColor+` 210px, 
			#000000 210px);">
				<div class = "lobotomyThumb" style="background-color: `+finalColor+`">
					<div class = "lobotomyThumbBorder">
						<img class = "textThumbLobotomy" src = "
							`+ finalImg +`
						"`+checkForError+`>
					</div>
					<p class = "textNameLobotomy">`+ finalName + `</p>
				</div>
				<div class="textBoxContentLobotomy">
				<p>` + replaceCodenames(text) + `</p>
			</div>
			<br>
			`;
			break;
		}
		case "royalty": {
			document.getElementById('output').innerHTML += `
			<div class="textBoxRoyalty">
				<div class = "royaltyThumb">
					<div class = "royaltyImageHolder">
						<img class = "textThumbRoyalty" style="
							position:absolute;
							-webkit-filter: drop-shadow(2px 2px 0 `+finalColor+`)
							drop-shadow(-2px -2px 0 `+finalColor+`);
							filter: drop-shadow(2px 2px 0 `+finalColor+`)
							drop-shadow(-2px -2px 0 `+finalColor+`);"
						src = "`+finalImg+`"`+checkForError+`>
						<img class = "textThumbRoyalty" src = "`+finalImg+`"`+checkForError+`>
					</div>
					<div class="nameBoxRoyalty" style = "border-color:`+finalColor+`;">
						<p class = "textNameRoyalty" style = "color:`+finalColor+`;">`+finalName+`</p>
					</div>
				</div>
				<div class="textBoxContentRoyalty">
					<div class="dialogueBoxRoyalty" style = "border-color:`+finalColor+`">
						<p>` + replaceCodenames(text) + `</p>
					</div>
				</div>
			<br>
			`;
			break;
		}
		case "persona": {
			document.getElementById('output').innerHTML += `
			<div class="textBoxPersona">
				<div class = "personaThumb">
					<img class = "textThumbPersona" src = "`+finalImg+`"`+checkForError+`>
				</div>
				<div class="textBoxContentPersona">
					<div class="nameBoxPersona">
						<p class = "textNamePersona" style = "color:`+finalColor+`">`+ finalName + `</p>
						<div class="textNamePersonaWhite" style = "border-color:`+finalColor+`"></div>
						<div class="textNamePersonaBlack"></div>
						<div class="personaNameArrow"></div>
						<div class="personaNameArrowShadow" style = "border-right-color:`+finalColor+`"></div>
					</div>
					<div class="dialogueBoxPersona" style = "border-color:`+finalColor+`">
						<p>` + replaceCodenames(text) + `</p>
					</div>
				</div>
			<br>
			`;
			break;
		}
		default: {
			document.getElementById('output').innerHTML +=`
			<div class="textBox" style="border-color: `+finalColor+`">
				<img class = "textThumb" style="box-shadow: -5px 5px `+finalColor+`" src = "
					`+ finalImg +`
				"`+checkForError+`>
				<div class="textBoxContent">
				<p class = "textName" style="color:`+finalColor+`">`+ finalName + `</p>
				<p>` + replaceCodenames(text) + `</p>
			</div>
			<br>
			`;
		}
	}
}

function writeBig (img, cap) {
	if (img.includes('profile') == true) {
		if (data.player.pervert != true) {
			var checkForError = "";
			var pervertImage = img;
		}
		else {
			var backupImage = img;
			var checkForError = `onerror ="javascript:this.src='`+backupImage+`'"`;
			img = img.replace('profile', 'profileP');
			//console.log(img);
		}
	}
	if (picturesDisabled != true) {
		document.getElementById('output').innerHTML += `
			<img class="bigPicture" src="` + img + `"`+checkForError+` title="` + cap + `">
			<br>
		`;
	}
}

function writeMed (img, cap) {
	if (img.includes('profile') == true) {
		if (data.player.pervert != true) {
			var checkForError = "";
			var pervertImage = img;
		}
		else {
			var backupImage = img;
			var checkForError = `onerror ="javascript:this.src='`+backupImage+`'"`;
			img = img.replace('profile', 'profileP');
			//console.log(img);
		}
	}
	if (picturesDisabled != true) {
		document.getElementById('output').innerHTML += `
			<img class="medPicture" src="` + img + `"`+checkForError+` title="` + cap + `">
			<br>
		`;
	}
}

function writeFunction (name, func) {
	console.log("printing button labelled "+func+" that onclick triggers "+name);
	switch (data.style.choices) {
		case "lobotomy": {
			var skewNumber = getRandomInt(8);
			skewNumber -= 4;
			var borderNumber = getRandomInt(2) + 3;
			var rotationNumber = getRandomInt(2) -1;
			if (skewNumber >= 0) {
				skewNumber += getRandomInt(3);
			}
			if (skewNumber <= 0) {
				skewNumber -= getRandomInt(3);
			}
			var reverseSkew = skewNumber - skewNumber - skewNumber;
			var rotationReverse = rotationNumber - rotationNumber - rotationNumber;
			console.log('skewnumber is ' +skewNumber + ' rotationnumber is '+ rotationNumber);
			document.getElementById('output').innerHTML += `
			<div class="choiceFrameLobotomy" 
			style ="
				-moz-transform: skew(`+skewNumber+`deg, 0deg);
				-webkit-transform: skew(`+skewNumber+`deg, 0deg);
				-o-transform: skew(`+skewNumber+`deg, 0deg);
				-ms-transform: skew(`+skewNumber+`deg, 0deg);
				transform: skew(`+skewNumber+`deg, 0deg);
				border: solid `+borderNumber+`px;
			">
			<p class="choiceTextLobotomy" 
			style ="
				-moz-transform: skew(`+reverseSkew+`deg, 0deg);
				-webkit-transform: skew(`+reverseSkew+`deg, 0deg);
				-o-transform: skew(`+reverseSkew+`deg, 0deg);
				-ms-transform: skew(`+reverseSkew+`deg, 0deg);
				transform: skew(`+reverseSkew+`deg, 0deg);
			" 
			onclick="` + name + `">
				` + replaceCodenames(func) + `
			</p>
			</div>
			`;
			break;
		}
		case "persona": {
			var skewNumber = 5;
			var reverseSkew = skewNumber - skewNumber - skewNumber;
			console.log('skewnumber is ' +skewNumber + ' rotationnumber is '+ rotationNumber);
			document.getElementById('output').innerHTML += `
			<div class="choiceFramePersona" onclick="` + name + `"
			style ="
				-moz-transform: skew(`+skewNumber+`deg, 0deg);
				-webkit-transform: skew(`+skewNumber+`deg, 0deg);
				-o-transform: skew(`+skewNumber+`deg, 0deg);
				-ms-transform: skew(`+skewNumber+`deg, 0deg);
				transform: skew(`+skewNumber+`deg, 0deg);
			">
			<p class="choiceTextPersona" 
			style ="
				-moz-transform: skew(`+reverseSkew+`deg, 0deg);
				-webkit-transform: skew(`+reverseSkew+`deg, 0deg);
				-o-transform: skew(`+reverseSkew+`deg, 0deg);
				-ms-transform: skew(`+reverseSkew+`deg, 0deg);
				transform: skew(`+reverseSkew+`deg, 0deg);
			" 
			>
				` + replaceCodenames(func) + `
			</p>
			</div>
			`;
			break;
		}
		default: {
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="` + name + `">
					` + replaceCodenames(func) + `
				</p>
			`;
		}
	}
}

function writeTransition(target, name) {
	writeFunction("sceneTransition('"+target+"')", name);
}

function writeAddendum(n) {
	console.log(n);
	var paras = document.getElementsByClassName('choiceText');
	while(paras[0] != null) {
		paras[0].parentNode.removeChild(paras[0]);
	}
	writeScene(n);
}

function credits() {
	
}

function sceneTransition(scene) {
	wrapper.scrollTop = 0;
	updateMenu();
	document.getElementById('output').innerHTML = '';
	tempScene = scene;
	writeScene(scene);
	data.player.currentScene = scene;
	saveSlot(10);
}

//Creating & Deleting windows

function deleteWindow() {
	activeWindow = "";
	document.getElementById('windowHolder').innerHTML = ``;
}

function generateWindow(type) {
	activeWindow = type;
	document.getElementById('windowHolder').innerHTML = `
	<div class = 'windowBackdrop' onclick = 'deleteWindow()'>
		<div id = 'window' class = 'popup' onclick="event.stopPropagation()"></div>
	</div>
	`;
	switch (type) {
		case "string": {
			document.getElementById('window').innerHTML += `
			<h1 class = "windowTitle" onclick="deleteWindow()">SAVE/LOAD</h1>
			<div id = "windowList" class="saveList">
			<p>Copy the full length below and paste it into the input box when you want to load the data. I recommend copying to a txt file.</p>
			<p>`+JSON.stringify(data)+`</p>
			<p class="choiceText" onclick="generateWindow('save')">
				Finished copying
			</p>
			</div>`;
			break;
		}
		case "save": {
			document.getElementById('window').innerHTML += `
				<h1 class = "windowTitle" onclick="deleteWindow()">SAVE/LOAD</h1>
				<div id = "windowList" class="saveList">
				</div>
			`;
			for (saveCounter = 1; saveCounter < 9; saveCounter++) {
				document.getElementById('windowList').innerHTML += `
				<div class = "saveSlot">
					<p id = "save`+saveCounter+`Name" class = "saveName">Slot `+saveCounter+`</p>
					<p id = "save`+saveCounter+`Date" class = "saveDate"></p>
					<p id = "load`+saveCounter+`Button" class = "loadButton button" onclick = "loadSlot(`+saveCounter+`)"></p>
					<p id = "delete`+saveCounter+`Button" class = "deleteButton button" onclick = "deleteSlot`+saveCounter+`)"></p>
					<p id = "save`+saveCounter+`Button" class = "saveButton button" onclick = "saveSlot(`+saveCounter+`)">SAVE</p>
				</div>
				`;
			}
			document.getElementById('windowList').innerHTML += `
				<div class = "saveSlot">
					<p id = "save9Name" class = "saveName">Manual</p>
					<!-- <p id = "load9Button" class = "loadFileButton button" onclick = "loadFile()">Load from text string</p>
					<!-- <p id = "delete9Button" class = "deleteButton button" onclick = "deleteSlot(9)"></p> -->
					<!-- <p id = "save9Button" class = "saveFileButton button" onclick = "saveFile()">Save to text string</p> -->
					<p id = "save9Button" class = "saveFileButton button" onclick = "saveToFile()">Save to .txt file</p>
					<input type="file" id="loadFile" onload="fileLoaded()" class = "loadFileButton button" onchange = "loadSave()"></input>
				</div>
				<div class = "saveSlot">
					<p id = "save9Name" class = "saveName">String</p>
					<p id = "load9Button" class = "loadFileButton button" onclick = "loadString()">Load from text string</p>
					<!-- <p id = "delete9Button" class = "deleteButton button" onclick = "deleteSlot(9)"></p> -->
					<p id = "save9Button" class = "saveFileButton button" onclick = "saveString()">Save to text string</p>
				</div>
				<div class = "saveSlot">
					<p id = "save9Name" class = "saveName">Auto</p>
					<p class = "loadFileButton button" onClick="window.location.reload();">The game autosaves regularly. Refresh the page to load the autosave anytime.</p>
				</div>
			`;
			generateSave();
			break;
		}
		case "inventory": {
			document.getElementById('window').innerHTML += `
				<h1 class = "windowTitle" onclick="deleteWindow()">Inventory</h1>
				<div id = "gridInventory" class="gridInventory">
				</div>
			`;
			for (i = 0; i < data.inventory.length; i++) {
				if (data.inventory[i].type.includes("clothes") != true) {
					document.getElementById('gridInventory').innerHTML += `
					<div class = "item">
						<p class = "itemName">`+data.inventory[i].name+`</p>
						<img class ="itemImage" src="scripts/gamefiles/items/`+data.inventory[i].index+`.jpg">
					<div>
					`;
				}
			}
			break;
		}
		case "logbook": {
			document.getElementById('window').innerHTML += `
				<h1 class = "windowTitle" onclick="deleteWindow()">LOGBOOK</h1>
				<div class = "windowLeft" id = "windowLeft">
				</div>
				<div class = "windowRight" id = "windowRight">
				</div>
			`;
			generateNav();
			break;
		}
		case "settings": {
			document.getElementById('window').innerHTML += `
				<h1 class = "windowTitle" onclick="deleteWindow()">SETTINGS</h1>
				<div class = "windowLeft" id = "windowLeft">
				</div>
				<div class = "windowRight" id = "windowRight">
				</div>
			`;
			break;
		}
		case "wardrobe": {
			document.getElementById('window').innerHTML += `
				<h1 class = "windowTitle" onclick="deleteWindow()">Inventory</h1>
				<div id = "gridInventory" class="gridInventory">
				</div>
			`;
			var playerBody = data.player.body.charAt(0).toUpperCase() + data.player.body.substring(1);
			for (i = 0; i < data.inventory.length; i++) {
				if (data.inventory[i].type.includes("clothes") && data.inventory[i].type.includes(playerBody)) {
					document.getElementById('gridInventory').innerHTML += `
					<div class = "item" onclick="changeClothes('`+data.inventory[i].index+`')">
						<p class = "itemName">`+data.inventory[i].name+`</p>
						<img class ="itemImage" src="`+data.inventory[i].image+`">
					<div>
					`;
				};
			};
			break;
		}
	}
}

//Menu

function updateMenu() {
	//Update player name, image, color, money
	document.getElementById('playerName').innerHTML = data.player.name;
	document.getElementById('playerMoney').innerHTML = "$" + data.player.money;
	document.getElementById('playerImage').src = "scripts/gamefiles/characters/"+data.player.body+data.player.image+".jpg";
	//document.getElementById('playerClothes').src = "images/clothes/"+data.player.clothing+".jpg";
	//Update corruption listfor (i = 0; i < data.story.length; i++) {
	document.getElementById('corruptionList').innerHTML = `
		<h3 class = "char_player version">Corruption</h3>
	`;
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].name != "???" && data.story[i].trust != 0) {
			document.getElementById('corruptionList').innerHTML += `<p>`+data.story[i].name+`: `+data.story[i].trust+`</p>`;
		}
	}
	//Update menu buttons
	document.getElementById('buttonMenu').innerHTML = `<div id="buttonMenuPrimary" class="gridButtons"></div>`;
	switch (data.style.menu) {
		default: {
			for (i = 0; i < menuArray.length; i++) {
				document.getElementById(menuArray[i].div).innerHTML += `
					<h4 id="`+menuArray[i].ID+`" class="button" onclick="`+menuArray[i].func+`">`+menuArray[i].name+`</h4>
				`;
			}
		}
	}
}

function changeBody(n) {
	data.player.body = n;
	changeImage("");
	switch (n) {
		case "man": 
			data.player.pronoun = "man";
		break;
		case "sissy": 
			data.player.pronoun = "woman";
		break;
		case "trans": 
			data.player.pronoun = "woman";
		break;
	}
}

function changeImage(n) {
	data.player.image = "";
	updateMenu();
	if(document.body.contains(document.getElementById('selfBig'))){
		document.getElementById('selfBig').src = "scripts/gamefiles/characters/"+data.player.body+data.player.image+".jpg";
    }
}

function closeButton() {
	document.getElementById("menu").style.width = "0px";	
	document.getElementById("closeButton").style.visibility = "hidden";	
	document.getElementById("openButton").style.visibility = "visible";	
}

function openButton() {
	document.getElementById("menu").style.width = "35%";	
	document.getElementById("closeButton").style.visibility = "visible";	
	document.getElementById("openButton").style.visibility = "hidden";	
}

//Saving

function saveSlot(slot) {
	saveName = "data" + slot;
	localStorage.setItem(saveName,JSON.stringify(data));
	var date = new Date();
	switch (data.player.route) {
		case "dom": {
			date = date.toDateString() + " " + date.toLocaleTimeString() + "<br>Dom Route";
			if (data.player.flags.includes("vegetarian") == true) {
				date += " (Vegetarian)";
			}
			break;
		}
		case "sub": {
			date = date.toDateString() + " " + date.toLocaleTimeString() + "<br>Sub Route";
			break;
		}
		default: {
			date = date.toDateString() + " " + date.toLocaleTimeString();
			break;
		}
	}
	saveName = "date" + slot;
	localStorage.setItem(saveName,date);
	//deleteWindow();
	if (activeWindow == "save") {
		generateSave();
	}
}

function loadSlot(slot) {
	saveName = "data" + slot;
	data = localStorage.getItem(saveName);
	data = JSON.parse(data);
	console.log("loaded data");
	updateSave();
	if (data.player.location == "") {
		sceneTransition(data.player.currentScene);
	}
	else {
		changeLocation(data.player.location);
	}
	updateSave();
	deleteWindow();
}

function deleteSlot(slot) {
	saveName = "data" + slot;
	localStorage.removeItem(saveName);
	console.log("Saved data");
	saveName = "date" + slot;
	localStorage.removeItem(saveName);
	generateSave();
}

function saveString() {
	deleteWindow();
	generateWindow("string");
}

function loadString() {
	var dataPlaceholder = prompt("Please paste the data", "");
	dataPlaceholder = JSON.parse(dataPlaceholder);
	if (dataPlaceholder == "") {
		alert("Invalid pasted data! If we tried to use this, the game would completely break!");
		loadSlot(111);
	}
	else {
		data = dataPlaceholder;
		updateSave();
		saveSlot(110);
		loadSlot(110);
	}
}

function saveToFile() {
	var date = new Date();
	date = date.toDateString() + " " + date.toLocaleTimeString();
    var textFileAsBlob = new Blob([JSON.stringify(data)], {type:'text/plain'});
    var downloadLink = document.createElement("a");
    downloadLink.download = "HAA "+date+".noodle";
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null)
    {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else
    {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}

//Load from .noodle
const fr = new FileReader();
fr.addEventListener("load", fileLoaded);

function loadSave(){
	console.log("test");
    files = document.getElementById('loadFile').files;
    if(files.length == 0)
        return;
    file = files[0];
    fr.readAsText(file);
}
function fileLoaded(){
    console.log(fr.result);
	var fakedata = fr.result;
	fakedata = JSON.parse(fakedata);
	if (fakedata.player.name == null) {
		alert("Whoa there! I don't think that's a Human Alteration App save file! If it is, be sure to let me (Noodlejacuzzi) know and I'll help you out.");
	}
	else {
		data = fakedata;
		console.log("success!");
		//changeLocation(data.player.location);
	}
}

function generateSave() {
	for (i = 1; i < 9; i++) {
		var searchName = 'data' + i;
		//console.log(localStorage.getItem(searchName));
		if(localStorage.getItem(searchName)) {
			var buttonName = 'load' + i + 'Button';
			document.getElementById(buttonName).innerHTML = "LOAD";
			var buttonName = 'delete' + i + 'Button';
			document.getElementById(buttonName).innerHTML = "DELETE";
			var buttonName = 'save' + i + 'Date';
			var dateName = 'date' + i;
			document.getElementById(buttonName).innerHTML = localStorage.getItem(dateName);
		}
		else {
			var buttonName = 'load' + i + 'Button';
			document.getElementById(buttonName).innerHTML = "";
			var buttonName = 'delete' + i + 'Button';
			document.getElementById(buttonName).innerHTML = "";
			var buttonName = 'save' + i + 'Date';
			document.getElementById(buttonName).innerHTML = "";
		}
	}
}

function updateSave() {
	if (typeof data.story.version == 'undefined') {
		if (typeof data.player.version == 'undefined') {
			if (data.story.route == "sub") {
				data.galleryArray[2].name = "Loving Milk-Tank";
				data.galleryArray[5].name = "Punishment";
				data.galleryArray[6].name = "Tokyo Pop";
				data.galleryArray[6].hint = 'Talk to her after learning about the Tokyo Pop filming and after completing the event "Punishment".'
				data.galleryArray[10].name = "True Romance";
				data.galleryArray[14].hint = 'Corruption level 3. Talk to her during the day with a Plug Pop.'
				data.galleryArray[15].name = "Sounding";
				data.galleryArray[15].hint = 'Corruption level 3. Talk to her during the day with a Stretchy Taffy.'
				data.galleryArray[16].name = "Fisting";
				data.galleryArray[16].hint = 'Corruption level 4. Talk to her during the day.'
				data.galleryArray[24].hint = "Corruption level 3. Talk to her during the day with a Pop Rock.";
				data.galleryArray[25].hint = "Corruption level 4. Talk to her during the day.";
				data.galleryArray[3].name = "REMOVED";
				data.galleryArray.splice(3, 1);
				data.galleryArray.splice(10, 1);
				data.galleryArray.splice(15, 1);
				data.galleryArray.splice(18, 1);
				data.galleryArray.splice(22, 1);
			}
			else {
				data.galleryArray.splice(31, 1);
			}
			data.story.version = 0.7;
			console.log("Updating save to version 0.7");
		}
	}
	if (data.story.version == 0.7) {
		if (data.story.route == "sub") {
			var office4 = {index: 'office4S', name: "Public Punishment", unlocked: false, hint: 'Corruption level 4. Talk to her during the day.'};
			var sister4 = {index: 'sister4S', name: "New Toy", unlocked: false, hint: 'Talk to her after triggering the event "Student Teacher Dynamic".'};
			var sister5 = {index: 'sister5S', name: "Pushing Limits", unlocked: false, hint: 'Talk to her after triggering the event "New Toy".'};
			data.galleryArray.push(office4);
			data.galleryArray.push(sister4);
			data.galleryArray.push(sister5);
			data.story.freeSample = false;
			data.galleryArray[14].name = "Student Teacher Dynamic";
		}
		data.story.version = 0.75;
		console.log("Updating save to version 0.7.5");
	}
	if (data.story.version == 0.75) {
		if (data.story.route == "dom") {
			data.galleryArray.splice(41, 5);
		}
		if (data.story.route == "sub") {
			console.log(data.galleryArray[35].index);
			console.log(data.galleryArray[26].index);
			data.galleryArray.splice(35, 5);
			data.galleryArray.splice(26, 4);
		}
		data.story.version = 0.8;
		console.log("Updating save to version 0.8");
		alert("Older version save data detected. Your save data has been automatically updated for version 0.8");
	}
	if (data.story.version == 0.8) {
		console.log("ver 1.0 save detected, updating");
		var newSaveContainer = {
			player: {
				name: "You",
				body: "male",
				pronoun: "man",
				image: "",
				clothing: "menShorts",
				underwear: "boxers",
				version: 1,
				currentScene: "start",
				location: "",
				time: "Afternoon",
				money: 20,
				route: "dom",
				skill: 0,
				flags: "",
				color: "#86b4dc",
				pervert: false,
			},
			style: {
				dialogue: "basic",
				menu: "basic",
				choices: "basic",
				font: "basic",
				imageSize: 1,
				fontSize: 1,
			},
			story: [
				{index: "mother", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "sister", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "friend", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "teacher", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "chef", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "office", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "exotic", name: "Adriana", trust: 0, outfit: "", flags: "",},
				{index: "clothes", name: "Danny", trust: 0, outfit: "", flags: "",},
				{index: "candy", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "bully", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "evil", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "camboi", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "neighbor", name: "???", trust: 0, outfit: "", flags: "",},
				{index: "doll", name: "???", trust: 0, outfit: "", flags: "",},
			],
			inventory: [],
			gallery: [],
		}
		newSaveContainer.player.name = data.story.name;
		newSaveContainer.player.version = 1.0;
		newSaveContainer.player.currentScene = data.story.currentScene;
		newSaveContainer.player.money = data.story.money;
		newSaveContainer.player.route = data.story.route;
		newSaveContainer.player.skill = data.story.skill;
		newSaveContainer.story[0].name = data.story.motherName;
		newSaveContainer.story[0].trust = data.story.motherScore;
		newSaveContainer.story[1].name = data.story.sisterName;
		newSaveContainer.story[1].trust = data.story.sisterScore;
		newSaveContainer.story[2].name = data.story.friendName;
		newSaveContainer.story[2].trust = data.story.friendScore;
		newSaveContainer.story[3].name = data.story.teacherName;
		newSaveContainer.story[3].trust = data.story.teacherScore;
		newSaveContainer.story[4].name = data.story.chefName;
		newSaveContainer.story[4].trust = data.story.chefScore;
		newSaveContainer.story[5].name = data.story.officeName;
		newSaveContainer.story[5].trust = data.story.officeScore;
		if (data.story.candyVisited == true) {
			newSaveContainer.story[7].name = "Gina";
			newSaveContainer.story[7].outfit = "Gina";
			setTrust('clothes', 1);
		}
		switch (data.story.bodytype) {
			case 0: 
				newSaveContainer.player.body = "";
			break;
			case 1: 
				newSaveContainer.player.body = "male";
				newSaveContainer.player.clothing = "menShorts";
				newSaveContainer.player.underwear = "boxers";
			break;
			case 2: 
				newSaveContainer.player.body = "boi";
				newSaveContainer.player.clothing = "sissy";
				newSaveContainer.player.underwear = "regular5";
			break;
			case 3: 
				newSaveContainer.player.body = "trans";
				newSaveContainer.player.pronoun = "woman";
				newSaveContainer.player.clothing = "blue";
				newSaveContainer.player.underwear = "regular7";
			break;
			case 4: 
				newSaveContainer.player.body = "sub";
				newSaveContainer.player.clothing = "dress";
				newSaveContainer.player.underwear = "panties";
			break;
		}
		if (data.story.popRocks > 0) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "popRocks") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.caramelMelts > 0) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "caramelMelts") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.plugPop > 0) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "plugPop") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.stretchTaffy > 0) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "stretchTaffy") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.fruitGushers > 0) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "fruitGushers") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.vrMachine == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "vrMachine") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.laptop == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "laptop") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.creamer == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "creamer") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.doll == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "doll") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.toy == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "adultToy") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.horse == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "horseToy") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.onahole == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "onahole") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.clothingTicket == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "clothingTicket") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		if (data.story.candyTicket == true) {
			for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
				if (shopArray[itemIndex].index == "candyTicket") {
					var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
					newSaveContainer.inventory.push(addedItem);
				}
			}
		}
		for (oldIndex = 0; oldIndex < data.clothingArray.length; oldIndex++) {
			if (data.clothingArray[oldIndex].owned == true) {
				for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
					if (data.clothingArray[oldIndex].name == shopArray[itemIndex].name) {
						var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
						newSaveContainer.inventory.push(addedItem);
					}
				}
			}
		}
		for (oldIndex = 0; oldIndex < data.underwearArray.length; oldIndex++) {
			if (data.underwearArray[oldIndex].owned == true) {
				for (itemIndex = 0; itemIndex < shopArray.length; itemIndex++) {
					if (data.underwearArray[oldIndex].name == shopArray[itemIndex].name) {
						var addedItem = {type: shopArray[itemIndex].type, index: shopArray[itemIndex].index, name: shopArray[itemIndex].name, desc: shopArray[itemIndex].desc};
						newSaveContainer.inventory.push(addedItem);
					}
				}
			}
		}
		for (oldIndex = 0; oldIndex < data.galleryArray.length; oldIndex++) {
			//console.log("Scene detected. Unlocked status is "+data.galleryArray[oldIndex].unlocked);
			if (data.galleryArray[oldIndex].unlocked == true) {
				for (newIndex = 0; newIndex < galleryArray.length; newIndex++) {
					if (galleryArray[newIndex].index == data.galleryArray[oldIndex].index) {
						var newScene = {index: galleryArray[newIndex].index, name: galleryArray[newIndex].name};
						newSaveContainer.gallery.push(newScene);
					}
				}
			}
		}
		if (data.story.exoticVisited == true) {
			newSaveContainer.player.flags += "exoticVisited";
		}
		if (data.story.clothingVisited == true) {
			newSaveContainer.player.flags += "clothingVisited";
		}
		if (data.story.laptopSetup == true) {
			newSaveContainer.player.flags += "laptopSetup";
		}
		data = newSaveContainer;
	}
}

//Gallery

function generateGallery() {
	//Go through the characters
	for (storyIndex = 0; storyIndex < data.story.length; storyIndex++) {
		//If the character has a name
		if (data.story[storyIndex].name != "???") {
			//Output their image for easier navigation
			writeBig("scripts/gamefiles/characters/"+data.story[storyIndex].index+data.story[storyIndex].outfit+".jpg");
			//Go through the gallery
			for (galleryIndex = 0; galleryIndex < galleryArray.length; galleryIndex++) {
				//If the relevant gallery scene is for the character
				if (galleryArray[galleryIndex].index.includes(data.story[storyIndex].index) == true) {
					if (galleryCheck(galleryArray[galleryIndex].index) == true) {
						console.log("scene found, now printing");
						writeFunction("writeEvent(galleryArray[galleryIndex].index)", galleryArray[galleryIndex].name);
					}
				}
			}
		}
	}
}

function unlockScene(n) {
	var unlockedScene = "";
	for (i = 0; i < galleryArray.length; i++) {
		if (galleryArray[i].index == n) {
			unlockedScene = galleryArray[i];
		}
	}
	if (unlockedScene != "") {
		data.gallery.push(unlockedScene);
		writeSpecial("You unlocked a new scene in the gallery!");
	}
	else {
		console.log("Unlocking error, no scene named "+n+" found.");
	}
}

function galleryCheck(n) {
	for (x = 0; x < data.gallery.length; x++) {
		if (data.gallery[x].index.includes(n)) {
			return true;
			break;
		}
	}
	return false;
}

//Logbook

function generateNav() {
	document.getElementById('windowLeft').innerHTML = ``;
	document.getElementById('windowLeft').innerHTML += `<h3 class = "button" onclick = "switchDesc('player')">` + data.player.name + `</h3>`;
	//Go through the characters
	for (storyIndex = 0; storyIndex < data.story.length; storyIndex++) {
		//If the character has a name
		if (data.story[storyIndex].name != "???") {
			document.getElementById('windowLeft').innerHTML += `<h3 class = "button" onclick = "switchDesc('`+data.story[storyIndex].index+`')">` + data.story[storyIndex].name + `</h3>`;
		}
	}
	switchDesc('player');
}

function switchDesc(n) {
	if (picturesDisabled == true) {
		document.getElementById('windowRight').innerHTML =``;
	}
	else {
		document.getElementById('windowRight').innerHTML = `
			<img id="selfImage" class="selfImage" src="images/none.png">
			<br>
		`;
	}
	//console.log(n);
	if (n == "player") {
		document.getElementById('windowRight').innerHTML += `
			<p class = "selfDesc">
				<span id = "selfBody">BODY DESCRIPTION</span>
				<br> <br>
				<span id = "selfLips">BODY DESCRIPTION</span>
				<br> <br>
				<span id = "selfSkin">BODY DESCRIPTION</span>
				<br> <br>
				<span id = "ifNaked">
				<span id = "selfClothes">BODY DESCRIPTION</span>
					<br> <br>
				<span id = "selfUnderwear">BODY DESCRIPTION</span>
				</span>
				<br> <br>
				<span id = "selfChest">BODY DESCRIPTION</span>
				<br> <br>
				<span id = "selfButt">BODY DESCRIPTION</span>
				<br> <br>
				<span id = "selfJunk">BODY DESCRIPTION</span>
			</p>
		`;
	}
	else {
		document.getElementById('windowRight').innerHTML += `
			<p class = "selfDesc">
				<span id = "otherName">Name: Kendra</span>
				<br> <br>
				<span id = "otherCorruption">Corruption: 0</span>
				<br> <br>
				<span id = "otherStatus">Status: Single Mother</span>
				<br> <br>
				<span id = "otherClothes">Her preferred outfit is a brown sweater-dress that goes down to her thighs.</span>
				<br> <br>
				<span id = "otherChest">She has a pair of large, E-cup breasts.</span>
				<br> <br>
				<span id = "otherJunk">You've only ever managed to catch glimpses of her black underwear.</span>
				<br> <br>
			</p>
		`;
	}
	generateSelf(n);
}

function generateSelf(n) {
	if (n != "player") {
		for (storyIndex = 0; storyIndex < data.story.length; storyIndex++) {
			//If the character has a name
			if (data.story[storyIndex].index == n) {
				var logbookDetailHolder = data.story[storyIndex];
			}
		}
		document.getElementById('otherName').innerHTML = "Name: " +logbookDetailHolder.name;
		document.getElementById('otherCorruption').innerHTML = "Corruption: " +  logbookDetailHolder.trust;
		if (data.player.route == "dom") {
			for (detailIndex = 0; detailIndex < detailDomArray.length; detailIndex++) {
				//If the character has a name
				if (detailDomArray[detailIndex].index == n) {
					var conditionsMet = true;
					if (detailDomArray[detailIndex].requirements.includes("?trust ")) {
						var check = detailDomArray[detailIndex].requirements.split(`?trust `+n+` `).pop().split(`;`)[0];
						//console.log(check);
						if (checkTrust(n) < check) {
							conditionsMet = false;
						}
					}
					if (detailDomArray[detailIndex].requirements.includes("?outfit ")) {
						var check = detailDomArray[detailIndex].requirements.split(`?outfit `).pop().split(`;`)[0];
						//console.log(check);
						if (logbookDetailHolder.outfit != check) {
							conditionsMet = false;
						}
					}
					if (detailDomArray[detailIndex].requirements.includes("?flag player ")) {
						var check = detailDomArray[detailIndex].requirements.split(`?flag player `).pop().split(`;`)[0];
						//console.log(check);
						if (data.player.flags.includes(check) != true) {
							conditionsMet = false;
						}
					}
					if (conditionsMet == true) {
						//console.log("conditions met for "+detailDomArray[detailIndex].desc);
						document.getElementById(detailDomArray[detailIndex].element).innerHTML = detailDomArray[detailIndex].desc;
					}
				}
			}
			document.getElementById('selfImage').src = "scripts/gamefiles/characters/"+logbookDetailHolder.index+logbookDetailHolder.outfit+".jpg";
		}
		else {
			for (detailIndex = 0; detailIndex < detailSubArray.length; detailIndex++) {
				//If the character has a name
				if (detailSubArray[detailIndex].index == n) {
					var conditionsMet = true;
					if (detailSubArray[detailIndex].requirements.includes("?trust ")) {
						var check = detailSubArray[detailIndex].requirements.split(`?trust `+n+` `).pop().split(`;`)[0];
						//console.log(check);
						if (checkTrust(n) < check) {
							conditionsMet = false;
						}
					}
					if (detailSubArray[detailIndex].requirements.includes("?outfit ")) {
						var check = detailSubArray[detailIndex].requirements.split(`?outfit `).pop().split(`;`)[0];
						//console.log(check);
						if (logbookDetailHolder.outfit != check) {
							conditionsMet = false;
						}
					}
					if (detailSubArray[detailIndex].requirements.includes("?flag player ")) {
						//console.log("test");
						var check = detailSubArray[detailIndex].requirements.split(`?flag player `).pop().split(`;`)[0];
						//console.log(check);
						if (data.player.flags.includes(check) != true) {
							conditionsMet = false;
						}
					}
					if (conditionsMet == true) {
						//console.log("conditions met for "+detailSubArray[detailIndex].desc);
						document.getElementById(detailSubArray[detailIndex].element).innerHTML = detailSubArray[detailIndex].desc;
					}
				}
			}
			document.getElementById('selfImage').src = "scripts/gamefiles/characters/"+logbookDetailHolder.index+"sub.jpg";
		}
	}
	switch (n) {
		case "player": {
			switch (data.player.body) {
				case "null":
					document.getElementById('selfBody').innerHTML = "You are a <span class='selfSwitch' onclick='selfImage(`images/real/body/body0.jpg`)'>regular looking guy</span> without any stand-out features.";
				break;
				case "male":
					document.getElementById('selfBody').innerHTML = "You are a <span class='selfSwitch' onclick='selfImage(`images/real/body/body1.jpg`)'>good-looking guy</span> with a strong jawline and a muscular figure.";
				break;
				case "sissy":
					document.getElementById('selfBody').innerHTML = "You are a <span class='selfSwitch' onclick='selfImage(`images/real/body/body2.jpg`)'>petite boy</span> who could effortlessly pass for a girl.";
				break;
				case "trans":
					document.getElementById('selfBody').innerHTML = "You are a <span class='selfSwitch' onclick='selfImage(`images/real/body/body3.jpg`)'>tall, leggy woman</span> in everything but what you keep in your pants.";
				break;
				case "sub":
					document.getElementById('selfBody').innerHTML = "You are a <span class='selfSwitch' onclick='selfImage(`images/drawn/aya/player.jpg`)'>short, busty boy</span> who looks like a girl in <i>nearly</i> every aspect.";
				break;
			}
			switch (data.player.body) {
				case "sissy":
					document.getElementById('selfLips').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/lips2.jpg`)'>kissable pink lips</span>";
				break;
				case "trans":
					document.getElementById('selfLips').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/lips6.jpg`)'>pillowy lips</span> that have gotten you quite a few longing glances.";
				break;
				case 3:
					document.getElementById('selfLips').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/lips5.jpg`)'>fat, fuckable lips</span> which form an o-shape when you're not speaking.";
				break;
				default:
					document.getElementById('selfLips').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/lips1.jpg`)'>unassuming pink lips</span>";
			}
			if (data.story.route == "sub") {
					document.getElementById('selfLips').innerHTML = "You have a pair of soft, pink lips. Rubbing your finger over them feels nice and soothing.";
			}
			switch (data.player.body) {
				case "null":
					document.getElementById('selfSkin').innerHTML = "Your skin is <span class='selfSwitch' onclick='selfImage(`images/real/body/skin1.jpg`)'>pale</span> and occasionally itchy.";
				break;
				case "male":
					document.getElementById('selfSkin').innerHTML = "Your skin is <span class='selfSwitch' onclick='selfImage(`images/real/body/skin3.gif`)'>tough, but well-groomed and cared for.</span>";
				break;
				case "sissy":
					document.getElementById('selfSkin').innerHTML = "Your skin is <span class='selfSwitch' onclick='selfImage(`images/real/body/skin2.gif`)'>hairless and completely smooth.</span> You find yourself running your hands along it when you have a free moment.";
				break;
				case "trans":
					document.getElementById('selfSkin').innerHTML = "Your skin is <span class='selfSwitch' onclick='selfImage(`images/real/body/skin5.jpg`)'>hairless and completely smooth.</span> Women and men alike would love to run their tongue along it.";
				break;
				case "sub":
					document.getElementById('selfSkin').innerHTML = "Your skin is hairless and completely smooth. As you move the feeling of your clothes on your body makes you feel a little tingly. Maybe after getting used to it the sensations will fade into the background.";
				break;
			}
			switch (data.player.body) {
				case "male":
					document.getElementById('selfButt').innerHTML = "You have a <span class='selfSwitch' onclick='selfImage(`images/real/body/buttM1.jpg`)'>tight butt</span>, the result of a good diet and regular exercise.";
				break;
				case "sissy":
					document.getElementById('selfButt').innerHTML = "You have a <span class='selfSwitch' onclick='selfImage(`images/real/body/buttM4.jpg`)'>plump booty</span>, enough to turn heads on the street.";
				break;
				case "trans":
					document.getElementById('selfButt').innerHTML = "You have a <span class='selfSwitch' onclick='selfImage(`images/real/body/butt3.gif`)'>round ass</span>, which people (and you) need to consciously hold back from slapping.";
				break;
				case 4:
					document.getElementById('selfButt').innerHTML = "You have a <span class='selfSwitch' onclick='selfImage(`images/real/body/butt8.gif`)'>fuckable ass</span>, the sort of which men would sell their daughter to taste.";
				break;
				case 5:
					document.getElementById('selfButt').innerHTML = "You have a <span class='selfSwitch' onclick='selfImage(`images/real/body/buttM5.jpg`)'>gigantic ass</span>, enough to make a man believe in god.";
				break;
				default:
					document.getElementById('selfButt').innerHTML = "You have a <span class='selfSwitch' onclick='selfImage(`images/real/body/buttM2.jpg`)'>decently tight butt</span>, the result of doing squats every other day.";
			}
			if (data.story.route == "sub") {
					document.getElementById('selfButt').innerHTML = "You have an admittedly impressive ass. Your sister clearly has a specific taste in women.";
			}
			switch (data.player.body) {
				case "null":
					document.getElementById('selfJunk').innerHTML = "Your <span class='selfSwitch' onclick='selfImage(`images/real/body/junk1.jpg`)'>unassuming penis</span>, a little on the shorter side, isn't causing a commotion right now.";
				break;
				case "male":
					document.getElementById('selfJunk').innerHTML = "Your <span class='selfSwitch' onclick='selfImage(`images/real/body/junk4.jpg`)'>imposing dick</span> is enough to dampen underwear on sight.";
				break;
				case "sissy":
					document.getElementById('selfJunk').innerHTML = "Your <span class='selfSwitch' onclick='selfImage(`images/real/body/junk5.jpg`)'>adorable little penis</span> is flaccid at the moment. When your aroused though, it can grow up to 8 inches.";
				break;
				case "trans":
					document.getElementById('selfJunk').innerHTML = "Your <span class='selfSwitch' onclick='selfImage(`images/real/body/skin5.jpg`)'>fat, bitch-breaking cock</span> is constantly trying to break free of your clothes.";
				break;
				case "sub":
					document.getElementById('selfJunk').innerHTML = "Your penis is snuggly tucked away. You can certainly get aroused and grow larger, but trying to get yourself off is a fruitless endeavor. It seems like anal might be your only option for awhile.";
				break;
			}
			switch (data.player.body) {
				case "sissy":
					document.getElementById('selfChest').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/boobs2.gif`)'>soft, a-cup breasts</span>.";
				break;
				case 2:
					document.getElementById('selfChest').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/boobs3.gif`)'>perky, c-cup breasts</span>.";
				break;
				case "trans":
					document.getElementById('selfChest').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/boobs4.gif`)'>bouncy, D-cup breasts</span>.";
				break;
				case 4:
					document.getElementById('selfChest').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/boobs7.gif`)'>fat, E-cup breasts</span>. With every movement they sway tantalisingly.";
				break;
				case 5:
					document.getElementById('selfChest').innerHTML = "You have a pair of <span class='selfSwitch' onclick='selfImage(`images/real/body/boobs8.gif`)'>gigantic, F-cup breasts</span>. With every movement they threaten to burst from your shirt and expose you in public as a fat-titted whore.";
				break;
				default:
					document.getElementById('selfChest').innerHTML = "You have some <span class='selfSwitch' onclick='selfImage(`images/real/body/malebody.jpg`)'>decently strong pectoral muscles</span>.";
			}
			if (data.story.route == "sub") {
				document.getElementById('selfChest').innerHTML = "You have a surprisingly reserved bust. If you weren't quite so effeminate, your silhouette could probably pass for a boy's. That said, your nipples are incredibly sensitive. You might need to start wearing a bra to avoid them being visible through your clothes on a cold day.";
			}
			for (i = 0; i < shopArray.length; i++) {
				if (shopArray[i].index == data.player.clothing) {
					document.getElementById('selfClothes').innerHTML = `Right now you're wearing <span class='selfSwitch' onclick='selfImage("images/real/clothes/` + shopArray[i].index + `.jpg")'>` + shopArray[i].desc + `</span>`;
				}
			}
			for (i = 0; i < shopArray.length; i++) {
				if (shopArray[i].index == data.player.underwear) {
					document.getElementById('selfUnderwear').innerHTML = `Underneath that you're wearing <span class='selfSwitch' onclick='selfImage("images/real/clothes/` + shopArray[i].index + `.jpg")'>` + shopArray[i].desc + `</span>`;
				}
			}
			if (data.player.clothing == "nothing") {
				if (data.player.underwear == "nothing") {
					document.getElementById('ifNaked').innerHTML = "You're completely naked! Luckily the app has a clause protecting people from noticing."
				}
				else {
					document.getElementById('ifNaked').innerHTML = `All you're wearing right now is <span class='selfSwitch' onclick='selfImage("` + data.underwearArray[data.story.underwear].image + `")'>` + data.underwearArray[data.story.underwear].description + `</span>`;
				}
			}
			if (picturesDisabled != true) {document.getElementById('selfImage').src = "scripts/gamefiles/characters/"+data.player.body+data.player.image+".jpg";}
			if (data.story.route == "sub") {
				if (picturesDisabled != true) {document.getElementById('selfImage').src = "scripts/gamefiles/characters/"+data.player.body+data.player.image+".jpg";}
			}
			generateLogbookGallery('misc');
			//generateLogbookGallery('dream');
			break;
		}
	}
	generateLogbookGallery(n);
}

function selfImage(n) {
	document.getElementById('selfImage').src = n;
}

function generateLogbookGallery(n) {
	
}

//Inventory & shopping

function loadShop(n) {
	for (item = 0; item < shopArray.length; item++) {
		var finalResult = true;
		if (shopArray[item].type.includes("clothes") == true) {
			var playerBody = data.player.body.charAt(0).toUpperCase() + data.player.body.substring(1);
			if (shopArray[item].type.includes(playerBody) != true) {
				console.log(playerBody);
				finalResult = false;
			}
		}
		if (shopArray[item].type.includes("Lewd") == true) {
			if (checkTrust('clothes') < 1) {
				finalResult = false;
			}
		}
		if (finalResult == true) {
			if (shopArray[item].type.includes(n) == true) {
				if (checkItem(shopArray[item].name) != true) {
					console.log("generating item "+ item + ": " + shopArray[item].name + shopArray[item].index + shopArray[item].desc +  shopArray[item].price);
					if (n.includes("clothes") != true) {
						var imageLocation = "scripts/gamefiles/items/";
					}
					else {
						var imageLocation = "images/real/clothes/";
					}
					document.getElementById('output').innerHTML += `
						<div class = "shopItem" onclick = "purchase('`+shopArray[item].index+`', `+shopArray[item].price+`)">
							<p class = "shopName">`+shopArray[item].name+`</p>
							<p class = "shopDesc">`+shopArray[item].desc+`</p>
							<p class = "shopPrice">$`+shopArray[item].price+`</p>
							<img class ="shopImage" src="`+imageLocation+shopArray[item].index+`.jpg">
						</div>
						<br>
					`;
				}
			}
		}
	}
}

function purchaseEventTab(name, img, price, desc) {
	document.getElementById('output').innerHTML += `
		<div class = "shopItem" onclick = "sceneTransition('`+name+`')">
			<p class = "shopName">`+name+`</p>
			<p class = "shopDesc">`+desc+`</p>
			<p class = "shopPrice">$`+price+`</p>
			<img class ="shopImage" src="`+img+`.jpg">
		</div>
		<br>
	`;
}

function purchase(index, price) {
	if (data.player.money >= price) {
		data.player.money -= price;
		flashMoney();
		updateMenu();
		buyItem(index);
	}
	changeLocation(data.player.location);
}

function buyItem(index) {
	for (buyItemIndex = 0; buyItemIndex < shopArray.length; buyItemIndex++) {
		if (shopArray[buyItemIndex].index == index) {
			var addedItem = {type: shopArray[buyItemIndex].type, index: shopArray[buyItemIndex].index, name: shopArray[buyItemIndex].name, desc: shopArray[buyItemIndex].desc};
			data.inventory.push(addedItem);
		}
	}
}

function flashMoney() {
	flashy();
	setTimeout(flashy, 1000);
}

function flashy() {
	document.getElementById('playerMoney').style.color = (document.getElementById('playerMoney').style.color == 'green' ? 'white' : 'green');
}

function addItem(type, index, name) {
	var purchasedItem = {type: type, index: index, name: name};
	console.log(purchasedItem);
	data.inventory.push(purchasedItem);
}

function removeItem(n) {
	for (i = 0; i < data.inventory.length; i++) {
		if (data.inventory[i].name.includes(n)) {
			data.inventory.splice(i, 1);
			break;
		}
	}
}

function checkItem(n) {
	console.log("Checking for item ID " + n);
	for (x = 0; x < data.inventory.length; x++) {
		if (data.inventory[x].name.includes(n)) {
			console.log("Item id " + data.inventory[0].name + " is owned");
			return true;
			break;
		}
	}
	return false;
}

function generateInv() {
	clearInv();
	for (i = 0; i < data.inventory.length; i++) {
		document.getElementById('windowLeft').innerHTML += `
		<div class = "item">
			<p class = "itemName">`+data.inventory[i].name+`</p>
			<img class ="itemImage" src="`+data.inventory[i].image+`">
		<div>
		`;
	}
}

function clearInv() {
	document.getElementById('windowLeft').innerHTML = ""
	document.getElementById('windowRight').innerHTML = ""
}

//Wardrobe

function changeClothes(n) {
	data.player.clothing = n;
	deleteWindow();
}

function outfitGeneration(n) {
	writeBig("scripts/gamefiles/profiles/mom"+checkOutfit('mom')+".jpg");
}