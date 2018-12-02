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
        // constructor(breathingMethod:string)
        constructor(...args) {
            super(args);
            this.breathingMethod = args[0];
        }
        breathe(o) {
            console.log("breathing by ", this.breathingMethod);
            super.breathe(o);
        }
        move(coors) {
            console.log('mooving', coors);
        }
    };
}
exports.emergeAnimal = emergeAnimal;
exports.Animal = emergeAnimal(Creature);
var fish = new exports.Animal();
fish.breathingMethod = "gills";
fish.breathe({ volume: 2.1 });
fish.move({ x: 100, y: 200 });
function emergePlant(Base) {
    return class Plant extends Base {
        constructor(...args) {
            super(args);
            this.breathingMethod = "unknown yet";
        }
        photosynthesis() {
            console.log('doing photosynthesis');
        }
    };
}
exports.emergePlant = emergePlant;
exports.Plant = emergePlant(Creature);
exports.potus = new exports.Plant();
exports.potus.breathe({ volume: 0.1 });
exports.potus.photosynthesis();
exports.WiredAnimalPlant = emergeAnimal(emergePlant(Creature));
var groot = new exports.WiredAnimalPlant();
groot.breathe({ volume: 0.9 });
groot.photosynthesis();
groot.move({ x: 1, y: 1 });
function emergeDog(Animal) {
    return class Dog extends Animal {
        constructor(...args) {
            super(args);
            this.breathingMethod = "lungs";
        }
        bark() {
            console.log('woof');
        }
    };
}
exports.Dog = emergeDog(emergeAnimal(Creature));
var boss = new exports.Dog();
boss.breathe({ volume: 4 });
boss.bark();
boss.move({ x: 10, y: 10 });
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
