/**
 * ObjectHelper 
 */
export class ObjectHelper {
    /**
     * Get value of any propertie in object. D: should be return type
     * @param object 
     * @param propertyName 
     * @returns 
     */
    public static getValue<D>(object: { [s: string]: D }, propertyName: string): D {
        const arrayKeys = Object.getOwnPropertyNames(object);
        const indexOfProperty = arrayKeys.indexOf(propertyName);
        const value = Object.values<D>(object)[indexOfProperty];
        return value as D;
    }

    /**
     * Check api has error or not
     * @param response 
     * @returns 
     */
    public static hasApiError(response: unknown): boolean {
        if (Object.prototype.hasOwnProperty.call(response, 'code')) {
            return true;
        }
        return false;
    }

       /**
     * Deep copy any object
     * @param value 
     * @returns 
     */
       public static deepCopy<T extends object>(value: T): T {
        const deepObject = structuredClone(value) as any;
        const newObject = Object.create(value);
        const allKeys = Object.keys(deepObject);
        for(let i = 0; i< allKeys.length; i++)
        {
            if (typeof newObject[allKeys[i]] != 'object')
            {
                newObject[allKeys[i]] = deepObject[allKeys[i]];
            }
            else{
                if (newObject[allKeys[i]] == undefined)
                {
                    newObject[allKeys[i]] = deepObject[allKeys[i]];
                }
            }
        }
        return newObject;
    }
}