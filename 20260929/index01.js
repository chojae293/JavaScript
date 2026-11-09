//비교연산자

/* 
Q) 범퍼카 탑승 가능판별하기
    놀이동산에서 범퍼카는 신장이 120cm 이상인 어린이만 탑승할수있습니다.
    신장을 입력하면 범퍼카를 탑승할 수 있는지 여부를 알려주는 프로그램을 만들어봅시다.
    (탑승가능은 true,불가는false로 출력) 
*/

var height =Number(prompt('어린이의 신장을 입력하세요.'));
console.log(`탑승가능 여부: ${height > 120}`);

/* 
비연산자 && 피연산자  -> true && true = ture
120cm 이상이고 180cm미만 탑승가능
*/

console.log(`탑승가능 여부:${height >= 120 && height < 180}`);

/*

*/
var num1 = 5;
var num2 = 8;
 
console.log(num1 != num2); //true
console.log(num1 == num2); //false
console.log(num1 > num2);  //false
console.log(num1 >= num2); //false
console.log(num1 < num2);
console.log(num1 <= num2);               //true

console.log(`5 = '5': ${5 == '5'}`);     //ture
console.log(`5 = '5': ${5 === '5'}`);    //false

console.log(`5 != '6': ${5 != '6'}`);    //ture
console.log(`5 !== '6': ${5 !== '6'}`);  //ture

/*
논리연산자 &&(and), ||(or), !(NOT)

&&(and)
    : true && true =>true
    : true && false => false
    : false && true => false
    : false && flase => false

or(and)
    : true || false => true
    : false || true => true
    : false || flase => false
    : true || true => true

!(NOT)
    : !true  => false
    : !false  => true
    : !!false  => false


/*
Q) 컴퓨터하고 홀/짝 게임
*/

var random = Math.random();
console.log(`rnadom: ${random}`);

random =parseInt(random * 10);
console.log(`random: ${random}`);

var userSelectedNumber = Number(prompt('1.짝     2.홀'));

console.log(`WIN: ${(random % 2 === 0) && userSelectedNumber === 1 }`); //o
console.log(`WIN: ${(random % 2 !== 0) && userSelectedNumber === 2 }`); //o

console.log(`LOSE: ${(random % 2 === 0) && userSelectedNumber === 2 }`); //x
console.log(`LOSE: ${(random % 2 !== 0) && userSelectedNumber === 1 }`); //x

console.log(`random: ${random}`);
console.log(`userSelectedNumber: ${userSelectedNumber}`);


/*
Q) (10 > -10) && (3.14 > 0) || (-1 == 0)
    true && true || false
    true || false
    true

Q) 다음 지문을 읽고 밑줄 친 부분에 맞는 코드를 완성하시오
    사무실 냉/난방기는 실내 온다가 16도 이하 또는 28도 초과 시 작동한다
    temperature <= (16) (||) temperature
*/

//자동 증강 연산자: ++,--
var score = 80;
console.log(`score ${score}`);

//score = score + 1;
//score += 1;
score++;
console.log(`score: ${score}`);      //80

var myScore = 90;
console.log(`myScore: ${myScore}`);  //90

var result = ++myScore;
console.log(`result: ${result}`);    //91

// var result =myScore++;
// console.log(`result: ${result}`);  //
 
var result = myScore++;
console.log(`result: ${result}`);     //90
console.log(`myScore: ${myScore}`);   //91


//삼항(조건식) 연산자: 3개의 항을 사용하는 연산자, 조건 ? 값1 : 값2 ****
var resultVar = (5 > 1) ? '5는 1보다 크다' : '5는 1보다 크지않다.';
// 해석: resultVar 의 항이 true면 항다음 조건이 되고 false면 그다음 항이 나온다
console.log(`resultVar : ${resultVar}`); // 5는 1보다 크다


// Q) 사용자가 시험 점수를 입력하고 점수가 80이상이면 "합격", 그렇지 않으면 "불합격"을 출력하자

var exampleScore = prompt('본인 시험 점수 입력:');
var resultMessage = Number(exampleScore) >= 80 ? '합격' : '불합격';
console.log(`resultMessage: ${resultMessage}`);


var childHeight = prompt('어린이 신장 입력:');
var msg = Number(childHeight) >= 120 && Number(childHeight) < 180 ? '탑승가능' : '집에가';
console.log(`msg: ${msg}`)

// Q) DW 마트는 수입과 지출을 입력하면 흑자인지 적자인지 판별하는 프로그램을 도입하려고 합니다. 
//    마트수익 결과를 알려주는 프로그램을 만들어봅시다.

var martp = prompt('수익을 입력:');
var martm = prompt('지출을 입력:');
var martRevenue = Number(martp) - Number(martm) > 0 ? '흑자' : '적자';
console.log(`martRevenue: ${martRevenue}`)