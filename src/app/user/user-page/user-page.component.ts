import { Component } from '@angular/core';
import {User} from "../../model/user.model";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  persons: Array<User> = [];

  title: any = "User Page";


  createPerson(person: User): void {
    this.persons.push(person);
    console.log('PERSONS:', this.persons);
  }


}
