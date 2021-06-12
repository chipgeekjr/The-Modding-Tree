addLayer("a", {
    name: "Achievements", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Ach", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        pTimes: 0,
        auto: {
            c: {
                b1auto: false,
                b2auto: false,
                b3auto: false,
                b4auto: false,
                b5auto: false,
                bAauto: false,
                bMauto: false,
                bABauto: false,
            },
            
        },
    }},
    tooltip() {
      return "Achievements"
    },
    color: "#FFFF00",
    nodeStyle() {return {
        "background": "radial-gradient(#FFFF00, #d5ad83)" ,
    }},
    requires: new Decimal(0), // Can be a function that takes requirement increases into account
    resource: "Achievement Points", // Name of prestige currency
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    row: "side", // Row the layer is in on the tree (0 is the first row)
    layerShown() { return true },
    achievements: {
        rows: 11,
        cols: 7,
        11: {
            name: "A Loyal Employee",
            tooltip: "Hire your first worker. Reward: 1 AP",
            done() {
                return player.c.buyables[11].bought.gte(1)
            },
            onComplete() {
                addPoints("a",1)
            }
        },
        12: {
            name: "Small Business",
            tooltip: "Hire 10 workers. Reward: 2 AP",
            done() {
                return player.c.buyables[11].bought.gte(10)
            },
            onComplete() {
                addPoints("a",2)
            }
        },
        13: {
            name: "Now we're synergizing!",
            tooltip: "Hire 100 workers. Reward: 4 AP. Gain +.05% to Accelerator Power.",
            done() {
                return player.c.buyables[11].bought.gte(100)
            },
            onComplete() {
                addPoints("a",4)
            }
        },
        14: {
            name: "Gaining Redundancies",
            tooltip: "Hire 1,000 workers. Reward: 6 AP",
            done() {
                return player.c.buyables[11].bought.gte(1000)
            },
            onComplete() {
                addPoints("a",6)
            }
        },
        15: {
            name: "A cog in the machine",
            tooltip: "Hire 5,000 workers. Reward: 8 AP",
            done() {
                return player.c.buyables[11].bought.gte(5000)
            },
            onComplete() {
                addPoints("a",8)
            }
        },
        16: {
            name: "A nail in the machine",
            tooltip: "Hire 10,000 workers. Reward: 9 AP",
            done() {
                return player.c.buyables[11].bought.gte(10000)
            },
            onComplete() {
                addPoints("a",9)
            }
        },
        17: {
            name: "Are we even in the machine anymore?",
            tooltip: "Hire 20,000 workers. Reward: 10 AP",
            done() {
                return player.c.buyables[11].bought.gte(20000)
            },
            onComplete() {
                addPoints("a",10)
            }
        },
        21: {
            name: "STONKS!!!",
            tooltip: "Purchase 1 Investment. Reward: 1 AP",
            done() {
                return player.c.buyables[12].bought.gte(1)
            },
            onComplete() {
                addPoints("a",1)
            }
        },
        22: {
            name: "Planning ahead",
            tooltip: "Purchase 10 Investments. Reward: 2 AP",
            done() {
                return player.c.buyables[12].bought.gte(10)
            },
            onComplete() {
                addPoints("a",2)
            }
        },
        23: {
            name: "Inside Trading",
            tooltip: "Purchase 100 Investments. Reward: 4 AP. Gain +.10% to Accelerator Power.",
            done() {
                return player.c.buyables[12].bought.gte(100)
            },
            onComplete() {
                addPoints("a",4)
            }
        },
        24: {
            name: "Outside Trading?",
            tooltip: "Purchase 1,000 Investments. Reward: 6 AP",
            done() {
                return player.c.buyables[12].bought.gte(1000)
            },
            onComplete() {
                addPoints("a",6)
            }
        },
        25: {
            name: "Market Takeover",
            tooltip: "Purchase 5,000 Investments. Reward: 8 AP",
            done() {
                return player.c.buyables[12].bought.gte(5000)
            },
            onComplete() {
                addPoints("a",8)
            }
        },
        26: {
            name: "Trickle-Down Economics",
            tooltip: "Purchase 10,000 Investments. Reward: 9 AP",
            done() {
                return player.c.buyables[12].bought.gte(10000)
            },
            onComplete() {
                addPoints("a",9)
            }
        },
        27: {
            name: "Eliminated Regulation",
            tooltip: "Purchase 20,000 Investments. Reward: 10 AP",
            done() {
                return player.c.buyables[12].bought.gte(20000)
            },
            onComplete() {
                addPoints("a",10)
            }
        },
        31: {
            name: "Stationery!",
            tooltip: "Build 1 Printer. Reward: 1 AP",
            done() {
                return player.c.buyables[13].bought.gte(1)
            },
            onComplete() {
                addPoints("a",1)
            }
        },
        32: {
            name: "Printing Press",
            tooltip: "Build 10 Printers. Reward: 2 AP",
            done() {
                return player.c.buyables[13].bought.gte(10)
            },
            onComplete() {
                addPoints("a",2)
            }
        },
        33: {
            name: "It prints free money!",
            tooltip: "Build 100 Printers. Reward: 4 AP. Gain +.15% to Accelerator Power.",
            done() {
                return player.c.buyables[13].bought.gte(100)
            },
            onComplete() {
                addPoints("a",4)
            }
        },
        34: {
            name: "Solving Our Debts",
            tooltip: "Build 1,000 Printers. Reward: 6 AP",
            done() {
                return player.c.buyables[13].bought.gte(1000)
            },
            onComplete() {
                addPoints("a",6)
            }
        },
        35: {
            name: "Monopolizing the market",
            tooltip: "Build 5,000 Printers. Reward: 8 AP",
            done() {
                return player.c.buyables[13].bought.gte(5000)
            },
            onComplete() {
                addPoints("a",8)
            }
        },
        36: {
            name: "We're running out of Ink!",
            tooltip: "Build 10,000 Printers. Reward: 9 AP",
            done() {
                return player.c.buyables[13].bought.gte(10000)
            },
            onComplete() {
                addPoints("a",9)
            }
        },
        37: {
            name: "3D-printing the universe",
            tooltip: "Build 20,000 Printers. Reward: 10 AP",
            done() {
                return player.c.buyables[13].bought.gte(20000)
            },
            onComplete() {
                addPoints("a",10)
            }
        },
        41: {
            name: "A national treasure",
            tooltip: "Establish 1 Coin Mint. Reward: 1 AP",
            done() {
                return player.c.buyables[21].bought.gte(1)
            },
            onComplete() {
                addPoints("a",1)
            }
        },
        42: {
            name: "Now with competition!",
            tooltip: "Establish 10 Coin Mints. Reward: 2 AP",
            done() {
                return player.c.buyables[21].bought.gte(10)
            },
            onComplete() {
                addPoints("a",2)
            }
        },
        43: {
            name: "Counterfeiting with Style!",
            tooltip: "Establish 100 Coin Mints. Reward: 4 AP. Gain +.20% to Accelerator Power.",
            done() {
                return player.c.buyables[21].bought.gte(100)
            },
            onComplete() {
                addPoints("a",4)
            }
        },
        44: {
            name: "Why do we need all these?",
            tooltip: "Establish 1,000 Coin Mints. Reward: 6 AP",
            done() {
                return player.c.buyables[21].bought.gte(1000)
            },
            onComplete() {
                addPoints("a",6)
            }
        },
        45: {
            name: "No really, why??",
            tooltip: "Establish 5,000 Coin Mints. Reward: 8 AP",
            done() {
                return player.c.buyables[21].bought.gte(5000)
            },
            onComplete() {
                addPoints("a",8)
            }
        },
        46: {
            name: "Is no one to stop us???",
            tooltip: "Establish 10,000 Coin Mints. Reward: 9 AP",
            done() {
                return player.c.buyables[21].bought.gte(10000)
            },
            onComplete() {
                addPoints("a",9)
            }
        },
        47: {
            name: "Oh well, time to mint",
            tooltip: "Establish 20,000 Coin Mints. Reward: 10 AP",
            done() {
                return player.c.buyables[21].bought.gte(20000)
            },
            onComplete() {
                addPoints("a",10)
            }
        },
        51: {
            name: "Newton's Apprentice",
            tooltip: "Create 1 Alchemy. Reward: 1 AP",
            done() {
                return player.c.buyables[22].bought.gte(1)
            },
            onComplete() {
                addPoints("a",1)
            }
        },
        52: {
            name: "Lab Work",
            tooltip: "Create 10 Alchemies. Reward: 2 AP",
            done() {
                return player.c.buyables[22].bought.gte(10)
            },
            onComplete() {
                addPoints("a",2)
            }
        },
        53: {
            name: "Satanic Becomings",
            tooltip: "Create 66 Alchemies. Reward: 4 AP. Gain +.25% to Accelerator Power.",
            done() {
                return player.c.buyables[22].bought.gte(66)
            },
            onComplete() {
                addPoints("a",4)
            }
        },
        54: {
            name: "Satan Incarnate",
            tooltip: "Create 666 Alchemies. Reward: 6 AP",
            done() {
                return player.c.buyables[22].bought.gte(666)
            },
            onComplete() {
                addPoints("a",6)
            }
        },
        55: {
            name: "Is this more demonic?",
            tooltip: "Create 6,666 Alchemies. Reward: 8 AP",
            done() {
                return player.c.buyables[22].bought.gte(6666)
            },
            onComplete() {
                addPoints("a",8)
            }
        },
        56: {
            name: "Golden Paridise",
            tooltip: "Create 17,777 Alchemies. Reward: 9 AP",
            done() {
                return player.c.buyables[22].bought.gte(17777)
            },
            onComplete() {
                addPoints("a",9)
            }
        },
        57: {
            name: "Unlocking secrets to the world",
            tooltip: "Create 42,777 Alchemies. Reward: 10 AP",
            done() {
                return player.c.buyables[22].bought.gte(42777)
            },
            onComplete() {
                addPoints("a",10)
            }
        },
        61: {
            name: "Gas gas gas",
            tooltip: "Purchase 5 Accelerators. Reward: 1 AP",
            done() {
                return player.c.buyables[31].bought.gte(5)
            },
            onComplete() {
                addPoints("a",1)
            }
        },
        62: {
            name: "0 to 25",
            tooltip: "Purchase 25 Accelerators. Reward: 2 AP",
            done() {
                return player.c.buyables[31].bought.gte(25)
            },
            onComplete() {
                addPoints("a",2)
            }
        },
        63: {
            name: "0 to 100",
            tooltip: "Purchase 100 Accelerators. Reward: 4 AP",
            done() {
                return player.c.buyables[31].bought.gte(100)
            },
            onComplete() {
                addPoints("a",4)
            }
        },
        64: {
            name: "Highway to Hell",
            tooltip: "Purchase 666 Accelerators. Reward: 6 AP",
            done() {
                return player.c.buyables[31].bought.gte(666)
            },
            onComplete() {
                addPoints("a",6)
            }
        },
        65: {
            name: "Perhaps you should brake",
            tooltip: "Purchase 2,000 Accelerators. Reward: 8 AP",
            done() {
                return player.c.buyables[31].bought.gte(2000)
            },
            onComplete() {
                addPoints("a",8)
            }
        },
        66: {
            name: "Exit the vehicle now!",
            tooltip: "Purchase 12,500 Accelerators. Reward: 9 AP",
            done() {
                return player.c.buyables[31].bought.gte(12500)
            },
            onComplete() {
                addPoints("a",9)
            }
        },
        67: {
            name: "Faster than light",
            tooltip: "Purchase 100,000 Accelerators. Reward: 10 AP",
            done() {
                return player.c.buyables[31].bought.gte(1e5)
            },
            onComplete() {
                addPoints("a",10)
            }
        },
        71: {
            name: "I've been duped!",
            tooltip: "Purchase 2 Multipliers. Reward: 1 AP",
            done() {
                return player.c.buyables[32].bought.gte(2)
            },
            onComplete() {
                addPoints("a",1)
            }
        },
        72: {
            name: "Funhouse Mirrors",
            tooltip: "Purchase 20 Multipliers. Reward: 2 AP",
            done() {
                return player.c.buyables[32].bought.gte(20)
            },
            onComplete() {
                addPoints("a",2)
            }
        },
        73: {
            name: "Friend of binary",
            tooltip: "Purchase 100 Multipliers. Reward: 4 AP",
            done() {
                return player.c.buyables[32].bought.gte(100)
            },
            onComplete() {
                addPoints("a",4)
            }
        },
        74: {
            name: "Feeling the cost growth yet?",
            tooltip: "Purchase 500 Multipliers. Reward: 6 AP",
            done() {
                return player.c.buyables[32].bought.gte(500)
            },
            onComplete() {
                addPoints("a",6)
            }
        },
        75: {
            name: "Perhaps you'll feel the cost now",
            tooltip: "Purchase 2,000 Multipliers. Reward: 8 AP",
            done() {
                return player.c.buyables[32].bought.gte(2000)
            },
            onComplete() {
                addPoints("a",8)
            }
        },
        76: {
            name: "Exponential Synergy",
            tooltip: "Purchase 12,500 Multipliers. Reward: 9 AP",
            done() {
                return player.c.buyables[32].bought.gte(12500)
            },
            onComplete() {
                addPoints("a",9)
            }
        },
        77: {
            name: "Cloned",
            tooltip: "Purchase 100,000 Multipliers. Reward: 10 AP",
            done() {
                return player.c.buyables[32].bought.gte(1e5)
            },
            onComplete() {
                addPoints("a",10)
            }
        },
        81: {
            name: "Leveling up",
            tooltip: "Prestige for at least 1 Diamond. Reward: 1 AP, Start with 200 Coins",
            done() {
                return player.p.bestPointGain.gte(1)
            },
            onComplete() {
                addPoints("a",1)
            }
        },
        82: {
            name: "High-Tiered",
            tooltip: "Prestige for at least 1e6 Diamonds. Reward: 2 AP",
            done() {
                return player.p.bestPointGain.gte(1e6)
            },
            onComplete() {
                addPoints("a",2)
            }
        },
        83: {
            name: "Highly Regarded",
            tooltip: "Prestige for at least 1e100 Diamonds. Reward: 4 AP",
            done() {
                return player.p.bestPointGain.gte(1e100)
            },
            onComplete() {
                addPoints("a",4)
            }
        },
        84: {
            name: "Prestigious",
            tooltip: "Prestige for at least 1e1,000 Diamonds. Reward: 6 AP",
            done() {
                return player.p.bestPointGain.gte("1e1000")
            },
            onComplete() {
                addPoints("a",6)
            }
        },
        85: {
            name: "Legendary",
            tooltip: "Prestige for at least 1e10,000 Diamonds. Reward: 8 AP",
            done() {
                return player.p.bestPointGain.gte("1e10000")
            },
            onComplete() {
                addPoints("a",8)
            }
        },
        86: {
            name: "Divine",
            tooltip: "Prestige for at least 1e77,777 Diamonds. Reward: 9 AP",
            done() {
                return player.p.bestPointGain.gte("1e77777")
            },
            onComplete() {
                addPoints("a",9)
            }
        },
        87: {
            name: "Perfectly Respected",
            tooltip: "Prestige for at least 1e250,000 Diamonds. Reward: 10 AP",
            done() {
                return player.p.bestPointGain.gte("1e250000")
            },
            onComplete() {
                addPoints("a",10)
            }
        },
        91: {
            name: "Jerk > 0",
            tooltip: "Purchase 2 Accelerator Boosts. Reward: 1 AP",
            done() {
                return player.p.buyables[33].bought.gte(2)
            },
            onComplete() {
                addPoints("a",1)
            }
        },
        92: {
            name: "Can't the speedometer move any faster?",
            tooltip: "Purchase 10 Accelerator Boosts. Reward: 2 AP",
            done() {
                return player.p.buyables[33].bought.gte(10)
            },
            onComplete() {
                addPoints("a",2)
            }
        },
        93: {
            name: "50 G rotations",
            tooltip: "Purchase 50 Accelerator Boosts. Reward: 4 AP",
            done() {
                return player.p.buyables[33].bought.gte(50)
            },
            onComplete() {
                addPoints("a",4)
            }
        },
        94: {
            name: "Dematerialize",
            tooltip: "Purchase 200 Accelerator Boosts. Reward: 6 AP",
            done() {
                return player.p.buyables[33].bought.gte(200)
            },
            onComplete() {
                addPoints("a",6)
            }
        },
        95: {
            name: "reaking the laws of Physics",
            tooltip: "Purchase 1,000 Accelerator Boosts. Reward: 8 AP",
            done() {
                return player.p.buyables[33].bought.gte(1e3)
            },
            onComplete() {
                addPoints("a",8)
            }
        },
        96: {
            name: "Decayed Realism",
            tooltip: "Purchase 5,000 Accelerator Boosts. Reward: 9 AP",
            done() {
                return player.p.buyables[33].bought.gte(5e3)
            },
            onComplete() {
                addPoints("a",9)
            }
        },
        97: {
            name: "Kinda fast",
            tooltip: "Purchase 15,000 Accelerator Boosts. Reward: 10 AP",
            done() {
                return player.p.buyables[33].bought.gte(1.5e4)
            },
            onComplete() {
                addPoints("a",10)
            }
        },
    },
    /*tabFormat: {
        content: ["main-display",
        "achievements"]
    }*/

})
addLayer("c", {
    name: "coins", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(100)
        
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
    update(diff) {
        if(player.a.auto.c.b1auto) buyMaxBuyable("c", 11)
        if(player.a.auto.c.b2auto) buyMaxBuyable("c", 12)
        if(player.a.auto.c.b3auto) buyMaxBuyable("c", 13)
        if(player.a.auto.c.b4auto) buyMaxBuyable("c", 21)
        if(player.a.auto.c.b5auto) buyMaxBuyable("c", 22)
        if(player.a.auto.c.bAauto) buyMaxBuyable("c", 31)
        if(player.a.auto.c.bMauto) buyMaxBuyable("c", 32)
    },
    tabFormat: {
        Buildings: {
            content: ["main-display", ["display-text", function() {return "Taxes are dividing your income by "+ layerText("h2", "c", (formatSmall(player.taxes, 6)))}], 
            ["row",[["column", [["buyable", 11],["clickable", 11]]],["column", [["buyable", 12],["clickable", 12]]],["column", [["buyable", 13],["clickable", 13]]]]],
            ["row",[["column", [["buyable", 21],["clickable", 21]]],["column", [["buyable", 22],["clickable", 22]]]]],
            ["row",[["column", [["buyable", 31],["clickable", 31]]],["column", [["buyable", 32],["clickable", 32]]], ["column", [["buyable", 33],["clickable", 33]]]]]]
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
        21: {
            title: "VI",
            description: "Increase all production based on producer bought.",
            cost: new Decimal(1e20),
            unlocked() { return player.a.pTimes > 0},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(1)
                let total = new Decimal(0)
                total = player[this.layer].buyables[11].bought.add(player[this.layer].buyables[12].bought.add(player[this.layer].buyables[13].bought.add(player[this.layer].buyables[21].bought.add(player[this.layer].buyables[22].bought))))
                eff = eff.times(total.add(1)).times(Decimal.min(1e30, Decimal.pow(1.008, total)))
                return eff;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        22: {
            title: "VII",
            description: "Gain free multipliers based on your purchased Alchemies.",
            cost: new Decimal(1e25),
            unlocked() { return player.a.pTimes > 0},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(0)
                eff = eff.add(Decimal.min(4, Decimal.floor(Decimal.log(player.c.buyables[22].bought.add(1), 10)).add(1)))
                return eff;
            },
            onPurchase() { addBonusBuyables("c") },
            effectDisplay() { return "Gain " + format(this.effect())+" free multipliers from bought Alchemies." }, // Add formatting to the effect
        },
        23: {
            title: "VIII",
            description: "Gain 1 free Accelerator per 7 purchased Multipliers.",
            cost: new Decimal(1e30),
            unlocked() { return player.a.pTimes > 0},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(0)
                eff = eff.add(Decimal.floor(player.c.buyables[32].bought.div(7)));
                return eff;
            },
            onPurchase() { addBonusBuyables("c") },
            effectDisplay() { return "+" + format(this.effect())+" free Accelerators." }, // Add formatting to the effect
        },
        24: {
            title: "IX",
            description: "Gain 1 free Multiplier per 10 purchased Accelerators.",
            cost: new Decimal(1e35),
            unlocked() { return player.a.pTimes > 0},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(0)
                eff = eff.add(Decimal.floor(player.c.buyables[31].bought.div(10)));
                return eff;
            },
            onPurchase() { addBonusBuyables("c") },
            effectDisplay() { return "+" + format(this.effect())+" free Multipliers." }, // Add formatting to the effect
        },
        25: {
            title: "X",
            description: "Improve Workers based on the first 750 purchased Investments.",
            cost: new Decimal(1e45),
            unlocked() { return player.a.pTimes > 0},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(1)
                eff = eff.times(Decimal.pow(2, Decimal.min(50, player.c.buyables[12].bought.div(15))));
                return eff;
            },
            effectDisplay() { return "Worker Production x" + format(this.effect()) }, // Add formatting to the effect
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
                Coins/Sec: " + format(produceFirst.div(player.taxes).times(40), 3) + "\n\
                Amount: " + format(player[this.layer].buyables[this.id].amount) + "\n\
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
            buyMax() {
                let buyStart = player[this.layer].buyables[this.id].bought;
                let buyInc = 1;
                let x = {}
                x.bought = buyStart.add(buyInc)
                let cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                while (player.c.points.gte(cashToBuy)) {
                    // then multiply by 4 until it reaches just above the amount needed
                    buyInc = buyInc * 4;
                    x.bought = buyStart.add(buyInc)
                    cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                }
                let stepdown = Math.floor(buyInc / 8);
                while (stepdown !== 0) {
                    // if step down would push it below out of expense range then divide step down by 2
                    x.bought = buyStart.add(buyInc - stepdown)
                    if (layers[this.layer].buyables[this.id].cost(x).lte(player[this.layer].points)) {
                        stepdown = Math.floor(stepdown / 2);
                    } else {
                        buyInc = buyInc - Math.max(smallestInc(buyInc), stepdown);
                    }
                }
                // go down by 7 steps below the last one able to be bought and spend the cost of 25 up to the one that you started with and stop if coin goes below requirement
                let buyFrom = Decimal.max(buyStart.add(buyInc).sub(7), player[this.layer].buyables[this.id].bought.add(1));
                x.bought = buyFrom
                let thisCost = layers[this.layer].buyables[this.id].cost(x);
                while (buyFrom.lt((buyStart.add(buyInc))) && player[this.layer].points.gte(thisCost)) {
                    x.bought = buyFrom
                    player[this.layer].points = player[this.layer].points.sub(thisCost);
                    if (player[this.layer].buyables[this.id].amount.eq(player[this.layer].buyables[this.id].bought)){
                        player[this.layer].buyables[this.id].amount = buyFrom
                    }
                    player[this.layer].buyables[this.id].bought = buyFrom
                    buyFrom = buyFrom.add(smallestIncDecimal(buyFrom));
                    thisCost = layers[this.layer].buyables[this.id].cost(x);
                }
            }, 
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
                Coins/Sec: " + format(produceSecond.div(player.taxes).times(40), 3) + "\n\
                Amount: " + format(player[this.layer].buyables[this.id].amount) + "\n\
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
            unlocked() { return player[this.layer].best.gte(1000) || player[this.layer].buyables[this.id].amount.gt(0) || tmp.p.layerShown == true }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {
                let buyStart = player[this.layer].buyables[this.id].bought;
                let buyInc = 1;
                let x = {}
                x.bought = buyStart.add(buyInc)
                let cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                while (player.c.points.gte(cashToBuy)) {
                    // then multiply by 4 until it reaches just above the amount needed
                    buyInc = buyInc * 4;
                    x.bought = buyStart.add(buyInc)
                    cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                }
                let stepdown = Math.floor(buyInc / 8);
                while (stepdown !== 0) {
                    // if step down would push it below out of expense range then divide step down by 2
                    x.bought = buyStart.add(buyInc - stepdown)
                    if (layers[this.layer].buyables[this.id].cost(x).lte(player[this.layer].points)) {
                        stepdown = Math.floor(stepdown / 2);
                    } else {
                        buyInc = buyInc - Math.max(smallestInc(buyInc), stepdown);
                    }
                }
                // go down by 7 steps below the last one able to be bought and spend the cost of 25 up to the one that you started with and stop if coin goes below requirement
                let buyFrom = Decimal.max(buyStart.add(buyInc).sub(7), player[this.layer].buyables[this.id].bought.add(1));
                x.bought = buyFrom
                let thisCost = layers[this.layer].buyables[this.id].cost(x);
                while (buyFrom.lt((buyStart.add(buyInc))) && player[this.layer].points.gte(thisCost)) {
                    x.bought = buyFrom
                    player[this.layer].points = player[this.layer].points.sub(thisCost);
                    if (player[this.layer].buyables[this.id].amount.eq(player[this.layer].buyables[this.id].bought)){
                        player[this.layer].buyables[this.id].amount = buyFrom
                    }
                    player[this.layer].buyables[this.id].bought = buyFrom
                    buyFrom = buyFrom.add(smallestIncDecimal(buyFrom));
                    thisCost = layers[this.layer].buyables[this.id].cost(x);
                }
            }, // You'll have to handle this yourself if you want
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
                Coins/Sec: " + format(produceThird.div(player.taxes).times(40), 3) + "\n\
                Amount: " + format(player[this.layer].buyables[this.id].amount) + "\n\
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
            unlocked() { return player[this.layer].best.gte(20000) || player[this.layer].buyables[this.id].amount.gt(0) || tmp.p.layerShown == true }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {
                let buyStart = player[this.layer].buyables[this.id].bought;
                let buyInc = 1;
                let x = {}
                x.bought = buyStart.add(buyInc)
                let cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                while (player.c.points.gte(cashToBuy)) {
                    // then multiply by 4 until it reaches just above the amount needed
                    buyInc = buyInc * 4;
                    x.bought = buyStart.add(buyInc)
                    cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                }
                let stepdown = Math.floor(buyInc / 8);
                while (stepdown !== 0) {
                    // if step down would push it below out of expense range then divide step down by 2
                    x.bought = buyStart.add(buyInc - stepdown)
                    if (layers[this.layer].buyables[this.id].cost(x).lte(player[this.layer].points)) {
                        stepdown = Math.floor(stepdown / 2);
                    } else {
                        buyInc = buyInc - Math.max(smallestInc(buyInc), stepdown);
                    }
                }
                // go down by 7 steps below the last one able to be bought and spend the cost of 25 up to the one that you started with and stop if coin goes below requirement
                let buyFrom = Decimal.max(buyStart.add(buyInc).sub(7), player[this.layer].buyables[this.id].bought.add(1));
                x.bought = buyFrom
                let thisCost = layers[this.layer].buyables[this.id].cost(x);
                while (buyFrom.lt((buyStart.add(buyInc))) && player[this.layer].points.gte(thisCost)) {
                    x.bought = buyFrom
                    player[this.layer].points = player[this.layer].points.sub(thisCost);
                    if (player[this.layer].buyables[this.id].amount.eq(player[this.layer].buyables[this.id].bought)){
                        player[this.layer].buyables[this.id].amount = buyFrom
                    }
                    player[this.layer].buyables[this.id].bought = buyFrom
                    buyFrom = buyFrom.add(smallestIncDecimal(buyFrom));
                    thisCost = layers[this.layer].buyables[this.id].cost(x);
                }
            }, // You'll have to handle this yourself if you want
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
                Coins/Sec: " + format(produceFourth.div(player.taxes).times(40), 3) + "\n\
                Amount: " + format(player[this.layer].buyables[this.id].amount) + "\n\
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
            unlocked() { return player[this.layer].best.gte(4e5) || player[this.layer].buyables[this.id].amount.gt(0) || tmp.p.layerShown == true }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {
                let buyStart = player[this.layer].buyables[this.id].bought;
                let buyInc = 1;
                let x = {}
                x.bought = buyStart.add(buyInc)
                let cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                while (player.c.points.gte(cashToBuy)) {
                    // then multiply by 4 until it reaches just above the amount needed
                    buyInc = buyInc * 4;
                    x.bought = buyStart.add(buyInc)
                    cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                }
                let stepdown = Math.floor(buyInc / 8);
                while (stepdown !== 0) {
                    // if step down would push it below out of expense range then divide step down by 2
                    x.bought = buyStart.add(buyInc - stepdown)
                    if (layers[this.layer].buyables[this.id].cost(x).lte(player[this.layer].points)) {
                        stepdown = Math.floor(stepdown / 2);
                    } else {
                        buyInc = buyInc - Math.max(smallestInc(buyInc), stepdown);
                    }
                }
                // go down by 7 steps below the last one able to be bought and spend the cost of 25 up to the one that you started with and stop if coin goes below requirement
                let buyFrom = Decimal.max(buyStart.add(buyInc).sub(7), player[this.layer].buyables[this.id].bought.add(1));
                x.bought = buyFrom
                let thisCost = layers[this.layer].buyables[this.id].cost(x);
                while (buyFrom.lt((buyStart.add(buyInc))) && player[this.layer].points.gte(thisCost)) {
                    x.bought = buyFrom
                    player[this.layer].points = player[this.layer].points.sub(thisCost);
                    if (player[this.layer].buyables[this.id].amount.eq(player[this.layer].buyables[this.id].bought)){
                        player[this.layer].buyables[this.id].amount = buyFrom
                    }
                    player[this.layer].buyables[this.id].bought = buyFrom
                    buyFrom = buyFrom.add(smallestIncDecimal(buyFrom));
                    thisCost = layers[this.layer].buyables[this.id].cost(x);
                }
            },// You'll have to handle this yourself if you want
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
                Coins/Sec: " + format(produceFifth.div(player.taxes).times(40), 3) + "\n\
                Amount: " + format(player[this.layer].buyables[this.id].amount) + "\n\
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
            unlocked() { return player[this.layer].best.gte(8e6) || player[this.layer].buyables[this.id].amount.gt(0) || tmp.p.layerShown == true }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {
                let buyStart = player[this.layer].buyables[this.id].bought;
                let buyInc = 1;
                let x = {}
                x.bought = buyStart.add(buyInc)
                let cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                while (player.c.points.gte(cashToBuy)) {
                    // then multiply by 4 until it reaches just above the amount needed
                    buyInc = buyInc * 4;
                    x.bought = buyStart.add(buyInc)
                    cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                }
                let stepdown = Math.floor(buyInc / 8);
                while (stepdown !== 0) {
                    // if step down would push it below out of expense range then divide step down by 2
                    x.bought = buyStart.add(buyInc - stepdown)
                    if (layers[this.layer].buyables[this.id].cost(x).lte(player[this.layer].points)) {
                        stepdown = Math.floor(stepdown / 2);
                    } else {
                        buyInc = buyInc - Math.max(smallestInc(buyInc), stepdown);
                    }
                }
                // go down by 7 steps below the last one able to be bought and spend the cost of 25 up to the one that you started with and stop if coin goes below requirement
                let buyFrom = Decimal.max(buyStart.add(buyInc).sub(7), player[this.layer].buyables[this.id].bought.add(1));
                x.bought = buyFrom
                let thisCost = layers[this.layer].buyables[this.id].cost(x);
                while (buyFrom.lt((buyStart.add(buyInc))) && player[this.layer].points.gte(thisCost)) {
                    x.bought = buyFrom
                    player[this.layer].points = player[this.layer].points.sub(thisCost);
                    if (player[this.layer].buyables[this.id].amount.eq(player[this.layer].buyables[this.id].bought)){
                        player[this.layer].buyables[this.id].amount = buyFrom
                    }
                    player[this.layer].buyables[this.id].bought = buyFrom
                    buyFrom = buyFrom.add(smallestIncDecimal(buyFrom));
                    thisCost = layers[this.layer].buyables[this.id].cost(x);
                }
            }, // You'll have to handle this yourself if you want
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
                Amount: " + format(player[this.layer].buyables[this.id].amount) + "\n\
                Bought: " + player[this.layer].buyables[this.id].bought
                
            },
            effect(x) {
                let eff = {}
                eff.power = new Decimal(1.1)
                eff.power = eff.power.add(tmp.p.buyables[33].effect)
                if(hasAchievement("a", 13)) eff.power = eff.power.add(0.0005)
                if(hasAchievement("a", 23)) eff.power = eff.power.add(0.0010)
                if(hasAchievement("a", 33)) eff.power = eff.power.add(0.0015)
                if(hasAchievement("a", 43)) eff.power = eff.power.add(0.0020)
                if(hasAchievement("a", 53)) eff.power = eff.power.add(0.0025)
                eff.mult = new Decimal(1)
                eff.mult = eff.power.pow(x.amount)
                return eff
            },
            unlocked() { return player[this.layer].best.gte(250) || player[this.layer].buyables[this.id].amount.gt(0) || tmp.p.layerShown == true }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {
                let buyStart = player[this.layer].buyables[this.id].bought;
                let buyInc = 1;
                let x = {}
                x.bought = buyStart.add(buyInc)
                let cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                while (player.c.points.gte(cashToBuy)) {
                    // then multiply by 4 until it reaches just above the amount needed
                    buyInc = buyInc * 4;
                    x.bought = buyStart.add(buyInc)
                    cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                }
                let stepdown = Math.floor(buyInc / 8);
                while (stepdown !== 0) {
                    // if step down would push it below out of expense range then divide step down by 2
                    x.bought = buyStart.add(buyInc - stepdown)
                    if (layers[this.layer].buyables[this.id].cost(x).lte(player[this.layer].points)) {
                        stepdown = Math.floor(stepdown / 2);
                    } else {
                        buyInc = buyInc - Math.max(smallestInc(buyInc), stepdown);
                    }
                }
                // go down by 7 steps below the last one able to be bought and spend the cost of 25 up to the one that you started with and stop if coin goes below requirement
                let buyFrom = Decimal.max(buyStart.add(buyInc).sub(7), player[this.layer].buyables[this.id].bought.add(1));
                x.bought = buyFrom
                let thisCost = layers[this.layer].buyables[this.id].cost(x);
                while (buyFrom.lt((buyStart.add(buyInc))) && player[this.layer].points.gte(thisCost)) {
                    x.bought = buyFrom
                    player[this.layer].points = player[this.layer].points.sub(thisCost);
                    player[this.layer].buyables[this.id].amount = buyFrom
                    player[this.layer].buyables[this.id].bought = buyFrom
                    buyFrom = buyFrom.add(smallestIncDecimal(buyFrom));
                    thisCost = layers[this.layer].buyables[this.id].cost(x);
                    addBonusBuyables("c")
                }
            }, // You'll have to handle this yourself if you want
            style() {
                if(tmp[this.layer].buyables[this.id].canAfford)return {'height':'222px', 'background-color':'cyan'}
                return {'height':'222px'}
            }
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
                Amount: " + format(player[this.layer].buyables[this.id].amount) + "\n\
                Bought: " + player[this.layer].buyables[this.id].bought
                
            },
            effect(x) {
                let eff = {}
                eff.power = new Decimal(2)
                eff.mult = new Decimal(1)
                eff.mult = eff.power.pow(x.amount)
                return eff
            },
            unlocked() { return player[this.layer].best.gte(5e4) || player[this.layer].buyables[this.id].amount.gt(0) || tmp.p.layerShown == true }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {
                let buyStart = player[this.layer].buyables[this.id].bought;
                let buyInc = 1;
                let x = {}
                x.bought = buyStart.add(buyInc)
                let cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                while (player.c.points.gte(cashToBuy)) {
                    // then multiply by 4 until it reaches just above the amount needed
                    buyInc = buyInc * 4;
                    x.bought = buyStart.add(buyInc)
                    cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                }
                let stepdown = Math.floor(buyInc / 8);
                while (stepdown !== 0) {
                    // if step down would push it below out of expense range then divide step down by 2
                    x.bought = buyStart.add(buyInc - stepdown)
                    if (layers[this.layer].buyables[this.id].cost(x).lte(player[this.layer].points)) {
                        stepdown = Math.floor(stepdown / 2);
                    } else {
                        buyInc = buyInc - Math.max(smallestInc(buyInc), stepdown);
                    }
                }
                // go down by 7 steps below the last one able to be bought and spend the cost of 25 up to the one that you started with and stop if coin goes below requirement
                let buyFrom = Decimal.max(buyStart.add(buyInc).sub(7), player[this.layer].buyables[this.id].bought.add(1));
                x.bought = buyFrom
                let thisCost = layers[this.layer].buyables[this.id].cost(x);
                while (buyFrom.lt((buyStart.add(buyInc))) && player[this.layer].points.gte(thisCost)) {
                    x.bought = buyFrom
                    player[this.layer].points = player[this.layer].points.sub(thisCost);
                    player[this.layer].buyables[this.id].amount = buyFrom
                    player[this.layer].buyables[this.id].bought = buyFrom
                    buyFrom = buyFrom.add(smallestIncDecimal(buyFrom));
                    thisCost = layers[this.layer].buyables[this.id].cost(x);
                    addBonusBuyables("c")
                }
            }, // You'll have to handle this yourself if you want
            style() {
                if(tmp[this.layer].buyables[this.id].canAfford)return {'height':'222px', 'background-color':'#ff294e'}
                return {'height':'222px'}
            }
        },
        33: {
            title: "Accelerator Boost",// Optional, displayed at the top in a larger font
            color: "#00ffff",
            amount: new Decimal(0),
            bought: new Decimal(0), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(1e3)
                cost = cost.times(Decimal.pow(1e11, x.bought))
                return cost.ceil()
            },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(tmp.p.buyables[33].cost) + " diamonds\n\
                Reset Diamonds and Prestige Upgrades, but add 1.000% Acceleration Power and 5 free Accelerators.\n\
                Amount: " + format(player.p.buyables[33].amount) + "\n\
                Bought: " + player.p.buyables[33].bought
                
            },
            effect(x) {
                let eff = new Decimal(0.01)
                eff = eff.times(player[this.layer].buyables[this.id].amount)
                return eff
            },
            unlocked() { return player.a.pTimes > 0 || player.p.buyables[33].amount.gt(0)  }, 
            canAfford() {
                return player.p.points.gte(tmp.p.buyables[33].cost)},
            buy() { 
                player.p.buyables[33].amount = player.p.buyables[33].amount.add(1)
                player.p.buyables[33].bought = player.p.buyables[33].bought.add(1)
                if (hasAchievement("a", 81)) {
                    layers.c.startData = function() { 
                        return {
                            unlocked: true,
                            points: new Decimal(200)
                        }
                    }
                }
                layerDataReset("p", ["buyables"])
                layerDataReset("c", ["auto"])
                
                
            },
            buyMax() {}, // You'll have to handle this yourself if you want
            style() {
                if(tmp[this.layer].buyables[this.id].canAfford)return {'height':'222px', 'background-color':'#b1ffff'}
                return {'height':'222px'}
            }
        },
    },
    clickables: {
        11: {
            display() {
                if (player.a.auto.c.b1auto) return "<h2>ON</h2>"
                else return "<h2>OFF</h2>"
            },
            canClick() {return true},
            onClick() {
                if (player.a.auto.c.b1auto) player.a.auto.c.b1auto = false 
                else player.a.auto.c.b1auto = true
            },
            unlocked() {
                return hasUpgrade("au", 11)
            },
            style: {'height':'50px', 'width':'222px'},
        },
        12: {
            display() {
                if (player.a.auto.c.b2auto) return "<h2>ON</h2>"
                else return "<h2>OFF</h2>"
            },
            canClick() {return true},
            onClick() {
                if (player.a.auto.c.b2auto) player.a.auto.c.b2auto = false 
                else player.a.auto.c.b2auto = true
            },
            unlocked() {
                return hasUpgrade("au", 12)
            },
            style: {'height':'50px', 'width':'222px'},
        },
        13: {
            display() {
                if (player.a.auto.c.b3auto) return "<h2>ON</h2>"
                else return "<h2>OFF</h2>"
            },
            canClick() {return true},
            onClick() {
                if (player.a.auto.c.b3auto) player.a.auto.c.b3auto = false 
                else player.a.auto.c.b3auto = true
            },
            unlocked() {
                return hasUpgrade("au", 13)
            },
            style: {'height':'50px', 'width':'222px'},
        },
        21: {
            display() {
                if (player.a.auto.c.b4auto) return "<h2>ON</h2>"
                else return "<h2>OFF</h2>"
            },
            canClick() {return true},
            onClick() {
                if (player.a.auto.c.b4auto) player.a.auto.c.b4auto = false 
                else player.a.auto.c.b4auto = true
            },
            unlocked() {
                return hasUpgrade("au", 14)
            },
            style: {'height':'50px', 'width':'222px'},
        },
        22: {
            display() {
                if (player.a.auto.c.b5auto) return "<h2>ON</h2>"
                else return "<h2>OFF</h2>"
            },
            canClick() {return true},
            onClick() {
                if (player.a.auto.c.b5auto) player.a.auto.c.b5auto = false 
                else player.a.auto.c.b5auto = true
            },
            unlocked() {
                return hasUpgrade("au", 15)
            },
            style: {'height':'50px', 'width':'222px'},
        },
        31: {
            display() {
                if (player.a.auto.c.bAauto) return "<h2>ON</h2>"
                else return "<h2>OFF</h2>"
            },
            canClick() {return true},
            onClick() {
                if (player.a.auto.c.bAauto) player.a.auto.c.bAauto = false 
                else player.a.auto.c.bAauto = true
            },
            unlocked() {
                return hasUpgrade("au", 21)
            },
            style: {'height':'50px', 'width':'222px'},
        },
        32: {
            display() {
                if (player.a.auto.c.bMauto) return "<h2>ON</h2>"
                else return "<h2>OFF</h2>"
            },
            canClick() {return true},
            onClick() {
                if (player.a.auto.c.bMauto) player.a.auto.c.bMauto = false 
                else player.a.auto.c.bMauto = true
            },
            unlocked() {
                return hasUpgrade("au", 22)
            },
            style: {'height':'50px', 'width':'222px'},
        },
        33: {
            display() {
                if (player.a.auto.c.bABauto) return "<h2>ON</h2>"
                else return "<h2>OFF</h2>"
            },
            canClick() {return true},
            onClick() {
                if (player.a.auto.c.bABauto) player.a.auto.c.bABauto = false 
                else player.a.auto.c.bABauto = true
            },
            unlocked() {
                return false //hasUpgrade("au", 15)
            },
            style: {'height':'50px', 'width':'222px'},
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
        bestPointGain: new Decimal(0),
        //accelBoosts: new Decimal(0),
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
        and " + format(gainOfferings(1)) + " offerings.\n\
        Requires: " + format(player.c.total) + "/" + format(tmp.p.requires) + " total coins."
        return text
    },
    //doReset(resettingLayer) {
        
    //},
    onPrestige(gain) {
        addPoints("o", gainOfferings(1))
        player.a.pTimes += 1
        if (tmp[this.layer].getResetGain.gt(player[this.layer].bestPointGain)) player[this.layer].bestPointGain = tmp[this.layer].getResetGain
        //This is bad, but for now it works.
        if (hasAchievement("a", 81)) {
            layers.c.startData = function() { 
                return {
                    unlocked: true,
                    points: new Decimal(200)
                }
            }
        }
    },
    effect() {
        let crystalExponent = 1/3
        let eff = Decimal.pow(player[this.layer].crystals, crystalExponent).add(1);
        return eff
    },
    tabFormat: {
        Buildings: {
            content: ["main-display", 
            "prestige-button",  
            ["row",[["column", [["buyable", 11]]],["column", [["buyable", 12]]],["column", [["buyable", 13]]]]],
            ["row",[["column", [["buyable", 21]]],["column", [["buyable", 22]]]]],
            ["display-text", function() {return 'You have ' + layerText("h2", "p", format(player.p.crystals)) + ' Crystals, multiplying Coin production by ' + layerText("h2", "p", format(tmp[this.layer].effect)) +"x"}],
            ["row",[["column", [["buyable", 31]]],["column", [["buyable", 32]]]]]]
        },
        Upgrades: {
            content: ["main-display", "upgrades"]
        },
    },
    upgrades: {
        11: {
            title: "I",
            description: "Gain 1 Multiplier and 5 Accelerators plus 1% more free Multipliers and Accelerators.",
            cost: new Decimal(100),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(1)
                return eff;
            },
            onPurchase() { addBonusBuyables("c") },
            //effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        12: {
            title: "II",
            description: "Gain 1 Multiplier and 4 Accelerators plus 1% more free Multipliers and Accelerators.",
            cost: new Decimal(1000),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(1)
                return eff;
            },
            onPurchase() { addBonusBuyables("c") },
            //effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        13: {
            title: "III",
            description: "Gain 1 Multiplier and 3 Accelerators plus 1% more free Multipliers and Accelerators.",
            cost: new Decimal(1e4),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(1)
                return eff;
            },
            onPurchase() { addBonusBuyables("c") },
            //effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        14: {
            title: "IV",
            description: "Gain 1 Multiplier and 2 Accelerators plus 1% more free Multipliers and Accelerators.",
            cost: new Decimal(1e5),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(1)
                return eff;
            },
            onPurchase() { addBonusBuyables("c") },
            //effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        15: {
            title: "V",
            description: "Gain 1 Multiplier and 1 Accelerator plus 1% more free Multipliers and Accelerators.",
            cost: new Decimal(1e6),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(1)
                return eff;
            },
            onPurchase() { addBonusBuyables("c") },
            //effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        21: {
            title: "VI",
            description: "Gain a free Accelerator Boost.",
            cost: new Decimal(1e7),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(1)
                return eff;
            },
            onPurchase() { addBonusBuyables("c") },
            //effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        22: {
            title: "VII",
            description: "Gain free Accelerators based on unspent Coins.",
            cost: new Decimal(1e10),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(1)
                eff = eff.add(Decimal.min((250, Decimal.floor(Decimal.log(player.c.points.add(1), 1e3))).add(Decimal.min(1750, Decimal.max(0, Decimal.floor(Decimal.log(player.c.points.add(1), 1e15)).sub(50))))))
                return eff;
            },
            onPurchase() { addBonusBuyables("c") },
            effectDisplay() { return "+" + format(this.effect())+" Accelerators." }, // Add formatting to the effect
        },
        23: {
            title: "VIII",
            description: "Gain a free Multiplier per 160 Coin producers bought.",
            cost: new Decimal(1e13),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(1)
                eff = eff.add(Decimal.floor(Decimal.min(1000, (player.c.buyables[11].bought.add(player.c.buyables[12].bought.add(player.c.buyables[13].bought.add(player.c.buyables[21].bought.add(player.c.buyables[22].bought))))).div(160))))
                return eff;
            },
            onPurchase() { addBonusBuyables("c") },
            effectDisplay() { return "+" + format(this.effect())+" Multipliers." }, // Add formatting to the effect
        },
        24: {
            title: "IX",
            description: "Gain a free Accelerator per 80 Coin producers bought.",
            cost: new Decimal(1e20),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(1)
                eff = eff.add(Decimal.floor(Decimal.min(2000, (player.c.buyables[11].bought.add(player.c.buyables[12].bought.add(player.c.buyables[13].bought.add(player.c.buyables[21].bought.add(player.c.buyables[22].bought))))).div(80))))
                return eff;
            },
            onPurchase() { addBonusBuyables("c") },
            effectDisplay() { return "+" + format(this.effect())+" Accelerators." }, // Add formatting to the effect
        },
        25: {
            title: "X",
            description: "Gain free Multipliers based on unspent Coins.",
            cost: new Decimal(1e30),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(1)
                eff = eff.add(Decimal.min((75, Decimal.floor(Decimal.log(player.c.points.add(1), 1e10))).add(Decimal.min(925, Decimal.floor(Decimal.log(player.c.points.add(1), 1e30))))))
                return eff;
            },
            onPurchase() { addBonusBuyables("c") },
            effectDisplay() { return "+" + format(this.effect())+" Multipliers." }, // Add formatting to the effect
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
                eff = eff.times(buyableEffect("p", 31))
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
            buyMax() {
                let buyStart = player[this.layer].buyables[this.id].bought;
                let buyInc = 1;
                let x = {}
                x.bought = buyStart.add(buyInc)
                let cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                while (player.c.points.gte(cashToBuy)) {
                    // then multiply by 4 until it reaches just above the amount needed
                    buyInc = buyInc * 4;
                    x.bought = buyStart.add(buyInc)
                    cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                }
                let stepdown = Math.floor(buyInc / 8);
                while (stepdown !== 0) {
                    // if step down would push it below out of expense range then divide step down by 2
                    x.bought = buyStart.add(buyInc - stepdown)
                    if (layers[this.layer].buyables[this.id].cost(x).lte(player[this.layer].points)) {
                        stepdown = Math.floor(stepdown / 2);
                    } else {
                        buyInc = buyInc - Math.max(smallestInc(buyInc), stepdown);
                    }
                }
                // go down by 7 steps below the last one able to be bought and spend the cost of 25 up to the one that you started with and stop if coin goes below requirement
                let buyFrom = Decimal.max(buyStart.add(buyInc).sub(7), player[this.layer].buyables[this.id].bought.add(1));
                x.bought = buyFrom
                let thisCost = layers[this.layer].buyables[this.id].cost(x);
                while (buyFrom.lt((buyStart.add(buyInc))) && player[this.layer].points.gte(thisCost)) {
                    x.bought = buyFrom
                    player[this.layer].points = player[this.layer].points.sub(thisCost);
                    if (player[this.layer].buyables[this.id].amount.eq(player[this.layer].buyables[this.id].bought)){
                        player[this.layer].buyables[this.id].amount = buyFrom
                    }
                    player[this.layer].buyables[this.id].bought = buyFrom
                    buyFrom = buyFrom.add(smallestIncDecimal(buyFrom));
                    thisCost = layers[this.layer].buyables[this.id].cost(x);
                }
            }, // You'll have to handle this yourself if you want
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
            buyMax() {
                let buyStart = player[this.layer].buyables[this.id].bought;
                let buyInc = 1;
                let x = {}
                x.bought = buyStart.add(buyInc)
                let cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                while (player.c.points.gte(cashToBuy)) {
                    // then multiply by 4 until it reaches just above the amount needed
                    buyInc = buyInc * 4;
                    x.bought = buyStart.add(buyInc)
                    cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                }
                let stepdown = Math.floor(buyInc / 8);
                while (stepdown !== 0) {
                    // if step down would push it below out of expense range then divide step down by 2
                    x.bought = buyStart.add(buyInc - stepdown)
                    if (layers[this.layer].buyables[this.id].cost(x).lte(player[this.layer].points)) {
                        stepdown = Math.floor(stepdown / 2);
                    } else {
                        buyInc = buyInc - Math.max(smallestInc(buyInc), stepdown);
                    }
                }
                // go down by 7 steps below the last one able to be bought and spend the cost of 25 up to the one that you started with and stop if coin goes below requirement
                let buyFrom = Decimal.max(buyStart.add(buyInc).sub(7), player[this.layer].buyables[this.id].bought.add(1));
                x.bought = buyFrom
                let thisCost = layers[this.layer].buyables[this.id].cost(x);
                while (buyFrom.lt((buyStart.add(buyInc))) && player[this.layer].points.gte(thisCost)) {
                    x.bought = buyFrom
                    player[this.layer].points = player[this.layer].points.sub(thisCost);
                    if (player[this.layer].buyables[this.id].amount.eq(player[this.layer].buyables[this.id].bought)){
                        player[this.layer].buyables[this.id].amount = buyFrom
                    }
                    player[this.layer].buyables[this.id].bought = buyFrom
                    buyFrom = buyFrom.add(smallestIncDecimal(buyFrom));
                    thisCost = layers[this.layer].buyables[this.id].cost(x);
                }
            }, // You'll have to handle this yourself if you want
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
            buyMax() {
                let buyStart = player[this.layer].buyables[this.id].bought;
                let buyInc = 1;
                let x = {}
                x.bought = buyStart.add(buyInc)
                let cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                while (player.c.points.gte(cashToBuy)) {
                    // then multiply by 4 until it reaches just above the amount needed
                    buyInc = buyInc * 4;
                    x.bought = buyStart.add(buyInc)
                    cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                }
                let stepdown = Math.floor(buyInc / 8);
                while (stepdown !== 0) {
                    // if step down would push it below out of expense range then divide step down by 2
                    x.bought = buyStart.add(buyInc - stepdown)
                    if (layers[this.layer].buyables[this.id].cost(x).lte(player[this.layer].points)) {
                        stepdown = Math.floor(stepdown / 2);
                    } else {
                        buyInc = buyInc - Math.max(smallestInc(buyInc), stepdown);
                    }
                }
                // go down by 7 steps below the last one able to be bought and spend the cost of 25 up to the one that you started with and stop if coin goes below requirement
                let buyFrom = Decimal.max(buyStart.add(buyInc).sub(7), player[this.layer].buyables[this.id].bought.add(1));
                x.bought = buyFrom
                let thisCost = layers[this.layer].buyables[this.id].cost(x);
                while (buyFrom.lt((buyStart.add(buyInc))) && player[this.layer].points.gte(thisCost)) {
                    x.bought = buyFrom
                    player[this.layer].points = player[this.layer].points.sub(thisCost);
                    if (player[this.layer].buyables[this.id].amount.eq(player[this.layer].buyables[this.id].bought)){
                        player[this.layer].buyables[this.id].amount = buyFrom
                    }
                    player[this.layer].buyables[this.id].bought = buyFrom
                    buyFrom = buyFrom.add(smallestIncDecimal(buyFrom));
                    thisCost = layers[this.layer].buyables[this.id].cost(x);
                }
            }, // You'll have to handle this yourself if you want
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
            buyMax() {
                let buyStart = player[this.layer].buyables[this.id].bought;
                let buyInc = 1;
                let x = {}
                x.bought = buyStart.add(buyInc)
                let cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                while (player.c.points.gte(cashToBuy)) {
                    // then multiply by 4 until it reaches just above the amount needed
                    buyInc = buyInc * 4;
                    x.bought = buyStart.add(buyInc)
                    cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                }
                let stepdown = Math.floor(buyInc / 8);
                while (stepdown !== 0) {
                    // if step down would push it below out of expense range then divide step down by 2
                    x.bought = buyStart.add(buyInc - stepdown)
                    if (layers[this.layer].buyables[this.id].cost(x).lte(player[this.layer].points)) {
                        stepdown = Math.floor(stepdown / 2);
                    } else {
                        buyInc = buyInc - Math.max(smallestInc(buyInc), stepdown);
                    }
                }
                // go down by 7 steps below the last one able to be bought and spend the cost of 25 up to the one that you started with and stop if coin goes below requirement
                let buyFrom = Decimal.max(buyStart.add(buyInc).sub(7), player[this.layer].buyables[this.id].bought.add(1));
                x.bought = buyFrom
                let thisCost = layers[this.layer].buyables[this.id].cost(x);
                while (buyFrom.lt((buyStart.add(buyInc))) && player[this.layer].points.gte(thisCost)) {
                    x.bought = buyFrom
                    player[this.layer].points = player[this.layer].points.sub(thisCost);
                    if (player[this.layer].buyables[this.id].amount.eq(player[this.layer].buyables[this.id].bought)){
                        player[this.layer].buyables[this.id].amount = buyFrom
                    }
                    player[this.layer].buyables[this.id].bought = buyFrom
                    buyFrom = buyFrom.add(smallestIncDecimal(buyFrom));
                    thisCost = layers[this.layer].buyables[this.id].cost(x);
                }
            }, // You'll have to handle this yourself if you want
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
            buyMax() {
                let buyStart = player[this.layer].buyables[this.id].bought;
                let buyInc = 1;
                let x = {}
                x.bought = buyStart.add(buyInc)
                let cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                while (player.c.points.gte(cashToBuy)) {
                    // then multiply by 4 until it reaches just above the amount needed
                    buyInc = buyInc * 4;
                    x.bought = buyStart.add(buyInc)
                    cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                }
                let stepdown = Math.floor(buyInc / 8);
                while (stepdown !== 0) {
                    // if step down would push it below out of expense range then divide step down by 2
                    x.bought = buyStart.add(buyInc - stepdown)
                    if (layers[this.layer].buyables[this.id].cost(x).lte(player[this.layer].points)) {
                        stepdown = Math.floor(stepdown / 2);
                    } else {
                        buyInc = buyInc - Math.max(smallestInc(buyInc), stepdown);
                    }
                }
                // go down by 7 steps below the last one able to be bought and spend the cost of 25 up to the one that you started with and stop if coin goes below requirement
                let buyFrom = Decimal.max(buyStart.add(buyInc).sub(7), player[this.layer].buyables[this.id].bought.add(1));
                x.bought = buyFrom
                let thisCost = layers[this.layer].buyables[this.id].cost(x);
                while (buyFrom.lt((buyStart.add(buyInc))) && player[this.layer].points.gte(thisCost)) {
                    x.bought = buyFrom
                    player[this.layer].points = player[this.layer].points.sub(thisCost);
                    if (player[this.layer].buyables[this.id].amount.eq(player[this.layer].buyables[this.id].bought)){
                        player[this.layer].buyables[this.id].amount = buyFrom
                    }
                    player[this.layer].buyables[this.id].bought = buyFrom
                    buyFrom = buyFrom.add(smallestIncDecimal(buyFrom));
                    thisCost = layers[this.layer].buyables[this.id].cost(x);
                }
            }, // You'll have to handle this yourself if you want
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
                let eff = new Decimal(1)
                eff = eff.times(Decimal.min(Decimal.pow(10, player.p.buyables[31].amount.mul(5).add(50)), Decimal.pow(1.05, player.a.points * player.p.buyables[31].amount)))
                return eff
            },
            unlocked() { return player[this.layer].unlocked  }, 
            canAfford:() => player.p.crystals.gte(tmp.p.buyables[31].cost),
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player.p.crystals = player.p.crystals.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {
                let buyStart = player[this.layer].buyables[this.id].bought;
                let buyInc = 1;
                let x = {}
                x.bought = buyStart.add(buyInc)
                let cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                while (player.c.points.gte(cashToBuy)) {
                    // then multiply by 4 until it reaches just above the amount needed
                    buyInc = buyInc * 4;
                    x.bought = buyStart.add(buyInc)
                    cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                }
                let stepdown = Math.floor(buyInc / 8);
                while (stepdown !== 0) {
                    // if step down would push it below out of expense range then divide step down by 2
                    x.bought = buyStart.add(buyInc - stepdown)
                    if (layers[this.layer].buyables[this.id].cost(x).lte(player[this.layer].points)) {
                        stepdown = Math.floor(stepdown / 2);
                    } else {
                        buyInc = buyInc - Math.max(smallestInc(buyInc), stepdown);
                    }
                }
                // go down by 7 steps below the last one able to be bought and spend the cost of 25 up to the one that you started with and stop if coin goes below requirement
                let buyFrom = Decimal.max(buyStart.add(buyInc).sub(7), player[this.layer].buyables[this.id].bought.add(1));
                x.bought = buyFrom
                let thisCost = layers[this.layer].buyables[this.id].cost(x);
                while (buyFrom.lt((buyStart.add(buyInc))) && player[this.layer].points.gte(thisCost)) {
                    x.bought = buyFrom
                    player[this.layer].points = player[this.layer].points.sub(thisCost);
                    if (player[this.layer].buyables[this.id].amount.eq(player[this.layer].buyables[this.id].bought)){
                        player[this.layer].buyables[this.id].amount = buyFrom
                    }
                    player[this.layer].buyables[this.id].bought = buyFrom
                    buyFrom = buyFrom.add(smallestIncDecimal(buyFrom));
                    thisCost = layers[this.layer].buyables[this.id].cost(x);
                }
            }, // You'll have to handle this yourself if you want
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
                player.p.crystals = player.p.crystals.sub(cost)
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {
                let buyStart = player[this.layer].buyables[this.id].bought;
                let buyInc = 1;
                let x = {}
                x.bought = buyStart.add(buyInc)
                let cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                while (player.c.points.gte(cashToBuy)) {
                    // then multiply by 4 until it reaches just above the amount needed
                    buyInc = buyInc * 4;
                    x.bought = buyStart.add(buyInc)
                    cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                }
                let stepdown = Math.floor(buyInc / 8);
                while (stepdown !== 0) {
                    // if step down would push it below out of expense range then divide step down by 2
                    x.bought = buyStart.add(buyInc - stepdown)
                    if (layers[this.layer].buyables[this.id].cost(x).lte(player[this.layer].points)) {
                        stepdown = Math.floor(stepdown / 2);
                    } else {
                        buyInc = buyInc - Math.max(smallestInc(buyInc), stepdown);
                    }
                }
                // go down by 7 steps below the last one able to be bought and spend the cost of 25 up to the one that you started with and stop if coin goes below requirement
                let buyFrom = Decimal.max(buyStart.add(buyInc).sub(7), player[this.layer].buyables[this.id].bought.add(1));
                x.bought = buyFrom
                let thisCost = layers[this.layer].buyables[this.id].cost(x);
                while (buyFrom.lt((buyStart.add(buyInc))) && player[this.layer].points.gte(thisCost)) {
                    x.bought = buyFrom
                    player[this.layer].points = player[this.layer].points.sub(thisCost);
                    if (player[this.layer].buyables[this.id].amount.eq(player[this.layer].buyables[this.id].bought)){
                        player[this.layer].buyables[this.id].amount = buyFrom
                    }
                    player[this.layer].buyables[this.id].bought = buyFrom
                    buyFrom = buyFrom.add(smallestIncDecimal(buyFrom));
                    thisCost = layers[this.layer].buyables[this.id].cost(x);
                }
            }, // You'll have to handle this yourself if you want
            style: {'height':'222px'},
        },
        33: {
            title: "Accelerator Boost",// Optional, displayed at the top in a larger font
            color: "#00ffff",
            amount: new Decimal(0),
            bought: new Decimal(0), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(1e3)
                cost = cost.times(Decimal.pow(1e11, x.bought))
                return cost.ceil()
            },
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Cost: " + format(data.cost) + " diamonds\n\
                Reset Diamonds and Prestige Upgrades, but add 1.000% Acceleration Power and 5 free Accelerators.\n\
                Amount: " + player[this.layer].buyables[this.id].amount + "\n\
                Bought: " + player[this.layer].buyables[this.id].bought
                
            },
            effect(x) {
                let eff = new Decimal(0.01)
                eff = eff.times(player[this.layer].buyables[this.id].amount)
                return eff
            },
            unlocked() { return false },
            canAfford() {
                return player.p.points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player.p.points = player.p.points.sub(cost)
                layerDataReset("p", ["buyables"])
                layerDataReset("c")	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player.c.buyables[31].amount = player.c.buyables[31].amount.add(player.c.buyables[33].amount.times(5))
                //player.c.accelBoosts = player.c.accelBoosts.add(1)
                
            },
            buyMax() {}, // You'll have to handle this yourself if you want
            style() {
                if(tmp[this.layer].buyables[this.id].canAfford)return {'height':'222px', 'background-color':'#b1ffff'}
                return {'height':'222px'}
            }
        },
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        //{key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.c.total.gte(1e8) || player[this.layer].best.gt(0) || player.p.buyables[33].amount.gt(0)}
})

