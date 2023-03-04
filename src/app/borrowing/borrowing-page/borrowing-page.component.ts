import {Component, Input} from '@angular/core';
import {Borrowing} from "../../model/borrowing.model";
import {Book} from "../../model/book.model";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-borrowing-page',
  templateUrl: './borrowing-page.component.html',
  styleUrls: ['./borrowing-page.component.css']
})
export class BorrowingPageComponent {
  borrowing: Array<Borrowing> = [];

  title: any = "Borrowing Page";
  user: Array<User> = [{id: 4, name: "kkt", surname: "pica"}];


  borrow(borrowForm: Borrowing): void {
    this.borrowing.push(borrowForm);
    console.log('Borrowing:', this.borrowing);
  }

  people: Array<User> = [];
  knihy: Array<Book> = [];
  pushPerson(person: User):void{
    this.people.push(person);
  }
  pushBook(kniha: Book):void{
    this.knihy.push(kniha);
  }
}
