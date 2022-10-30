import {Injectable} from "@angular/core";
import {ToastrService} from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class Alert{

  constructor(private toast: ToastrService) {
  }

  public success(message:string, title:string){
    this.toast.success(message, title);
  }

  public info(message:string, title:string){
    this.toast.info(message, title);
  }

  public warning(message:string, title:string){
    this.toast.warning(message, title);
  }

  public danger(message:string, title:string){
    this.toast.error(message, title);
  }

}
