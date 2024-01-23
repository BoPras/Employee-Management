import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppGuard implements CanActivate{
    constructor (private router : Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return new Observable((Observable) => {
            let token = localStorage.getItem('token');
            if (token) {
                Observable.next(true);
            } else {
                this.router.navigate(['/auth/login']);
            }
        });
    }
}