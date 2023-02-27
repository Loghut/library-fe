import { Component } from '@angular/core';

@Component({
  selector: 'app-zanre-list',
  templateUrl: './zanre-list.component.html',
  styleUrls: ['./zanre-list.component.css']
})
export class ZanreListComponent {
  title = "Genres"

  protected genres: string[]
    = ["Zaner","neviem co tam este malo byt"];


  edit = () =>{
    this.genres.push("Ahoj");
  }
}