addLayer("o", {
    name: "runes", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    resetsNothing: true,
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
            content: ["main-display", ["display-text", function() {return "Each offering is worth "+ layerText("h2", "o", (format(1))) + " EXP"}], "buyables",
        "empty", "empty", ["display-text", function() {return "=====RUNE EFFECT SUMMARY====="}],
        ["display-text", function() {return "Speed Rune Bonus: +" + format(tmp[this.layer].buyables[11].effect.eff1, 0) + " Accelerators, +" + format(tmp[this.layer].buyables[11].effect.eff2) + "% Accelerators, +" + format(tmp[this.layer].buyables[11].effect.eff3, 0) + " Accelerator Boosts."}],
        ["display-text", function() {return "Duplication Rune Bonus: +" + format(tmp[this.layer].buyables[12].effect.eff1, 0) + " Multipliers, +" + format(tmp[this.layer].buyables[12].effect.eff2) + "% Multipliers, -" + format((99.9 * (1 - Math.pow(6, -(player[this.layer].buyables[12].amount.mag * 1) / 1000))), 4) + "% Tax Growth."}]]
        },  
    },
    buyables: {
        11: {
            title: "Speed Rune",// Optional, displayed at the top in a larger font
            amount: new Decimal(1),
            bought: new Decimal(1), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(1)
                cost = Decimal.pow(x.bought.div(2), 3)
                cost = cost.times(((x.bought.times(3.5)).add(100)).div(500))
                cost = cost.times(Decimal.max(1, (x.bought.sub(200)).div(9)))
                cost = cost.times(Decimal.max(1, (x.bought.sub(400)).div(12)))
                cost = cost.times(Decimal.max(1, (x.bought.sub(600)).div(15)))
                cost = cost.times(Decimal.max(1, Decimal.pow(1.03, (x.bought.sub(800)).div(4))))
                return cost
            },
            purchaseLimit: new Decimal(1000),
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Level: " + format(player[this.layer].buyables[this.id].bought) + "/" + format(data.purchaseLimit) +"\n\
                [Bonus: " + format((player[this.layer].buyables[this.id].amount).sub(player[this.layer].buyables[this.id].bought)) + "]\n\
                +1 in " + format(data.cost) + " EXP"
                
            },
            tooltip() {
                return "+(Level/4)^1.25 Accelerators, +0.25% Accelerators per level. +1 Accelerator Boost every 20 levels!"
            },
            effect(x) {
                let eff = {}
                eff.eff1 = new Decimal(0)
                eff.eff2 = new Decimal(0)
                eff.eff3 = new Decimal(0)
                eff.eff1 = eff.eff1.add(x.bought.div(4).pow(1.25))
                eff.eff2 = eff.eff2.add(x.bought.times(0.25))
                eff.eff3 = eff.eff3.add(x.bought.div(20).floor())
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
                addBonusBuyables("c")
            },
            buyMax() {
                let buyStart = player[this.layer].buyables[this.id].bought;
                let buyInc = 1;
                let x = {}
                x.bought = buyStart.add(buyInc)
                let cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                while (player.c.points.gte(cashToBuy)) {
                    // then multiply by 4 until it reaches just above the amount needed
                    buyInc = buyInc * 4;
                    x.bought = buyStart.add(buyInc)
                    cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                }
                let stepdown = Math.floor(buyInc / 8);
                while (stepdown !== 0) {
                    // if step down would push it below out of expense range then divide step down by 2
                    x.bought = buyStart.add(buyInc - stepdown)
                    if (layers[this.layer].buyables[this.id].cost(x).lte(player[this.layer].points)) {
                        stepdown = Math.floor(stepdown / 2);
                    } else {
                        buyInc = buyInc - Math.max(smallestInc(buyInc), stepdown);
                    }
                }
                // go down by 7 steps below the last one able to be bought and spend the cost of 25 up to the one that you started with and stop if coin goes below requirement
                let buyFrom = Decimal.max(buyStart.add(buyInc).sub(7), player[this.layer].buyables[this.id].bought.add(1));
                x.bought = buyFrom
                let thisCost = layers[this.layer].buyables[this.id].cost(x);
                while (buyFrom.lt((buyStart.add(buyInc))) && player[this.layer].points.gte(thisCost)) {
                    x.bought = buyFrom
                    player[this.layer].points = player[this.layer].points.sub(thisCost);
                    if (player[this.layer].buyables[this.id].amount.eq(player[this.layer].buyables[this.id].bought)){
                        player[this.layer].buyables[this.id].amount = buyFrom
                    }
                    player[this.layer].buyables[this.id].bought = buyFrom
                    buyFrom = buyFrom.add(smallestIncDecimal(buyFrom));
                    thisCost = layers[this.layer].buyables[this.id].cost(x);
                }
            }, // You'll have to handle this yourself if you want
            style: {'height':'222px'},
        }, 
        12: {
            title: "Duplication Rune",// Optional, displayed at the top in a larger font
            amount: new Decimal(1),
            bought: new Decimal(1), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(4)
                cost = Decimal.pow(x.bought.div(2), 3)
                cost = cost.times(((x.bought.times(3.5)).add(100)).div(500))
                cost = cost.times(Decimal.max(1, (x.bought.sub(200)).div(9)))
                cost = cost.times(Decimal.max(1, (x.bought.sub(400)).div(12)))
                cost = cost.times(Decimal.max(1, (x.bought.sub(600)).div(15)))
                cost = cost.times(Decimal.max(1, Decimal.pow(1.03, (x.bought.sub(800)).div(4))))
                return cost
            },
            purchaseLimit: new Decimal(1000),
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Level: " + format(player[this.layer].buyables[this.id].bought) + "/" + format(data.purchaseLimit) +"\n\
                [Bonus: " + format((player[this.layer].buyables[this.id].amount).sub(player[this.layer].buyables[this.id].bought)) + "]\n\
                +1 in " + format(data.cost) + " EXP"
                
            },
            tooltip() {
                return "+(Level/10) Multipliers every 10th level, +0.25% Multipliers per level. Tax growth is delayed more for each level!"
            },
            effect(x) {
                let eff = {}
                eff.eff1 = new Decimal(0)
                eff.eff2 = new Decimal(0)
                eff.eff1 = eff.eff1.add(x.bought.div(10))
                eff.eff2 = eff.eff2.add(x.bought.times(0.25))
                return eff
            },
            unlocked() { return hasAchievement("a", 83) }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                addBonusBuyables("c")
            },
            buyMax() {
                let buyStart = player[this.layer].buyables[this.id].bought;
                let buyInc = 1;
                let x = {}
                x.bought = buyStart.add(buyInc)
                let cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                while (player.c.points.gte(cashToBuy)) {
                    // then multiply by 4 until it reaches just above the amount needed
                    buyInc = buyInc * 4;
                    x.bought = buyStart.add(buyInc)
                    cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                }
                let stepdown = Math.floor(buyInc / 8);
                while (stepdown !== 0) {
                    // if step down would push it below out of expense range then divide step down by 2
                    x.bought = buyStart.add(buyInc - stepdown)
                    if (layers[this.layer].buyables[this.id].cost(x).lte(player[this.layer].points)) {
                        stepdown = Math.floor(stepdown / 2);
                    } else {
                        buyInc = buyInc - Math.max(smallestInc(buyInc), stepdown);
                    }
                }
                // go down by 7 steps below the last one able to be bought and spend the cost of 25 up to the one that you started with and stop if coin goes below requirement
                let buyFrom = Decimal.max(buyStart.add(buyInc).sub(7), player[this.layer].buyables[this.id].bought.add(1));
                x.bought = buyFrom
                let thisCost = layers[this.layer].buyables[this.id].cost(x);
                while (buyFrom.lt((buyStart.add(buyInc))) && player[this.layer].points.gte(thisCost)) {
                    x.bought = buyFrom
                    player[this.layer].points = player[this.layer].points.sub(thisCost);
                    if (player[this.layer].buyables[this.id].amount.eq(player[this.layer].buyables[this.id].bought)){
                        player[this.layer].buyables[this.id].amount = buyFrom
                    }
                    player[this.layer].buyables[this.id].bought = buyFrom
                    buyFrom = buyFrom.add(smallestIncDecimal(buyFrom));
                    thisCost = layers[this.layer].buyables[this.id].cost(x);
                }
            }, // You'll have to handle this yourself if you want
            style: {'height':'222px'},
        }, 
        13: {
            title: "Speed Rune",// Optional, displayed at the top in a larger font
            amount: new Decimal(1),
            bought: new Decimal(1), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(9)
                cost = Decimal.pow(x.bought.div(2), 3)
                cost = cost.times(((x.bought.times(3.5)).add(100)).div(500))
                cost = cost.times(Decimal.max(1, (x.bought.sub(200)).div(9)))
                cost = cost.times(Decimal.max(1, (x.bought.sub(400)).div(12)))
                cost = cost.times(Decimal.max(1, (x.bought.sub(600)).div(15)))
                cost = cost.times(Decimal.max(1, Decimal.pow(1.03, (x.bought.sub(800)).div(4))))
                return cost
            },
            purchaseLimit: new Decimal(1000),
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Level: " + format(player[this.layer].buyables[this.id].bought) + "/" + format(data.purchaseLimit) +"\n\
                [Bonus: " + format((player[this.layer].buyables[this.id].amount).sub(player[this.layer].buyables[this.id].bought)) + "]\n\
                +1 in " + format(data.cost) + " EXP"
                
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
            unlocked() { return false }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {
                let buyStart = player[this.layer].buyables[this.id].bought;
                let buyInc = 1;
                let x = {}
                x.bought = buyStart.add(buyInc)
                let cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                while (player.c.points.gte(cashToBuy)) {
                    // then multiply by 4 until it reaches just above the amount needed
                    buyInc = buyInc * 4;
                    x.bought = buyStart.add(buyInc)
                    cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                }
                let stepdown = Math.floor(buyInc / 8);
                while (stepdown !== 0) {
                    // if step down would push it below out of expense range then divide step down by 2
                    x.bought = buyStart.add(buyInc - stepdown)
                    if (layers[this.layer].buyables[this.id].cost(x).lte(player[this.layer].points)) {
                        stepdown = Math.floor(stepdown / 2);
                    } else {
                        buyInc = buyInc - Math.max(smallestInc(buyInc), stepdown);
                    }
                }
                // go down by 7 steps below the last one able to be bought and spend the cost of 25 up to the one that you started with and stop if coin goes below requirement
                let buyFrom = Decimal.max(buyStart.add(buyInc).sub(7), player[this.layer].buyables[this.id].bought.add(1));
                x.bought = buyFrom
                let thisCost = layers[this.layer].buyables[this.id].cost(x);
                while (buyFrom.lt((buyStart.add(buyInc))) && player[this.layer].points.gte(thisCost)) {
                    x.bought = buyFrom
                    player[this.layer].points = player[this.layer].points.sub(thisCost);
                    if (player[this.layer].buyables[this.id].amount.eq(player[this.layer].buyables[this.id].bought)){
                        player[this.layer].buyables[this.id].amount = buyFrom
                    }
                    player[this.layer].buyables[this.id].bought = buyFrom
                    buyFrom = buyFrom.add(smallestIncDecimal(buyFrom));
                    thisCost = layers[this.layer].buyables[this.id].cost(x);
                }
            }, // You'll have to handle this yourself if you want
            style: {'height':'222px'},
        },
        14: {
            title: "Speed Rune",// Optional, displayed at the top in a larger font
            amount: new Decimal(1),
            bought: new Decimal(1), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(16)
                cost = Decimal.pow(x.bought.div(2), 3)
                cost = cost.times(((x.bought.times(3.5)).add(100)).div(500))
                cost = cost.times(Decimal.max(1, (x.bought.sub(200)).div(9)))
                cost = cost.times(Decimal.max(1, (x.bought.sub(400)).div(12)))
                cost = cost.times(Decimal.max(1, (x.bought.sub(600)).div(15)))
                cost = cost.times(Decimal.max(1, Decimal.pow(1.03, (x.bought.sub(800)).div(4))))
                return cost
            },
            purchaseLimit: new Decimal(1000),
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Level: " + format(player[this.layer].buyables[this.id].bought) + "/" + format(data.purchaseLimit) +"\n\
                [Bonus: " + format((player[this.layer].buyables[this.id].amount).sub(player[this.layer].buyables[this.id].bought)) + "]\n\
                +1 in " + format(data.cost) + " EXP"
                
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
            unlocked() { return false }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {
                let buyStart = player[this.layer].buyables[this.id].bought;
                let buyInc = 1;
                let x = {}
                x.bought = buyStart.add(buyInc)
                let cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                while (player.c.points.gte(cashToBuy)) {
                    // then multiply by 4 until it reaches just above the amount needed
                    buyInc = buyInc * 4;
                    x.bought = buyStart.add(buyInc)
                    cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                }
                let stepdown = Math.floor(buyInc / 8);
                while (stepdown !== 0) {
                    // if step down would push it below out of expense range then divide step down by 2
                    x.bought = buyStart.add(buyInc - stepdown)
                    if (layers[this.layer].buyables[this.id].cost(x).lte(player[this.layer].points)) {
                        stepdown = Math.floor(stepdown / 2);
                    } else {
                        buyInc = buyInc - Math.max(smallestInc(buyInc), stepdown);
                    }
                }
                // go down by 7 steps below the last one able to be bought and spend the cost of 25 up to the one that you started with and stop if coin goes below requirement
                let buyFrom = Decimal.max(buyStart.add(buyInc).sub(7), player[this.layer].buyables[this.id].bought.add(1));
                x.bought = buyFrom
                let thisCost = layers[this.layer].buyables[this.id].cost(x);
                while (buyFrom.lt((buyStart.add(buyInc))) && player[this.layer].points.gte(thisCost)) {
                    x.bought = buyFrom
                    player[this.layer].points = player[this.layer].points.sub(thisCost);
                    if (player[this.layer].buyables[this.id].amount.eq(player[this.layer].buyables[this.id].bought)){
                        player[this.layer].buyables[this.id].amount = buyFrom
                    }
                    player[this.layer].buyables[this.id].bought = buyFrom
                    buyFrom = buyFrom.add(smallestIncDecimal(buyFrom));
                    thisCost = layers[this.layer].buyables[this.id].cost(x);
                }
            }, // You'll have to handle this yourself if you want
            style: {'height':'222px'},
        }, 
        15: {
            title: "Speed Rune",// Optional, displayed at the top in a larger font
            amount: new Decimal(1),
            bought: new Decimal(1), 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = new Decimal(1000)
                cost = Decimal.pow(x.bought.div(2), 3)
                cost = cost.times(((x.bought.times(3.5)).add(100)).div(500))
                cost = cost.times(Decimal.max(1, (x.bought.sub(200)).div(9)))
                cost = cost.times(Decimal.max(1, (x.bought.sub(400)).div(12)))
                cost = cost.times(Decimal.max(1, (x.bought.sub(600)).div(15)))
                cost = cost.times(Decimal.max(1, Decimal.pow(1.03, (x.bought.sub(800)).div(4))))
                return cost
            },
            purchaseLimit: new Decimal(1000),
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "Level: " + format(player[this.layer].buyables[this.id].bought) + "/" + format(data.purchaseLimit) +"\n\
                [Bonus: " + format((player[this.layer].buyables[this.id].amount).sub(player[this.layer].buyables[this.id].bought)) + "]\n\
                +1 in " + format(data.cost) + " EXP"
                
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
            unlocked() { return false }, 
            canAfford() {
                return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)},
            buy() { 
                cost = tmp[this.layer].buyables[this.id].cost
                player[this.layer].points = player[this.layer].points.sub(cost)	
                player[this.layer].buyables[this.id].amount = player[this.layer].buyables[this.id].amount.add(1)
                player[this.layer].buyables[this.id].bought = player[this.layer].buyables[this.id].bought.add(1)
                player[this.layer].spentOnBuyables = player[this.layer].spentOnBuyables.add(cost) // This is a built-in system that you can use for respeccing but it only works with a single Decimal value
            },
            buyMax() {
                let buyStart = player[this.layer].buyables[this.id].bought;
                let buyInc = 1;
                let x = {}
                x.bought = buyStart.add(buyInc)
                let cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                while (player.c.points.gte(cashToBuy)) {
                    // then multiply by 4 until it reaches just above the amount needed
                    buyInc = buyInc * 4;
                    x.bought = buyStart.add(buyInc)
                    cashToBuy = layers[this.layer].buyables[this.id].cost(x)
                }
                let stepdown = Math.floor(buyInc / 8);
                while (stepdown !== 0) {
                    // if step down would push it below out of expense range then divide step down by 2
                    x.bought = buyStart.add(buyInc - stepdown)
                    if (layers[this.layer].buyables[this.id].cost(x).lte(player[this.layer].points)) {
                        stepdown = Math.floor(stepdown / 2);
                    } else {
                        buyInc = buyInc - Math.max(smallestInc(buyInc), stepdown);
                    }
                }
                // go down by 7 steps below the last one able to be bought and spend the cost of 25 up to the one that you started with and stop if coin goes below requirement
                let buyFrom = Decimal.max(buyStart.add(buyInc).sub(7), player[this.layer].buyables[this.id].bought.add(1));
                x.bought = buyFrom
                let thisCost = layers[this.layer].buyables[this.id].cost(x);
                while (buyFrom.lt((buyStart.add(buyInc))) && player[this.layer].points.gte(thisCost)) {
                    x.bought = buyFrom
                    player[this.layer].points = player[this.layer].points.sub(thisCost);
                    if (player[this.layer].buyables[this.id].amount.eq(player[this.layer].buyables[this.id].bought)){
                        player[this.layer].buyables[this.id].amount = buyFrom
                    }
                    player[this.layer].buyables[this.id].bought = buyFrom
                    buyFrom = buyFrom.add(smallestIncDecimal(buyFrom));
                    thisCost = layers[this.layer].buyables[this.id].cost(x);
                }
            }, // You'll have to handle this yourself if you want
            style: {'height':'222px'},
        },
    },   
    row: "side", // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        //{key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.p.best.gt(0)||player[this.layer].best.gt(0)}
})

