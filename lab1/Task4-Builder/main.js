class Pizza{
    constructor(){
            this.type = null;
    }
    typePizza (type){
        this.type = type;
    }
    getDetails (){
        return this.type;
    }
}

class PizzaMediator{
    step1 (){
        this.Pizza = new Pizza();
    }
    step2 (type){
        this.Pizza.typePizza(type);
    }
    get (){
        return this.Pizza;
    }
}

class PizzaBuilder{
    constructor(){
        this.mediator = new PizzaMediator();
    }
    construct (builder,type){
        builder.step1();
        builder.step2(type);
        return builder.get();
    }
}

let mediator = new PizzaMediator();
let builder = new PizzaBuilder();
let Pizaa = builder.construct(mediator,"margarita");
console.log(Pizaa.getDetails());