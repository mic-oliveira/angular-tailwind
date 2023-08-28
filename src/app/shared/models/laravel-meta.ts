import {LaravelMetaPage} from "../interfaces/laravel-meta-page";

export class LaravelMeta  implements LaravelMetaPage{
    current_page: number = 1;
    from: number = 1;
    last_page: number = 1;
    links: any | null = null;
    path: string = '';
    per_page: number = 15;
    to: number = 0;
    total: number = 0;
}
