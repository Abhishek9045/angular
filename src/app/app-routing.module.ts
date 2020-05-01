import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './register/register.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { TicketlistComponent } from './ticketlist/ticketlist.component';


const routes: Routes = [
  {path: "", component:WelcomePageComponent},
  {path:'userlogin', component:UserloginComponent},
  {path:'adminlogin', component:AdminloginComponent},
  {path:'register', component:RegisterComponent},
  {path:'userdashboard', component:UserdashboardComponent},
  {path: 'admindashboard', component:AdmindashboardComponent},
  {path: 'ticketlist', component:TicketlistComponent},

  // Always put error at the end vrna y or components ko chlne nhi dega
  {path: "**", component: ErrorComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
