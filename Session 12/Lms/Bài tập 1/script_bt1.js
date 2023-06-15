/*
    Bài 1: Viết một chương trình JavaScript 
    để nối tất cả các phần tử trong một mảng chuỗi lại với nhau.
*/
let animals = [" Lion "," Tiger "," Wolf "," Kangaroo "];
console.log(animals);
console.log('Mảng sau khi chuyển về chuỗi là : ',animals.join(''));


/*
    Bài 2: Viết một chương trình nhận một số nhập vào 
    và chèn dấu (_) giữa 2 số chẵn.
*/
var number = prompt("Nhập vào 1 số");
console.log('Số đã nhập là : ',number);
var str = number.toString();
var result = [str[0]];

for (var i = 1; i < str.length; i++) {
  if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
    result.push('-', str[i]);
  } else {
    result.push(str[i]);
  }
}
console.log('Số sau khi được ngăn cách giữa 2 số chẵn : ',result.join(''));

/* 
   Bài 3: Viết một chương trình nhập vào một chuỗi 
   và chuyển các ký tự chữ thường trong chuỗi vừa nhập sang thành dạng chữ hoa. 
*/

let string = prompt("Nhập vào 1 chuỗi");
let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let LOWER = 'abcdefghijklmnopqrstuvwxyz';
let result3 =[];
for (let i=0; i<string.length; i++) {
    if (UPPER.indexOf(string[i]) !==-1) {
        result3.push(string[i].toLocaleLowerCase());
    } else if (LOWER.indexOf(string[i]) !==-1) {
        result3.push(string[i].toLocaleUpperCase());
    } else {
        result.push(string[i]);
    }
}
console.log(result3.join(''));
