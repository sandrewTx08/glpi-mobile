import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  IonAccordion,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonTextarea,
} from '@ionic/angular/standalone';
import { interval, Observable, tap } from 'rxjs';
import { TicketService } from 'src/ticket.service';

@Component({
  selector: 'app-ticket-accordion',
  templateUrl: './ticket-accordion.component.html',
  styleUrls: ['./ticket-accordion.component.scss'],
  imports: [
    CommonModule,
    IonLabel,
    IonItem,
    IonAccordion,
    IonButton,
    IonTextarea,
    IonList,
    IonInput,
  ],
  standalone: true,
})
export class TicketAccordionComponent implements OnInit {
  @Input() ticketTask: any;

  ticketTasks$!: Observable<any>;

  constructor(private ticketService: TicketService) {}

  start(ticketTask: any) {
    ticketTask.actionTime ||= 0;
    ticketTask.stopWatch = interval(1000)
      .pipe(
        tap(() => {
          ++ticketTask.actionTime;
          this.updateTicketTask(ticketTask.id, {
            actionTime: ticketTask.actionTime,
          });
        })
      )
      .subscribe();
  }

  stop(ticketTask: any) {
    ticketTask.stopWatch.unsubscribe();
  }

  updateTicketTask(id: number, dto: any) {
    this.ticketService.updateTicketTask(id, dto).subscribe();
  }

  createTicketTask() {
    this.ticketService
      .createTicketTask(this.ticketTask.id)
      .pipe(tap(() => this.setTicketTask()))
      .subscribe();
  }

  setTicketTask() {
    this.ticketTasks$ = this.ticketService.findManyTicketTaskByTicketId(this.ticketTask.id);
  }

  ngOnInit(): void {
    this.setTicketTask();
  }
}
