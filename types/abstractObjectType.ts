/**
 * Abstract object type
 */
export abstract class AbstractObjectType<T> {
    [key: string]: unknown;

    public map(object: T): void{
        Object.assign(this, object);
    }
}