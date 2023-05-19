import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import {SweetAlertMessage} from "../interfaces/sweet-alert-message";

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  static success(data: SweetAlertMessage) {
    return Swal.fire({
      title: data.title,
      icon: data.type,
      confirmButtonText: data.successButtonText
    })
  }
}
