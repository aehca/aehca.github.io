import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurGuyInGuateComponent } from './our-guy-in-guate.component';

describe('OurGuyInGuateComponent', () => {
  let component: OurGuyInGuateComponent;
  let fixture: ComponentFixture<OurGuyInGuateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurGuyInGuateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurGuyInGuateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
