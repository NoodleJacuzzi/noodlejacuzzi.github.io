var picturesDisabled = false;
var saveName;
var saveHidden = true;
var selfHidden = true;
var imagesDisabled = false;
var randNum;
var tempScene;
var kettleCounter = 0;
var ethicsCounter = 0;
var timeSince = 0;
var data = {
	player: {
		fName: "You",
		lName: "",
		age: "25",
		color: "Blue",
		artifact1: "",
		artifact2: "",
		character: "red",
		currentScene: "start",
		currentScenario: "",
		time: "Morning",
		day: 0,
		storage: "",
		entryPoint: "work",
	},
	story: [
		{index: "roommate", image: "", met: false, fName: "Sophia", lName: "Leone", desc:"Your roommate, a lesbian schoolteacher.",},
		{index: "assistant", image: "", met: false, fName: "Veronica", lName: "Rodriguez", desc:"Your (secretly kinky) assistant at work.",},
		{index: "girlfriend", image: "", met: false, fName: "Asa", lName: "Akira", desc:"Your roommate's girlfriend.",},
		{index: "boss", image: "", met: false, fName: "Peta", lName: "Jensen", desc:"Your direct supervisor.",},
		{index: "librarian", image: "", met: false, fName: "Mia", lName: "Malkova", desc:"Sexually frustrated librarian.",},
		{index: "madame", image: "", met: false, fName: "Lovely Madame", lName: "Sunny Leone", desc:"Phantom who lives inside the perfume bottle.",},
		{index: "gym", image: "", met: false, fName: "Karlee", lName: "Grey", desc:"Owner of the local gym.",},
		{index: "lifeguard", image: "", met: false, fName: "Anissa", lName: "Kate", desc:"Lifeguard at the local beach.",},
		{index: "chair", image: "", met: false, fName: "Priya", lName: "Rai", desc:"Chairwoman of Anomaly Vault.",},
	],
	gallery: [
	],
	bodytypes: [
		{index: "red", name: "Featureless Red"},
		{index: "basic", name: "Sissy"},
		{index: "macho", name: "Macho Man"},
		{index: "shemale", name: "Shemale"},
	],
}

var galleryArray = [
	//Bracelet Events
	{index: "braceletResearch1", dark: false, girl: "assistant", name: "First Research", hint: "Assistant event"},
	{index: "braceletResearch2", dark: false, girl: "assistant", name: "Caught Jilling", hint: "Assistant event"},
	{index: "braceletResearch3", dark: false, girl: "assistant", name: "New Ideas", hint: "Assistant event"},
	{index: "braceletResearch4", dark: false, girl: "boss", name: "Research Payoff", hint: "Assistant event"},
	{index: "braceletResearch5", dark: false, girl: "chair", name: "Head of the Vault", hint: "Assistant event"},
	{index: "braceletHome1", dark: false, girl: "roommate", name: "Stay-at-Home Fun", hint: "Assistant event"},
	{index: "braceletHome2", dark: false, girl: "roommate", name: "Sexting", hint: "Assistant event"},
	{index: "braceletHome3", dark: false, girl: "girlfriend", name: "Fucking with the Girlfriend", hint: "Assistant event"},
	{index: "braceletHome4", dark: false, girl: "sisterswallows", name: "Game Night", hint: "Assistant event"},
	{index: "braceletHome5", dark: false, girl: "sisterswallows", name: "Terrible Reception", hint: "Assistant event"},
	{index: "braceletOutdoor1", dark: false, girl: "gym", name: "Fitness Instructor's Exercise Plan", hint: "Assistant event"},
	{index: "braceletOutdoor2", dark: false, girl: "gym", name: "Fitness Instructor's Home", hint: "Assistant event"},
	{index: "braceletOutdoor4", dark: false, girl: "swallows", name: "Bar Room Fun", hint: "Assistant event"},
	{index: "braceletDream1", dark: false, girl: "", name: "Bracelet's Fate", hint: "Assistant event"},
	//Erotibox Events
	{index: "erotiboxResearch1", dark: false, girl: "", name: "Demo Reel - Sex Tape", hint: ""},
	{index: "erotiboxResearch2", dark: false, girl: "assistant", name: "Taser - Slut Shocker", hint: ""},
	{index: "erotiboxResearch3", dark: false, girl: "", name: "Mona Lisa - Work of Art", hint: ""},
	{index: "erotiboxResearch4", dark: false, girl: "", name: "Chessboard - Curseboard", hint: ""},
	{index: "erotiboxResearch5", dark: false, girl: "", name: "$20 - Stripper Money", hint: ""},
	{index: "erotiboxResearch6", dark: false, girl: "", name: "Water Bottle - Aphrodisiac Drink", hint: ""},
	{index: "erotiboxResearch7", dark: false, girl: "assistant", name: "Flower - Squirt Inducer", hint: ""},
	{index: "erotiboxResearch9", dark: false, girl: "assistant", name: "Alcoholic Drink - 'Sex on the Bar'", hint: ""},
	{index: "erotiboxResearch8", dark: false, girl: "assistant", name: "Assistant - Sex Fiend", hint: ""},
	//Antique Mirror Events
	{index: "mirrorResearch1-1", dark: false, girl: "", name: "Gender Dynamics - First Research", hint: ""},
	{index: "mirrorResearch1-2", dark: false, girl: "girlfriend", name: "Gender Dynamics - Train Molester", hint: ""},
	{index: "mirrorResearch1-3", dark: false, girl: "gym", name: "Gender Dynamics - Abduction", hint: ""},
	{index: "mirrorResearch1-4", dark: false, girl: "librarian", name: "Gender Dynamics - Reverse Rape", hint: ""},
	{index: "mirrorResearch1-5", dark: false, girl: "roommate", name: "Gender Dynamics - Teasing a Virgin", hint: ""},
	{index: "mirrorResearch2-1", dark: false, girl: "assistantboss", name: "Public Sex - First Research", hint: ""},
	{index: "mirrorResearch2-2", dark: false, girl: "", name: "Public Sex - Free Use Greeting", hint: ""},
	{index: "mirrorResearch2-3", dark: false, girl: "", name: "Public Sex - Free Use Office", hint: ""},
	{index: "mirrorResearch2-5", dark: false, girl: "", name: "Public Sex - Free Use Gym", hint: ""},
	{index: "mirrorResearch2-4", dark: false, girl: "roommate", name: "Public Sex - Free Use School", hint: ""},
	{index: "mirrorResearch2-6", dark: false, girl: "crypto", name: "Public Sex - Community Service Hall", hint: ""},
	//Time Stopwatch Events
	{index: "stopwatchResearch1", dark: false, girl: "", name: "Time Stopwatch - First Research", hint: ""},
	{index: "stopwatchResearch2", dark: false, girl: "boss", name: "Time Stopwatch - All at Once", hint: ""},
	{index: "stopwatchResearch3", dark: false, girl: "assistant", name: "Time Stopwatch - Endless Marathon", hint: ""},
	{index: "stopwatchHome1", dark: false, girl: "roommate", name: "Time Stopwatch - Public Embarrassment", hint: ""},
	{index: "stopwatchHome2", dark: false, girl: "roommate", name: "Time Stopwatch - In-Class Fun", hint: ""},
	{index: "stopwatchOutdoor1", dark: false, girl: "", name: "Time Stopwatch - Strip Show", hint: ""},
	{index: "stopwatchDream1", dark: false, girl: "", name: "Stopwatch's fate", hint: ""},
	//Midas Coin Events
	{index: "coinResearch1", dark: false, girl: "", name: "Midas Coin - First Research", hint: ""},
	{index: "coinResearch2", dark: false, girl: "assistant", name: "Midas Coin - Trading for a Soda", hint: ""},
	{index: "coinHome1", dark: false, girl: "girlfriendcrypto", name: "Midas Coin - Flaunting Wealth", hint: ""},
	//index: "coinHome2", dark: false, girl: "assistantsister", name: "Midas Coin - Sisters", hint: ""},
	{index: "coinOutdoor1", dark: false, girl: "gymcrypto", name: "Midas Coin - Gold Membership", hint: ""},
	//index: "coinOutdoor2", dark: false, girl: "", name: "Midas Coin - Mugging", hint: ""},
	{index: "coinDream1", dark: false, girl: "", name: "Coin's Fate", hint: ""},
	//Truth Serum Events
	{index: "serumResearch1", dark: false, girl: "", name: "Truth Serum - First Research", hint: ""},
	{index: "serumResearch2", dark: false, girl: "assistant", name: "Truth Serum - Growing Immunity", hint: ""},
	{index: "serumResearch3", dark: false, girl: "boss", name: "Truth Serum - Jensen's Secret", hint: ""},
	{index: "serumHome1", dark: false, girl: "roommategirlfriend", name: "Truth Serum - Dating Advice", hint: ""},
	{index: "serumHome2", dark: false, girl: "sister", name: "Truth Serum - Social Media Strategy", hint: ""},
	{index: "serumDream1", dark: false, girl: "chair", name: "Serum's Fate", hint: ""},
	//index: "serumOutdoor1", dark: false, girl: "", name: "Truth Serum - Public Train", hint: ""},
	//index: "serumOutdoor2", dark: false, girl: "", name: "Truth Serum - Dubious Consent", hint: ""},
	//index: "serumOutdoor3", dark: false, girl: "", name: "Truth Serum - Beach Body", hint: ""},
	//Chadicus Shades Events
	{index: "shadesResearch1", dark: false, girl: "", name: "Chaddicus Shades - First Research", hint: ""},
	{index: "shadesResearch2", dark: false, girl: "assistant", name: "Chaddicus Shades - First Conquest", hint: ""},
	{index: "shadesResearch3", dark: false, girl: "boss", name: "Chaddicus Shades - Second Conquest", hint: ""},
	{index: "shadesHome1", dark: false, girl: "roommategirlfriend", name: "Chaddicus Shades - Two For One", hint: ""},
	{index: "shadesDream1", dark: false, girl: "", name: "Chaddicus Shades - Shades' Fate", hint: ""},
	//Free ___ Sign Events
	{index: "signResearch1", dark: false, girl: "", name: "FREE HUGS", hint: ""},
	{index: "signHome1", dark: false, girl: "roommategirlfriend", name: "FREE RIMJOBS", hint: ""},
	{index: "signHome2", dark: false, girl: "", name: "FREE CREAMPIES", hint: "FREE CREAMPIES"},
	{index: "signHome3", dark: false, girl: "", name: "FREE BLOWJOBS", hint: "FREE BLOWJOBS"},
	{index: "signHome4", dark: false, girl: "", name: "FREE SEX", hint: "FREE SEX"},
	{index: "signHome6", dark: false, girl: "", name: "FREE ANAL", hint: "FREE ANAL"},
	{index: "signOutdoor1", dark: false, girl: "", name: "FREE TITFUCK", hint: ""},
	{index: "signDream1", dark: false, girl: "agent", name: "FREE DREAMS", hint: ""},
	//Exchange Gas Events
	{index: "gasResearch1", dark: true, girl: "assistant", name: "Exchange Gas - Personal Test", hint: ""},
	{index: "gasResearch2", dark: true, girl: "", name: "Exchange Gas - Assistant Test", hint: ""},
	{index: "gasResearch3", dark: true, girl: "assistant", name: "Exchange Gas - Final Test", hint: ""},
	//Gummy Dicks Events
	{index: "gummyResearch1", dark: true, girl: "", name: "Gummy Dicks - Personal Test", hint: ""},
	{index: "gummyResearch2", dark: true, girl: "", name: "Gummy Dicks - Permanent Effects", hint: ""},
	//Cage Events
	{index: "cageResearch1", dark: true, girl: "", name: "Punification Cage - Personal Test", hint: ""},
	//Onahole Events
	{index: "onaholeResearch1", dark: true, girl: "", name: "Succubus Onahole - Personal Test", hint: ""},
	//Toolkit Events
	{index: "toolkitResearch1", dark: true, girl: "", name: "Sissy Toolkit - Personal Test", hint: ""},
	{index: "toolkitResearch2", dark: true, girl: "", name: "Sissy Toolkit - Perfect Body", hint: ""},
	{index: "toolkitResearch3", dark: true, girl: "", name: "Sissy Toolkit - The Squad Assembles", hint: ""},
	//Bimbo Dust Events
	{index: "dustResearch1", dark: true, girl: "assistant", name: "Bimbo Dust - Practice Makes Perfect", hint: ""},
	{index: "dustResearch2", dark: true, girl: "boss", name: "Bimbo Dust - Perfect Payoff", hint: ""},
	{index: "dustResearch3", dark: true, girl: "chair", name: "Bimbo Dust - Whoopsie!", hint: ""},
	//Nymph Mirror Events
	{index: "nymphResearch1", dark: true, girl: "crypto", name: "Nymph Mirror - Nymphomania", hint: ""},
	{index: "nymphResearch2", dark: true, girl: "crypto", name: "Nymph Mirror - Lost to Lust", hint: ""},
	//Domino Playlist Events
	{index: "playlistResearch1", dark: true, girl: "", name: "Domino PMV - SISSY JOI HYPNO 1 - WEEB TRASH", hint: ""},
	//ErotiVHS Player events
	{index: "vhsResearch1", dark: true, girl: "", name: "ErotiVHS - Enjo Kouhai Crossbreeding Assistance, Elven Princess Episode 2", hint: ""},
]

