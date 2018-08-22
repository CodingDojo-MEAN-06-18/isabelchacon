import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
    {name: 'orderBy',
     pure: false})
export class OrderByPipe implements PipeTransform {
    transform(arr: any[], sortBy: number): Array<any> {
        console.log(sortBy);
        if (sortBy) {
            return arr.sort((a, b) => (b[sortBy] - a[sortBy]));
        }
        return arr.sort((a, b) => (b - a));
        }
}