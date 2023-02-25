import { Component } from '@angular/core';

@Component({
  selector: 'app-borrowed-list',
  templateUrl: './borrowed-list.component.html',
  styleUrls: ['./borrowed-list.component.css']
})
export class BorrowedListComponent {
  title: string = "Borrowed Books"

  borrowed: any = [["User","Book",1],["User 2","Book 2",3] ];
}
