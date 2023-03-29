import 'reflect-metadata';
import { container } from 'tsyringe';
import { StorageKey } from '../constants/storageKey';
import { StorageService } from './storageService';
import { LanguageCode } from '../constants/languageCode';

/**
 * Abstract language service to implement
 */
export abstract class AbstractLanguageService<T> {
    public readonly storeService = container.resolve(StorageService);
    public text!: T;

    constructor() {
        let currentLanguage = this.storeService.getObject<string>(StorageKey.language);
        if (!currentLanguage) {
            currentLanguage = LanguageCode.EN;
        }
        this.getLanguageText(currentLanguage);
    }

    /** Set language to store */
    public setLanguage(value: string) {
        const me = this;
        me.storeService.saveObject<string>(StorageKey.language, value);
        me.getLanguageText(value);
    }

    /**
     * Get language text from json
     * @param value 
     */
    public abstract getLanguageText(value: string): void;
}