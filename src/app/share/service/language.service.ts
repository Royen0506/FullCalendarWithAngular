import { Injectable } from '@angular/core'
import { ReplaySubject, Subject } from 'rxjs'

// 模擬多個頁面共用語系Service
@Injectable({
    providedIn: 'root',
})
export class LanguageService {
    private sessionItemSubject = new ReplaySubject<{
        title: string
        content: any
    }>()
    sessionItem$ = this.sessionItemSubject.asObservable()

    constructor() {}

    setSessionItem(title: string, content: any): void {
        const contentJson = JSON.stringify(content)
        sessionStorage.setItem(title, contentJson)
        this.sessionItemSubject.next({ title, content }) // 發出事件通知
    }
}
