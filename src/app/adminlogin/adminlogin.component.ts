import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmindashboardComponent } from '../admindashboard/admindashboard.component';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})

 
export class AdminloginComponent implements OnInit {
  adminusername : String ="";
  adminpassword : String =""
  errorMessage: String ="Invelid Credential";
  invelid: boolean=false;

  user: String= 'abhishek.saxena@admin.com';
  pass: String= 'pass@nagarro';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  adminLogin(): void{

    if(this.adminusername===this.user && this.adminpassword ===this.pass)
    {
      this.router.navigate(['admindashboard']);
      this.invelid = false;
    }
    else{
      this.invelid = true;
    } 

  }
  
}
