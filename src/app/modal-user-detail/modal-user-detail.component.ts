import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IUser } from '../models/user-models';

@Component({
  selector: 'app-modal-user-detail',
  templateUrl: './modal-user-detail.component.html',
  styleUrls: ['./modal-user-detail.component.scss'],
})
export class ModalUserDetailComponent implements OnInit {
  @Input() user: IUser[];

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async closeModel() {
    const close = 'Modal Removed';
    await this.modalController.dismiss(close);
  }
}
