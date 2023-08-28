import {BehaviorSubject, Observable} from "rxjs";
import {LaravelPage} from "../shared/models/laravel-page";
import {LaravelDataPage} from "../shared/interfaces/laravel-data-page";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn:'root',
})
export class LaravelPaginatorService {
    pageUpdater: BehaviorSubject<LaravelPage> = new BehaviorSubject(new LaravelPage());
    data$: Observable<LaravelDataPage> = this.pageUpdater.asObservable();

    updatePagination(pagination: LaravelPage) {
        this.pageUpdater.next(pagination);
    }
}
