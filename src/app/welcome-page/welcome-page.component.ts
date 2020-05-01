import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(private router : Router) { }

  userlogin(){
    this.router.navigate(['userlogin'])
  }

  adminlogin(): void{
    this.router.navigate(['adminlogin'])
  }

  ngOnInit(): void {
  }

}
