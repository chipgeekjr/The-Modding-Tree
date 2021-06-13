// ************ Big Feature related ************

function respecBuyables(layer) {
	if (!layers[layer].buyables) return
	if (!layers[layer].buyables.respec) return
	if (!player[layer].noRespecConfirm && !confirm(tmp[layer].buyables.respecMessage || "Are you sure you want to respec? This will force you to do a \"" + (tmp[layer].name ? tmp[layer].name : layer) + "\" reset as well!")) return
	run(layers[layer].buyables.respec, layers[layer].buyables)
	updateBuyableTemp(layer)
	document.activeElement.blur()
}

function canAffordUpgrade(layer, id) {
	let upg = tmp[layer].upgrades[id]
	if(tmp[layer].deactivated) return false
	if (tmp[layer].upgrades[id].canAfford !== undefined) return tmp[layer].upgrades[id].canAfford
	let cost = tmp[layer].upgrades[id].cost
	return canAffordPurchase(layer, upg, cost)
}

function canBuyBuyable(layer, id) {
	let b = temp[layer].buyables[id]
	return (b.unlocked && run(b.canAfford, b) && player[layer].buyables[id].bought.lt(b.purchaseLimit) && !tmp[layer].deactivated)
}

function getCoinMult() {
	let coinMult = new Decimal(tmp.c.buyables[31].effect.mult).mul(tmp.c.buyables[32].effect.mult)
	if (player.p.crystals.gte(0)) coinMult = coinMult.times(tmp.p.effect)
	return coinMult
}

function getBuildingMults(layer, id) {
	let mult = new Decimal(1)
	switch(layer) {
		case "c": {
			switch(id) {
				case 11: {
					if (hasUpgrade("c", 11)) mult = mult.times(upgradeEffect("c", 11))
					if (hasUpgrade("c", 25)) mult = mult.times(upgradeEffect("c", 25))
					return mult;
				}
				case 12: {
					if (hasUpgrade("c", 12)) mult = mult.times(upgradeEffect("c", 12))
					return mult;
				}
				case 13: {
					if (hasUpgrade("c", 13)) mult = mult.times(upgradeEffect("c", 13))
					return mult;
				}
				case 21: {
					if (hasUpgrade("c", 14)) mult = mult.times(upgradeEffect("c", 14))
					return mult;
				}
				case 22: {
					if (hasUpgrade("c", 15)) mult = mult.times(upgradeEffect("c", 15))
					return mult;
				}
			}
		}
	}
}

function getLastCost(layer, id) {
	return player[layer]["b" + id + "cost"]
}

//Adapted from Synergism
//I barely understand what this math is doing.
const mantissaFactorialPartExtra = Math.log10(2 * Math.PI);
const exponentFactorialPartExtra = Math.log10(Math.E);

function factorialByExponent(fact) {
    ++fact;
    if (fact === 0) {
        return 0;
    }
    return ((Math.log10(fact * Math.sqrt(fact * Math.sinh(1 / fact) + 1 / (810 * Math.pow(fact, 6)))) - exponentFactorialPartExtra) * fact) + ((mantissaFactorialPartExtra - Math.log10(fact)) / 2);
}

const fact100exponent = Math.log10(9.3326215443944152681699238856267e+157);

const precision16_loss_addition_of_ones = 188.582;
const known_log10s = function () {
    // needed logs
    let needed = [1.03, 1.25];
    let nums = [1, 2, 3, 4, 5, 6, 10, 15];
    for (let num of nums) {
        needed.push(100 + (100 * num));
        needed.push(10 + (10 * num));
    }

    // Gets all possible challenge 8 completion amounts
    const chalcompletions = 1000;
    for (let i = 0; i < chalcompletions; ++i) {
        needed.push(1 + (i / 2));
    }

    // constructing all logs
    let obj = {};
    for (let need of needed) {
        if (obj[need] === undefined) {
            obj[need] = Math.log10(need);
        }
    }
    return obj;
}();

