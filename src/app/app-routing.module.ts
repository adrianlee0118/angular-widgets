import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DisplayTextComponent } from './display-text/display-text.component';
import { CounterComponent } from './counter/counter.component';
import { ClockComponent } from './clock/clock.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'display', component: DisplayTextComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'clock', component: ClockComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
