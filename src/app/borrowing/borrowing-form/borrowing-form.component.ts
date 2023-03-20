import {Component, EventEmitter, Input,Output} from '@angular/core';
import {Borrowing} from "../../common/model/borrowing.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../common/model/user.model";

@Component({
  selector: 'app-borrowing-form',
  templateUrl: './borrowing-form.component.html',
  styleUrls: ['./borrowing-form.component.css']
})
export class BorrowingFormComponent {

  @Input()
  users?: User[];

  @Input()
  set borrowingData(borrowing: Borrowing | undefined) {
    if (borrowing) {
      this.form.setValue(borrowing);
    }
  }

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      book: new FormControl(null, Validators.required),
      user: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }

  saveBorrowing(): void {
    if (this.form.valid) {
      if (this.form.controls.id.value) {
        this.formUpdate.emit(this.prepareBorrowing(this.form.controls.id.value));
      } else {
        this.formCreate.emit(this.prepareBorrowing());
      }
      this.form.reset();
    }
  }


  private prepareBorrowing(id?: number): Borrowing {
    return {
      id: id !== undefined ? id : Date.now(),
      book: this.form.controls.book.value,
      user: this.form.controls.user.value,
    };
  }

  @Output()
  formCreate = new EventEmitter<Borrowing>();

  @Output()
  formUpdate = new EventEmitter<Borrowing>();
}
