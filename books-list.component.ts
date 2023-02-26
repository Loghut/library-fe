import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['books-list.component.css']
})
export class BooksListComponent {
  formBook: FormGroup;
  books: Array<any> = [];
  title: string = "Books";
  constructor() {
    this.formBook = new FormGroup({
      id: new FormControl(),
      name: new FormControl(null, [Validators.required]),
      genre: new FormControl(null, [Validators.required]),
      author: new FormControl(null, [Validators.required])
    })
  }

  saveBook():void {
    this.books.push(this.formBook.value);
    this.formBook.reset();
  }
}
