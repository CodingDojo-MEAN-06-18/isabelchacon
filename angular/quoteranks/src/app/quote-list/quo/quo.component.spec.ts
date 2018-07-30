import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoComponent } from './quo.component';

describe('QuoComponent', () => {
  let component: QuoComponent;
  let fixture: ComponentFixture<QuoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
