import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-zanre-list',
  templateUrl: './zanre-list.component.html',
  styleUrls: ['./zanre-list.component.css']
})
export class ZanreListComponent {
  formGenre: FormGroup;
  genre: Array<any> = [];
  title: string = "Genre";
  constructor() {
    this.formGenre = new FormGroup({
      id_genre: new FormControl(),
      name: new FormControl(null, [Validators.required]),
    })
  }

  saveGenre():void {
    this.genre.push(this.formGenre.value);
    this.formGenre.reset();
  }
}
