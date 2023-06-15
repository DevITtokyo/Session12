/*
Viết một chương trình JavaScript thực hiện đảo ngược 
các giá trị trong một mảng đã cho. 
Không sử dụng phương thức reverse()
*/

let x = [-3,5,1,3,2,10];
let first = 0;
let last = x.length-1;
while (first < last) {
    let b = x[first];
    x[first] = x[last];
    x[last] = b;
    first++;
    last--;
}
console.log('Mảng đảo ngược là',x);