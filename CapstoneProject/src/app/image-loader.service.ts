import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, flatMap, reduce, mergeMap, concatAll, concatMap, mergeAll } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from 'protractor';

import { ICategory } from './Category';
import { ISubcategory } from './subcategory';
import { IItems } from './items';


@Injectable({
  providedIn: 'root'
})

export class ImageLoaderService {

  Categories: ICategory[] = [];
  data: any = null;

  
  constructor(private http: HttpClient) {
  }

  /**
   * Return all categories
   * */
  getCategories(): Observable<ICategory[]> {

    return this.loadData().pipe(
      map(d => d as ICategory[])
    );
  }

 
  getItems(): Observable<IItems[]> {
    return this.getCategories().pipe(
      flatMap(c => c.map(i => i.subcategories)),
      flatMap(d => d),
      map(d => d.items)
    );
  }


  public getData(): Observable<ICategory> {
    return this.http.get<ICategory>('https://webmppcapstone.blob.core.windows.net/data/itemsdata.json');
  }

  private loadData(): Observable<any> {
    return this.http.get<any>('https://webmppcapstone.blob.core.windows.net/data/itemsdata.json');
  }
 
}
