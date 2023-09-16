# Git Reset

## git restore
> git restore --staged .
Đưa tất cả những thằng trong state về directory

> git restore --staged "tên file"
Đưa từng trong state về directory

## git reset
> git reset 
> git reset .
Loại bỏ file change ra khỏi state về directory

> git reset "tên file"
Dùng để unstate file

> git reset --soft "commitId"
Dùng để để revert commit (quay về staging area)

> git reset "commitId"
> git reset --mixed "commitId" (DEFAULT)
Dùng để để revert commit (quay về working dir)

>git reset --hard "commitId"
Dùng để để revert commit **REMOVE COMMIT + MẤT LUÔN CODE CŨ**