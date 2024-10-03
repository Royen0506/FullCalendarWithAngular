import { Component } from '@angular/core'
import { Router, RouterOutlet } from '@angular/router'
import { MenuItem } from 'primeng/api'
import { MenubarModule } from 'primeng/menubar'
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms'
import { DropdownModule } from 'primeng/dropdown'
import { LanguageService } from './share/service/language.service'
import { Option } from './share/model/option'
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        MenubarModule,
        FormsModule,
        ReactiveFormsModule,
        DropdownModule,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    // 功能選單項目
    items: MenuItem[] | undefined

    // 表單
    formGroup!: FormGroup

    // 語系下拉選單，僅在CRUD範例頁面做動
    languages: Option[] = []

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private languageService: LanguageService
    ) {}

    ngOnInit() {
        this.items = [
            {
                label: '基礎樣式',
                command: () => {
                    this.router.navigate([''])
                },
            },
            {
                label: '工具列、主題、尺寸',
                command: () => {
                    this.router.navigate(['/api'])
                },
            },
            {
                label: '行事曆顯示型式',
                command: () => {
                    this.router.navigate(['/views'])
                },
            },
            {
                label: '日期顯示及點擊',
                command: () => {
                    this.router.navigate(['/dateTimeDisplay'])
                },
            },
            {
                label: '行程資料的顯示',
                command: () => {
                    this.router.navigate(['/event'])
                },
            },
            {
                label: '多國語系',
                command: () => {
                    this.router.navigate(['/international'])
                },
            },
            {
                label: 'CRUD範例',
                command: () => {
                    this.router.navigate(['/crud'])
                },
            },
        ]

        this.languages = [
            { label: '繁體中文', value: 'zh-tw' },
            { label: '簡體中文', value: 'zh-cn' },
            { label: 'English', value: 'en' },
        ]

        this.formGroup = this.formBuilder.nonNullable.group({
            language: '',
        })

        this.formSub()

        this.formGroup
            .get('language')
            ?.setValue({ label: '繁體中文', value: 'zh-tw' })
    }

    // 監聽語系下拉表單變化
    formSub(): void {
        this.formGroup.get('language')?.valueChanges.subscribe((res) => {
            this.languageService.setSessionItem('selectedLanguage', res)
        })
    }
}
