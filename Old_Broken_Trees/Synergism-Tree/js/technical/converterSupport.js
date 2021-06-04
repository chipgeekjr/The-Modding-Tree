var converters = {}

function addConverter(name, data) {
    converters[name] = data
}

function updateConverters(diff) {
    for (converter in converters) {
        updateConverterUpgrades(converter)
        if(player.converters[converter]) {
            converters[converter] = player.converters[converter]
        } else {
            player.converters[converter] = converters[converter]
        }
        if (converters[converter].enabled == true) {
            if(converters[converter].convertFrom[0] == "points") {
                player[converters[converter].convertTo[0]].points = player[converters[converter].convertTo[0]].points.add(getVirtualPointGen().div(converters[converter].outputRatio).times(diff))
                if(player.points.lte(0)) {
                    converters[converter].enabled = false
                }
            }
            else {
                player[converters[converter].convertTo[0]].points = (player[converters[converter].convertTo[0]].points.add(tmp[converters[converter].convertFrom[0]].virtualPointGain.div(converters[converter].outputRatio).times(diff)))
                player[converters[converter].convertFrom[0]].points = (player[converters[converter].convertFrom[0]].points.add(tmp[converters[converter].convertFrom[0]].virtualPointGain.times(converters[converter].drainRatio).times(diff)))


                    if(player[converters[converter].convertFrom[0]].points.lte(0)) {
                        converters[converter].enabled = false
                    }
            } 
        }
    }

}

function updateConverterUpgrades(converter) {
    switch(converter) {
        case "null-earth":
            if(hasUpgrade("e", 12)) {
                converters[converter].drainRatio = 0.1
                converters[converter].percent = 10
            }
    }
}

function toggleConverter(converter) {
    converters[converter].enabled = !converters[converter].enabled
}
