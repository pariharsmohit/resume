import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  resumeDataObservable = new BehaviorSubject({});
  constructor(private httpClient: HttpClient) { }

  getResume() {
    return this.httpClient.get('https://mohitsparihar.github.io/assets/resume.json')
      .subscribe(data => {
        this.resumeDataObservable.next(data);
      });
  }

  getResumeData() {
    return this.resumeDataObservable.asObservable();
  }
}