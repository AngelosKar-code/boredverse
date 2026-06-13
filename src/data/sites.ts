export interface BoredSite {
  id: string;
  name: string;
  url: string;
  description: string;
  category: 'games' | 'creative' | 'explore' | 'weird';
  iconName: string;
  accentColor: string; // HSL color
  timeWasteRating: number; // 1-5 stars
  coolFact: string;
}

export const boredSites: BoredSite[] = [
  {
    id: 'window-swap',
    name: 'Window Swap',
    url: 'https://www.window-swap.com/',
    description: 'Look out of a random window somewhere in the world. Enjoy peaceful vistas, rain-slicked streets, or lazy cats from other people\'s homes.',
    category: 'explore',
    iconName: 'Tv',
    accentColor: 'hsl(190, 100%, 50%)', // Neon Cyan
    timeWasteRating: 4,
    coolFact: 'Allows you to watch scenic, user-submitted views from over 120 different countries.'
  },
  {
    id: 'infinite-craft',
    name: 'Infinite Craft',
    url: 'https://neal.fun/infinite-craft/',
    description: 'Combine Water, Fire, Earth, and Wind to create everything from Dinosaurs to Barack Obama. An AI-powered crafting game with limitless possibilities.',
    category: 'creative',
    iconName: 'Flame',
    accentColor: 'hsl(28, 100%, 55%)', // Neon Orange
    timeWasteRating: 5,
    coolFact: 'Uses a large language model in the background to generate logical outcomes for absolute gibberish combinations.'
  },
  {
    id: 'password-game',
    name: 'The Password Game',
    url: 'https://neal.fun/password-game/',
    description: 'Create a password, but you must follow increasingly absurd and chaotic rules, like feeding a digital chicken or matching the current phase of the moon.',
    category: 'games',
    iconName: 'Key',
    accentColor: 'hsl(328, 100%, 59%)', // Neon Magenta
    timeWasteRating: 5,
    coolFact: 'Most players lose around Rule 24 due to their chicken (Paul) starving or getting burned.'
  },
  {
    id: 'spend-bill-gates-money',
    name: 'Spend Bill Gates\' Money',
    url: 'https://neal.fun/spend/',
    description: 'You are given $100,000,000,000. Try your best to empty the bank account by purchasing supercars, skyscrapers, sports teams, and Mona Lisas.',
    category: 'weird',
    iconName: 'Coins',
    accentColor: 'hsl(145, 100%, 45%)', // Neon Green
    timeWasteRating: 3,
    coolFact: 'Buying a Boeing 747 only takes 0.25% of the total budget. You\'ll need to buy 400 of them to go broke!'
  },
  {
    id: 'pointer-pointer',
    name: 'Pointer Pointer',
    url: 'https://pointerpointer.com/',
    description: 'Place your cursor anywhere on the screen, wait a second, and the site will find a random photo of someone pointing exactly at your mouse pointer.',
    category: 'weird',
    iconName: 'MousePointerClick',
    accentColor: 'hsl(270, 95%, 65%)', // Neon Violet
    timeWasteRating: 4,
    coolFact: 'A highly complex mapping of hundreds of thousands of pointing coordinates to real photos.'
  },
  {
    id: 'radio-garden',
    name: 'Radio Garden',
    url: 'https://radio.garden/',
    description: 'Rotate a 3D globe and tune into live radio stations broadcasting in real-time from Moscow, Tokyo, small desert towns, or tropical islands.',
    category: 'explore',
    iconName: 'Radio',
    accentColor: 'hsl(170, 100%, 45%)', // Mint Green
    timeWasteRating: 4,
    coolFact: 'You can listen to local radio in Antarctica, deep ocean vessels, and tiny isolated island nations.'
  },
  {
    id: 'the-useless-web',
    name: 'The Useless Web',
    url: 'https://theuselessweb.com/',
    description: 'A legendary directory portal that whisks you away to a random, single-purpose website—like a horse spinning, or a door slamming.',
    category: 'weird',
    iconName: 'Sparkles',
    accentColor: 'hsl(52, 100%, 50%)', // Neon Yellow
    timeWasteRating: 5,
    coolFact: 'It has been introducing bored users to the strangest corners of the web since 2012.'
  },
  {
    id: 'bored-button',
    name: 'Bored Button',
    url: 'https://www.boredbutton.com/',
    description: 'Press the giant red button to get instantly redirected to a hand-picked, quick-play mini-game, card trick, puzzle, or digital toy.',
    category: 'games',
    iconName: 'Gamepad2',
    accentColor: 'hsl(0, 100%, 60%)', // Bright Red
    timeWasteRating: 4,
    coolFact: 'Cycles through hundreds of micro-games specifically built to load in milliseconds.'
  },
  {
    id: 'quick-draw',
    name: 'Quick, Draw!',
    url: 'https://quickdraw.withgoogle.com/',
    description: 'Draw a prompt (like "trumpet" or "submarine") in 20 seconds, and watch Google\'s neural network guess what you are drawing in real-time.',
    category: 'creative',
    iconName: 'PenTool',
    accentColor: 'hsl(205, 100%, 55%)', // Ocean Blue
    timeWasteRating: 4,
    coolFact: 'Built on the world\'s largest doodling dataset, helping train neural networks to recognize handwriting.'
  },
  {
    id: 'weave-silk',
    name: 'Weave Silk',
    url: 'http://weavesilk.com/',
    description: 'Draw beautiful, symmetrical, flowing neon ribbons with your mouse. Create mystical generative art with just a few strokes.',
    category: 'creative',
    iconName: 'Wind',
    accentColor: 'hsl(180, 100%, 50%)', // Cyan
    timeWasteRating: 4,
    coolFact: 'Uses custom particle physics and mirroring math to turn chaotic mouse drags into organized masterpieces.'
  },
  {
    id: 'zoomquilt',
    name: 'ZoomQuilt',
    url: 'https://zoomquilt.org/',
    description: 'An infinitely zooming painting that takes you through a continuous fantasy landscape populated with bizarre creatures and fairytale castles.',
    category: 'creative',
    iconName: 'Eye',
    accentColor: 'hsl(300, 100%, 60%)', // Neon Pink-Purple
    timeWasteRating: 4,
    coolFact: 'A collaborative artwork created by artists who aligned their borders to make the zoom seamless.'
  },
  {
    id: 'hackertyper',
    name: 'Hacker Typer',
    url: 'https://hackertyper.net/',
    description: 'Mash random keys on your keyboard and watch high-tech green hacker code write itself onto the screen. Perfect for looking busy.',
    category: 'weird',
    iconName: 'Terminal',
    accentColor: 'hsl(120, 100%, 45%)', // Terminal Green
    timeWasteRating: 3,
    coolFact: 'Commonly used in movies and TV shows to make actors look like super-hackers.'
  },
  {
    id: 'geoguessr',
    name: 'GeoGuessr',
    url: 'https://www.geoguessr.com/',
    description: 'Dropped somewhere on Earth in Google Street View. Inspect soil colors, road signs, and sun positions to pinpoint where you are on the map.',
    category: 'games',
    iconName: 'Compass',
    accentColor: 'hsl(40, 100%, 50%)', // Amber
    timeWasteRating: 5,
    coolFact: 'Expert players can recognize the exact country in under a second just by looking at a dirt road or utility pole design.'
  },
  {
    id: 'little-alchemy-2',
    name: 'Little Alchemy 2',
    url: 'https://littlealchemy2.com/',
    description: 'Combine base elements in an ever-growing inventory to unlock life, metals, mythological creatures, and cosmic bodies.',
    category: 'creative',
    iconName: 'FlaskConical',
    accentColor: 'hsl(160, 100%, 40%)', // Emerald
    timeWasteRating: 5,
    coolFact: 'Features 720 discoverable items in the base game, ranging from simple mud to the concept of time itself.'
  },
  {
    id: 'incredibox',
    name: 'Incredibox',
    url: 'https://www.incredibox.com/',
    description: 'Drag and drop cool sound symbols onto a crew of beatboxers to create your own groovy accapella tracks and unlock cute animated choruses.',
    category: 'creative',
    iconName: 'Music',
    accentColor: 'hsl(260, 100%, 65%)', // Lavender Violet
    timeWasteRating: 4,
    coolFact: 'Began as a simple flash game in 2009 and is now used in music classes globally to teach rhythm.'
  },
  {
    id: 'game-2048',
    name: '2048',
    url: 'https://play2048.co/',
    description: 'Slide numbered tiles across a grid to merge identical numbers, aiming to double them up and build the legendary 2048 tile.',
    category: 'games',
    iconName: 'Grid3X3',
    accentColor: 'hsl(45, 100%, 55%)', // Gold
    timeWasteRating: 5,
    coolFact: 'Created in a single weekend by a 19-year-old developer, generating millions of players in a week.'
  },
  {
    id: 'sandspiel',
    name: 'Sandspiel',
    url: 'https://sandspiel.club/',
    description: 'A relaxing pixel-art physics sandbox. Mix sand, water, fire, plant seeds, acid, and gunpowder, and watch how they react together.',
    category: 'creative',
    iconName: 'Sandglass',
    accentColor: 'hsl(35, 80%, 60%)', // Sand Brown
    timeWasteRating: 4,
    coolFact: 'Runs a custom WebGL element simulation that calculates gas dispersion, liquid flows, and combustion rules in real-time.'
  },
  {
    id: 'scream-into-the-void',
    name: 'Scream Into the Void',
    url: 'https://screamintothevoid.com/',
    description: 'A therapeutic void. Type in whatever is bothering you or whatever makes you mad, click the button, and watch it get hurled deep into space.',
    category: 'weird',
    iconName: 'VolumeX',
    accentColor: 'hsl(330, 95%, 55%)', // Hot Pink
    timeWasteRating: 2,
    coolFact: 'Features no databases or saving mechanisms. Your typed text is instantly deleted the moment it disappears.'
  },
  {
    id: 'line-rider',
    name: 'Line Rider',
    url: 'https://www.linerider.com/',
    description: 'Draw lines to create a custom track, then press play to watch a little boy on a sled ride along your paths, doing flips and loop-de-loops.',
    category: 'creative',
    iconName: 'Sparkle',
    accentColor: 'hsl(195, 100%, 45%)', // Ice Blue
    timeWasteRating: 5,
    coolFact: 'Some users spend months building massive tracks synched perfectly to classical music compositions.'
  },
  {
    id: 'cat-bounce',
    name: 'Cat Bounce',
    url: 'https://cat-bounce.com/',
    description: 'An interactive website where bouncing cats rain down. Drag them, fling them across the screen, or press the "BOUNCE" button for chaos.',
    category: 'weird',
    iconName: 'Smile',
    accentColor: 'hsl(315, 100%, 65%)', // Neon Rose
    timeWasteRating: 3,
    coolFact: 'It was built entirely in canvas to demonstrate physics interactions with rotating images.'
  },
  {
    id: 'apod',
    name: 'Astronomy Picture of the Day',
    url: 'https://apod.nasa.gov/apod/astropix.html',
    description: 'Discover the cosmos! Each day a different high-resolution image of our universe is featured, along with a brief explanation by a professional astronomer.',
    category: 'explore',
    iconName: 'Orbit',
    accentColor: 'hsl(280, 100%, 50%)', // Deep Purple
    timeWasteRating: 3,
    coolFact: 'Administered by NASA and Michigan Tech, it is one of the oldest active pages on the web, starting in 1995.'
  },
  {
    id: 'scale-of-universe',
    name: 'Scale of the Universe',
    url: 'https://scaleofuniverse.com/',
    description: 'Scroll from the smallest subatomic quarks and strings all the way up to giant nebula, solar systems, galaxies, and the boundary of the observable universe.',
    category: 'explore',
    iconName: 'Maximize2',
    accentColor: 'hsl(185, 100%, 40%)', // Teal
    timeWasteRating: 4,
    coolFact: 'Created by two teenage brothers, it lets you click on objects to see height comparisons and fun facts.'
  },
  {
    id: 'geofs',
    name: 'GeoFS Flight Simulator',
    url: 'https://www.geo-fs.com/',
    description: 'A free online flight simulator using global satellite images. Fly commercial jets, paragliders, or hot air balloons over real geographical locations.',
    category: 'games',
    iconName: 'Plane',
    accentColor: 'hsl(210, 100%, 60%)', // Sky Blue
    timeWasteRating: 5,
    coolFact: 'Uses real global wind and weather data feeds to simulate actual flying conditions in real-time.'
  },
  {
    id: 'gridland',
    name: 'Gridland',
    url: 'http://gridland.doublespeakgames.com/',
    description: 'A match-3 puzzle game. During the day, match tiles to gather resources and build your village. At night, matching tiles summons monsters to fight.',
    category: 'games',
    iconName: 'Sword',
    accentColor: 'hsl(0, 100%, 45%)', // Crimson
    timeWasteRating: 5,
    coolFact: 'A deeply tactical twist on match-3 mechanics, where every swipe changes the time of day and danger level.'
  },
  {
    id: 'zoom-earth',
    name: 'Zoom Earth',
    url: 'https://zoom.earth/',
    description: 'Look at real-time satellite imagery of Earth. Track hurricanes, wildfires, clouds, and storms in high definition as they move.',
    category: 'explore',
    iconName: 'Globe',
    accentColor: 'hsl(135, 90%, 45%)', // Lime Green
    timeWasteRating: 4,
    coolFact: 'Pulls data from multiple geostationary weather satellites (GOES, Himawari, Meteosat) updating every 10-30 minutes.'
  }
];
