import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PrimiryThreeComponent} from './primiry-three.component';

describe('PrimiryThreeComponent', () => {
  let component: PrimiryThreeComponent;
  let fixture: ComponentFixture<PrimiryThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrimiryThreeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimiryThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