var logbookArray = [
	{index: "roommate", 
		desc: "Your lesbian roommate. She works at some fancy university as a teacher.",
		body: "She's got a really nice figure and gives off a very 'girl next door' vibe'. She often talks about how she gets hit on at her job by students and her coworkers.",
		clothes: "She prefers to wear demure, casual clothing like sweaters and long skirts.",
		color: "#3dd4d5",
	},
	{index: "assistant", 
		desc: "Your assistant at Anomaly Vault.",
		body: "She's got a gorgeous, very petite figure. Although she tries to hide it she secretly enjoys her work here.",
		clothes: "Her work outfit isn't too professional, but standards are lax here. She wears a short skirt and a blazer opened enough you can clearly her pink undershirt which doubles as a bra.",
		color: "#d8329e",
	},
	{index: "girlfriend", 
		desc: "Your roommate's Asian girlfriend. She also works as a teacher.",
		body: "She's rather petite but her confidence takes her far. It seems like she exposes as much skin as she can while still being able to claim she's dressed professionally.",
		clothes: "Unlike your roommate she's a lot more liberal when it comes to flaunting herself, usually wearing a thin tanktop and tight jeans.",
		color: "#36be55",
	},
	{index: "boss", 
		desc: "Your supervisor at Anomaly Vault, she's extremely experienced in dealing with artifacts.",
		body: "She has a very professional air, almost to the 'stick in her ass' degree. There have been more than a few rumors that she takes artifacts home to improve her sex life.",
		clothes: "Working with the artifacts have given her a very liberal attitude towards showing off her body. She wears the company uniform but isn't shy about opening up to show cleavage.",
		color: "#9298b3",
	},
	{index: "librarian", 
		desc: "A very superstitious librarian hoping to document the weird occurrences at her library (you) for her dissertation.",
		body: "She's very reserved in general, but you've heard more than a few rumors online that she used to be a model.",
		clothes: "In her small library the work uniform policy is more than a little sexist, and her outfit almost looks like it could be used in a porno. She looks good in it though.",
		color: "#ebf288",
	},
	{index: "madame", 
		desc: "The spirit who appears before those who inhale the Appreciation Perfume.",
		body: "As a mystical being she has a great deal of control over her own body, but appears before those who can see her as a flawless, beautiful woman.",
		clothes: "The only outfit you've ever seen her in is a sheer robe, you can clearly see through it and it exposes her body.",
		color: "#b62424",
	},
	{index: "gym", 
		desc: "A young fitness instructor who works at the local gym.",
		body: "She works out frequently, but still retains a pretty thicc body.",
		clothes: "Despite the fact that it goes transparent when she sweats, her favored outfit is a white top and some small red shorts. She believes the ensemble 'encourages patrons' to exercise harder.",
		color: "#800505",
	},
	{index: "lifeguard", 
		desc: "The dedicated lifeguard at the local private beach.",
		body: "More than a few people talk in quiet tones about how she used to do porn.",
		clothes: "She seems to prefer small bikinis while on the job, and isn't afraid of exposing herself.",
		color: "#b631ad",
	},
	{index: "chair", 
		desc: "The chairwoman of your branch of Anomaly Vault, she's one of the highest authorities in the company.",
		body: "Nobody knows too many personal details about her, but she has an almost inhuman resistant to most artifacts.",
		clothes: "You've only ever seen her in expensive looking robes. Getting her out of them could prove to be a challenge.",
		color: "#4defee",
	},
	{index: "sister", 
		desc: "A young college student rooming with you to avoid crippling debts. She's your assistant's sister.",
		body: "She's the embodiment of the 'barely legal' archetype, with everything that entails. That includes the bratty personality.",
		clothes: "She prefers casual comfy clothes, it's almost off putting how quickly she got casual around you.",
		color: "#ff9af2",
	},
	{index: "agent", 
		desc: "A fellow anomaly hunter. Supposedly she's more experienced than you, but something about that seems off.",
		body: "She's surprisingly petite for someone who's worked at the vault for longer than you. Probably some kind of age-related artifact.",
		clothes: "She prefers casual comfy clothes, it's almost off putting how quickly she got casual around you.",
		color: "#de6d1a",
	},
];

