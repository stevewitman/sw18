import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@bb/core-data';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'bb-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  selectedProject: Project;

  @Input() formGroup: FormGroup;
  @Input() set project(value: Project) {
    this.selectedProject = Object.assign({}, value);
  }
  @Output() cancelled = new EventEmitter();
  @Output() saved = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
