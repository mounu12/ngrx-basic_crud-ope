import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/reducers';
import { authState } from 'src/app/state/selectors/auth.selector';
import { LogOut } from 'src/app/state/actions/auth.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  showFiller = false;
  img= "https://www.scribblereview.com/upload/profile_image/default_boy.png"
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
  logOut(): void {
    this.store.dispatch(new LogOut());
  }
}
