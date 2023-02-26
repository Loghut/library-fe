import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['users-list.component.css']
})
export class UsersListComponent {
  formUser: FormGroup;
  people: Array<any> = [];
  title: string = "Users";
  constructor() {
    this.formUser = new FormGroup({
      id: new FormControl(),
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }

  savePerson():void {
    this.people.push(this.formUser.value);
    this.formUser.reset();
  }
}
