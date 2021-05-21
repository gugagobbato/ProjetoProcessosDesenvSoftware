import { HttpClient } from '@angular/common/http';
import { CovidModel } from '../models/covid.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class CovidService {

    constructor(public http: HttpClient) { }

    // Get
    getAll(): Observable<Array<CovidModel> | any> {
        let url = "https://sam2.caxias.rs.gov.br/sms/covid-monitoramento-leito-rest/list";

        return this.http
            .get(url)
            .pipe(map((res: any) => {
                return res as Array<CovidModel>;
            }), catchError((err: any) => {
                return err;
            }));
    }
}