var artifactArray = [
	{index: "bracelet", dark: false, equipable: false, title: "Reprehensive Bracelet", desc: "A partially tarnished silver bracelet.", desc2: "When worn, the wearer can become imperceivable and erase memories of themselves & their actions.", glasses: "As you look at the bracelet on your arm, visions of an old, weary knight appear. He cares not for who or why he fights, only that he defends his charge until the end of days."},
	{index: "erotibox", dark: false, equipable: false, title: "Erotibox", desc: "A shabby wooden crate large enough to fit a person inside. <br>Anything put inside the box will become an erotic version of itself.", desc2: "", glasses: "The box calls to mind a virus, small and microscopic. It spreads through bodies and minds to unaware passersby. Now, even under careful watch, all it hopes to do is spread endlessly."},
	{index: "mirror", dark: false, equipable: false, title: "Antique Mirror", desc: "An antique mirror dating back to the Victorian era. If a person stares into the eyes of their own reflection long enough, they will 'switch places' with an alternate reality version of themselves.<br>In these alternate realities social norms and the physical body of the person switched with can all be completely different.", desc2: "", glasses: "As you look at the mirror through the glasses, you see a long hallway filled with doors. Each doorway is decorated differently, but many are smashed apart or vandalized. "},
	{index: "stopwatch", dark: false, equipable: true, title: "Time Stopwatch", desc: "A bronze stopwatch which appears at first glance to be broken, as the second hand jumps backwards every second.", desc2: "When the button at the top is pressed, the clock begins to record the time as normal but time stops for everyone except person holding the watch.", glasses: "As you look at the watch an image of a shady businessman comes to mind. Though his customers think they're getting a great deal, the salesman is the one who truly comes out better in the long run."},
	{index: "coin", dark: false, equipable: true, title: "Midas Coin", desc: "A single gold coin with an inscription on the back written in Ancient Greek.", desc2: "When held, sexual activities performed by the holder will be 'normalized', and not perceived to be socially outrageous no matter how depraved the action. In addition, sexual acts will be seen to have 'value', meaning that the holder can exchange sexual acts as though they had a cash value.", glasses: "As you look at the coin the image comes to mind of a genie, trapped in a lamp. He grants wishes, but his desire is for a human to appear, greedy and foolish enough to free him from his cage."},
	{index: "serum", dark: false, equipable: true, title: "Truth Serum", desc: "A set of vials of green, minty liquid.", desc2: "When drunk, everything you say becomes the 'truth'. Not in the reality warping way, but in that everyone around you will believe whatever you say.", glasses: "As you look at the bottles a set of potted plastic plants come to mind. Totally inanimate, they have no will or drive of their own, but they were obviously crafted with great care."},
	{index: "shades", dark: false, equipable: true, title: "Chaddicus Shades", desc: "A pair of aviator sunglasses which, when worn, increase the wearer's confidence by several dozen degrees.", desc2: "Nearby women tend to become irritable and argue with the wearer, at which point some mysterious process causes the argument to almost immediately devolve into sex, with the wearer as the dominant partner.", glasses: "The shades call to mind a very fit man on a beach. Though attractive, it's clear from his demeanor that he's cocky and arrogant."},
	{index: "sign", dark: false, equipable: true, title: "Free ___ Sign", desc: "A piece of torn cardboard with the words 'FREE ___'.", desc2: "When an action is written in the blank space, the sign will vanish and appear in the hands of someone the user finds attractive and compels them to freely offer the written action.", glasses: "As you look at the sign a small abused puppy comes to mind. He's hurt and easily frightened, but he's overjoyed at finally having a good home."},
	{index: "gas", dark: true, equipable: false, title: "Exchange Gas", desc: "Several aerosol gas containers. Subjects who inhale the gas experience a process called 'gender-swapping'. In most cases the process is temporary.", desc2: "", glasses: "An image comes to mind of a weaponsmith, carefully crafting and tuning his blades, but for what purpose?"},
	{index: "gummy", dark: true, equipable: false, title: "Gummy Dicks", desc: "A package of several erect dicks seemingly made from the same candy as gummy bears. A fluid inside feminizes men, preventing erections and increasing both prostate size & sensitivity. Effects not permanent unless used repeatedly.", desc2: "", glasses: "An image comes to mind of a woman in punk attire, gleefully smashing things with a bat. It isn't out of anger or malice, she just likes smashing stuff."},
	{index: "onahole", dark: true, equipable: false, title: "Succubus Onahole", desc: "A fleshlight or 'onahole' made from an unknown material. Known to cause extreme euphoria when male genetalia is inserted, subjects state tendrils inside 'probed' them. Afterwards, subjects showed an extreme increase in semen production.", desc2: "", glasses: "As you look at the onahole, you see a woman laying seductively before you. She seems almost aware of your presence and beckons you forward, tempting you to ignore the spiked handcuffs and collar in her hands."},
	{index: "cage", dark: true, equipable: false, title: "Punification Cage", desc: "A plastic pink chastity cage. Wearing it almost immediately triggers a powerful orgasm, but in all cases resulted in an extreme decrease in genital size.", desc2: "", glasses: "An image comes to mind of a older looking woman with a pair of sharp heels. You get the impression she enjoys inflicting pleasure with them, no matter what happens to whoever she's tormenting."},
	{index: "toolkit", dark: true, equipable: false, title: "Sissy's Toolkit", desc: "A plastic makeup kit. When opened, objects will appear inside and in the room which are designed to encourage the opener to 'explore themselves'. These range from makeup to unknown body-modifying drugs and a 3-man group of naked men. ", desc2: "", glasses: "An image comes to mind of a group of beauticians, happily enjoying their work making people look beautiful. Though they clearly have passion and excitement for what they do, they wish more customers would arrive soon."},
	{index: "dust", dark: true, equipable: false, title: "Bimbo Dust", desc: "A bag full of an off-white powder. It has been tested, and is not cocaine. It has a powerful intelligence-draining and mild body-altering affect on anyone who inhales it. affecting women much faster than men.", desc2: "", glasses: "Through the glasses an image comes to mind of cocaine. But, it's like, totally sure that it isn't cocaine!"},
	{index: "nymph", dark: true, equipable: false, title: "Nymph Mirror", desc: "A mirror with a sculpture of a young woman on the side. The reflection shows a beautiful naked woman in the glass rather than the user, though the appearance of the woman changes between uses. Staring deeply into it for prolonged periods of time causes the viewer's body to change to match the reflection.", desc2: "", glasses: "An image comes to mind of a pushy friend who wants you to be as drunk as they are, uncaring if you actually want to drink or not."},
	{index: "playlist", dark: true, equipable: false, title: "Domino PMV", desc: "A 'porn music video', a compilation of erotic scenes accompanied by sound and captions. Somehow, the material has a great deal more effect on a person's psyche than is normal. Videos from the series are to be reported immediately, as they are not safe for viewing by the general public.", desc2: "", glasses: "An image comes to mind as you look at the thumb-drive containing the files of a musician with a demonic muse on his shoulder. The musician is desperate to improve his craft, no matter what unnatural methods he uses."},
	{index: "vhs", dark: true, equipable: false, title: "ErotiVHS Player", desc: "A VHS player retrieved alongside the Erotibox, only plays tapes with 2-dimensional pornographic material on them. Has the uncanny ability to pull the viewer into the world depicted in the tape, but not as the dominant party.", desc2: "", glasses: "An image comes to mind of a voyeur watching through a window as you help yourself to forbidden fruit."},
];

var artifactMiniArray = [ //Used for smaller artifacts such as prison and toolbox department
	{index: "switch", type: "artifact", title: "Martin's Switch", desc: "A switch similar to an old fashion lightswitch.", desc2: "Flipping it will turn off the room's conciousness."},
	{index: "magazine", type: "artifact", title: "'Girls Gone Mild' Magazine", desc: "A magazine featuring conservatively dressed women from an unknown publisher.", desc2: "When read, each page fills itself with a person the reader is both close to and interacts with on a regular basis. By writing in on the empty spaces, the reader can retroactively change the names of the people they know."},
	{index: "loop", type: "artifact", title: "Mobium Loop", desc: "An impossibly constructed 3d shape of an unknown metal. When spun it rotate in an endless circle.", desc2: "While it's spinning, time begins to dilate heavily in a subtle way. Time will still pass second by second, but time periods like 'early morning' or 'evening' will continue to occur forever."},
	{index: "clock", type: "artifact", title: "Wind-Up Clock", desc: "A small brass clock activated by inserting and winding a key into the side.", desc2: "When would up it causes the users consciousness to be flung backwards in time, usually to some turning point or 'prologue' of their lives."},
	{index: "preacher", type: "artifact", title: "Lonely Preacher", desc: "A small wooden doll fashioned to look like a wise monk.", desc2: "When a subject speaks to the preacher the subject will perceive every word they hear to be louder or softer, depending on what the user desires at the time. In addition, visual spectacles will become more or less attention-grabbing compared to sound, also depending on the user's wishes."},
	{index: "notebook", type: "artifact", title: "Thorough Notebook", desc: "An empty notebook, when opened it will immediately fill itself with diary-esque entries of the opener's life.", desc2: "Written in latin, the text has the curious effect of causing the user to re-live whatever memories are covered by the page, even if the user cannot read latin. Also curiously, entries for potential deaths are also present in the notebook if the user frequently tempts fate."},
	{index: "lamp", type: "artifact", title: "Fashionista's Lamp", desc: "An exotic-looking lamp originating from an unknown European region.", desc2: "When a subject closes their eyes with in the lamp's glow, images of clothes and bodies specific to the user's psyche begin to fill their mind. If the user finds one pleasing, then when they open their eyes next their appearance will change to match whatever they were thinking of. "},
	{index: "commercials", type: "artifact", title: "Alternate-Universe Commercials", desc: "A box of VHS tapes that materialized from another universe.", desc2: "Multiple security checks have been performed on them since one appears to be an advertisement for the Anomaly Vault, but research has found them to be harmless. Included is a note referencing a 'Master Index'."},
	{index: "engine", type: "artifact", title: "Cheat(?) Engine", desc: "A bootleg version of a popular computer program for editing values.", desc2: "It's capable of rewriting reality, but it only responds to extremely specific phrases and ignores any other request. Unless you already know what to say, the program is useless. "},
	{index: "glasses", type: "artifact", title: "Helsing's Glasses", desc: "A set of glasses obtained from an... <i>Eccentric</i> hobbyist created by unknown means. Formerly a researcher, she was retired due to an unhealthy fixation with imagining personalities for artifacts.", desc2: "When worn they anthropomorphize items with anomalous properties. They used to be taken on artifact retrieval missions until testing revealed they were not always accurate. In fact sometimes it would entirely fabricate details about otherwise mundane objects."},
	{index: "logbook", type: "artifact", title: "Artifact Retrieval Logs", desc: "A massive set of cabinets full of mission log files. Only artifact hunters are authorized to use it.", desc2: "Opening the cabinet with intent will allow for retrieval and re-living of specific file contents."},
	{index: "doctor", code:"scp", type: "prisoner", title: "'Plague' Doctor", desc: "A mysterious woman dressed in a skimpy version of a medieval plague doctor's uniform. Very dangerous.", desc2: ""},
	{index: "talisman", code:"scp", type: "prisoner", title: "Talisman", desc: "A possessed talisman. There's a sticky note on it saying 'DO NOT TOUCH'", desc2: ""},
	{index: "magical", code:"lobotomy", type: "prisoner", title: "Magical Girl", desc: "A woman proclaiming herself to be a champion of justice. You're pretty sure she was fished up from a river from some forest.", desc2: ""},
	{index: "blue", code:"lobotomy", type: "prisoner", title: "Blue Star", desc: "Blue Star", desc2: ""},
	{index: "kettle", code:"warehouse", type: "prisoner", title: "Wish-Granting Kettle", desc: "A rusty old kettle. It showed some promise at one point, but it's creators clearly had the wrong focus and it just isn't as shiny as everything else.", desc2: ""},
	{index: "fringe", code:"fringe", type: "prisoner", title: "Ultra Top Secret Room", desc: "A super locked room, you aren't allowed to go in here. The end of the door's paint job is much, much more lazily done than the rest.", desc2: ""},
	{index: "umbrella", code:"umbrella", type: "prisoner", title: "Zombie Virus", desc: "A vial containing a zombification virus. Hopefully it makes hot zombies, not gross ones.", desc2: ""},
	{index: "silent", code:"silent", type: "prisoner", title: "Nurse's Room", desc: "A room full of strange creatures, which probably symbolize a really deep message about sexuality or something.", desc2: ""},
	{index: "ethics", code:"ethics", type: "prisoner", title: "Ethics Rock", desc: "A rock that dispenses lines of  ethical ramblings. It's a rock though, so it probably doesn't know what its talking about.", desc2: ""},
];

