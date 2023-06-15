// Bài 2: Nhập số dòng (n) và số cột (m).
//  Nhập dữ liệu cho mảng 2 chiều gồm n dong và m cột. 
// In ra phần tử có giá trị max, min

        let m = +prompt ("Nhập vào số cột");
        let n = +prompt ("Nhập vào số dòng");
        let arr=[];
        for (let i=0; i<n; i++) {
            arr[i] = [];
            for (let j=0; j<m; j++) {
               let number = +prompt("Nhập vào phần tử ở dòng " + (i+1) + ", cột " + (j+1) + ":" );
               arr[i][j] = number;
            }
        }
        let min = arr[0][0];
        let max = arr[0][0];
        for (i=0; i<n; i++) {
            for (j=0; j<m; j++) {
                if (arr[i][j]>max) {
                    max = arr[i][j];
                }
                if (arr[i][j]<min) {
                    min = arr[i][j];
                }
            }
        }
        console.log("Giá trị lớn nhất là : " +max);
        console.log("Giá trị nhỏ nhất là : " +min);