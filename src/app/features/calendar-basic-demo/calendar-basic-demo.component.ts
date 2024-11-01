import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar-basic-demo',
  standalone: true,
  imports: [FullCalendarModule, CommonModule],
  templateUrl: './calendar-basic-demo.component.html',
  styleUrl: './calendar-basic-demo.component.scss',
})
export class CalendarBasicDemoComponent {
  // 最基礎的設置
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
  };

  // 媒體錄音器的實例
  private mediaRecorder: MediaRecorder | undefined;
  // 儲存音訊片段的陣列
  private audioChunks: Blob[] = [];
  // 記錄是否正在錄音的狀態
  isRecording = false;
  // 儲存錄音的 URL
  audioUrl: string | null = null;

  // 建構子，注入系統訊息服務
  constructor() {}

  // 開始錄音
  async startRecording() {
    try {
      // 在開始新的錄音前，先清空之前的音訊資料
      this.audioChunks = [];

      // 獲取使用者的音訊媒體流
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      // 初始化媒體錄音器
      this.mediaRecorder = new MediaRecorder(stream);

      // 當有音訊數據可用時，將其推入音訊片段陣列
      this.mediaRecorder.ondataavailable = (event) => {
        this.audioChunks.push(event.data);
      };

      // 當錄音停止時，處理音訊片段
      this.mediaRecorder.onstop = () => {
        // 將音訊片段合併為一個 Blob
        const audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
        // 釋放之前的 URL，避免記憶體洩漏
        if (this.audioUrl) {
          URL.revokeObjectURL(this.audioUrl);
        }
        // 創建新的音訊 URL
        this.audioUrl = URL.createObjectURL(audioBlob);
        console.log('新的錄音 URL:', this.audioUrl);
      };

      // 開始錄音
      this.mediaRecorder.start();
      // 設定錄音狀態為 true
      this.isRecording = true;
    } catch (err) {
      console.error('錄音失敗', err);
    }
  }

  // 停止錄音
  stopRecording() {
    // 如果媒體錄音器存在且正在錄音
    if (this.mediaRecorder && this.isRecording) {
      // 請求數據並停止錄音
      this.mediaRecorder.requestData();
      this.mediaRecorder.stop();
      // 設定錄音狀態為 false
      this.isRecording = false;
      // 停止所有音訊流的追蹤
      this.mediaRecorder.stream.getTracks().forEach((track) => track.stop());
    }
  }
}