var roommateF = data.story[0].fName;
var roommateL = data.story[0].lName;
var assistantF = data.story[1].fName;
var assistantL = data.story[1].lName;
var girlfriendF = data.story[2].fName;
var girlfriendL = data.story[2].lName;
var bossF = data.story[3].fName;
var bossL = data.story[3].lName;
var librarianF = data.story[4].fName;
var librarianL = data.story[4].lName;
var madameF = data.story[5].fName;
var madameL = data.story[5].lName;
var gymF = data.story[6].fName;
var gymL = data.story[6].lName;
var lifeguardF = data.story[7].fName;
var lifeguardL = data.story[7].lName;
var chairF = data.story[8].fName;
var chairL = data.story[8].lName;

//Startup & Systems config
function startup() {
	saveSlot(161);
	//alert(data.player.currentScene);
	//console.log(data);
	tempScene = data.player.currentScene;
	if(localStorage.getItem('data160')) {
		console.log('startup autosave load successful. Now loading autosave at position ' + data.player.currentScene);
		loadSlot(160);
	}
	else{
		sceneTransition('start');
	}
}

function disablePictures() {
	if (imagesDisabled == false) {
		document.getElementById("playerImage").style.visibility = "hidden";		
		document.getElementById("playerImage").style.width = "0%";
		document.getElementById("playerImage").style.border = "none";
		imagesDisabled = true;
		sceneTransition(data.player.currentScene);
		document.getElementById('picturesDisabled').innerHTML = `Pictures have been disabled. No large image should appear after this screen. Refresh the game to restore them. Dialog images will still appear, and shop / inventory items will appear to be broken.`;
	}
	else {
		location.reload();
	}
}

function restartButton() {
	var restart = confirm ("restart the game?");
	if (restart == true) {
		loadSlot(161);
	}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function passTime() {
	if (data.player.loop != true) {
		switch (data.player.time) {
			case "Morning":
				data.player.time = "Noon";
			break;
			case "Noon":
				data.player.time = "Evening";
			break;
			case "Evening":
				data.player.time = "Night";
			break;
			case "Night":
				if (data.player.currentScene == "newDay") {
					data.player.time = "Morning";
				}
			break;
		}
		console.log('time is now ' + data.player.time);
	}
	else {
		console.log('flow of time prevented by the mobium loop');
	}
}

function nap() {
	if (data.player.time == "Night") {
		writeText("You can't take a nap right now.");
	}
	else {
		passTime();
		sceneTransition(tempScene);
	}
}

function nameUpdate() {
	roommateF = data.story[0].fName;
	roommateL = data.story[0].lName;
	assistantF = data.story[1].fName;
	assistantL = data.story[1].lName;
	girlfriendF = data.story[2].fName;
	girlfriendL = data.story[2].lName;
	librarianF = data.story[3].fName;
	librarianL = data.story[3].lName;
	madameF = data.story[4].fName;
	madameL = data.story[4].lName;
	gymF = data.story[5].fName;
	gymL = data.story[5].lName;
	lifeguardF = data.story[6].fName;
	lifeguardL = data.story[6].lName;
	chairF = data.story[7].fName;
	chairL = data.story[7].lName;
}

//Showing & hiding windows
function hideStuff() {
	//console.log("hideStuff start");
	hideSave();
	hideSelf();
	//console.log("hideStuff end");
}

function saveButton() {
	if (saveHidden == true) {
		showSave();
	}
	else {
		hideSave();
	}
}

function hideSave() {
	saveHidden = true;
	document.getElementById("save").style.visibility = "hidden"; 
}

function showSave() {
	hideStuff();
	generateSave();
	saveHidden = false;
	document.getElementById("save").style.visibility = "visible"; 
}

function selfButton() {
	if (selfHidden == true) {
		showSelf();
	}
	else {
		hideSelf();
	}
}

function hideSelf() {
	selfHidden = true;
	document.getElementById("self").style.visibility = "hidden";	
}

function showSelf() {
	hideStuff();
	selfHidden = false;
	document.getElementById("self").style.visibility = "visible"; 
	generateNav();
}

//Scene creation
function writeSpeech (name, img, text) {
	var color = "#858585"
	if (img == "") {
		for (logbookIndex = 0; logbookIndex < logbookArray.length; logbookIndex++) {
			if (logbookArray[logbookIndex].index == name) {
				color = logbookArray[logbookIndex].color;
			}
		}
		img = "scripts/gamefiles/profiles/"+name+".jpg";
	}
	if (img == "none") {
		img = "scripts/gamefiles/none.png";
	}
	if (name == "player") {
		if (img == "scripts/gamefiles/profiles/"+name+".jpg") {
			img = "scripts/gamefiles/profiles/" + data.player.character + ".jpg";
		}
		name = data.player.fName;
		var color = "#c40909"
		switch (data.player.character) {
			case "serum":
				color = "#06c41f"
			break;
			case "coin":
				color = "#ebd300"
			break;
			case "box":
				color = "#ff29d4"
			break;
		}
	}
	if (name == "notes") {
		name = "Research Notes";
		img = "scripts/gamefiles/profiles/notes.png";
		var color = "#6dfffb"
	}
	if (name == "gasF") {
		name = data.player.fName;
		img = "scripts/gamefiles/profiles/gasF.jpg";
		var color = "#ff6dd4"
	}
	if (name == "gasM") {
		name = assistantF;
		img = "scripts/gamefiles/profiles/gasM.jpg";
	}
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == name) {
			name = data.story[i].fName;
			var lName = data.story[i].lName;
		}
	}
	if (name == "Peta") {
		name = "Mrs. " + lName;
	}
	document.getElementById('output').innerHTML +=`
	<div class = "textBox" style="border-color: `+color+`">
		<img class = "textThumb" style="box-shadow: -5px 5px `+color+`" src = "
			`+ img +`
		">
		<div class="textBoxContent">
		<p class = "textName" style="color:`+color+`">`+ name + `</p>
		<p>` + replaceCodenames(text) + `</p>
	</div>
	<br>
	`;
}

function writeTab(character, text) {
	var img = "scripts/gamefiles/profiles/"+character+".jpg";
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == character) {
			var name = data.story[i].fName;
			var lName = data.story[i].lName;
		}
	}
	if (name == "Peta") {
		name = "Mrs. " + lName;
	}
	document.getElementById('output').innerHTML +=`
	<div class = "textBox">
		<img class = "textThumb" src = "
			`+ img +`
		">
		<div class="textBoxContent">
		<p class = "textName">`+ name + `</p>
		<span class = "choiceText" onclick = "sceneTransition('`+character+`')">`+replaceCodenames(text)+`</span>   
	</div>
	<br>
	`;
}

function writeArtifact (name) {
	if (data.player.storage == null) {
		data.player.storage = "";
	}
	if (tempScene != 'storage' && data.player.storage.includes(name) != true) {
		listArtifact(name);
	}
	if (tempScene == 'storage' && data.player.storage.includes(name) == true) {
		listArtifact(name);
	}
}

function listArtifact(name) {
	console.log("Now writing artifact tab id " + name);
	var researchStatus = 0;
	var researchTotal = 0;
	var desc2 = "";
	var descGlasses = "";
	for (i = 0; i < artifactArray.length; i++) {
		if (artifactArray[i].index == name) {
			var jam = i;
			var title = artifactArray[i].title;
			var desc = artifactArray[i].desc;
			var artifactResearchCheck = name + "Research1";
			if (artifactArray[i].equipable == true) {
				console.log("artifact is equippable");
				if (galleryCheck(artifactResearchCheck) == true) {
					console.log("artifact has been researched");
					var equip = "Equip";
					desc2 = artifactArray[jam].desc2;
					if (tempScene != 'storage') {
						var store = "Store";
					}
					else {
						var store = "Retrieve From Storage";
					}
				}
				else {
					console.log("artifact has not been researched");
					var equip = "";
					desc2 = "";
					var store = "";
				}
			}
			else {
				console.log("artifact is not equippable");
				if (galleryCheck(artifactResearchCheck) == true) {
					console.log("artifact has been researched");
					desc2 = artifactArray[jam].desc2;
					if (tempScene != 'storage') {
						var store = "Store";
					}
					else {
						var store = "Retrieve From Storage";
					}
				}
				else {
					console.log("artifact has not been researched");
					desc2 = "";
					var store = "";
				}
				var equip = "";
			}
			if (data.player.glasses == true) {
				descGlasses = artifactArray[jam].glasses;
				console.log("Glasses status is "+data.player.glasses+", now printing "+descGlasses);
			}
			else {
				descGlasses = "";
			}
		}
	}
	//console.log('now checking number of scenes');
	for (i = 0; i < galleryArray.length; i++) {
		if (galleryArray[i].index.includes(name)) {
			researchTotal += 1;
			if (galleryCheck(galleryArray[i].index) == true) {
				researchStatus += 1;
			}
		}
	}
	if (tempScene == "vault") {
		store = "";
	}
	console.log('Scenes found, current progress is ' + researchStatus + ' of ' + researchTotal);
	//console.log('now determining appropriate research level');
	if (equip != "") {
		document.getElementById('output').innerHTML +=`
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/`+ name +`.jpg">
			<div class="textBoxContent">
			<p class = "textName">`+ title + `</p>
			<p>Research Status: `+researchStatus+` of `+researchTotal+` scenes unlocked</p>
			<p>
				<span class = "blueText" onclick = "sceneTransition('`+name+`Research')">Research</span>   
				<span class = "blueText" onclick = "equip('`+name+`')">`+equip+`</span>
				<span class = "blueText" onclick = "store('`+name+`')">`+store+`</span>
			</p>
			<p>`+ desc + `</p>
			<p>`+ desc2 + `</p>
			<p>`+ descGlasses + `</p>
		</div>
		<br>
		`;
	}
	else {
		document.getElementById('output').innerHTML +=`
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/`+ name +`.jpg">
			<div class="textBoxContent">
			<p class = "textName">`+ title + `</p>
			<p>Research Status: `+researchStatus+` of `+researchTotal+` scenes unlocked</p>
			<p>
				<span class = "blueText" onclick = "sceneTransition('`+name+`Research')">Research</span>
				<span class = "blueText" onclick = "store('`+name+`')">`+store+`</span>
			</p>
			<p>`+ desc + `</p>
			<p>`+ desc2 + `</p>
			<p>`+ descGlasses + `</p>
		</div>
		<br>
		`;
	}
}

