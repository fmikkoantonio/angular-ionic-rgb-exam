import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import {
  IonContent,
  IonInput,
  IonButton,
  IonModal,
  AlertController,
} from '@ionic/angular/standalone';
import { ApiService } from 'src/app/core/services/api.service';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { Router } from '@angular/router';
import { AuthService, User } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonContent,
    IonInput,
    IonButton,
    IonModal,
    LoadingComponent,
  ],
})
export class LoginPage {
  private fb = inject(FormBuilder);
  private apiService = inject(ApiService);
  private alertController = inject(AlertController);
  private router = inject(Router);
  private authService = inject(AuthService);

  @ViewChild('pinInput') pinInput!: IonInput;

  isPinModalOpen = false;
  isLoading = false;

  loginForm = this.fb.group({
    username: [
      '',
      [
        Validators.required,
        Validators.maxLength(24),
        Validators.pattern(/^[a-zA-Z0-9]+$/),
      ],
    ],

    pin: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
  });

  get username() {
    return this.loginForm.get('username') as FormControl;
  }

  get pin() {
    return this.loginForm.get('pin') as FormControl;
  }

  getUsernameErrorMessage() {
    if (this.username.hasError('required')) {
      return 'Please enter your username';
    }

    if (this.username.hasError('maxlength')) {
      return 'Must not exceed 24 characters';
    }

    if (this.username.hasError('pattern')) {
      return 'Username must be alphanumeric';
    }

    return '';
  }

  async openPinModal() {
    this.pin.reset();
    this.isPinModalOpen = true;

    setTimeout(async () => {
      await this.pinInput.setFocus();
    }, 200);
  }

  closePinModal() {
    this.isPinModalOpen = false;
  }

  getPinDisplay(): string[] {
    const value = this.pin.value ?? '';

    return Array.from({ length: 6 }, (_, i) => value[i] ?? '-');
  }

  submitLogin() {
    if (this.loginForm.invalid) return;

    const username = this.username.value ?? '';
    const pin = this.pin.value ?? '';

    this.isLoading = true;
    this.closePinModal();

    this.apiService.login(username, pin).subscribe({
      next: (response) => {
        this.authService.setUser(response as User);
        this.isLoading = false;
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.isLoading = false;
        this.alertController
          .create({
            header: 'Error',
            message: 'Login Failed, please try again.',
            buttons: ['OK'],
          })
          .then((alert) => alert.present());
      },
    });
  }
}
