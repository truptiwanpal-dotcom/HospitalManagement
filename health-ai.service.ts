import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HealthAiService {

  constructor(private http: HttpClient) {}

  sendMessageNode(message: string) {
    return this.http.post(
      'http://localhost:3000/api/health-assistant',
      { message }
    );
  }

  sendMessagePython(message: string) {
    return this.http.post(
      'http://localhost:8000/doctor',   // ✅ Python API
      { message }
    );
  }

  sendMessageOllama(message: string){
      console.log("Service Called");
    return this.http.post('http://localhost:8000/ask-ai', {
      message: message
    });
  }
}
