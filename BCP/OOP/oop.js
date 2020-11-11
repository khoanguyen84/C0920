let ip6 = {
    name: "IP6",
    price: "5.000.000 đ",
    quanlity: 10,
    colors: ["gray", "gold", "silve"],
    manufactory: {
        country: "Viet nam",
        provice: "TT Hue"
    },
    info: function() {
        return `name: ${this.name}, price: ${this.price}, quanlity: ${this.quanlity}`
    }
};


let ip7 = {};
ip7.name = "IP7";
ip7.price = "7.000.000 đ";
ip7.quanlity = "5";
ip7.colors = ["gray", "gold", "silve"];
ip7.manufactory = {
    country: "Viet nam",
    provice: "TT Hue"
};
ip7.info = function() {
    return `name: ${this.name}, price: ${this.price}, quanlity: ${this.quanlity}`
}

let product = [ip6, ip7];
document.write(ip7.colors[1]);
document.write(ip7["colors"][1]);

function Fruit() {
    this.color;
    this.smell;
    this.taste;
    this.info = function() {

    }
    this.howToEat = function() {

    }
}

let apple = new Fruit();
apple.color = "Red";
apple.smell = "good";
apple.taste = "sweet";


function Machine(name, feature, type) {
    this.name = name;
    this.feature = feature;
    this.type = type;
    this.setName = function(name) {
        this.name = name;
    }
    this.getName = function() {
        return this.name.toUpperCase();
    }
}

let azus = new Machine("Azus", "Coding", "Computer");