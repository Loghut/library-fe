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
    if (this.formBook.controls.id_book.value) {
        const index = this.books.findIndex(books => books.id_book === this.formBook.controls.id_book.value);
        if (index !== -1) {
            this.books[index] = this.formBook.value; }
        } else {
            this.books.push({
              id_book: Date.now(),
              name: this.formBook.controls.name.value,
              autor: this.formBook.controls.autor.value });
        }
         this.formBook.reset();
  }

  deleteBook(index: number): void {
        this.books.splice(index, 1);
    }

    editBook(index: number): void {
        this.formBook.setValue(this.books[index]);
    }
}
