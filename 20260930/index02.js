/*
조건부(if,switch)
if문, if ~ else문, if ~ else if문
if문 : 단일 선택
if (조건식){
    실행문

}
*/

// console.log('10은 5보다 크다!'); 어쩔때는 ``하는데 이유가 뭐지?

if (10 > 5){    //조건이 true라면 실행 아니면 실행x
    console.log('10은 5보다 크다!');
}

/*
if ~ else문 : 양자 택일
만약 시험 점수가 80이상이면 '합격'을 출력
그렇지 않으면 '불합격'을 출력 
*/

var score = 70;
if (score >= 80) {
    console.log('합격');
}

if (score < 80) {
    console.log('합격');
}

if (score >= 80) {
    console.log('합격');
} else{
    console.log('불합격');
}

// if ~else if문 : 다중 선택

/*
    점수가
    90이상이면    --> 'A'
    80이상 90미만이면    --> 'B'
    70이상 80미만이면    --> 'C'
    60이상 70미만이면    --> 'D'
    50이상 60미만이면    --> 'E'
    40이상 50미만이면    --> 'F'

*/

score = 50;

if (score >= 90){
    console.log('A'); 
}

if (score < 90 && score >= 80){
    console.log('B');
}

if (score < 80 && score >= 70){
    console.log('C');
}

if (score >= 90){
    console.log('A'); 
}else if(score >= 80) {  //휴먼 에러가 생길수있음 조건에 (score < 80 && score >= 70) 이런식으로 하는게 좋음 
    console.log('B');
}else if(score >= 70) {
    console.log('c');
}else if(score >= 60) {
    console.log('d');
}else {
    console.log('F');
}

/*
switch문:
    switch(값){
    case 경우:
        break;
    case 경우2:
        break;
    case 경우3:
        break;
}
*/

var now = new Date();
console.log(`now:${now}`);

var year = now.getFullYear(); // 2026
var month = now.getMonth();   // 0 ~ 11 : 8
var date = now.getDate();     // 30 
var day = now.getDay();       // 0 ~ 6 : 3

console.log(`year: ${year}`);
console.log(`month: ${month}`);
console.log(`date: ${date}`);
console.log(`day: ${day}`); // 0(일요일),

var dayString = '';
switch(day) {    // 3      switch -> 숫자를 변수값으로 변환  
    case 1:
        console.log('월요일');
        dayString = '월';
        break;
    case 2:
        console.log('화요일');
        dayString = '화';
        break;
    case 3:
        console.log('수요일');
        dayString = '수';
        break;
    case 4:
        console.log('목요일');
        dayString = '목';
        break;
    case 5:
        console.log('금요일');
        dayString = '금';
        break;
    case 6:
        console.log('토요일');
        dayString = '토';
        break;
    case 0:
        console.log('일요일');
        dayString = '일';
        break;
    default:
        console.log('모르겠어요.');
        break;
}

// 오늘 날짜 출력
console.log(`${year}년 ${month + 1}월 ${date}일 ${dayString}요일`)












