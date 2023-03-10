import { Component } from '@angular/core';
import {Book} from "../../common/model/book.model";
import {BookService} from "../../common/service/book.service";

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {
  books: Array<Book> = [];

  title: any = "Book Page";

  book?: Book;
  constructor(private service: BookService) {

    this.getBooks();

  }

  getBooks(): void {
    this.service.getBooks().subscribe((books: Book[]) => {
      this.books = books;
    })
  }

  createBook(book: Book): void {
    this.service.createBook(book).subscribe(book => {
      console.log('Kniha bola úspešne uložená.');
      this.getBooks();
    })
  }

  selectBookToUpdate(bookId: number): void {
    this.service.getBook(bookId).subscribe((book: Book) => {
      this.book = book;
    })
  }
  updateBook(book: Book): void {
    this.service.updateBook(book).subscribe(book => {
      console.log('Kniha bola úspešne zmenená.');
      this.getBooks();
    })
  }
  deleteBook(bookId: number): void {
    this.service.deleteBook(bookId).subscribe(() => {
      console.log('Kniha bola úspešne zmazaná.');
      this.getBooks();
    })
  }

}
