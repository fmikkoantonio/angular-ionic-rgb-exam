import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  ModalController,
  ActionSheetController,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth.service';
import { ApiService } from 'src/app/core/services/api.service';
import { Social } from 'src/app/shared/models/social.model';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { SocialDetailsModal } from 'src/app/shared/components/modals/social-details/social-details.modal';
import { OtherSocialDetailsModal } from 'src/app/shared/components/modals/other-social-details/other-social-details.modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, LoadingComponent],
})
export class HomePage implements OnInit {
  authService = inject(AuthService);
  apiService = inject(ApiService);
  modalController = inject(ModalController);
  actionSheetController = inject(ActionSheetController);
  router = inject(Router);

  socials: Social[] = [];
  isLoading = true;
  loadingMessage = 'Fetching data...';

  ngOnInit() {
    this.apiService.getSocials().subscribe({
      next: (response) => {
        this.socials = response;
      },
      error: (error) => {
        console.error('Error fetching socials:', error);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  async openSocialModal(social: Social) {
    const modal = await this.modalController.create({
      component: SocialDetailsModal,
      componentProps: {
        social,
      },
    });

    await modal.present();
  }

  async openOtherSocialModal() {
    const modal = await this.modalController.create({
      component: OtherSocialDetailsModal,
    });

    await modal.present();
  }

  async showProfileActions() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Logout',
          role: 'destructive',
          cssClass: 'logout-button',
          handler: () => {
            this.loadingMessage = 'Logging out...';
            this.isLoading = true;
            setTimeout(() => {
              this.logout();
              this.isLoading = false;
            }, 3000);
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });

    await actionSheet.present();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login'], {
      replaceUrl: true,
    });
  }
}