addLayer("g", {
    name: "gen", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "G", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 3, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    tooltip() {
        return "Generator Shop"
      },
    resetsNothing: true,
    color: "gray",
    upgrades: {
        11: {
            title: "I",
            description: "Alchemies will produce Coin Mints.",
            currencyLocation() {return player.p},
            currencyDisplayName: "diamonds",
            currencyInternalName: "points",
            cost: new Decimal(1e12),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(0)
                return eff;
            },
            canAfford() {
                return player.p.points.gt(layers[this.layer].upgrades[this.id].cost)
            },
            
            //effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        12: {
            title: "II",
            description: "Coin Mints will produce Printers.",
            currencyLocation() {return player.p},
            currencyDisplayName: "diamonds",
            currencyInternalName: "points",
            cost: new Decimal(1e16),
            unlocked() { return hasUpgrade("g", 11)},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(0)
                return eff;
            },
            canAfford() {
                return player.p.points.gt(layers[this.layer].upgrades[this.id].cost)
            },
            
            //effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        13: {
            title: "III",
            description: "Printers will produce Investments.",
            currencyLocation() {return player.p},
            currencyDisplayName: "diamonds",
            currencyInternalName: "points",
            cost: new Decimal(1e20),
            unlocked() { return  hasUpgrade("g", 11)},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(0)
                return eff;
            },
            canAfford() {
                return player.p.points.gt(layers[this.layer].upgrades[this.id].cost)
            },
            
            //effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        14: {
            title: "IV",
            description: "Investments will produce Workers.",
            currencyLocation() {return player.p},
            currencyDisplayName: "diamonds",
            currencyInternalName: "points",
            cost: new Decimal(1e30),
            unlocked() { return  hasUpgrade("g", 11)},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(0)
                return eff;
            },
            canAfford() {
                return player.p.points.gt(layers[this.layer].upgrades[this.id].cost)
            },
            
            //effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        15: {
            title: "V",
            description: "Purchased Workers will produce Alchemies.",
            currencyLocation() {return player.p},
            currencyDisplayName: "diamonds",
            currencyInternalName: "points",
            cost: new Decimal(1e50),
            unlocked() { return  hasUpgrade("g", 11)},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(0)
                return eff;
            },
            canAfford() {
                return player.p.points.gt(layers[this.layer].upgrades[this.id].cost)
            },
            
            //effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
    },
    tabFormat: ["upgrades"],
    row: "side",
    layerShown() {
        return player.a.pTimes > 0
    }
})

