import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PrimiryOneComponent} from './primiry-one.component';

describe('PrimiryOneComponent', () => {
  let component: PrimiryOneComponent;
  let fixture: ComponentFixture<PrimiryOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrimiryOneComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimiryOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
