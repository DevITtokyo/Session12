// Viết một chương trình JavaScript 
// tìm giá trị lớn nhất trong mảng cho trước.
let numbers =[-3,5,1,3,2,10];
console.log(numbers);
let max = numbers[0];
let index = 0;
for (let i=0; i<numbers.length; i++) {
    if (numbers[i]>max) {
        max = numbers[i];
        index = i;
    }
}
alert(" max " +max+ " at position " +index);
console.log('Giá trị lớn nhất trong mảng là : ',max);