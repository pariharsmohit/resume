import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  projects: [];

  ngOnInit(): void {
    this.projects =  this.httpService.getResumeData() && this.httpService.getResumeData().projects;
  }

}
