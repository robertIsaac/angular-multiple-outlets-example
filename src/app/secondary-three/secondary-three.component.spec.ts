import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SecondaryThreeComponent} from './secondary-three.component';

describe('SecondaryThreeComponent', () => {
  let component: SecondaryThreeComponent;
  let fixture: ComponentFixture<SecondaryThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SecondaryThreeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
