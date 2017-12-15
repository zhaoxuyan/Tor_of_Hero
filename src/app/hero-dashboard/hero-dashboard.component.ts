import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-dashboard',
  templateUrl: './hero-dashboard.component.html',
  styleUrls: ['./hero-dashboard.component.css']
})
export class HeroDashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    // this.heroService.getHeroes().then(HEROS => this.heroes = HEROS.slice(1, 5));
    this.getTopHeros();
  }

  getTopHeros(): void {
    this.heroService.getHeroes().then(heros => this.heroes = heros.slice(1, 5));
  }

}
