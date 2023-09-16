# Signals

- Angular biết được sự thay đổi trước đó là nhờ `zone.js`. Bất cứ điều gì đó xảy ra (setTimeout, setInterval, http request, dom event,...) thì `zone.js` sẽ thông báo cho angular rằng có gì đó đã thay đổi

![Signal](src/assets/Screenshot%202023-05-06%20154657.png)

- Signal sẽ giúp kiểm soát tốt hơn, nếu signal change thì những thứ phụ thuộc vào signal cũng sẽ update.
- Signal không phải là một observable nên không thể subscribe, nhưng vẫn có thể lấy giá trị chính xác mà không cần subscribe
- Nếu signal change thì những thứ phụ thuộc vào signal cũng sẽ update

## Các loại tín hiệu (Signal) trong Angular:

- Broadcast Signal

- Local Signal

- State-Based Signal

## What are signals?

- `Signals` là một trình bao bọc xung quanh một giá trị có thể thông báo cho những người dùng khi giá trị đó thay đổi.

- `Signals` có thể chứa bất kỳ giá trị nào, từ nguyên thủy đơn giản đến cấu trúc dữ liệu phức tạp.

- Giá trị của `Signals` luôn được đọc thông qua hàm getter, cho phép Angular theo dõi vị trí `Signals` được sử dụng.

> Đặc điểm quan trọng khác của Signal là khi giá trị của nó thay đổi, tất cả các biến phụ thuộc được tính toán lại sẽ được cập nhật giá trị mới. Điều này giúp đơn giản hóa việc quản lý các biến phụ thuộc và đảm bảo rằng chúng luôn được đồng bộ với nhau.

Có thể nói **Signal = value + change notification**

## Why are signals?

- Provider more reactivity

- Finer control over change detection (sử dụng signal để xác định trạng thái của ứng dụng. Sử dụng trên template để khi signal thay đổi template cũng thay đổi theo, điều nào cho phép kiểm soát tốt hơn sự thay đổi và cải thiện hiệu xuất)

- Sign không gây các các effect free: không gây ra các thay đổi cũng như không thực thi bất kỳ mã nào khác

## How use signals?

### Create a signal

```ts
let quantity_1 = signal<number>(1);
let quantity_2 = signal<Array<string>>(["S", "o", "n"]);
let quantity_3 = signal<Vehicle>({ name: "v-mt01", weight: 1.5 });
let quantity_4 = signal(false); // shorthand
```

- Một signal được tạo với signal() constructor function is writable
- Signal value có thể:
  - `set` một giá trị mới
  - `updated` dựa trên giá trị hiện tại
  - `mutated` dựa trên giá trị hiện tại (dùng cho array & object) 

### Read a signal

```ts
this.quantity_1();
```

```html
<option *ngFor="let q of qtyAvailable()">{{ q }}</option>

<div>Vehicle Name: {{selectedVehicle().name}}</div>
<div>Vehicle Weight: {{selectedVehicle().weight}}</div>
```

### Set a signal

```ts
const newNumberValue = 5;
this.quantity_1.set(newNumberValue);
```

### Use signal method

```ts
const newNumberValue = 5;
// Replace the value
this.quantity_1.set(newNumberValue);
// Update the value based on current value
this.quantity_1.update((current) => current + 5);
// Mutated content in place, not value itself
this.selectedVehicle.mutate((v) => (v.weight = v.weight + 50));
```

### Define a computed

- Tạo một `computed signal` phụ thuộc trên một signal khác
- Computed signal is readonly
- Nó không thể được sửa đổi với set(), update() hoặc mutate()
- Computed sẽ tính toán lại giá trị khi một hoặc nhiều signal depend changes

- Gía trị của computed được nhớ, có nghĩ là nó store lại kết quả của computed
- Gía trị sẽ được sử dụng lại khi lần tiếp theo computed value được đọc

```ts
signalDependent = computed(() => this.signalCount() * 2);
```

### Use effect for Side Effect

- Không làm thay đổi giá trị bên trong signal
- Effect chạy khi một hoặc nhiều phụ thuộc changes hoặc code được thực thi

```ts
// effect function: console.log
effect(() => console.log(this.selectedVehicle()));
```

> Signal không phát ra giá trị, vì vậy nếu signal bị thay đổi nhiều lần trước khi effect được thực thi, effect sẽ chỉ đọc được current value

### Signal on template

- Trong thời gian tempalte rendering
  - Đọc giá trị signal và return signal value
  - Signal cũng dependency trên tên template view
  - Nếu signal change, the view is re-rendered

```html
<div>Vehicle Name: {{selectedVehicle().name}}</div>
```

## Where use signals?

- Component
- Directive
- Service
- Template
- Anywhere else

## Signals Suggestions

- Tiếp tục sử dụng event handlers cho user action
- Sử dụng `signal` or `computed` for any state (data) that could changes
- Đặt share signal trong service
- Tiếp tục sử dụng Observable cho các thao tác bất đồng bộ (http.get) 
