# How-to-use-git-and-github
## I.  Giới thiệu Git:
    + Git dùng để quản lý phiên bản code, rất thuận lợi trong làm việc nhóm thậm chí làm 1 mình.
    + Git có nhiều trang hỗ trợ như: github.com, bitbucket.com, ... Git không phải chỉ dùng riêng cho trang github, mà nó giống như là 1 chuẩn quản lý phiên bản, tương tự như SVN (theo cách hiểu của tôi).
    + Có nhiều công cụ hỗ trợ để đưa code lên git thông qua Visual Studio Code, IDE, Command prompt, Git Bash, Git GUI...

## II. Các khái niệm trong Git:
    + Repository (kho): là thư mục. Thư mục trên github.com gọi là remote repository, còn ở máy tính là local repository.
    + Branch (nhánh): ví dụ tôi làm 1 chức năng trên 1 nhánh này, bạn rẽ sang nhánh khác làm chức năng khác, sau này gộp lại (merge)
    + Remote (máy chủ): thư mục repository trên máy chủ (ở đây là github)
    + Add (thêm): sau khi làm gì đó thay đổi thì add (thêm) cái thay đổi đó vào
    + Commit: xác nhận chốt thay đổi
    + Pull (kéo về): lấy code của thằng làm chung đã push (đẩy) lên.
        Pull từ từ branch nào về branch hiện tại cũng được, nếu pull từ branch khác thì sẽ có "Merge" xảy ra, còn pull từ cũng branch thì là như update code base. 
        Khi mình làm thay đổi dưới local trùng với chỗ người nào đó đã sửa và push lên (nhưng mình chưa pull về trước đó), thì khi pull về sẽ có "conflict". 
        "Conflict" nghĩa là "đụng độ". Khi code pull về bị conflict, cần phải "Resolve conflict" bằng cách chọn thay đổi nào được giữ lại và thay đổi nào sẽ xóa đi hoặc giữ lại          cả 2 và chỉnh sửa cho tụi nó hoạt động.
    + Push (đẩy): đưa code lên remote repository, nghĩa là đẩy lên cho người khác kéo về (pull)
    + Collaborators: làm việc nhóm với git:
    + ai tạo repository thì vào: https://github.com/<tên_tài_khoản>/<tên_repository>/settings/collaboration
    + gõ email github thành viên vào, nếu người được mời làm chung đồng ý thì cùng làm thôi.
