import { ObjectHelper } from '../functions/objectHelper';
import { AbstractModel, ErrorModel } from "./abstractModel";

/**
 * Abstract state for implement each component
 * Tracking all state in one state. Etc: changed, rendered...
 */
export abstract class ComponentState<TModel extends AbstractModel<ErrorModel>>{
    public isReady = false;
    public model!: TModel;

    /**
     * Deep copy current state
     * @returns 
     */
    public copy<TObject>(): TObject {
        return ObjectHelper.deepCopy(this) as unknown as TObject;
    }
}