//Adapted from Synergism
function getCost(originalCost, buyingTo, layer, num, r = player.r) {


    // It's 0 indexed by mistake so you have to subtract 1 somewhere.
    --buyingTo;
    // Accounts for the multiplies by 1.25^num buyingTo times
    let cost = new Decimal(originalCost);
    let mlog10125 = num * buyingTo;
    // Accounts for the add 1s
    if (buyingTo < precision16_loss_addition_of_ones / num) {
        cost.mantissa += buyingTo / Math.pow(10, cost.exponent);
    }
    let fastFactMultBuyTo = 0;
    // floored r value gets used a lot in removing calculations
    let fr = Math.floor(r * 1000);
    if (buyingTo >= r * 1000) {
        // This code is such a mess at this point, just know that this is equivalent to what it was before
        ++fastFactMultBuyTo;
        cost.exponent -= factorialByExponent(fr);
        cost.exponent += (-3 + Math.log10(1 + (num / 2))) * (buyingTo - fr);
    }

    fr = Math.floor(r * 5000);
    if (buyingTo >= r * 5000) {
        // This code is such a mess at this point, just know that this is equivalent to what it was before
        ++fastFactMultBuyTo;
        cost.exponent -= factorialByExponent(fr);
        cost.exponent += ((known_log10s[10 + num * 10] + 1) * (buyingTo - fr - 1)) + 1;
    }

    fr = Math.floor(r * 20000);
    if (buyingTo >= r * 20000) {
        // This code is such a mess at this point, just know that this is equivalent to what it was before
        fastFactMultBuyTo += 3;
        cost.exponent -= factorialByExponent(fr) * 3;
        cost.exponent += (known_log10s[100 + (100 * num)] + 5) * (buyingTo - fr);
    }

    fr = Math.floor(r * 250000);
    if (buyingTo >= r * 250000) {
        //1.03^x*1.03^y = 1.03^(x+y), we'll abuse this for this section of the algorithm
        // 1.03^(x+y-((number of terms)250000*r))
        // up to 250003 case
        // assume r = 1 for this case
        // (1.03^250000-250000)(1.03^250001-250000)(1.03^250002-250000)(1.03^250003) = (1.03^0*1.03^1*1.03^2*1.03^3)
        // so in reality we just need to take buyingTo - fr and sum the power up to it
        // (1.03^(sum from 0 to buyingTo - fr)) is the multiplier
        // so (1.03^( (buyingTo-fr)(buyingTo-fr+1)/2 )
        // god damn that was hard to make an algo for
        cost.exponent += Math.log10(1.03) * (buyingTo - fr) * ((buyingTo - fr + 1) / 2);
    }
    // Applies the factorials from earlier without computing them 5 times
    cost.exponent += factorialByExponent(buyingTo) * fastFactMultBuyTo;
    let fastFactMultBuyTo100 = 0;
    /*if ((player.currentChallenge.transcension === 4) && (type === "Coin" || type === "Diamonds")) {
        // you would not fucking believe how long it took me to figure this out
        // (100*costofcurrent + 10000)^n = (((100+buyingTo)!/100!)*100^buyingTo)^n
        ++fastFactMultBuyTo100;
        if (buyingTo >= (1000 - (10 * player.challengecompletions[4]))) {
            // and I changed this to be a summation of all the previous buys 1.25 to the sum from 1 to buyingTo
            mlog10125 += (buyingTo * (buyingTo + 1) / 2);
        }
    }*/
    /*if ((player.currentChallenge.reincarnation === 10) && (type === "Coin" || type === "Diamonds")) {
        // you would not fucking believe how long it took me to figure this out
        // (100*costofcurrent + 10000)^n = (((100+buyingTo)!/100!)*100^buyingTo)^n
        ++fastFactMultBuyTo100;
        if (buyingTo >= (r * 25000)) {
            // and I changed this to be a summation of all the previous buys 1.25 to the sum from 1 to buyingTo
            mlog10125 += (buyingTo * (buyingTo + 1) / 2);
        }
    }*/
    // Applies the factorial w/ formula from earlier n times to avoid multiple computations
    cost.exponent += fastFactMultBuyTo100 * ((factorialByExponent(buyingTo + 100) - fact100exponent + (2 * buyingTo)) * (1.25 + (/*player.challengecompletions[4]*/0 / 4)));
    // Applies all the Math.log10(1.25)s from earlier n times to avoid multiple computations
    // log10(1.25)
    cost.exponent += known_log10s[1.25] * mlog10125;
    //fr = Math.floor(r * 1000 * player.challengecompletions[8]);
    /*if (player.currentChallenge.reincarnation === 8 && (type === "Coin" || type === "Diamonds" || type === "Mythos") && buyingTo >= (1000 * player.challengecompletions[8] * r)) {
        cost.exponent += ((known_log10s[2] * ((buyingTo - fr + 1) / 2)) - known_log10s[1 + (player.challengecompletions[8] / 2)]) * (buyingTo - fr);
    }*/

    extra = cost.exponent - Math.floor(cost.exponent);
    cost.exponent = Math.floor(cost.exponent);
    cost.mantissa *= Math.pow(10, extra);
    cost.normalize();
    return cost;
}
//Why is Synergism's buy system so entirely incompatible with TMT's....
function buyProducer(layer, id, num) {
    let ticker = 0
	let buythisamount = 1;
    let r = 1;
    //r += (rune4level * effectiveLevelMult) / 160;
    //r += (player.researches[56] + player.researches[57] + player.researches[58] + player.researches[59] + player.researches[60]) / 200;
    //r += CalcECC('transcend', player.challengecompletions[4]) / 200
    //r += (3 * (bonusant7 + player.antUpgrades[7])) / 100;

    while (player[layer].points.gte(tmp[layer].buyables[id].cost) && ticker < buythisamount) {
        player[layer].points = player[layer].points.sub(tmp[layer].buyables[id].cost);
        player[layer].buyables[id].bought = player[layer].buyables[id].bought.add(1);
		player[layer].buyables[id].amount = player[layer].buyables[id].amount.add(1);
        player[layer]["b" + id + "cost"] = player[layer]["b" + id + "cost"].times(Decimal.pow(1.25, num));
        player[layer]["b" + id + "cost"] = player[layer]["b" + id + "cost"].add(1);
        if (player[layer].buyables[id].bought >= (1000 * r)) {
            player[layer]["b" + id + "cost"] = player[layer]["b" + id + "cost"].times(player[layer].buyables[id].bought).dividedBy(1000).times(1 + num / 2);
        }
        if (player[layer].buyables[id].bought >= (5000 * r)) {
            player[layer]["b" + id + "cost"] = player[layer]["b" + id + "cost"].times(player[layer].buyables[id].bought).times(10).times(10 + num * 10);
        }
        if (player[layer].buyables[id].bought >= (20000 * r)) {
            player[layer]["b" + id + "cost"] = player[layer]["b" + id + "cost"].times(Decimal.pow(player[layer].buyables[id].bought, 3)).times(100000).times(100 + num * 100)
        }
        if (player[layer].buyables[id].bought >= (250000 * r)) {
            player[layer]["b" + id + "cost"] = player[layer]["b" + id + "cost"].times(Decimal.pow(1.03, player[layer].buyables[id].bought - 250000 * r))
        }
        /*if (player.currentChallenge.transcension === 4 && (type === "Coin" || type === "Diamonds")) {
            player[layer]["b" + id + "cost"] = player[layer]["b" + id + "cost"].times(Math.pow(100 * player[layer].buyables[id].bought + 10000, 1.25 + 1 / 4 * player.challengecompletions[4]));
            if (player[layer].buyables[id].bought >= 1000 - (10 * player.challengecompletions[4])) {
                player[layer]["b" + id + "cost"] = player[layer]["b" + id + "cost"].times(Decimal.pow(1.25, player[layer].buyables[id].bought));
            }
        }
        if (player.currentChallenge.reincarnation === 8 && (type === "Coin" || type === "Diamonds" || type === "Mythos") && player[layer].buyables[id].bought >= (1000 * player.challengecompletions[8] * r)) {
            player[layer]["b" + id + "cost"] = player[layer]["b" + id + "cost"].times(Decimal.pow(2, (player[layer].buyables[id].bought - (1000 * player.challengecompletions[8] * r)) / (1 + (player.challengecompletions[8] / 2))));
        }*/
        ticker += 1;
    }
    ticker = 0;
}

