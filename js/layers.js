addLayer("c", {
    name: "coins", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(100),
    }},
    color: "#ffd700",
    //requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "coins",
    canReset: false, // Name of prestige currency
    //baseResource: "points", // Name of resource prestige is based on
    //baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    tabFormat: {
        Buildings: {
            content: ["main-display", ["display-text", function() {return "Taxes are dividing your income by "+ formatSmall(player.taxes, 4)}], "buyables"]
        },
        Upgrades: {
            content: ["main-display", "upgrades"]
        },
    },
    upgrades: {
        11: {
            title: "I",
            description: "Increase production of Workers per producer bought.",
            cost: new Decimal(1e6),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(1)
                let total = new Decimal(0)
                total = player[this.layer].buyables[11].bought.add(player[this.layer].buyables[12].bought.add(player[this.layer].buyables[13].bought.add(player[this.layer].buyables[21].bought.add(player[this.layer].buyables[22].bought))))
                eff = eff.times(total.add(1)).times(Decimal.min(1e30, Decimal.pow(1.008, total)))
                return eff;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        12: {
            title: "II",
            description: "Increase production of Investments per producer bought.",
            cost: new Decimal(1e7),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(1)
                let total = new Decimal(0)
                total = player[this.layer].buyables[11].bought.add(player[this.layer].buyables[12].bought.add(player[this.layer].buyables[13].bought.add(player[this.layer].buyables[21].bought.add(player[this.layer].buyables[22].bought))))
                eff = eff.times(total.add(1)).times(Decimal.min(1e30, Decimal.pow(1.008, total)))
                return eff;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        13: {
            title: "III",
            description: "Increase production of Printers per producer bought.",
            cost: new Decimal(1e8),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(1)
                let total = new Decimal(0)
                total = player[this.layer].buyables[11].bought.add(player[this.layer].buyables[12].bought.add(player[this.layer].buyables[13].bought.add(player[this.layer].buyables[21].bought.add(player[this.layer].buyables[22].bought))))
                eff = eff.times(total.add(1)).times(Decimal.min(1e30, Decimal.pow(1.008, total)))
                return eff;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        14: {
            title: "IV",
            description: "Increase production of Mints per producer bought.",
            cost: new Decimal(1e10),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(1)
                let total = new Decimal(0)
                total = player[this.layer].buyables[11].bought.add(player[this.layer].buyables[12].bought.add(player[this.layer].buyables[13].bought.add(player[this.layer].buyables[21].bought.add(player[this.layer].buyables[22].bought))))
                eff = eff.times(total.add(1)).times(Decimal.min(1e30, Decimal.pow(1.008, total)))
                return eff;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        15: {
            title: "V",
            description: "Increase production of Alchemies per producer bought.",
            cost: new Decimal(1e12),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(1)
                let total = new Decimal(0)
                total = player[this.layer].buyables[11].bought.add(player[this.layer].buyables[12].bought.add(player[this.layer].buyables[13].bought.add(player[this.layer].buyables[21].bought.add(player[this.layer].buyables[22].bought))))
                eff = eff.times(total.add(1)).times(Decimal.min(1e30, Decimal.pow(1.008, total)))
                return eff;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
    },
    buyables: {
        11: {
            title: "Workers",// Optional, displayed at the top in a larger font
            amount: new Decimal(0),
            bought: new Decimal(0), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(100)
                let r = player.r
                cost = cost.times(Decimal.pow(1.25, x.bought))
                if (x.bought.gt(0)) cost = cost.add(1)
                if (x.bought.gte(1000 * r)) {
                    cost = cost.times(x.bought).dividedBy(1000).times(1 + 1 / 2);
                }
                if (x.bought.gte(5000 * r)) {
                    cost = cost.times(x.bought).times(10).times(10 + 1 * 10);
                }
                if (x.bought.gte(20000 * r)) {
                    cost = cost.times(Decimal.pow(x.bought, 3)).times(100000).times(100 + 1 * 100)
                }
                if (x.bought.gte(250000 * r)) {
                    cost = cost.times(Decimal.pow(1.03, x.bought - 250000 * r))
                }
                return cost.ceil()
            },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " coins\n\
                Coins/Sec: " + format(data.effect) + "\n\
                Amount: " + player[this.layer].buyables[this.id].amount + "\n\
                Bought: " + player[this.layer].buyables[this.id].bought
                
            },
            effect(x) {
                let eff = new Decimal(10)
                eff = eff.times(x.amount)
                eff = eff.times(buyableEffect("c", 31).mult)
                eff = eff.times(buyableEffect("c", 32).mult)
                if (hasUpgrade("c", 11)) eff = eff.mul(upgradeEffect("c", 11))
                //eff = eff.div(player.taxes)
                return eff
            },
            unlocked() { return player[this.layer].unlocked }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {}, // You'll have to handle this yourself if you want
            style: {'height':'222px'},
        }, 
        12: {
            title: "Investments",// Optional, displayed at the top in a larger font
            amount: new Decimal(0),
            bought: new Decimal(0), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(2000)
                let r = player.r
                cost = cost.times(Decimal.pow(1.25, x.bought))
                if (x.bought.gt(0)) cost = cost.add(1)
                if (x.bought.gte(1000 * r)) {
                    cost = cost.times(x.bought).dividedBy(1000).times(1 + 1 / 2);
                }
                if (x.bought.gte(5000 * r)) {
                    cost = cost.times(x.bought).times(10).times(10 + 1 * 10);
                }
                if (x.bought.gte(20000 * r)) {
                    cost = cost.times(Decimal.pow(x.bought, 3)).times(100000).times(100 + 1 * 100)
                }
                if (x.bought.gte(250000 * r)) {
                    cost = cost.times(Decimal.pow(1.03, x.bought - 250000 * r))
                }
                return cost.ceil()
            },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " coins\n\
                Coins/Sec: " + format(data.effect) + "\n\
                Amount: " + player[this.layer].buyables[this.id].amount + "\n\
                Bought: " + player[this.layer].buyables[this.id].bought
                
            },
            effect(x) {
                let eff = new Decimal(100)
                eff = eff.times(x.amount)
                eff = eff.times(buyableEffect("c", 31).mult)
                eff = eff.times(buyableEffect("c", 32).mult)
                if (hasUpgrade("c", 12)) eff = eff.mul(upgradeEffect("c", 12))
                //eff = eff.div(player.taxes)
                return eff
            },
            unlocked() { return player[this.layer].best.gte(1000) || player[this.layer].buyables[this.id].amount.gt(0) }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {}, // You'll have to handle this yourself if you want
            style: {'height':'222px'},
        }, 
        13: {
            title: "Printers",// Optional, displayed at the top in a larger font
            amount: new Decimal(0),
            bought: new Decimal(0), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(40000)
                let r = player.r
                cost = cost.times(Decimal.pow(1.25, x.bought))
                if (x.bought.gt(0)) cost = cost.add(1)
                if (x.bought.gte(1000 * r)) {
                    cost = cost.times(x.bought).dividedBy(1000).times(1 + 1 / 2);
                }
                if (x.bought.gte(5000 * r)) {
                    cost = cost.times(x.bought).times(10).times(10 + 1 * 10);
                }
                if (x.bought.gte(20000 * r)) {
                    cost = cost.times(Decimal.pow(x.bought, 3)).times(100000).times(100 + 1 * 100)
                }
                if (x.bought.gte(250000 * r)) {
                    cost = cost.times(Decimal.pow(1.03, x.bought - 250000 * r))
                }
                return cost.ceil()
            },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " coins\n\
                Coins/Sec: " + format(data.effect) + "\n\
                Amount: " + player[this.layer].buyables[this.id].amount + "\n\
                Bought: " + player[this.layer].buyables[this.id].bought
                
            },
            effect(x) {
                let eff = new Decimal(1000)
                eff = eff.times(x.amount)
                eff = eff.times(buyableEffect("c", 31).mult)
                eff = eff.times(buyableEffect("c", 32).mult)
                if (hasUpgrade("c", 13)) eff = eff.mul(upgradeEffect("c", 13))
                //eff = eff.div(player.taxes)
                return eff
            },
            unlocked() { return player[this.layer].best.gte(20000) || player[this.layer].buyables[this.id].amount.gt(0)  }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {}, // You'll have to handle this yourself if you want
            style: {'height':'222px'},
        },
        21: {
            title: "Coin Mints",// Optional, displayed at the top in a larger font
            amount: new Decimal(0),
            bought: new Decimal(0), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(8e5)
                let r = player.r
                cost = cost.times(Decimal.pow(1.25, x.bought))
                if (x.bought.gt(0)) cost = cost.add(1)
                if (x.bought.gte(1000 * r)) {
                    cost = cost.times(x.bought).dividedBy(1000).times(1 + 1 / 2);
                }
                if (x.bought.gte(5000 * r)) {
                    cost = cost.times(x.bought).times(10).times(10 + 1 * 10);
                }
                if (x.bought.gte(20000 * r)) {
                    cost = cost.times(Decimal.pow(x.bought, 3)).times(100000).times(100 + 1 * 100)
                }
                if (x.bought.gte(250000 * r)) {
                    cost = cost.times(Decimal.pow(1.03, x.bought - 250000 * r))
                }
                return cost.ceil()
            },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " coins\n\
                Coins/Sec: " + format(data.effect) + "\n\
                Amount: " + player[this.layer].buyables[this.id].amount + "\n\
                Bought: " + player[this.layer].buyables[this.id].bought
                
            },
            effect(x) {
                let eff = new Decimal(10000)
                eff = eff.times(x.amount)
                eff = eff.times(buyableEffect("c", 31).mult)
                eff = eff.times(buyableEffect("c", 32).mult)
                if (hasUpgrade("c", 14)) eff = eff.mul(upgradeEffect("c", 14))
                //eff = eff.div(player.taxes)
                return eff
            },
            unlocked() { return player[this.layer].best.gte(4e5) || player[this.layer].buyables[this.id].amount.gt(0)  }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {}, // You'll have to handle this yourself if you want
            style: {'height':'222px'},
        }, 
        22: {
            title: "Alchemies",// Optional, displayed at the top in a larger font
            amount: new Decimal(0),
            bought: new Decimal(0), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(16e6)
                let r = player.r
                cost = cost.times(Decimal.pow(1.25, x.bought))
                if (x.bought.gt(0)) cost = cost.add(1)
                if (x.bought.gte(1000 * r)) {
                    cost = cost.times(x.bought).dividedBy(1000).times(1 + 1 / 2);
                }
                if (x.bought.gte(5000 * r)) {
                    cost = cost.times(x.bought).times(10).times(10 + 1 * 10);
                }
                if (x.bought.gte(20000 * r)) {
                    cost = cost.times(Decimal.pow(x.bought, 3)).times(100000).times(100 + 1 * 100)
                }
                if (x.bought.gte(250000 * r)) {
                    cost = cost.times(Decimal.pow(1.03, x.bought - 250000 * r))
                }
                return cost.ceil()
            },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " coins\n\
                Coins/Sec: " + format(data.effect) + "\n\
                Amount: " + player[this.layer].buyables[this.id].amount + "\n\
                Bought: " + player[this.layer].buyables[this.id].bought
                
            },
            effect(x) {
                let eff = new Decimal(1e5)
                eff = eff.times(x.amount)
                eff = eff.times(buyableEffect("c", 31).mult)
                eff = eff.times(buyableEffect("c", 32).mult)
                if (hasUpgrade("c", 15)) eff = eff.mul(upgradeEffect("c", 15))
                eff = eff.div(player.taxes)
                return eff
            },
            unlocked() { return player[this.layer].best.gte(8e6) || player[this.layer].buyables[this.id].amount.gt(0)  }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {}, // You'll have to handle this yourself if you want
            style: {'height':'222px'},
        },
        31: {
            title: "Accelerators",// Optional, displayed at the top in a larger font
            amount: new Decimal(0),
            bought: new Decimal(0), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(500)
                cost = cost.times(Decimal.pow(4, x.bought))
                return cost.ceil()
            },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " coins\n\
                Acceleration Multiplier: " + format(data.effect.mult) + "\n\
                Acceleration Power: " + format(data.effect.power.sub(1).mul(100)) + "%\n\
                Amount: " + player[this.layer].buyables[this.id].amount + "\n\
                Bought: " + player[this.layer].buyables[this.id].bought
                
            },
            effect(x) {
                let eff = {}
                eff.power = new Decimal(1.1)
                eff.mult = new Decimal(1)
                eff.mult = eff.power.pow(x.amount)
                return eff
            },
            unlocked() { return player[this.layer].best.gte(250) || player[this.layer].buyables[this.id].amount.gt(0)  }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {}, // You'll have to handle this yourself if you want
            style: {'height':'222px', 'backgroundColor':'cyan !important'},
        },
        32: {
            title: "Multipliers",// Optional, displayed at the top in a larger font
            color: "#00ffff",
            amount: new Decimal(0),
            bought: new Decimal(0), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(1e5)
                cost = cost.times(Decimal.pow(10, x.bought))
                return cost.ceil()
            },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " coins\n\
                Multiplier: " + format(data.effect.mult) + "x\n\
                Multiplier Power: " + format(data.effect.power) + "x\n\
                Amount: " + player[this.layer].buyables[this.id].amount + "\n\
                Bought: " + player[this.layer].buyables[this.id].bought
                
            },
            effect(x) {
                let eff = {}
                eff.power = new Decimal(2)
                eff.mult = new Decimal(1)
                eff.mult = eff.power.pow(x.amount)
                return eff
            },
            unlocked() { return player[this.layer].best.gte(5e4) || player[this.layer].buyables[this.id].amount.gt(0)  }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {}, // You'll have to handle this yourself if you want
            style: {'height':'222px','backgroundColor':'#ff5170 !important'},
        },
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        //{key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})

