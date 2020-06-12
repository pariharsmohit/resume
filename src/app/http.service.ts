import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  resumeData: any;
  constructor(private httpClient: HttpClient) { }

  getResume() {
    return this.httpClient.get('https://mohitsparihar.github.io/assets/resume.json');
  }

  setResumeData(data) {
    this.resumeData = data;
  }

  getResumeData() {
    return this.resumeData;
  }
}