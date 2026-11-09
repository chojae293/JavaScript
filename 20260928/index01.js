alert('hello');

//object란 관련된 데이터를 하나로 묶어놓은것,object(객체)는 여러값을 키(key)와 값(value)의 쌍으로 묶어 표현하는 자료구조


/* 
Number(10,50,80,3.14), string("Hello","world")

*/

var height = 188;
var weight = 86;
var name = "chanho";
var age = 50;

var man = {              //할당연산자
    height:188,
    weight:85,
    myName:"chanho",
    age: 50
}



console.log("man:",man);


var friendMan =man;
console.log("friendMan:",friendMan);

friendMan.myname ="chanho";

console.log("--------------------------")

console.log("man:",man);
console.log("friend:",friendMan)



//primitive type(기초데이터 타입) reperence type(참조타입)

console.log('height:',height);  //188
height = 190;
console.log('height:',height);  //190

var friendHeight = height;
console.log('friendHeight:',friendHeight); //200

friendHeight =200;
console.log('height:',height);
console.log('friendHeight:',friendHeight);


// 참조 타입을 깊은 복사 방법?
var obj1 = {
    myName: 'gildong'
}

//var obj2 = obj1:      //앝은 복사 
var obj2 ={ ...obj1 };   //깊은 복사(스프래드 연산 , 전개 연산)

obj1.myName = "kimho";

console.log('obj1:',obj1);   //kimho
console.log('obj2:',obj2);   //gildong



//Object 사용 방법
//1. object 선언 방법
var ourClass = {
    className: "1학년 1반",
    classLocation: "4층",
    classStudentCount: 20,
    classTeacherName: "홍길동"
}

//2. Object 데이터 조회 방법: .(도트접근 연산자) 이용
console.log('classLocation:',ourClass.classLocation);

//3. Object 데이터 변경 방법: .(도트접근 연산자)이용
ourClass.classLocation = "5층";

//4.Object 데이터 삭제 방법: delete & .(도트접근 연산자) 이용
delete ourClass.classLocation;
console.log('ourClass:',ourClass);

//5. object의 valre에는 모든 데이터 타입이 들어갈 수 있다. *****
var object01 = {
    key1: "abc",
    key2: 100,
    key3: 3.14,
    key4: true,
    key5:{
        key6:1000,
        key7:"Hello",
        key8:false,
    }
}


//Q1) 두 값을 서로 변경하자
var number01 = 10;
var number02 = 20;

console.log('number01:',number01);
console.log('number02:',number02);

var temp = number01;
number01 = number02;
number01 = temp;

console.log('number01:',number01);
console.log('number02:',number02);

