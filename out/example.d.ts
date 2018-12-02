export declare class Mister {
    mr(name: string): string;
}
export declare type Constructor<T> = new (...args: any[]) => T;
export declare class Senior extends Mister {
}
export declare class Master extends Senior {
    mr(name: string): string;
}
