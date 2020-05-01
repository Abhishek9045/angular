import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './register/register.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { TicketlistComponent } from './ticketlist/ticketlist.component';


@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    AdminloginComponent,
    WelcomePageComponent,
    ErrorComponent,
    RegisterComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    TicketlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
