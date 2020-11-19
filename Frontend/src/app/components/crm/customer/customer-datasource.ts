import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface CustomerItem {
  name: string;
  id: number;
  amount: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: CustomerItem[] = [
  {id: 1, name: 'Hydrogen',amount: 1},
  {id: 2, name: 'Helium',amount: 1},
  {id: 3, name: 'Lithium',amount: 1},
  {id: 4, name: 'Beryllium',amount: 1},
  {id: 5, name: 'Boron',amount: 1},
  {id: 6, name: 'Carbon',amount: 1},
  {id: 7, name: 'Nitrogen',amount: 1},
  {id: 8, name: 'Oxygen',amount: 1},
  {id: 9, name: 'Fluorine',amount: 1},
  {id: 10, name: 'Neon',amount: 1},
  {id: 11, name: 'Sodium',amount: 1},
  {id: 12, name: 'Magnesium',amount: 1},
  {id: 13, name: 'Aluminum',amount: 1},
  {id: 14, name: 'Silicon',amount: 1},
  {id: 15, name: 'Phosphorus',amount: 1},
  {id: 16, name: 'Sulfur',amount: 1},
  {id: 17, name: 'Chlorine',amount: 1},
  {id: 18, name: 'Argon',amount: 1},
  {id: 19, name: 'Potassium',amount: 1},
  {id: 20, name: 'Calcium',amount: 1},
];

/**
 * Data source for the Customer view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class CustomerDataSource extends DataSource<CustomerItem> {
  data: CustomerItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor(paginator : MatPaginator,sort : MatSort ) {
    super();
    this.paginator = paginator;
    this.sort = sort
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<CustomerItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: CustomerItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: CustomerItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
