import {Injectable} from '@angular/core';

import {Hero} from './hero';
import {Http} from '@angular/http';

@Injectable()
export class HeroService {
  herosUrl = 'http://localhost:2403/heroes';

  constructor(private http: Http) {
  }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  // 承诺
  getHeroes(): Promise<Hero[]> {
    // return Promise.resolve(HEROES)
    return this.http
      .get(this.herosUrl)
      .toPromise()
      .then(rep => rep.json() as Hero[])
      .catch();
  }

  // 更新 Update
  update(hero: Hero): Promise<Hero> {
    return this.http.put(`${this.herosUrl}/${hero.id}`, hero)
      .toPromise()
      .then(rep => rep.json() as Hero)
      .catch();
  }

  // 添加 Add
  create(mNo: string, mName: string): Promise<Hero> {
    return this.http.post(this.herosUrl, {no: mNo, name: mName})
      .toPromise()
      .then(rep => rep.json() as Hero)
      .catch();
  }

  // 删除 Delete
  delete(id: string): Promise<void> {
    return this.http.delete(`${this.herosUrl}/${id}`)
      .toPromise()
      .then(() => null)
      .catch();
  }

  // 模拟网络延迟
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: string): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

}
