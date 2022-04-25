import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HomeService } from '../service/home.service';

@Injectable({ providedIn: 'root' })
export class UsersResolver implements Resolve<any> {

    constructor(private service: HomeService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
        console.log(route);
        return this.service.getUsers().pipe(
            catchError(error => of(error))
        ) ;
    }
}