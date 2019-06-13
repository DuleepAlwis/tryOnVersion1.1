import { Observable } from 'rxjs';
export interface IBreadcrumb {
    text: string;
    path: string;
}
export declare function stringFormat(template: string, binding: any): string;
export declare function isPromise(value: any): boolean;
export declare function wrapIntoObservable<T>(value: T | Promise<T> | Observable<T>): Observable<T>;
