import { Component } from '@angular/core'
import { AccordionModule } from 'primeng/accordion'
import { FullCalendarModule } from '@fullcalendar/angular'
import { CalendarOptions } from '@fullcalendar/core/index.js'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

@Component({
    selector: 'app-event',
    standalone: true,
    imports: [AccordionModule, FullCalendarModule],
    templateUrl: './event.component.html',
    styleUrl: './event.component.scss',
})
export class EventComponent {
    // 行程物件的基本內容
    basicCalendarOption: CalendarOptions = {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',

        // 儲存所有的行程資料
        events: [
            {
                // 唯一識別碼
                id: 'a',
                // 行事曆顯示的標題
                title: 'first event',
                // 開始時間
                start: '2024-10-02 10:10:00',
                // 結束時間
                end: '2024-11-11 14:00:00',
                // 是否為全天
                allDay: true,
                // 點擊行程時將導至的路徑
                // url: 'https://google.com.tw',
                // 行程顯示時要帶入的Class樣式，文字顏色無法更改
                classNames: ['bg-gray-300', 'border-yellow-700', 'border-3'],
                // 行程是否可編輯拖拉，亦可於外層定義，後面拖拉有Demo範例。
                editable: false,
                // 設定行程在一週重複時間
                daysOfWeek: [1, 3],
                // 行程文字顏色
                textColor: 'blue',
                // 行程背景色，優先度低於classNames
                backgroundColor: 'blue',
                // 邊框顏色，優先度低於classNames
                borderColor: 'black',
            },
        ],
    }

    // 統一規範行程顯示樣式
    unifiedEventStyleOptions: CalendarOptions = {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',

        // 儲存所有的行程資料
        events: [
            {
                // 唯一識別碼
                id: 'a',
                // 行事曆顯示的標題
                title: 'first event',
                // 開始時間
                start: '2024-10-02 10:10:00',
                // 結束時間
                end: '2024-11-11 14:00:00',
            },
            {
                // 唯一識別碼
                id: 'b',
                // 行事曆顯示的標題
                title: 'second event',
                // 開始時間
                start: '2024-10-05 10:10:00',
                // 結束時間
                end: '2024-10-11 14:00:00',
                // 自訂Class
                className: ['bg-gray-300', 'border-0'],
            },
        ],

        // 預設所有行程的背景及邊框顏色，優先度低於event本身物件自身所定義的樣式。
        // eventColor: '#378006',

        // 預設所有行程的背景色，優先度低於event本身物件自身所定義的樣式。
        // eventBackgroundColor: '#378080',

        // 預設所有行程的邊框色，優先度低於event本身物件自身所定義的樣式。
        // eventBorderColor: '#390080',

        // 預設所有行程的文字顏色，優先度低於event本身物件自身所定義的樣式。
        // eventTextColor: 'red',
    }

    // 行程點擊事件
    eventClickOptions: CalendarOptions = {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',

        events: [
            {
                // 唯一識別碼
                id: 'a',
                // 行事曆顯示的標題
                title: 'first event',
                // 開始時間
                start: '2024-10-02 10:10:00',
                allDay: true,
            },
        ],

        // 點擊行程觸發的方法
        eventClick: (info) => {
            console.log(info)
        },

        // 當滑鼠移入至行程時觸發
        eventMouseEnter: (arg) => {
            console.log(arg)
        },

        // 當滑鼠離開行程時觸發
        eventMouseLeave: (arg) => {
            console.log(arg)
        },
    }

    // 拖拉功能
    dragAndDropOptions: CalendarOptions = {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',

        // 開啟所有行程拖拉功能，預設為false。
        editable: true,

        events: [
            {
                title: '拖拉',
                start: '2024-10-10',
                end: '2024-10-11',
                // 設定特定行程可拖拉
                editable: false,
            },
            {
                title: '拖拉2',
                start: '2024-10-11',
                end: '2024-10-13',
            },
        ],
    }

    // 行成彈出視窗
    popoverOptions: CalendarOptions = {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        // 開啟後如多個行程於同一日將只顯示一筆，其餘則要點擊more開啟查看
        dayMaxEventRows: true,
        events: [
            {
                title: '行程1',
                start: '2024-10-10',
                end: '2024-10-10',
            },
            {
                title: '行程2',
                start: '2024-10-10',
                end: '2024-10-10',
            },
            {
                title: '行程3',
                start: '2024-10-10',
                end: '2024-10-10',
            },
            {
                title: '行程4',
                start: '2024-10-10',
                end: '2024-10-10',
            },
            {
                title: '行程5',
                start: '2024-10-10',
                end: '2024-10-10',
            },
            {
                title: '行程6',
                start: '2024-10-10',
                end: '2024-10-10',
            },
            {
                title: '行程7',
                start: '2024-10-10',
                end: '2024-10-10',
            },
            {
                title: '行程8',
                start: '2024-10-10',
                end: '2024-10-10',
            },
        ],
    }

    // 背景色的行程顯示模式
    backgroundColorOptions: CalendarOptions = {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',

        // 可在設定變數預設就設為背景色顯示模式
        eventDisplay: 'list-item',

        events: [
            {
                title: '行程1',
                start: '2024-10-15',
                end: '2024-10-15',
                // 設定特定行程才使用background模式顯示
                // display: 'background',
            },
        ],
    }
}
