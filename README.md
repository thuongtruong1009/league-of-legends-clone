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
    
## III. Ví dụ thực tế:
    + Tải về cài đặt git vào máy tính: https://git-scm.com/
    + Tiếp theo là phải tạo 1 remote repository (thư mục trên github.com) đó là chỗ khi push code sẽ lên, repository đó có 1 đừờng dẫn, đuôi là *.git.
      ví dụ: https://github.com/thuongtruong1009/huong-dan-su-dung.git. Việc tạo này phải tạo trên trang github.com, bằng cách tìm nút tạo ("New repository") trên Github.
    + Tạo 1 thư mục để chứa code trong máy tính. Thư mục này sẽ liên kết với cái thư mục trên github sau này (làm theo các bước dưới)
    + Khởi tạo git trong thư mục mới: click chuột phải chọn "Git bash here" để mở màn hình console. Gõ: git init
    + Liên kết nó với thư mục ở github.com: cũng ở màn hình consolde mới mở lên, gõ: git remote add origin <đường dẫn tới thư mục trên github.com>
      ví dụ: git remote add origin https://github.com/thuongtruong1009/huong-dan-su-dung.git
    + Sau khi liên kết 2 thư mục, để lấy hết nội dung trên thư mục ở github về máy tính, trên console, gõ: git pull origin master
    + Khi làm gì đó thay đổi trên thư mục ở máy tính(local), phải ADD sau đó COMMIT sau đó PUSH lên github. Làm như sau:
        ADD: mở git bash (màn hình console) lên, gõ: git add *
        COMMIT: cũng trên bash, gõ: git commit -m "ghi chú nội dụng đã thực hiện của việc commit "
        PUSH: cũng trên bash, gõ: git push origin master
    + Khi ai đó push thay đổi gì mới lên Github thì lấy chúng về máy tính bằng cách: gõ trên bash tại thư mục đã khởi tạo git (git init): git pull origin master
    + Hết, luyện tập bằng cách tạo 1 repo trống trên github cá nhân.
    
## IV. Git GUI:
    + Git GUI cho phép dùng git với giao diện, trực quan, bấm nút mà không cần gõ lệnh.
    + SourceTree: miễn phí và lợi hại: https://www.sourcetreeapp.com
    + ToroiseGit: cũng miễn phí, ai dùng svn quen thì TortoiseGit thôi: https://tortoisegit.org/
    + "Integrated Source Control" của IDE: là trình quản lý git tích hơp có sẵn trong các IDE ví dụ như VSCode, Visual Studio... cũng thuận tiện và lợi hại không kém.
