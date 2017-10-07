import { Component, Input } from '@angular/core';

import { User } from '../models/User';

@Component({
	selector: 'login',
	templateUrl: '../../html/login.component.html'
})

export class LoginComponent {
	@Input() user: User;
	@Input() newUser: User;

	constructor() {};

	login(): void {

	}

	signUp(): void {
		
	}
}