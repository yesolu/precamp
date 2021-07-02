// const timer = () =>{
//     setTimeout(()=>{
//         console.log("hello");
//     }, 2000);
// }

// const timer = () =>{
//     setInterval(()=>{
//         console.log("hello");
//     }, 2000);
// }
//setTimeout =>몇초 뒤에 우리가 만든 기능 실행
//setInterval => 몇초 마다 우리가 만든 기능 실행

// const timer = () =>{
//     let count = 10;

//     setInterval(()=>{
// //count===0 -> count>0
//         if(count>0){
//             count = count -1;
//             document.getElementById("number").innerText = count;
//         }   
//     }, 500);
// }


// const timer = () => {
// //function timer(){}
//     let count = 180;

//     setInterval(() => {
//         //일정한 시간마다 박스 안에 내용 반복
//         if(count >0){
//             count = count -1;
//             //->179~178~
//             let min = Math.floor(count / 60);
//             //몫의 소수점 버려줘야함
//             let sec = count % 60;

//             document.getElementById("number").innerText = min + " : " + sec ;
//         }  
//          //문자열을 더한 순간 앞 뒤 숫자를 모두 문자열로 인식
//     }, 100);
// }

const aaa = () => {
    
    const token = String(Math.floor(Math.random()*1000000)).padStart(6, "0");
    document.getElementById("randomNumber").innerText = token;
        
    let count= 10;
    
    setInterval(()=>{
        if(count > 0){
            count = count - 1;
            document.getElementById("number").innerText = count;
        }
        
        if(count === 0) {
        document.getElementById("btn").setAttribute('disabled', true);}
    }, 1000);

}
