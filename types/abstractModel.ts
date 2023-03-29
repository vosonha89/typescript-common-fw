/**
 * Abstract model for implement any model in product
 */
export abstract class AbstractModel<T extends ErrorModel> {
    [key: string]: number | string | unknown;
    public errors: T[] = [];

    /**
     * To validate model valid
     */
    public abstract isValid(): boolean;

    /**
     * To check property has error or not
     * @param prop 
     */
    public checkError(prop: string): boolean {
        const me = this;
        if (me.errors.findIndex(a => a.property === prop) != -1) {
            return true;
        }
        return false;
    }

    /**
     * To get error from property
     * @param prop 
     */
    public abstract getError(prop: string): string;
}

/**
 * Abstract error model
 */
export interface ErrorModel {
    property: string;
    error: string;
}