import { Component } from '@angular/core';
import {Book} from "../../model/book.model";

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {
  books: Array<Book> = [];

  title: any = "Book Page";


  createBook(person: Book): void {
    this.books.push(person);
    console.log('PERSONS:', this.books);
  }


}
