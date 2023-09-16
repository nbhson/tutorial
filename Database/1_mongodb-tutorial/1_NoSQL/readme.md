# **NoSQL database**

1. **NoSQL database là gì?**

Thuật ngữ NoSQL được giới thiệu lần đầu tiên năm 1998, đánh dấu bước phát triển của thế hệ database mới: distributed (phân tán) + non-relational (không rang buộc). Đây là 2 đặc tính quan trọng nhất

1. **Tại sao lại cần NoSQL?**

- Trước khi có NoSQL đã từng tồn tại một SQL (MySQL, SQL Server,…), SQL thì có những khuyết điểm:
  - Việc mapping giữa các bảng trong DB với các object trong code khá rắc rối và phức tạp
  - Performance sẽ bị chậm lại khi phải join nhiều bảng để lấy dữ liệu
  - Việc thay đổi cấu trúc dữ liệu (them/xóa bảng, thêm/xóa field) rất mệt mỏi, kéo theo vô số thay đổi trong code
  - Không làm việc được với dữ liệu không có cấu trúc
  - Chỉ được thiết kế trên một máy chủ. Khi muốn mở rộng nó khó chạy trên nhiều máy
- NoSQL Database được sinh ra để giải quyết các vấn đề đó:
  - Dữ liệu trong NoSql được lưu dưới dạng document, ob-ject. Truy vấn dễ dàng và nhanh hơn rất nhiều
  - Có thể làm việc hoàn toàn OK với dữ liệu dạng không có cấu trúc
  - Việc thêm xóa sửa bảng/field rất dễ dàng và nhanh gọn
  - NoSQL DB có thể mở rộng, chạy trên nhiều máy một cách dễ dàng.
    - Đây là những vấn đề mà các relational database không thể giải quyết được.

1. **Phân loại**

- Có 4 loại chính
  - Key-value stores
    - Sử dụng bảng băm (hash-table), nơi có một khóa duy nhất và một con trỏ chỉ đến một mục dữ liệu cụ thể, Các mô hình key/value thì đơn giản và dễ thực hiện nhất. Nhưng nó sẽ không hiệu quả khi bạn chỉ truy vấn hay update đến một phần dự liệu trong phần giá trị
    - Oracle, NoSQL Database, Redis,…
  - Column-oriented databases
    - Để lưu trữ và xử lý một lượng dữ liệu lơn trên nhiều server, Lưu trữ trong nhiều cột trong mỗi dòng với key cho từng dòng. Là một nhóm dữ liệu liên quan được truy cập cùng nhau
    - Hadoop/HBase, Bigtable,…
  - Graph databases
    - Sử dụng cấu trúc graph để lưu trữ dữ liệu
    - Biểu diễn theo mô hình node
    - Phân tán dữ liệu rất khó
    - Neo4J, DEX,…

  - **Document Oriented databases**
    - Tương tự như key/value, giống như tập hợp của một document
    - ThruDB, RavenDB, MongoDB,…

![](RackMultipart20220125-4-1quosie_html_4c0f24597a6be166.png)