import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Genre} from '../../common/model/genre.model';

@Component({
  selector: 'app-genre-form',
  templateUrl: './genre-form.component.html',
  styleUrls: ['./genre-form.component.css']
})
export class GenreFormComponent {

  @Input()
  set genreData(genre: Genre | undefined) {
    if (genre) {
      this.form.setValue(genre);
    }
  }

  @Output()
  formCreate = new EventEmitter<Genre>();

  @Output()
  formUpdate = new EventEmitter<Genre>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, Validators.required)
    })
  }


  saveGenre(): void {
    if (this.form.valid) {
      if (this.form.controls.id.value) {
        this.formUpdate.emit(this.prepareGenre(this.form.controls.id.value));
      } else {
        this.formCreate.emit(this.prepareGenre());
      }
      this.form.reset();
    }
  }

  private prepareGenre(id?: number): Genre {
    return {
      id: id !== undefined ? id : Date.now(),
      name: this.form.controls.name.value,
    };
  }
}
