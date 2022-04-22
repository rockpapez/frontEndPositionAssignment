import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Job } from '../models/job';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {
  jobs: Job[] = [];
  jobTitle: any;
  p: number = 1;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs() {
    this.api.getJobPosts().subscribe((res) => {
      this.jobs = res;
    });
  }

  Search() {
    if (this.jobTitle == '') {
      this.ngOnInit();
    } else {
      this.jobs = this.jobs.filter((res) => {
        return res.title
          .toLocaleLowerCase()
          .match(this.jobTitle.toLocaleLowerCase());
      });
    }
  }

  key: string = 'openAt';
  reverse: boolean = false;

  sort(key: any) {
    this.key = 'key';
    this.reverse = !this.reverse;
  }
}