function writeArtifactMini(name) {
	var buttonPhrase = "Research";
	for (i = 0; i < artifactMiniArray.length; i++) {
		if (artifactMiniArray[i].index == name) {
			var title = artifactMiniArray[i].title;
			var desc = artifactMiniArray[i].desc;
			var desc2 = artifactMiniArray[i].desc2;
		}
	}
	switch (tempScene) {
		case "prison": {
			buttonPhrase = "Study";
			break;
		}
		case "toolbox": {
			buttonPhrase = "Use";
			break;
		}
	}
	document.getElementById('output').innerHTML +=`
	<div class = "textBox">
		<img class = "textThumb" src = "scripts/gamefiles/items/`+ name +`.jpg">
		<div class="textBoxContent">
		<p class = "textName">`+ title + `</p>
		<p>
			<span class = "choiceText" onclick = "sceneTransition('`+name+`Research')">`+buttonPhrase+`</span>
		</p>
		<p>`+ desc + `</p>
		<p>`+ desc2 + `</p>
	</div>
	<br>
	`;
}

function writeBig (img, cap) {
	if (imagesDisabled != true) {
	document.getElementById('output').innerHTML += `
		<img class="bigPicture" src="` + img + `">
		<br>
	`;
	}
}

function writeBackground (img, cap) {
	if (imagesDisabled != true) {
		document.getElementById('output').innerHTML += `
			<img class="backgroundPicture" src="` + img + `">
		`;
	}
}

function writeMed (img, cap) {
	if (imagesDisabled != true) {
	document.getElementById('output').innerHTML += `
		<img class="medPicture" src="` + img + `">
		<br>
	`;
	}
}

function writeTransition (name, scene) {
	document.getElementById('output').innerHTML += `
		<p class="choiceText" onclick="sceneTransition('` + name + `')">
			` + replaceCodenames(scene) + `
		</p>
	`;
}

function writeFunction (name, func) {
	document.getElementById('output').innerHTML += `
		<p class="choiceText" onclick="` + name + `">
			` + replaceCodenames(func) + `
		</p>
	`;
}

function writeSpecial (text) {
	document.getElementById('output').innerHTML += `
		<p class = "specialText">` + replaceCodenames(text) + `</p>
	`;
}

function writeText (text) {
	document.getElementById('output').innerHTML += `
		<p class='rawText'>` + replaceCodenames(text) + `</p>
	`;
}
	
function sceneTransition(scene) {
	console.log("scene transition started");
	wrapper.scrollTop = 0;
	updateMenu();
	hideStuff();
	document.getElementById('output').innerHTML = '';
	tempScene = scene;
	writeScene(scene);
	data.player.currentScene = scene;
	console.log(data.player.currentScene);
	saveSlot(160);
	console.log("scene transition end");
}

function writePorn() {
	console.log("Now generating porn for day ID" + data.player.dayID);
	var pornID = data.player.dayID - 1;
	document.getElementById('output').innerHTML = '';
	if (imagesDisabled != true) {
		document.getElementById('output').innerHTML += `
			<img class="medPicture" onclick="writeEvent('porn`+pornID+`A')" src="images/porn/` + pornID + `A.jpg">
			<br>
		`;
	}
	else {
		writeText("The porn system is disabled without images.");
	}
}

function dreamCheck() {
	var event = false;
	var dreamChecker = data.player.artifact1 + "Dream" + "1";
	for (i = 0; i < galleryArray.length; i++) {
		if (dreamChecker == galleryArray[i].index) {
			if (galleryCheck(dreamChecker)==false) {
				event = dreamChecker;
			}
		}
	}
	dreamChecker = data.player.artifact2 + "Dream" + "2";
	for (i = 0; i < galleryArray.length; i++) {
		if (dreamChecker == galleryArray[i].index) {
			if (galleryCheck(dreamChecker)==false) {
				event = dreamChecker;
			}
		}
	}
	dreamChecker = data.player.artifact2 + "Dream" + "1";
	for (i = 0; i < galleryArray.length; i++) {
		if (dreamChecker == galleryArray[i].index) {
			if (galleryCheck(dreamChecker)==false) {
				event = dreamChecker;
			}
		}
	}
	switch (data.player.day) {
		case 0:
			event = 'dream0'; 
		break;
		case 1: 
			event = 'dream1';
		break;
	}
	tempScene = 'room';
	console.log('Final dream check result is ' + event);
	return event;
}

function researchLevel(name) {
	var artifactResearchName = name + 'Research';
	var failed = true;
	var sceneTarget = name + 'Failed';
	for (i = 0; i < galleryArray.length; i++) {
		if (galleryArray[i].index.includes(artifactResearchName)) {
			if (galleryCheck(galleryArray[i].index) != true) {
				failed = false;
				sceneTarget = galleryArray[i].index;
				break;
			}
		}
	}
	console.log('research level is ' + sceneTarget);
	if (failed == false) {
		writeEvent(sceneTarget);
	}
	else {
		sceneTransition(sceneTarget);
	}
}

function replaceCodenames(text) {
	var codenameCheck = "";
	for (geminiLoop = 0; geminiLoop < 5; geminiLoop++) {
	text = text.replace('playerF', data.player.fName);
	text = text.replace('playerL', data.player.lName);
	for (codenameIndex = 0; codenameIndex < data.story.length; codenameIndex++) {
		codenameCheck = data.story[codenameIndex].index + "F";
		text = text.replace(codenameCheck, data.story[codenameIndex].fName);
		codenameCheck = data.story[codenameIndex].index + "L";
		text = text.replace(codenameCheck, data.story[codenameIndex].lName);
	}
	}
	return text;
}

function closeButton() {
	document.getElementById("menu").style.width = "0px";	
	document.getElementById("closeButton").style.visibility = "hidden";	
	document.getElementById("openButton").style.visibility = "visible";	
}

function openButton() {
	document.getElementById("menu").style.width = "400px";	
	document.getElementById("closeButton").style.visibility = "visible";	
	document.getElementById("openButton").style.visibility = "hidden";	
}

function writeBG(target) {
	document.getElementById('output').innerHTML += `
		<div class="playerRoom">
			<img class="backgroundPicture" src="scenarios/`+data.player.currentScenario+`/images/`+target+`.jpg" usemap="#roomMap">
		</div>
	`;
}

function writeImageButton(name, target, img, top, left) {
	if (img == "") {
		img = target + ".jpg";
	}
	document.getElementsByClassName('playerRoom')[0].innerHTML += `
		<img class="imageButton"
		onclick="writeScenarioScene('`+target+`')" 
		src="scenarios/`+data.player.currentScenario+`/images/`+img+`" 
		style="top: `+top+`%; left: `+left+`%;"
		title="`+name+`">
	`;
}

function addFlag(name) {
	console.log(data.player.scenarios);
	for (i = 0; i < data.player.scenarios.length; i++) {
		if (data.player.scenarios[i].index == data.player.currentScenario) {
			console.log(data.player.scenarios[i].flags);
			data.player.scenarios[i].flags += name;
		}
	}
}

function removeFlag(name) {
	console.log(data.player.scenarios);
	for (i = 0; i < data.player.scenarios.length; i++) {
		if (data.player.scenarios[i].index == data.player.currentScenario) {
			console.log(data.player.scenarios[i].flags);
			data.player.scenarios[i].flags = data.player.scenarios[i].flags.replace(name, "");
		}
	}
}

function checkFlag(name) {
	for (i = 0; i < data.player.scenarios.length; i++) {
		if (data.player.scenarios[i].index == data.player.currentScenario) {
			if (data.player.scenarios[i].flags.includes(name) == true) {
				return true;
			}
		}
	}
	return false;
}

function signTrigger() {
	var desiredScene = "signFailureUnknown";
	var goof = document.getElementById('kettleSubmission').value;
	goof = goof.toLowerCase();
	sceneTransition(data.player.currentScene);
	var wordlist = "endings";
	if (wordlist.includes(goof) == true) {
		desiredScene = "signEnding";
	}
	wordlist = "spankings / painsluts / abuses ";
	if (wordlist.includes(goof) == true) {
		desiredScene = "signFailureUnfinished";
	}
	wordlist = "nudes";
	if (wordlist.includes(goof) == true) {
		desiredScene = "signFailureUnfinished";
	}
	wordlist = "footjobs / feet";
	if (wordlist.includes(goof) == true) {
		desiredScene = "signFailureUnfinished";
	}
	wordlist = "assjobs / hotdogging";
	if (wordlist.includes(goof) == true) {
		desiredScene = "signFailureUnfinished";
	}
	wordlist = "toilet / pisswhore";
	if (wordlist.includes(goof) == true) {
		desiredScene = "signFailureUnfinished";
	}
	wordlist = "to a good home";
	if (wordlist.includes(goof) == true) {
		desiredScene = "signFailureUnfinished";
	}
	wordlist = "orgy / group";
	if (wordlist.includes(goof) == true) {
		desiredScene = "signFailureUnfinished";
	}
	wordlist = "girlfriend / slaves / wife / wives / servant";
	if (wordlist.includes(goof) == true) {
		desiredScene = "signFailureSlave";
	}
	wordlist = "knife / blood / murder / gunshots / guns / stabbing / death";
	if (wordlist.includes(goof) == true) {
		desiredScene = "signFailureGore";
	}
	wordlist = "catgirl / neko / kitten / doggy / puppy / doggirl / bitch / cowgirl / horsegirl / expansion / growth / shrinking / giant / small / transformation / alteration / bodymod / sissyfication / feminization";
	if (wordlist.includes(goof) == true) {
		desiredScene = "signFailureTF";
	}
	wordlist = "food / sandwiches / milk / drink";
	if (wordlist.includes(goof) == true) {
		desiredScene = "signFailureFood";
	}
	wordlist = "hong kong / hongkong / tibet";
	if (wordlist.includes(goof) == true) {
		desiredScene = "signFailureProtest";
	}
	wordlist = "hug";
	if (wordlist.includes(goof) == true) {
		desiredScene = "signFailureHug";
	}
	wordlist = "rimjobs asslicks asslicking analingus";
	if (wordlist.includes(goof) == true) {
		desiredScene = "signHome1";
	}
	wordlist = "creampies / dickings / dicks / penis / cocks / bareback";
	if (wordlist.includes(goof) == true) {
		desiredScene = "signHome2";
	}
	wordlist = "blowjobs / deepthroats / suckjobs / knobgobbles / knobgobbling / succs / sucks / sucking / mouths / faces";
	if (wordlist.includes(goof) == true) {
		desiredScene = "signHome3";
	}
	wordlist = "uses / sex / pussy / cunts / twats / vaginals / vaginas / fucking / penetration";
	if (wordlist.includes(goof) == true) {
		desiredScene = "signHome4";
	}
	wordlist = "body / woman / gropings / samples / play / tits / boobs / breasts";
	if (wordlist.includes(goof) == true) {
		desiredScene = "signHome5";
	}
	wordlist = "anal / buttsex / buttsluts / buttfucks / booty / booty / ass / assholes / sodomy / sodomizations";
	if (wordlist.includes(goof) == true) {
		desiredScene = "signHome6";
	}
	wordlist = "titfucks / titjobs / titfuckings / boobjobs / boobfucks / boobfuckings";
	if (wordlist.includes(goof) == true) {
		desiredScene = "signOutdoor1";
	}
	writeEvent(desiredScene);
}

