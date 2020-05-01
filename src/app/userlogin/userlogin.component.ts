import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  username : String;
  password : String;
  errorMessage: String ="Invelid Credential";
  invelid: boolean=false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(): void{   
    console.log(this.username);
    console.log(this.password);

    this.router.navigate(['userdashboard']);
  }

}
