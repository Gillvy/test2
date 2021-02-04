import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  title = 'test2';
  term;
  datas;
  errorMessage;

  ngOnInit() {
    this.http.get<any>('https://api.publicapis.org/categories').subscribe({
      next: (data) => {
        this.datas = data;
        console.log(this.datas);
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
  }
}
