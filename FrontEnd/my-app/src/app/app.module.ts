import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HeroDetailComponent } from './scripts/components/hero-detail.component';
import { HeroesComponent } from './scripts/components/heroes.component';
import { HeroService } from './scripts/services/hero.service';
import { DashboardComponent } from './scripts/components/dashboard.component';
import { LoginComponent } from './scripts/components/login.component';
import { EventsComponent } from './scripts/components/events.component';
import { UserComponent } from './scripts/components/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    LoginComponent,
    EventsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
