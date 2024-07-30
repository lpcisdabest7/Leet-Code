import { Observable } from 'rxjs';
import { map, filter, observeOn } from 'rxjs/operators';
import { asyncScheduler } from 'rxjs';

// 1. Tạo Observable phát ra các số từ 1 đến 10, mỗi số sau 500ms
const observable = new Observable((subscriber) => {
  let count = 1;
  const intervalId = setInterval(() => {
    subscriber.next(count++); // Phát ra giá trị tiếp theo
    if (count > 10) {
      clearInterval(intervalId);
      subscriber.complete(); // Hoàn thành sau khi phát ra 10 giá trị
    }
  }, 500);
});

// 2. Tạo Observer để lắng nghe và xử lý dữ liệu
const observer = {
  next: (value) => console.log(`Received value: ${value}`),
  error: (err) => console.error(`Error: ${err}`),
  complete: () => console.log('Observable completed')
};

// 3. Sử dụng Operators để biến đổi luồng dữ liệu
// - Lọc các số chẵn
// - Nhân đôi các giá trị trước khi gửi đến Observer
const processedObservable = observable.pipe(
  filter(value => value % 2 === 0), // Chỉ lấy số chẵn
  map(value => value * 2),           // Nhân đôi giá trị
  observeOn(asyncScheduler)          // Sử dụng Scheduler không đồng bộ
);

// 4. Đăng ký Observer với Observable
const subscription = processedObservable.subscribe(observer);

// 5. Hủy đăng ký sau 6 giây (khoảng 6 giá trị được phát ra)
setTimeout(() => {
  subscription.unsubscribe();
  console.log('Unsubscribed from Observable');
}, 6000);