//Menu
function updateMenu() {
	var researchStatus = 0;
	var researchTotal = 0;
	document.getElementById('playerName').innerHTML = data.player.fName + ' ' + data.player.lName;
	if (data.player.loop != true) {
		document.getElementById('day').innerHTML = "Day " + data.player.day + " - " + data.player.time;
	}
	else {
		document.getElementById('day').innerHTML = "Day " + data.player.day + " - " + data.player.time + " (Frozen)";
	}
	document.getElementById('playerImage').src = "scripts/gamefiles/characters/"+data.player.character+".jpg";
	for (i = 0; i < galleryArray.length; i++) {
		if (galleryArray[i].dark != true) {
			researchTotal += 1;
			if (galleryCheck(galleryArray[i].index) == true) {
				researchStatus += 1;
			}
		}
	}
	document.getElementById('scenesTotal').innerHTML = researchStatus + ' of ' + researchTotal + ' total scenes unlocked';
	researchStatus = 0;
	researchTotal = 0;
	if (data.player.artifact1 != "") {
		document.getElementById('playerArtifact1').src = "scripts/gamefiles/items/"+data.player.artifact1+".jpg";
		document.getElementById('playerArtifact1Mobile').innerHTML = data.player.artifact1;
		for (i = 0; i < artifactArray.length; i++) {
			if (artifactArray[i].index == data.player.artifact1) {
				name = artifactArray[i].index;
				title = artifactArray[i].title;
			}
		}
		for (i = 0; i < galleryArray.length; i++) {
			if (galleryArray[i].index.includes(name)) {
				researchTotal += 1;
				if (galleryCheck(galleryArray[i].index) == true) {
					researchStatus += 1;
				}
			}
		}
		document.getElementById('artifact1Name').innerHTML = title;
		document.getElementById('artifact1Total').innerHTML = researchStatus + ' of ' + researchTotal + ' scenes unlocked';
		document.getElementById("playerArtifact1").style.border = "3px solid white";
		document.getElementById("playerArtifact1").style.width = "42%";
	}
	else {
		document.getElementById("playerArtifact1").style.width = "0%";
		document.getElementById("playerArtifact1").style.border = "none";
		document.getElementById('artifact1Name').innerHTML = "";
	}
	researchStatus = 0;
	researchTotal = 0;
	if (data.player.artifact2 != "") {
		document.getElementById('playerArtifact2').src = "scripts/gamefiles/items/"+data.player.artifact2+".jpg";
		document.getElementById('playerArtifact2Mobile').innerHTML = data.player.artifact2;
		for (i = 0; i < artifactArray.length; i++) {
			if (artifactArray[i].index == data.player.artifact2) {
				name = artifactArray[i].index;
				title = artifactArray[i].title;
			}
		}
		for (i = 0; i < galleryArray.length; i++) {
			if (galleryArray[i].index.includes(name)) {
				researchTotal += 1;
				if (galleryCheck(galleryArray[i].index) == true) {
					researchStatus += 1;
				}
			}
		}
		document.getElementById('artifact2Name').innerHTML = title;
		document.getElementById('artifact2Total').innerHTML = researchStatus + ' of ' + researchTotal + ' scenes unlocked';
		document.getElementById("playerArtifact2").style.border = "3px solid white";
		document.getElementById("playerArtifact2").style.width = "42%";
	}
	else {
		document.getElementById("playerArtifact2").style.width = "0%";
		document.getElementById("playerArtifact2").style.border = "none";
		document.getElementById('artifact2Name').innerHTML = "";
	}
}

function changeName() {
	data.player.fName = document.getElementById('nameSubmission').value;
	updateMenu();
}

function flashMoney() {
	flashy();
	setTimeout(flashy, 1000);
}

function flashy() {
	document.getElementById('playerMoney').style.color = (document.getElementById('playerMoney').style.color == 'green' ? 'white' : 'green');
}

function renameEveryone() {
	for (i = 0; i < data.story.length; i++) {
		var sheet = 'nameSubmission' + i + '1';
		data.story[i].fName = document.getElementById(sheet).value;
		var sheet = 'nameSubmission' + i + '2';
		data.story[i].lName = document.getElementById(sheet).value;
	}
	sceneTransition('toolbox');
}

function renamePlayer() {
	data.player.fName = document.getElementById('nameSubmission').value;
	data.player.lName = document.getElementById('lastSubmission').value;
	data.player.age = document.getElementById('ageSubmission').value;
	data.player.color = document.getElementById('colorSubmission').value;
	sceneTransition("prologue3");
}

function renamePlayerSkip() {
	data.player.fName = document.getElementById('nameSubmission').value;
	data.player.lName = document.getElementById('lastSubmission').value;
	sceneTransition("newDay");
}

function equip(n) {
	data.player.artifact2 = n;
	updateMenu();
	document.getElementById('output').innerHTML = '';
	for (i = 0; i < artifactArray.length; i++) {
		if (artifactArray[i].index == n) {
			var title = artifactArray[i].title;
		}
	}
	writeText("You've equipped the " + title);
	writeTransition(data.player.currentScene, "Go back");
}

function store(n) {
	if (tempScene != 'storage') {
		if (data.player.storage == null) {
			data.player.storage = "";
		}
		for (i = 0; i < artifactArray.length; i++) {
			if (artifactArray[i].index == n) {
				data.player.storage += artifactArray[i].index;
			}
		}
	}
	else {
		for (i = 0; i < artifactArray.length; i++) {
			if (artifactArray[i].index == n) {
				console.log('now removing '+n+' from storage');
				data.player.storage = data.player.storage.replace(n,'');
			}
		}
	}
	sceneTransition(tempScene);
}

function checkArtifact(n) {
	if (n == data.player.artifact1 || n == data.player.artifact2) {
		return true;
	}
	else {
		return false;
	}
}

//Saving
function saveSlot(slot) {
	saveName = "data" + slot;
	localStorage.setItem(saveName,JSON.stringify(data));
	var date = new Date();
	date = date.toDateString() + " " + date.toLocaleTimeString();
	saveName = "date" + slot;
	localStorage.setItem(saveName,date);
	generateSave();
}

function deleteSlot(slot) {
	saveName = "data" + slot;
	localStorage.removeItem(saveName);
	console.log("Saved data");
	saveName = "date" + slot;
	localStorage.removeItem(saveName);
	generateSave();
}

function loadSlot(slot) {
	saveName = "data" + slot;
	data = localStorage.getItem(saveName);
	data = JSON.parse(data);
	console.log("loaded data");
	if (data.player.currentScene.includes("scenario") != true) {
		sceneTransition(data.player.currentScene);
	}
	else {
		console.log("scenario save data detected for scenario " +data.player.currentScenario +", now loading");
		console.log(data);
		requestType = "refreshed";
		var filename = "scenarios/"+data.player.currentScenario+"/sceneList.js";
		var fileref=document.createElement('script');
		fileref.setAttribute("src", filename);
		
		//Append new script file
		document.getElementsByTagName("head")[0].appendChild(fileref);
		
		//Delete script file afterwards
		var select = document.getElementsByTagName("head")[0];
		select.removeChild(select.lastChild);
	}
	updateSave();
	nameUpdate();
}

function saveFile(){
	hideStuff();
	document.getElementById('output').innerHTML = '';
	writeText("Copy the full length below and paste it into the input box when you want to load the data. I recommend copying to a txt file.");
	writeText("" + JSON.stringify(data) + "");
	writeTransition(data.player.currentScene, "Finished copying");
}

function loadFile(){
	data = prompt("Please paste the data", "");
	data = JSON.parse(data);
	saveSlot(160);
	loadSlot(160);
	if (data.player.fName == null) {
		alert("Invalid pasted data! If we tried to use this, the game would completely break!");
		loadSlot(161);
	}
	else {
		saveSlot(160);
		loadSlot(160);
	}
	updateSave();
	nameUpdate();
}

