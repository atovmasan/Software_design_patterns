class Veshile {
    price: number
    model: any

    constructor() {
        this.price = 1000;
        this.model = 'car';
    }

    getPrice() {
        return this.price;
    }

    getDescription() {
        return this.model;
    }
}
class Tesla extends Veshile {
    constructor() {
        super();
        this.price = 25000
        this.model = 'Tesla'
    }
}
class Autopilot {
    car: string
    price: number
    model: any

    constructor(car: string) {
        this.car = car;
    }

    getPrice() {
        return this.price + 5000;
    }

    getDescription() {
        return `&{this.car.getDescription()} with autopilot`
    }
}

let tesla = new Tesla
tesla = new Autopilot('tesla')