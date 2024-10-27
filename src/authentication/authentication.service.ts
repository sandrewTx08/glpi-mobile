import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, ReplaySubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient, private router: Router) {
    this.current().subscribe();
  }

  user$ = new ReplaySubject<any>(1);

  current() {
    return this.httpClient.get<any>('api/user').pipe(
      tap((user) => {
        this.user$.next(user);
      }),
      catchError(() => {
        this.user$.next(null);
        return this.user$;
      })
    );
  }

  logout() {
    return this.httpClient.get<any>('api/logout').pipe(
      tap(() => {
        this.user$.next(null);
        this.router.navigate(['/login'], { replaceUrl: true });
      })
    );
  }

  login(username: string, password: string) {
    return this.httpClient
      .get<any>(`api/user`, {
        headers: {
          Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        },
      })
      .pipe(
        tap((user) => {
          this.user$.next(user);
          this.router.navigate(['/tickets'], { replaceUrl: true });
        })
      );
  }
}
