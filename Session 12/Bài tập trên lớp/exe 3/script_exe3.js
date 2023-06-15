/*
Bài 3: Nhập vào mảng 1 chiều gồm 5 phần tử bàn phím.
	- Sử dụng for..in để in ra các phần tử của mảng
	- Sử dụng for..of để in ra các phần tử lẻ trong mảng
	- Sử dung for để in ra các phần tử từ cuối lên đầu
*/

let arr =[];
for (let i=0; i<5; i++) {
    let number = parseInt(prompt("Nhập vào số thứ " +(i+1)));
    arr.push(number);
}
console.log((arr));
// Sử dụng for..in để in ra các phần tử của mảng
for (let index in arr) {
    console.log(`Ở tại chỉ số ${index} ==> ${arr[index]}` ); 
}

console.log((arr));
// Sử dụng for..in để in ra các phần tử của mảng
for (let element of arr) {
    console.log(element); 
}
console.log(arr);
//Sử dung for để in ra các phần tử từ cuối lên đầu
//  let reversedArr =[];
console.log('In đảo ngược mảng');
 for (i= arr.length-1; i>=0; i--) {
    console.log(arr[i]);
 }

