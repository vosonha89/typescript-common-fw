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
            if ((response as any).code != 0) {
                return true;
            }
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
        for (const element of allKeys) {
            if (typeof newObject[element] != 'object') {
                newObject[element] = deepObject[element];
            }
            else {
                if (newObject[element] == undefined) {
                    newObject[element] = deepObject[element];
                }
            }
        }
        return newObject;
    }

    /**
    * Get URL Param
    * @param name 
    * @returns 
    */
    public static getURLParam(name: string): string | null {
        const url = new URL(window.location.href);
        return url.searchParams.get(name);
    }

    /**
     * Set URL Param
     * @param name 
     * @param value 
     * @param isSilent 
     */
    public static setURLParam(name: string, value: string, isSilent = true): void {
        const url = new URL(window.location.href);
        url.searchParams.set(name, value);
        if (isSilent) {
            history.pushState({}, '', url.toString());
        }
        else {
            window.location.href = url.toString();
        }
    }

    /**
     * Get cookie
     * @param name Cookie name
     * @returns 
     */
    public static getCookie(name: string): string {
        const cookieName = name + '=';
        const cookies = document.cookie.split(';');
        for (const element of cookies) {
            let cookie = element;
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(cookieName) == 0) {
                return cookie.substring(cookieName.length, cookie.length);
            }
        }
        return '';
    }
}