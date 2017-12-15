import {Injectable} from '@angular/core';

import {Hero} from './hero';
import {HEROES} from './mock-hero';

@Injectable()
export class HeroService {

  constructor() {
  }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  // 承诺
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  // 模拟网络延迟
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

}
