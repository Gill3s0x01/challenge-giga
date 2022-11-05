import { Component, OnInit } from '@angular/core';
import { IResult, IUser } from '../models/user-models';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-male',
  templateUrl: 'male.page.html',
  styleUrls: ['male.page.scss'],
})
export class MalePage implements OnInit {
  public users: IUser[];
  public error: any;
  selectedItem: any;

  constructor(private userService: ApiService) {}

  ngOnInit() {
    this.userService.getMen().subscribe(
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
}
