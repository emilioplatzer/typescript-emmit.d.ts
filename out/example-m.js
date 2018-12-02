"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Creature {
    breathe(o) {
        console.log('breathing', o.volume);
    }
    ;
}
exports.Creature = Creature;
function emergeAnimal(Base) {
    return class Animal extends Base {
        constructor(...args) {
            super(args);
        }
        breathe(o) {
            console.log("breathing like animal");
            super.breathe(o);
        }
    };
}
exports.emergeAnimal = emergeAnimal;
exports.Animal = emergeAnimal(Creature);
var fish = new exports.Animal();
fish.breathe({ volume: 2.1 });
function emergeDog(Animal) {
    return class Dog extends Animal {
        constructor(...args) {
            super(args);
        }
    };
}
exports.Dog = emergeDog(emergeAnimal(Creature));
var boss = new exports.Dog();
boss.breathe({ volume: 4 });
function emergePoodle(Dog) {
    return class Poodle extends Dog {
        constructor(...args) {
            super(args);
        }
        breathe(o) {
            super.breathe(o);
        }
    };
}
exports.emergePoodle = emergePoodle;
exports.Poodle = emergePoodle(emergeDog(emergeAnimal(Creature)));
var poodle = new exports.Poodle();
poodle.breathe({ volume: 4 });
