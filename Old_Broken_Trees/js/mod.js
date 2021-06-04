let modInfo = {
	name: "The Alchemy Tree",
	id: "alchtree",
	author: "chipgeekjr",
	pointsName: "Null Energy",
	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	
	offlineLimit: 0,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.0.1",
	name: "Earth to Water",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0</h3><br>
		- Added things.<br>
		- Added stuff.`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return hasUpgrade("e", 11)
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if(converters["null-earth"].enabled == true) gain = gain.times(converters["null-earth"].drainRatio)
	//if (hasUpgrade("e", 12)) gain = gain.times(upgradeEffect("e", 12))
	if (hasUpgrade("e", 13)) gain = gain.times(upgradeEffect("e", 13))
	if (hasUpgrade("study", 11)) gain = gain.times(100)
	if (hasUpgrade("study", 13)) gain = gain.pow(1.2)
	return gain
}

// Used for converter rates, copy of getPointGen() in most ways
function getVirtualPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let vGain = new Decimal(1)
	//if (hasUpgrade("e", 12)) vGain = vGain.times(upgradeEffect("e", 12))
	if (hasUpgrade("e", 13)) vGain = vGain.times(upgradeEffect("e", 13))
	if (hasUpgrade("study", 11)) vGain = vGain.times(100)
	if (hasUpgrade("study", 13)) vGain = vGain.pow(1.2)
	return vGain

}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return { 
	converters: {}
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return false
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