import {Component, Input, Output} from '@angular/core';
import {User} from '../../common/model/user.model';
import {UserService} from "../../common/service/user.service";
import {Subscription} from "rxjs";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {ToastService} from "angular-toastify";
import {Subject} from "rxjs";
import {Form} from "@angular/forms";
import {Router} from "@angular/router";


@UntilDestroy()
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent  {

  persons: Array<User> = [];

  person?: User;
  private getListSubscription?: Subscription;

  subject = new Subject<void>()

  constructor(private service: UserService,
              private toastService: ToastService,
              private router: Router) {
    this.getPersons();
  }

  getListUnsubscribe(): void {
    if (this.getListSubscription) {
      this.getListSubscription.unsubscribe();
      this.getListSubscription = undefined;
    }
  }

  getPersons(): void {
    this.getListUnsubscribe();
    this.getListSubscription = this.service.getUsers().subscribe((persons: User[]) => {
      this.persons = persons;
    });
  }

  createPerson(person: User): void {
    this.service.createUser(person).subscribe(person => {
      console.log('Osoba bola úspešne uložená.');
      this.getPersons();
    })
  }

  selectPersonToUpdate(personId: number): void {
    this.router.navigate(['user', personId]);
  }

  deletePerson(personId: number): void {
    if (window.confirm('Naozaj chcete vymazať osobu?')) {
      this.service.deleteUser(personId).pipe(untilDestroyed(this)).subscribe(() => {
        this.toastService.success('Osoba bola úspešne zmazaná.');
        this.getPersons();
      }, () => {
        this.toastService.error('Chyba. Osoba nebola zmazaná.');
      })
    }
  }

}
