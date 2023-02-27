import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title  = "Router App"

  tets = ['xxx', 'yyy','zzz']

  Test = (input : number) => {
    if (input == 1){
      console.log("Test Success");
    }
    else {
      console.log("Test Failed");
    }
  }

}