function calculatetaxes() {
	let a = new Decimal(0);
    let c = 0;
    let e = 1;
    let f = 1;
    let compareC = 0;
	let coinMult = getCoinMult()
	produceFirst = (player.c.buyables[11].amount.times(coinMult).times(getBuildingMults("c", 11)).times(0.25))
    produceSecond = (player.c.buyables[12].amount.times(coinMult).times(getBuildingMults("c", 12)).times(2.5))
    produceThird = (player.c.buyables[13].amount.times(coinMult).times(getBuildingMults("c", 13)).times(25))
    produceFourth = (player.c.buyables[21].amount.times(coinMult).times(getBuildingMults("c", 21)).times(250))
    produceFifth = (player.c.buyables[22].amount.times(coinMult).times(getBuildingMults("c", 22)).times(2500))
    produceTotal = produceFirst.add(produceSecond).add(produceThird).add(produceFourth).add(produceFifth);

    if (produceFirst.lessThanOrEqualTo(.0001)) {
        produceFirst = new Decimal(0)
    }
    if (produceSecond.lessThanOrEqualTo(.0001)) {
        produceSecond = new Decimal(0)
    }
    if (produceThird.lessThanOrEqualTo(.0001)) {
        produceThird = new Decimal(0)
    }
    if (produceFourth.lessThanOrEqualTo(.0001)) {
        produceFourth = new Decimal(0)
    }
    if (produceFifth.lessThanOrEqualTo(.0001)) {
        produceFifth = new Decimal(0)
    }

    producePerSecond = produceTotal.times(40);

	let exponent = 1;
    exponent *= e;
	exponent *= (0.001 + .999 * (Math.pow(6, -(player.o.buyables[12].amount.mag * 1) / 1000)))
	exponent *= f;

	maxexponent = Math.floor(275 / (Decimal.log(1.01, 10) * exponent)) - 1
    a = Math.min(maxexponent, Math.floor(Decimal.log(produceTotal.add(1), 10)));
	if (a >= 1) {
        c = Math.pow(a, 2) / 550
    }


    compareC = Math.pow(maxexponent, 2) / 550


    player.taxes = Decimal.pow(1.01, (c) * (exponent))
	player.taxcheck = Decimal.pow(1.01, (compareC) * (exponent))
	
}

