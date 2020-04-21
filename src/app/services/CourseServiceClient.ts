import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findCourseById = (courseId) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001292378/courses/${courseId}`)
      .then(response => response.json())

  findAllCourses = () =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/001292378/courses')
      .then(response => response.json());
}
