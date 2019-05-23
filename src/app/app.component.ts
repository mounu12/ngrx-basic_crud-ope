import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './state/reducers';
import { authState } from './state/selectors/auth.selector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hrms';
  getUser$: Observable<any>;
  isLoggedIn$: Observable<boolean>;
  constructor(
    private store: Store<AppState>
  ) {
    this.getUser$ = this.store.select(authState);
  }
  ngOnInit() {
    this.getUser$.subscribe((state) => {
      this.isLoggedIn$ = state.isAuthenticated
    });
  }
}
