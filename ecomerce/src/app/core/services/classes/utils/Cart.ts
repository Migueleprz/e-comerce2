import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Cart {

  addItem(key:string, item:object){
    let dts = localStorage.getItem(key);
    if(!dts){
      localStorage.setItem(key, JSON.stringify(item));
    }
  }
}
