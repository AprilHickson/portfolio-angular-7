/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WordScramblerComponent } from './word-scrambler.component';

describe('WordScramblerComponent', () => {
  let component: WordScramblerComponent;
  let fixture: ComponentFixture<WordScramblerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordScramblerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordScramblerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
