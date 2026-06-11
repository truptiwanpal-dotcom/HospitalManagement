import { Component } from '@angular/core';
import { HealthAiService } from '../health-ai.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent {
  constructor(
    private aiService: HealthAiService
  ) {}

   userInput = '';
   nodeResponse = {doctor: '', reason: '', advice: '' };
   pythonResponse = {doctor: '', reason: '', advice: '' };
   ollamaResponse = [];

askNodeAI() {
  this.aiService.sendMessageNode(this.userInput)
    .subscribe((res: any) => {
      const parsed = JSON.parse(res.content);  // ✅ important

      this.nodeResponse = parsed;
    });
}

askPythonAI(){
    this.aiService.sendMessagePython(this.userInput)
      .subscribe((res: any) => {

        const parsed = JSON.parse(res.content);  // ✅ important

        this.pythonResponse = parsed;
      });
  }
  askOllamaAI(){
    console.log("Button clicked");

  this.aiService.sendMessageOllama(this.userInput)
    .subscribe({
      next: (res: any) => {
        console.log("Response:", res);
        this.ollamaResponse = res.response.split('\n');
      },
      error: (err) => {
        console.error("Error:", err);
      }
    });
  }
}
