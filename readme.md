Anh cần cài nodejs 8.11.3 để sửa dụng code test này.

(anh có thể tải node bản 64bit tại đây ạ: https://nodejs.org/dist/v8.11.3/node-v8.11.3-x64.msi )

1. Để test, a cần chạy file run.bat

2. Code sẽ đưa thông tin cho xml-to-pdf, gồm 2 thông tin:
- nội dung invoice.xml thông qua stdin
- nội dung mẫu hoá đơn template.html, thông qua 1 URL (dạng http...). URL này chỉ có thể truy cập nội bộ trong server với nhau. URL này sẽ đc truyền vào qua arguments --templateURL

(Để parse arguments, anh có thể tham khảo thư viện này ạ: https://github.com/commandlineparser/commandline)

3. xml-to-pdf cần xử lý và trả về dữ liệu pdf qua stdout.

4. stdout này sẽ đc code em đưa bắt lại và ghi ra file output.pdf
(hiện tại nó ghi ra file nhưng khi chạy thật, nó sẽ truyền stdout này về cho user ạ)

File xml-to-pdf nằm trong thư mục bin là file a cần thay thế. Ngoài ra anh cũng cần thay thế file trong input bằng file xml và html tương ứng để test ạ.