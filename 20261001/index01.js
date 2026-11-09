var today = new Date();
var date = today.getDate();
console.log(`오늘 날짜: ${date}`)

var carNum = Number(prompt('차량번호 입력:'));

if (date % 2 === 0) {
    /*
    if (carNum % 2 === 0)
        alert('입차 가능');
    else
        alert('입차 불가');
    */
   carNum % 2 === 0 ? alert('입차가능') : alert('입차 불가'); 

}else {

    if (carNum % 2 === 1)
        alert('입차 가능');
    else
        alert('입차 불가');

}