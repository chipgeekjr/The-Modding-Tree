addConverter("null-earth", {
    enabled: false,
    convertFrom: ["points", "Null Energy"],
    convertTo: ["e", "Earth Essence"],
    drainRatio: -1.1, //Percentage of income drained, 0.9 is 10%, 0.1 is 90%, -1.1 is 110% ect.
    outputRatio: 200.0 //Output rate, 200 is roughly a 10:1 ratio. Smaller is better. 
})