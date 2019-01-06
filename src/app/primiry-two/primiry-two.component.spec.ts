import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PrimiryTwoComponent} from './primiry-two.component';

describe('PrimiryTwoComponent', () => {
  let component: PrimiryTwoComponent;
  let fixture: ComponentFixture<PrimiryTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrimiryTwoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimiryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
