import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-personal-project',
  templateUrl: './personal-project.component.html',
  styleUrls: ['./personal-project.component.scss']
})
export class PersonalProjectComponent implements OnInit {

  constructor(private httpService: HttpService) { }

 personalProjects: [];

  ngOnInit(): void {
    this.personalProjects = this.httpService.getResumeData() && this.httpService.getResumeData().personalProjects;
  }

}
