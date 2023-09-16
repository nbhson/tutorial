# Git Merge

## Git branch
> git branch
Xem tất cả những branch hiện tại ở local

> git branch "tên branch mới"
Tạo ra một branch mới

> git branch nhanh_moi nhanh_muon_checkout
Tạo nhánh mới từ nhánh phụ

> git branch -d "tên branch"
> git branch -D "tên branch"
Xóa một branch ở local

> git push origin --delete "branch in server"
Xóa một nhánh ở server/remote

-d là viết ngắn gọn của –delete và nó chỉ xóa khi nhánh đó đã được merged vào từ nhánh gốc nó base ra. 
-D là –delete và –force => xóa hết ko cần quan tâm

## Git checkout 
> git checkout "tên branch"
Để switch qua lại giữa các branch

> git checkout -b "tên branch"
Tạo nhánh mới và switch sang nhánh mới luôn

## Git fetch
> git fetch
Đồng bộ branch từ server về local

## Git amend
> git commit --amend -m "new message"
Đổi message của commit cuối cùng

## Git merge

### merge fast forward
> git merge "tên branch"
Gộp những thay đổi từ branch phụ vào branch chính
Master sẽ được chạy tới commit mới nhất nếu branch checkout từ master

!['fast forward'](../img/image_2022_06_30T01_54_35_619Z.png)

### merge no fast forward
> git merge "tên branch" --no-ff

!['no fast forward'](../img/imgpsh_fullsize_anim-nff-1.png)
!['no fast forward'](../img/imgpsh_fullsize_anim-nff-2.png)


Merge branch 'add-info' of https://github.com/nbhson433/git-tutorial into add-info
> Nếu từ master mà merge một nhánh không phải checkout từ master (hoặc là khác history) thì nó sẽ tạo ra 1 cái "commit merge"

!['merge'](../img/imgpsh_fullsize_anim.png)

Git learning: <https://learngitbranching.js.org/>