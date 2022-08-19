import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main-portal/home/home.component';
import { AboutComponent } from './main-portal/about/about.component';
import { ContactComponent } from './main-portal/contact/contact.component';
import { HeaderComponent } from './main-portal/header/header.component';
import { FooterComponent } from './main-portal/footer/footer.component';
import { CourseComponent } from './main-portal/course/course.component';
import { BlogComponent } from './main-portal/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    CourseComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
