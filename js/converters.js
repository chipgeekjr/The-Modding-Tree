addConverter("null-earth", {
    enabled: false,
    convertFrom: ["points", "Null Energy"],
    convertTo: ["e", "Earth Essence"],
    drainRatio: -1.1, //Percentage of income drained, 0.9 is 10%, 0.1 is 90%, -1.1 is 110% ect.
    outputRatio: 10.0, //Output rate, income:output (ex. income 10/s, ratio 10, output 1/s). Smaller is better.
    percent: -10
})

addConverter("earth-water", {
    enabled: false,
    convertFrom: ["e", "Earth Essence"],
    convertTo: ["w", "Water Essence"],
    drainRatio: -1.1, //Percentage of income drained, 0.9 is 10%, 0.1 is 90%, -1.1 is 110% ect.
    outputRatio: 10.0, //Output rate, income:output (ex. income 10/s, ratio 10, output 1/s). Smaller is better.
    percent: -10
})