import {Component, EventEmitter, Input,Output} from '@angular/core';
import {Borrowing} from "../../common/model/borrowing.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-borrowing-form',
  templateUrl: './borrowing-form.component.html',
  styleUrls: ['./borrowing-form.component.css']
})
export class BorrowingFormComponent {

  @Input()
  set borrowingData(borrowing: Borrowing | undefined) {
    if (borrowing) {
      this.form.setValue(borrowing);
    }
  }

  @Output()
  formCreate = new EventEmitter<Borrowing>();

  @Output()
  formUpdate = new EventEmitter<Borrowing>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      bookId: new FormControl(null, Validators.required),
      customerId: new FormControl(null, [Validators.required, Validators.minLength(3)])
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
      bookId: this.form.controls.bookId.value,
      customerId: this.form.controls.customerId.value,
    };
  }
}
