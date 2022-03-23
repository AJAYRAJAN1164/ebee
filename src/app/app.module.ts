import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefualtLayoutComponent } from './layout/defualt_layout/defualt-layout/defualt-layout.component';
import { NavbarComponent } from './layout/defualt_layout/defualt-layout/navbar/navbar/navbar.component';
import { FooterComponent } from './layout/defualt_layout/defualt-layout/footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DefualtLayoutComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
