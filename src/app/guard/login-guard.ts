import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate{
    constructor (private router : Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return new Observable((Observable) => {
            let token = localStorage.getItem('token');
            if (token) {
                this.router.navigate(['']);
            } else {
                Observable.next(true);
            }
        });
    }
}