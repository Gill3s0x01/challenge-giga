import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MalePage } from './male.page';

describe('MalePage', () => {
 let component: MalePage;
 let fixture: ComponentFixture<MalePage>;

 beforeEach(waitForAsync(() => {
  TestBed.configureTestingModule({
   declarations: [MalePage],
   imports: [IonicModule.forRoot()],
  }).compileComponents();

  fixture = TestBed.createComponent(MalePage);
  component = fixture.componentInstance;
  fixture.detectChanges();
 }));

 it('should create', () => {
  expect(component).toBeTruthy();
 });
});
