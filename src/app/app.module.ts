import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { QueryService } from './query/query.service';

import { AppComponent } from './app.component';
import { QueryModule } from './query/query.module';
import { ProfileModule } from './profile/profile.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    QueryModule,
    ProfileModule,

    FlexLayoutModule.forRoot(),
    MaterialModule.forRoot()
  ],
  providers: [QueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
