# **Một số thuật ngữ trong NoSQL database**

1. **Relational (rang buộc)**

Thường có 2 khóa là khóa chính và khóa ngoại nhằm rang buộc tính nhất quán dữ liệu với nhau

1. Non-Relational (không rang buộc)

- Không có sự rang buộc giữa các tập hợp với nhau
- Table gọi là collection, từng record gọi là document

![](RackMultipart20220125-4-14zth78_html_1293329b7703fc2b.png)

1. **High Scalability (khả năng mở rộng)**

- Do sử dụng hệ phân tán nên việc mở rộng dể dàng, nếu quá tải thì &quot;gắn&quot; thêm server để chia tải dữ liệu ra thôi

1. **Vertical Scalability (mở rộng theo chiều dọc)**

- Để tang bộ nhớ của máy chủ, tang ram, tang cái mọi thứ để đáp ứng được nhu cầu (giống như muốn chơi game nặng thì cần năng phần cứng phần mềm để chơi)

1. **Horizontal Scalable (mở rộng theo chiều ngang - noSQL)**

![](RackMultipart20220125-4-14zth78_html_3ce4c8df727aec2d.png)

1. **Distributed Data (phân tán dữ liệu)**

![](RackMultipart20220125-4-14zth78_html_5353fed640babc77.png)

- Mỗi nhóm người sẽ làm việc trên một data center, để đảm bảo người làm việc tại đó truy cập nhanh nhất
- Và dữ liệu sẽ được tập trung tại một điểm nào đó

1. **Deployment Flexibility (triển khai linh hoạt)**

![](RackMultipart20220125-4-14zth78_html_c3f2db9f70fbbc47.png)

- Thêm một server không ảnh hưởng hệ thống
- Tắt một server cũng không ảnh hưởng hệ thống

1. **Durability (lưu trữ tốt)**

- Dữ liệu của mySQL, SQL Server chỉ nằm trên ổ cứng không nằm trên ram, nếu muốn chứa vào ram thì cần phải dung phần mềm thứ 3
- NoSQL vừa nằm trên ổ cứng và ram

1. **High Availability (tính sẵn sàng)**

- Do dữ liệu phân tán, sẽ chứa dữ liệu trên nhiều server khác nhau
- Nếu một server bị die cũng không ảnh hưởng gì hệ thống

![](RackMultipart20220125-4-14zth78_html_db3be8c107489c86.png)

1. **Eventual consistent (nhất quán cuối)**

- ![](RackMultipart20220125-4-14zth78_html_2b35b2af13696314.png)Đến cuối cùng tất cả dữ liệu ở những nơi khác nhau sẽ được đồng bộ với nhau