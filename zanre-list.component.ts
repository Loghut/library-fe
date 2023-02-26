import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-zanre-list',
  templateUrl: './zanre-list.component.html',
  styleUrls: ['zanre-list.component.css']
})
export class ZanreListComponent {
  formZaner: FormGroup;
  people: Array<any> = [];
  title: string = "Genres";
  constructor() {
    this.formZaner = new FormGroup({
      id: new FormControl(),
      name: new FormControl(null, [Validators.required]),
    })
  }

  saveGenre():void {
    this.people.push(this.formZaner.value);
    this.formZaner.reset();
  }
}
