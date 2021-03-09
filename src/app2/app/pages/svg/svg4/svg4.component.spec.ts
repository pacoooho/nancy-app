import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Svg } from './svg4.component';

describe('ProgressComponent', () => {
  let component: Svg;
  let fixture: ComponentFixture<Svg>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Svg ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Svg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
