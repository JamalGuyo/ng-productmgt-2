import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  headTitle: string = 'Demo  app';
  imgMargin: number = 10;
  imgWidth: number = 350;
  constructor() {}

  ngOnInit() {}
}
