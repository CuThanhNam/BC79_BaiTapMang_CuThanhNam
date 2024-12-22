let numberArr = []; 
let realNumberArr = [];

let getArray = () => {
    // MẢNG SỐ NGUYÊN
    if (document.getElementById("numbers").value == "") {
      return;
    }
    let number = document.getElementById("numbers").value * 1;
    numberArr.push(number);
    // reset input
    document.getElementById("numbers").value = "";
    // In ra mảng hiện tại
    document.getElementById("result-numbers").innerText = `Mảng hiện tại: ${numberArr}`;
  };
  
//1.Tổng số dương:
let sumPositive = () => {
    getArray();
    let sumPositive = 0;
    numberArr.forEach((item) => {
     if(item > 0){
         sumPositive = sumPositive + item;
     }
    });
    document.getElementById("result-sum-positive").innerText = `Tổng số dương: ${sumPositive}`;
};

//2.Đếm số dương:
let countPositive = () => {
    getArray();
    let countPositive = 0;
    numberArr.forEach((item) =>{
    if(item > 0){
        countPositive = countPositive + item;
    }
   });
   document.getElementById("result-count-positive").innerText = `Đếm số dương: ${countPositive}`;
}

//3.Tìm số nhỏ nhất:
let min = () => {
    getArray();
    let min = numberArr[0];
    numberArr.forEach((item) =>{
    if(item < min){
        min = item;
    }
   });
   document.getElementById("result-min").innerText = `Số nhỏ nhất: ${min}`;
}

//4.Tìm số dương nhỏ nhất:
let findSmallestPositiveNumber = () => {
     getArray();
    // Tạo mảng mới chứa số dương từ mảng cũ
    let positiveNumbersArr = [];
    numberArr.forEach((item) => {
      if (item > 0) {
        positiveNumbersArr.push(item);
      }
    });
  
    // Nếu mảng mới không có số dương nào thì trả về thông báo
    if (positiveNumbersArr.length === 0) {
      document.getElementById(
        "soDuongNhoNhat"
      ).innerText = `Không có số dương nào trong mảng!`;
    }
    // Duyệt mảng mới tìm số dương nhỏ nhất trong mảng mới
    let minPositive = positiveNumbersArr[0];
    positiveNumbersArr.forEach((item) => {
      if (item < minPositive) {
        minPositive = item;
      }
    });
    document.getElementById(
      "soDuongNhoNhat"
    ).innerText = `Số dương nhỏ nhất trong mảng là: ${minPositive}`;
  };
//5.Tìm số chẵn cuối cùng:
let findLastEvenNumber = () => {
    getArray();
    let lastEvenNumber = 0;
    numberArr.forEach((item) => {
      if (item % 2 == 0) {
        lastEvenNumber = item;
      }
    });
    document.getElementById(
      "soChanCuoiCung"
    ).innerText = `Số chẵn cuối cùng trong mảng là: ${lastEvenNumber}`;
  };
    
//6.Đổi chỗ:
let swapArrayPositions = () => {
    getArray();
    // Lấy giá trị 2 vị trí mà người dùng muốn đổi
    let index1 = document.getElementById("index1").value * 1;
    let index2 = document.getElementById("index2").value * 1;
  
    // Xét điều kiện cả 2 vị trí đều phải >= 0 và bé hơn độ dài của mảng
    if (
      index1 >= 0 &&
      index2 >= 0 &&
      index1 < numberArr.length &&
      index2 < numberArr.length
    ) {
      // Gán giá trị của biến tạm là giá trị của phần tử vị trí 1, gán giá trị phần tử vị trí 1 là phần tử vị trí 2, gán giá trị phần tử vị trí 2 là biến tạm
      let temp = numberArr[index1];
      numberArr[index1] = numberArr[index2];
      numberArr[index2] = temp;
      // In ra kết quả
      document.getElementById(
        "doiCho"
      ).innerText = `Mảng sau khi đổi chỗ: ${numberArr}`;
    } else {
      document.getElementById("doiCho").innerText = `Vị trí nhập không hợp lệ!`;
    }
  };
  
//7.Sắp xếp tăng dần:
function soTangDan() {
    getArray();
    let n = numberArr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (numberArr[j] > numberArr[j + 1]) {
                // Hoán đổi nếu phần tử hiện tại lớn hơn phần tử kế tiếp
                let temp = numberArr[j];
                numberArr[j] = numberArr[j + 1];
                numberArr[j + 1] = temp;
            }
        }
    }
    document.getElementById("sapXepTangDan").innerText = `Mảng sau khi sắp xếp: ${numberArr}`;  
}

//8.Tìm số nguyên đầu tiên:
let isPrime = (num) => {
    if (num <= 1) {
      return false; // Các số nhỏ hơn hoặc bằng 1 không phải số nguyên tố
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      // Math.sqrt là hàm lấy căn bậc 2
      // Duyệt từ 2 đến căn bậc hai của num
      if (num % i === 0) {
        // Nếu tìm thấy ước số
        return false; // Không phải số nguyên tố
      }
    }
    return true; // Nếu không có ước số nào, là số nguyên tố
  };
  function findFirstPrimeNumber() {
    getArray();
    for (let i = 0; i < numberArr.length; i++) {
      if (isPrime(numberArr[i])) {
        document.getElementById(
          "soNguyenDauTien"
        ).textContent = `Số nguyên tố đầu tiên là: ${numberArr[i]}`;
        break; // Dừng vòng lặp khi tìm thấy số nguyên tố đầu tiên
      }
    }
  };

//9.Đếm số nguyên:
function getArray2 () {
    // MẢNG SỐ NGUYÊN
    if (document.getElementById("realnumbers").value == "") {
      return;
    }
    let realnumbers = document.getElementById("realnumbers").value * 1;
    realNumberArr.push(realnumbers);
    // reset input
    document.getElementById("realnumbers").value = "";
    // In ra mảng hiện tại
    document.getElementById("real-numbers").innerText = `Mảng hiện tại: ${realNumberArr}`;
  };
function countIntegers() {
        getArray2();
      // Duyệt mảng số thực
      let count = 0;
      realNumberArr.forEach((item) => {
        if (Number.isInteger(item)) {
          count++;
        }
      });
      document.getElementById(
        "demSoNguyen"
      ).innerText = `Số nguyên trong mảng số thực là: ${count}`;
    };

//10.So sánh số âm và số dương:
function comparePositiveAndNegative() {
    getArray();
    // Khởi tạo biến đếm số dương và số âm
    let positiveCount = 0;
    let negativeCount = 0;

    // Duyệt qua từng phần tử trong mảng
    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr[i] > 0) {
            positiveCount++; // Tăng đếm số dương
        } else if (numberArr[i] < 0) {
            negativeCount++; // Tăng đếm số âm
        }
    }

    // document.getElementById("soSanhAmVaDuong").innerText =
    if (positiveCount > negativeCount) {
        document.getElementById("soSanhAmVaDuong").innerText =
        `Số lượng số dương > số âm`;
    } else if (negativeCount > positiveCount) {
        document.getElementById("soSanhAmVaDuong").innerText =
        `Số lượng số âm > số dương`;
    } else {
       document.getElementById("soSanhAmVaDuong").innerText =
       `Số lượng số âm = số dương`;
    }

   
}