import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuatemalaPartnershipComponent } from './guatemala-partnership.component';

describe('GuatemalaPartnershipComponent', () => {
  let component: GuatemalaPartnershipComponent;
  let fixture: ComponentFixture<GuatemalaPartnershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuatemalaPartnershipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuatemalaPartnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
