import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {
  formBook: FormGroup;
  books: Array<any> = [];
  title: string = "Books";
  constructor() {
    this.formBook = new FormGroup({
      id_book: new FormControl(),
      name: new FormControl(null, [Validators.required]),
      autor: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }

  saveBook():void {
    this.books.push(this.formBook.value);
    this.formBook.reset();
  }
}
