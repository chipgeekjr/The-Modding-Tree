var converters = {}

function addConverter(name, data) {
    converters[name] = data
}

function updateConverters(diff) {
    for (converter in converters) {
        updateConverterUpgrades(converter)
        if(player.converters[converter]) {
            converters[converter] = player.converters[converter]
        }
        if (converters[converter].enabled == true) {
            if(converters[converter].convertFrom[0] == "points") {
                player[converters[converter].convertTo[0]].points = player[converters[converter].convertTo[0]].points.add(getVirtualPointGen().div(converters[converter].outputRatio))
                if(player.points.lte(0)) {
                    converters[converter].enabled = false
                }
            }
            else {
                tmp[converters[converter].convertTo[0]].passiveGeneration += (tmp[converters[converter].convertFrom[0]].passiveGeneration * converters[converter].outputRatio)
                tmp[converters[converter].convertFrom[0]].passiveGeneration += (tmp[converters[converter].convertFrom[0]].passiveGeneration * converters[converter].drainRatio)

                    if(tmp[converters[converter].convertFrom[0]].points.lte(0)) {
                        converters[converter].enabled = false
                    }
            } 
        }
    }

}

function updateConverterUpgrades(converter) {
    switch(converter) {
        case "null-earth":
            if(hasUpgrade("e", 12)) converters[converter].drainRatio = 0.1
    }
}

function toggleConverter(converter) {
    player.converters[converter].enabled = !player.converters[converter].enabled
}