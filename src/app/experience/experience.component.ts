import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  experience : [];

  ngOnInit(): void {
    this.experience = this.httpService.getResumeData() && this.httpService.getResumeData().experience;
  }

}
