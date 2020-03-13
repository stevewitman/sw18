import { Injectable } from '@angular/core';

import * as projectsSelectors from './projects.selectors';
import * as projectsActions from './projects.actions';
import * as fromProjects from './projects.reducer';
import { Project } from '@bb/core-data';
import { filter } from 'rxjs/operators';
import { Action, ActionsSubject, select, Store} from '@ngrx/store';


@Injectable({
  providedIn: 'root'
})
export class ProjectsFacade {
  allProject$ = this.store.pipe(select(projectsSelectors.selectAllProjects));
  selectedProject$ = this.store.pipe(select(projectsSelectors.selectProject));
  projectsLoading$ = this.store.pipe(select(projectsSelectors.selectProjectsLoading));
  mutations$ = this.actions$.pipe(
    filter((action: Action) =>
      action.type === projectsActions.createProject({} as any).type ||
      action.type === projectsActions.updateProject({} as any).type ||
      action.type === projectsActions.deleteProject({} as any).type
    )
  );

  constructor(
    private actions$: ActionsSubject,
    private store: Store<fromProjects.ProjectsPartialState>
  ) {}

  selectProject(selectedProjectId: number | string) {
    this.dispatch(projectsActions.projectSelected({ selectedProjectId }));
  }

  loadProjects() {
    this.dispatch(projectsActions.loadProjects())
  }

  createProject(project: Project) {
    this.dispatch(projectsActions.createProject({ project }));
  }

  updateProject(project: Project) {
    this.dispatch(projectsActions.updateProject({ project }));
  }

  deleteProject(project: Project) {
    this.dispatch(projectsActions.deleteProject({ project }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
