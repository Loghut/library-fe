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
      id_user: new FormControl(),
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }

  saveUser():void {
    if (this.formUser.controls.id_user.value) {
        const index = this.people.findIndex(people => people.id_user === this.formUser.controls.id_user.value);
        if (index !== -1) {
            this.people[index] = this.formUser.value; }
        } else {
            this.people.push({
              id_user: Date.now(),
              name: this.formUser.controls.name.value,
              surname: this.formUser.controls.surname.value });
        }
         this.formUser.reset();
  }

  deleteUser(index: number): void {
      this.people.splice(index, 1);
    }

  editUser(index: number): void {
      this.formUser.setValue(this.people[index]);
    }
}
