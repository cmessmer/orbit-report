import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrbitListComponent } from './orbit-list/orbit-list.component';
import { HighlightDirective } from './highlight.directive';
import { OrbitCountComponent } from './orbit-count/orbit-count.component';

@NgModule({
  declarations: [
    AppComponent,
    OrbitListComponent,
    HighlightDirective,
    OrbitCountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
