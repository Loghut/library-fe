import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "./model/book.model";
import {User} from "./model/user.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routre';

  buttonSwitch(what: string) {
    switch (what) {
      case 'user': {
        document.getElementById('userMenu')!.style.display = 'block';
        document.getElementById('bookMenu')!.style.display = 'none';
        document.getElementById('borrowingMenu')!.style.display = 'none';
      }
      break;
      case 'book' : {
        document.getElementById('userMenu')!.style.display = 'none';
        document.getElementById('bookMenu')!.style.display = 'block';
        document.getElementById('borrowingMenu')!.style.display = 'none';
      }
      break;
      case 'borrowing': {
        document.getElementById('userMenu')!.style.display = 'none';
        document.getElementById('bookMenu')!.style.display = 'none';
        document.getElementById('borrowingMenu')!.style.display = 'block';
      }
      break;
      default: {
        document.getElementById('userMenu')!.style.display = 'none';
        document.getElementById('bookMenu')!.style.display = 'none';
        document.getElementById('borrowingMenu')!.style.display = 'none';
      }
    }
  }

  @Input()
  books?: Array<Book>;

  @Input()
  person?: Array<User>;

}
