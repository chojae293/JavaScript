/* 
상수(Constant)란 한 번 정해진 값을 변경할 수 없는 변수를 말한다.
즉, 값이 고정되어 있는 데이터를 저장할 때 사용한다. 
그리고 상수는 일반적으로 대문자와 스네이크 표기법을 사용한다.
(예외적으로 파이썬은 상수가 없다.)
*/

const PI = 3.14;
const TAX_RATE = 0.1;
const MAX_SPEED = 100;

//PI = 3.141592;

//const SCORE; 선언만 할수없고 초기화가 같이 이루어져야함

var SCORE;
SCORE=1;   //var는 선언만 하고 초기화가 나중에 이루어져도

const user = {
    name:"홍길동",
    age:25
};

console.log('user:',user);

// user ={
//     name:"박찬호"
// };

user.name ="박찬호";           //참조에서 name만 바꾼거다. 즉,상수를 건들지 않고 key값을 바꾼것
console.log('user:',user);  

