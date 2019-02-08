import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../rest/auth.service';

@Injectable()
export class EsUsuario implements CanActivate {
  constructor(private readonly _authService: AuthService,
              private readonly _router: Router) {
  }

  canActivate(): boolean {
    if (this._authService.esUsuario()) {
      return true;
    } else {
      this._router.navigate(['/']);
      return false;
    }
  }
}
