export class UIHelper {
    /**
     * Create element from string
     * @param text 
     * @returns 
     */
    public static createElementFromString(text: string): { __html: string } {
        return { __html: text };
    }
}