function generateSave() {
	for (i = 151; i < 159; i++) {
		var searchName = 'data' + i;
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
	saveSlot(160);
}

//Gallery
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

function generateGalleryNav() {
	for (i = 0; i < artifactArray.length; i++) {
		if (artifactArray[i].dark == false) {
			document.getElementById('output').innerHTML += `
				<div class = "textBox" onclick="generateArtifactPage('` + artifactArray[i].index + `')" >
					<img class = "textThumb" src = "scripts/gamefiles/items/`+ artifactArray[i].index +`.jpg">
					<br>
					<span class = "choiceText" onclick="generateArtifactPage('` + artifactArray[i].index + `')">`+artifactArray[i].title +`</span>
				</div>
				<br>
			`;
		}
	}
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].met == true) {
			document.getElementById('output').innerHTML += `
			<div class = "textBox" onclick="generateGirlPage('` + data.story[i].index + `')" >
				<img class = "textThumb" src = "scripts/gamefiles/profiles/`+ data.story[i].index +`.jpg">
				<br>
				<span class = "choiceText" onclick="generateGirlPage('` + data.story[i].index + `')">`+data.story[i].fName + ` ` + data.story[i].lName +`</span>
			</div>
			<br>
			`;
		}
	}
	document.getElementById('output').innerHTML += `
		<div class = "textBox" onclick="generateSwallowsPage()" >
			<img class = "textThumb" src = "scripts/gamefiles/profiles/swallows.png">
			<br>
			<span class = "choiceText" onclick="generateSwallowsPage()">Scenes written by Swallows999</span>
		</div>
		<br>
	`;
	document.getElementById('output').innerHTML += `
		<div class = "textBox" onclick="generateCryptoPage()" >
			<img class = "textThumb" src = "scripts/gamefiles/profiles/crypto.png">
			<br>
			<span class = "choiceText" onclick="generateCryptoPage()">Scenes written by Captain CryptoGreek</span>
		</div>
		<br>
	`;
	writeFunction("generateDarkGalleryNav()", "View the dark vault gallery");
}

function generateDarkGalleryNav() {
	document.getElementById('output').innerHTML = '';
	for (i = 0; i < artifactArray.length; i++) {
		if (artifactArray[i].dark == true) {
			document.getElementById('output').innerHTML += `
				<div class = "textBox" onclick="generateArtifactPage('` + artifactArray[i].index + `')" >
					<img class = "textThumb" src = "scripts/gamefiles/items/`+ artifactArray[i].index +`.jpg">
					<br>
					<span class = "choiceText" onclick="generateArtifactPage('` + artifactArray[i].index + `')">`+artifactArray[i].title +`</span>
				</div>
				<br>
			`;
		}
	}
	writeTransition("notebookResearch", "Go back");
}

function generateArtifactPage(n) {
	document.getElementById('output').innerHTML = '';
	writeBig("scripts/gamefiles/items/"+n+".jpg");
	console.log('checking for ' + n);
	for (i = 0; i < galleryArray.length; i++) {
		//console.log(galleryArray[i].index);
		//console.log(i);
		if (galleryArray[i].index.includes(n)) {
			console.log('event found, unlock status is ' + galleryCheck(galleryArray[i]));
			if (galleryCheck(galleryArray[i].index) == true) {
				writeFunction ("writeEvent('"+galleryArray[i].index+"')", galleryArray[i].name)
			}
		}
	}
	writeTransition(data.player.currentScene, "Go back");
}

function generateSwallowsPage() {
	document.getElementById('output').innerHTML = '';
	writeBig("scripts/gamefiles/profiles/swallows.png");
	for (i = 0; i < data.gallery.length; i++) {
		if (data.gallery[i].girl.includes('swallows')) {
			writeFunction ("writeEvent('"+data.gallery[i].index+"')", data.gallery[i].name)
		}
	}
	writeTransition(data.player.currentScene, "Go back");
}

function generateCryptoPage() {
	document.getElementById('output').innerHTML = '';
	writeBig("scripts/gamefiles/profiles/crypto.png");
	for (cryptoIndex = 0; cryptoIndex < galleryArray.length; cryptoIndex++) {
		if (galleryArray[cryptoIndex].girl.includes('crypto')) {
			if (galleryCheck(galleryArray[cryptoIndex].index) == true){
				writeFunction ("writeEvent('"+galleryArray[cryptoIndex].index+"')", galleryArray[cryptoIndex].name)
			}
		}
	}
	writeTransition(data.player.currentScene, "Go back");
}

function generateGirlPage(n) {
	document.getElementById('output').innerHTML = '';
	writeBig("scripts/gamefiles/characters/"+ n +".jpg");
	for (i = 0; i < data.gallery.length; i++) {
		if (data.gallery[i].girl.includes(n)) {
			writeFunction ("writeEvent('"+data.gallery[i].index+"')", data.gallery[i].name)
		}
	}
	writeTransition(data.player.currentScene, "Go back");
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
	console.log('now generating logbook navigation');
	document.getElementById('logbookLeft').innerHTML = ``;
	document.getElementById('logbookLeft').innerHTML += `<p class = "logbookSwitch" onclick = "switchDesc('player')">` + data.player.fName + `</p>`;
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].met == true) {
			document.getElementById('logbookLeft').innerHTML += `<h3 class = "button" onclick = "switchDesc('`+i+`')">` + data.story[i].fName + `</h3>`;
		}
	}
	switchDesc('player');
}

function switchDesc(n) {
	if (n != "player") {
		console.log("now loading logbook for character ID " + n + " aka " + data.story[n].index);
		if (imagesDisabled != true) {
			document.getElementById('logbookRight').innerHTML = `
				<img id="selfImage" class="selfImage" src="scripts/gamefiles/characters/`+data.story[n].index+data.story[n].image+`.jpg">
			`;
		}
		document.getElementById('logbookRight').innerHTML += `
		<div class=" lb_primary">
			<h2 class = "selfDesc">Name: `+data.story[n].fName+` `+data.story[n].lName+`</h2>
		</div><div class=" lb_secondary">
			<p class = "selfDesc">`+logbookArray[n].desc+`</p>
			<p class = "selfDesc">`+logbookArray[n].body+`</p>
			<p class = "selfDesc">`+logbookArray[n].clothes+`</p>
			<p class = "selfDesc">   </p>
		</div
		`;
	}
	else {
		if (imagesDisabled != true) {
			document.getElementById('logbookRight').innerHTML = `
				<img id="selfImage" class="selfImage" src="scripts/gamefiles/characters/`+data.player.character+`.jpg">
			`;
		}
		var researchStatus = 0;
		var researchTotal = 0;
		for (i = 0; i < galleryArray.length; i++) {
			if (galleryArray[i].dark != true) {
				researchTotal += 1;
				if (galleryCheck(galleryArray[i].index) == true) {
					researchStatus += 1;
				}
			}
		}
		document.getElementById('logbookRight').innerHTML += `
		<div class=" lb_primary">
			<h2 class = "selfDesc">Name: `+data.player.fName+` `+data.player.lName+`</h2>
		</div><div class=" lb_secondary">
			<p class = "selfDesc">Day: `+data.player.day+`</p>
			<p class = "selfDesc">Time: `+data.player.time+`</p>
			<p class = "selfDesc">Total scenes unlocked: `+researchStatus+` of `+researchTotal+`</p>
		</div>
		`;
		if (data.player.artifact1 != "") {
			for (i = 0; i < artifactArray.length; i++) {
				if (artifactArray[i].index == data.player.artifact1) {
					name1 = artifactArray[i].index;
					title1 = artifactArray[i].title;
				}
			}
			var research1Status = 0;
			var research1Total = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes(name1)) {
					research1Total += 1;
					if (galleryCheck(galleryArray[i].index) == true) {
						research1Status += 1;
					}
				}
			}
			document.getElementById('logbookRight').innerHTML += `
			<p class = "selfDesc">First equipped artifact: `+title1+`<br>`+research1Status+` of `+research1Total+` scenes unlocked</p>
			`;
		}
		if (data.player.artifact2 != "") {
			for (i = 0; i < artifactArray.length; i++) {
				if (artifactArray[i].index == data.player.artifact2) {
					name2 = artifactArray[i].index;
					title2 = artifactArray[i].title;
				}
			}
			var research2Status = 0;
			var research2Total = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes(name2)) {
					research2Total += 1;
					if (galleryCheck(galleryArray[i].index) == true) {
						research2Status += 1;
					}
				}
			}
			document.getElementById('logbookRight').innerHTML += `
			<p class = "selfDesc">Second equipped artifact: `+title2+`<br>`+research2Status+` of `+research2Total+` scenes unlocked</p>
			`;
		}
	}
}

function generateLogbookGallery(n) {
	for (i = 0; i < galleryArray.length; i++) {
		if (galleryArray[i].index.includes(n)) {
			if (galleryCheck(galleryArray[i].index) == true) {
				document.getElementById('logbookRight').innerHTML += '<p class = "selfDesc">' + galleryArray[i].name + '<br>This scene has been unlocked. Use the laptop to see it again.</p>';
			}
			else {
				document.getElementById('logbookRight').innerHTML += '<p class = "selfDesc">' + galleryArray[i].name + '<br>' + galleryArray[i].hint + '</p>';
				break;
			}
		}
	}
}

//Cheating
function cheat() {
	//If you're reading this, then please link to my patreon post instead of posting the cheats. The release post of v2 already has a list of cheat codes, and is visible to non-patrons
	var goof = document.getElementById('cheatSubmission').value;
	goof = goof.toLowerCase();
	var goofMessage = "Code does not exist";
	console.log("Testing cheat code " + goof);
	switch (goof) {
		case "swallows999": {
			goofMessage = "Welcome, Swallows."
			changeBody("swallows");
			break;
		}
		case "cryptogreek": {
			goofMessage = "Welcome, Cryptogreek."
			changeBody("crypto");
			break;
		}
		case "cute boi": {
			goofMessage = "Bodytype changed. Stay cute!"
			changeBody("basic");
			break;
		}
		case "cute girl": {
			goofMessage = "Bodytype changed. Stay cute!"
			changeBody("shemale");
			break;
		}
		case "noodlemaster": {
			for (noodle = 0; noodle < galleryArray.length; noodle++) {
				if (galleryCheck(galleryArray[noodle].index)== false) {
					unlockScene(galleryArray[noodle].index);
				}
			}
			goofMessage = "Master code accepted. All scenes unlocked."
			break;
		}
		case "anomaly hunter": {
			data.player.currentScene = "hunterDemo";
			goofMessage = ""
			break;
		}
	}
	sceneTransition(data.player.currentScene);
	writeText(goofMessage);
}

