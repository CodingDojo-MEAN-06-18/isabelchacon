import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component0Component } from './component0.component';

describe('Component0Component', () => {
  let component: Component0Component;
  let fixture: ComponentFixture<Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
