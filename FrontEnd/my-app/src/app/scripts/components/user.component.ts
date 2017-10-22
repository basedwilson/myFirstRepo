import { Component, Input, OnInit } from '@angular/core';
import { Router }			from '@angular/router';

import { User } from '../models/User';

@Component({
	selector: 'user',
	templateUrl: '../../html/user.component.html'
})

export class UserComponent {
	@Input() user: User;

	constructor(private router: Router) {};

	ngOnInit(): void {
		this.user = {
			UserId: 1,
			UserName: "Ty",
			PhoneNumber: "12068536598",
			Password: "xxxx",
			IsAdmin: false
		};
	}

	save(): void {
		this.router.navigate(['events']);
	}
}