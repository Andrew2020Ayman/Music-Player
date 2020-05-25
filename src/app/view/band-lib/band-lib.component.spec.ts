import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandLibComponent } from './band-lib.component';

describe('BandLibComponent', () => {
  let component: BandLibComponent;
  let fixture: ComponentFixture<BandLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
