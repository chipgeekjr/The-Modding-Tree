addLayer("study", {
    name: "studies",
    symbol: "S",
    position: 0,
    requires: new Decimal(0),
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#ba15db",
    resource: "studies",
    baseResource: "Null Energy",
    baseAmount() {return new Decimal(0)},
    type: "none",
    row: 0, //Should be "side", but doesn't display if it is.
    layerShown() {return hasUpgrade("e", 22) || player[this.layer].points.gte(1)},
    doReset() {
        player[this.layer].upgrades = player[this.layer].upgrades
        player[this.layer].points = player[this.layer].points
        player.points = new Decimal(0)
    },
    upgrades: {
        rows: 5,
        cols: 5,
        11: {
            title: "Study N1",
            description: "Gain 100x more Null Energy",
            cost: new Decimal(150),
            currencyDisplayName: "Earth Essence",
            currencyInternalName: "points",
            currencyLayer: "e",
            unlocked(){
                return hasUpgrade("e", 22)
            },
            onPurchase(){
                player[this.layer].points = player[this.layer].points.add(1)
            },
            
        },
        12: {
            title: "Study E1",
            description: "Earth Essence boosts itself.",
            cost: new Decimal(500),
            currencyDisplayName: "Earth Essence",
            currencyInternalName: "points",
            currencyLayer: "e",
            unlocked(){
                return hasUpgrade("study", 11)
            },
            effect() {
                let ret = player.e.points.add(1).log10().pow(0.25).add(1)
                ret = softcap("SE1", ret)
                return ret
            },
            effectDisplay() { return format(this.effect())+"x" },
            onPurchase(){
                player[this.layer].points = player[this.layer].points.add(1)
            },
            
        },
        13: {
            title: "Study N2",
            description: "Raise Null Energy gain by 1.2",
            cost: new Decimal(1e4),
            currencyDisplayName: "Earth Essence",
            currencyInternalName: "points",
            currencyLayer: "e",
            unlocked(){
                return hasUpgrade("study", 12)
            },
            onPurchase(){
                player[this.layer].points = player[this.layer].points.add(1)
            },
            
        },
        14: {
            title: "Study E2",
            description: "Raise E3 by 1.5",
            cost: new Decimal(5e5),
            currencyDisplayName: "Earth Essence",
            currencyInternalName: "points",
            currencyLayer: "e",
            unlocked(){
                return hasUpgrade("e", 23)||hasUpgrade(this.layer, 14)
            },
            onPurchase(){
                player[this.layer].points = player[this.layer].points.add(1)
            },
            
        },
        15: {
            title: "Study W1",
            description: "Unlock Water Essence, Keep E1 on all resets.",
            cost: new Decimal(2.5e6),
            currencyDisplayName: "Earth Essence",
            currencyInternalName: "points",
            currencyLayer: "e",
            unlocked(){
                return hasUpgrade("study", 14)
            },
            onPurchase(){
                player[this.layer].points = player[this.layer].points.add(1)
            },
            
        },
        21: {
            title: "Study E3",
            description: "Gain 10x more Earth Essence",
            cost: new Decimal(5),
            currencyDisplayName: "Water Essence",
            currencyInternalName: "points",
            currencyLayer: "w",
            unlocked(){
                return hasUpgrade("w", 13)||hasUpgrade(this.layer, 21)
            },
            onPurchase(){
                player[this.layer].points = player[this.layer].points.add(1)
            },
            
        },
        22: {
            title: "Study N3",
            description: "Raise W1 by 1.2",
            cost: new Decimal(10),
            currencyDisplayName: "Water Essence",
            currencyInternalName: "points",
            currencyLayer: "w",
            unlocked(){
                return hasUpgrade("study", 21)
            },
            onPurchase(){
                player[this.layer].points = player[this.layer].points.add(1)
            },
            
        },
        23: {
            title: "Study E4",
            description: "Multiply Earth Esscene by number of Earth upgrades.",
            cost: new Decimal(50),
            currencyDisplayName: "Water Essence",
            currencyInternalName: "points",
            currencyLayer: "w",
            unlocked(){
                return hasUpgrade("w", 21)
            },
            effect() {
                let ret = new Decimal(player.e.upgrades.length).pow(2)
                return ret
            },
            effectDisplay() { return format(this.effect())+"x" },
            onPurchase(){
                player[this.layer].points = player[this.layer].points.add(1)
            },
            
        },
    },

})
addLayer("e", {
    name: "earth", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "E", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Earth Essence", // Name of prestige currency
    baseResource: "Null Energy", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade("e", 21)) mult = mult.times(upgradeEffect("e", 21))
        if (hasUpgrade("study", 12)) mult = mult.times(upgradeEffect("study", 12))
        if (hasUpgrade("study", 21)) mult = mult.times(10)
        if (hasUpgrade("study", 23)) mult = mult.times(upgradeEffect("study", 23))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    passiveGeneration() { return hasUpgrade("w", 21)?1:0 },
    doReset(layer) {
        if (layers[layer].name != "earth") {
            let keep = []
            if (hasUpgrade("study", 15)) keep.push(11, 22)
            if(hasUpgrade("w", 13)) keep = player.e.upgrades
            player.e.upgrades = keep
            player[this.layer].points = new Decimal(0)
        } 
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "e", description: "E: Reset for Earth Essence", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        rows: 2,
        cols: 3,
        11: {
            title: "E1",
            description: "Gain 1 Null Energy every second.",
            cost: new Decimal(1),
            unlocked() { return player[this.layer].unlocked }, // The upgrade is only visible when this is true
        },
        12: {
            title: "E2",
            description: "Earth Essence boosts Null Energy.",
            cost: new Decimal(2),
            unlocked() { return (hasUpgrade(this.layer, 11)||hasUpgrade(this.layer, 12))},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let ret = player[this.layer].points.add(2).pow(0.5)
                if (hasUpgrade("e", 23)) ret = ret.pow(1.5)
                ret = ret.max(2)
                ret = softcap("E2", ret)
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        13: {
            title: "E3",
            description: "Null Energy boosts itself.",
            cost: new Decimal(5),
            unlocked() { return (hasUpgrade(this.layer, 12)||hasUpgrade(this.layer, 13))},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let ret = player.points.add(1).log10().pow(0.75).add(1)
                if (hasUpgrade("study", 14)) ret = ret.pow(1.5)
                ret = softcap("E3", ret)
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        21: {
            title: "E4",
            description: "Null Energy boosts Earth Essence gain.",
            cost: new Decimal(25),
            unlocked() { return (hasUpgrade(this.layer, 13)||hasUpgrade(this.layer, 21))}, // The upgrade is only visible when this is true
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let ret = player.points.plus(1).log10().cbrt().plus(1)
                if (hasUpgrade("w", 22)) ret = ret.pow(2)
                //ret = softcap("E3", ret)
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" },
        },
        22: {
            title: "E5",
            description: "Unlock Elemental Studies",
            cost: new Decimal(100),
            unlocked() { return (hasUpgrade(this.layer, 21)||hasUpgrade(this.layer, 22))}, // The upgrade is only visible when this is true
        },
        23: {
            title: "E6",
            description: "Raise E2 by 1.5",
            cost: new Decimal(5e4),
            unlocked() { return (hasUpgrade("study", 13)||hasUpgrade(this.layer, 23))},
        },
    },
})

addLayer("w", {
    name: "water", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "W", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#5858c8",
    requires: new Decimal(5e6), // Can be a function that takes requirement increases into account
    resource: "Water Essence", // Name of prestige currency
    baseResource: "Earth Essence", // Name of resource prestige is based on
    baseAmount() {return player.e.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.4, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2,// Row the layer is in on the tree (0 is the first row)
    branches: ["e"], 
    hotkeys: [
        {key: "w", description: "W: Reset for Water Essence", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("study", 15)||player[this.layer].best.gte(1)},
    upgrades: {
        rows: 2,
        cols: 3,
        11: {
            title: "W1",
            description: "Water Essence boosts Null Energy.",
            cost: new Decimal(1),
            unlocked() { return player[this.layer].unlocked }, // The upgrade is only visible when this is true
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let ret = player[this.layer].points.add(2).pow(0.8)
                if (hasUpgrade("study", 22)) ret = ret.pow(1.2)
                ret = ret.max(1.5)
                ret = softcap("W1", ret)
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" },
        },
        12: {
            title: "W2",
            description: "Water Essence boosts Earth Essence.",
            cost: new Decimal(2),
            unlocked() { return (hasUpgrade(this.layer, 11))},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let ret = player[this.layer].points.add(1).log10().pow(0.9).add(3)
                //if (hasUpgrade("e", 23)) ret = ret.pow(1.5)
                ret = ret.max(3)
                ret = softcap("W2", ret)
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        13: {
            title: "W3",
            description: "Keep Earth upgrades on reset.",
            cost: new Decimal(2),
            unlocked() { return (hasUpgrade(this.layer, 12))},
        },
        21: {
            title: "W4",
            description: "Gain 100% of Earth Essence gain per second.",
            cost: new Decimal(15),
            unlocked() { return (hasUpgrade("study", 22))},
        },
        22: {
            title: "W5",
            description: "Square E4",
            cost: new Decimal(500),
            unlocked() { return (hasUpgrade("study", 23))}, // The upgrade is only visible when this is true
        },
        
    },
})

addLayer("a", {
    name: "air", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ecdd28",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Air Essence", // Name of prestige currency
    baseResource: "Water Essence", // Name of resource prestige is based on
    baseAmount() {return player.w.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    branches: ["w"], 
    hotkeys: [
        {key: "a", description: "A: Reset for Air Essence", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("study", 51)||player[this.layer].best.gte(1)}
})

addNode("blank", {
    position: 1,
    row: 2,
    layerShown: "ghost",
}, 
)

addLayer("f", {
    name: "fire", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "F", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#df2828",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Fire Essence", // Name of prestige currency
    baseResource: "Air Essence", // Name of resource prestige is based on
    baseAmount() {return player.a.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    branches: ["a", "e"], 
    hotkeys: [
        {key: "f", description: "F: Reset for Fire Essence", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("study", 31)||player[this.layer].best.gte(1)}
})
