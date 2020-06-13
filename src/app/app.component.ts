import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'resume';

    constructor(private httpService: HttpService) { }

    ngOnInit(): void {
        this.httpService.getResume()
    }
}
