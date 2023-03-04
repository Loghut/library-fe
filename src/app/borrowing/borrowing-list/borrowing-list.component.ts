import {Component, Input} from '@angular/core';
import {Borrowing} from "../../model/borrowing.model";
import {User} from "../../model/user.model";
import {Book} from "../../model/book.model";

@Component({
  selector: 'app-borrowing-list',
  templateUrl: './borrowing-list.component.html',
  styleUrls: ['./borrowing-list.component.css']
})
export class BorrowingListComponent {
  title = "Borrowing List"

  @Input()
  borrowing?: Array<Borrowing>;
  @Input()
  people?: Array<User>;

  @Input()
  knihy?: Array<Book>;


}
