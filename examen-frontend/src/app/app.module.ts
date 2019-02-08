import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ButtonModule, CardModule, ChartModule, InputTextModule, MessageModule, MessagesModule} from 'primeng/primeng';
import {RutaLoginComponent} from './routes/ruta-login/ruta-login.component';
import {RutaGestionUsuariosComponent} from './routes/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import {RutaActualizarRolComponent} from './routes/ruta-actualizar-rol/ruta-actualizar-rol.component';
import {RutaRegistroComponent} from './routes/ruta-registro/ruta-registro.component';
import {Ruta404Component} from './routes/ruta404/ruta404.component';
import {AuthService} from './services/rest/auth.service';
import {EsAdministrador} from './services/guard/es-administrador';
import { UsuarioComponent } from './routes/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaGestionUsuariosComponent,
    RutaActualizarRolComponent,
    RutaRegistroComponent,
    Ruta404Component,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    CardModule,
    ChartModule,
    ButtonModule
  ],
  providers: [
    AuthService,
    EsAdministrador
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
