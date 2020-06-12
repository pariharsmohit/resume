import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  skills: [];

  ngOnInit(): void {
    this.skills = this.httpService.getResumeData() && this.httpService.getResumeData().skills;
  }

}
