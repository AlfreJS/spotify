import { Pipe, PipeTransform } from '@angular/core';
import { ITrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList',
  standalone: true
})
export class OrderListPipe implements PipeTransform {

  transform(value: any[], args: string | null = null, sort: string = 'asc'): ITrackModel[] {
    if (args === null) {
      return value
    } else {
      const tmpList = [...value]
      tmpList.sort((a, b) => {
        if (a[args] < b[args]) {
          return -1
        }
        else if (a[args] === b[args]) {
          return 0;
        }
        else if (a[args] > b[args]) {
          return 1;
        }
        return 1
      });
      console.log(tmpList)
      return (sort === 'asc') ? tmpList : tmpList.reverse()
    }
  }

}
