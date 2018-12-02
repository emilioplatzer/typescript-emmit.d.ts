export declare type Oxygen = {
    volume: number;
};
export declare class Creature {
    breathe(o: Oxygen): void;
}
export declare type Constructor<T> = new (...args: any[]) => T;
export declare function emergeAnimal<T extends Constructor<Creature>>(Base: T): {
    new (...args: any[]): {
        breathe(o: Oxygen): void;
    };
} & T;
export declare var Animal: {
    new (...args: any[]): {
        breathe(o: Oxygen): void;
    };
} & typeof Creature;
export declare var Dog: {
    new (...args: any[]): {
        breathe: ((o: Oxygen) => void) & ((o: Oxygen) => void);
    };
} & {
    new (...args: any[]): {
        breathe(o: Oxygen): void;
    };
} & typeof Creature;
export declare function emergePoodle<T extends Constructor<InstanceType<typeof Dog>>>(Dog: T): {
    new (...args: any[]): {
        breathe(o: Oxygen): void;
    };
} & T;
export declare var Poodle: {
    new (...args: any[]): {
        breathe(o: Oxygen): void;
    };
} & {
    new (...args: any[]): {
        breathe: ((o: Oxygen) => void) & ((o: Oxygen) => void);
    };
} & {
    new (...args: any[]): {
        breathe(o: Oxygen): void;
    };
} & typeof Creature;
