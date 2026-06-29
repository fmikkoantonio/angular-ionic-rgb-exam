import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon,
  ModalController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { Social } from 'src/app/shared/models/social.model';

@Component({
  selector: 'app-social-details',
  templateUrl: './social-details.modal.html',
  styleUrls: ['./social-details.modal.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonButtons,
    IonIcon,
    CommonModule,
    FormsModule,
  ],
})
export class SocialDetailsModal {
  @Input() social!: Social;

  modalController = inject(ModalController);

  constructor() {
    addIcons({ arrowBack });
  }

  closeModal() {
    this.modalController.dismiss();
  }

  getColors(): string {
    const name = this.social?.name.toLowerCase() || '';
    if (name.includes('youtube')) {
      return '#FF0000';
    } else if (name.includes('spotify')) {
      return '#1DB954';
    } else if (name.includes('facebook')) {
      return '#1877F2';
    }
    return '#3880ff'; // Default Ionic color
  }
}
