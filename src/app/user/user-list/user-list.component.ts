import {Component, Input} from '@angular/core';
import {User} from "../../model/user.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  title = "User List"

  @Input()
  persons?: Array<User>;


}
