// 함수란?
/*
https://hoazzinews.tistory.com/119
함수(Function)란, 특정 작업(로직)을 수행하는 코드 블록에 이름을 붙여 재사용할 수 있도록 만든 것입니다.

즉, 여러 줄의 코드를 하나의 “기능 단위”로 묶어두는 것입니다.
필요할 때마다 함수를 호출하여 같은 동작을 반복할 수 있습니다.

 
함수의 특징

코드를 재사용할 수 있다.
코드의 가독성과 유지보수성이 높아진다.
입력값(매개변수)을 받아, 결과값(반환값)을 돌려줄 수 있다.
*/

//기본 문법
/*
Function 함수이름([input 데이터]) {// []는 : 선택사항이다
    함수 실행부
} // -> 이 구조가함수를 정의했다 
*/


/*
//함수를 정의하는 방법에는 2가지가 있다
// 1. 함수 선언식
function 함수이름(매개변수) {
    // 실행문
}

// 2. 함수 표현식
var 함수이름 = function(매개변수) {   //함수이름이 없으면 어나니머스함수라고한다
    // 실행문
};
// 함수도 하나의 값이므로, 변수에 할당할 수 있다.
//function도 래퍼런스 타입이다. (참조형)
*/


// 1. 함수 선언식
//'안녕하세요'를 출력하는 함수를 정의해보자 
function hello() {          // 함수 정의(선언 + 실행부)
    console.log('안녕하세요');  
}
for(var i=0; i<100; i++){
    hello(); // 함수 호출
}
hello(); // 함수 호출

//2. 함수 표현식
var hello = function() {          // 함수 정의(선언 + 실행부)
    console.log('안녕하세요');  
}
hello(); // 함수 호출 ()-> 함수를 표현하는 상징

//3. 화살표 함수
// 화살표 함수는 ES6에서 새롭게 추가된 함수 정의 방법이다.
// function 키워드 대신 => 기호를 사용하여 함수를 정의한다.
// 화살표 함수는 this 바인딩이 없고, 간결한 문법을 제공한다.


//3-1. 기본 문법
const 함수이름 = () => {

}

const hello1 = () => {
    console.log('안녕하세요');
}
hello();

// Q) 현재 시스템의 날짜와 시간을 출력하는 함수를 정의하고 호출하자
var date = new Date(); // 현재 시스템의 날짜와 시간을 가져오는 객체

function printDate() { 

}


// Q) 현재 시스템의 날짜와 시간을 다음과 같이 출력하는 함수를 정의하고 호출하자
/*
    언어 선택 1.korean 2. English : 1
    korean : 2026년 10월 2일 14시 30분 15초
    english : 2026-10-02 14:30:15
*/

const printDate2 = () => {  

    var today = new Date(); // 현재 시스템의 날짜와 시간을 가져오는 객체
    var selectMenuNumber = prompt('1.KOR 2. English : '); // 사용자에게 입력을 받는 함수

    var year = today.getFullYear(); // 년도
    var month = today.getMonth() + 1; // 월 (0~11)
    var date = today.getDate();
    var hours = today.getHours(); // 시
    var minutes = today.getMinutes(); // 분
    var seconds = today.getSeconds(); // 초

    switch (selectMenuNumber) {
        case '1':
            console.log(`korean : ${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분 ${seconds}초`);
            break;
        case '2':
            console.log(`english : ${year}-${month}-${date} ${hours}:${minutes}:${seconds}`);
            break;
        default:
            console.log('잘못된 입력입니다.');
    }
}

printDate2(); // 함수 호출

// Q) 온도센서 작동 시스템 만들기
/*
 온도센서를 작동 시키고 중단시키는 함수를 선언하고 호출해보자
 */
//function 동사 : 명사(목적어) :코드 컨벤션
function startTemperatureSensor() {
    console.log('START TEMPERATURE SENSOR!!');
}

function stopTemperatureSensor() {
    console.log('STOP TEMPERATURE SENSOR!!');
}

startTemperatureSensor(); // 함수 호출
stopTemperatureSensor(); // 함수 호출


// Q) 내 노트북은 몇 인치일까?
/*
고등학교 졸업 기념으로 노트북을 하나 장만했습니다.
노트북 사이즈에꼭 맞는 파우치를 하나 구매하려고 하는데 사이즈 표에 인치로만 표시되
어있습니다. cm를 인치로 바꿔주는 함수를 만들어봅시다. 
*/

/*
function cmToInch() {
    var width = prompt('노트북 가로사이즈(cm)를 입력하세요 : '); // 사용자에게 입력을 받는 함수
    var height = prompt('노트북 세로사이즈(cm)를 입력하세요 : '); // 사용자에게 입력을 받는 함수
    var inch = cm / 2.54; // 1인치 = 2.54cm
    console.log(`노트북 사이즈 : ${inch.toFixed(2)} inch`); // 소수점 2자리까지 출력
}
cmToInch(); // 함수 호출

*/


// 함수 내에서 또 다른 함수를 호출할 수 있다. (함수 중첩 호출)
function fun1() {
    console.log('fun1() 함수 호출');
}

function fun2() {
    console.log('fun2() 함수 호출');
}

function fun3() {
    fun1();
    fun2();
    console.log('fun3() 함수 호출');
}


//계산기 프로그램
/*
사용자가 숫자 2개를 입력하고 연산자(4칙연산자)를 선택하면 연산결과가 출력되는 프로그램을 만들자

*/
function add() {
    console.log(`덧셈 결과: `)
    console.log(`inputNumber1 + inputNumber2 = ${inputNumber1} + ${inputNumber2} = ${inputNumber1 + inputNumber2}`)
}
function sub() {
    console.log(`뺄셈 결과: `)
    console.log(`inputNumber1 + inputNumber2 = ${inputNumber1} - ${inputNumber2} = ${inputNumber1 - inputNumber2}`)
}
function mul() {
    console.log(`곱셈 결과: `)
    console.log(`inputNumber1 + inputNumber2 = ${inputNumber1} * ${inputNumber2} = ${inputNumber1 * inputNumber2}`)
}
function div() {
    console.log(`나눗셈 결과: `)
    console.log(`inputNumber1 + inputNumber2 = ${inputNumber1} / ${inputNumber2} = ${inputNumber1 / inputNumber2}`)
}
function calculator() {
    if(selctedOperator === 1){
        add();
    }else if(selctedOperator === 2){
        sub();
    }else if(selctedOperator === 3){
        mul();
    }else if(selctedOperator === 4){
        div();
    }
}
var selctedOperator =Number(prompt('연산자 선택: 1.덧셈    2.뺄셈    3.곱셈   4.나눗셈'));
var inputNumber1 = Number(prompt('첫번째 숫자를 입력하세요.'));
var inputNumber2 = Number(prompt('두번째 숫자를 입력하세요.'));

calculator();



