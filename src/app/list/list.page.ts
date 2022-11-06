import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { IResult, IUser } from '../models/user-models';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public users: IUser[];
  public error: any;
  selectedItem: any;
  page: number;

  constructor(private userService: ApiService) {}

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      this.getUsers(2);
      if (this.users.length === 20) {
        event.target.disabled = true;
      }
      event.target.complete();
    }, 100);
  }

  getUsers(page: number) {
    this.page = 1;
    this.userService.getAll(2).subscribe(
      (data: IResult) => {
        data.results.forEach((user: IUser) => console.log(user));
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
