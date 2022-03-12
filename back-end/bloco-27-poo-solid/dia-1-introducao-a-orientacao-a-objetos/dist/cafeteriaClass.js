"use strict";
class Cliente {
    constructor(name) {
        this.name = name;
    }
}
class Item {
    constructor(nameReq, price) {
        this.nameReq = nameReq;
        this.price = price;
    }
}
class Request extends Cliente {
    constructor(name, items, price, payment, percentual) {
        super(name);
        this.items = items;
        this.price = price;
        this.payment = payment;
        this.percentual = percentual;
        this.percentual = percentual;
        this._log = new Item(items, price);
    }
    changeRequest(food, price) {
        if (food != null) {
            this._log.nameReq.push(food);
        }
        if (price != null) {
            this._log.price = this._log.price + price;
        }
    }
    request() {
        if (this.percentual != undefined)
            return `${this.name}, ${this._log.nameReq}, ${this._log.price}, ${this.percentual}`;
        return `${this.name}, [${this._log.nameReq}], ${this._log.price}`;
    }
}
const d1 = new Request('Yasmin', ['Hamburguer', 'Refri'], 5, 'Cartao');
d1.changeRequest(['Cachorro'], 20);
console.log(d1.request());
