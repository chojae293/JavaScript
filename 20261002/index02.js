// 매개변수
function printHello(name, age, add) {       // name ='길동'
    console.log(`${name}님 안녕하세요. 나이: ${age}, 주소: ${add}`);
}

printHello('찬호',20,'대전');


//매개변수 - 가변인자 

/*
학교에서 선생님의 요구 : 우리반 총학생 3명의 시험점수 총합과 평균을 구하는 프로그램을 개발해 주세요

*/

/*
function printTotalAndAverageScore(student1, student2, student3) {
    var totalScore = student1 + student2 + student3;
    var averageScore = totalScore / 3;

    console.log(`총점: ${totalScore}`);
    console.log(`평점: ${averageScore}`);
}

printTotalAndAverageScore(80,90,100);

*/

/*
요구사항 정의서
1. 선생님은 해당 학급 학생 시험점수를 입력한다.
2. 선생님은 해당 학급의 이름을 입력한다.
3. 입력된 모든 학생의 시험점수 총점과 평점 그리고 학급이름도 출력한다.
학급이름: 3-3
학생수: 3
총점: 270점
평점: 90점
*/


// var classname;   // 학급 이름(3-3)
// var scores = [];      // 학생 시험 점수들 ([80,90,100])     //전역변수를 setData안으로 옮기기 옮기는 이유는 초기화가 필요한 곳이 setData고 

function printTotalAndAvg(clsName,scs) {

    var className = clsName;
    var scores = scs;

    console.log(`학급 이름: ${className}`);
    console.log(`학급수: ${scores.length}`);
    var totalScore = 0;
    for (var i = 0; i < scores.length; i++){
        totalScore += scores[i];
    }
    console.log(`총점:${totalScore}`)
    console.log(`총점:${totalScore/scores.length}`)
}
 
function setData() {
    var className;   // 학급 이름(3-3)
    var scores = [];      // 학생 시험 점수들 ([80,90,100])

    className = prompt('학급 이름 입력 하세요');
    
    var flag =true;
    while(flag) {
        var selectMenu = Number(prompt('1.점수 입력   2.출력&종료'));
        switch(selectMenu) {
            case 1:   //학생 점수 입력 시도
                var scores = Number(prompt('학생 점수 입력하세요'))  // 3-3
                scores.push(score)
                break;
            case 2:         //출력 하고 종료
                flag =false;
                printTotalAndAvg(className,scores);
                break;
        }
    }
}

setData();

