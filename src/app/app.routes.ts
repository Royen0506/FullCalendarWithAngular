import { Routes } from '@angular/router'
import { CalendarBasicDemoComponent } from './features/calendar-basic-demo/calendar-basic-demo.component'
import { CalendarApiComponent } from './features/calendar-api/calendar-api.component'
import { CalendarViewsComponent } from './features/calendar-views/calendar-views.component'

export const routes: Routes = [
    {
        path: '',
        component: CalendarBasicDemoComponent,
    },
    {
        path: 'api',
        component: CalendarApiComponent,
    },
    {
        path: 'views',
        component: CalendarViewsComponent,
    },
]
