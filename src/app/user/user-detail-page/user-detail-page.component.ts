import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../common/model/user.model";
import {UserService} from "../../common/service/user.service";
import {ToastService} from "angular-toastify";

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.css']
})
export class UserDetailPageComponent {

  person?: User;

  private personId: number | null;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: UserService,
              private toastService: ToastService) {

    this.personId = Number(route.snapshot.paramMap.get('userId'))
    this.getUser();

  }


  private getUser() {
    if (this.personId !== null) {
      this.service.getUser(this.personId).subscribe((person: User) => {
        this.person = person;
      })
    }
  }


  updatePerson(person: User): void {
    if (window.confirm("Naozaj chces zmenit uzivatela?")) {
      this.service.updateUser(person).subscribe(person => {
        console.log('Osoba bola úspešne zmenená.');
        this.getUser();
        this.router.navigate(['user']).catch(err =>
          console.log(err)
        );
      })
    }
  }


}
