import { LanguageService } from './../../share/service/language.service'
import { Component, ViewChild } from '@angular/core'
import {
    FullCalendarComponent,
    FullCalendarModule,
} from '@fullcalendar/angular'
import { CalendarApi, CalendarOptions } from '@fullcalendar/core/index.js'
import dayGridPlugin from '@fullcalendar/daygrid'
import { CrudDemoService } from './service/crud-demo.service'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import allLocales from '@fullcalendar/core/locales-all'
import { DropdownModule } from 'primeng/dropdown'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { calendarEvent } from './model/calendarEvent'
import { DynamicDialogModule } from 'primeng/dynamicdialog'
import { DialogService } from 'primeng/dynamicdialog'
import { CalendarEventDialogComponent } from '../../share/components/calendar-event-dialog/calendar-event-dialog.component'
import { CalendarService } from '../../share/service/calendar.service'

@Component({
    selector: 'app-crud-demo',
    standalone: true,
    imports: [
        FullCalendarModule,
        DropdownModule,
        FormsModule,
        ReactiveFormsModule,
        DynamicDialogModule,
    ],
    providers: [CrudDemoService, DialogService],

    templateUrl: './crud-demo.component.html',
    styleUrl: './crud-demo.component.scss',
})
export class CrudDemoComponent {
    @ViewChild('calendar') calendarComponent: FullCalendarComponent | undefined
    allEvents: calendarEvent[] = []

    // 行事曆設定
    calendarDemoOption: CalendarOptions = {
        initialView: 'dayGridMonth',
        plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
        locales: allLocales,
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        },
        aspectRatio: 2,
        editable: true,
        dayMaxEventRows: true,
        timeZone: 'local',
        events: [],
        eventClick: (info) => {
            const data = {
                title: info.event.title,
                id: info.event._def.publicId,
                start: info.event.start,
                end: info.event.end,
            }
            this.onOpenCalendarDialog('Edit', data)
        },

        dateClick: (info) => {
            this.onOpenCalendarDialog('Add', info.date)
        },
    }

    constructor(
        private crudDemoService: CrudDemoService,
        private languageService: LanguageService,
        private dialogService: DialogService,
        private calendarService: CalendarService
    ) {}

    ngOnInit(): void {
        const selectedLanguage = sessionStorage.getItem('selectedLanguage')
        if (selectedLanguage) {
            const parsedLanguage = JSON.parse(selectedLanguage)
            this.calendarDemoOption.locale = parsedLanguage.value
        }

        this.getAllEvents()
        this.subToLanguageChange()
    }

    // 模擬取得所有行程資料
    getAllEvents(): void {
        this.crudDemoService.getEvents().subscribe((res) => {
            this.allEvents = res
            this.calendarDemoOption.events = this.allEvents
        })
    }

    // 模擬訂閱語系變化的Observable
    subToLanguageChange(): void {
        this.languageService.sessionItem$.subscribe((res) => {
            this.calendarDemoOption.locale = res.content.value
        })
    }

    // 開啟Dialog執行新增、修改、刪除
    onOpenCalendarDialog(status: string, data?: any): void {
        let dialogConfig
        if (status === 'Edit') {
            dialogConfig = {
                header: '編輯行程',
                data: { ...data, status },
                modal: true,
                height: '75dvh',
            }
        } else {
            dialogConfig = {
                header: '新增行程',
                modal: true,
                data: { date: data, status },
                height: '75dvh',
            }
        }

        const ref = this.dialogService.open(
            CalendarEventDialogComponent,
            dialogConfig
        )

        ref.onClose.subscribe((res) => {
            if (!res) return

            // 刪除邏輯
            if (
                res.status === 'Delete' &&
                Array.isArray(this.calendarDemoOption.events) &&
                this.calendarComponent
            ) {
                const currentEventIndex =
                    this.calendarDemoOption.events.findIndex(
                        (item) => item.id === res.id
                    )
                this.calendarDemoOption.events.splice(currentEventIndex, 1)

                // 使用 FullCalendar API 重新渲染行程
                this.calendarService.reRenderCalendar(
                    this.calendarComponent,
                    this.calendarDemoOption
                )

                return
            }

            // 新增、編輯邏輯
            if (
                this.calendarComponent &&
                Array.isArray(this.calendarDemoOption.events)
            ) {
                if (status === 'Edit') {
                    const currentEventIndex =
                        this.calendarDemoOption.events.findIndex(
                            (item) => item.id === res.id
                        )
                    this.calendarDemoOption.events.splice(
                        currentEventIndex,
                        1,
                        res
                    )
                } else {
                    this.calendarDemoOption.events.push(res)
                }

                // 使用 FullCalendar API 重新渲染行程
                this.calendarService.reRenderCalendar(
                    this.calendarComponent,
                    this.calendarDemoOption
                )
            }
        })
    }
}
