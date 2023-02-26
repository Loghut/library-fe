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
      id: new FormControl(),
      user: new FormControl(null, [Validators.required]),
      book: new FormControl(null, [Validators.required])
    })
  }

  saveBorrowing():void {
    this.borrowings.push(this.formBorrowings.value);
    this.formBorrowings.reset();
  }
}
