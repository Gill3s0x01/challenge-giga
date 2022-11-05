import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IUser } from '../models/user-models';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  @Input() itemUser: IUser[];
  @Output() selectItem = new EventEmitter();

  ngOnInit() {}

  onClickInChild(user: IUser) {
    this.selectItem.emit(user);
    console.log('clicou');
  }
}
