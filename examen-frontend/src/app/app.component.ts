import {Component} from '@angular/core';
import {AuthService} from './services/rest/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public readonly _authService: AuthService) {

  }

  title = 'Examen';
}
