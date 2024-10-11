import { Injectable } from '@angular/core'
import { FullCalendarComponent } from '@fullcalendar/angular'
import { CalendarApi, CalendarOptions } from '@fullcalendar/core/index.js'

@Injectable({
    providedIn: 'root',
})
export class CalendarService {
    constructor() {}

    reRenderCalendar(
        calendar: FullCalendarComponent,
        calendarOption: CalendarOptions
    ) {
        const calendarApi: CalendarApi = calendar.getApi()
        calendarApi.removeAllEvents()
        if (calendarOption.events) {
            calendarApi.addEventSource(calendarOption.events)
        }
    }
}
