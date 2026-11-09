// Q) 생존율 출력 프로그램

var useAed = Number(prompt('AED 사용까지 걸린 시간: (단위: 초(s))'));

if (useAed <= 60) {
    alert('85%');
} else if (useAed <= 120){
    alert('76%');
} else if (useAed <= 180){
    alert('66%');
} else if (useAed <= 240){
    alert('57%');
} else if (useAed <= 300){
    alert('47%');
} else {
    alert('25% 미만');
}