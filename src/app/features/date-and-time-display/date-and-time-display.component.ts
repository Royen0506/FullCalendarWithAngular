import { Component } from '@angular/core'
import { AccordionModule } from 'primeng/accordion'
import { FullCalendarModule } from '@fullcalendar/angular'
import { CalendarOptions, EventClickArg } from '@fullcalendar/core/index.js'
import dayGridPlugin from '@fullcalendar/daygrid'
import { DialogModule } from 'primeng/dialog'
import interactionPlugin from '@fullcalendar/interaction'

@Component({
    selector: 'app-date-and-time-display',
    standalone: true,
    imports: [AccordionModule, FullCalendarModule, DialogModule],
    templateUrl: './date-and-time-display.component.html',
    styleUrl: './date-and-time-display.component.scss',
})
export class DateAndTimeDisplayComponent {
    visible: boolean = false
    // 日期相關的顯示
    dayGridViewOptions: CalendarOptions = {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',

        // 預設行事曆要顯示的月份日期
        // initialDate: '2024-08-10',

        // 設定行事曆是否顯示六、日於畫面上，預設為true
        // weekends: false,

        // 設定週內要排除顯示哪幾天
        // hiddenDays: [2, 4],

        // 是否顯示行事曆標題，例：「Tue、Fri」，預設為true
        // dayHeaders: false,

        // 行事曆標題的顯示格式，相關設定請參考https://fullcalendar.io/docs/view-specific-options
        // dayHeaderFormat: {
        //     weekday: 'short',
        //     month: '2-digit',
        //     day: 'numeric',
        //     omitCommas: true,
        // },

        // 設定是否在每週的第一天上顯示為第幾週，預設為false
        weekNumbers: true,

        // 設定週數顯示的前綴字，預設為W
        // weekText: '週',

        // 週數顯示的格式
        weekNumberFormat: {
            week: 'numeric',
        },
    }

    // 連結點擊&日期點擊
    dateLinkOptions: CalendarOptions = {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',

        // 開啟日期連結
        navLinks: true,

        // 設定點擊日期連結時的事件
        navLinkDayClick: (date, jsEvent) => {
            console.log(date)
            this.visible = true
        },

        selectable: true,
        dateClick: () => {
            this.visible = true
        },
    }
}
