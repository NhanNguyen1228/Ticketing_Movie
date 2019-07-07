import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { BookingTicketModule } from './booking-ticket/booking-ticket.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HeaderModule, FooterModule, BookingTicketModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
