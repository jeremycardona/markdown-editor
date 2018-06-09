import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SideComponent } from './side.component';
import { MarkdownComponent } from './markdown.component';
import { ResultComponent } from './result.component';

@NgModule({
  declarations: [
    AppComponent,
    SideComponent,
    MarkdownComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
