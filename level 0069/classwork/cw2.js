let car = {
    brand: "BMW",
    speed: 120,
    generate() {
    console.log(this.brand, "is driving at", this.speed, "km/h");
},
    stop() {
    console.log(this.brand, "stopped");
}
};

car.generate(); 
car.stop(); 