function smallestIncDecimal(x = 0) {
    if (x.lt(new Decimal(2).pow(53))) {
        return new Decimal(1);
    } else {
        return new Decimal(2).pow(Decimal.ceil(Decimal.log2(x).sub(53)))
    }
}

function smallestInc(x = 0) {
    if (x < 2**53) {
        return 1;
    } else {
        return 2**Math.ceil(Math.log2(x)-53)
    }
}

function canAffordPurchase(layer, thing, cost) {

	if (thing.currencyInternalName) {
		let name = thing.currencyInternalName
		if (thing.currencyLocation) {
			return !(thing.currencyLocation[name].lt(cost))
		}
		else if (thing.currencyLayer) {
			let lr = thing.currencyLayer
			return !(player[lr][name].lt(cost))
		}
		else {
			return !(player[name].lt(cost))
		}
	}
	else {
		return !(player[layer].points.lt(cost))
	}
}

function buyUpgrade(layer, id) {
	buyUpg(layer, id)
}

function buyUpg(layer, id) {
	if (!tmp[layer].upgrades || !tmp[layer].upgrades[id]) return
	let upg = tmp[layer].upgrades[id]
	if (!player[layer].unlocked) return
	if (!tmp[layer].upgrades[id].unlocked) return
	if (player[layer].upgrades.includes(id)) return
	if (upg.canAfford === false) return
	let pay = layers[layer].upgrades[id].pay
	if (pay !== undefined)
		run(pay, layers[layer].upgrades[id])
	else {
		let cost = tmp[layer].upgrades[id].cost

		if (upg.currencyInternalName) {
			let name = upg.currencyInternalName
			if (upg.currencyLocation) {
				if (upg.currencyLocation[name].lt(cost)) return
				upg.currencyLocation[name] = upg.currencyLocation[name].sub(cost)
			}
			else if (upg.currencyLayer) {
				let lr = upg.currencyLayer
				if (player[lr][name].lt(cost)) return
				player[lr][name] = player[lr][name].sub(cost)
			}
			else {
				if (player[name].lt(cost)) return
				player[name] = player[name].sub(cost)
			}
		}
		else {
			if (player[layer].points.lt(cost)) return
			player[layer].points = player[layer].points.sub(cost)
		}
	}
	player[layer].upgrades.push(id);
	if (upg.onPurchase != undefined)
		run(upg.onPurchase, upg)
	needCanvasUpdate = true
}

