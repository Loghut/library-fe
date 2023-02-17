import { Component } from '@angular/core';

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

