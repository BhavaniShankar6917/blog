import { SkillsComponent } from './skills/skills.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {NavComponent}
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { EmbedNavComponent } from './embed-nav/embed-nav.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavComponent,
    GooglePayButtonModule,
    EmbedNavComponent,
    AboutComponent,
    SkillsComponent,
  ],
  exports: [NavComponent, EmbedNavComponent, AboutComponent, SkillsComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
