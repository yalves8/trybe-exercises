class Cliente {
    constructor(public name: string) { }
}

class Item {
    constructor(public nameReq: string[], public price: number) { }
}

class Request extends Cliente {
    private _log:any;
    constructor(name: string, public items: string[], public price: number, public payment: string, public percentual?: number) {
        super(name);
        this.percentual = percentual;
        this._log = new Item(items, price);
    }

    changeRequest(food: string[], price: number) {
        if(food != null ){ this._log.nameReq.push(food);}
        if(price != null) {this._log.price = this._log.price + price;}
    }
    request():string {
        if(this.percentual != undefined) return `${this.name}, ${this._log.nameReq}, ${this._log.price}, ${this.percentual}`;
        return `${this.name}, [${this._log.nameReq}], ${this._log.price}`;
        
    }
}

const d1 = new Request('Yasmin', ['Hamburguer', 'Refri'], 5, 'Cartao');
d1.changeRequest(['Cachorro'], 20);
console.log(d1.request());