function prison() {
	//If you're reading this, then please link to my patreon post instead of posting these. The cheat code post already has a list of cheat codes, and is visible to non-patrons
	var goof = document.getElementById('prisonerSubmission').value;
	goof = goof.toLowerCase();
	var goofMessage = "Code does not exist";
	console.log("Testing cheat code " + goof);
	switch (goof) {
		case "scp": {
			if (data.player.color.includes('scp') == false) {
				goofMessage = "Passcode accepted. Prisoner ID 10996-1 and 10996-2 now available on request."
				data.player.color += 'scp';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "securecontainprotect": {
			if (data.player.color.includes('scp') == false) {
				goofMessage = "Passcode accepted. Prisoner ID 10996-1 and 10996-2 now available on request."
				data.player.color += 'scp';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "secure contain protect": {
			if (data.player.color.includes('scp') == false) {
				goofMessage = "Passcode accepted. Prisoner ID 10996-1 and 10996-2 now available on request."
				data.player.color += 'scp';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "lobotomy": {
			if (data.player.color.includes('lobotomy') == false) {
				goofMessage = "Passcode accepted. Prisoner ID 10996-3 and 10996-4 now available on request."
				data.player.color += 'lobotomy';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "lobotomycorp": {
			if (data.player.color.includes('lobotomy') == false) {
				goofMessage = "Passcode accepted. Prisoner ID 10996-3 and 10996-4 now available on request."
				data.player.color += 'lobotomy';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "lobotomy corporation": {
			if (data.player.color.includes('lobotomy') == false) {
				goofMessage = "Passcode accepted. Prisoner ID 10996-3 and 10996-4 now available on request."
				data.player.color += 'lobotomy';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "umbrella": {
			if (data.player.color.includes('umbrella') == false) {
				goofMessage = "Passcode accepted. Secure Artifact ID 10996-5 now available on request."
				data.player.color += 'umbrella';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "resident evil": {
			if (data.player.color.includes('umbrella') == false) {
				goofMessage = "Passcode accepted. Secure Artifact ID 10996-5 now available on request."
				data.player.color += 'umbrella';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "silent hill": {
			if (data.player.color.includes('silent') == false) {
				goofMessage = "Passcode accepted. Prisoner ID 10996-6-12 now available on request."
				data.player.color += 'silent';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "warehouse13": {
			if (data.player.color.includes('warehouse') == false) {
				goofMessage = "Passcode accepted. Secure Artifact ID 10996-13 now available on request."
				data.player.color += 'warehouse';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "warehouse 13": {
			if (data.player.color.includes('warehouse') == false) {
				goofMessage = "Passcode accepted. Secure Artifact ID 10996-13 now available on request."
				data.player.color += 'warehouse';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "fringe": {
			if (data.player.color.includes('fringe') == false) {
				goofMessage = "Passcode accepted. Prisoner ID 10996-14 now available on request."
				data.player.color += 'fringe';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "ethics": {
			if (data.player.color.includes('ethics') == false) {
				goofMessage = "Passcode accepted. Secure Artifact ID 10996-15 now available on request."
				data.player.color += 'ethics';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "welcome to ethics": {
			if (data.player.color.includes('ethics') == false) {
				goofMessage = "Passcode accepted. Secure Artifact ID 10996-15 now available on request."
				data.player.color += 'ethics';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
	}
	sceneTransition(data.player.currentScene);
	writeText(goofMessage);
}

function listCheats() {
	if (data.player.color.includes('scp') == true) {
		document.getElementById('output').innerHTML +=`
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/doctor.jpg">
			<p class = "textName">'Plague' Doctor</p>
			<p class = "textName">Research Status: N/A</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('doctorResearch')">Research</span>   
			</p>
			<p class = "textName">A mysterious woman dressed in a skimpy version of a medieval plague doctor's uniform. Very dangerous.</p>
		</div>
		<br>
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/talisman.jpg">
			<p class = "textName">Talisman</p>
			<p class = "textName">Research Status: N/A</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('talismanResearch')">Research</span>
			</p>
			<p class = "textName">A possessed talisman. There's a sticky note on it saying 'DO NOT TOUCH'</p>
		</div>
		<br>
		`;
	}
	if (data.player.color.includes('lobotomy') == true) {
		document.getElementById('output').innerHTML +=`
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/magical.jpg">
			<p class = "textName">Magical Girl</p>
			<p class = "textName">Research Status: N/A</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('magicalResearch')">Research</span>
			</p>
			<p class = "textName">A woman proclaiming herself to be a champion of justice. You're pretty sure she was fished up from a river somewhere.</p>
		</div>
		<br>
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/blue.jpg">
			<p class = "textName">Blue Star</p>
			<p class = "textName">Blue Star</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('blueResearch')">Blue Star</span>
			</p>
			<p class = "textName">Blue Star</p>
		</div>
		<br>
		`;
	}
	if (data.player.color.includes('warehouse') == true) {
		document.getElementById('output').innerHTML +=`
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/kettle.jpg">
			<p class = "textName">Wish-granting Kettle</p>
			<p class = "textName">Research Status: N/A</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('kettleResearch')">Research</span>
			</p>
			<p class = "textName">A rusty old kettle. It showed some promise at one point, but it's creators clearly had the wrong focus and it just isn't as shiny as everything else.</p>
		</div>
		<br>
		`;
	}
	if (data.player.color.includes('fringe') == true) {
		document.getElementById('output').innerHTML +=`
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/fringe.jpg">
			<p class = "textName">Ultra Top Secret Room</p>
			<p class = "textName">Research Status: N/A</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('fringeResearch')">Research</span>
			</p>
			<p class = "textName">A super locked room, you aren't allowed to go in here. The end of the door's paint job is much, much more lazily done than the rest.</p>
		</div>
		<br>
		`;
	}
	if (data.player.color.includes('umbrella') == true) {
		document.getElementById('output').innerHTML +=`
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/umbrella.jpg">
			<p class = "textName">Zombie Virus</p>
			<p class = "textName">Research Status: N/A</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('umbrellaResearch')">Research</span>
			</p>
			<p class = "textName">A vial containing a zombification virus. Hopefully it makes hot zombies, not gross ones.</p>
		</div>
		<br>
		`;
	}
	if (data.player.color.includes('silent') == true) {
		document.getElementById('output').innerHTML +=`
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/silent.jpg">
			<p class = "textName">Nurse's Room</p>
			<p class = "textName">Research Status: N/A</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('silentResearch')">Research</span>
			</p>
			<p class = "textName">A room full of strange creatures, which probably symbolize a really deep message about sexuality or something.</p>
		</div>
		<br>
		`;
	}
	if (data.player.color.includes('ethics') == true) {
		document.getElementById('output').innerHTML +=`
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/ethics.jpg">
			<p class = "textName">Ethics Rock</p>
			<p class = "textName">Research Status: N/A</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('ethicsResearch')">Research</span>
			</p>
			<p class = "textName">A rock that dispenses lines of  ethical ramblings. It's a rock though, so it probably doesn't know what its talking about.</p>
		</div>
		<br>
		`;
	}
}

function kettleWish() {
	var goof = document.getElementById('kettleSubmission').value;
	sceneTransition(data.player.currentScene);
	if (goof == "ferret" || goof == "ferrets") {
		kettleCounter +=2;
		writeText("A good wish! For this, you get two ferrets. You have "+kettleCounter+" ferrets.");
	}
	else {
		kettleCounter +=1;
		writeText("Suddenly, out of nowhere, a ferret is here. You have "+kettleCounter+" ferret(s).");
	}
	switch (kettleCounter) {
		case 5:
			writeText("You have a dazzle of ferrets now, they're very cute.");
		break;
		case 7:
			writeText("You might be making too many ferrets. Maybe try wishing for something else?");
		break;
		case 9:
			writeText("Soon you will have too many ferrets.");
		break;
		case 10:
			writeText("You feel like if you keep making ferrets, nothing but ferrets will exist.");
		break;
		case 12:
			writeText("The kettle rumbles a little this time, as if saying 'If this many ferrets do not satisfy you, no wish will.'");
		break;
		case 13:
			writeText("The ferret making will continue forever. When you are satisfied, please scream the number to the heavens.");
		break;
	}
}

function writeWardrobe() {
	writeMed("scripts/gamefiles/characters/red.jpg");
	writeFunction("changeBody('red')", "Red");
	writeMed("scripts/gamefiles/characters/alternate1.jpg");
	writeFunction("changeBody('alternate1')", "Alternate 1");
	writeMed("scripts/gamefiles/characters/alternate2.jpg");
	writeFunction("changeBody('alternate2')", "Alternate 2");
	writeMed("scripts/gamefiles/characters/alternate3.jpg");
	writeFunction("changeBody('alternate3')", "Alternate 3");
}

function checkBody(n) {
	console.log("Now checking for bodytype " + n);
	for (i = 0; i < data.bodytypes.length; i++) {
		if (data.bodytypes[i].index.includes(n)) {
			return true;
			break;
		}
	}
	return false;
}

function changeBody(n) {
	data.player.character = n;
	updateMenu();
}

//Anomaly Hunter
function missionSelect() {
	//If you're reading this, then please link to my patreon post instead of posting the cheats. The release post of v2 already has a list of cheat codes, and is visible to non-patrons
	var goof = document.getElementById('cheatSubmission').value;
	goof = goof.toLowerCase();
	loadScenario(goof);
	writeText("If you're reading this, reality has crumbled and this agent has been deemed to be unrecoverable. A fireteam is inbound.");
}

function loadScenario(name) {
	requestType = "load";
	var filename = "scenarios/"+name+"/sceneList.js";
	var fileref=document.createElement('script');
	fileref.setAttribute("src", filename);
	
	//Append new script file
	document.getElementsByTagName("head")[0].appendChild(fileref);
	
	//Delete script file afterwards
	var select = document.getElementsByTagName("head")[0];
	select.removeChild(select.lastChild);
}