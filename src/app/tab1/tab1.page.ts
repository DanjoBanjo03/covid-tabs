import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(private router: Router) {}

  viewOntarioStatus() {
    const statusData = {
      totalCases: 266363,
      resolved: 240494,
      deaths: 6145,
      hospitalized: 1273,
      icu: 353,
      ventilator: 216,
      date: "2021-01-26",
      previous_day_doses: 9707,
      total_doses_administered: 295817,
      total_doses_in_fully_vaccinated: 83285,
      total_individuals_fully_vaccinated: 41643
    };

    this.router.navigate(['/covid-detail'], { state: statusData });
  }
}
