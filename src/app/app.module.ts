import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PrimiryOneComponent} from './primiry-one/primiry-one.component';
import {PrimiryTwoComponent} from './primiry-two/primiry-two.component';
import {SecondaryOneComponent} from './secondary-one/secondary-one.component';
import {SecondaryTwoComponent} from './secondary-two/secondary-two.component';
import {SecondaryThreeComponent} from './secondary-three/secondary-three.component';
import {PrimiryThreeComponent} from './primiry-three/primiry-three.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimiryOneComponent,
    PrimiryTwoComponent,
    SecondaryOneComponent,
    SecondaryTwoComponent,
    SecondaryThreeComponent,
    PrimiryThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
