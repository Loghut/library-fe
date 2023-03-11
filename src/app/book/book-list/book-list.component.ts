import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../../common/model/book.model";
import {User} from "../../common/model/user.model";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  title = "Book List"

  @Input()
  books?: Array<Book>;

  @Output()
  bookToUpdate = new EventEmitter<number>();

  @Output()
  bookToDelete = new EventEmitter<number>();
  updateBook(userId: number): void {
    this.bookToUpdate.emit(userId);
  }

  deleteBook(userId: number): void {
    this.bookToDelete.emit(userId);
  }
}
