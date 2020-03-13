import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreDataModule } from '@bb/core-data';
import { ProjectsEffects } from './projects-ngrx/projects.effects';
import { reducers } from './index';

import { DataPersistence } from '@nrwl/angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      ProjectsEffects
    ]),
    StoreDevtoolsModule.instrument({name: 'NGRX Sample Store'})
  ],
  providers: [DataPersistence]
})
export class CoreStateModule {}