function buyMaxBuyable(layer, id) {
	if (!player[layer].unlocked) return
	if (!tmp[layer].buyables[id].unlocked) return
	if (!tmp[layer].buyables[id].canBuy) return
	if (!layers[layer].buyables[id].buyMax) return

	run(layers[layer].buyables[id].buyMax, layers[layer].buyables[id])
	updateBuyableTemp(layer)
}

function buyBuyable(layer, id) {
	if (!player[layer].unlocked) return
	if (!tmp[layer].buyables[id].unlocked) return
	if (!tmp[layer].buyables[id].canBuy) return

	run(layers[layer].buyables[id].buy, layers[layer].buyables[id])
	updateBuyableTemp(layer)
}

function clickClickable(layer, id) {
	if (!player[layer].unlocked || tmp[layer].deactivated) return
	if (!tmp[layer].clickables[id].unlocked) return
	if (!tmp[layer].clickables[id].canClick) return

	run(layers[layer].clickables[id].onClick, layers[layer].clickables[id])
	updateClickableTemp(layer)
}

function clickGrid(layer, id) {
	if (!player[layer].unlocked  || tmp[layer].deactivated) return
	if (!run(layers[layer].grid.getUnlocked, layers[layer].grid, id)) return
	if (!gridRun(layer, 'getCanClick', player[layer].grid[id], id)) return

	gridRun(layer, 'onClick', player[layer].grid[id], id)
}

// Function to determine if the player is in a challenge
function inChallenge(layer, id) {
	let challenge = player[layer].activeChallenge
	if (!challenge) return false
	id = toNumber(id)
	if (challenge == id) return true

	if (layers[layer].challenges[challenge].countsAs)
		return tmp[layer].challenges[challenge].countsAs.includes(id) || false
	return false
}

// ************ Misc ************

var onTreeTab = true

function showTab(name, prev) {
	if (LAYERS.includes(name) && !layerunlocked(name)) return
	if (player.tab !== name) clearParticles(function(p) {return p.layer === player.tab})
	if (tmp[name] && player.tab === name && isPlainObject(tmp[name].tabFormat)) {
		player.subtabs[name].mainTabs = Object.keys(layers[name].tabFormat)[0]
	}
	var toTreeTab = name == "none"
	player.tab = name
	if (tmp[name] && (tmp[name].row !== "side") && (tmp[name].row !== "otherside")) player.lastSafeTab = name
	updateTabFormats()
	needCanvasUpdate = true
	document.activeElement.blur()

}

function showNavTab(name, prev) {
	console.log(prev)
	if (LAYERS.includes(name) && !layerunlocked(name)) return
	if (player.navTab !== name) clearParticles(function(p) {return p.layer === player.navTab})
	if (tmp[name] && tmp[name].previousTab !== undefined) prev = tmp[name].previousTab
	var toTreeTab = name == "tree-tab"
	console.log(name + prev)
	if (name!== "none" && prev && !tmp[prev]?.leftTab == !tmp[name]?.leftTab) player[name].prevTab = prev
	else if (player[name])
		player[name].prevTab = ""
	player.navTab = name
	updateTabFormats()
	needCanvasUpdate = true
}


