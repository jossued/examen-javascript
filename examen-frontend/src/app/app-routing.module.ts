import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RutaLoginComponent} from './routes/ruta-login/ruta-login.component';
import {RutaGestionUsuariosComponent} from './routes/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import {Ruta404Component} from './routes/ruta404/ruta404.component';
import {RutaActualizarRolComponent} from './routes/ruta-actualizar-rol/ruta-actualizar-rol.component';
import {EsAdministrador} from './services/guard/es-administrador';
import {RutaRegistroComponent} from './routes/ruta-registro/ruta-registro.component';
import {UsuarioComponent} from './routes/usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: RutaLoginComponent
  },
  {
    path: 'registro',
    component: RutaRegistroComponent
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
    canActivate: [
      // GUARDS -> Servicio
      EsAdministrador
    ],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'gestion-usuarios'
      },
      {
        path: 'gestion-usuarios',
        component: RutaGestionUsuariosComponent,
      },
      {
        path: 'actualizar-rol/:idUsuario',
        component: RutaActualizarRolComponent,
      },
    ]
  },
  /*
  {
    path: 'gestion-conductores',
    component: RutaGestionConductoresComponent,
    canActivate: [
      // GUARDS -> Servicio
      EsUsuario
    ],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'gestion-productos'
      },
  },*/
  {
    path: 'no-encontrado',
    component: Ruta404Component
  },
  {
    path: '**',
    redirectTo: 'no-encontrado'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
