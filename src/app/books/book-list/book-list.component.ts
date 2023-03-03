import {Component, Input} from '@angular/core';
import {Book} from "../../model/book.model";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  title = "Book List"

  @Input()
  books?: Array<Book>;
}