function goBack(layer) {
	let nextTab = "none"

	if (player[layer].prevTab) nextTab = player[layer].prevTab
	if (player.navTab === "none" && (tmp[layer]?.row == "side" || tmp[layer].row == "otherside")) nextTab = player.lastSafeTab

	if (tmp[layer].leftTab) showNavTab(nextTab, layer)
	else showTab(nextTab, layer)

}

function layOver(obj1, obj2) {
	for (let x in obj2) {
		if (obj2[x] instanceof Decimal) obj1[x] = new Decimal(obj2[x])
		else if (obj2[x] instanceof Object) layOver(obj1[x], obj2[x]);
		else obj1[x] = obj2[x];
	}
}

function prestigeNotify(layer) {
	if (layers[layer].prestigeNotify) return layers[layer].prestigeNotify()
	
	if (isPlainObject(tmp[layer].tabFormat)) {
		for (subtab in tmp[layer].tabFormat){
			if (subtabResetNotify(layer, 'mainTabs', subtab))
				return true
		}
	}
	for (family in tmp[layer].microtabs) {
		for (subtab in tmp[layer].microtabs[family]){
			if (subtabResetNotify(layer, family, subtab))
				return true
		}
	}
	if (tmp[layer].autoPrestige || tmp[layer].passiveGeneration) return false
	else if (tmp[layer].type == "static") return tmp[layer].canReset
	else if (tmp[layer].type == "normal") return (tmp[layer].canReset && (tmp[layer].resetGain.gte(player[layer].points.div(10))))
	else return false
}

function notifyLayer(name) {
	if (player.tab == name || !layerunlocked(name)) return
	player.notify[name] = 1
}

function subtabShouldNotify(layer, family, id) {
	let subtab = {}
	if (family == "mainTabs") subtab = tmp[layer].tabFormat[id]
	else subtab = tmp[layer].microtabs[family][id]

	if (subtab.embedLayer) return tmp[subtab.embedLayer].notify
	else return subtab.shouldNotify
}

function subtabResetNotify(layer, family, id) {
	let subtab = {}
	if (family == "mainTabs") subtab = tmp[layer].tabFormat[id]
	else subtab = tmp[layer].microtabs[family][id]
	if (subtab.embedLayer) return tmp[subtab.embedLayer].prestigeNotify
	else return subtab.prestigeNotify
}

function nodeShown(layer) {
	return layerShown(layer)
}

function layerunlocked(layer) {
	if (tmp[layer] && tmp[layer].type == "none") return (player[layer].unlocked)
	return LAYERS.includes(layer) && (player[layer].unlocked || (tmp[layer].canReset && tmp[layer].layerShown))
}

function keepGoing() {
	player.keepGoing = true;
	needCanvasUpdate = true;
}

function toNumber(x) {
	if (x.mag !== undefined) return x.toNumber()
	if (x + 0 !== x) return parseFloat(x)
	return x
}

function updateMilestones(layer) {
	for (id in layers[layer].milestones) {
		if (!(hasMilestone(layer, id)) && layers[layer].milestones[id].done()) {
			player[layer].milestones.push(id)
			if (layers[layer].milestones[id].onComplete) layers[layer].milestones[id].onComplete()
			if (tmp[layer].milestonePopups || tmp[layer].milestonePopups === undefined) doPopup("milestone", tmp[layer].milestones[id].requirementDescription, "Milestone Gotten!", 3, tmp[layer].color);
			player[layer].lastMilestone = id
		}
	}
}