addLayer("au", {
    name: "auto", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Au", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 4, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    tooltip() {
        return "Automation Shop"
      },
    resetsNothing: true,
    color: "crimson",
    upgrades: {
        11: {
            title: "I",
            description: "Automatically buy Workers if affordable.",
            currencyLocation() {return player.p},
            currencyDisplayName: "diamonds",
            currencyInternalName: "points",
            cost: new Decimal(1000),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(0)
                return eff;
            },
            canAfford() {
                return player.p.points.gt(layers[this.layer].upgrades[this.id].cost)
            },
            
            //effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        12: {
            title: "II",
            description: "Automatically buy Investments if affordable.",
            currencyLocation() {return player.p},
            currencyDisplayName: "diamonds",
            currencyInternalName: "points",
            cost: new Decimal(1e6),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(0)
                return eff;
            },
            canAfford() {
                return player.p.points.gt(layers[this.layer].upgrades[this.id].cost)
            },
            
            //effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        13: {
            title: "III",
            description: "Automatically buy Printers if affordable.",
            currencyLocation() {return player.p},
            currencyDisplayName: "diamonds",
            currencyInternalName: "points",
            cost: new Decimal(1e9),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(0)
                return eff;
            },
            canAfford() {
                return player.p.points.gt(layers[this.layer].upgrades[this.id].cost)
            },
            
            //effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        14: {
            title: "IV",
            description: "Automatically buy Coin Mints if affordable.",
            currencyLocation() {return player.p},
            currencyDisplayName: "diamonds",
            currencyInternalName: "points",
            cost: new Decimal(1e12),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(0)
                return eff;
            },
            canAfford() {
                return player.p.points.gt(layers[this.layer].upgrades[this.id].cost)
            },
            
            //effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        15: {
            title: "V",
            description: "Automatically buy Alchemies if affordable.",
            currencyLocation() {return player.p},
            currencyDisplayName: "diamonds",
            currencyInternalName: "points",
            cost: new Decimal(1e15),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(0)
                return eff;
            },
            canAfford() {
                return player.p.points.gt(layers[this.layer].upgrades[this.id].cost)
            },
            
            //effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        21: {
            title: "VI",
            description: "Automatically buy Accelerators if affordable.",
            currencyLocation() {return player.p},
            currencyDisplayName: "diamonds",
            currencyInternalName: "points",
            cost: new Decimal(1e20),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(0)
                return eff;
            },
            canAfford() {
                return player.p.points.gt(layers[this.layer].upgrades[this.id].cost)
            },
            
            //effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
        22: {
            title: "VII",
            description: "Automatically buy Multipliers if affordable.",
            currencyLocation() {return player.p},
            currencyDisplayName: "diamonds",
            currencyInternalName: "points",
            cost: new Decimal(1e30),
            unlocked() { return true},
            effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                let eff = new Decimal(0)
                return eff;
            },
            canAfford() {
                return player.p.points.gt(layers[this.layer].upgrades[this.id].cost)
            },
            
            //effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
    },
    tabFormat: ["upgrades"],
    row: "side",
    layerShown() {
        return player.a.pTimes > 0
    }
})


