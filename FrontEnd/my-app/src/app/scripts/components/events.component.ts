import { Component, Input, OnInit } from '@angular/core';

import { Event } from '../models/event';

@Component({
	selector: 'events',
	templateUrl: '../../html/events.component.html'
})

export class EventsComponent {
	@Input() events: Event[];

	constructor() {};

	ngOnInit(): void {
		this.events = [
			{ EventId: 1, CalendarId: 1, StartTime: new Date(2017, 1, 1), Name: "frist", Description: "one" },
			{ EventId: 2, CalendarId: 1, StartTime: new Date(2017, 2, 1), Name: "second", Description: "two" },
			{ EventId: 3, CalendarId: 1, StartTime: new Date(2017, 3, 1), Name: "third", Description: "three" }
		]
	}

}