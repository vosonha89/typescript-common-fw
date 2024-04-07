import 'reflect-metadata';
import { BehaviorSubject } from 'rxjs';
import { singleton } from 'tsyringe';
import { ICommonSharingData } from '../types/commonInterface';

interface RealTimeSharingData<T> extends ICommonSharingData {
    listener: BehaviorSubject<T>;
}

@singleton()
export class RealTimeSharingDataService {
    private dataSharing: ICommonSharingData[] = [];

    /**
     * Save object for sharing storage
     * @param key
     * @param value
     */
    public saveObject<T>(key: string, value: T): boolean {
        const me = this;
        try {
            let existedData = me.dataSharing.find(a => a.key == key);
            if (!existedData) {
                existedData = {
                    key: key,
                    listener: new BehaviorSubject<T>(value)
                } as RealTimeSharingData<T> as ICommonSharingData;
                me.dataSharing.push(existedData);
            }
            else {
                (existedData as RealTimeSharingData<T>).listener.next(value);
            }
            return true;
        } catch (ex) {
            console.log(ex);
            return false;
        }
    }

    /**
     * Get object from sharing storage
     * @param key
     */
    public getObject<T>(key: string): RealTimeSharingData<T> | undefined {
        const me = this;
        try {
            const data = me.dataSharing.find(a => a.key == key);
            if (data) {
                return data as RealTimeSharingData<T>;
            }
            else {
                return undefined;
            }
        } catch (ex) {
            console.log(ex);
            return undefined;
        }
    }

    /**
    * Delete object from sharing storage
    * @param key
    */
    public deleteObject(key: string): boolean {
        const me = this;

        try {
            const index = me.dataSharing.findIndex(a => a.key == key);
            if (index > -1) {
                me.dataSharing.splice(index, 1);
                return true;
            }
            else {
                return false;
            }
        } catch (ex) {
            console.log(ex);
            return false;
        }
    }
}