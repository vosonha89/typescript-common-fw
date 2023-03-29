/**
 * Base server error
 */
export interface BaseServerError {
    code: string;
    title: string;
    message: string;
    type: string;
}

export abstract class AbstractLogggingService {
    /**
     * Log error
     * @param ex
     */
    public abstract logError<T extends BaseServerError>(ex: T): void;
}