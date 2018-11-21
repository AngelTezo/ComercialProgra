import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JugadorService {

  constructor(private _http: Http) { }

  readJugadores(): Observable<any> {
    return this._http
        .get('http://localhost/api/jugador/read.php')
        .pipe(map((res: Response) => res.json()));
  }

  createJugador(product): Observable<any> {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(
        'http://localhost/api/jugador/create.php',
        product,
        options
    ).pipe(map((res: Response) => res.json()));
}

updateJugador(product): Observable<any> {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(
        'http://localhost/api/jugador/update.php',
        product,
        options
    ).pipe(map((res: Response) => res.json()));
}

deleteJugador(product): Observable<any> {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(
        'http://localhost/api/jugador/delete.php',
        product,
        options
    ).pipe(map((res: Response) => res.json()));
}

}