addLayer("p", {
    name: "diamonds", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        crystals: new Decimal(0),
        times: 0,
        resetTime: 0,
    }},
    canReset() {
        return getResetGain(this.layer).gte(100)
    },
    color: "turquoise",
    requires: new Decimal(1e16), // Can be a function that takes requirement increases into account
    resource: "diamonds",// Name of prestige currency
    baseResource: "coins", // Name of resource prestige is based on
    baseAmount() {return player.c.total}, // Get the current amount of baseResource
    type: "custom", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    //exponent: 1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
       return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    getResetGain() {
        gain = Decimal.floor(Decimal.pow(player.c.total.div(1e12), 0.5))
        return gain
    },
    getNextAt() {
        return new Decimal(1)
    },
    prestigeButtonText() {
       let text = "Reset for "+ format(getResetGain(this.layer))+ " diamonds\n\
        and " + format(gainOfferings(1)) + " offerings."
        return text
    },
    onPrestige(gain) {
        addPoints("o", gainOfferings(1))
        player[this.layer].times += 1
    },
    effect() {
        let crystalExponent = 1/3
        let eff = Decimal.pow(player[this.layer].crystals, crystalExponent).add(1);
        return eff
    },
    tabFormat: {
        Buildings: {
            content: ["main-display", "prestige-button", ["display-text", function() {return 'You have ' + format(player.p.crystals) + ' Crystals, multiplying Coin production by ' + format(tmp[this.layer].effect) +"x"}], "buyables"]
        },
        Upgrades: {
            content: ["main-display", "upgrades"]
        },
    },
    upgrades: {
        11: {
            title: "I",
            description: "Increase production of Workers per producer bought.",
            cost: new Decimal(1e6),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(1)
                let total = new Decimal(0)
                total = player[this.layer].buyables[11].bought.add(player[this.layer].buyables[12].bought.add(player[this.layer].buyables[13].bought.add(player[this.layer].buyables[21].bought.add(player[this.layer].buyables[22].bought))))
                eff = eff.times(total.add(1)).times(Decimal.min(1e30, Decimal.pow(1.008, total)))
                return eff;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        12: {
            title: "II",
            description: "Increase production of Investments per producer bought.",
            cost: new Decimal(1e7),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(1)
                let total = new Decimal(0)
                total = player[this.layer].buyables[11].bought.add(player[this.layer].buyables[12].bought.add(player[this.layer].buyables[13].bought.add(player[this.layer].buyables[21].bought.add(player[this.layer].buyables[22].bought))))
                eff = eff.times(total.add(1)).times(Decimal.min(1e30, Decimal.pow(1.008, total)))
                return eff;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        13: {
            title: "III",
            description: "Increase production of Printers per producer bought.",
            cost: new Decimal(1e8),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(1)
                let total = new Decimal(0)
                total = player[this.layer].buyables[11].bought.add(player[this.layer].buyables[12].bought.add(player[this.layer].buyables[13].bought.add(player[this.layer].buyables[21].bought.add(player[this.layer].buyables[22].bought))))
                eff = eff.times(total.add(1)).times(Decimal.min(1e30, Decimal.pow(1.008, total)))
                return eff;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        14: {
            title: "IV",
            description: "Increase production of Mints per producer bought.",
            cost: new Decimal(1e10),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(1)
                let total = new Decimal(0)
                total = player[this.layer].buyables[11].bought.add(player[this.layer].buyables[12].bought.add(player[this.layer].buyables[13].bought.add(player[this.layer].buyables[21].bought.add(player[this.layer].buyables[22].bought))))
                eff = eff.times(total.add(1)).times(Decimal.min(1e30, Decimal.pow(1.008, total)))
                return eff;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        15: {
            title: "V",
            description: "Increase production of Alchemies per producer bought.",
            cost: new Decimal(1e12),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(1)
                let total = new Decimal(0)
                total = player[this.layer].buyables[11].bought.add(player[this.layer].buyables[12].bought.add(player[this.layer].buyables[13].bought.add(player[this.layer].buyables[21].bought.add(player[this.layer].buyables[22].bought))))
                eff = eff.times(total.add(1)).times(Decimal.min(1e30, Decimal.pow(1.008, total)))
                return eff;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
    },
    buyables: {
        11: {
            title: "Refineries",// Optional, displayed at the top in a larger font
            amount: new Decimal(0),
            bought: new Decimal(0), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(100)
                let r = player.r
                cost = cost.times(Decimal.pow(1.25, x.bought))
                if (x.bought.gt(0)) cost = cost.add(1)
                if (x.bought.gte(1000 * r)) {
                    cost = cost.times(x.bought).dividedBy(1000).times(1 + 1 / 2);
                }
                if (x.bought.gte(5000 * r)) {
                    cost = cost.times(x.bought).times(10).times(10 + 1 * 10);
                }
                if (x.bought.gte(20000 * r)) {
                    cost = cost.times(Decimal.pow(x.bought, 3)).times(100000).times(100 + 1 * 100)
                }
                if (x.bought.gte(250000 * r)) {
                    cost = cost.times(Decimal.pow(1.03, x.bought - 250000 * r))
                }
                return cost.ceil()
            },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " diamonds\n\
                Crystals/Sec: " + format(data.effect) + "\n\
                Amount: " + format(player[this.layer].buyables[this.id].amount) + "\n\
                Bought: " + player[this.layer].buyables[this.id].bought
                
            },
            effect(x) {
                let eff = new Decimal(4)
                eff = eff.times(x.amount)
                eff = eff.times(buyableEffect("p", 32))
                //eff = eff.times(buyableEffect("c", 31).mult)
                //eff = eff.times(buyableEffect("c", 32).mult)
                //if (hasUpgrade("c", 11)) eff = eff.mul(upgradeEffect("c", 11))
                //eff = eff.div(player.taxes)
                return eff
            },
            unlocked() { return player[this.layer].unlocked }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {}, // You'll have to handle this yourself if you want
            style: {'height':'222px'},
        }, 
        12: {
            title: "Coal Plants",// Optional, displayed at the top in a larger font
            amount: new Decimal(0),
            bought: new Decimal(0), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(1e5)
                let r = player.r
                cost = cost.times(Decimal.pow(1.25, x.bought))
                if (x.bought.gt(0)) cost = cost.add(1)
                if (x.bought.gte(1000 * r)) {
                    cost = cost.times(x.bought).dividedBy(1000).times(1 + 1 / 2);
                }
                if (x.bought.gte(5000 * r)) {
                    cost = cost.times(x.bought).times(10).times(10 + 1 * 10);
                }
                if (x.bought.gte(20000 * r)) {
                    cost = cost.times(Decimal.pow(x.bought, 3)).times(100000).times(100 + 1 * 100)
                }
                if (x.bought.gte(250000 * r)) {
                    cost = cost.times(Decimal.pow(1.03, x.bought - 250000 * r))
                }
                return cost.ceil()
            },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " diamonds\n\
                Ref./Sec: " + format(data.effect) + "\n\
                Amount: " + format(player[this.layer].buyables[this.id].amount) + "\n\
                Bought: " + player[this.layer].buyables[this.id].bought
                
            },
            effect(x) {
                let eff = new Decimal(0.04)
                eff = eff.times(x.amount)
                //eff = eff.times(buyableEffect("c", 31).mult)
                //eff = eff.times(buyableEffect("c", 32).mult)
                //if (hasUpgrade("c", 12)) eff = eff.mul(upgradeEffect("c", 12))
                //eff = eff.div(player.taxes)
                return eff
            },
            unlocked() { return player[this.layer].unlocked }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {}, // You'll have to handle this yourself if you want
            style: {'height':'222px'},
        }, 
        13: {
            title: "Coal Rigs",// Optional, displayed at the top in a larger font
            amount: new Decimal(0),
            bought: new Decimal(0), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(1e15)
                let r = player.r
                cost = cost.times(Decimal.pow(1.25, x.bought))
                if (x.bought.gt(0)) cost = cost.add(1)
                if (x.bought.gte(1000 * r)) {
                    cost = cost.times(x.bought).dividedBy(1000).times(1 + 1 / 2);
                }
                if (x.bought.gte(5000 * r)) {
                    cost = cost.times(x.bought).times(10).times(10 + 1 * 10);
                }
                if (x.bought.gte(20000 * r)) {
                    cost = cost.times(Decimal.pow(x.bought, 3)).times(100000).times(100 + 1 * 100)
                }
                if (x.bought.gte(250000 * r)) {
                    cost = cost.times(Decimal.pow(1.03, x.bought - 250000 * r))
                }
                return cost.ceil()
            },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " diamonds\n\
                Plants/Sec: " + format(data.effect) + "\n\
                Amount: " + format(player[this.layer].buyables[this.id].amount) + "\n\
                Bought: " + player[this.layer].buyables[this.id].bought
                
            },
            effect(x) {
                let eff = new Decimal(0.004)
                eff = eff.times(x.amount)
                //eff = eff.times(buyableEffect("c", 31).mult)
                //eff = eff.times(buyableEffect("c", 32).mult)
                //if (hasUpgrade("c", 13)) eff = eff.mul(upgradeEffect("c", 13))
                //eff = eff.div(player.taxes)
                return eff
            },
            unlocked() { return player[this.layer].unlocked  }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {}, // You'll have to handle this yourself if you want
            style: {'height':'222px'},
        },
        21: {
            title: "Pickaxes",// Optional, displayed at the top in a larger font
            amount: new Decimal(0),
            bought: new Decimal(0), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(1e40)
                let r = player.r
                cost = cost.times(Decimal.pow(1.25, x.bought))
                if (x.bought.gt(0)) cost = cost.add(1)
                if (x.bought.gte(1000 * r)) {
                    cost = cost.times(x.bought).dividedBy(1000).times(1 + 1 / 2);
                }
                if (x.bought.gte(5000 * r)) {
                    cost = cost.times(x.bought).times(10).times(10 + 1 * 10);
                }
                if (x.bought.gte(20000 * r)) {
                    cost = cost.times(Decimal.pow(x.bought, 3)).times(100000).times(100 + 1 * 100)
                }
                if (x.bought.gte(250000 * r)) {
                    cost = cost.times(Decimal.pow(1.03, x.bought - 250000 * r))
                }
                return cost.ceil()
            },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " diamonds\n\
                Rigs/Sec: " + format(data.effect) + "\n\
                Amount: " + format(player[this.layer].buyables[this.id].amount) + "\n\
                Bought: " + player[this.layer].buyables[this.id].bought
                
            },
            effect(x) {
                let eff = new Decimal(0.0004)
                eff = eff.times(x.amount)
                //eff = eff.times(buyableEffect("c", 31).mult)
                //ff = eff.times(buyableEffect("c", 32).mult)
                //if (hasUpgrade("c", 14)) eff = eff.mul(upgradeEffect("c", 14))
                //eff = eff.div(player.taxes)
                return eff
            },
            unlocked() { return player[this.layer].unlocked  }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {}, // You'll have to handle this yourself if you want
            style: {'height':'222px'},
        }, 
        22: {
            title: "Pandoras Boxes",// Optional, displayed at the top in a larger font
            amount: new Decimal(0),
            bought: new Decimal(0), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(1e100)
                let r = player.r
                cost = cost.times(Decimal.pow(1.25, x.bought))
                if (x.bought.gt(0)) cost = cost.add(1)
                if (x.bought.gte(1000 * r)) {
                    cost = cost.times(x.bought).dividedBy(1000).times(1 + 1 / 2);
                }
                if (x.bought.gte(5000 * r)) {
                    cost = cost.times(x.bought).times(10).times(10 + 1 * 10);
                }
                if (x.bought.gte(20000 * r)) {
                    cost = cost.times(Decimal.pow(x.bought, 3)).times(100000).times(100 + 1 * 100)
                }
                if (x.bought.gte(250000 * r)) {
                    cost = cost.times(Decimal.pow(1.03, x.bought - 250000 * r))
                }
                return cost.ceil()
            },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " diamonds\n\
                Pickaxes/Sec: " + format(data.effect) + "\n\
                Amount: " + format(player[this.layer].buyables[this.id].amount) + "\n\
                Bought: " + player[this.layer].buyables[this.id].bought
                
            },
            effect(x) {
                let eff = new Decimal(0.0004)
                eff = eff.times(x.amount)
                //eff = eff.times(buyableEffect("c", 31).mult)
                //eff = eff.times(buyableEffect("c", 32).mult)
                //if (hasUpgrade("c", 15)) eff = eff.mul(upgradeEffect("c", 15))
                //eff = eff.div(player.taxes)
                return eff
            },
            unlocked() { return player[this.layer].unlocked  }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {}, // You'll have to handle this yourself if you want
            style: {'height':'222px'},
        },
        31: {
            //title: "Accelerators",// Optional, displayed at the top in a larger font
            amount: new Decimal(0),
            bought: new Decimal(0),
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(1e6)
                cost = cost.times(Decimal.pow(1e8, x.bought))
                return cost.ceil()
            },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " crystals\n\
                Gain a 5% multiplicative boost to crystals per AP per level.\n\
                Level: " + player[this.layer].buyables[this.id].bought
                
            },
            effect(x) {
                let eff = {}
                eff.power = new Decimal(1.1)
                eff.mult = new Decimal(1)
                eff.mult = eff.power.pow(x.amount)
                return eff
            },
            unlocked() { return player[this.layer].unlocked  }, 
            canAfford:() => player.p.crystals.gte(tmp.p.buyables[31].cost),
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {}, // You'll have to handle this yourself if you want
            style: {'height':'222px',},
        },
        32: {
            //title: "Multipliers",// Optional, displayed at the top in a larger font
            //color: "#00ffff",
            amount: new Decimal(0),
            bought: new Decimal(0), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(1e15)
                cost = cost.times(Decimal.pow(1e15, x.bought))
                return cost.ceil()
            },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " crystals\n\
                Gain a boost to crystals based on held coins per level.\n\
                Level: " + player[this.layer].buyables[this.id].bought
                
            },
            effect(x) {
                let eff = new Decimal(1)
                eff = eff.times(Decimal.min(Decimal.pow(10, player.p.buyables[32].amount.mul(5).add(100)), Decimal.pow(Decimal.log(player.c.points.add(1), 10), player.p.buyables[32].amount.div(3))))
                return eff
            },
            unlocked() { return player[this.layer].unlocked  }, 
            canAfford:() => player.p.crystals.gte(tmp.p.buyables[32].cost),
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {}, // You'll have to handle this yourself if you want
            style: {'height':'222px'},
        },
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        //{key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.c.total.gte(1e8) || player[this.layer].best.gt(0)}
})

