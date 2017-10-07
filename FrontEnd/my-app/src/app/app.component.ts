import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./css/nav.css']
})

export class AppComponent implements OnInit {
	title = 'Tour of Heroes';
	results: string[];

	constructor(private http: HttpClient) {};

	  ngOnInit(): void {
	  	// this.http.get('url').subscribe(data => {
	  	// 	this.results = data['results'];
	  	// });
	  };
}