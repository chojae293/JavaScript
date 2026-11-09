/*
연산자 종류
산술 연산자: +, -, *, /, %(나머지), **(제곱)
할당(대입) 연산자: =, +=,-=, *=, /=, %=
비교 연산자: ==, !=, >, >=, <=, <, ===, !== 
논리 연산자: &&, ||, !
증강 연산자: ++, --
삼항 연산자: 3개의 항을 사용하는 연산자, 조건 ? 값1 : 값2



// */

// //산술 연산자 
// var num1 = 10;
// var num2 = 20;
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(10 % 3);
// console.log(3 ** 2);
// console.log(3 ** 5);

// //Q1) DW전자 회사의 1분기 매출의 총합을 구하고자 합니다. 프로그램을 만들어 보세요
// //사용자가 1월 2월 3월 메츨엑을 입력하면 1분기 총합을 출력하자
// var sales = prompt('1월 매출 입력:');
// var sales = prompt('2월 매출 입력:');
// var sales = prompt('3월 매출 입력:');
// console.log('1분기 매출 총합:',(sales1 +sales2 +sales3));


// var sales1 = parseInt(prompt('1월 매출 입력:'));
// var sales2 = parseInt(prompt('1월 매출 입력:'));
// var sales3 = parseInt(prompt('1월 매출 입력:'));
// console.log('1분기 매출 총합:',(sales1 + sale2 + sales3));


// //문자열 덧셈 
// console.log("Hello" + "world"); //hello world (덧셈 연결 연산자)

// //뺄셈 연산
// var num3 =10;
// var num4 = 20;
// console.log(num3 -num4);

// //Q2) DW 전자에서 1분기 수익을 계산하려고 합니다. 
// // 사용자가 1분기 매출액과 매입액을 입력하면 수익을 계산해주는 프로그램을 만들어봅시다.
// var sales = Number(prompt('1분기 매출 입력:'));
// var purchase = Number(prompt('1분기 매입 입력:'));
// var profit = sales - purchase;
// console.log('수익:',profit);

// //Q3) #곱셉 방의 넓이 구하기 
// // 가로,세로 길이를 입력하면 방의 넓이를 계산해주는 프로그램을 만들어봅시다.
// var width = Number(prompt('가로 길이 입력:'));
// var height = Number(prompt('세로 길이 입력:'));
// console.log('방의 넓이:',(widht*height));

// //템플릿 문자열 *****
// console.log('방의 넓이: ${width * heidgt}');

// //Q4) BMI구하기
// //  사용자가 몸무게, 신장을 입력하면 BMI를 계산해주는 프로그램
// //  BMI = 몸무게/신장의 제곱

// var weight = Number(prompt('몸무게(KG) 입력:'));
// var height = Number(prompt('신장(m) 입력:'));
// var bmi = weight parseInt(weight/(height **2));   // parseInt --> 정수만 나오기
// console.log('BMI: ${bmi}');

// //나눗셈 할때 주의사항 
// // 숫자 0을 어떤 수로 나누어도 결과는 항상 0이다
// console.log(0/10000000); //0

// //Q) 홀짝 게임
// //컴퓨터가 홀짝 진행하고 우리가 맞춘다
// const random = Math.randon();   //0.0~1.0
// console.log(random);
// random = parseInt(random * 10);
// console.log(random);

// var userInputNumber = Number(prompt('홀짝 맞추세요. 1.홀   2.짝'));
// console.log('userInputNumber:${userInputNumber}');
// console.log('random: ${random}');

// //Q) 빵을 나누어 줄수 있는 학생 수 구하기 
// // 길동이는 97개의 빵을 3개씩 같은 반의 친구들에게 나누어 주려고 합니다. 
// // 최대 몇명에게 나누어 줄 수있는지 구하고, 남는 빵의 개수도 구해봅시다.

// var bread = 97;
// var cnt = 3;
// var maxStudentCnt =bread /cnt;
// console.log('maxStudentCnt: ${parseInt(maxStudentCnt)}');
// console.log('restBread: ${restBread}');

//Q) 전염병 예상 감염자 수 구하기 
//    보건 당국은 점염병의 감염 확산 추세를 파악한 결과,
//    하루에 한사람이 한명씩 감염시키는 것으로 나타났습니다.
//    확진자 한 사람이 나올 경우 30일 이후에 몇명의 감염자가 나오는지 계산해봅시다.

var man = 2;
var date = 30;
var total = man ** date;
console.log('total: ${total}');
// 2 * 2 * 2 * 2 * 2

//대입(할당) 연산자, 복합대입 연산자
var num5 =10;
console.log('num5: ${num5}');

num5 += 5;
console.log('num5: ${num5}');


num5 -= 5;
console.log('num5: ${num5}');


num5 /= 5;
console.log('num5: ${num5}');


num5 *= 5;
console.log('num5: ${num5}');


num5 % 5;
console.log('num5: ${num5}');

