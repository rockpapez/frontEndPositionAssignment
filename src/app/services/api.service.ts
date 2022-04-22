import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseURL: string = 'https://dev.api.recruitment.indigo.si/JobPost';

  constructor(private http: HttpClient) {}
  getJobPosts() {
    return this.http.get<Job[]>(this.baseURL);
  }
}
