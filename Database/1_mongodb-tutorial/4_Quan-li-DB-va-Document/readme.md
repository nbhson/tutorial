# **Quản lí DB và Document**

- Vào: _C:\Program Files\MongoDB\Server\5.0\bin_
- ![](RackMultipart20220125-4-14pvyhd_html_136c18d55a9560e.png)Để xem mongo chạy chưa: _mongo_

1. **Databses**

- Xem tất cả DB: _show dbs_
- Chọn sử dụng DB: _use db\_name_
- Hiển thị đang sử dụng DB nào: _db_
- Tạo ra DB mới:
  - _use db\_name_
  - _db.createCollection(&quot;collection\_ name&quot;)_
- Xem collections: _show collections_
- Xóa DB: _db.dropDatabase()_

1. **Collections**

- Thêm document vào collection: _db.collection\_name.insert(json\_string)_
- Xem document của collection: _db.colection\_name.find()_ hoặc _db.colection\_name.find().pretty()_
- Export: _mongoexport --db db\_name --collection collection\_name --out name.json_
- Xóa DB: _db.collection\_name.drop()_

1. **Document**

- Sử dụng hàm: load(path\_js\_file)
- Insert: _db.collection\_name.insert({_

_User\_name: &quot;John&quot;,_

_Password: 123456,_

_Email:_ [_john@gmail.com_](mailto:john@gmail.com)_&quot;,_

_Skills: [&quot;HTML&quot;, &quot;CSS&quot;, &quot;JS&quot;],_

_Status: &quot;active&quot;_

_})_

- Update: _db.users.update(_

_{user\_name: &quot;John&quot;}, // nếu không có query thì coi như update toàn bộ ($exists)_

_{$set: {status: &quot;not active&quot;}}, // ($unset)_

_{_

_upsert: false, // nếu không có user\_name là john thì insert vào_

_multi: false // với điều kiện trả về nhiều kết quả thì update tất cả_

_}_

_)_

- Remove: _db.users.remove({password: {$gt: 50}, password: {$lt: 500}})_

1. **Field**

Thêm field:

db.users.update(

{},

{$set: {&quot;user\_id&quot;: NumberInt(1)}},

{upsert: false, multi: true}

)

Remove_: db.users.update(_

_{},_

_{$unset: {status: &quot;&quot;}}, // xóa field status_

_{_

_upsert: false, // nếu không có user\_name là john thì insert vào_

_multi: false // với điều kiện trả về nhiều kết quả thì update tất cả_

_}_

_)_

1. **Truy vấn**

- Theo điều kiện: db.users.find({&quot;\_id&quot;: ObjectId(&quot;61ef56487742c92bb25918ed&quot;)}, {&quot;user\_name&quot;: 1, &quot;sex&quot;: 1, &quot;\_id&quot;: 0}) // lấy ra field user\_name &amp; sex của id 61ef56487742c92bb25918ed
- Giới hạn: db.users.find({}, {&quot;user\_name&quot;: 1, &quot;sex&quot;: 1, &quot;\_id&quot;: 0}).limit(2).skip(0) // lấy ra 2 phần tử đầu tiên từ document thứ 0
- $in: db.users.find({\_id: {$in: [ObjectId(&quot;61ef56487742c92bb25918ed&quot;), ObjectId(&quot;61ef56487742c92bb25918ee&quot;)]}})
- $gt: db.users.find({age: {$gt: 10}}) // tìm user có tuổi lớn hơn 10
- Tìm trong Array: db.users.find({&quot;skills&quot;: &quot;HTML&quot;})
  - $ne: db.user.find({&quot;skills&quot;: {$ne: &quot;PHP&quot;}}) // tìm user không có skills PHP
  - $eq: db.user.find({&quot;skills&quot;: {$ne: &quot;PHP&quot;}}) // tìm user có skills PHP
- Tìm trong Object: db.users.find({&quot;languages.English&quot;: 9})
  - db.users.find({&quot;languages.English&quot;: {$not: {$gte: 8}}}) // tìm users có điểm E \&lt; 8
  - db.users.find( { $or: [{&quot;languages.English&quot;: 10}, {&quot;&quot;languages.China&quot;&quot;: 10 }] } ) // tìm users với điểm E hoặc china = 10
- Sắp xếp: db.users.find({}).sort({&quot;age&quot;: 1}) // sắp xếp từ bé đến lớn (1 hoặc -1)

1. **Field Indexes (truy vấn cực nhanh)**

- Db.users.find({&quot;age&quot;: 30}) // 0.078s
- Đánh index: db.users.ceateIndex({&quot;age&quot;: 1, user\_name: 1}) // 1 tăng dần, -1 giảm dần
- GetIndex: db.users.getIndex()
- Db.users.find({&quot;age&quot;: 30}) // 0.001s
- Dropindex: db.users.drop ({&quot;age\_1&quot;})
- Không trùng/bắt buộc phải có value của field trong 1 collection:

_db.users.createIndex(_

_{&quot;user\_id&quot;: 1}, {unique: true}_

_)_

- **Sparse Index** : (Sort với field đã đánh index:)
  - db.user.createIndex({&quot;deparment&quot;: 1}, {sparse: true})
  - db.users.find().sort({deparment: 1}).hint({deparment: 1})
- **TTL Index:** (Xóa đi một document trong 1 khoảng thời gian nhất định)
  - db.user.createIndex({&quot;created\_date&quot;: 1}, { expireAfterSeconds: 3600})

- **Text Index:** (Hỗ trợ search text với những field đã đánh index)
  - Thiết lập: db.adminCommand({setParameter: true, textSearchEnabled: true})
  - Db.reviews.createIndex(

{

Field\_name\_1: &quot;text&quot;,

Field\_name\_2: &quot;text&quot;

},

{

name: &quot;seach\_index&quot;

}

)

  - Db.users.find({$text: {$search: &quot;CSS HTML&quot;}}) // người biết CSS hoặc biết HTML
  - db.users.find({$text: {$search: &quot;CSS -&#39;HTML&#39;&quot;}}) // người biết CSS nhưng ko biết HTML
  - db.users.find({$text: {$search: &quot;CSS &quot;, $caseSensitive: true}}) // Phân biệt hoa thường
  - Tìm chuỗi thì chuỗi phải trong dấu nháy &quot;&quot;

- **Partial index:** (tìm kiếm với biểu thức)
  - Tìm đối tượng trong mảng

db.restaurants.find(

{

grades: {$elemMatch: {grade: &quot;A&quot;, score: 12, date: {$gte: new Date(2014,1,1), $lt: new Date(2015,1,1)}}}

}

)

  - Đánh chỉ số

db.restaurants.createIndex(

{cuisine: 1},

{partialFilterExpression:{

&quot;grades.score&quot;: { $gt: 7 }

}}

)

  - Tìm:

db.restaurants.find(

{

&quot;cuisine&quot;: &quot;Italian&quot;,

&quot;grades.score&quot;: {$gte: 7}

}

)