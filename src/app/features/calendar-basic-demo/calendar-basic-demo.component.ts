import { Component } from '@angular/core'
import { FullCalendarModule } from '@fullcalendar/angular'
import { CalendarOptions } from '@fullcalendar/core/index.js'
import dayGridPlugin from '@fullcalendar/daygrid'

@Component({
    selector: 'app-calendar-basic-demo',
    standalone: true,
    imports: [FullCalendarModule],
    templateUrl: './calendar-basic-demo.component.html',
    styleUrl: './calendar-basic-demo.component.scss',
})
export class CalendarBasicDemoComponent {
    // 最基礎的設置
    calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        plugins: [dayGridPlugin],
    }
}
