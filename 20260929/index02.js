// 반복문 (for문, while문)
// for문: 횟수에 의한 반복 실행
// while문: 조건에 의한 반복 실행

/* 
for(초기화; 조건식; 단계) {
    반복실행문
}
*/
for(var i = 1; i < 11; i++) {
    console.log('hello', i);
}

// 1부터 10까지의 정수의 합
var sum=0
for(var i = 1; i <= 10; i++){
    //sum = sum +i;
    sum += 1;
} 
console.log(`sum: ${sum}`); //55

/*

#1부터 N까지의 정수의 합을 구하는 알고리즘을 서술 #코테 중간난이도

1~10
(1+n)*(n/2)

*/

// Q) 1~10까지의 정수의 합을 구하되, 홀수의 합을 구하자

for(var i = 1; i <= 10; i+=2){
    sum += 1;
} 
console.log(`sum: ${sum}`);

// Q) 사용자가 원하는 구구단을 입력하면 해당 구구단이 출력된다. 7 -> 7단 출력

/*
var num = 7
for(var i = 1; num <= 9; i++){
    num += 1;
} 
console.log(`i: ${i*num}`);
*/

/*
var userInputNumber = Number(prompt('원하는 구구단 입력:'));
for (var i = 1; i < 10; i++){
    console.log(`${userInputNumber} * ${i} = ${userInputNumber * i}`);
}
*/


/*
1~9구구단 전체 입력 
for(var Num = 1; Num < 10; Num++){
    for (var i = 1; i < 10; i++){
        console.log(`${Num} * ${i} = ${Num * i}`);
    }
}
*/

// 열로 나오는 구구단 방법
for(var i = 1; i < 10; i++){
    var result = '';
    for (var Num = 1; Num < 10; Num++){
        //result += Num + '*' + i '=' +(Num * i) + '\t';
        result += `${Num} * ${i} = ${Num * i} \t`;
    }
    console.log(result)
}