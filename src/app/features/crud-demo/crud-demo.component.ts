import { Component, SimpleChanges, ViewChild } from '@angular/core'
import { FullCalendarModule } from '@fullcalendar/angular'
import { CalendarOptions } from '@fullcalendar/core/index.js'
import dayGridPlugin from '@fullcalendar/daygrid'
import { CrudDemoService } from './service/crud-demo.service'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import allLocales from '@fullcalendar/core/locales-all'
import { DropdownModule } from 'primeng/dropdown'
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms'

@Component({
    selector: 'app-crud-demo',
    standalone: true,
    imports: [
        FullCalendarModule,
        DropdownModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [CrudDemoService],

    templateUrl: './crud-demo.component.html',
    styleUrl: './crud-demo.component.scss',
})
export class CrudDemoComponent {
    allEvents: any[] = []
    calendarDemoOption: CalendarOptions = {
        initialView: 'dayGridMonth',
        plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
        locales: allLocales,
        locale: 'zh-tw',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        },
        aspectRatio: 2,
        editable: true,
        dayMaxEventRows: true,
    }

    constructor(private crudDemoService: CrudDemoService) {}

    ngOnInit(): void {
        this.getAllEvents()
    }

    ngDoCheck(): void {
        const lang = sessionStorage.getItem('selectedLanguage')
        this.calendarDemoOption.locale = lang || 'en'
    }

    getAllEvents(): void {
        this.crudDemoService.getEvents().subscribe((res) => {
            this.allEvents = res
            this.calendarDemoOption.events = this.allEvents
        })
    }
}
