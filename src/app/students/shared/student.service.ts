import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Student} from './student';

@Injectable()
export class StudentService {

  //studentList: Student[];

  URI_STUDENT = 'http://localhost:52537/api/Student';

  constructor(private http: Http) { }
  

  private getDataJson(res: Response) {
    const body = res.json();
    return body;
  }

  public getStudentList(): Observable<Student[]> {
    return this.http.get(this.URI_STUDENT)
      .map(this.getDataJson);
  }

}
