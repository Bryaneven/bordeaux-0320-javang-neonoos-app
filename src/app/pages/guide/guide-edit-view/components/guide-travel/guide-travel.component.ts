import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'neo-guide-travel',
  templateUrl: './guide-travel.component.html',
  styleUrls: ['./guide-travel.component.scss']
})
export class GuideTravelComponent implements OnInit {

  trips: any[] = [
    {id: 1, country: "Maroc"},
    {id: 2, country: "France"}
  ]

  /** toggle start discover **/

  // step = 0;

  // setStep(index: number) {
  //   this.step = index;
  // }

  // nextStep() {
  //   this.step++;
  // }

  // prevStep() {
  //   this.step--;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
