import { Component } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {User} from "./model/user.model";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = "library-fe";

  use = (event) => {
    let input = document.getElementById("id") as HTMLInputElement;
    let inputValue = input?.value;
    console.log(inputValue);

  }
}

