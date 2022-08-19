import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main-portal/about/about.component';
import { BlogComponent } from './main-portal/blog/blog.component';
import { ContactComponent } from './main-portal/contact/contact.component';
import { CourseComponent } from './main-portal/course/course.component';
import { HomeComponent } from './main-portal/home/home.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"course",
    component:CourseComponent
  },
  {
    path:"blog",
    component:BlogComponent
  },
  {
    path:"contact",
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
