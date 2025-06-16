import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ontario-status',
  templateUrl: './ontario-status.component.html',
  styleUrls: ['./ontario-status.component.scss'],
  standalone: false,
})
export class OntarioStatusComponent implements OnInit {

  constructor(private router: Router) {}

  viewOntarioStatus() {
  const statusData = {
    totalCases: 266363,
    resolved: 240494,
    deaths: 6145,
    hospitalized: 1273,
    icu: 353,
    ventilator: 216,
  };

  this.router.navigate(['/covid-detail'], { state: statusData });
  }

  ngOnInit() {}

}
