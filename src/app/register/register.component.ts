import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstname : String;
pattern: string | RegExp;

  lastname :String;

  constructor() { }

  ngOnInit(): void {
  }

}
