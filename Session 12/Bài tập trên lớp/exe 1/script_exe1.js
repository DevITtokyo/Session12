// Bài 1: Khai báo mảng 1 chiều kiểu số, nhập 5 phần tử từ 
//     bàn phím,duyệt mảng và in ra các phần tử là số chẵn (push)
//     - Xóa phần tử ở cuối mảng
//     - Thêm 2 phần tử có giá trị là 1,2 ở đẩu mảng (unshift)
//     - Xóa phần tử đầu tiên của mảng (shift)

// Khai báo mảng 1 chiều kiểu số
    let arr = [];
    // nhập 5 phần tử vào mảng và duyệt mảng
        for (let i=0; i<5; i++) {
            let number = +prompt("Nhập vào số thứ " + (i+1));
            arr.push (number);
        }
        console.log(arr);
    // in ra các phần tử là số chẵn (push)
        console.log("Các số chẵn của mảng là: ");
        for (i=0; i<arr.length; i++) {
            if (arr[i]%2==0) {
                console.log(arr[i]);
            }
        }
        console.log(arr);
    //  Xóa phần tử ở cuối mảng
        console.log('Phần tử xoá ở cuối mảng là : ' +arr.pop());
       
    //  Thêm 2 phần tử có giá trị là 1,2 ở đẩu mảng (unshift)
        arr.unshift(1,2);
        console.log(`Mảng sau khi thêm 2 phần tử đầu tiên là : ` ,arr);
    // Xóa phần tử đầu tiên của mảng (shift)
        arr.shift();
        console.log("Mảng sau xoá phần tử đầu tiên là : " , arr);


