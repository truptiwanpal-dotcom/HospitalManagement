import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AiService {

  constructor(private http: HttpClient) {}

  sendPrompt(prompt: string) {
    return this.http.post('http://localhost:3000/api/prompt', { prompt });
  }
}