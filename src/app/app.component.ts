import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonApp,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { AuthenticationService } from 'src/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp,
    IonRouterOutlet,
    IonHeader,
    IonToolbar,
    IonMenu,
    IonButtons,
    IonTitle,
    IonContent,
    IonMenuButton,
    RouterLink,
    CommonModule,
  ],
})
export class AppComponent {
  constructor(public authenticationService: AuthenticationService) {}
}
