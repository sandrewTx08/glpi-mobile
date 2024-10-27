import { inject } from '@angular/core';
import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';
import { map } from 'rxjs';
import { AuthenticationService } from './authentication.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const { user$ } = inject(AuthenticationService);

  return user$.pipe(
    map((user) => (user ? true : createUrlTreeFromSnapshot(route, ['/login'])))
  );
};
