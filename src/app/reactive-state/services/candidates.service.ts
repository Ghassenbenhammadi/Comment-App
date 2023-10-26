import { Candidate } from './../models/candidate.model';
import { Observable, delay, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  constructor(
    private http: HttpClient
  ) { }
    private _loading$ = new BehaviorSubject<boolean>(false);

    get loading$():Observable<boolean> {
      return this._loading$.asObservable();
    }

    private _candidates$ = new  BehaviorSubject<Candidate[]>([]);
    get candidates$():Observable<Candidate[]> {
      return this._candidates$.asObservable();
    }
    private lastCandidatesLoad = 0;

    private setLoadingStatus(loading: boolean) {
      this._loading$.next(loading);
    }
    getCandidatesFromServer() {
      if(Date.now() - this.lastCandidatesLoad <= 300000 ) {
        return;
      }
      this.setLoadingStatus(true);
      this.http.get<Candidate[]>(`${environment.apiUrl}/candidates`).pipe(
        delay(1000),
        tap(candidates => {
          this.lastCandidatesLoad = Date.now();
          this._candidates$.next(candidates);
          this.setLoadingStatus(false);
        })
      ).subscribe();
    }

    getCandidateById(id: number): Observable<Candidate> {
      
      if(!this.lastCandidatesLoad){
        this.getCandidatesFromServer();
      }
      return this.candidates$.pipe(
          map(candidates => candidates.filter(candidate => candidate.id === id)[0])
      );
  }

}
