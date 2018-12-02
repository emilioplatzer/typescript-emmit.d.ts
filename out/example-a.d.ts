export declare type Oxygen = {
    volume: number;
};
export declare class Creature {
    breathe(o: Oxygen): void;
}
export declare type Constructor<T> = new (...args: any[]) => T;
export declare type Coors = {
    x: number;
    y: number;
};
export declare function emergeAnimal<T extends Constructor<Creature>>(Base: T): {
    new (...args: any[]): {
        breathingMethod: string;
        breathe(o: Oxygen): void;
        move(coors: Coors): void;
    };
} & T;
export declare var Animal: {
    new (...args: any[]): {
        breathingMethod: string;
        breathe(o: Oxygen): void;
        move(coors: Coors): void;
    };
} & typeof Creature;
export declare function emergePlant<T extends Constructor<Creature>>(Base: T): {
    new (...args: any[]): {
        breathingMethod: string;
        photosynthesis(): void;
        breathe(o: Oxygen): void;
    };
} & T;
export declare var Plant: {
    new (...args: any[]): {
        breathingMethod: string;
        photosynthesis(): void;
        breathe(o: Oxygen): void;
    };
} & typeof Creature;
export declare var potus: {
    breathingMethod: string;
    photosynthesis(): void;
    breathe(o: Oxygen): void;
} & Creature;
export declare var WiredAnimalPlant: {
    new (...args: any[]): {
        breathingMethod: string;
        breathe(o: Oxygen): void;
        move(coors: Coors): void;
    };
} & {
    new (...args: any[]): {
        breathingMethod: string;
        photosynthesis(): void;
        breathe(o: Oxygen): void;
    };
} & typeof Creature;
export declare var Dog: {
    new (...args: any[]): {
        bark(): void;
        breathingMethod: string;
        breathe: ((o: Oxygen) => void) & ((o: Oxygen) => void);
        move(coors: Coors): void;
    };
} & {
    new (...args: any[]): {
        breathingMethod: string;
        breathe(o: Oxygen): void;
        move(coors: Coors): void;
    };
} & typeof Creature;
export declare function emergePoodle<T extends Constructor<InstanceType<typeof Dog>>>(Dog: T): {
    new (...args: any[]): {
        breathe(o: Oxygen): void;
        bark(): void;
        breathingMethod: string;
        move(coors: Coors): void;
    };
} & T;
export declare var Poodle: {
    new (...args: any[]): {
        breathe(o: Oxygen): void;
        bark(): void;
        breathingMethod: string;
        move(coors: Coors): void;
    };
} & {
    new (...args: any[]): {
        bark(): void;
        breathingMethod: string;
        breathe: ((o: Oxygen) => void) & ((o: Oxygen) => void);
        move(coors: Coors): void;
    };
} & {
    new (...args: any[]): {
        breathingMethod: string;
        breathe(o: Oxygen): void;
        move(coors: Coors): void;
    };
} & typeof Creature;
