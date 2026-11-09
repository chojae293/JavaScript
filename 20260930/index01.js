/*
// 열로 나오는 구구단 방법
for(var i = 1; i < 10; i++){
    var result = '';
    for (var Num = 1; Num < 10; Num++){
        //result += Num + '*' + i '=' +(Num * i) + '\t';
        result += `${Num} * ${i} = ${Num * i} \t`;
    }
    console.log(result)
}
*/


// for ... in문 for 변수 안에 넣어서 꺼내쓰기 
var myInfo = {
    myName : 'gildong',
    myAge : 20,
    myAddr : '대전',
    myPhone: '010-1234-4567'
}

for (var info in myInfo) {
    console.log(`info:${info}`);
    console.log(`${myInfo[info]}`);  // myInfo[myName]
}

/*while문 
while(조건식){
    반복실행문
}
for(초기값; 조건식; 단계)


*/

var i =1
while(i <11){
    console.log(`i:${i}`);  //1 2 3 4 5 ... 10 
    i++;
}
console.log(`i out:${i}`);  //11

// do{ } while문  > 최초의 한번은 실행
var j = 1;
do {
    console.log(`j:${j}`);
    j++;
}
while(j > 100);







