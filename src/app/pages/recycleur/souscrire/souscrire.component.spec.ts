/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SouscrireComponent } from './souscrire.component';

describe('SouscrireComponent', () => {
  let component: SouscrireComponent;
  let fixture: ComponentFixture<SouscrireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouscrireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouscrireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
