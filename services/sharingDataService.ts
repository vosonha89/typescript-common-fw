import 'reflect-metadata';
import { singleton } from 'tsyringe';
import { ICommonSharingData } from '../types/commonInterface';

interface SharingData extends ICommonSharingData {
    value: string;
}

@singleton()
export class SharingDataService {
    private dataSharing: SharingData[] = [];

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
                    value: JSON.stringify(value)
                } as SharingData;
                me.dataSharing.push(existedData);
            }
            else {
                existedData.value = JSON.stringify(value);
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
    public getObject<T>(key: string): T | undefined {
        const me = this;
        try {
            const data = me.dataSharing.find(a => a.key == key);
            if (data) {
                return JSON.parse(data.value);
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