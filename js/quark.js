//by QwQe308
addLayer("qk", {
    name: "Quarks", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "QK", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        time: new Decimal(0),
    }},
    tooltip() {
      return "Quark shop"
    },
    color: "blue",
    nodeStyle() {return {
        "background": "radial-gradient(blue, auqa)" ,
    }},
    //requires: new Decimal(3600), // Can be a function that takes requirement increases into account
    //baseResource: "seconds",
    //baseAmount() {return player.qk.time},
    resource: "Quarks", // Name of prestige currency
    
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    row: "side", // Row the layer is in on the tree (0 is the first row)
    layerShown() { return true },

    getbaseqkgain(){
        return player.qk.time.div(layers.qk.delay()).floor()
    },
    gettotalqk(){
        return layers.qk.getbaseqkgain().mul(layers.qk.gainMult()).min(layers.qk.cap())
    },

    //these is useful
    //qk gain delay
    delay(){return new Decimal(3600)},
    //qk gain mult
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
       return mult.floor()
    },
    //cap quarks when export
    cap(){
        return new Decimal(10)
    },


    tabFormat: {
        QuarkShop:{
        content: ["main-display", 
        ["display-text", function() {return `If you export now,you'll get ${format(layers.qk.gettotalqk())} quarks.(next ${format(layers.qk.gainMult())} in ${format(layers.qk.delay().sub(player.qk.time.sub(player.qk.time.div(layers.qk.delay()).floor().mul(layers.qk.delay()))))} seconds,capped at ${format(layers.qk.cap())})`}],
        ]
    }}


})

function calcQK(){
    	//calc quarks gain
	player.qk.points=player.qk.points.add(layers.qk.gettotalqk())
	player.qk.time=player.qk.time.sub(layers.qk.delay().mul(layers.qk.getbaseqkgain()))
}