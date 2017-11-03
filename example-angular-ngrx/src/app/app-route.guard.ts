import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from './shared/reducers';

@Injectable()
export class RouteGuard implements CanActivate {
    isBookModuleViewable: boolean;
    isCarModuleViewable: boolean;

    constructor(private router: Router, private store: Store<AppState>) {
       this.store.select(state => state.bookState).subscribe((bState) => {
           if (bState.isBookListLoaded) {
               this.isBookModuleViewable = true;
           } else {
               this.isBookModuleViewable = false;
           }
        });
        this.store.select(state => state.carState).subscribe((cState) => {
            if (cState.isCarListLoaded) {
               this.isCarModuleViewable = true;
           } else {
               this.isCarModuleViewable = false;
           }
        });
    }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url.replace('/', '');
    let canActivateRoute: boolean;
    switch (url) {
        case 'books':
            if (this.isBookModuleViewable) {
                canActivateRoute = true;
            } else {
                this.router.navigate(['/home']);
                canActivateRoute =  false;
            }
            break;
        case 'cars':
            if (this.isCarModuleViewable) {
                canActivateRoute = true;
            } else {
                this.router.navigate(['/home']);
                canActivateRoute =  false;
            }
            break;
         default:
            break;
    }
    return canActivateRoute;
  }
}
