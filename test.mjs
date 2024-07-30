import { Observable } from "rxjs";

// function countdown(seconds) {
//   const intervalId = setInterval(() => {
//     console.log(`Còn lại ${seconds} giây`);
//     seconds -= 1;
//     if (seconds < 0) {
//       clearInterval(intervalId);
//       console.log("Hết giờ!");
//     }
//   }, 1000);
// }

// countdown(5);
function countdown(seconds) {
  return new Observable((subscriber) => {
    const intervalId = setInterval(() => {
      console.log(`Còn lại ${seconds} giây`);
      subscriber.next(seconds); 

      seconds -= 1; 

      if (seconds < 0) {
        clearInterval(intervalId);
        console.log("Hết giờ!");
        subscriber.complete(); 
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });
}
const subscription = countdown(5).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("Đếm ngược hoàn thành!"),
});

setTimeout(() => subscription.unsubscribe(), 6000);




