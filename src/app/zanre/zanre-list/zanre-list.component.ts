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
    if (this.formGenre.controls.id_genre.value) {
        const index = this.genre.findIndex(genre => genre.id_genre === this.formGenre.controls.id_genre.value);
        if (index !== -1) {
            this.genre[index] = this.formGenre.value; }
        } else {
            this.genre.push({
              id_genre: Date.now(),
              name: this.formGenre.controls.name.value });
        }
         this.formGenre.reset();
  }

  deleteGenre(index: number): void {
        this.genre.splice(index, 1);
    }

    editGenre(index: number): void {
        this.formGenre.setValue(this.genre[index]);
    }
}
