import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'hero-detail',
	templateUrl: '../../html/hero-detail.component.html',
	styleUrls: ['../../css/hero-detail.component.css', '../../css/button.css']
})

export class HeroDetailComponent implements OnInit {
	@Input() hero: Hero;

	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
	) {}

	ngOnInit(): void {
	  this.route.paramMap
	    .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
	    .subscribe(hero => this.hero = hero);
	}

	goBack(): void {
		this.location.back();
	}
}