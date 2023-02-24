import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { UserComponent } from "./user/user.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
form: FormGroup;
// persons: Array<any> = []
people: Array<any> = [{id:0,name: "Jožo", surname: "Pročko"},{id:1,name: "Vilo", surname: "Rozboril"},{id:2,name: "Patrik", surname: "Herman"}];
title: string = "wete3";
constructor() {
    this.form = new FormGroup({
        id: new FormControl(),
        name: new FormControl(null, Validators.required),
        surname: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
}
    savePerson(): void {
        if (this.form.controls.id.value) {
        const index = this.people.findIndex(people => people.id === this.form.controls.id.value);
        if (index !== -1) {
            this.people[index] = this.form.value; }
        } else {
            this.people.push({ id: Date.now(),
            name: this.form.controls.name.value,
            surname: this.form.controls.surname.value });
        }
         this.form.reset();
}

    deletePerson(index: number): void {
        this.people.splice(index, 1);
    }

    editPerson(index: number): void {
        this.form.setValue(this.people[index]);
    }
}
