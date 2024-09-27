import { Component } from '@angular/core'
import { FullCalendarModule } from '@fullcalendar/angular'
import { CalendarOptions } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
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
    sizeStatus: string = 'normal'
    calendarOptions: CalendarOptions = {
        // 基礎設置
        initialView: 'dayGridMonth',
        plugins: [dayGridPlugin],

        // 行事曆表頭工具列
        headerToolbar: {
            start: 'prevYear prev setHeight',
            center: 'title',
            end: 'today next nextYear myCustomButton',
        },

        // 行事曆底部工具列
        // footerToolbar: {
        //     start: 'prevYear prev',
        //     center: 'title',
        //     end: 'next nextYear',
        // },

        // 行事曆標題的顯示格式
        // titleFormat: {
        //     year: 'numeric',
        //     month: 'long',
        //     day: 'numeric',
        //     weekday: 'long',
        //     week: 'short',
        // },

        // 工具列按鈕顯示的內容，對應到headerToolbar的start、center、end內的值
        // buttonText: {
        //     prev: '上個月',
        //     nextYear: '下一年',
        //     today: '今天',
        // },

        // 自定義工具列按鈕
        customButtons: {
            myCustomButton: {
                text: '客製',
                click: () => {
                    this.visible = true
                },
            },

            // 自訂按鈕及點擊事件切換行事曆高度
            setHeight: {
                text: '切換大小',
                click: () => {
                    if (this.sizeStatus === 'normal') {
                        this.calendarOptions.height = 600
                        this.sizeStatus = 'big'
                    } else {
                        this.calendarOptions.height = 300
                        this.sizeStatus = 'normal'
                    }
                },
            },
        },

        // 行事曆高度(包含功能列)
        // height: 700,

        // 行事曆高度(不包含功能列)
        // contentHeight: 300,

        // 設置行事曆的寬高比，預設為1.35，*數字越大高度越小
        aspectRatio: 3,

        // 設定行事曆是否自動擴展，當日期內的事件數量多個時，在true的情況下高度會自動依據內容而擴增。
        // expandRows: true,

        // 是否依據瀏覽器視窗大小調整行事曆大小，預設為true
        // handleWindowResize: false,

        // 當瀏覽器視窗變動時行事曆延遲變動尺寸的時間，預設為100
        // windowResizeDelay: 1000,

        // 在行事曆過長需要捲動時控制行事曆的表頭是否固定於上方，預設為auto。
        // stickyHeaderDates: false,

        // 透過此參數控制水平卷軸是否在上下捲動時始終固定於行事曆視窗的底部，預設為auto。
        // stickyFooterScrollbar: true,

        // 當瀏覽器視窗尺寸變更時會觸法此callback處理邏輯
        // windowResize: () => {
        //     console.log('resize')
        // },
    }
}
