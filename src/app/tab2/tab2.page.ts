import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  records: any[] = [];
  msgFromPage: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private dataService: DataService
  ) {
    this.http.get<any[]>('assets/data/ontario.json').subscribe(data => {
      this.records = data;
    });

    this.dataService.currentMessage.subscribe(msg => {
      this.msgFromPage = msg;
    });
  }

  viewDetail(record: any) {
    this.router.navigate(['/covid-detail'], { state: record });
  }
}
