import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  title = "User Form"


  form: FormGroup;


  constructor() {

    this.form = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }


  savePerson(): void {
    if (this.form.valid) {
      const user: User = {
        id: Date.now(),
        name: this.form.controls['name'].value,
        surname: this.form.controls['surname'].value,
      };
      console.log(user);
      this.formCreate.emit(user);
      this.form.reset();
    }
  }



  @Output()
  formCreate = new EventEmitter<User>();
}
