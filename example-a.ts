
export type Oxygen = { volume:number }

export class Creature {
    breathe(o: Oxygen):void {
        console.log('breathing', o.volume)
    };
}

export type Constructor<T> = new (...args: any[]) => T;

export type Coors = { x: number, y: number };

export function emergeAnimal<T extends Constructor<Creature>>(Base: T) {
    return class Animal extends Base{
        public breathingMethod: string
        // constructor(breathingMethod:string)
        constructor(...args:any[]){ 
            super(args);
            this.breathingMethod = args[0];
        }
        breathe(o: Oxygen): void {
            console.log("breathing by ",this.breathingMethod)
            super.breathe(o);
        }
        move(coors: Coors): void{
            console.log('mooving', coors);
        }
    }
}

export var Animal = emergeAnimal(Creature);

var fish = new Animal()
fish.breathingMethod = "gills";

fish.breathe({ volume: 2.1 });
fish.move({x:100,y:200});

export function emergePlant<T extends Constructor<Creature>>(Base: T) {
    return class Plant extends Base{
        public breathingMethod:string 
        constructor(...args:any[]){ 
            super(args);
            this.breathingMethod="unknown yet";
        }
        photosynthesis(): void{
            console.log('doing photosynthesis');
        }
    }
}

export var Plant = emergePlant(Creature);

export var potus = new Plant();

potus.breathe({ volume: 0.1 })
potus.photosynthesis();

export var WiredAnimalPlant = emergeAnimal(emergePlant(Creature));

var groot = new WiredAnimalPlant();
groot.breathe({ volume: 0.9 });
groot.photosynthesis()
groot.move({ x: 1, y: 1 })

function emergeDog<T extends Constructor<InstanceType<typeof Animal>>>(Animal: T) {
    return class Dog extends Animal{
        constructor(...args:any[]){ 
            super(args);
            this.breathingMethod = "lungs";
        }
        bark() {
            console.log('woof')
        }
    }
}

export var Dog = emergeDog(emergeAnimal(Creature));

var boss = new Dog();
boss.breathe({volume:4});
boss.bark();
boss.move({x:10, y:10})


export function emergePoodle<T extends Constructor<InstanceType<typeof Dog>>>(Dog: T) {
    return class Poodle extends Dog{
        constructor(...args:any[]){ 
            super(args);
        }
        breathe(o: Oxygen) {
            super.breathe(o);
        }
    }
}

export var Poodle = emergePoodle(emergeDog(emergeAnimal(Creature)));

var poodle = new Poodle();
poodle.breathe({ volume: 4 });
