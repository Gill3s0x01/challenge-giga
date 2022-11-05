import { Component, OnInit } from '@angular/core';
import { IResult, IUser } from '../models/user-models';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-female',
  templateUrl: 'female.page.html',
  styleUrls: ['female.page.scss'],
})
export class FemalePage implements OnInit {
  public users: IUser[];
  public error: any;
  selectedItem: any;

  constructor(private userService: ApiService) {}

  ngOnInit() {
    this.userService.getWoman().subscribe(
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
