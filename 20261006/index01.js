/*
document.addEvantListener('DomcontentLoaded',doDocumentReady);

function doDocumentReady(){
    console.log('doDocumentReady() CALLED!!')
}
   var divEle =  document.querySelector('#wrap');
   console.log(`divEle: ${divEle}`);
*/

/*
var divEle =  document.querySelector('#wrap');
console.log(`divEle: ${divEle}`);
*/

/*
document.addEvantListener('DomcontentLoaded',function(){
    console.log('doDocumentReady() CALLED!!')
});

   var divEle =  document.querySelector('#wrap');
   console.log(`divEle: ${divEle}`);

   이렇게도 쓴다 함수명이 필요가 없기에 넣어버린다 
   */


/*
document.addEvantListener('DomcontentLoaded',function()){
    console.log('doDocumentReady() CALLED!!')
}
*/

/* 이제 안씀
    var divEle =  document.querySelector('#wrap');
    console.log(`divEle: ${divEle}`);

var divEleByClassName = document.getElementsByClassName('div_wrap');
console.log(`divEleByClassName: ${divEleByClassName}`)
console.log(`divEleByClassName: ${divEleByClassName[0]}`)
console.log(`divEleByClassName: ${divEleByClassName[1]}`)

document.getElementsByTagName('')
*/

/*
//밑에걸 쓴다 
document.querySelector('#wrap')  //CSS선택자 넣기
    var divEle = document.querySelector('#wrap');
    console.log(`divEle:${divEle}`)

    document.querySelector(#wrap > p)
*/

var colorPicker = document.querySelector('#colorPicker');
console.log(`colorPicker: ${colorPicker}`);

var colorPickerValue = colorPicker.value;
console.log(`colorPickerValue: ${colorPickerValue}`);

var pEle = document.querySelector('#colorText');
console.log(`pEle: ${pEle}`);
console.log(`pEle textContent: ${pEle.textContent}`); // textContent : 컬러코드검색
//컬러코드검색이라는 p에 색상코드를 넣어주기 
pEle.textContent = colorPickerValue


var inputEle = document.querySelector('#colorPicker')
console.log(`inputEle: ${inputEle}`);

var inputEleValue = inputEle.value;
console.log(`inputEle:${inputEleValue}`);

var pEle = document.querySelector('#colorText')
console.log(`pEle: ${pEle}`);

var pEleTextContent = pEle.textContent;
console.log(`pEleTextContent:${pEleTextContent}`);

pEle.textContent = `${pEleTextContent}:${inputEleValue};`

inputEle.addEventListener('change', function(){    //change는 input으로 변경할수있는데 change는 완료된 value값을 주고 input은 완료되기전 상태를 본다 
    console.log('input value CHANGE!!');

    pEle.textContent = `${pEleTextContent}:${inputEle.value}`;

    var bodyEle = document.querySelector('body');
    bodyEle.style.backgroundColor = inputEle.value;

    


});