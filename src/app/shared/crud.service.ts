import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';

export class CrudService<T> {
  apiPath: string;
  http: HttpClient;
  dataChanged: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(http: HttpClient, apiPath: string) {
    this.apiPath = apiPath;
    this.http = http;
  }

  create(item: T): Observable<object> {
    return this.http.post(environment.api + this.apiPath, item);
  }

  readAll(): Observable<T[]> {
    return this.http.get<T[]>(environment.api + this.apiPath);
  }

  readById(id: number): Observable<T> {
    return this.http.get<T>(environment.api + this.apiPath + id);
  }

  update(item: T, id: number): Observable<object> {
    return this.http.put(environment.api + this.apiPath + id, item);
  }

  destroy(id: number): Observable<object> {
    return this.http.delete(environment.api + this.apiPath + id);
  }
}
