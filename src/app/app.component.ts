import { UsersService } from './service/users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public users: UsersService) {}

  updateUser(info: {name: string, status: string}, user: {name: string, status: string, url: string, id: number}) {
    user.name = info.name;
    user.status = info.status;
  }
}