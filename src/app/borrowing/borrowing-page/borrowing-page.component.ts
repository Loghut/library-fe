import {Component} from '@angular/core';
import {Borrowing} from '../../common/model/borrowing.model';
import {BorrowingService} from "../../common/service/borrowing.service";

@Component({
  selector: 'app-borrowing-page',
  templateUrl: './borrowing-page.component.html',
  styleUrls: ['./borrowing-page.component.css']
})
export class BorrowingPageComponent {

  borrowings: Array<Borrowing> = [];

  borrowing?: Borrowing;
  constructor(private service: BorrowingService) {

   this.getBorrowings();

  }

  getBorrowings(): void {
    this.service.getBorrowings().subscribe((borrowings: Borrowing[]) => {
      this.borrowings = borrowings;
    })
  }

  createBorrowing(borrowing: Borrowing): void {
    this.service.createBorrowing(borrowing).subscribe(borrowing => {
      console.log('Borrowing bol úspešne uložený.');
      this.getBorrowings();
    })
  }

  selectBorrowingToUpdate(borrowingId: number): void {
    this.service.getBorrowing(borrowingId).subscribe((borrowing: Borrowing) => {
      this.borrowing = borrowing;
    })
  }
  updateBorrowing(borrowing: Borrowing): void {
    this.service.updateBorrowing(borrowing).subscribe(borrowing => {
      console.log('Borrowing bol úspešne zmenený.');
      this.getBorrowings();
    })
  }
  deleteBorrowing(borrowingId: number): void {
    this.service.deleteBorrowing(borrowingId).subscribe(() => {
      console.log('Borrowing bol úspešne zmazaný.');
      this.getBorrowings();
    })
  }
}
