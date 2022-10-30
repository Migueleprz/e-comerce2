import * as crypt from "crypto-js";
import {environment} from "@environments/environment";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class Rip{
  private code: string = environment.key;

  public encrypt(key:string): string{
    return crypt.AES.encrypt(key, this.code).toString();
  }

  public decrypt(key:string): string{
    return crypt.AES.decrypt(key, this.code).toString(crypt.enc.Utf8);
  }
}
