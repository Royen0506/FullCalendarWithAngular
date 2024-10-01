import { Component } from '@angular/core'
import { AccordionModule } from 'primeng/accordion'
import { FullCalendarModule } from '@fullcalendar/angular'
import { CalendarOptions } from '@fullcalendar/core/index.js'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import allLocales from '@fullcalendar/core/locales-all'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'

@Component({
    selector: 'app-international',
    standalone: true,
    imports: [AccordionModule, FullCalendarModule],
    templateUrl: './international.component.html',
    styleUrl: './international.component.scss',
})
export class InternationalComponent {
    calendarOptions: CalendarOptions = {
        plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        },
        locales: allLocales,
        locale: 'zh-tw',
        // 語言選項設定
        // en: 英文
        // zh-tw: 繁體中文
        // zh-cn: 簡體中文
        // fr: 法文
        // de: 德文
        // es: 西班牙文
        // ja: 日文
        // ko: 韓文
        // it: 意大利文
        // pt: 葡萄牙文
    }
}
