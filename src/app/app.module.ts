import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroService} from './hero.service';
import {HeroListComponent} from './hero-list/hero-list.component';
import {RouterModule} from '@angular/router';
import { HeroDashboardComponent } from './hero-dashboard/hero-dashboard.component';
import {AppRoutingModule} from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent,
    HeroDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    // RouterModule.forRoot([
    //   {
    //     path: 'herolist',
    //     component: HeroListComponent
    //   },
    //   {
    //     path: 'dashboard',
    //     component: HeroDashboardComponent
    //   },
    //   {
    //     // 添加根路由
    //     path: '',
    //     redirectTo: '/heros',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: 'detail/:id',
    //     component: HeroDetailComponent
    //   },
    // ])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
