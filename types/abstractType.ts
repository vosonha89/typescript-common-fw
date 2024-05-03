/**
 * Abstract type for data
 */
export abstract class AbstractType {
    public abstract mapResponse<TResponse>(response: TResponse): void;
}

/**
 * Any Type
 */
export type AnyType = any;

/**
 * Unknow Type with index
 */
export class DataObjectIndex {
    [key: string]: unknown | string | AnyType;

    public getValueByName(name: string): string {
        return this[name] as string;
    }

    public getValueByIndex(index: number): string {
        return this[index] as string;
    }
}