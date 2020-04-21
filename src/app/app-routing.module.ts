import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo:'table/courses',pathMatch:'full'},
  {path: 'table/courses', component: CourseListComponent},
  {path: 'table/courses/:courseId/modules', component: CourseViewerComponent},
  {path: 'table/courses/:courseId/modules/:moduleId/lessons', component: CourseViewerComponent},
  {path: 'table/courses/:courseId/modules/:moduleId/lessons/:lessonId/topics', component: CourseViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
