import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot): boolean {
        const user = JSON.parse(localStorage.getItem('userDetails'));
        return (user && user.email === route.data.expected);
    }
}
