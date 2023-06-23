import 'reflect-metadata';
import { singleton } from 'tsyringe';
import { ObjectHelper } from '../functions/objectHelper';
import { AbstractLogggingService } from './abstractLogggingService';

export interface ServerError {
    code: string;
    title: string;
    message: string;
    type: string;
}

@singleton()
export class LogggingService extends AbstractLogggingService {
    /**
     * Log error
     * @param ex
     */
    public logError(ex: unknown): void {
        console.log(ex);
    }

    /** Get error*/
    public getError(language: any, code: string, defaultValue: string): string {
        try {
            const value = ObjectHelper.getValue(language, code) as string;
            if (value) {
                return value;
            }
            return defaultValue;
        }
        catch (ex) {
            return defaultValue;
        }
    }
}