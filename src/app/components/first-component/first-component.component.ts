import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Celio';
  age: number = 28;
  job: string = 'Dev'
  constructor() { }

  ngOnInit(): void {
  }

}
