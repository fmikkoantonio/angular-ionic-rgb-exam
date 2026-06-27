import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtherSocialDetailsModal } from './other-social-details.modal';

describe('OtherSocialDetailsModal', () => {
  let component: OtherSocialDetailsModal;
  let fixture: ComponentFixture<OtherSocialDetailsModal>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherSocialDetailsModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
