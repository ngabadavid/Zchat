import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  template: ''
})
export class ZchatBaseComponent implements OnInit, AfterViewInit, OnDestroy {

  private readonly onInitSubject = new Subject<void>();
  readonly onInit$ = this.onInitSubject.asObservable();

  private readonly afterViewInitSubject = new Subject<void>();
  readonly afterViewInit$ = this.afterViewInitSubject.asObservable();

  private readonly onDestroySubject = new Subject<void>();
  readonly onDestroy$ = this.onDestroySubject.asObservable();

  ngOnInit(): void {
    this.onInitSubject.next();
  }

  ngAfterViewInit(): void {
    this.afterViewInitSubject.next();
  }

  ngOnDestroy(): void {
    this.onDestroySubject.next();
  }
}