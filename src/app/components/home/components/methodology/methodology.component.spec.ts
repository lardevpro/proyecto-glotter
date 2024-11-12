import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetholodogyComponent } from './methodology.component';

describe('MetholodogyComponent', () => {
  let component: MetholodogyComponent;
  let fixture: ComponentFixture<MetholodogyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetholodogyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetholodogyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
