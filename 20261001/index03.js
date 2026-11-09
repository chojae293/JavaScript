// var consumption = Number(prompt('전기 사용량: 단위(kwh)'));

/*
if (consumption <= 200){
    alert('910 + 99.3 * consumption');
} else if (201< consumption <= 400) {
    alert('1600 + 187.9 * comsumption');
} else {
    alert('7300 + 280.6 * consumption');
}
*/

// Q) 전기사용료 구하기
/*
var basicPrice = 0;
var unitPrice = 0;

if (comsumption <= 200){
    basicPrice = 910;
    unitPrice = 99.3;
} else if (comsumption <= 400){
    basicPrice = 1600;
    unitPrice = 187.9;
} else {
    basicPrice = 7300;
    unitPrice = 280.6;
}

var totalPrice = basicPrice + (comsumption * unitPrice);
console.log(`${totalPrice}원`);
*/

// Q) 삼항 연산자와 if-else문 이용 프로그램 만들기
/*
var testScore = Number(prompt('시험점수 입력:'));

var result = testScore >= 85 ? 'success' : 'fail';
alert('result');

if (testScore >= 85) {
    alert('success');
} else {
    alert('fail');
}
*/

// Q) 어린이 놀이기구 탑승 가능여부 구하기
/*
var childHeight = Number(prompt('어린이의 신장은:'));

if (childHeigh >= 120 && <=160) {
    alert('탑승 가능');
} else {
    alert('탑승 불가');
}
*/

// Q) 기온 따른 메시지 출력
/*
var morningLow = Number(prompt('아침 최저 기온 입력:'));
var noonHigh = Number(prompt('오후 최고 기온 입력:'));
var temperatureGap = noonHigh - morningLow

if (temperatureGap >= 10) {
    alert('감기 조심하세요.');
} else {
    alert('초여름 날씨입니다.');
}
    
*/

// Q) 문자메시지 발송 길이


// Q) 2~8 사이의 짝수 출력하자!

for (var i = 2; i <= 8; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Q) 1~10 사이의 정수를 출력하되, 정수가 3의 배수이면 '3의 배수!' 출력하기

for (var i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log(`${i} 3의 배수!`);
    }
}

// Q)  for문을 이용해서 1~100까지 정수 중에서 3과 7의 공배수와 최소공배수를 출력하시오
//2가지 방법

var minNum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 7 === 0) {
        console.log(`${i} 3과 7의 공배수!`);
        if (minNum === 0) {
            minNum = i;
            console.log(`${i} 3과 7의 최소공배수!`);
        }  
    }
}


for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 7 === 0) {
        console.log(`${i} 3과 7의 공배수!`);
    }   
}

// Q) 0~100까지 정수 중 3과 8의 공배수와 최소공배수 출력하기

for (var i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 8 === 0) {
        console.log(`${i} 3과 8의 공배수!`);
        if (i === 24) {
            console.log(`${i} 3과 8의 최소공배수!`);
        }
    }
}



// Q)369 게임 만들기
/*
친구들끼리 많이 하는 369 게임을 만들어 봅시다.
1부터 99까지 1씩 증가하면서 숫자에 3, 6, 9가 들어 있을 때마다
숫자와 함께 '짝!' 을 출력합니다. 
*/

for (var i = 1; i <= 99; i++) {
    if (i % 10 === 3 || i % 10 === 6 || i % 10 === 9) {
        console.log(`${i} 짝!`);
    }
}

for(var i = 1; i <= 99; i++) {
    if(i < 10) {
        var str = '';
        if(i % 3 === 0) 
            str = '짝!';

        console.log(`일의자리수:${i} :: ${str}`);  

    }else{
        var firstNum = parseInt(i/10);   //십의자리수
        var secondNum = i % 10;          //일의자리수
        var str = '';                    //없을때

        if(firstNum % 3 === 0)
            str += '짝!';

        if(secondNum % 3 === 0 && secondNum !== 0)
            str += '짝!';

        console.log(`십의자리수:${firstNum}, 일의자리수:${secondNum} :: ${str}`);
    }
}



// Q) 열차 교차 시간 알아내기

/*
대전역에는 3개 노선의 열차가 오전 9시부터 오후 6시까지 교차 운행한다.
3대의 열차가 교차하는 시간을 구해 열차 충돌 사고를 막으세요.
(단 매일 오전 9시에 대전역에서 모든 열차가 출발한다.)
A열차 첫차(오전 9시) 막차(오후 6시)    운행간격(10분)
B열차 첫차(오전 9시) 막차(오후 6시)  운행간격(25분)
C열라 첫차(오전 9시) 막차(오후 6시)  운행간격(30분) 
*/

var trainA = 10;
var trainB = 25;
var trainC = 30;


for (var i = 0; i <= 540; i++) {
    var clashTime = `${9 + parseInt(i/60)}시 ${i % 60}분`;
    if (i % trainA === 0 && i % trainB === 0 && i % trainC === 0) {
        console.log(`ABC 충돌시간: ${clashTime}`);
    }else if (i % trainA === 0 && i % trainB === 0) {
        console.log(`AB 충돌시간: ${clashTime}`);
    }else if (i % trainA === 0 && i % trainC === 0) {
        console.log(`AC 충돌시간: ${clashTime}`);
    }else if (i % trainB === 0 && i % trainC === 0) {
        console.log(`BC 충돌시간: ${clashTime}`);
    }else if (i % trainA === 0) {
        console.log(`CA 충돌시간: ${clashTime}`);
    }
}


