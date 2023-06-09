import { ObjectHelper } from '../functions/objectHelper';

/**
 * Abstract state for implement each component
 * Tracking all state in one state. Etc: changed, rendered...
 */
export abstract class ComponentState {
    public isReady = false;

    /**
     * Deep copy current state
     * @returns 
     */
    public copy<TObject>(): TObject {
        return ObjectHelper.deepCopy(this) as unknown as TObject;
    }

    /**
     * App on init
     */
    public abstract init() : void;
}