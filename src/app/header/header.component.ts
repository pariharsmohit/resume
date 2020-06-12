import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private httpService: HttpService) { }
  
  resume: any;

  ngOnInit(): void {
    this.resume = this.httpService.getResumeData();
  }

}
