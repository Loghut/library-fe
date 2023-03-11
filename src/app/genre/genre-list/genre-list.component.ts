import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Genre} from "../../common/model/genre.model";

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent {
  title = "Genre List"

  @Input()
  genres?: Array<Genre>;

  @Output()
  genreToUpdate = new EventEmitter<number>();

  @Output()
  genreToDelete = new EventEmitter<number>();
  updateGenre(genreId: number): void {
    this.genreToUpdate.emit(genreId);
  }

  deleteGenre(genreId: number): void {
    this.genreToDelete.emit(genreId);
  }
}
