console.log('Hello javascript~');
console.log('Hello WEB!!');
alert('추석');


// 1.변수 정의(선언과 초기화)
// 변수 정의 기본 문법:var 변수명 = 데이터;
// var myScore = 80;
// console.log(myScore);

// myScore = 90;
// console.log(myScore);

// myScore = 'Hello';
// console.log(myScore);

// myScore = '3.14';
// console.log(myScore);

// myScore = "o";
// console.log(myScore);

// myScore = 'true';
// console.log(myScore);

//2. 변수 선언 키워드 (var,(let,const)->ES6+)
//var,let:일반 변수 선언 키워드 
//const:상수 선언

// let myName = "JAEWON";
// console.log(myName);

// myName = "50";
// console.log(myName);

// let myMajor = "drone";
// console.log(myMajor);


const PI = 3.14;
console.log(PI);

// Q-01) 변수 myName과 myMajor에 자신의 이름과 전공을 저장하고 출력해보자!

var myName = "JAEWON";
var myMajor = "drone";

console.log("myName", myName);
console.log("myMajor",myMajor);

var score;
score = 80; 

// Q-02) 다음 순서에 맞추어 코드를 작성해봅시다. 
// intro 변수를 선언하고 'hello'로 초기화 합니다
// intro 변수에 저장된 값을 화면에 출력합니다
// intro 변수의 데이터를 '안녕하세요'로 변경합니다
// 변경된 값을 화면에 출력합니다

var intro = "Hello";
console.log(intro);
intro = '안녕하세요.'
console.log(intro);

// 3.  변수명 규칙
// 3-1. 영문자를 사용한다.

var gildongAge = 20;
console.log(gildongAge);

// var 홍길동나이 = (20);
// console.log(홍길동나이);   #금지

// 3-2. 소문자로 시작한다.
var money = 100;   //권장 (class변수에서 대문자를 사용)
var Money = 100;   //권장하지 않음

// 3-3. 데이터의 의미를 쉽게 파악할 수 있게 짓는다.
// 길동 플레이어

var player ="gildong" ; //권장
var p ="gildong" ;      //권장하지 않음

// 3-4. 변수명이 두개 이상의 단어가 조합될 경우 낙타 표기법을 따른다.
// 새로운 아이템 new item -> newitem(x) , new item -> newItem(o)
// 현재위도값 current location latitude

// 3-5. 예약어(키워드)는 변수명으로 사용할 수 없다.
// var let const for if else return  
// var const = 'asdf';

// 3-6. 언더바(_)를 제외한 특수문자는 사용할 수 없다. 공백 포함
var _score = 100;
var $score = 100;

// 3-7. 숫자는 첫 글자는 제외한 나머지 자리에서만 사용한다.
//var 1player = 'gildong'(x)
var pla1yer = 'gildong'(o)
var player1 = 'gildong'(o)
var _1player = 'gildong'(x)

// 4. 데이터 자료형
// 정수형 (Interger) : 1,100,99,-20,-100,0
// 실수형(float) : 3.14, 0.1, 0.0, -5.231
// 문자열형(String): "Hello", "Hi", "good", 'a',"10",''," " (공백도 문자)
// 논리형(Boolean): true, false



// 4바이트안에 int를 거의 대부분 넣을수있다 너무 큰 저장장치에 넣으면 언더플로우 
// 너무 작은 곧에 넣으면 오버플로우가 생긴다.

var currentScore = 100; //4byte
var currentScore_ = 0.1; //4byte
var currentScore__ = "100"; //
var currentScore___ = true; //1byte

//자바스크립트나 파이썬은 int나 float를 설정해주지 않지만 자바나 c/c++은 문자형태를 잡고 들어간다

