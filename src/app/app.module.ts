import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {Routes, RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {FeatureComponent} from './feature/feature.component';
import {FeaturesService} from './features.service';
import { ScenarioComponent } from './scenario/scenario.component';
import { StepComponent } from './step/step.component';
import { ExpandableElementComponent } from './expandable-element/expandable-element.component';

const routes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeatureComponent,
    ScenarioComponent,
    StepComponent,
    ExpandableElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    FeaturesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
