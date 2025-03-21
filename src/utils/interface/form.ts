//from chung để dùng cho cả login và register
export interface IFormRegister {
  nameAccount: string;
  password: string;
  [key: string]: string; // index signature. Nó cho phép có thể chứa thêm các thuộc tính mà không được định nghĩa tĩnh trước
}

//interface dùng cho form ở trang giới thiệu
export interface IFormReduce {
  fullName: string;
  email: string;
  [key: string]: string;
}
