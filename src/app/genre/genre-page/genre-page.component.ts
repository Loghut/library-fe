import { Component } from '@angular/core';
import {Genre} from "../../common/model/genre.model";
import {GenreService} from "../../common/service/genre.service";

@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: ['./genre-page.component.css']
})
export class GenrePageComponent {
  genres: Array<Genre> = [];

  title: any = "Genre Page";

  genre?: Genre;
  constructor(private service: GenreService) {

    this.getGenres();

  }

  getGenres(): void {
    this.service.getGenres().subscribe((genres: Genre[]) => {
      this.genres = genres;
    })
  }

  createGenre(genre: Genre): void {
    this.service.createGenre(genre).subscribe(genre => {
      console.log('Žáner bol úspešne uložený.');
      this.getGenres();
    })
  }

  selectGenreToUpdate(genreId: number): void {
    this.service.getGenre(genreId).subscribe((genre: Genre) => {
      this.genre = genre;
    })
  }
  updateGenre(genre: Genre): void {
    this.service.updateGenre(genre).subscribe(genre => {
      console.log('Žáner bol úspešne zmenený.');
      this.getGenres();
    })
  }
  deleteGenre(genreId: number): void {
    this.service.deleteGenre(genreId).subscribe(() => {
      console.log('Žáner bol úspešne zmazaný.');
      this.getGenres();
    })
  }

}
