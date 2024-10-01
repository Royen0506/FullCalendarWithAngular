import { Component } from '@angular/core'
import { AccordionModule } from 'primeng/accordion'
import { FullCalendarModule } from '@fullcalendar/angular'
import { CalendarOptions } from '@fullcalendar/core/index.js'
import dayGridPlugin from '@fullcalendar/daygrid'
import { DialogModule } from 'primeng/dialog'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'

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
        hiddenDays: [2, 4],

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
        // 日期的點擊需要引入interactionPlugin
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',

        // 日期連結的點擊需要設定selectable為true
        selectable: true,

        // 開啟日期連結
        navLinks: true,

        // 設定點擊日期連結時的事件
        navLinkDayClick: (info, jsEvent) => {
            console.log(info)
            this.visible = true
        },

        // 設定點擊日期事件
        dateClick: (info) => {
            console.log(info)
            this.visible = true
        },

        // select: (info) => {
        //     console.log('select', info)
        // },
    }

    // 現在時間的精確標記
    timeGridView: CalendarOptions = {
        plugins: [timeGridPlugin],
        initialView: 'timeGridWeek',

        // 是否於行事曆上標記當前日期時間的精確標，預設為false
        nowIndicator: true,

        // 設定時間格式
        slotLabelFormat: {
            // 這裡可以調整時間格式
            hour: '2-digit',
            minute: '2-digit',
        },
    }

    // 工作時間設定
    businessHoursView: CalendarOptions = {
        plugins: [timeGridPlugin],
        initialView: 'timeGridWeek',

        // 設定工作時間強調行事曆上的某些時段
        businessHours: {
            // 一週裡要設定的天數
            daysOfWeek: [1, 2, 3, 4],

            // 開始時間
            startTime: '10:00',

            // 結束時間
            endTime: '18:00',
        },
    }
}
