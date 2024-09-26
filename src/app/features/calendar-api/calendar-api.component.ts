import { Component } from '@angular/core'
import { FullCalendarModule } from '@fullcalendar/angular'
import { CalendarOptions } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import { DialogModule } from 'primeng/dialog'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'

@Component({
    selector: 'app-calendar-api',
    standalone: true,
    imports: [FullCalendarModule, DialogModule, ButtonModule, InputTextModule],
    templateUrl: './calendar-api.component.html',
    styleUrl: './calendar-api.component.scss',
})
export class CalendarApiComponent {
    visible: boolean = false

    calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        plugins: [dayGridPlugin],
    }
}
