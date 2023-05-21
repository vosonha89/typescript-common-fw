export class UIHelper {
    /**
     * Create element from string for reactjs
     * @param text 
     * @returns 
     */
    public static createElementFromString(text: string): { __html: string } {
        return { __html: text };
    }
}