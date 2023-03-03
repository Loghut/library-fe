import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Book} from "../../model/book.model";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  title = "Book Form"


  form: FormGroup;


  constructor() {

    this.form = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, Validators.required),
      author: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }


  saveBook(): void {
    if (this.form.valid) {
      const book: Book = {
        id: Date.now(),
        name: this.form.controls['name'].value,
        author: this.form.controls['author'].value,
      };
      console.log(book);
      this.formCreate.emit(book);
      this.form.reset();
    }
  }



  @Output()
  formCreate = new EventEmitter<Book>();
}
