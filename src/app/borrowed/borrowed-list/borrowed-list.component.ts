import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-borrowed-list',
  templateUrl: './borrowed-list.component.html',
  styleUrls: ['./borrowed-list.component.css']
})
export class BorrowedListComponent {
  formBorrowings: FormGroup;
  borrowings: Array<any> = [];
  title: string = "Vypozicky";
  constructor() {
    this.formBorrowings = new FormGroup({
      id_borrowed: new FormControl(),
      user: new FormControl(null, [Validators.required]),
      book: new FormControl(null, [Validators.required])
    })
  }

  saveBorrowings():void {
    if (this.formBorrowings.controls.id_borrowed.value) {
        const index = this.borrowings.findIndex(borrowings => borrowings.id_borrowed === this.formBorrowings.controls.id_borrowed.value);
        if (index !== -1) {
            this.borrowings[index] = this.formBorrowings.value; }
        } else {
            this.borrowings.push({
              id_borrowed: Date.now(),
              user: this.formBorrowings.controls.user.value,
              book: this.formBorrowings.controls.book.value });
        }
         this.formBorrowings.reset();
  }

  deleteBorrowings(index: number): void {
        this.borrowings.splice(index, 1);
    }

    editBorrowings(index: number): void {
        this.formBorrowings.setValue(this.borrowings[index]);
    }


}
