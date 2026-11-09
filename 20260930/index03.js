// Q) 사용자가 입력한 숫자가 10보다 큰지 아닌지 출력해 보자

var a = prompt('숫자 입력:');
if (a > 10){    
    console.log('10보다 크다!');
}else{
        console.log('10보다 작다!');
}


// Q) 속도위반 경고하기 제한속도 50km/h

var speed = prompt('자동차 속도:');
if (speed > 50){    
    console.log('속도위반!');
}else{
        console.log('안전운전중 입니다.');
}

// Q) 합격 or 불합격 80이상이면 합격 이하면 불합격 

var score = prompt('점수를 입력해주세요.:');
if (score >=80){
    console.log('합격입니다. 축하드립니다.');
} else {
    console.log('불합격입니다.')
}

// Q) 자동 주문 시스템 만들기 

/*
다국어를 지원하는 식당에서 사용할 자동 주문 시스템을 만들고자 합니다
1번을 누르면 한국어로 2번을 누르면 영어로 3번을 누르면 중국옳 그외 번호는 영어로 주문을 받는 프로그램을 만들어봅시다. 
1번: 주문하시겠어요?
2번 Would you like to order?
3번 您想点餐吗？
*/

var language = Number(prompt('언어를 선택하세요.: 1.한국    2.English   3.中國'));
if (language === 1){
    console.log('주문하시겠어요?');
} else if (language === 2){
    console.log('Would you like to order?');
} else if (language === 3){
    console.log('您想点餐吗？');
} else {
    console.log('Can you again?');
}


// Q) 국가재난지원금 수령액 조회하기
/*
다음은 가구 인원수에 따른 국가재난지원금 수령액을 안내하는 프로그램입니다. 
표를 참고하여 프로그램을 만들어봅시다. 

1인가구 400,000원
2인가구 600,000원
3인가구 800,000원
4인가구 이상 1,000,000원

*/

var userMany = Number(prompt('가구원수를 입력하세요.:'));

if (userMany === 1){
    console.log('400,000원입니다.');
} else if (userMany === 2) {
    console.log('600,000원입니다.');
} else if (userMany === 3) {
    console.log('800,000원입니다.');
} else if (userMany >= 4) {
    console.log('1,000,000원입니다.');
}


// Q) BMI 지수 & 비만 상태 출력하기 
/* 
사용자가 몸무게와 신장을 입력하면 BMI지수와 비만 상태를 출력하는 프로그램을 만들어보자 

BMI = 몸무게 / 키의 제곱
18.5 미만 : 저체중
18.5 ~ 22.9 : 정상
23.0 ~ 29.9 : 비만 1단계
30.0 ~ 34.9 : 비만 2단계
35.0 ~ : 비만 3단계
*/

var height = prompt('신장을 입력해주세요.:');
var weight = prompt('몸무게를 입력해주세요.:');
var BMI = (weight / (height ** 2));
console.log(`BMI = ${parseInt}`)

if (BMI < 18.5){
    console.log('저체중 입니다.');
} else if (BMI >= 18.5 && BMI <=22.9) {
    console.log('정상체중입니다.');
} else if (BMI >= 23.0 && BMI <=29.9) {
    console.log('비만 입니다.');
} else if (BMI <= 30.0 && BMI <= 34.9) {
    console.log('고도비만 입니다.');
} else if (BMI >= 35 ) {
    console.log('초고도비만 입니다.');
}


/*
사용자가 입력한 정수에 대해서 음수 0 양수를 판단하고 출력한 후 양수라면 홀수인지 짝수인지 출력

*/

/*
var myNumber = Number(prompt('정수입력:'));

if myNumber < 0 {
    alert('음수');
} else if (myNumber = 0){
    alert('0');
} else if (myNumber = 0){
    alert('양수');
} 
*/

// Q) 버스 전용차로 단속 프로그램
/* 
다음 요구사항을 참고하여 버스 전용차로 단속 프로그램을 만들어봅시다. 
    - 버스 전용차로에 버스가 아닌 승용차가 주행할 경우 단속한다. 
    - 단 토요일 및 공휴일은 단속을 하지 않는다
 요일을 입력 받자!
 평일이라면 차종(버스,승용차) 입력!
 차종이 승용차라면 '단속!' 그렇지 않으면 통과!
*/

var day = prompt('요일을 입력하세요:');
// var carType = prompt('차량 종류를 입력하세여: ');

if (day === '월','화','수','목','금'){
    var carType = prompt('차량 종류를 입력하세여: '); 
    if (carType === '승용차'){
        console.log('경고 입니다.')
    }else if (carType === '버스'){
        console.log('정상 입니다.')
    }
} else if (day === 토,일){
    console.log('단속을 시행하지 않습니다.')

}else{
    console.log('다시 입력해주세요.');
}

/*
출생연도 끝자리(endBirthdayYear)와 나이(age)를 입력하면 
다음 요구사항에 맞춰 마스크 구매 가능한 요일을 출력하는 프로그램을 만드시오.
 - 공적마스크 판매 관련해서 출생연도 끝자리를 이용한 5부제를 다음과 같이 실시한다. 
    1,6: 월요일 구매 가능
    2,7: 화요일 구매 가능
    3,8: 수요일 구매 가능
    4,9: 목요일 구매 가능
    5,0: 금요일 구매 가능
- 만 65이상 어르신은 언제든지 구마 가능하다.
*/
var endBirthYear = Number(prompt('출생연도 끝자리 입력:'));
var age = Number(prompt('나이 입력: '));

if (age < 65) {
    // 출생연도
    if (endBirthYear === 1 || endBirthYear === 6) {
        console.log('월요일 구매 가능!!');
    } else if(endBirthYear === 2 || endBirthYear === 7) {
        console.log('화요일 구매 가능!!');  
    } else if(endBirthYear === 3 || endBirthYear === 8) {
        console.log('수요일 구매 가능!!');
    } else if(endBirthYear === 4 || endBirthYear === 9) {
        console.log('목요일 구매 가능!!');
    } else if(endBirthYear === 5 || endBirthYear === 0) {
        console.log('금요일 구매 가능!!');
    }
}else{
    alert('언제든지 구매가 가능합니다.')
}






