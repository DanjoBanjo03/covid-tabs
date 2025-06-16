import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-covid-detail',
  templateUrl: './covid-detail.page.html',
  styleUrls: ['./covid-detail.page.scss'],
  standalone: false,
})
export class CovidDetailPage implements OnInit {
  record: any;
  messageText: string = '';

  constructor(private router: Router, private dataService: DataService) {
    const nav = this.router.getCurrentNavigation();
    this.record = nav?.extras.state;
  }

  ngOnInit() {

  }

  sendMessage() {
    this.dataService.setMessage(this.messageText);
    this.messageText = '';
  }
}
