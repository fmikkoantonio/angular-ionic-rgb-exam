import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  ModalController,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  arrowBack,
  chevronBackOutline,
  chevronForwardOutline,
} from 'ionicons/icons';

interface CarouselItem {
  name: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-other-social-details',
  templateUrl: './other-social-details.modal.html',
  styleUrls: ['./other-social-details.modal.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonButtons,
    CommonModule,
    FormsModule,
    IonIcon,
  ],
})
export class OtherSocialDetailsModal implements OnInit, OnDestroy {
  modalController = inject(ModalController);

  carouselItems: CarouselItem[] = [
    {
      name: 'Apple',
      image: 'assets/images/apple.png',
      link: 'https://www.apple.com',
    },
    {
      name: 'Samsung',
      image: 'assets/images/samsung.png',
      link: 'https://www.samsung.com',
    },
    {
      name: 'Windows',
      image: 'assets/images/windows.png',
      link: 'https://www.microsoft.com/windows',
    },
  ];

  currentIndex = 0;
  private autoplayInterval: any;

  constructor() {
    addIcons({ arrowBack, chevronBackOutline, chevronForwardOutline });
  }

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.next();
    }, 3000); // Change every 3 seconds
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
