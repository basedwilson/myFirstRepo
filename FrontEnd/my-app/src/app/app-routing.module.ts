import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent }   from './scripts/components/dashboard.component';
import { HeroesComponent }      from './scripts/components/heroes.component';
import { HeroDetailComponent }  from './scripts/components/hero-detail.component';
import { LoginComponent } 		from './scripts/components/login.component';
import { EventsComponent }		from './scripts/components/events.component';
import { UserComponent } from './scripts/components/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'login', 		component: LoginComponent },
  { path: 'events',		component: EventsComponent },
  { path: 'user',		component: UserComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}