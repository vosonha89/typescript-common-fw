/**
 * Common function
 */
export class CommonFunction {
    /**
     * Format currency
     * @param value 
     * @param locales 
     * @param currency 
     * @returns 
     */
    public static formatCurrency(value: number, locales: string | string[], currency: string): string {
        return new Intl.NumberFormat(locales, { style: 'currency', currency: currency }).format(value);
    }

    /**
     * Genereate UUID
     * @returns 
     */
    public static createUUID(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    /**
     * Random number with min - max
     * @param min 
     * @param max 
     * @returns 
     */
    public static randomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}