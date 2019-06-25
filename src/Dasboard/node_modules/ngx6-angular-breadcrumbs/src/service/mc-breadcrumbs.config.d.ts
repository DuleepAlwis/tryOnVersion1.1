import { Observable } from 'rxjs';
import { IBreadcrumb } from '../mc-breadcrumbs.shared';
export interface IPostProcessFunc {
    (crumbs: IBreadcrumb[]): Promise<IBreadcrumb[]> | Observable<IBreadcrumb[]> | IBreadcrumb[];
}
export declare class McBreadcrumbsConfig {
    postProcess: IPostProcessFunc;
}