function updateAchievements(layer) {
	for (id in layers[layer].achievements) {
		if (isPlainObject(layers[layer].achievements[id]) && !(hasAchievement(layer, id)) && layers[layer].achievements[id].done()) {
			player[layer].achievements.push(id)
			if (layers[layer].achievements[id].onComplete) layers[layer].achievements[id].onComplete()
			if (tmp[layer].achievementPopups || tmp[layer].achievementPopups === undefined) doPopup("achievement", tmp[layer].achievements[id].name, "Achievement Gotten!", 3, tmp[layer].color);
		}
	}
}

function addTime(diff, layer) {
	let data = player
	let time = data.timePlayed
	if (layer) {
		data = data[layer]
		time = data.time
	}

	//I am not that good to perfectly fix that leak. ~ DB Aarex
	if (time + 0 !== time) {
		console.log("Memory leak detected. Trying to fix...")
		time = toNumber(time)
		if (isNaN(time) || time == 0) {
			console.log("Couldn't fix! Resetting...")
			time = layer ? player.timePlayed : 0
			if (!layer) player.timePlayedReset = true
		}
	}
	time += toNumber(diff)

	if (layer) data.time = time
	else data.timePlayed = time
}

shiftDown = false
ctrlDown = false

document.onkeydown = function (e) {
	if (player === undefined) return;
	if (gameEnded && !player.keepGoing) return;
	shiftDown = e.shiftKey
	ctrlDown = e.ctrlKey
	let key = e.key
	if (ctrlDown) key = "ctrl+" + key
	if (onFocused) return
	if (ctrlDown && hotkeys[key]) e.preventDefault()
	if (hotkeys[key]) {
		let k = hotkeys[key]
		if (player[k.layer].unlocked && tmp[k.layer].hotkeys[k.id].unlocked)
			k.onPress()
	}
}

document.onkeyup = function (e) {
	shiftDown = e.shiftKey
	ctrlDown = e.ctrlKey
}

var onFocused = false
function focused(x) {
	onFocused = x
}


function isFunction(obj) {
	return !!(obj && obj.constructor && obj.call && obj.apply);
};

function isPlainObject(obj) {
	return (!!obj) && (obj.constructor === Object)
}

document.title = modInfo.name

// Converts a string value to whatever it's supposed to be
function toValue(value, oldValue) {
	if (oldValue instanceof Decimal) {
		value = new Decimal (value)
		if (value.eq(decimalNaN)) return decimalZero
		return value
	}
	if (!isNaN(oldValue)) 
		return parseFloat(value) || 0
	return value
}

// Variables that must be defined to display popups
var activePopups = [];
var popupID = 0;

// Function to show popups
function doPopup(type = "none", text = "This is a test popup.", title = "", timer = 3, color = "") {
	switch (type) {
		case "achievement":
			popupTitle = "Achievement Unlocked!";
			popupType = "achievement-popup"
			break;
		case "challenge":
			popupTitle = "Challenge Complete";
			popupType = "challenge-popup"
			break;
		default:
			popupTitle = "Something Happened?";
			popupType = "default-popup"
			break;
	}
	if (title != "") popupTitle = title;
	popupMessage = text;
	popupTimer = timer;

	activePopups.push({ "time": popupTimer, "type": popupType, "title": popupTitle, "message": (popupMessage + "\n"), "id": popupID, "color": color })
	popupID++;
}


//Function to reduce time on active popups
function adjustPopupTime(diff) {
	for (popup in activePopups) {
		activePopups[popup].time -= diff;
		if (activePopups[popup]["time"] < 0) {
			activePopups.splice(popup, 1); // Remove popup when time hits 0
		}
	}
}

function run(func, target, args = null) {
	if (isFunction(func)) {
		let bound = func.bind(target)
		return bound(args)
	}
	else
		return func;
}

function gridRun(layer, func, data, id) {
	if (isFunction(layers[layer].grid[func])) {
		let bound = layers[layer].grid[func].bind(layers[layer].grid)
		return bound(data, id)
	}
	else
		return layers[layer].grid[func];
}

function layerText(elem, layer, text) {
	return "<" + elem + " style='color:" + tmp[layer].color + ";text-shadow:0px 0px 10px;'>" + text + "</" + elem + ">"
}