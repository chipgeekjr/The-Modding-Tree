let modInfo = {
	name: "The Synergism Tree",
	id: "syntree",
	author: "chipgeekjr",
	pointsName: "coins",
	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.3.2",
	name: "More Upgrades",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.1</h3><br>
		- Added Coin layer.<br>
	<h3>v0.1.1</h3><br>
		- Corrected tax rate.<br>
		- Fixed Coin upgrade I-V formula.<br>
	<h3>v0.2</h3><br>
		- Added Prestige and Runes layers.<br>
		- Added Diamond buildings.<br>
	<h3>v0.2.1</h3><br>
		- Added 49 achievements.<br>
	<h3>v0.2.2</h3><br>
		- Added Accelerator Boosts.<br>
		- Added a row of Coin upgrades.<br>
		- Added 2 rows of achievements.<br>
	<h3>v0.2.3</h3><br>
		- Added Autobuyers.<br>
		- Added Generator Upgrades.<br>
	<h3>v0.2.4</h3><br>
		- Added 2 Runes.<br>
		- Added Diamond Upgrades.<br>
	<h3>v0.3</h3><br>
		- Added Transcend layer.<br>
		- Added a row of Coin upgrades[WIP].<br>
		- Fixed building cost scaling.<br>
	<h3>v0.3.1</h3><br>
		- Fixed building costs not resetting on second prestige/boost.<br>
	<h3>v0.3.2</h3><br>
		- Fixed Coin upgrade VI not aplying it's effect.<br>
		- Fixed Diamond building costs resetting on Boost.<br>
		- Added effects to Coin upgrades XI-XV.<br>
		- Added a row of Prestige upgrades.<br>`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
let producePerSecond = new Decimal(0)
let produceFirst = new Decimal(0)
let produceSecond = new Decimal(0)
let produceThird = new Decimal(0)
let produceFourth = new Decimal(0)
let produceFifth = new Decimal(0)
let taxes = new Decimal(0)
let freeA = new Decimal(0)
let freeM = new Decimal(0)
let freeAB = new Decimal(0)

function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(0)
	/*for(id in tmp.c.buyables) {
		if(id != (31||32)) gain = gain.add(tmp.c.buyables[id].effect)
	}
	gain = gain.mul(getCoinMult())*/
	gain = taxes.times(40)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { 
	return {
		taxes: new Decimal(1),
		taxcheck: new Decimal(1),
		r: 1.00625
	}
}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}