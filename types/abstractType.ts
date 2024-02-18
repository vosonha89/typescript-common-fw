/**
 * Abstract type for data
 */
export abstract class AbstractType {
    public abstract mapResponse<TResponse>(response: TResponse): void;
}