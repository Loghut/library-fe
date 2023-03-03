import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Borrowing} from "../../model/borrowing.model";
import {User} from "../../model/user.model";
import {Book} from "../../model/book.model";

@Component({
  selector: 'app-borrowing-form',
  templateUrl: './borrowing-form.component.html',
  styleUrls: ['./borrowing-form.component.css']
})
export class BorrowingFormComponent {
  title = "Borrowing Form"

  form: FormGroup;


  constructor() {

    this.form = new FormGroup({
      id: new FormControl(null),
      borrowerName: new FormControl(null, Validators.required),
      bookName: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }


  saveBorrow(): void {
    if (this.form.valid) {
      const book: Borrowing = {
        id: Date.now(),
        borrowerName: this.form.controls['borrowerName'].value,
        bookName: this.form.controls['bookName'].value,
      };
      console.log(book);
      this.formCreate.emit(book);
      this.form.reset();
    }
  }


  @Input()
  books?: Array<Book>;

  @Input()
  persons?: Array<User>;

  @Output()
  formCreate = new EventEmitter<Borrowing>();
}
