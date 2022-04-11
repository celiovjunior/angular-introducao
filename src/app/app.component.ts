import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'celiovjunior';
  userData = {
    email: 'celio@email.com',
    role: 'adm'
  }

  title = 'angula-curso';
}
