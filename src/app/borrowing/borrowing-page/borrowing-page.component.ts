import { Component } from '@angular/core';
import {Borrowing} from "../../model/borrowing.model";
import {Book} from "../../model/book.model";

@Component({
  selector: 'app-borrowing-page',
  templateUrl: './borrowing-page.component.html',
  styleUrls: ['./borrowing-page.component.css']
})
export class BorrowingPageComponent {
  borrowing: Array<Borrowing> = [];

  title: any = "Borrowing Page";


  borrow(borrowForm: Borrowing): void {
    this.borrowing.push(borrowForm);
    console.log('Borrowing:', this.borrowing);
  }
}
