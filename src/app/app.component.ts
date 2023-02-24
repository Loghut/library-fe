import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "library-fe";


  users: any = [];
    add = () => {
      const contacts = document.getElementById("Contact") as HTMLInputElement;
      const name = document.getElementById("Name") as HTMLInputElement;
      const id = document.getElementById("Id") as HTMLInputElement;
      let IdValue:string = id?.value;
      let NameValue:string = name?.value;
      let ContactsValue:string = contacts?.value;

    const user: any = [IdValue, NameValue, ContactsValue];
    this.users.push(user);
    console.log(this.users);
  }
  books: any = [];
  add_book = () => {
      const book_name = document.getElementById("Book_Name") as HTMLInputElement;
      const book_id = document.getElementById("Book_Id") as HTMLInputElement;
      const book_author = document.getElementById("Book_Author") as HTMLInputElement;
      const book_availability = document.getElementById("Book_Availability") as HTMLInputElement;
      let bookIdValue: string = book_id?.value;
      let bookNameValue: string = book_name?.value;
      let bookAuthorValue: string = book_author?.value;
      let bookAvailabilityValue: string = book_availability?.value;
      const book: any = [bookIdValue, bookNameValue, bookAuthorValue, bookAvailabilityValue];
      this.books.push(book);
      console.log(this.books);
  }

    borrow: FormGroup;
    borrowings : Array<{
        id_bor : number,
        book : string,
        user : string
    }> =[]

    constructor() {
        this.borrow = new FormGroup({
            id_bor: new FormControl(),
            book: new FormControl(),
            user: new FormControl()
        })
    }
    add_borr(): void {
        this.borrowings.push(this.borrow.value);
        this.borrow.reset();
    }

  change = (page: string) =>{
      const users = document.getElementById('users');
      const books = document.getElementById('books');
      const borrowing = document.getElementById('borrowing');

      switch (page){
        case 'users': {
          users!.style.display = "block"
          books!.style.display = "none"
          borrowing!.style.display = "none"
        }
        break;
        case 'books': {
          users!.style.display = "none"
          books!.style.display = "block"
          borrowing!.style.display = "none"
        }
        break;
        case 'borrowing': {
          users!.style.display = "none"
          books!.style.display = "none"
          borrowing!.style.display = "block"
        }
        break;
        default : {
          users!.style.display = "none"
          books!.style.display = "none"
          borrowing!.style.display = "none"
        }
      }
  }
}

