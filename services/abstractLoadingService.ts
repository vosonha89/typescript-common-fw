import 'reflect-metadata';
import { singleton } from 'tsyringe';

@singleton()
export abstract class AbstractLoadingService {
    /**
     * For showing loading
     */
    public abstract show(): boolean;

    /**
     * For hidden loading
     */
    public abstract hide(): boolean;
}