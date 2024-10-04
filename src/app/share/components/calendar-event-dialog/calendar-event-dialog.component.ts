import { Component } from '@angular/core'
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms'
import { CalendarModule } from 'primeng/calendar'
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog'
import { InputTextModule } from 'primeng/inputtext'
import { ButtonModule } from 'primeng/button'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-calendar-event-dialog',
    standalone: true,
    imports: [
        CalendarModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        ButtonModule,
        CommonModule,
    ],
    templateUrl: './calendar-event-dialog.component.html',
    styleUrl: './calendar-event-dialog.component.scss',
})
export class CalendarEventDialogComponent {
    formGroup!: FormGroup

    isEdit: boolean = false

    constructor(
        private formBuilder: FormBuilder,
        private dynamicDialogConfig: DynamicDialogConfig,
        public dynamicDialogRef: DynamicDialogRef
    ) {}

    ngOnInit(): void {
        this.formGroup = this.formBuilder.nonNullable.group({
            start: '',
            end: '',
            title: '',
            id: '',
        })

        this.initFormData()
    }

    initFormData(): void {
        const data = this.dynamicDialogConfig.data
        if (data && data.status === 'Edit') {
            this.isEdit = true
            this.formGroup.get('start')?.setValue(data.start)
            this.formGroup.get('end')?.setValue(data.end)
            this.formGroup.get('title')?.setValue(data.title)
            this.formGroup.get('id')?.setValue(data.id)
        } else {
            this.formGroup.get('start')?.setValue(data.date)
        }
    }

    doClose(status?: string) {
        let data = this.formGroup.getRawValue()
        // 確保start和end是Date物件
        const startDate = new Date(data.start)
        const endDate = new Date(data.end)

        data = {
            ...data,
            start: startDate,
            end: endDate,
        }

        if (status === 'Delete') {
            data = {
                ...data,
                status: 'Delete',
            }
        }

        this.dynamicDialogRef.close(data)
    }
}
