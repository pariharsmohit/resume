import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { AcadProjectComponent } from './acad-project/acad-project.component';
import { PersonalProjectComponent } from './personal-project/personal-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent,
    EducationComponent,
    TrainingsComponent,
    AcadProjectComponent,
    PersonalProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
