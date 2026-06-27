import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialDetailsModal } from './social-details.modal';

describe('SocialDetailsModal', () => {
  let component: SocialDetailsModal;
  let fixture: ComponentFixture<SocialDetailsModal>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialDetailsModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
