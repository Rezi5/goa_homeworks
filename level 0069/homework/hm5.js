const temperature = {
    celsius: 25,

    toFahrenheit() {
    this.celsius = this.celsius * 9/5 + 32;
    return this;
    },

    toKelvin() {
    this.celsius = this.celsius + 273.15;
    return this;
    },

    print() {
    console.log(this.celsius);
    return this;
    }
};


temperature.toFahrenheit().print().toKelvin().print();