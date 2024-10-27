import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private httpClient: HttpClient) {}

  findAllTickets() {
    return this.httpClient.get<any>(`api/tickets`);
  }

  findManyTicketTaskByTicketId(id: number) {
    return this.httpClient.get<any>(`api/ticket-task/ticket/${id}`);
  }

  createTicketTask(id: any) {
    return this.httpClient.post<any>(`api/ticket-task/ticket/${id}`, null);
  }

  updateTicketTask(id: any, dto: any) {
    return this.httpClient.patch<any>(`api/ticket-task/${id}`, dto);
  }
}
