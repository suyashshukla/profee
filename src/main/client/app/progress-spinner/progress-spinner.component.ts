import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html'
})
export class ProgressSpinnerComponent implements OnInit {

  color = 'accent';

  constructor() { }

  ngOnInit(): void {
  }

}
