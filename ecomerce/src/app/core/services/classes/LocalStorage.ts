import {Rip} from "@core/services/classes/Rip";
import {ILocalStorage} from "@core/interfaces/classes/ilocal-storage";

export class LocalStorage implements ILocalStorage{

  constructor(
    private rip: Rip
  ) {
  }

  public set(key: string, data: any): string {
    let item = JSON.stringify(data);
    let itemRip = this.rip.encrypt(item);
    localStorage.setItem(key, itemRip);
    return itemRip;
  }

  public get(key: string): string {
    let item: any = localStorage.getItem(key);
    return JSON.parse(this.rip.decrypt(item));
  }

  public gets(key: string): string {
    let item: any = localStorage.getItem(key);
    return JSON.parse(this.rip.decrypt(item));
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }

  public clear(): void{
    localStorage.clear();
  }
}
