var converters = {}

function addConverter(name, data) {
    converters[name] = data
}

function updateConverters(gain) {

    for (converter in converters) {
        if (converters[converter].enabled == true) {
            if(converters[converter].convertFrom[0] == "points") {
                layers[convertTo[0]].points.add(getPointGen().div(outputRatio))
                gain = gain.times(drainRatio)
                return gain

            }

            layers[convertTo[0]].passiveGeneration() = (layers[convertFrom[0]].passiveGeneration() * outputRatio)
            layers[convertFrom[0]].passiveGeneration() = (layers[convertFrom[0]].passiveGeneration() * drainRatio)
        }
    }

}