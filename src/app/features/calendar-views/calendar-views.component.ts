import { Component } from '@angular/core'
import { FullCalendarModule } from '@fullcalendar/angular'
import { CalendarOptions } from '@fullcalendar/core/index.js'

import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'

import { TabViewModule } from 'primeng/tabview'
import { AccordionModule } from 'primeng/accordion'

@Component({
    selector: 'app-calendar-views',
    standalone: true,
    imports: [FullCalendarModule, TabViewModule, AccordionModule],
    templateUrl: './calendar-views.component.html',
    styleUrl: './calendar-views.component.scss',
})
export class CalendarViewsComponent {
    visible: boolean = false

    // 月曆型
    monthCalendarOptions: CalendarOptions = {
        // 基礎設置
        initialView: 'dayGridMonth',
        plugins: [dayGridPlugin],

        // 月曆中單月要顯示的週數，如果是true將永遠是6週；如果是false將有可能會是4、5、6週，具體取決於月份
        // fixedWeekCount: false,

        // 是否顯示上個月或下個月的日期
        // showNonCurrentDates: true,
    }

    // 時間格線型
    timeGridCalendarOptions: CalendarOptions = {
        // 寫入樣式
        initialView: 'timeGridWeek',
        plugins: [timeGridPlugin],

        // 自定義行事曆顯示的天數
        // views: {
        //     // Key名稱帶入initialView內
        //     timeGridFourDay: {
        //         type: 'timeGrid',
        //         duration: { days: 4 },
        //     },
        // },

        // headerToolbar: {
        //     left: 'prev,next',
        //     center: 'title',
        //     right: 'timeGridWeek,timeGridDay',
        // },

        // 行事曆內的行程最小的高度，預設為15
        // eventMinHeight: 50,

        // 當行程內容較多時可用此屬性控制行程顯示比例，預設為30
        // eventShortHeight: 60,

        // 當行程間時間重疊時控制是否在視覺上重疊，預設為true
        // slotEventOverlap: true,

        // 在行事曆的上方是否顯示"全天"的行程，預設為true
        // allDaySlot: false,
    }

    // 清單型
    listCalendarOptions: CalendarOptions = {
        // 寫入樣式
        plugins: [listPlugin],
        initialView: 'listWeek',

        // 當行程完成載入時呼叫
        eventDidMount: (info) => {
            if (info.event.extendedProps['status'] === 'done') {
                // 設定符合條件的行程背景色為粉色
                info.el.style.backgroundColor = 'pink'

                // var dotEl = info.el.getElementsByClassName(
                //     'fc-event-dot'
                // )[0] as HTMLElement
                // if (dotEl) {
                //     dotEl.style.backgroundColor = 'white'
                // }
            }
        },

        // 當日如沒有任何行程時呼叫
        noEventsDidMount: (info) => {
            console.log('沒有行程')
        },

        // 當日如沒有行程時畫面顯示的內容
        noEventsContent: '此日無任何行程',

        events: [
            {
                title: 'work',
                start: '2024-09-25',
                extendedProps: {
                    status: 'done',
                },
                backgroundColor: 'red',
            },
            {
                title: 'Meeting',
                start: '2024-09-27',
                extendedProps: {
                    status: 'done',
                },
            },
            {
                title: 'Birthday Party',
                start: '2024-09-28T14:30:00',
                end: '2024-09-28T20:30:00',
                backgroundColor: 'green',
                borderColor: 'green',
            },
        ],
    }
}
