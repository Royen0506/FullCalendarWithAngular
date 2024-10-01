import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class CrudDemoService {
    constructor(private http: HttpClient) {}

    getEvents(): Observable<any> {
        let endpoint = `assets/events.json`
        return this.http.get<any>(endpoint)
    }
}
