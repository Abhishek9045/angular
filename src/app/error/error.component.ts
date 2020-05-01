import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage:String="Some Error Occured! While loading the page";

  constructor() { }

  ngOnInit(): void {
  }

}
