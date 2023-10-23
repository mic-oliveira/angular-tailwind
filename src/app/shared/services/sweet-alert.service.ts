import {Injectable} from '@angular/core';
import Swal from 'sweetalert2'
import {SweetAlertMessage} from "../interfaces/sweet-alert-message";

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {
  
  constructor() {
  }
  
  static success(data: SweetAlertMessage) {
    data.type = 'success';
    return this.fire(data);
  }
  
  static error(data: SweetAlertMessage) {
    data.type = 'error';
    return this.fire(data);
  }
  
  private static fire(data: SweetAlertMessage) {
    return Swal.fire({
      title: data.title,
      icon: data.type,
      text: data.text ?? undefined,
      confirmButtonText: data.successButtonText
    })
  }
}
