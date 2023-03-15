import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Book} from '../../common/model/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  @Input()
  set bookData(book: Book | undefined) {
    if (book) {
      this.form.setValue(book);
    }
  }

  @Output()
  formCreate = new EventEmitter<Book>();

  @Output()
  formUpdate = new EventEmitter<Book>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      authorFirstName: new FormControl(null, Validators.required),
      authorLastName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      title: new FormControl(null, Validators.required),
      isbn: new FormControl(null, Validators.required),
      count: new FormControl(null)
    })
  }


  saveBook(): void {
    if (this.form.valid) {
      if (this.form.controls.id.value) {
        this.formUpdate.emit(this.prepareBook(this.form.controls.id.value));
      } else {
        this.formCreate.emit(this.prepareBook());
      }
      this.form.reset();
    }
  }

  private prepareBook(id?: number): Book {
    return {
      id: id !== undefined ? id : Date.now(),
      authorFirstName: this.form.controls.authorFirstName.value,
      authorLastName: this.form.controls.authorLastName.value,
      title: this.form.controls.title.value,
      isbn: this.form.controls.isbn.value,
      count: this.form.controls.count.value
    };
  }
}
