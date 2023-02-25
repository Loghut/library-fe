import { Component } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  title: string = "User List"

  users: any = [["Username","neviem co tam este malo byt"]];
}
