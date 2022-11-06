/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SplashPage } from './splash-page';

describe('SplashPageComponent', () => {
  let component: SplashPage;
  let fixture: ComponentFixture<SplashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SplashPage],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
