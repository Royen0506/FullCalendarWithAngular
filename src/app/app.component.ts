import { Component } from '@angular/core'
import { Router, RouterOutlet } from '@angular/router'
import { MenuItem } from 'primeng/api'
import { MenubarModule } from 'primeng/menubar'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, MenubarModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    items: MenuItem[] | undefined

    constructor(private router: Router) {}

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
                command: () => {},
            },
            {
                label: '多國語系與時間區',
                command: () => {},
            },
            {
                label: 'CRUD範例',
                command: () => {},
            },
        ]
    }
}
