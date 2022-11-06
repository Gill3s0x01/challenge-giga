import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { IResult, IUser } from '../models/user-models';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-female',
  templateUrl: 'female.page.html',
  styleUrls: ['female.page.scss'],
})
export class FemalePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public users: IUser[];
  public error: any;
  selectedItem: any;
  page: number;

  constructor(private userService: ApiService) {}

  loadData(event) {
    setTimeout(() => {
      this.getUsers(2);
      console.log('Done');
      if (this.users.length === 20) {
        event.target.disabled = true;
      }
      event.target.complete();
    }, 100);
  }

  getUsers(page: number) {
    this.page = 1;
    this.userService.getWoman(2).subscribe(
      (data: IResult) => {
        data.results.forEach((user: IUser) => console.log(user.gender));
        this.users = data.results;
      },
      (error: any) => {
        console.log('Error', error);
        this.error = error;
      }
    );
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  ngOnInit() {
    this.getUsers(2);
  }
}
