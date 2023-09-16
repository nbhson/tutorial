# Cách làm việc trong thực tế

## Branch thường được sử dụng trong Git Flow

- Branch main/master:

> Tức là nhánh main mà chúng ta thường sử dụng, nhánh này là dành cho production, được merge từ các nhánh khác, nên nhớ không nên sửa đổi trực tiếp trong nhánh này.

- Branch develop:

> Nhánh này là nhánh phát triển chính của team trong công ty và chứa tất cả code sẽ được phát hành cho phiên bản tiếp theo. Nên nhớ nhánh này merge với các nhanh khác ở dạng phát triển thêm tính năng feature.

- Branch feature:

> Nhánh này chủ yếu được sử dụng để phát triển một chức năng mới. Sau khi quá trình phát triển hoàn tất, chúng tôi merge trở lại nhánh develop và tham gia các tính năng tiếp theo

- Branch release

> Khi bạn cần phát hành bản phát hành mới, chúng tôi tạo một nhánh bản release dựa trên nhánh develop. Sau khi branch release hoàn tất, chúng ta sẽ merge nó và thành các nhánh main và develop.

- Branch hotfix

> Khi chúng tôi tìm thấy một lỗi mới trong dự án của chúng, nghĩa là trong môi trường production thì chúng ta cần tạo một nhánh hotfix. Sau khi hotfix hoàn tất, chúng tôi hợp nhất trở lại các nhánh Master và Develop, vì vậy những thay đổi trong Hotfix sẽ vào bản phát hành tiếp theo.

!['gitflow'](git-model@2x.png)

## Progress

### Qúa trình khởi tạo dự án mới

- Khởi tạo 2 branch là `main` và `develop`, bao gồm các setup cần thiết cho dự án

### Bắt đầu quá trình phát triển một chức năng mới

Để phát triển chức năng mới bạn nên bắt đầu từ nhánh phát triển 'develop':

- Tạo branch `feature` từ `develop` để làm tính năng mới

### Kết thúc quá trình phát triển một chức năng

Điều này xảy ra sau khi bạn đã phát triển xong một chức năng:

- Đứng từ branch `develop` merge branch `feature`
- Xóa branch `feature` (local & remote)

### Bắt đầu một release mới

- Tạo branch `release` từ branch `develop`

### Kết thúc release

- Đứng từ branch `main` merge branch `release`
- Đánh **tag** và push **tag** cho branch `main`.
- Xóa branch `release` (local & remote)

### Bắt đầu Hotfix

- Nếu có lỗi tạo branch `hotfix` từ branch `main`
- Đứng từ `main` merge branch `hotfix`

### Kết thúc Hotfix

- Xóa branch `hotfix` (local & remote)


<https://danielkummer.github.io/git-flow-cheatsheet/index.vi_VN.html>