import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    poc_checkov = 855

    number = Array(this.poc_checkov).fill(0).map((x,i)=>i);

    cislo = [0];
    x=0

    checkboard = Array(this.poc_checkov).fill(false).map(()=>false);
    vysledok = 0;
    limit = 0
    checkbox(input: number): void {
        this.limit = 0
        for(let i = 0; i<this.poc_checkov;i++){
            this.limit = this.limit + Math.pow(2, i)
        }
        if(input >= this.limit+1){
            alert("Zadane cislo moze byt maximalne " + this.limit + "!")
            return
        }
        if(input < 0){
            alert("Zadane cislo musi byt kladne")
            return
        }
        this.cislo = [];
        this.x = input;
        while (this.x > 0){
            this.cislo.push(this.x % 2)
            this.x = Math.floor(this.x/2)
        }
        this.checkboard=[]
        for( let x = 0; x < this.poc_checkov; x++){
            if(this.cislo[x] == 0){
                this.checkboard.push(false)
            }else if (this.cislo[x] == 1){
                this.checkboard.push(true)
            }else{
                this.checkboard.push(false)
            }
        }
    }

    pridaj(input: number){
        if(this.checkboard[input]){
            this.checkboard[input] = false
        }else if (!this.checkboard[input]){
            this.checkboard[input] = true
        }
        if(this.checkboard[0]){
            this.vysledok = 1
        }else{
            this.vysledok = 0
        }
        for(let i = 1; i<this.poc_checkov;i++){
            if(this.checkboard[i]){
                this.vysledok = this.vysledok + Math.pow(2, i)
            }
        }

    }
}

