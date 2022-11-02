import {Component, Input, OnDestroy} from '@angular/core';
import {filter, map, Subscription} from "rxjs";
import {ActivationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnDestroy {
  public title: string = "";
  public icon: string = "";
  public title$!: Subscription;

  constructor(private router: Router) {
    this.title$ = this.getDataUrl().subscribe(({title, icon}) => {
      this.title = title;
      this.icon = icon;
      document.title = title;
    });

  }

  getDataUrl() {
    return this.router.events
      .pipe(
        // @ts-ignore
        filter(event => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      );
  }


  ngOnDestroy(): void {
    this.title$.unsubscribe();
  }

}
