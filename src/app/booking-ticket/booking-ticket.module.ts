import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingTicketComponent } from './booking-ticket.component';
import { ListChairComponent } from './list-chair/list-chair.component';
import { ItemChairComponent } from './item-chair/item-chair.component';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [BookingTicketComponent, ListChairComponent, ItemChairComponent, BookingComponent],
  exports: [BookingTicketComponent],
  imports: [
    CommonModule
  ]
})
export class BookingTicketModule { }
