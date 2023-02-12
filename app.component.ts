import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library-fe';
  bin_size = 8;
  x = 0;
  result = 0;
  dvojka = [0, 0, 0, 0, 0, 0, 0, 0];
  binary = [false, false, false, false, false, false, false, false];
  limit = 0

  decimalToBinary(input: number): void {
    this.limit = 0
    for(let i = 0; i<this.bin_size;i++){
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
    this.dvojka = [];
    this.x = input;
    while (this.x > 0){
      this.dvojka.push(this.x % 2)
      this.x = Math.floor(this.x/2)
    }
    this.binary=[]
    for( let x = 0; x < this.bin_size; x++){
      if(this.dvojka[x] == 0){
        this.binary.push(false)
      }else if (this.dvojka[x] == 1){
        this.binary.push(true)
      }else{
        this.binary.push(false)
      }
    }
  }

  binaryToDecimal(input: number) {
    if (this.binary[input]) {
      this.binary[input] = false
    } else if (!this.binary[input]) {
      this.binary[input] = true
    }
    if (this.binary[0]) {
      this.result = 1
    } else {
      this.result = 0
    }
    for (let i = 1; i < this.bin_size; i++) {
      if (this.binary[i]) {
        this.result = this.result + Math.pow(2, i)
      }
    }
  }
}
