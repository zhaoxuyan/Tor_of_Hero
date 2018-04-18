import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  // 服务的依赖式注入
  constructor(private heroService: HeroService, private router: Router) {
  }

  // implements interface
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().then(HEROES => this.heroes = HEROES);
  }

  // 缓慢传入测试
  // getHeroes(): void {
  //   this.heroService.getHeroesSlowly().then(HEROES => this.heroes = HEROES);
  // }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  isSelected(i: Hero): boolean {
    return i === this.selectedHero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(no: string, name: string): void {
    name = name.trim();
    if (!name || !no) {
      return;
    }
    this.heroService.create(no, name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      });
  }
}
