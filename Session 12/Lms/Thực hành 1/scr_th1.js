let x =0;
// Tạo mảng array để lưu các giá trị được nhập vào
let array = Array();
// Xây dựng hàm add_element_to_array() để thêm mới một phần tử từ form
/*
- Lấy giá trị từ input-text và gán phần tử ở vị trí x trong mảng mỗi lần hàm add_element_to_array() được gọi
- Tăng giá trị x lên 1
- Hiển thị phần tử vừa được thêm vào mảng
- Gán giá trị rỗng cho input-text
*/
function add_element_to_array() {
    array[x]=document.getElementById("txtValue").value;
    alert("Element: " + array[x] +" Added at index " + x);
    x++;
    document.getElementById("txtValue").value="";
}
function display_array() {
    let e = "<hr/>";
    for  (let i=0; i<array.length; i++) {
        e+="Element " + i + ' = ' +array[i] + "<br/>";
    }
    document.getElementById("result").innerHTML=e;
}