import {Component} from '@angular/core';

export enum Menu {
  Users,
  Books,
  Borrowings
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menu = Menu;

  currentMenu = Menu.Users;

  title = 'Routre';

  changeMenu(menu: Menu): void {
    this.currentMenu = menu;
  }
}
