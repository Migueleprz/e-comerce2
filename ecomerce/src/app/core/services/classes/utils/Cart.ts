import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Cart {
  public listItem: any = [];
  public articleList = new BehaviorSubject<any>([]);

  constructor() {
  }

  getArticle() {
    return this.articleList.asObservable();
  }

  setArticle(article: any) {
    this.listItem.push(...article);
    this.articleList.next(article);
  }

  addItem(article: any) {
    this.listItem.push(article);
    this.articleList.next(this.listItem);
    this.getValorTotal();
  }

  getValorTotal(): number {
    let total = 0;
    this.listItem.map((a: any) => {
      total += a.precio
    })
    return total;
  }

  deleteItem(article: any) {
    this.listItem.map((a: any, i: any) => {
      if (article.id === a.id) {
        this.listItem.splice(i, 1);
      }
    })
  }

  deleteAllItem(){
    this.listItem = [];
    this.articleList.next(this.listItem);
  }

}
