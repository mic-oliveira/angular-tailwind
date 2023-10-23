import {LaravelDataPage} from "../interfaces/laravel-data-page";
import {LaravelMetaPage} from "../interfaces/laravel-meta-page";
import {LaravelMeta} from "./laravel-meta";

export class LaravelPage implements LaravelDataPage {
  data: Array<any> = [];
  meta: LaravelMetaPage = new LaravelMeta();
}
