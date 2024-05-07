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
 * Undefined Type
 */
export type UndefinedType = undefined;