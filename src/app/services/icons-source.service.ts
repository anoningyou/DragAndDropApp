import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, take } from 'rxjs';
import { IconDto } from '../dto/icon-dto';

@Injectable({
  providedIn: 'root'
})
export class IconsSourceService {

  constructor(private http: HttpClient) { }

  getIcons() : Observable<IconDto []> {
    return this.http.get('assets/data/icons.json').pipe(take(1), map((data) => {
      return data as IconDto [];
    }))
  }
}
