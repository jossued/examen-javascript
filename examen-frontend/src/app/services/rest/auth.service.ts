// auth.service.ts

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Usuario} from '../../interfaces/usuario';

@Injectable()
export class AuthService {
  usuario: any = {
    createdAt: 1548111468827,
    id: 1,
    nombre: 'Pudle',
    password: '1234',
    updatedAt: 1548111468827,
    correo: 'jossue@mail.com',
    fechaNacimiento: '01/01/2001',
  };

  roles = [

    {
      id: 1,
      nombre: 'Admin'
    },
    {
      id: 2,
      nombre: 'Usuario'
    }
  ];

  constructor(private readonly _httpClient: HttpClient) {

  }

  login(username: string,
        password: string): Observable<Usuario> {

    const url = environment.url + '/login';

    return this._httpClient
      .post(url, {
        username: username,
        password: password
      })
      .pipe(map(r => <Usuario>r)); // Casteo

  }

  esAdministrador(): boolean {
    return this.roles.some((rol) => rol.id === 1);
  }

  esUsuario(): boolean {
    return this.roles.some((rol) => rol.id === 2);
  }
}
