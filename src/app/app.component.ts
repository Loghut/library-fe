import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    cislo = [0];
    input=0;

    checkboard = [false,false,false,false,false,false,false,false];
    vysledok = 0;
    checkbox(input: number): void {
        if(input >= 255){
          alert("Max je: 255!")
          document.getElementById("decimal")!.outerHTML = "Error";
          return;
        }
        if(input < 0){
            alert("Zadane cislo musi byt kladne")
            return
        }
        this.cislo = [];
        this.input = input;
        while (this.input > 0){
            this.cislo.push(this.input % 2)
            this.input = Math.floor(this.input/2)
        }
        this.checkboard=[]
        for( let x = 0; x < 8; x++){
            switch(this.cislo[x]){
              case 0: this.checkboard.push(false);
              break;
              case 1: this.checkboard.push(true);
              break;
              default: this.checkboard.push(false);
            }
        }
    }

    pridaj(input: number){
      this.checkboard[input] = !this.checkboard[input];
        switch(this.checkboard[0]){
          case true: this.vysledok = 1
          break;
          default: this.vysledok = 0
        }
        for(let i = 1; i<8;i++){
            if(this.checkboard[i]){
                this.vysledok = this.vysledok + Math.pow(2, i);
            }
        }
    }
}

