import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GridService {
  private filtersSubject = new BehaviorSubject<{ category: string[], year: string[], rating: string[] }>({
    category: [],
    year: [],
    rating: []
  });

  filters$ = this.filtersSubject.asObservable();

  updateFilters(type: 'category' | 'year' | 'rating', value: string) {
    const currentFilters = this.filtersSubject.value;
    const updatedFilters = currentFilters[type].includes(value)
      ? currentFilters[type].filter(f => f !== value)
      : [...currentFilters[type], value];

    this.filtersSubject.next({ ...currentFilters, [type]: updatedFilters });
  }
}
