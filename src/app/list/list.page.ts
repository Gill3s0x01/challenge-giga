import { Component, OnInit, ViewChild } from '@angular/core';
import { IResult, IUser } from '../models/user-models';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss'],
})
export class ListPage implements OnInit {
  public users: IUser[];
  public error: any;

  constructor(private userService: ApiService) {}

  ngOnInit() {
    this.userService.getAll().subscribe(
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
}