addLayer("o", {
    name: "runes", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: "0", // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "orangered",
    //requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "offerings",
    canReset: false, // Name of prestige currency
    //baseResource: "coins", // Name of resource prestige is based on
    //baseAmount() {return player.c.total}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    tabFormat: {
        Runes: {
            content: ["main-display", "buyables"]
        },  
    },
    buyables: {
        11: {
            title: "Speed Rune",// Optional, displayed at the top in a larger font
            amount: new Decimal(0),
            bought: new Decimal(0), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(0.03)
                let r = player.r
                cost = cost.times(Decimal.pow(1.25, x.bought))
                if (x.bought.gt(0)) cost = cost.add(1)
                if (x.bought.gte(1000 * r)) {
                    cost = cost.times(x.bought).dividedBy(1000).times(1 + 1 / 2);
                }
                if (x.bought.gte(5000 * r)) {
                    cost = cost.times(x.bought).times(10).times(10 + 1 * 10);
                }
                if (x.bought.gte(20000 * r)) {
                    cost = cost.times(Decimal.pow(x.bought, 3)).times(100000).times(100 + 1 * 100)
                }
                if (x.bought.gte(250000 * r)) {
                    cost = cost.times(Decimal.pow(1.03, x.bought - 250000 * r))
                }
                return cost.ceil()
            },
            purchaseLimit: new Decimal(1000),
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Level: " + format(data.bought) + "/" + format(data.purchaseLimit) +"\n\
                [Bonus: " + format((player[this.layer].buyables[this.id].amount).sub(player[this.layer].buyables[this.id].bought)) + "]\n\
                +1 in " + format(data.cost) + "EXP"
                
            },
            effect(x) {
                let eff = new Decimal(10)
                eff = eff.times(x.amount)
                eff = eff.times(buyableEffect("c", 31).mult)
                eff = eff.times(buyableEffect("c", 32).mult)
                if (hasUpgrade("c", 11)) eff = eff.mul(upgradeEffect("c", 11))
                //eff = eff.div(player.taxes)
                return eff
            },
            unlocked() { return player[this.layer].unlocked }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {}, // You'll have to handle this yourself if you want
            style: {'height':'222px'},
        }, 
        12: {
            title: "Investments",// Optional, displayed at the top in a larger font
            amount: new Decimal(0),
            bought: new Decimal(0), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(2000)
                let r = player.r
                cost = cost.times(Decimal.pow(1.25, x.bought))
                if (x.bought.gt(0)) cost = cost.add(1)
                if (x.bought.gte(1000 * r)) {
                    cost = cost.times(x.bought).dividedBy(1000).times(1 + 1 / 2);
                }
                if (x.bought.gte(5000 * r)) {
                    cost = cost.times(x.bought).times(10).times(10 + 1 * 10);
                }
                if (x.bought.gte(20000 * r)) {
                    cost = cost.times(Decimal.pow(x.bought, 3)).times(100000).times(100 + 1 * 100)
                }
                if (x.bought.gte(250000 * r)) {
                    cost = cost.times(Decimal.pow(1.03, x.bought - 250000 * r))
                }
                return cost.ceil()
            },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " coins\n\
                Coins/Sec: " + format(data.effect) + "\n\
                Amount: " + player[this.layer].buyables[this.id].amount + "\n\
                Bought: " + player[this.layer].buyables[this.id].bought
                
            },
            effect(x) {
                let eff = new Decimal(100)
                eff = eff.times(x.amount)
                eff = eff.times(buyableEffect("c", 31).mult)
                eff = eff.times(buyableEffect("c", 32).mult)
                if (hasUpgrade("c", 12)) eff = eff.mul(upgradeEffect("c", 12))
                //eff = eff.div(player.taxes)
                return eff
            },
            unlocked() { return player[this.layer].best.gte(1000) || player[this.layer].buyables[this.id].amount.gt(0) }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {}, // You'll have to handle this yourself if you want
            style: {'height':'222px'},
        }, 
        13: {
            title: "Printers",// Optional, displayed at the top in a larger font
            amount: new Decimal(0),
            bought: new Decimal(0), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(40000)
                let r = player.r
                cost = cost.times(Decimal.pow(1.25, x.bought))
                if (x.bought.gt(0)) cost = cost.add(1)
                if (x.bought.gte(1000 * r)) {
                    cost = cost.times(x.bought).dividedBy(1000).times(1 + 1 / 2);
                }
                if (x.bought.gte(5000 * r)) {
                    cost = cost.times(x.bought).times(10).times(10 + 1 * 10);
                }
                if (x.bought.gte(20000 * r)) {
                    cost = cost.times(Decimal.pow(x.bought, 3)).times(100000).times(100 + 1 * 100)
                }
                if (x.bought.gte(250000 * r)) {
                    cost = cost.times(Decimal.pow(1.03, x.bought - 250000 * r))
                }
                return cost.ceil()
            },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " coins\n\
                Coins/Sec: " + format(data.effect) + "\n\
                Amount: " + player[this.layer].buyables[this.id].amount + "\n\
                Bought: " + player[this.layer].buyables[this.id].bought
                
            },
            effect(x) {
                let eff = new Decimal(1000)
                eff = eff.times(x.amount)
                eff = eff.times(buyableEffect("c", 31).mult)
                eff = eff.times(buyableEffect("c", 32).mult)
                if (hasUpgrade("c", 13)) eff = eff.mul(upgradeEffect("c", 13))
                //eff = eff.div(player.taxes)
                return eff
            },
            unlocked() { return player[this.layer].best.gte(20000) || player[this.layer].buyables[this.id].amount.gt(0)  }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {}, // You'll have to handle this yourself if you want
            style: {'height':'222px'},
        },
        21: {
            title: "Coin Mints",// Optional, displayed at the top in a larger font
            amount: new Decimal(0),
            bought: new Decimal(0), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(8e5)
                let r = player.r
                cost = cost.times(Decimal.pow(1.25, x.bought))
                if (x.bought.gt(0)) cost = cost.add(1)
                if (x.bought.gte(1000 * r)) {
                    cost = cost.times(x.bought).dividedBy(1000).times(1 + 1 / 2);
                }
                if (x.bought.gte(5000 * r)) {
                    cost = cost.times(x.bought).times(10).times(10 + 1 * 10);
                }
                if (x.bought.gte(20000 * r)) {
                    cost = cost.times(Decimal.pow(x.bought, 3)).times(100000).times(100 + 1 * 100)
                }
                if (x.bought.gte(250000 * r)) {
                    cost = cost.times(Decimal.pow(1.03, x.bought - 250000 * r))
                }
                return cost.ceil()
            },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " coins\n\
                Coins/Sec: " + format(data.effect) + "\n\
                Amount: " + player[this.layer].buyables[this.id].amount + "\n\
                Bought: " + player[this.layer].buyables[this.id].bought
                
            },
            effect(x) {
                let eff = new Decimal(10000)
                eff = eff.times(x.amount)
                eff = eff.times(buyableEffect("c", 31).mult)
                eff = eff.times(buyableEffect("c", 32).mult)
                if (hasUpgrade("c", 14)) eff = eff.mul(upgradeEffect("c", 14))
                //eff = eff.div(player.taxes)
                return eff
            },
            unlocked() { return player[this.layer].best.gte(4e5) || player[this.layer].buyables[this.id].amount.gt(0)  }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {}, // You'll have to handle this yourself if you want
            style: {'height':'222px'},
        }, 
        22: {
            title: "Alchemies",// Optional, displayed at the top in a larger font
            amount: new Decimal(0),
            bought: new Decimal(0), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(16e6)
                let r = player.r
                cost = cost.times(Decimal.pow(1.25, x.bought))
                if (x.bought.gt(0)) cost = cost.add(1)
                if (x.bought.gte(1000 * r)) {
                    cost = cost.times(x.bought).dividedBy(1000).times(1 + 1 / 2);
                }
                if (x.bought.gte(5000 * r)) {
                    cost = cost.times(x.bought).times(10).times(10 + 1 * 10);
                }
                if (x.bought.gte(20000 * r)) {
                    cost = cost.times(Decimal.pow(x.bought, 3)).times(100000).times(100 + 1 * 100)
                }
                if (x.bought.gte(250000 * r)) {
                    cost = cost.times(Decimal.pow(1.03, x.bought - 250000 * r))
                }
                return cost.ceil()
            },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " coins\n\
                Coins/Sec: " + format(data.effect) + "\n\
                Amount: " + player[this.layer].buyables[this.id].amount + "\n\
                Bought: " + player[this.layer].buyables[this.id].bought
                
            },
            effect(x) {
                let eff = new Decimal(1e5)
                eff = eff.times(x.amount)
                eff = eff.times(buyableEffect("c", 31).mult)
                eff = eff.times(buyableEffect("c", 32).mult)
                if (hasUpgrade("c", 15)) eff = eff.mul(upgradeEffect("c", 15))
                eff = eff.div(player.taxes)
                return eff
            },
            unlocked() { return player[this.layer].best.gte(8e6) || player[this.layer].buyables[this.id].amount.gt(0)  }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {}, // You'll have to handle this yourself if you want
            style: {'height':'222px'},
        },
        31: {
            title: "Accelerators",// Optional, displayed at the top in a larger font
            amount: new Decimal(0),
            bought: new Decimal(0), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(500)
                cost = cost.times(Decimal.pow(4, x.bought))
                return cost.ceil()
            },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " coins\n\
                Acceleration Multiplier: " + format(data.effect.mult) + "\n\
                Acceleration Power: " + format(data.effect.power.sub(1).mul(100)) + "%\n\
                Amount: " + player[this.layer].buyables[this.id].amount + "\n\
                Bought: " + player[this.layer].buyables[this.id].bought
                
            },
            effect(x) {
                let eff = {}
                eff.power = new Decimal(1.1)
                eff.mult = new Decimal(1)
                eff.mult = eff.power.pow(x.amount)
                return eff
            },
            unlocked() { return player[this.layer].best.gte(250) || player[this.layer].buyables[this.id].amount.gt(0)  }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {}, // You'll have to handle this yourself if you want
            style: {'height':'222px', 'backgroundColor':'cyan'},
        },
        32: {
            title: "Multipliers",// Optional, displayed at the top in a larger font
            color: "#00ffff",
            amount: new Decimal(0),
            bought: new Decimal(0), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(1e5)
                cost = cost.times(Decimal.pow(10, x.bought))
                return cost.ceil()
            },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " coins\n\
                Multiplier: " + format(data.effect.mult) + "x\n\
                Multiplier Power: " + format(data.effect.power) + "x\n\
                Amount: " + player[this.layer].buyables[this.id].amount + "\n\
                Bought: " + player[this.layer].buyables[this.id].bought
                
            },
            effect(x) {
                let eff = {}
                eff.power = new Decimal(2)
                eff.mult = new Decimal(1)
                eff.mult = eff.power.pow(x.amount)
                return eff
            },
            unlocked() { return player[this.layer].best.gte(5e4) || player[this.layer].buyables[this.id].amount.gt(0)  }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {}, // You'll have to handle this yourself if you want
            style: {'height':'222px','backgroundColor':'#ff5170'},
        },
    },
    row: "side", // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        //{key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.p.best.gt(0)||player[this.layer].best.gt(0)}
})


