import { Component } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {
  title = "Books List"

  books: any = [["Test Book", "Test Zaner", 1],["Book", "Zaner", 3]];



}

