import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of, Observable } from 'rxjs';
import {APIResponse} from '../models/api-response.model';
import {Car} from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private readonly API_URL: string = 'http://localhost:3000/api/v1/cars/';


  constructor(private http: HttpClient) { }


  getAllCars(
    currentPage: number,
    pageLimit: number
  ): Observable<APIResponse<Car[]>> {
    return this.http
      .get<APIResponse<Car[]>>(
        this.API_URL + `?page=${currentPage}&limit=${pageLimit}`
      )
      ;
  }

  getCarById(id: string): Observable<APIResponse<Car>> {
    return this.http
      .get<APIResponse<Car>>(this.API_URL + id)
     ;
  }

  createCar(car: Car): Observable<APIResponse<Car>> {
    return this.http
      .post<APIResponse<Car>>(this.API_URL, car)
      ;
  }

  updateCar(car: Car): Observable<APIResponse<Car>> {
    return this.http
      .patch<APIResponse<Car>>(this.API_URL + car._id, car)
     ;
  }

  deleteCar(car: Car): Observable<APIResponse<Car>> {
    return this.http
      .delete<APIResponse<Car>>(this.API_URL + car._id)
    ;
  }
}
