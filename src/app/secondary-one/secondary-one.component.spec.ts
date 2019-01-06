import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SecondaryOneComponent} from './secondary-one.component';

describe('SecondaryOneComponent', () => {
  let component: SecondaryOneComponent;
  let fixture: ComponentFixture<SecondaryOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SecondaryOneComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
