import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  currentSection = 'home';
  constructor() {}

  ngOnInit() {}


  scrollTo(section: string) {
    document.querySelector('#' + section).scrollIntoView();
  }
}

