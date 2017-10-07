import { Component, OnInit } from '@angular/core';

import { Hero } from './models/hero';
import { HeroService } from './services/hero.service';

@Component({
	selector: 'my-dashbaord',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
	heroes: Hero[] = [];

	constructor(private heroService: HeroService) {}

	ngOnInit(): void {
		this.heroService.getHeroes()
			.then(heroes => this.heroes = heroes.slice(1, 5));
	}
}