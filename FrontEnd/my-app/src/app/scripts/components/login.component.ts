import { Component, Input } from '@angular/core';
import { Router }			from '@angular/router';

@Component({
	selector: 'login',
	templateUrl: '../../html/login.component.html'
})

export class LoginComponent {

	constructor(private router: Router) {};

	login(userName: string, password: string): void {
		console.log(userName + ":" + password);
		this.router.navigate(['events']);
	}

	signUp(userName: string, phoneNumber:string, password: string): void {
		console.log(userName + ":" + password + ":" + phoneNumber);
		this.router.navigate(['events']);
	}
}