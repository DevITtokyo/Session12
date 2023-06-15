let styles = ["Jazz" , "Blues"];
// a.Thêm phần tử “Rock-n-Roll” vào cuối mảng
styles.push("Rock-n-Roll");
console.log('Sau khi thêm phần tử “Rock-n-Roll” vào cuối mảng',styles);

// b. Thay thế phần tử nằm chính giữa mảng bằng “Classics” 
// nếu mảng có tổng số phần tử là lẻ
for (let index=0; index<styles.length; index++ ){
    if (styles.length%2!==0) {
        styles.splice(1,1,"Classics");
    }
}
console.log('Sau khi thay thế phần tử nằm chính giữa ',styles);

// c.Xóa phần tử đầu tiên của mảng và hiển thị mảng
styles.shift();
console.log('Sau khi xoá phần tử đầu mảng : ',styles);

// d.Thêm phần tử “Rap” và “Reggae” vào đầu mảng và hiển thị
styles.unshift("Rap" , "Reggae");
console.log('Sau khi Thêm phần tử “Rap” và “Reggae” vào đầu mảng : ',styles);
