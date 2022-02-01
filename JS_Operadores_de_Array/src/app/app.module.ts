import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { ReduceComponent } from './reduce/reduce.component';
import { ReduceExerciciosComponent } from './reduce/reduce-exercicios/reduce-exercicios.component';
import { FlatComponent } from './flat/flat.component';
import { MapExeciciosComponent } from './map/map-execicios/map-execicios.component';
import { ExerciciosReduceMapFilterComponent } from './exercicios/exercicios-reduce-map-filter/exercicios-reduce-map-filter.component';
import { ReduceObjectEntriesComponent } from './exercicios/reduce-object-entries/reduce-object-entries.component';
import { ReduceObjectEntries2Component } from './exercicios/reduce-object-entries2/reduce-object-entries2.component';
import { ReduceEntriesFilterIndexOfMapComponent } from './exercicios/reduce-entries-filter-index-of-map/reduce-entries-filter-index-of-map.component';



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    FilterComponent,
    ReduceComponent,
    ReduceExerciciosComponent,
    FlatComponent,
    MapExeciciosComponent,
    ExerciciosReduceMapFilterComponent,
    ReduceObjectEntriesComponent,
    ReduceObjectEntries2Component,
    ReduceEntriesFilterIndexOfMapComponent
    
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
