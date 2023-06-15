// Khai báo mảng 2 chiều số nguyên arrInt
let arrInt = [];
//a. Nhập giá trị các phần tử của mảng từ bàn phím
let numberRows= +parseInt(prompt("Nhập vào số dòng của mảng 2 chiều"));
let numberCols= +parseInt(prompt("Nhập vào số cột của mảng 2 chiều"));

for (let n=0; n<numberRows; n++) {
    // khai báo mảng con chứa giá trị mỗi dòng
    let arrRows=[];
    for (let m=0; m<numberCols; m++) {
        // Nhập vào 1 dòng của mảng 2 chiều
        let number = +parseInt(prompt("Nhập vào số nguyên dòng " +(n+1)+ " , cột " + (m+1) + ":"));
        arrRows.push(number);
    }
    arrInt.push(arrRows);
}
console.log(arrInt);

// b.In giá trị các phần tử của mảng
for (let n=0; n<numberRows; n++) {
    for (let m=0; m<numberCols; m++) {
        console.log(`arrInt[${n}][${m}]=${arrInt[n][m]}`);
    }
}
// In giá trị các phần tử nằm trên đường biên
for ( n=0; n<numberRows; n++) {
    for (m=0; m<numberCols; m++) {
        if (n==0 || m==0 || n==numberRows || m==numberCols) {
            console.log(arrInt[n][m]);
        }
    }
}

// In giá trị các phần tử nằm trên đường chéo chính và phụ
// điều kiện phải là ma trận vuông (dòng=cột)
if (numberRows=numberCols) {

}
console.log('Các phần tử trên đường chéo chính');
for (let n=0; n<numberRows; n++) {

}

// Săp xếp mảng tăng dần theo dòng
for (n=0; n<numberRows; n++) {
    // đang xét dòng n
    for (let m = 0; m<numberCols; m++) {
        for (let k = m+1; k<numberCols; k++) {
            if (arrInt[n][m]>arrInt[n][k]) {
                let temp = arrInt[n][m];
                arrInt[n][m] = arrInt[n][k];
                arrInt[n][k] = temp;
            }
        }
    }
}