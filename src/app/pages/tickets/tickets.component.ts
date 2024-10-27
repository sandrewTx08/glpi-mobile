import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular/standalone';
import { switchMap } from 'rxjs';
import { AuthenticationService } from 'src/authentication/authentication.service';
import { TicketService } from '../../../ticket.service';
import { TicketAccordionComponent } from '../../components/ticket-accordion/ticket-accordion.component';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  standalone: true,
  imports: [CommonModule, IonAccordionGroup, TicketAccordionComponent],
})
export class TicketsComponent {
  tasks$ = this.authenticationService.user$.pipe(
    switchMap(() => this.itemService.findAllTickets())
  );

  constructor(
    public itemService: TicketService,
    private authenticationService: AuthenticationService
  ) {}
}
