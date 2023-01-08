import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, mergeAll, toArray } from 'rxjs/operators';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }

  // gets the Skills from the assets/json/projects.json file
  getSkills(featured?: boolean): Observable<Skill[]> {
    let skills$ = this.http.get<Skill[]>('assets/json/skills.json');

    if (featured) {
      return skills$.pipe(
        mergeAll(),
        filter(skill => skill.featured || false),
        toArray()
      );
    }

    return skills$;
  }

}
