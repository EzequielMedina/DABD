import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment ";
import { Injectable } from '@angular/core';
@Injectable()
export class BookProvider {
    private urlBase = environment.urlListBook;
    constructor(private http: HttpClient){}

    listBook(): Observable<any>{
        const url = this.urlBase + '/databook' ;
        const header = {"content-type": "application/json"};
        const body = JSON.stringify({})
        return this.http.get(url,{headers: header});
    }


}

