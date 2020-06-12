import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  education: [];

  ngOnInit(): void {
    this.education = this.httpService.getResumeData() && this.httpService.getResumeData().education;
  }

}
