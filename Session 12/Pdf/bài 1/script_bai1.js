// Khai báo mảng một chiều có tên arrayInt
let arrInt = []
//a. Nhập 5 giá trị số nguyên cho mảng từ bàn phím
for (let index= 0; index < 5; index++) {
    let number = parseInt(prompt("Nhập vào số nguyên thứ " +(index+1)));
    arrInt.push(number);
}
//b. Hiển thị giá trị các phần tử của mảng
for (index=0; index<arrInt.length; index++) {
    console.log(arrInt[index]);
}

// c.In các phần tử có giá trị chẵn và tính tổng

let sumEvenNumber = 0;
console.log("Số chẵn trong mảng là : ");
for (index=0; index<arrInt.length; index++) {
    if (arrInt[index]%2==0) {
        sumEvenNumber += arrInt[index];
        console.log(arrInt[index]);
    } 
}
console.log("Tổng của các số chẵn trong mảng là : "+sumEvenNumber);


// d.In các phần tử có chỉ số lẻ và tính tổng

let sumOddNumber = 0;
console.log("Các số lẻ trong mảng là: " );
for (index = 0; index < arrInt.length; index++) {
    if (arrInt[index]%2!==0) {
        sumOddNumber += arrInt[index];
        console.log(arrInt[index]);
    }
}
console.log("Tổng của các số lẻ trong mảng là : "+sumOddNumber);

// e.In giá trị các phần tử trong mảng là số nguyên tố

console.log("Các phần tử là số nguyên tố trong mảng là:");
for (index = 0; index < arrInt.length; index++) {
    let checkPrime = true;
    if (arrInt[index]>=2) {
        for ( i = 2; i<=Math.sqrt(arrInt[index]); i++) {
            if (arrInt[index] % i==0) {
                checkPrime = false;
                break;
            }
        }
        if (checkPrime) {
            console.log(arrInt[index]);
        }
    }
}

// f.In các phần tử có giá trị là max hoặc min

let max = arrInt[0];
let min = arrInt[0];
for (index=0; index<arrInt.length; index++) {
    if (arrInt[index]>max) {
        max = arrInt[index];
    }
    if (arrInt[index]<min) {
        min = arrInt[index];
    }
}
console.log("Giá trị lớn nhất là : "+max);
console.log("Giá trị nhỏ nhất là : "+min);

// g.Sắp xếp mảng giảm dần và in giá trị các phần tử mảng 
// sau khi sắp xếp (không và có sử dụng hàm sort)
 
for (i=0; i<arrInt.length; i++) {
    // max i=arrInt.length - 2
    for (let j = i+1; j<arrInt.length; j++) {
        // max j = arrInt.length-1
        // do sánh arrInt[i] với arrInt[j]  
        if (arrInt[i]<arrInt[j]) {
            let temp = arrInt[i];
            arrInt[i]=arrInt[j];
            arrInt[j] = temp;
        }  
    }
}
console.log('Mảng sau khi sắp xếp là : ', arrInt);



// for (arrInt.length=5; index>=0; index--){
//     console.log("Mảng được sắp xếp theo thứ tự giảm dần là : " +arrInt[index]);
// }

// Nhập vào 1 số vè thống kê số phần tử có giá trị = giá trị nhập vào

let numberFind = parseInt(prompt("Nhập vào 1 số cần tìm"));
let cnt = 0;
for (i=0; i<arrInt.length; i++) {
    if (arrInt[i]==numberFind) {
        cnt++;
    }
}
console.log('Giá trị của phần tử' ,+numberFind+ " là " +cnt );