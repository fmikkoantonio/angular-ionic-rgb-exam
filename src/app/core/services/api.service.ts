import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Social } from 'src/app/shared/models/social.model';
import { User } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private httpClient = inject(HttpClient);

  baseUrl: string = environment.apiUrl;

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      CLIENT_ID: 'rgbexam',
    });
  }

  login(userName: string, otp: string) {
    const url = `${this.baseUrl}/login`;
    const body = { userName, otp };
    return this.httpClient.post<User>(url, body, {
      headers: this.getHeaders(),
    });
  }

  getSocials() {
    const url = `${this.baseUrl}/socials`;
    return this.httpClient.get<Social[]>(url, { headers: this.getHeaders() });
  }
}
