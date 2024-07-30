import { of, interval } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

of(1, 2, 3).pipe(
  switchMap(val => {
    console.log(`Switching to new interval for value: ${val}`);
    return interval(4000).pipe(
      take(3)
    );
  })
).subscribe(result => console.log(result));
