import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { ReduceComponent } from './reduce/reduce.component';
import { ReduceExerciciosComponent } from './reduce/reduce-exercicios/reduce-exercicios.component';
import { FlatComponent } from './flat/flat.component';
import { MapExeciciosComponent } from './map/map-execicios/map-execicios.component';
import { ExerciciosReduceMapFilterComponent } from './exercicios-reduce-map-filter/exercicios-reduce-map-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    FilterComponent,
    ReduceComponent,
    ReduceExerciciosComponent,
    FlatComponent,
    MapExeciciosComponent,
    ExerciciosReduceMapFilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
