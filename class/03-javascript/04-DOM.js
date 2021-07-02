//DOM = 자바스크립트 파일을 가지고 html문서에 적용할 수 있는 것

document.write("")

//To do 1.자바스크립트에서 html접속
//2.html 문서에 있는 태그 선택
//3.태그의 내용을 가져온다
//4.그 내용에 원하는 데이터를 덮어쓰기한다

//console.log(document.getElementById("hello"))
//자바스크립트 코드는 위에서부터 처리되기때문에 


// const asd = () => {
//     document.getElementById("hello").innerText = "반갑습니다"
// };


// const asd = () =>{
//     const count = document.getElementById("number").innerText; //*count = 0
//     document.getElementById("number").innerText = Number(count) + 1;
// }


// const aaa = () =>{
//     const count = document.getElementById("randomNumber").innerText; //count에 담을 필요없음
//     document.getElementById("randomNumber").innerText = String(Math.floor(Math.random()*1000000)).padStart(6, "0")
// };

const aaa = () =>{
    const token = String(Math.floor(Math.random()*1000000)).padStart(6, "0");//변수에 수식을 담아준다
    document.getElementById("randomNumber").innerText = token;
}//.innerText=태그와 태그사이의 공간에 있는 내용
//innerText공간에 token 수식을 담아준다

